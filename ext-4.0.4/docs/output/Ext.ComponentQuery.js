Ext.data.JsonP.Ext_ComponentQuery({
  "href": "ComponentQuery.html#Ext-ComponentQuery",
  "component": false,
  "singleton": true,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Tests whether the passed Component matches the selector string. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The Component to test</p>\n",
            "name": "component"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "href": "ComponentQuery.html#Ext-ComponentQuery-method-is",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Component matches the selector.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ComponentQuery.html",
        "linenr": 399,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentQuery.js",
        "private": false,
        "name": "is",
        "owner": "Ext.ComponentQuery",
        "doc": "<p>Tests whether the passed Component matches the selector string.</p>\n"
      },
      {
        "shortDoc": "Returns an array of matched Components from within the passed root object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to filter returned Components</p>\n",
            "name": "selector"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>The Container within which to perform the query.\nIf omitted, all Components within the document are included in the search.</p>\n\n<p>This parameter may also be an array of Components to filter according to the selector.</p></p>\n",
            "name": "root"
          }
        ],
        "href": "ComponentQuery.html#Ext-ComponentQuery-method-query",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Ext.Component]",
          "doc": "<p>The matched Components.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ComponentQuery.html",
        "linenr": 348,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentQuery.js",
        "private": false,
        "name": "query",
        "owner": "Ext.ComponentQuery",
        "doc": "<p>Returns an array of matched Components from within the passed root object.</p>\n\n<p>This method filters returned Components in a similar way to how CSS selector based DOM\nqueries work using a textual selector string.</p>\n\n<p>See class summary for details.</p>\n"
      }
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
  "html_filename": "ComponentQuery.html",
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

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentQuery.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.ComponentQuery",
  "doc": "<p>Provides searching of Components within <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> (globally) or a specific\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a> on the document with a similar syntax to a CSS selector.</p>\n\n<p>Components can be retrieved by using their <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">xtype</a> with an optional . prefix</p>\n\n<ul>\n<li><code>component</code> or <code>.component</code></li>\n<li><code>gridpanel</code> or <code>.gridpanel</code></li>\n</ul>\n\n\n<p>An itemId or id must be prefixed with a #</p>\n\n<ul>\n<li><code>#myContainer</code></li>\n</ul>\n\n\n<p>Attributes must be wrapped in brackets</p>\n\n<ul>\n<li><code>component[autoScroll]</code></li>\n<li><code>panel[title=\"Test\"]</code></li>\n</ul>\n\n\n<p>Member expressions from candidate Components may be tested. If the expression returns a <em>truthy</em> value,\nthe candidate Component will be included in the query:</p>\n\n<pre><code>var disabledFields = myFormPanel.query(\"{isDisabled()}\");\n</code></pre>\n\n<p>Pseudo classes may be used to filter results in the same way as in <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a>:</p>\n\n<pre><code>// Function receives array and returns a filtered array.\nExt.ComponentQuery.pseudos.invalid = function(items) {\n    var i = 0, l = items.length, c, result = [];\n    for (; i &lt; l; i++) {\n        if (!(c = items[i]).isValid()) {\n            result.push(c);\n        }\n    }\n    return result;\n};\n\nvar invalidFields = myFormPanel.query('field:invalid');\nif (invalidFields.length) {\n    invalidFields[0].getEl().scrollIntoView(myFormPanel.body);\n    for (var i = 0, l = invalidFields.length; i &lt; l; i++) {\n        invalidFields[i].getEl().frame(\"red\");\n    }\n}\n</code></pre>\n\n<p>Default pseudos include:</p>\n\n<ul>\n<li>not</li>\n</ul>\n\n\n<p>Queries return an array of components.\nHere are some example queries.</p>\n\n<pre><code>// retrieve all Ext.Panels in the document by xtype\nvar panelsArray = Ext.ComponentQuery.query('panel');\n\n// retrieve all Ext.Panels within the container with an id myCt\nvar panelsWithinmyCt = Ext.ComponentQuery.query('#myCt panel');\n\n// retrieve all direct children which are Ext.Panels within myCt\nvar directChildPanel = Ext.ComponentQuery.query('#myCt &gt; panel');\n\n// retrieve all grids and trees\nvar gridsAndTrees = Ext.ComponentQuery.query('gridpanel, treepanel');\n</code></pre>\n\n<p>For easy access to queries based from a particular Container see the <a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a>,\n<a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a> and <a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a> methods. Also see\n<a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">Ext.Component.up</a>.</p>\n",
  "extends": "Object",
  "docauthor": null
});