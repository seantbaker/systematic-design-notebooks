# collection of functions for things I do a lot with Pandas,
# primarily visualizing with tables.

import pandas as pd

eng_fmt = pd.io.formats.format.EngFormatter(accuracy=2, use_eng_prefix='True')
eng_fmt_short = pd.io.formats.format.EngFormatter(accuracy=0, use_eng_prefix='True')
eng_fmt_f = lambda x: f'{x*1e15:,.2f}f'
eng_fmt_p = lambda x: f'{x*1e12:,.2f}p'
eng_fmt_n = lambda x: f'{x*1e9:,.2f}n'
eng_fmt_u = lambda x: f'{x*1e6:,.2f}u'
eng_fmt_m = lambda x: f'{x*1e3:,.2f}m'
eng_fmt_K = lambda x: f'{x*1e-3:,.2f}K'
eng_fmt_M = lambda x: f'{x*1e-6:,.2f}M'
eng_fmt_G = lambda x: f'{x*1e-9:,.2f}G'

def pretty_table(df, cols, caption="", col_names=None, col_formats=None, hide_index=True, hide_headers=False, transpose=False):
    # replace column names with more reader-friendly versions
    if col_names is None:
        # if user hasn't supplied column name replacements,
        # use what I think is sensible
        col_names = {
            'GM_GDS': 'A_v0',
            'GM_CGG': 'f_t',
        }
    
    # use these formats by default if not supplied
    if col_formats is None:
        col_formats = {
            'L': '{:.3f}',
            'ID': eng_fmt_u,
            'VT': eng_fmt_m,
            'VDS': eng_fmt_m,
            'VGS': eng_fmt_m,
            'VSB': eng_fmt_m,
            'GM': eng_fmt_u,
            'GMB': eng_fmt_u,
            'GDS': eng_fmt_u,
            'CGG': eng_fmt_f,
            'CGS': eng_fmt_f,
            'CGD': eng_fmt_f,
            'CGB': eng_fmt_f,
            'CDD': eng_fmt_f,
            'CSS': eng_fmt_f,
            'GM_ID': '{:.0f}',
            'JD': eng_fmt_u,
            'A_v0': '{:.0f}',
            'f_t': eng_fmt_G,
        }

    sliced_df = df[cols]

    if (transpose == True):
        sliced_df = sliced_df.T
        hide_index = False
        hide_headers = True
        
        # formatting a transposed table is tricky, so until
        # I work out a better solution, we'll just apply the same
        # format across the Styler (instead of per-column formatting)
        col_formats = eng_fmt

    styled_df = (sliced_df
                 .rename(columns=col_names)
                 .style
                 .set_caption(caption)
                 .format(col_formats)
                 )

    if (hide_index == True):
        styled_df = styled_df.hide(axis='index')

    if (hide_headers == True):
        styled_df = styled_df.hide(axis='columns')

    return styled_df