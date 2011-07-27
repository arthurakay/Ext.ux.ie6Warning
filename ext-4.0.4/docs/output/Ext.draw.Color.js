Ext.data.JsonP.Ext_draw_Color({
  "href": "Color2.html#Ext-draw-Color",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Color. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Red component (0..255)</p>\n",
            "name": "red"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Green component (0..255)</p>\n",
            "name": "green"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Blue component (0..255)</p>\n",
            "name": "blue"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-constructor",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 22,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.draw.Color",
        "doc": "<p>Creates new Color.</p>\n"
      },
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
        "shortDoc": "Get the blue component of the color, in the range 0..255. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getBlue",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 52,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getBlue",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the blue component of the color, in the range 0..255.</p>\n"
      },
      {
        "shortDoc": "Return a new color that is darker than this color. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Darker factor (0..1), default to 0.2</p>\n",
            "name": "factor"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-getDarker",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 117,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getDarker",
        "owner": "Ext.draw.Color",
        "doc": "<p>Return a new color that is darker than this color.</p>\n"
      },
      {
        "shortDoc": "Returns the gray value (0 to 255) of the color. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getGrayscale",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 219,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getGrayscale",
        "owner": "Ext.draw.Color",
        "doc": "<p>Returns the gray value (0 to 255) of the color.</p>\n\n<p>The gray value is calculated using the formula r<em>0.3 + g</em>0.59 + b*0.11.</p>\n"
      },
      {
        "shortDoc": "Get the green component of the color, in the range 0..255. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getGreen",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 44,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getGreen",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the green component of the color, in the range 0..255.</p>\n"
      },
      {
        "shortDoc": "Get the equivalent HSL components of the color. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getHSL",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Number]",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 69,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getHSL",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the equivalent HSL components of the color.</p>\n"
      },
      {
        "shortDoc": "Return a new color that is lighter than this color. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Lighter factor (0..1), default to 0.2</p>\n",
            "name": "factor"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-getLighter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 105,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getLighter",
        "owner": "Ext.draw.Color",
        "doc": "<p>Return a new color that is lighter than this color.</p>\n"
      },
      {
        "shortDoc": "Get the RGB values. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getRGB",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Number]",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 60,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getRGB",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the RGB values.</p>\n"
      },
      {
        "shortDoc": "Get the red component of the color, in the range 0..255. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getRed",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 36,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "getRed",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the red component of the color, in the range 0..255.</p>\n"
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
        "shortDoc": "Return the color in the hex format, i.e. ...",
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-toString",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 127,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "toString",
        "owner": "Ext.draw.Color",
        "doc": "<p>Return the color in the hex format, i.e. '#rrggbb'.</p>\n"
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
      {
        "shortDoc": "The default factor to compute the lighter or darker color. ...",
        "type": "Number",
        "href": "Color2.html#Ext-draw-Color-cfg-lightnessFactor",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 15,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "lightnessFactor",
        "owner": "Ext.draw.Color",
        "doc": "<p>The default factor to compute the lighter or darker color. Defaults to 0.2.</p>\n"
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
  "html_filename": "Color2.html",
  "statics": {
    "method": [
      {
        "shortDoc": "Add / override static properties of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-addStatics",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 392,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "doc": "<p>The class to borrow members from</p>\n",
            "name": "fromClass"
          },
          {
            "type": "Array/String",
            "optional": false,
            "doc": "<p>The names of the members to borrow</p>\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-borrow",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 482,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "borrow",
        "owner": "Ext.Base",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n"
      },
      {
        "shortDoc": "Create a new instance of this Class. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 330,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n"
      },
      {
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "href": "Base3.html#Ext-Base-method-createAlias",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n"
      },
      {
        "shortDoc": "Create a new color based on the specified HSL values. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Hue component (0..359)</p>\n",
            "name": "h"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Saturation component (0..1)</p>\n",
            "name": "s"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Lightness component (0..1)</p>\n",
            "name": "l"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-fromHSL",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 231,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "fromHSL",
        "owner": "Ext.draw.Color",
        "doc": "<p>Create a new color based on the specified HSL values.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n"
      },
      {
        "shortDoc": "Parse the string and create a new color. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Color in string.</p>\n",
            "name": "str"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-fromString",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 177,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "fromString",
        "owner": "Ext.draw.Color",
        "doc": "<p>Parse the string and create a new color.</p>\n\n<p>Supported formats: '#rrggbb', '#rgb', and 'rgb(r,g,b)'.</p>\n\n<p>If the string is not recognized, an undefined will be returned instead.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n"
      },
      {
        "shortDoc": "Get the current class' name in string format. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 639,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n"
      },
      {
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-implement",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 420,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n"
      },
      {
        "shortDoc": "Override prototype members of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-override",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 524,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n"
      },
      {
        "shortDoc": "Convert a color to hexadecimal format. ...",
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The color value (i.e 'rgb(255, 255, 255)', 'color: #ffffff').\nCan also be an Array, in this case the function handles the first member.</p>\n",
            "name": "color"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-toHex",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The color in hexadecimal format.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Color2.html",
        "linenr": 143,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "name": "toHex",
        "owner": "Ext.draw.Color",
        "doc": "<p>Convert a color to hexadecimal format.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n"
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
  "author": null,
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.draw.Color",
  "doc": "<p>Represents an RGB color and provides helper functions get\ncolor components in HSL color space.</p>\n",
  "extends": "Ext.Base",
  "docauthor": null
});