Ext.data.JsonP.Ext_XTemplate({
  "href": "XTemplate.html#Ext-XTemplate",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.Template"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new template. ...",
        "params": [
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>List of strings to be concatenated into template.\nAlternatively an array of strings can be given, but then no config object may be passed.</p>\n",
            "name": "html"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object</p>\n",
            "name": "config"
          }
        ],
        "href": "Template2.html#Ext-Template-method-constructor",
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
        "html_filename": "Template2.html",
        "linenr": 70,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.Template",
        "doc": "<p>Creates new template.</p>\n"
      },
      {
        "shortDoc": "Applies the supplied values to the template and appends the new node(s) to the specified el. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. See <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return an Ext.core.Element.</p>\n",
            "name": "returnElement"
          }
        ],
        "href": "Template2.html#Ext-Template-method-append",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 261,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "append",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied <code>values</code> to the template and appends the new node(s) to the specified <code>el</code>.</p>\n\n<p>For example usage see <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template class docs</a>.</p>\n"
      },
      {
        "shortDoc": "Alias for applyTemplate. ...",
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {0}, Age: {1}');\ntpl.applyTemplate(['John', 25]);\n</code></pre>\n\n<p>or an object:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {name}, Age: {age}');\ntpl.applyTemplate({name: 'John', age: 25});\n</code></pre>\n",
            "name": "values"
          }
        ],
        "href": "Template2.html#Ext-Template-method-apply",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "applyTemplate",
          "tagname": "alias",
          "cls": "Ext.Template",
          "doc": null
        },
        "return": {
          "type": "String",
          "doc": "<p>The HTML fragment</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 296,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "apply",
        "owner": "Ext.Template",
        "doc": "<p>Alias for <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a>.</p>\n\n<p>Returns an HTML fragment of this template with the specified values applied.</p>\n"
      },
      {
        "shortDoc": "Returns an HTML fragment of this template with the specified values applied. ...",
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {0}, Age: {1}');\ntpl.applyTemplate(['John', 25]);\n</code></pre>\n\n<p>or an object:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {name}, Age: {age}');\ntpl.applyTemplate({name: 'John', age: 25});\n</code></pre>\n",
            "name": "values"
          }
        ],
        "href": "Template2.html#Ext-Template-method-applyTemplate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The HTML fragment</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 130,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "applyTemplate",
        "owner": "Ext.Template",
        "doc": "<p>Returns an HTML fragment of this template with the specified values applied.</p>\n"
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
        "shortDoc": "Does nothing. ...",
        "params": [

        ],
        "href": "XTemplate.html#Ext-XTemplate-method-compile",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.XTemplate",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "XTemplate.html",
        "linenr": 435,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "name": "compile",
        "owner": "Ext.XTemplate",
        "doc": "<p>Does nothing. XTemplates are compiled automatically, so this function simply returns this.</p>\n"
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
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) after el. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. See <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a Ext.core.Element.</p>\n",
            "name": "returnElement"
          }
        ],
        "href": "Template2.html#Ext-Template-method-insertAfter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 249,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "insertAfter",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) after el.</p>\n"
      },
      {
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) before el. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. See <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a Ext.core.Element.</p>\n",
            "name": "returnElement"
          }
        ],
        "href": "Template2.html#Ext-Template-method-insertBefore",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 237,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "insertBefore",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) before el.</p>\n"
      },
      {
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) as the first child of el. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. See <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a Ext.core.Element.</p>\n",
            "name": "returnElement"
          }
        ],
        "href": "Template2.html#Ext-Template-method-insertFirst",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 225,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "insertFirst",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) as the first child of el.</p>\n"
      },
      {
        "shortDoc": "Applies the supplied values to the template and overwrites the content of el with the new node(s). ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. See <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a Ext.core.Element.</p>\n",
            "name": "returnElement"
          }
        ],
        "href": "Template2.html#Ext-Template-method-overwrite",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 281,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "overwrite",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and overwrites the content of el with the new node(s).</p>\n"
      },
      {
        "shortDoc": "Sets the HTML used as the template and optionally compiles it. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "html"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to compile the template.</p>\n",
            "name": "compile"
          }
        ],
        "href": "Template2.html#Ext-Template-method-set",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Template",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 175,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "set",
        "owner": "Ext.Template",
        "doc": "<p>Sets the HTML used as the template and optionally compiles it.</p>\n"
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
        "shortDoc": "The regular expression used to match code variables. ...",
        "type": "RegExp",
        "href": "XTemplate.html#Ext-XTemplate-cfg-codeRe",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "XTemplate.html",
        "linenr": 312,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "name": "codeRe",
        "owner": "Ext.XTemplate",
        "doc": "<p>The regular expression used to match code variables. Default: matches {[expression]}.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "XTemplate.html#Ext-XTemplate-cfg-compiled",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "XTemplate.html",
        "linenr": 318,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "name": "compiled",
        "owner": "Ext.XTemplate",
        "doc": "<p>Only applies to <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>, XTemplates are compiled automatically.</p>\n"
      },
      {
        "shortDoc": "True to disable format functions in the template. ...",
        "type": "Boolean",
        "href": "Template2.html#Ext-Template-cfg-disableFormats",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Template2.html",
        "linenr": 121,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "disableFormats",
        "owner": "Ext.Template",
        "doc": "<p>True to disable format functions in the template. If the template doesn't contain\nformat functions, setting disableFormats to true will reduce apply time. Defaults to false.</p>\n"
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
  "html_filename": "XTemplate.html",
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
        "shortDoc": "Creates a template from the passed element's value (display:none textarea, preferred) or innerHTML. ...",
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>A DOM element or its id</p>\n",
            "name": "el"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object</p>\n",
            "name": "config"
          }
        ],
        "href": "Template2.html#Ext-Template-method-from",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Template",
          "doc": "<p>The created template</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Template2.html",
        "linenr": 54,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "from",
        "owner": "Ext.Template",
        "doc": "<p>Creates a template from the passed element's value (<em>display:none</em> textarea, preferred) or innerHTML.</p>\n"
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.XTemplate",
  "doc": "<p>A template class that supports advanced functionality like:</p>\n\n<ul>\n<li>Autofilling arrays using templates and sub-templates</li>\n<li>Conditional processing with basic comparison operators</li>\n<li>Basic math function support</li>\n<li>Execute arbitrary inline code with special built-in template variables</li>\n<li>Custom member functions</li>\n<li>Many special tags and built-in operators that aren't defined as part of the API, but are supported in the templates that can be created</li>\n</ul>\n\n\n<p>XTemplate provides the templating mechanism built into:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">Ext.view.View</a></li>\n</ul>\n\n\n<p>The <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> describes the acceptable parameters to pass to the constructor. The following examples\ndemonstrate all of the supported features.</p>\n\n<h1>Sample Data</h1>\n\n<p>This is the data object used for reference in each code example:</p>\n\n<pre><code>var data = {\n    name: 'Tommy Maintz',\n    title: 'Lead Developer',\n    company: 'Sencha Inc.',\n    email: 'tommy@sencha.com',\n    address: '5 Cups Drive',\n    city: 'Palo Alto',\n    state: 'CA',\n    zip: '44102',\n    drinks: ['Coffee', 'Soda', 'Water'],\n    kids: [\n        {\n            name: 'Joshua',\n            age:3\n        },\n        {\n            name: 'Matthew',\n            age:2\n        },\n        {\n            name: 'Solomon',\n            age:0\n        }\n    ]\n};\n</code></pre>\n\n<h1>Auto filling of arrays</h1>\n\n<p>The <strong>tpl</strong> tag and the <strong>for</strong> operator are used to process the provided data object:</p>\n\n<ul>\n<li>If the value specified in for is an array, it will auto-fill, repeating the template block inside the tpl\ntag for each item in the array.</li>\n<li>If for=\".\" is specified, the data object provided is examined.</li>\n<li>While processing an array, the special variable {#} will provide the current array index + 1 (starts at 1, not 0).</li>\n</ul>\n\n\n<p>Examples:</p>\n\n<pre><code>&lt;tpl for=\".\"&gt;...&lt;/tpl&gt;       // loop through array at root node\n&lt;tpl for=\"foo\"&gt;...&lt;/tpl&gt;     // loop through array at foo node\n&lt;tpl for=\"foo.bar\"&gt;...&lt;/tpl&gt; // loop through array at foo.bar node\n</code></pre>\n\n<p>Using the sample data above:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\".\"&gt;',       // process the data.kids node\n        '&lt;p&gt;{#}. {name}&lt;/p&gt;',  // use current array index to autonumber\n    '&lt;/tpl&gt;&lt;/p&gt;'\n);\ntpl.overwrite(panel.body, data.kids); // pass the kids property of the data object\n</code></pre>\n\n<p>An example illustrating how the <strong>for</strong> property can be leveraged to access specified members of the provided data\nobject to populate the template:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Name: {name}&lt;/p&gt;',\n    '&lt;p&gt;Title: {title}&lt;/p&gt;',\n    '&lt;p&gt;Company: {company}&lt;/p&gt;',\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\"kids\"&gt;',     // interrogate the kids property within the data\n        '&lt;p&gt;{name}&lt;/p&gt;',\n    '&lt;/tpl&gt;&lt;/p&gt;'\n);\ntpl.overwrite(panel.body, data);  // pass the root node of the data object\n</code></pre>\n\n<p>Flat arrays that contain values (and not objects) can be auto-rendered using the special <strong><code>{.}</code></strong> variable inside a\nloop. This variable will represent the value of the array at the current index:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;{name}\\'s favorite beverages:&lt;/p&gt;',\n    '&lt;tpl for=\"drinks\"&gt;',\n        '&lt;div&gt; - {.}&lt;/div&gt;',\n    '&lt;/tpl&gt;'\n);\ntpl.overwrite(panel.body, data);\n</code></pre>\n\n<p>When processing a sub-template, for example while looping through a child array, you can access the parent object's\nmembers via the <strong>parent</strong> object:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Name: {name}&lt;/p&gt;',\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\"kids\"&gt;',\n        '&lt;tpl if=\"age &amp;gt; 1\"&gt;',\n            '&lt;p&gt;{name}&lt;/p&gt;',\n            '&lt;p&gt;Dad: {parent.name}&lt;/p&gt;',\n        '&lt;/tpl&gt;',\n    '&lt;/tpl&gt;&lt;/p&gt;'\n);\ntpl.overwrite(panel.body, data);\n</code></pre>\n\n<h1>Conditional processing with basic comparison operators</h1>\n\n<p>The <strong>tpl</strong> tag and the <strong>if</strong> operator are used to provide conditional checks for deciding whether or not to render\nspecific parts of the template. Notes:</p>\n\n<ul>\n<li>Double quotes must be encoded if used within the conditional</li>\n<li>There is no else operator -- if needed, two opposite if statements should be used.</li>\n</ul>\n\n\n<p>Examples:</p>\n\n<pre><code>&lt;tpl if=\"age &gt; 1 &amp;&amp; age &lt; 10\"&gt;Child&lt;/tpl&gt;\n&lt;tpl if=\"age &gt;= 10 &amp;&amp; age &lt; 18\"&gt;Teenager&lt;/tpl&gt;\n&lt;tpl if=\"this.isGirl(name)\"&gt;...&lt;/tpl&gt;\n&lt;tpl if=\"id==\\'download\\'\"&gt;...&lt;/tpl&gt;\n&lt;tpl if=\"needsIcon\"&gt;&lt;img src=\"{icon}\" class=\"{iconCls}\"/&gt;&lt;/tpl&gt;\n// no good:\n&lt;tpl if=\"name == \"Tommy\"\"&gt;Hello&lt;/tpl&gt;\n// encode \" if it is part of the condition, e.g.\n&lt;tpl if=\"name == &amp;quot;Tommy&amp;quot;\"&gt;Hello&lt;/tpl&gt;\n</code></pre>\n\n<p>Using the sample data above:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Name: {name}&lt;/p&gt;',\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\"kids\"&gt;',\n        '&lt;tpl if=\"age &amp;gt; 1\"&gt;',\n            '&lt;p&gt;{name}&lt;/p&gt;',\n        '&lt;/tpl&gt;',\n    '&lt;/tpl&gt;&lt;/p&gt;'\n);\ntpl.overwrite(panel.body, data);\n</code></pre>\n\n<h1>Basic math support</h1>\n\n<p>The following basic math operators may be applied directly on numeric data values:</p>\n\n<pre><code>+ - * /\n</code></pre>\n\n<p>For example:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Name: {name}&lt;/p&gt;',\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\"kids\"&gt;',\n        '&lt;tpl if=\"age &amp;gt; 1\"&gt;',  // &lt;-- Note that the &gt; is encoded\n            '&lt;p&gt;{#}: {name}&lt;/p&gt;',  // &lt;-- Auto-number each item\n            '&lt;p&gt;In 5 Years: {age+5}&lt;/p&gt;',  // &lt;-- Basic math\n            '&lt;p&gt;Dad: {parent.name}&lt;/p&gt;',\n        '&lt;/tpl&gt;',\n    '&lt;/tpl&gt;&lt;/p&gt;'\n);\ntpl.overwrite(panel.body, data);\n</code></pre>\n\n<h1>Execute arbitrary inline code with special built-in template variables</h1>\n\n<p>Anything between <code>{[ ... ]}</code> is considered code to be executed in the scope of the template. There are some special\nvariables available in that code:</p>\n\n<ul>\n<li><strong>values</strong>: The values in the current scope. If you are using scope changing sub-templates,\nyou can change what values is.</li>\n<li><strong>parent</strong>: The scope (values) of the ancestor template.</li>\n<li><strong>xindex</strong>: If you are in a looping template, the index of the loop you are in (1-based).</li>\n<li><strong>xcount</strong>: If you are in a looping template, the total length of the array you are looping.</li>\n</ul>\n\n\n<p>This example demonstrates basic row striping using an inline code block and the xindex variable:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Name: {name}&lt;/p&gt;',\n    '&lt;p&gt;Company: {[values.company.toUpperCase() + \", \" + values.title]}&lt;/p&gt;',\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\"kids\"&gt;',\n        '&lt;div class=\"{[xindex % 2 === 0 ? \"even\" : \"odd\"]}\"&gt;',\n        '{name}',\n        '&lt;/div&gt;',\n    '&lt;/tpl&gt;&lt;/p&gt;'\n );\ntpl.overwrite(panel.body, data);\n</code></pre>\n\n<h1>Template member functions</h1>\n\n<p>One or more member functions can be specified in a configuration object passed into the XTemplate constructor for\nmore complex processing:</p>\n\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p&gt;Name: {name}&lt;/p&gt;',\n    '&lt;p&gt;Kids: ',\n    '&lt;tpl for=\"kids\"&gt;',\n        '&lt;tpl if=\"this.isGirl(name)\"&gt;',\n            '&lt;p&gt;Girl: {name} - {age}&lt;/p&gt;',\n        '&lt;/tpl&gt;',\n         // use opposite if statement to simulate 'else' processing:\n        '&lt;tpl if=\"this.isGirl(name) == false\"&gt;',\n            '&lt;p&gt;Boy: {name} - {age}&lt;/p&gt;',\n        '&lt;/tpl&gt;',\n        '&lt;tpl if=\"this.isBaby(age)\"&gt;',\n            '&lt;p&gt;{name} is a baby!&lt;/p&gt;',\n        '&lt;/tpl&gt;',\n    '&lt;/tpl&gt;&lt;/p&gt;',\n    {\n        // XTemplate configuration:\n        disableFormats: true,\n        // member functions:\n        isGirl: function(name){\n           return name == 'Sara Grace';\n        },\n        isBaby: function(age){\n           return age &lt; 1;\n        }\n    }\n);\ntpl.overwrite(panel.body, data);\n</code></pre>\n",
  "extends": "Ext.Template",
  "docauthor": null
});