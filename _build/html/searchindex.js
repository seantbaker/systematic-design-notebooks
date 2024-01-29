Search.setIndex({"docnames": ["chap3_basic_sizing/ex3.1_igs", "chap3_basic_sizing/ex3.2_igs_const_gmid", "chap3_basic_sizing/ex3.3_igs_const_ft", "chap3_basic_sizing/ex3.4_igs_const_gain", "chap3_basic_sizing/ex3.5_igs_weak_invrsn", "intro"], "filenames": ["chap3_basic_sizing/ex3.1_igs.ipynb", "chap3_basic_sizing/ex3.2_igs_const_gmid.ipynb", "chap3_basic_sizing/ex3.3_igs_const_ft.ipynb", "chap3_basic_sizing/ex3.4_igs_const_gain.ipynb", "chap3_basic_sizing/ex3.5_igs_weak_invrsn.ipynb", "intro.md"], "titles": ["Example 3.1: Intrinsic Gain Stage", "Example 3.2: Intrinsic Gain Stage, with constant <span class=\"math notranslate nohighlight\">\\(g_m / I_d\\)</span>", "Example 3.3: Intrinsic Gain Stage, with constant <span class=\"math notranslate nohighlight\">\\(f_t\\)</span>", "Example 3.4: Intrinsic Gain Stage, with constant <span class=\"math notranslate nohighlight\">\\(A_{v0}\\)</span>", "Example 3.5: Sizing in weak inversion with a width constraint", "Systematic design of analog ICs with Python and Jupyter"], "terms": {"import": [0, 1, 2, 3, 4], "panda": [0, 1, 2, 3, 4], "pd": [0, 1, 2, 3, 4], "numpi": [0, 1, 2, 3, 4], "np": [0, 1, 2, 3, 4], "sy": [0, 1, 2, 3, 4], "o": [0, 1, 2, 3, 4], "schemdraw": [0, 1, 2, 3, 4], "us": [0, 1, 2, 3, 4, 5], "engin": [0, 1, 2, 3, 4], "format": [0, 1, 2, 3, 4], "tabl": [0, 1, 2, 3, 4], "set_eng_float_format": [0, 1, 2, 3, 4], "accuraci": [0, 1, 2, 3, 4], "2": [0, 2, 3, 4], "use_eng_prefix": [0, 1, 2, 3, 4], "true": [0, 1, 2, 3, 4], "my": [0, 1, 2, 3, 4, 5], "helper": [0, 1, 2, 3, 4, 5], "function": [0, 1, 2, 3, 4, 5], "path": [0, 1, 2, 3, 4], "append": [0, 1, 2, 3, 4], "from": [0, 1, 2, 3, 4], "xtor_data_help": [0, 1, 2, 3, 4], "load_mat_data": [0, 1, 2, 3, 4], "lookup": [0, 1, 2, 3, 4], "scale": [0, 1, 2, 3, 4], "bokeh_help": [0, 1, 2, 3, 4], "bh": [0, 1, 2, 3, 4], "pandas_help": [0, 1, 2, 3, 4], "pretty_t": [0, 1, 2, 3, 4], "bokeh": [0, 1, 2, 3, 4], "plot": [0, 1, 2, 3, 4], "figur": [0, 1, 2, 3, 4], "show": [0, 1, 2, 3, 4], "io": [0, 1, 2, 3, 4], "output_notebook": [0, 1, 2, 3, 4], "model": [0, 1, 2, 3, 4], "columndatasourc": [0, 1, 2, 3, 4], "linearaxi": [0, 1, 2, 3, 4], "range1d": [0, 1, 2, 3, 4], "palett": [0, 1, 2, 3, 4], "turbo10": [0, 1, 2, 3, 4], "transform": [0, 1, 2, 3, 4], "linear_cmap": [0, 1, 2, 3, 4], "hide_bann": [0, 1, 2, 3, 4], "we": [0, 1, 2, 3, 4, 5], "ll": [0, 1, 2, 3, 4, 5], "an": [0, 1, 2, 3, 4, 5], "wai": [0, 5], "walk": [0, 5], "through": [0, 5], "systemat": 0, "design": [0, 1, 2, 3, 4], "flow": [0, 3], "sinc": [0, 3, 4], "i": [0, 1, 2, 3, 4, 5], "root": 0, "both": 0, "common": 0, "sourc": [0, 1, 2, 3, 4, 5], "amplifi": [0, 5], "differenti": [0, 5], "should": [0, 1, 2, 3, 4], "abl": 0, "leverag": 0, "what": [0, 1, 2, 3], "learn": 0, "here": [0, 1, 3], "more": [0, 1, 2], "complex": 0, "If": [0, 1, 2, 3, 4, 5], "insert": 0, "small": 0, "signal": 0, "transitor": [0, 2], "abov": [0, 1, 2, 3, 4], "schemat": 0, "get": [0, 1, 2, 3, 4], "some": [0, 2, 3, 5], "simplifii": 0, "assumpt": [0, 2], "c_": 0, "db": 0, "c_l": [0, 1, 2, 3, 4], "gd": [0, 1, 2, 3, 4], "junction": 0, "capacit": 0, "can": [0, 1, 2, 3, 4, 5], "ignor": 0, "now": [0, 1, 5], "under": 0, "those": [0, 4], "condit": [0, 2], "frequenc": [0, 1, 2, 3, 4], "respons": 0, "approxim": 0, "a_v": 0, "j": 0, "omega": 0, "frac": [0, 1, 2, 3, 4], "v_": [0, 1, 2, 3, 4], "out": [0, 1, 2, 4], "cong": 0, "a_": [0, 1, 2], "v0": [0, 2], "omega_c": 0, "where": [0, 1, 2, 3, 4], "g_": 0, "d": [0, 1, 2, 3, 4], "intr": 0, "anoth": [0, 3], "thing": [0, 1, 2, 4], "note": [0, 2], "uniti": [0, 3, 4], "omega_u": [0, 1, 2], "It": 0, "": [0, 1, 2, 3, 4], "measur": [0, 3], "fanout": [0, 4], "fo": [0, 1, 2, 3], "ratio": 0, "drive": 0, "input": 0, "g": [0, 4, 5], "gb": 0, "gg": 0, "could": [0, 2, 4], "rewrit": 0, "thi": [0, 1, 2, 3, 4, 5], "omega_t": 0, "becaus": [0, 2, 4], "quasi": 0, "static": 0, "transistor": 0, "break": 0, "down": 0, "approach": 0, "about": [0, 2, 4], "10th": 0, "f_t": [0, 1, 3, 4], "moder": 0, "strong": [0, 3], "invers": [0, 3], "want": [0, 1, 2], "keep": 0, "10": [0, 1, 2, 3, 4], "e": [0, 3], "so": [0, 1, 2, 5], "know": 0, "do": [0, 1, 2, 3, 4], "follow": [0, 1, 2, 3, 4], "combin": [0, 2, 3], "f_u": [0, 1, 2, 3, 4], "target": [0, 1, 2, 3, 4], "find": [0, 1, 2, 3, 4], "drain": [0, 2, 3, 4], "current": [0, 2, 3, 4, 5], "devic": [0, 1, 2, 3, 4], "length": [0, 1, 2, 3, 4], "width": [0, 1, 2, 3], "determin": 0, "spec": [0, 1, 2, 4], "pick": 0, "short": 0, "channel": [0, 1], "high": [0, 4], "speed": 0, "low": [0, 2, 4], "area": [0, 1, 2], "long": 0, "improv": 0, "match": 0, "larg": [0, 2], "mpower": 0, "swing": 0, "dsat": 0, "w": [0, 1, 2, 3, 4], "ar": [0, 3, 4], "fix": [0, 3], "But": [0, 1, 2, 3], "need": [0, 1, 2], "constraint": 0, "sai": 0, "base": [0, 1, 4, 5], "mayb": 0, "maxim": 0, "minim": 0, "requir": [0, 1, 2, 4], "which": [0, 1, 2, 3, 4], "mai": 0, "lead": 0, "violat": 0, "guidelin": [0, 1], "right": [0, 1, 2, 3], "level": 0, "complic": 0, "take": [0, 2], "lot": [0, 3], "differ": [0, 1, 2, 3, 4], "factor": 0, "account": 0, "re": [0, 3, 4], "go": 0, "have": [0, 3, 5], "work": [0, 4], "help": 0, "u": [0, 1, 2, 3, 4], "suitabl": 0, "For": [0, 1, 5], "let": [0, 1, 3, 4], "talk": 0, "how": [0, 4, 5], "becom": 0, "j_d": [0, 4], "call": 0, "denorm": [0, 1], "look": [0, 1, 2, 3], "like": [0, 1, 2, 3], "onc": [0, 3], "sb": [0, 1, 2, 3, 4], "plug": 0, "our": [0, 1, 2, 3, 4], "correpsond": 0, "And": 0, "when": [0, 1, 2, 3, 4], "appropri": [0, 1], "assum": [0, 1, 2, 3, 4], "linearli": 0, "narrow": 0, "effect": 0, "doesn": [0, 4], "t": [0, 2, 3, 4], "hold": 0, "ideal": 0, "correspond": [0, 1], "non": 0, "linear": 0, "formula": 0, "good": [0, 1], "place": 0, "ml": 0, "train": 0, "predict": 0, "perform": 0, "physic": 0, "paramet": 0, "concret": 0, "suppos": 0, "ghz": [0, 1, 2, 3, 4], "pf": [0, 1, 2, 3, 4], "180nm": 0, "15": [0, 1, 2, 3, 4], "A": [0, 1, 2, 3, 4, 5], "0": [0, 1, 2, 3, 4], "6": [0, 1, 2, 3, 4], "v": [0, 1, 2, 3, 4], "earli": 0, "voltag": 0, "start": [0, 3, 4], "load": [0, 1, 2, 3, 4], "data": [0, 1, 2, 3, 4], "suppli": 0, "professor": 0, "murmann": [0, 5], "hi": 0, "github": [0, 5], "repo": 0, "first": 0, "up": [0, 1, 2, 3, 4], "nch": [0, 1, 3, 4], "dataset": 0, "nch_data_df": [0, 1, 2, 3, 4], "book": [0, 1, 2, 3, 4, 5], "gm": [0, 1, 2, 3, 4], "id": [0, 1, 2, 3, 4], "main": [0, 1, 2, 3, 4], "starter_kit": [0, 1, 2, 3, 4], "180nch": [0, 1, 2, 3, 4], "mat": [0, 1, 2, 3, 4], "found": [0, 1, 2, 3, 4], "column": [0, 1, 2, 3, 4], "vt": [0, 1, 2, 3, 4], "gmb": [0, 1, 2, 3, 4], "cgg": [0, 1, 2, 3, 4], "cg": [0, 1, 2, 3, 4], "cgd": [0, 1, 2, 3, 4], "cgb": [0, 1, 2, 3, 4], "cdd": [0, 1, 2, 3, 4], "css": [0, 1, 2, 3, 4], "sth": [0, 1, 2, 3, 4], "sfl": [0, 1, 2, 3, 4], "info": [0, 1, 2, 3, 4], "corner": [0, 1, 2, 3, 4], "temp": [0, 1, 2, 3, 4], "vg": [0, 1, 2, 3, 4], "vd": [0, 1, 2, 3, 4], "vsb": [0, 1, 2, 3, 4], "nfing": [0, 1, 2, 3, 4], "user": [0, 1, 2, 3, 4], "sean": [0, 1, 2, 3, 4, 5], "pyenv": [0, 1, 2, 3, 4], "version": [0, 1, 2, 3, 4], "4": [0, 1, 2, 4], "lib": [0, 1, 2, 3, 4], "python3": [0, 1, 2, 3, 4], "site": [0, 1, 2, 3, 4, 5], "packag": [0, 1, 2, 3, 4, 5], "core": [0, 1, 2, 3, 4], "intern": [0, 1, 2, 3, 4], "construct": [0, 1, 2, 3, 4], "py": [0, 1, 2, 3, 4], "576": [0, 1, 2, 3, 4], "visibledeprecationwarn": [0, 1, 2, 3, 4], "creat": [0, 1, 2, 3, 4], "ndarrai": [0, 1, 2, 3, 4], "rag": [0, 1, 2, 3, 4], "nest": [0, 1, 2, 3, 4], "sequenc": [0, 1, 2, 3, 4], "list": [0, 1, 2, 3, 4], "tupl": [0, 1, 2, 3, 4], "shape": [0, 1, 2, 3, 4], "deprec": [0, 1, 2, 3, 4], "you": [0, 1, 2, 3, 4, 5], "meant": [0, 1, 2, 3, 4], "must": [0, 1, 2, 3, 4], "specifi": [0, 1, 2, 3, 4], "dtype": [0, 1, 2, 3, 4], "object": [0, 1, 2, 3, 4], "valu": [0, 1, 2, 3, 4], "arrai": [0, 1, 2, 3, 4], "convert": [0, 1, 2, 3, 4], "With": [0, 2, 3, 4], "interpol": [0, 2, 3, 4], "associ": [0, 3], "jd": [0, 4], "grab": [0, 1, 3, 4], "subsect": 0, "biasing_mask": [0, 1, 2, 3, 4], "18": [0, 1, 2, 3], "lookup_df": [0, 1, 2, 3, 4], "interp_df": [0, 1, 2, 3, 4], "df": [0, 1, 2, 3, 4], "param": [0, 1, 2, 3, 4], "gm_id": [0, 1, 2, 3, 4], "col": [0, 1, 2, 3, 4], "caption": [0, 1, 2, 3, 4], "nmo": 0, "displai": [0, 1, 2, 3, 4], "5": [0, 1, 2, 3], "000000": 0, "180": [0, 1, 2], "56": [0, 1, 3], "78u": [0, 1, 3], "850": [0, 1], "55u": [0, 1, 2, 3], "11": [0, 1, 2, 3], "36u": [0, 1, 2, 3], "599": 0, "15m": [0, 3], "600": [0, 1, 2, 3], "00m": [0, 2, 3], "1pf": 0, "deriv": 0, "pi": [0, 1, 2, 3], "1e9": [0, 1, 2, 3, 4], "1e": [0, 1, 2, 3, 4], "12": [0, 1, 2, 3, 4], "gm_spec": [0, 1, 2, 3], "14159": [0, 1, 2], "print": [0, 1, 2, 3, 4], "f": [0, 1, 2, 3, 4], "The": [0, 1, 2, 3, 4], "1e3": [0, 1, 2, 3, 4], "2f": [0, 3, 4], "m": [0, 1, 3, 5], "28": [0, 1], "283e": 0, "id_spec": 0, "1e6": [0, 2], "ua": [0, 2, 4], "scale_factor": [0, 1, 2, 3], "mean": [0, 1, 2], "418": 0, "88": [0, 1, 2], "7": [0, 1, 2, 3], "38": [0, 1], "scaled_df": [0, 1, 2, 3], "dimens": [0, 1, 2, 3, 4], "transpos": 0, "36": [0, 1, 3], "88u": [0, 2], "27m": [0, 3], "00": [0, 3], "170": 0, "57u": [0, 1, 3], "74": 0, "44f": 0, "52": [0, 2, 3], "80f": 0, "17": [0, 2, 3], "84f": 0, "ok": 0, "calcul": [0, 4], "question": 0, "actual": 0, "ask": 0, "av0": 0, "ft": [0, 1, 2, 3], "transit": [0, 1, 2, 3], "78": [0, 3], "13": [0, 1, 3], "41": [0, 1], "rememb": 0, "defin": [0, 1, 2], "v_a": 0, "early_voltag": 0, "46": [0, 1], "happen": [0, 3], "don": [0, 2, 4], "tooltip": [0, 1, 2, 3, 4], "x": [0, 1, 2, 3, 4], "y": [0, 1, 2, 3, 4], "select": [0, 3], "length_filt": 0, "240": [0, 1, 2, 3], "300": [0, 1, 2, 3], "360": [0, 1, 2, 3], "length_color": 0, "blue": [0, 1, 2, 3], "green": [0, 1], "yellow": 0, "red": [0, 1, 2, 3], "tradeoff_mask": 0, "isin": [0, 2], "tradeoff_df": 0, "tradeoff_plot": 0, "create_bokeh_plot": [0, 1, 2, 3, 4], "titl": [0, 1, 2, 3, 4], "x_axis_label": [0, 1, 2, 3, 4], "y_axis_label": [0, 1, 2, 3, 4], "800": [0, 1, 2, 3, 4], "secondari": [0, 1, 2, 3], "axi": [0, 1, 2, 3], "extra_y_rang": [0, 1, 2, 3], "100": [0, 1, 2, 3], "ax2": [0, 1, 2, 3], "y_range_nam": [0, 1, 2, 3], "axis_label": [0, 1, 2, 3], "add_layout": [0, 1, 2, 3, 4], "line": [0, 1, 2, 3, 4], "each": [0, 1, 2, 3, 5], "gate": [0, 1, 2, 3, 4], "len": [0, 1, 2, 3, 4], "len_group": [0, 1, 2, 3, 4], "groupbi": [0, 1, 2, 3, 4], "gm_cgg": [0, 1, 2, 3, 4], "legend_label": [0, 1, 2, 3, 4], "line_color": [0, 1, 2, 3, 4], "gm_gd": [0, 1, 2, 3, 4], "line_dash": [0, 1, 2, 3, 4], "dash": [0, 1, 2, 3], "see": [0, 1, 2, 3, 4, 5], "two": [0, 2, 5], "veri": [0, 2], "clearli": 0, "drop": 0, "off": [0, 4, 5], "increas": [0, 1, 2], "trade": 0, "vari": 0, "In": [0, 1, 4], "gener": 0, "manag": 0, "meet": 0, "system": 0, "That": 0, "come": [0, 4], "budget": 0, "simul": 0, "hone": 0, "balanc": 0, "power": [0, 2, 4], "etc": 0, "turbo256": [1, 2, 3, 4], "linear_palett": [1, 2, 3, 4], "logaxi": [1, 2, 3, 4], "span": [1, 2, 3, 4], "linearscal": [1, 2, 3, 4], "logscal": 1, "layout": [1, 3, 4], "l": [1, 2, 3, 4], "consid": [1, 2, 3, 4], "ig": [1, 2, 3, 4], "similar": [1, 2, 3, 4], "1": [1, 2, 3, 4], "combo": [1, 2, 3], "achiev": [1, 2, 3], "mhz": [1, 2], "comput": [1, 4], "dc": 1, "fan": 1, "6v": [1, 2, 3, 4], "0v": [1, 2, 3, 4], "As": [1, 2], "befor": [1, 2], "gmid_spec": 1, "100e6": 1, "3f": [1, 2, 4], "628": 1, "later": 1, "against": [1, 3], "give": [1, 2, 3, 4], "cmap": [1, 2, 3, 4], "nuniqu": [1, 2, 3, 4], "length_color_pair": [1, 2, 3, 4], "zip": [1, 2, 3, 4], "uniqu": [1, 2, 3, 4], "length_color_dict": [1, 2, 3, 4], "dict": [1, 2, 3, 4], "gmid_plot": 1, "y_axis_typ": [1, 2, 3], "log": [1, 2, 3, 4], "200": [1, 2, 3], "extra_y_scal": [1, 2, 3], "plot_mask": [1, 3, 4], "solid": [1, 2, 3, 4], "y_rang": [1, 2, 3, 4], "1e8": [1, 2, 3, 4], "100e9": [1, 2, 3, 4], "add": [1, 2, 3, 4], "vertic": [1, 2, 3, 4], "gmid": [1, 2, 3, 4], "locat": [1, 2, 3, 4], "height": [1, 2, 4], "same": [1, 2, 3], "form": [1, 2, 3], "point": [1, 2, 3, 4], "a_v0": [1, 2, 3, 4], "37": [1, 2, 3], "84": 1, "28g": 1, "50": [1, 3], "756": 1, "06u": [1, 3], "42": [1, 2], "70": 1, "06g": 1, "220": [1, 2], "45": [1, 2, 3], "56u": 1, "680": 1, "21u": [1, 3], "47": [1, 2], "59": 1, "20g": 1, "46u": 1, "617": 1, "96u": [1, 2], "53": 1, "71g": [1, 3], "260": [1, 2, 3], "02u": [1, 3, 4], "565": 1, "93u": [1, 3], "58": [1, 2, 3], "43": [1, 3], "93g": 1, "280": [1, 2, 3], "35": [1, 2], "11u": 1, "521": 1, "77u": 1, "63": [1, 2, 4], "43g": 1, "32": [1, 2], "60u": 1, "483": 1, "80u": [1, 2], "68": [1, 2, 3], "33": 1, "91g": [1, 3], "320": [1, 2, 3], "30": [1, 3], "41u": [1, 3], "450": 1, "79u": [1, 3], "72": [1, 2], "13g": 1, "340": [1, 2, 3], "421": 1, "81u": [1, 2], "76": [1, 2, 3], "26": [1, 2], "95g": 1, "72u": [1, 2, 3], "396": 1, "16u": [1, 2, 3], "79": [1, 2, 3], "24": [1, 2, 3], "24g": 1, "380": [1, 2, 3], "25": [1, 2], "15u": [1, 3], "373": [1, 3], "28u": [1, 2], "83": [1, 2], "21": [1, 2, 3, 4], "400": [1, 2, 3], "23": [1, 2, 3], "71u": 1, "352": 1, "75u": [1, 2], "85": [1, 2], "19": [1, 2, 3], "90g": [1, 3], "420": [1, 2, 3], "22": [1, 2, 3], "40u": [1, 2, 3], "334": 1, "15g": 1, "440": [1, 2, 3], "19u": [1, 2], "317": 1, "90": [1, 2, 3], "16": [1, 3], "62g": 1, "460": [1, 2, 3], "20": [1, 2, 3], "22u": 1, "302": 1, "50u": 1, "92": [1, 2], "29g": 1, "480": [1, 2, 3], "38u": 1, "289": 1, "00u": 1, "94": [1, 2, 3], "14": [1, 2, 3], "11g": [1, 3], "500": [1, 2, 3], "59u": [1, 2], "276": 1, "61u": 1, "96": [1, 2], "07g": 1, "32u": [1, 2, 3], "227": 1, "18u": [1, 3], "103": [1, 2, 3], "9": [1, 2, 3], "700": [1, 2, 3], "84u": 1, "192": [1, 2, 3], "07u": 1, "109": 1, "86g": [1, 3], "20u": [1, 2], "166": [1, 3], "76u": 1, "115": [1, 2, 3], "31g": 1, "900": [1, 2, 3], "147": [1, 3], "30u": [1, 2], "120": [1, 2, 3], "23g": [1, 3], "000": [1, 2, 3], "8": [1, 2, 3, 4], "89u": 1, "131": [1, 2], "125": 1, "45g": [1, 3], "119": 1, "13u": 1, "108": [1, 3], "63u": [1, 2], "136": 1, "41g": 1, "66u": 1, "99": [1, 2, 3], "142": 1, "78g": 1, "86": 1, "153": 1, "56g": 1, "42u": [1, 3], "80": [1, 3], "159": 1, "38g": 1, "10u": [1, 2, 3], "75": [1, 3], "74u": [1, 3], "165": 1, "22g": 1, "71": [1, 3], "171": 1, "09g": 1, "67": [1, 3], "177": 1, "98g": 1, "64": 1, "09u": [1, 3], "183": [1, 2, 3], "89g": 1, "entri": [1, 2, 3], "623": 1, "mmoh": [1, 2], "after": 1, "693620": 1, "95u": [1, 3], "155230": 1, "03u": 1, "618548": 1, "083778": 1, "551170": 1, "020993": 1, "493528": 1, "34u": [1, 2], "969062": 1, "447862": 1, "39u": [1, 2, 3], "930173": 1, "416200": 1, "33u": 1, "906103": 1, "24u": [1, 2], "400001": 1, "897979": 1, "94u": 1, "385510": 1, "870413": 1, "357568": 1, "23u": [1, 2], "828370": 1, "37u": [1, 3], "356338": 1, "01u": [1, 3], "839113": 1, "327329": 1, "839500": 1, "371473": 1, "919608": 1, "12u": [1, 2, 3], "31": 1, "480883": 1, "91u": 1, "979349": 1, "474470": 1, "975004": 1, "480043": 1, "27u": [1, 2, 3], "988826": 1, "500748": 1, "35u": 1, "49": 1, "015334": 1, "rang": 1, "alwai": 1, "greater": [1, 4], "than": [1, 4], "10x": 1, "limit": 1, "possibl": 1, "min_ft": 1, "ft_mask": 1, "soln_df": [1, 2, 3], "maximum": [1, 2, 3], "max": [1, 2, 3], "um": [1, 2, 3, 4], "vo": 1, "metrics_plot": 1, "metric": [1, 2, 3], "1e11": 1, "legend": [1, 2, 3, 4], "top_left": 1, "One": 1, "jump": 1, "5um": [1, 4], "bang": 1, "buck": 1, "term": 1, "flatten": [1, 4], "doe": 1, "author": 1, "conclud": 1, "much": [1, 2], "past": 1, "l_": 1, "thei": 1, "obviou": 1, "still": 1, "though": 1, "lower": [1, 3], "rate": 1, "longer": 1, "without": 1, "satur": 1, "g_m": [2, 3, 4], "over": [2, 3, 4], "i_d": [2, 3, 4], "either": [2, 3], "minimum": [2, 3, 4], "consumpt": [2, 3], "283": 2, "addition": 2, "tell": 2, "next": [2, 5], "filter": 2, "also": [2, 3], "weird": [2, 4], "filtered_df": 2, "intersect": [2, 3], "horizont": [2, 3], "10e9": 2, "color": [2, 3], "map": 2, "modul": 2, "hover": 2, "ft_plot": [2, 3], "make": [2, 3, 4, 5], "interact": [2, 3, 4], "click_polici": [2, 3, 4], "hide": [2, 3, 4], "great": [2, 3], "repres": [2, 3], "exactli": [2, 3, 4], "renam": 2, "style": 2, "col_format": 2, "set_capt": 2, "satisfi": 2, "show_col": 2, "00e": [2, 3], "outsid": [2, 3], "exist": [2, 3], "skip": [2, 3], "10000": 2, "00g": [2, 4], "25u": [2, 3], "98": [2, 3], "17u": [2, 3], "106": 2, "73u": 2, "29u": [2, 3], "123": 2, "85u": [2, 3], "132": 2, "73": 2, "82u": [2, 3], "141": [2, 4], "47u": [2, 3], "77": 2, "150": [2, 4], "81": 2, "99u": [2, 3], "158": 2, "167": 2, "175": 2, "54u": 2, "208": 2, "246": 2, "104": 2, "319": 2, "51": [2, 3], "14u": [2, 3], "354": 2, "05u": [2, 3], "97": 2, "388": 2, "69u": [2, 3], "87": 2, "423": 2, "97u": 2, "458": 2, "54": 2, "174": 2, "493": 2, "3um": 2, "other": [2, 3], "aren": 2, "shown": [2, 5], "across": [2, 3], "compare_plot": [2, 3], "scatter": [2, 3], "top_right": [2, 3], "most": 2, "7um": 2, "180um": 2, "ha": 2, "highest": 2, "least": 2, "hit": [2, 3], "size": [2, 3], "methodologi": [2, 4], "onli": [2, 3, 4], "180u": 2, "6u": 2, "len_mask": 2, "recomput": 2, "sure": 2, "miss": 2, "anyth": 2, "411": 2, "271": 2, "28m": 2, "110": 2, "540": 2, "65u": [2, 3], "62": [2, 3], "compar": 2, "option": 2, "annot": 2, "min": 2, "solut": [2, 3], "earlier": 2, "id_0p180": 2, "set_index": 2, "loc": [2, 3], "id_0p6": 2, "name": 2, "wouldn": 2, "dramat": 2, "reduc": 2, "might": 2, "avoid": [2, 4], "weren": 2, "too": 2, "worri": 2, "save": 2, "back": 2, "just": 2, "bit": [2, 3], "somewher": 2, "around": [2, 3], "roughli": [2, 4], "ugf": 3, "v_d": [3, 4], "v_sb": [3, 4], "lookup_mask": 3, "copi": 3, "01": 3, "417": 3, "34": 3, "26g": 3, "509": 3, "37m": 3, "033": 3, "04g": 3, "689": 3, "16m": 3, "144": 3, "44u": 3, "085": 3, "45u": 3, "73g": 3, "725": 3, "31m": 3, "094": 3, "52g": 3, "753": 3, "83m": 3, "181": 3, "42g": 3, "776": 3, "88m": 3, "066": 3, "92u": 3, "795": 3, "82m": 3, "199": 3, "044": 3, "08u": 3, "811": 3, "55m": 3, "203": 3, "019": 3, "824": 3, "58m": 3, "206": 3, "48u": 3, "993": 3, "43u": 3, "55": 3, "19g": 3, "835": 3, "85m": 3, "207": 3, "967": 3, "75g": 3, "845": 3, "41m": 3, "942": 3, "48": 3, "58g": 3, "853": 3, "76m": 3, "918": 3, "68g": 3, "861": 3, "19m": 3, "894": 3, "01g": 3, "867": 3, "75m": 3, "204": 3, "872": 3, "40": 3, "57g": 3, "873": 3, "62m": 3, "194": 3, "64u": 3, "774": 3, "99g": 3, "896": 3, "94m": 3, "696": 3, "48g": 3, "914": 3, "173": 3, "634": 3, "927": 3, "87m": 3, "163": 3, "582": 3, "939": 3, "40m": 3, "155": 3, "539": 3, "31u": 3, "87g": 3, "949": 3, "10m": 3, "502": 3, "85g": 3, "957": 3, "139": 3, "469": 3, "25g": 3, "964": 3, "90m": 3, "133": 3, "441": 3, "96g": 3, "971": 3, "127": 3, "416": 3, "976": 3, "121": 3, "394": 3, "981": 3, "98m": 3, "116": 3, "27g": 3, "986": 3, "47m": 3, "111": 3, "355": 3, "83u": 3, "64g": 3, "990": 3, "48m": 3, "107": 3, "339": 3, "10g": 3, "994": 3, "05m": 3, "102": 3, "86u": 3, "324": 3, "63g": 3, "997": 3, "26m": 3, "310": 3, "62u": 3, "There": [3, 4], "bug": [3, 5], "someth": 3, "funni": 3, "240um": 3, "sorta": 3, "kinda": 3, "think": 3, "relat": 3, "fact": 3, "isn": 3, "monoton": 3, "hand": [3, 5], "properli": 3, "issu": 3, "initi": 3, "build": 3, "280um": 3, "pretti": 3, "flip": 3, "moh": 3, "len_plot": 3, "At": 3, "max_fu_idx": 3, "idxmax": 3, "max_ft": 3, "max_fu": 3, "max_fu_len": 3, "0f": 3, "nm": 3, "given": [3, 4], "soln_mask": 3, "03": 3, "05": 3, "113": 3, "29m": 3, "73m": 3, "39": 3, "60m": 3, "72m": 3, "60": 3, "55g": 3, "44m": 3, "14g": 3, "80m": 3, "08m": 3, "260nm": 3, "again": 3, "left": 3, "higher": 3, "thu": 3, "req": 3, "within": 3, "applic": 4, "quit": [4, 5], "case": 4, "push": 4, "far": 4, "enough": 4, "multipl": 4, "ident": 4, "scenario": 4, "instead": [4, 5], "ultra": 4, "gain": [4, 5], "desir": 4, "circuit": [4, 5], "densiti": 4, "love": 4, "matlab": [4, 5], "unit": 4, "meter": 4, "chang": 4, "futur": 4, "0008e": 4, "3e": 4, "na": 4, "600e": 4, "160": 4, "intrins": [4, 5], "gain_plot": 4, "x_axis_typ": 4, "To": 4, "solv": 4, "rest": 4, "problelm": 4, "6e": 4, "b": 4, "set": 4, "nonmonoton": 4, "result": 4, "151": 4, "27": 4, "71m": 4, "khz": 4, "simpl": 5, "setup": 5, "demonstr": 5, "free": 5, "open": 5, "tool": 5, "cmo": 5, "paul": 5, "jesper": 5, "bori": 5, "page": 5, "one": 5, "exampl": 5, "shelf": 5, "along": 5, "made": 5, "simplifi": 5, "code": 5, "ve": 5, "got": 5, "cover": 5, "basic": 5, "stage": 5, "complet": 5, "hope": 5, "week": 5, "ani": 5, "suggest": 5, "pleas": 5, "stop": 5, "discuss": 5, "section": 5, "repositori": 5, "behind": 5, "cheer": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"exampl": [0, 1, 2, 3, 4], "3": [0, 1, 2, 3, 4], "1": 0, "intrins": [0, 1, 2, 3], "gain": [0, 1, 2, 3], "stage": [0, 1, 2, 3], "circuit": [0, 1, 2, 3], "analysi": [0, 1, 2, 3], "size": [0, 4], "consider": 0, "given": 0, "l": 0, "g_m": [0, 1], "over": 0, "i_d": [0, 1], "basic": 0, "ig": 0, "solut": [0, 4], "tradeoff": 0, "explor": 0, "2": 1, "constant": [1, 2, 3], "f_t": 2, "4": 3, "a_": 3, "v0": 3, "5": 4, "weak": 4, "invers": 4, "width": 4, "constraint": 4, "systemat": 5, "design": 5, "analog": 5, "ic": 5, "python": 5, "jupyt": 5}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Example 3.1: Intrinsic Gain Stage": [[0, "example-3-1-intrinsic-gain-stage"]], "Circuit analysis": [[0, "circuit-analysis"], [1, "circuit-analysis"], [2, "circuit-analysis"], [3, "circuit-analysis"]], "Sizing considerations": [[0, "sizing-considerations"]], "Sizing for given L and g_m\\over{I_d}": [[0, "sizing-for-given-l-and-g-m-over-i-d"]], "Example: basic IGS sizing": [[0, "example-basic-igs-sizing"]], "Solution:": [[0, "solution"]], "Tradeoff exploration": [[0, "tradeoff-exploration"]], "Example 3.2: Intrinsic Gain Stage, with constant g_m / I_d": [[1, "example-3-2-intrinsic-gain-stage-with-constant-g-m-i-d"]], "Example 3.3: Intrinsic Gain Stage, with constant f_t": [[2, "example-3-3-intrinsic-gain-stage-with-constant-f-t"]], "Example 3.4: Intrinsic Gain Stage, with constant A_{v0}": [[3, "example-3-4-intrinsic-gain-stage-with-constant-a-v0"]], "Example 3.5: Sizing in weak inversion with a width constraint": [[4, "example-3-5-sizing-in-weak-inversion-with-a-width-constraint"]], "Solution": [[4, "solution"]], "Systematic design of analog ICs with Python and Jupyter": [[5, "systematic-design-of-analog-ics-with-python-and-jupyter"]]}, "indexentries": {}})