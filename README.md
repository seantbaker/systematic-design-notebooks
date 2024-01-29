# Systematic design of analog ICs with Python and Jupyter

This (currently quite simple) repo is setup to demonstrate how we can use
free, open source tools to design analog circuits in a simple, systematic
way. 

This is based off of the book, "Systematic design of Analog CMOS Circuits"
by Paul G.A. Jespers and Boris Murmann. The big idea behind the book is that
for many circuits, we can make our design process systematic and
straight-forward by using pre-computed lookup tables of transistor characterization
data and some simple functions to perform a $\frac{g_m}{I_d}$ sizing methodology.

In this repo, instead of using Matlab functions as shown in the book, 
we'll be using a handful of off-the-shelf Python packages along with 
some helper functions I wrote to simplify some of the code. Everything will be
organized into Jupyter Notebooks, with each example given in the book
in it's own Notebook. Those Notebooks are then stitched together into a Jupyter
Book and hosted in GitHub Pages.

For now I've got the examples covering the design of basic intrinsic gain
stages complete, and I'm hoping to make my way to the differential amplifier
examples in the next two weeks or so.

If you see any bugs, or have an suggestions, please stop by the Discussions
section of the GitHub repository behind this page.