Ext.data.JsonP.Ext_Action({
  "href": "Action2.html#Ext-Action",
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
        "shortDoc": "Creates new Action. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Action2.html#Ext-Action-method-constructor",
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
        "html_filename": "Action2.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.Action",
        "doc": "<p>Creates new Action.</p>\n"
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
        "shortDoc": "Disables all components configured by this Action. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-disable",
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
        "html_filename": "Action2.html",
        "linenr": 165,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "disable",
        "owner": "Ext.Action",
        "doc": "<p>Disables all components configured by this Action.</p>\n"
      },
      {
        "shortDoc": "Executes the specified function once for each Component currently tied to this Action. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute for each component</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the function is executed.  Defaults to the Component.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Action2.html#Ext-Action-method-each",
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
        "html_filename": "Action2.html",
        "linenr": 222,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "each",
        "owner": "Ext.Action",
        "doc": "<p>Executes the specified function once for each Component currently tied to this Action.  The function passed\nin should accept a single argument that will be an object that supports the basic Action config/method interface.</p>\n"
      },
      {
        "shortDoc": "Enables all components configured by this Action. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-enable",
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
        "html_filename": "Action2.html",
        "linenr": 158,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "enable",
        "owner": "Ext.Action",
        "doc": "<p>Enables all components configured by this Action.</p>\n"
      },
      {
        "shortDoc": "Executes this Action manually using the handler function specified in the original config object\nor the handler funct...",
        "params": [
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional) Variable number of arguments passed to the handler function</p>\n",
            "name": "arg1"
          },
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional)</p>\n",
            "name": "arg2"
          },
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>... (optional)</p>\n",
            "name": "etc"
          }
        ],
        "href": "Action2.html#Ext-Action-method-execute",
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
        "html_filename": "Action2.html",
        "linenr": 254,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "execute",
        "owner": "Ext.Action",
        "doc": "<p>Executes this Action manually using the handler function specified in the original config object\nor the handler function set with <code><a href=\"#/api/Ext.Action-method-setHandler\" rel=\"Ext.Action-method-setHandler\" class=\"docClass\">setHandler</a></code>.  Any arguments passed to this\nfunction will be passed on to the handler function.</p>\n"
      },
      {
        "shortDoc": "Gets the icon CSS class currently used by all components configured by this Action. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-getIconCls",
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
        "html_filename": "Action2.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "getIconCls",
        "owner": "Ext.Action",
        "doc": "<p>Gets the icon CSS class currently used by all components configured by this Action.</p>\n"
      },
      {
        "shortDoc": "Gets the text currently displayed by all components configured by this Action. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-getText",
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
        "html_filename": "Action2.html",
        "linenr": 124,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "getText",
        "owner": "Ext.Action",
        "doc": "<p>Gets the text currently displayed by all components configured by this Action.</p>\n"
      },
      {
        "shortDoc": "Hides all components configured by this Action. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-hide",
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
        "html_filename": "Action2.html",
        "linenr": 196,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "hide",
        "owner": "Ext.Action",
        "doc": "<p>Hides all components configured by this Action.</p>\n"
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
        "shortDoc": "Returns true if the components using this Action are currently disabled, else returns false. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-isDisabled",
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
        "html_filename": "Action2.html",
        "linenr": 172,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "isDisabled",
        "owner": "Ext.Action",
        "doc": "<p>Returns true if the components using this Action are currently disabled, else returns false.</p>\n"
      },
      {
        "shortDoc": "Returns true if the components configured by this Action are currently hidden, else returns false. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-isHidden",
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
        "html_filename": "Action2.html",
        "linenr": 203,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "isHidden",
        "owner": "Ext.Action",
        "doc": "<p>Returns true if the components configured by this Action are currently hidden, else returns false.</p>\n"
      },
      {
        "shortDoc": "Sets the disabled state of all components configured by this Action. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to disable the component, false to enable it</p>\n",
            "name": "disabled"
          }
        ],
        "href": "Action2.html#Ext-Action-method-setDisabled",
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
        "html_filename": "Action2.html",
        "linenr": 148,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "setDisabled",
        "owner": "Ext.Action",
        "doc": "<p>Sets the disabled state of all components configured by this Action.  Shortcut method\nfor <a href=\"#/api/Ext.Action-method-enable\" rel=\"Ext.Action-method-enable\" class=\"docClass\">enable</a> and <a href=\"#/api/Ext.Action-method-disable\" rel=\"Ext.Action-method-disable\" class=\"docClass\">disable</a>.</p>\n"
      },
      {
        "shortDoc": "Sets the function that will be called by each Component using this action when its primary event is triggered. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function that will be invoked by the action's components.  The function\nwill be called with no arguments.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component firing the event.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Action2.html#Ext-Action-method-setHandler",
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
        "html_filename": "Action2.html",
        "linenr": 210,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "setHandler",
        "owner": "Ext.Action",
        "doc": "<p>Sets the function that will be called by each Component using this action when its primary event is triggered.</p>\n"
      },
      {
        "shortDoc": "Sets the hidden state of all components configured by this Action. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to hide the component, false to show it</p>\n",
            "name": "hidden"
          }
        ],
        "href": "Action2.html#Ext-Action-method-setHidden",
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
        "html_filename": "Action2.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "setHidden",
        "owner": "Ext.Action",
        "doc": "<p>Sets the hidden state of all components configured by this Action.  Shortcut method\nfor <code><a href=\"#/api/Ext.Action-method-hide\" rel=\"Ext.Action-method-hide\" class=\"docClass\">hide</a></code> and <code><a href=\"#/api/Ext.Action-method-show\" rel=\"Ext.Action-method-show\" class=\"docClass\">show</a></code>.</p>\n"
      },
      {
        "shortDoc": "Sets the icon CSS class for all components configured by this Action. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class supplying the icon image</p>\n",
            "name": "cls"
          }
        ],
        "href": "Action2.html#Ext-Action-method-setIconCls",
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
        "html_filename": "Action2.html",
        "linenr": 131,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "setIconCls",
        "owner": "Ext.Action",
        "doc": "<p>Sets the icon CSS class for all components configured by this Action.  The class should supply\na background image that will be used as the icon image.</p>\n"
      },
      {
        "shortDoc": "Sets the text to be displayed by all components configured by this Action. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The text to display</p>\n",
            "name": "text"
          }
        ],
        "href": "Action2.html#Ext-Action-method-setText",
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
        "html_filename": "Action2.html",
        "linenr": 115,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "setText",
        "owner": "Ext.Action",
        "doc": "<p>Sets the text to be displayed by all components configured by this Action.</p>\n"
      },
      {
        "shortDoc": "Shows all components configured by this Action. ...",
        "params": [

        ],
        "href": "Action2.html#Ext-Action-method-show",
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
        "html_filename": "Action2.html",
        "linenr": 189,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "show",
        "owner": "Ext.Action",
        "doc": "<p>Shows all components configured by this Action.</p>\n"
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
        "type": "Boolean",
        "href": "Action2.html#Ext-Action-cfg-disabled",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 83,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "disabled",
        "owner": "Ext.Action",
        "doc": "<p>True to disable all components configured by this Action, false to enable them (defaults to false).</p>\n"
      },
      {
        "shortDoc": "The function that will be invoked by each component tied to this Action\nwhen the component's primary event is trigger...",
        "type": "Function",
        "href": "Action2.html#Ext-Action-cfg-handler",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 89,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "handler",
        "owner": "Ext.Action",
        "doc": "<p>The function that will be invoked by each component tied to this Action\nwhen the component's primary event is triggered (defaults to undefined).</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Action2.html#Ext-Action-cfg-hidden",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 86,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "hidden",
        "owner": "Ext.Action",
        "doc": "<p>True to hide all components configured by this Action, false to show them (defaults to false).</p>\n"
      },
      {
        "shortDoc": "The CSS class selector that specifies a background image to be used as the header icon for\nall components configured ...",
        "type": "String",
        "href": "Action2.html#Ext-Action-cfg-iconCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 69,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "iconCls",
        "owner": "Ext.Action",
        "doc": "<p>The CSS class selector that specifies a background image to be used as the header icon for\nall components configured by this Action (defaults to '').</p>\n\n<p>An example of specifying a custom icon class would be something like:\n</p>\n\n\n<pre><code>// specify the property in the config for the class:\n     ...\n     iconCls: 'do-something'\n\n// css class that specifies background image to be used as the icon image:\n.do-something { background-image: url(../images/my-icon.gif) 0 6px no-repeat !important; }\n</code></pre>\n\n"
      },
      {
        "type": "String",
        "href": "Action2.html#Ext-Action-cfg-itemId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 93,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "itemId",
        "owner": "Ext.Action",
        "doc": "<p>See <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>.</p>\n"
      },
      {
        "shortDoc": "The scope (this reference) in which the\nhandler is executed. ...",
        "type": "Object",
        "href": "Action2.html#Ext-Action-cfg-scope",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 97,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "scope",
        "owner": "Ext.Action",
        "doc": "<p>The scope (<code><b>this</b></code> reference) in which the\n<code><a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a></code> is executed. Defaults to the browser window.</p>\n"
      },
      {
        "type": "String",
        "href": "Action2.html#Ext-Action-cfg-text",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action2.html",
        "linenr": 66,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "name": "text",
        "owner": "Ext.Action",
        "doc": "<p>The text to set for all components configured by this Action (defaults to '').</p>\n"
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
  "html_filename": "Action2.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.Action",
  "doc": "<p>An Action is a piece of reusable functionality that can be abstracted out of any particular component so that it\ncan be usefully shared among multiple components.  Actions let you share handlers, configuration options and UI\nupdates across any components that support the Action interface (primarily <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a>, <a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>\nand <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> components).</p>\n\n\n<p>Use a single Action instance as the config object for any number of UI Components which share the same configuration. The\nAction not only supplies the configuration, but allows all Components based upon it to have a common set of methods\ncalled at once through a single call to the Action.</p>\n\n\n<p>Any Component that is to be configured with an Action must also support\nthe following methods:<ul>\n<li><code>setText(string)</code></li>\n<li><code>setIconCls(string)</code></li>\n<li><code>setDisabled(boolean)</code></li>\n<li><code>setVisible(boolean)</code></li>\n<li><code>setHandler(function)</code></li></ul>.</p>\n\n\n<p>This allows the Action to control its associated Components.</p>\n\n\n<p>Example usage:<br></p>\n\n<pre><code>// Define the shared Action.  Each Component below will have the same\n// display text and icon, and will display the same message on click.\nvar action = new Ext.Action({\n    <a href=\"#/api/Ext.Action-cfg-text\" rel=\"Ext.Action-cfg-text\" class=\"docClass\">text</a>: 'Do something',\n    <a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a>: function(){\n        Ext.Msg.alert('Click', 'You did something.');\n    },\n    <a href=\"#/api/Ext.Action-cfg-iconCls\" rel=\"Ext.Action-cfg-iconCls\" class=\"docClass\">iconCls</a>: 'do-something',\n    <a href=\"#/api/Ext.Action-cfg-itemId\" rel=\"Ext.Action-cfg-itemId\" class=\"docClass\">itemId</a>: 'myAction'\n});\n\nvar panel = new Ext.panel.Panel({\n    title: 'Actions',\n    width: 500,\n    height: 300,\n    tbar: [\n        // Add the Action directly to a toolbar as a menu button\n        action,\n        {\n            text: 'Action Menu',\n            // Add the Action to a menu as a text item\n            menu: [action]\n        }\n    ],\n    items: [\n        // Add the Action to the panel body as a standard button\n        new Ext.button.Button(action)\n    ],\n    renderTo: Ext.getBody()\n});\n\n// Change the text for all components using the Action\naction.setText('Something else');\n\n// Reference an Action through a container using the itemId\nvar btn = panel.getComponent('myAction');\nvar aRef = btn.baseAction;\naRef.setText('New text');\n</code></pre>\n\n",
  "extends": "Ext.Base",
  "docauthor": null
});