Ext.data.JsonP.Ext_util_CSS({
  "href": "CSS.html#Ext-util-CSS",
  "component": false,
  "singleton": true,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 269,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n"
      },
      {
        "shortDoc": "Call the parent's overridden method. ...",
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 124,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n"
      },
      {
        "shortDoc": "Creates a stylesheet from a text blob of rules. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The text containing the css rules</p>\n",
            "name": "cssText"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>An id to add to the stylesheet for later removal</p>\n",
            "name": "id"
          }
        ],
        "href": "CSS.html#Ext-util-CSS-method-createStyleSheet",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "StyleSheet",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CSS.html",
        "linenr": 22,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "createStyleSheet",
        "owner": "Ext.util.CSS",
        "doc": "<p>Creates a stylesheet from a text blob of rules.\nThese rules will be wrapped in a STYLE tag and appended to the HEAD of the document.</p>\n"
      },
      {
        "shortDoc": "Gets an an individual CSS rule by selector(s) ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The CSS selector or an array of selectors to try. The first selector that is found is returned.</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>true to refresh the internal cache if you have recently updated any rules or added styles dynamically</p>\n",
            "name": "refreshCache"
          }
        ],
        "href": "CSS.html#Ext-util-CSS-method-getRule",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CSSRule",
          "doc": "<p>The CSS rule or null if one is not found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CSS.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "getRule",
        "owner": "Ext.util.CSS",
        "doc": "<p>Gets an an individual CSS rule by selector(s)</p>\n"
      },
      {
        "shortDoc": "Gets all css rules for the document ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>true to refresh the internal cache</p>\n",
            "name": "refreshCache"
          }
        ],
        "href": "CSS.html#Ext-util-CSS-method-getRules",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>An object (hash) of rules indexed by selector</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CSS.html",
        "linenr": 118,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "getRules",
        "owner": "Ext.util.CSS",
        "doc": "<p>Gets all css rules for the document</p>\n"
      },
      {
        "shortDoc": "Initialize configuration for this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 63,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n"
      },
      {
        "shortDoc": "Refresh the rule cache if you have dynamically added stylesheets ...",
        "params": [

        ],
        "href": "CSS.html#Ext-util-CSS-method-refreshCache",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>An object (hash) of rules indexed by selector</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CSS.html",
        "linenr": 83,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "refreshCache",
        "owner": "Ext.util.CSS",
        "doc": "<p>Refresh the rule cache if you have dynamically added stylesheets</p>\n"
      },
      {
        "shortDoc": "Removes a style or link tag by id ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of the tag</p>\n",
            "name": "id"
          }
        ],
        "href": "CSS.html#Ext-util-CSS-method-removeStyleSheet",
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
        "html_filename": "CSS.html",
        "linenr": 56,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "removeStyleSheet",
        "owner": "Ext.util.CSS",
        "doc": "<p>Removes a style or link tag by id</p>\n"
      },
      {
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 199,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n"
      },
      {
        "shortDoc": "Dynamically swaps an existing stylesheet reference for a new one ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of an existing link tag to remove</p>\n",
            "name": "id"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The href of the new stylesheet to include</p>\n",
            "name": "url"
          }
        ],
        "href": "CSS.html#Ext-util-CSS-method-swapStyleSheet",
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
        "html_filename": "CSS.html",
        "linenr": 67,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "swapStyleSheet",
        "owner": "Ext.util.CSS",
        "doc": "<p>Dynamically swaps an existing stylesheet reference for a new one</p>\n"
      },
      {
        "shortDoc": "Updates a rule property ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>If it's an array it tries each selector until it finds one. Stops immediately once one is found.</p>\n",
            "name": "selector"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The css property</p>\n",
            "name": "property"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new value for the property</p>\n",
            "name": "value"
          }
        ],
        "href": "CSS.html#Ext-util-CSS-method-updateRule",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true If a rule was found and updated</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CSS.html",
        "linenr": 160,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "name": "updateRule",
        "owner": "Ext.util.CSS",
        "doc": "<p>Updates a rule property</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "type": "Class",
        "href": "Base3.html#Ext-Base-property-self",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n"
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

  ],
  "html_filename": "CSS.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.util.CSS",
  "doc": "<p>Utility class for manipulating CSS rules</p>\n",
  "extends": "Ext.Base",
  "docauthor": null
});