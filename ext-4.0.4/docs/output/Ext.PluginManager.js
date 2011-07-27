Ext.data.JsonP.Ext_PluginManager({
  "href": "PluginManager.html#Ext-PluginManager",
  "component": false,
  "singleton": true,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.AbstractManager"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates a new Plugin from the specified config object using the config object's ptype to determine the class to\ninsta...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A configuration object for the Plugin you wish to create.</p>\n",
            "name": "config"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The constructor to provide the default Plugin type if the config object does not\ncontain a <code>ptype</code>. (Optional if the config contains a <code>ptype</code>).</p>\n",
            "name": "defaultType"
          }
        ],
        "href": "PluginManager.html#Ext-PluginManager-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The newly instantiated Plugin.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "PluginManager.html",
        "linenr": 30,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/PluginManager.js",
        "private": false,
        "name": "create",
        "owner": "Ext.PluginManager",
        "doc": "<p>Creates a new Plugin from the specified config object using the config object's ptype to determine the class to\ninstantiate.</p>\n"
      },
      {
        "shortDoc": "Executes the specified function once for each item in the collection. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The function to execute.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope to execute in. Defaults to <tt>this</tt>.</p>\n",
            "name": "scope"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-each",
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
        "html_filename": "AbstractManager.html",
        "linenr": 116,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "each",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Executes the specified function once for each item in the collection.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n"
      },
      {
        "shortDoc": "Returns all plugins registered with the given type. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type to search for</p>\n",
            "name": "type"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to only return plugins of this type where the plugin's isDefault property is\ntruthy</p>\n",
            "name": "defaultsOnly"
          }
        ],
        "href": "PluginManager.html#Ext-PluginManager-method-findByType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>All matching plugins</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "PluginManager.html",
        "linenr": 72,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/PluginManager.js",
        "private": false,
        "name": "findByType",
        "owner": "Ext.PluginManager",
        "doc": "<p>Returns all plugins registered with the given type. Here, 'type' refers to the type of plugin, not its ptype.</p>\n"
      },
      {
        "shortDoc": "Returns an item by id. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of the item</p>\n",
            "name": "id"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-get",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>The item, <code>undefined</code> if not found.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractManager.html",
        "linenr": 29,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "get",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Returns an item by id.\nFor additional details see <a href=\"#/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n"
      },
      {
        "shortDoc": "Gets the number of items in the collection. ...",
        "params": [

        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-getCount",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The number of items in the collection.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractManager.html",
        "linenr": 133,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "getCount",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Gets the number of items in the collection.</p>\n"
      },
      {
        "shortDoc": "Checks if an item type is registered. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The mnemonic string by which the class may be looked up</p>\n",
            "name": "type"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-isRegistered",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>Whether the type is registered.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractManager.html",
        "linenr": 65,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "isRegistered",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Checks if an item type is registered.</p>\n"
      },
      {
        "shortDoc": "Registers a function that will be called when an item with the specified id is added to the manager. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The item id</p>\n",
            "name": "id"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function. Called with a single parameter, the item.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the item.</p>\n",
            "name": "scope"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-onAvailable",
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
        "html_filename": "AbstractManager.html",
        "linenr": 93,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "onAvailable",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Registers a function that will be called when an item with the specified id is added to the manager. This will happen on instantiation.</p>\n"
      },
      {
        "shortDoc": "Registers an item to be managed ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to register</p>\n",
            "name": "item"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-register",
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
        "html_filename": "AbstractManager.html",
        "linenr": 39,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "register",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Registers an item to be managed</p>\n"
      },
      {
        "shortDoc": "Registers a new item constructor, keyed by a type key. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The mnemonic string by which the class may be looked up.</p>\n",
            "name": "type"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The new instance class.</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-registerType",
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
        "html_filename": "AbstractManager.html",
        "linenr": 55,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "registerType",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Registers a new item constructor, keyed by a type key.\n\n"
      },
      {
        "shortDoc": "Unregisters an item by removing it from this manager ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to unregister</p>\n",
            "name": "item"
          }
        ],
        "href": "AbstractManager.html#Ext-AbstractManager-method-unregister",
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
        "html_filename": "AbstractManager.html",
        "linenr": 47,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "unregister",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Unregisters an item by removing it from this manager</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "Ext.util.MixedCollection",
        "href": "AbstractManager.html#Ext-AbstractManager-property-all",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractManager.html",
        "linenr": 19,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "all",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Contains all of the items currently managed</p>\n"
      }
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
    "Ext.PluginMgr"
  ],
  "html_filename": "PluginManager.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/PluginManager.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.PluginManager",
  "doc": "<p>Provides a registry of available Plugin classes indexed by a mnemonic code known as the Plugin's ptype.</p>\n\n<p>A plugin may be specified simply as a <em>config object</em> as long as the correct <code>ptype</code> is specified:</p>\n\n<pre><code>{\n    ptype: 'gridviewdragdrop',\n    dragText: 'Drag and drop to reorganize'\n}\n</code></pre>\n\n<p>Or just use the ptype on its own:</p>\n\n<pre><code>'gridviewdragdrop'\n</code></pre>\n\n<p>Alternatively you can instanciate the plugin with Ext.create:</p>\n\n<pre><code>Ext.create('Ext.view.plugin.AutoComplete', {\n    ptype: 'gridviewdragdrop',\n    dragText: 'Drag and drop to reorganize'\n})\n</code></pre>\n",
  "extends": "Ext.AbstractManager",
  "docauthor": null
});