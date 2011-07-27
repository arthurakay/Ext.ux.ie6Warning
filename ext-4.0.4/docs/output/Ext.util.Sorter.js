Ext.data.JsonP.Ext_util_Sorter({
  "href": "Sorter.html#Ext-util-Sorter",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Set the sorting direction for this sorter. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The direction to sort in. Should be either 'ASC' or 'DESC'.</p>\n",
            "name": "direction"
          }
        ],
        "href": "Sorter.html#Ext-util-Sorter-method-setDirection",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 152,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "setDirection",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Set the sorting direction for this sorter.</p>\n"
      },
      {
        "shortDoc": "Toggles the sorting direction for this sorter. ...",
        "params": [

        ],
        "href": "Sorter.html#Ext-util-Sorter-method-toggle",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 162,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "toggle",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Toggles the sorting direction for this sorter.</p>\n"
      },
      {
        "shortDoc": "Update the sort function for this sorter. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) A new sorter function for this sorter. If not specified it will use the\ndefault sorting function.</p>\n",
            "name": "fn"
          }
        ],
        "href": "Sorter.html#Ext-util-Sorter-method-updateSortFunction",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 171,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "updateSortFunction",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Update the sort function for this sorter.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [
      {
        "shortDoc": "The direction to sort by. ...",
        "type": "String",
        "href": "Sorter.html#Ext-util-Sorter-cfg-direction",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 87,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "direction",
        "owner": "Ext.util.Sorter",
        "doc": "<p>The direction to sort by. Defaults to ASC</p>\n"
      },
      {
        "shortDoc": "The property to sort by. ...",
        "type": "String",
        "href": "Sorter.html#Ext-util-Sorter-cfg-property",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 59,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "property",
        "owner": "Ext.util.Sorter",
        "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">sorterFn</a> is provided.\nThe property is extracted from the object directly and compared for sorting using the built in\ncomparison operators.</p>\n"
      },
      {
        "shortDoc": "Optional root property. ...",
        "type": "String",
        "href": "Sorter.html#Ext-util-Sorter-cfg-root",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 76,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "root",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n"
      },
      {
        "shortDoc": "A specific sorter function to execute. ...",
        "type": "Function",
        "href": "Sorter.html#Ext-util-Sorter-cfg-sorterFn",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 65,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "sorterFn",
        "owner": "Ext.util.Sorter",
        "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a>.\nThis sorter function allows for any kind of custom/complex comparisons.\nThe sorterFn receives two arguments, the objects being compared. The function should return:</p>\n\n<ul>\n<li>-1 if o1 is \"less than\" o2</li>\n<li>0 if o1 is \"equal\" to o2</li>\n<li>1 if o1 is \"greater than\" o2</li>\n</ul>\n\n"
      },
      {
        "shortDoc": "A function that will be run on each value before\nit is compared in the sorter. ...",
        "type": "Function",
        "href": "Sorter.html#Ext-util-Sorter-cfg-transform",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sorter.html",
        "linenr": 81,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "transform",
        "owner": "Ext.util.Sorter",
        "doc": "<p>A function that will be run on each value before\nit is compared in the sorter. The function will receive a single argument,\nthe value.</p>\n"
      }
    ],
    "event": [

    ],
    "css_var": [

    ]
  },
  "deprecated": null,
  "tagname": "class",
  "mixins": [

  ],
  "static": false,
  "alias": null,
  "allMixins": [

  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "html_filename": "Sorter.html",
  "statics": {
    "method": [

    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [

    ],
    "event": [

    ],
    "css_var": [

    ]
  },
  "author": null,
  "subclasses": [
    "Ext.util.Grouper"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.util.Sorter",
  "doc": "<p>Represents a single sorter that can be applied to a Store. The sorter is used\nto compare two values against each other for the purpose of ordering them. Ordering\nis achieved by specifying either:\n- <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">A sorting property</a>\n- <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">A sorting function</a></p>\n\n<p>As a contrived example, we can specify a custom sorter that sorts by rank:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: ['name', 'rank']\n});\n\nExt.create('Ext.data.Store', {\n    model: 'Person',\n    proxy: 'memory',\n    sorters: [{\n        sorterFn: function(o1, o2){\n            var getRank = function(o){\n                var name = o.get('rank');\n                if (name === 'first') {\n                    return 1;\n                } else if (name === 'second') {\n                    return 2;\n                } else {\n                    return 3;\n                }\n            },\n            rank1 = getRank(o1),\n            rank2 = getRank(o2);\n\n            if (rank1 === rank2) {\n                return 0;\n            }\n\n            return rank1 &lt; rank2 ? -1 : 1;\n        }\n    }],\n    data: [{\n        name: 'Person1',\n        rank: 'second'\n    }, {\n        name: 'Person2',\n        rank: 'third'\n    }, {\n        name: 'Person3',\n        rank: 'first'\n    }] \n});\n</code></pre>\n",
  "extends": "Object",
  "docauthor": null
});