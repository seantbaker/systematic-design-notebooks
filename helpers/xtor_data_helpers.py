from scipy.io import loadmat
import pandas as pd
import numpy as np

def load_mat_data(data_path):
    """
    Quick function to load up .mat files provided by Prof. Murmann.
    Uses 'loadmat' from scipy.io to do the heavy lifting

    Args: 
    data_path: string with path to the .mat file we're loading

    Returns:
    xtor_data: DataFrame full of transistor data from the .mat file
    """

    # load up our .mat file, and select out the actual data
    print(f"Loading data from {data_path}")
    xtor_mat = loadmat(data_path, squeeze_me=True)

    # is the .mat file for nch or pch data?
    if ("nch" in data_path):
        xtor_data = xtor_mat['nch']
    if ("pch" in data_path):
        xtor_data = xtor_mat['pch']

    # first, let's get column names from the dtypes of the numpy
    # array that we got from reading in the .mat file
    xtor_data_cols = list(xtor_data.dtype.fields.keys())
    print(f"Found the following columns: {xtor_data_cols}")

    # now, i think I can get the dataset, compressed down to a single
    # row (we'll expand it later), with this:
    xtor_data_df = pd.DataFrame(xtor_data.item())
    xtor_data_df = xtor_data_df.T
    xtor_data_df.columns = xtor_data_cols

    # create a list of the columns that contain measured (dependent) data
    meas_cols = ['ID', 'VT', 'GM', 'GMB', 'GDS', 'CGG', 'CGS', 
                 'CGD', 'CGB', 'CDD','CSS', 'STH', 'SFL']
    
    # Ok, so it looks like the outermost sweep (and the first
    # to explode) is 'L', then 'VDS', 'VGS', and 'VSB' last.
    # I'm putting each step into a temporary df out of an abundance
    # of caution
    df1 = xtor_data_df.explode(meas_cols + ['L'], ignore_index=True)
    df2 = df1.explode(meas_cols + ['VGS'], ignore_index=True)
    df3 = df2.explode(meas_cols + ['VDS'], ignore_index=True)
    df4 = df3.explode(meas_cols + ['VSB'], ignore_index=True)

    # store the final results in our original df
    xtor_data_df = df4.copy()

    # clean up the datatypes of some columns. If a column can't be
    # converted to a numerical type, ignore. This is obviously not very
    # robust, but for now we're working with known data, and I've got
    # a lot of other things to build
    for col in xtor_data_df.columns:
        xtor_data_df[col] = pd.to_numeric(xtor_data_df[col], errors='ignore')

    # not totally sure why, but VDS, VGS and VSB sometimes have trailing values,
    # so we should round those off
    for col in ['VGS', 'VDS', 'VSB', 'L']:
        xtor_data_df[col] = pd.to_numeric(xtor_data_df[col]).round(3)

    # add some columns we'll want to use later
    xtor_data_df['GM_ID'] = xtor_data_df['GM'] / xtor_data_df['ID']
    xtor_data_df['JD'] = xtor_data_df['ID'] / xtor_data_df['W']
    xtor_data_df['GM_GDS'] = xtor_data_df['GM'] / xtor_data_df['GDS']
    xtor_data_df['GM_CGG'] = xtor_data_df['GM'] / xtor_data_df['CGG']
    
    return xtor_data_df

def lookup(df, param, target):
    # general idea here: we're going to insert
    # new rows in the dataframe for each value of 'L',
    # assign the value of 'param' to 'target', then use
    # the interpolate() function for each 'L'.

    # big assumption: it's fine to base all of this on 'L',
    # instead of allowing users to specify which param they
    # want to use as an 'anchor' (for lack of a better word) 
    # for inserting new rows

    # another assumption: the existing values of 'param'
    # within the original dataframe 'df' are monotonic, and
    # we don't have to worry about the possibility of multiple
    # options for where 'target' could sit in the data

    # create the DataFrame that we'll return
    lookup_df = pd.DataFrame()

    # loop through each value of 'L' in the dataframe
    for l, group in df.groupby('L'):
        
        # I don't think we want to extrapolate; if the target value
        # is outside the bounds of the existing values for param,
        # skip this length
        if ((group[param].min() > target) | (group[param].max() < target)):
            print(f"The target of {target:.2e} for {param} is outside\
                  the existing data for length {l}; skipping")
            continue
        
        # create a blank row with the same columns as df
        new_row = pd.DataFrame(np.nan, index=[0], columns=df.columns)

        # put in our 'target' value
        new_row['L'] = l
        new_row[param] = target

        # create a new DataFrame out of this group with the
        # new row added in
        interp_df = pd.concat([group, new_row], ignore_index=True)

        # sort then interpolate! note that pandas will only interpolate
        # by the index, so we'll temporarily use the 'param' column
        # as the index
        interp_df = (interp_df
                     .set_index(keys=param)
                     .sort_index()
                     .interpolate(method='index')
                     .reset_index()
                     )
        # print(interp_df)

        # grab the row of interpolated data
        interp_row = interp_df[interp_df[param] == target]

        # add that row to our new dataframe, lookup_df
        lookup_df = pd.concat([lookup_df, interp_row])

    return lookup_df, interp_df

def scale(df, scale_factor, cols=None):
    """
    Scale device data given in df by some factor.

    Typically used in denormalization; once you have a required gm,
    use this function to find the required device dimensions and paramters

    Args: 
    df: DataFrame with the original, normalized device data
    cols: optional; scale all appropriate columns by default, unless this is specified
    scale_factor: scaling factor to use

    Returns:
    scaled_df: DataFrame with scaled / denormalized device data
    """

    if cols is None:
        cols = ['W', 'ID', 'GM', 'GDS', 'CGG', 'CGS', 'CGD',  'CGB', 'CDD', 'CSS',]

    # make a copy of the input dataframe. I'm still not 100% when this is
    # truly needed, but the datasets aren't large enough that copying would
    # slow us down, so might as well be safe
    scaled_df = df.copy()

    scaled_df[cols] = scaled_df[cols].apply(lambda x: x * scale_factor)

    return scaled_df