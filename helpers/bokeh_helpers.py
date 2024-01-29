# collection of functions for simplifying plotting with Bokeh

from bokeh.plotting import figure
from bokeh.models import Legend

def create_bokeh_plot(
    title=None,
    x_axis_label=None,
    x_axis_type='linear',
    x_range=None,
    y_axis_label=None,
    y_axis_type='linear',
    y_range=None,
    width=600,
    height=600,
    tooltips=None,
):

    # if no tooltips are supplied, just show x & y coordinates
    if tooltips is None:
        tooltips = [
            ("x", "$x"),
            ("y", "$y")
        ]

    fig = figure(
        title=title,
        x_axis_label=x_axis_label,
        y_axis_label=y_axis_label,
        x_axis_type=x_axis_type,
        y_axis_type=y_axis_type,
        tooltips=tooltips,
        width=width,
        height=height,
    )

    # todo: make legends interactive by default. The tricky
    # bit is we can't make the legend interactive unless we
    # actually have a legend, which would typically happen
    # automatically when we add lines, scatter, etc. to our
    # figure. I know we can do this, just need some time to
    # look at the docs to figure out how, and that's not a priority
    # right now.
    
    # fig.add_layout(Legend)
    # fig.legend.click_policy = 'hide'

    # if x_axis_type is not None:
        # fig.x_axis_type = x_axis_type

    # if y_axis_type is not None:
        # fig.y_axis_type = y_axis_type

    return fig