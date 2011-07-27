Ext.data.JsonP.Ext_ComponentManager({
  "href": "ComponentManager.html#Ext-ComponentManager",
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
        "shortDoc": "Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to in...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A configuration object for the Component you wish to create.</p>\n",
            "name": "config"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The constructor to provide the default Component type if\nthe config object does not contain a <code>xtype</code>. (Optional if the config contains a <code>xtype</code>).</p>\n",
            "name": "defaultType"
          }
        ],
        "href": "ComponentManager.html#Ext-ComponentManager-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The newly instantiated Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ComponentManager.html",
        "linenr": 25,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentManager.js",
        "private": false,
        "name": "create",
        "owner": "Ext.ComponentManager",
        "doc": "<p>Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to instantiate.</p>\n"
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
    "Ext.ComponentMgr"
  ],
  "html_filename": "ComponentManager.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentManager.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.ComponentManager",
  "doc": "<p>Provides a registry of all Components (instances of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> or any subclass\nthereof) on a page so that they can be easily accessed by <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a>\n<a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a> (see <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">get</a>, or the convenience method <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>).</p>\n\n\n<p>This object also provides a registry of available Component <i>classes</i>\nindexed by a mnemonic code known as the Component's <a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a>.\nThe <code>xtype</code> provides a way to avoid instantiating child Components\nwhen creating a full, nested config object for a complete <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> page.</p>\n\n\n<p>A child Component may be specified simply as a <i>config object</i>\nas long as the correct <code><a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a></code> is specified so that if and when the Component\nneeds rendering, the correct type can be looked up for lazy instantiation.</p>\n\n\n<p>For a list of all available <code><a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtypes</a></code>, see <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n\n",
  "extends": "Ext.AbstractManager",
  "docauthor": null
});