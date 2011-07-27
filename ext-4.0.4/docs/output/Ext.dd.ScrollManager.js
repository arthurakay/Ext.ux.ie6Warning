Ext.data.JsonP.Ext_dd_ScrollManager({
  "href": "ScrollManager.html#Ext-dd-ScrollManager",
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
        "shortDoc": "Manually trigger a cache refresh. ...",
        "params": [

        ],
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-refreshCache",
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
        "html_filename": "ScrollManager.html",
        "linenr": 211,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "refreshCache",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>Manually trigger a cache refresh.</p>\n"
      },
      {
        "shortDoc": "Registers new overflow element(s) to auto scroll ...",
        "params": [
          {
            "type": "Mixed/Array",
            "optional": false,
            "doc": "<p>The id of or the element to be scrolled or an array of either</p>\n",
            "name": "el"
          }
        ],
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-register",
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
        "html_filename": "ScrollManager.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "register",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>Registers new overflow element(s) to auto scroll</p>\n"
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
        "shortDoc": "Unregisters overflow element(s) so they are no longer scrolled ...",
        "params": [
          {
            "type": "Mixed/Array",
            "optional": false,
            "doc": "<p>The id of or the element to be removed or an array of either</p>\n",
            "name": "el"
          }
        ],
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-unregister",
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
        "html_filename": "ScrollManager.html",
        "linenr": 151,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "unregister",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>Unregisters overflow element(s) so they are no longer scrolled</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "Number",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animDuration",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 197,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "animDuration",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>The animation duration in seconds -\nMUST BE less than Ext.dd.ScrollManager.frequency! (defaults to .4)</p>\n"
      },
      {
        "type": "Boolean",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animate",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 191,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "animate",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>True to animate the scroll (defaults to true)</p>\n"
      },
      {
        "shortDoc": "The named drag drop group to which this container belongs (defaults to undefined). ...",
        "type": "String",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-ddGroup",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 204,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "ddGroup",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>The named drag drop <a href=\"#/api/Ext.dd.DragSource-cfg-ddGroup\" rel=\"Ext.dd.DragSource-cfg-ddGroup\" class=\"docClass\">group</a> to which this container belongs (defaults to undefined).\nIf a ddGroup is specified, then container scrolling will only occur when a dragged object is in the same ddGroup.</p>\n"
      },
      {
        "type": "Number",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-frequency",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 185,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "frequency",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>The frequency of scrolls in milliseconds (defaults to 500)</p>\n"
      },
      {
        "shortDoc": "The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (default...",
        "type": "Number",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-hthresh",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 172,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "hthresh",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n"
      },
      {
        "type": "Number",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-increment",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "increment",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>The number of pixels to scroll in each scroll increment (defaults to 100)</p>\n"
      },
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
      },
      {
        "shortDoc": "The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (default...",
        "type": "Number",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-vthresh",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "ScrollManager.html",
        "linenr": 166,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "name": "vthresh",
        "owner": "Ext.dd.ScrollManager",
        "doc": "<p>The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n"
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
  "html_filename": "ScrollManager.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.dd.ScrollManager",
  "doc": "<p>Provides automatic scrolling of overflow regions in the page during drag operations.</p>\n\n\n<p>The ScrollManager configs will be used as the defaults for any scroll container registered with it,\nbut you can also override most of the configs per scroll container by adding a\n<tt>ddScrollConfig</tt> object to the target element that contains these properties: <a href=\"#/api/Ext.dd.ScrollManager-property-hthresh\" rel=\"Ext.dd.ScrollManager-property-hthresh\" class=\"docClass\">hthresh</a>,\n<a href=\"#/api/Ext.dd.ScrollManager-property-vthresh\" rel=\"Ext.dd.ScrollManager-property-vthresh\" class=\"docClass\">vthresh</a>, <a href=\"#/api/Ext.dd.ScrollManager-property-increment\" rel=\"Ext.dd.ScrollManager-property-increment\" class=\"docClass\">increment</a> and <a href=\"#/api/Ext.dd.ScrollManager-property-frequency\" rel=\"Ext.dd.ScrollManager-property-frequency\" class=\"docClass\">frequency</a>.  Example usage:\n<pre><code>var el = Ext.get('scroll-ct');\nel.ddScrollConfig = {\n    vthresh: 50,\n    hthresh: -1,\n    frequency: 100,\n    increment: 200\n};\nExt.dd.ScrollManager.register(el);\n</code></pre>\n<b>Note: This class uses \"Point Mode\" and is untested in \"Intersect Mode\".</b>\n\n",
  "extends": "Ext.Base",
  "docauthor": null
});