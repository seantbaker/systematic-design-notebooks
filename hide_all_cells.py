import nbformat as nbf
from glob import glob

# Collect a list of all notebooks in the content folder
notebooks = glob("./chap3_basic_sizing/*.ipynb", recursive=True)
print("found the following notebooks:\n")
print(notebooks)

# Text to look for in adding tags
text_search_dict = {
    "# HIDDEN": "remove-cell",  # Remove the whole cell
    "# NO CODE": "remove-input",  # Remove only the input
    "# HIDE CODE": "hide-input"  # Hide the input w/ a button to show
}

tag = "hide-input"

# Search through each notebook and look for the text, add a tag if necessary
for ipath in notebooks:
    ntbk = nbf.read(ipath, nbf.NO_CONVERT)

    for cell in ntbk.cells:
        cell_tags = cell.get('metadata', {}).get('tags', [])
        if tag not in cell_tags:
            cell_tags.append(tag)
        if len(cell_tags) > 0:
            cell['metadata']['tags'] = cell_tags

    nbf.write(ntbk, ipath)