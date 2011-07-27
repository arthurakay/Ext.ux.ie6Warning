Ext.data.JsonP.Ext_AbstractPlugin({
  "href": "AbstractPlugin.html#Ext-AbstractPlugin",
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
        "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed. ...",
        "params": [

        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
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
        "html_filename": "AbstractPlugin.html",
        "linenr": 42,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin cleanup in their own implementation of this method.</p>\n\n"
      },
      {
        "shortDoc": "The base implementation just sets the plugin's disabled flag to true\n\n\nPlugin subclasses which need more complex proc...",
        "params": [

        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
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
        "html_filename": "AbstractPlugin.html",
        "linenr": 57,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "name": "disable",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n"
      },
      {
        "shortDoc": "The base implementation just sets the plugin's disabled flag to false\n\n\nPlugin subclasses which need more complex pro...",
        "params": [

        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
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
        "html_filename": "AbstractPlugin.html",
        "linenr": 49,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "name": "enable",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n"
      },
      {
        "shortDoc": "The init method is invoked after initComponent method has been run for the client Component. ...",
        "params": [
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The client Component which owns this plugin.</p>\n",
            "name": "client"
          }
        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
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
        "html_filename": "AbstractPlugin.html",
        "linenr": 33,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "name": "init",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The init method is invoked after initComponent method has been run for the client Component.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional\nlinks between the plugin and its client Component in their own implementation of this method.</p>\n\n"
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
  "html_filename": "AbstractPlugin.html",
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
    "Ext.grid.plugin.DragDrop",
    "Ext.tree.plugin.TreeViewDragDrop"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.AbstractPlugin",
  "doc": "<p>The AbstractPlugin class is the base class from which user-implemented plugins should inherit.</p>\n\n\n<p>This class defines the essential API of plugins as used by Components by defining the following methods:</p>\n\n\n<ul>\n<li><code>init</code> : The plugin initialization method which the owning Component calls at Component initialization\ntime.<div class=\"sub-desc\"><p>The Component passes itself as the sole parameter.</p><p>Subclasses should set up bidirectional\nlinks between the plugin and its client Component here.</p></div></li>\n<li><code>destroy</code> : The plugin cleanup method which the owning Component calls at Component destruction time.<div class=\"sub-desc\">Use\nthis method to break links between the plugin and the Component and to free any allocated resources.</div></li>\n<li><code>enable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code><div class=\"sub-desc\"></div></li>\n<li><code>disable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code><div class=\"sub-desc\"></div></li>\n</ul>\n\n",
  "extends": "Object",
  "docauthor": null
});