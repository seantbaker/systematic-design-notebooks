import sphinx
import myst_nb

class RemoveAllInputs(sphinx.transforms.Transform):
    default_priority = 210

    def apply(self):
        for node in self.document.traverse(myst_nb.nodes.CellInputNode):
            node.parent.remove(node)


def setup(app):
    app.add_transform(RemoveAllInputs)

    return {
        'version': '0.0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }