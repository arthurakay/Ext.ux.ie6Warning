Ext.data.JsonP.Ext_ClassManager({
  "href": "ClassManager.html#Ext-ClassManager",
  "component": false,
  "singleton": true,
  "code_type": "nop",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Defines a class. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The class name to create in string dot-namespaced format, for example:\n'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager'\nIt is highly recommended to follow this simple convention:</p>\n\n<ul>\n<li>The root and the class name are 'CamelCased'</li>\n<li>Everything else is lower-cased</li>\n</ul>\n\n",
            "name": "className"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The key - value pairs of properties to apply to this class. Property names can be of any valid\nstrings, except those in the reserved list below:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alternateClassName\" rel=\"Ext.Class-cfg-alternateClassName\" class=\"docClass\">alternateClassName</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-config\" rel=\"Ext.Class-cfg-config\" class=\"docClass\">config</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-extend\" rel=\"Ext.Class-cfg-extend\" class=\"docClass\">extend</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-inheritableStatics\" rel=\"Ext.Class-cfg-inheritableStatics\" class=\"docClass\">inheritableStatics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-mixins\" rel=\"Ext.Class-cfg-mixins\" class=\"docClass\">mixins</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-requires\" rel=\"Ext.Class-cfg-requires\" class=\"docClass\">requires</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-singleton\" rel=\"Ext.Class-cfg-singleton\" class=\"docClass\">singleton</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-uses\" rel=\"Ext.Class-cfg-uses\" class=\"docClass\">uses</a></li>\n</ul>\n\n",
            "name": "data"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional callback to execute after the class is created, the execution scope of which\n(<code>this</code>) will be the newly created class itself.</p>\n",
            "name": "createdFn"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 396,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "create",
        "owner": "Ext.ClassManager",
        "doc": "<p>Defines a class.</p>\n\n<pre><code>Ext.ClassManager.create('My.awesome.Class', {\n    someProperty: 'something',\n    someMethod: function() { ... }\n    ...\n\n}, function() {\n    alert('Created!');\n    alert(this === My.awesome.Class); // alerts true\n\n    var myInstance = new this();\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> is alias for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>.</p>\n"
      },
      {
        "shortDoc": "Retrieve a class by its name. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-get",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Class",
          "doc": "<p>class</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 254,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "get",
        "owner": "Ext.ClassManager",
        "doc": "<p>Retrieve a class by its name.</p>\n"
      },
      {
        "shortDoc": "Get the aliases of a class by the class name ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getAliasesByName",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>aliases</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 355,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getAliasesByName",
        "owner": "Ext.ClassManager",
        "doc": "<p>Get the aliases of a class by the class name</p>\n"
      },
      {
        "shortDoc": "Get a reference to the class by its alias. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "alias"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getByAlias",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Class",
          "doc": "<p>class</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 325,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getByAlias",
        "owner": "Ext.ClassManager",
        "doc": "<p>Get a reference to the class by its alias.</p>\n"
      },
      {
        "shortDoc": "Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getClass",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Class",
          "doc": "<p>class</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 379,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getClass",
        "owner": "Ext.ClassManager",
        "doc": "<p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define.</p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a>.</p>\n"
      },
      {
        "shortDoc": " ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getDisplayName",
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
        "html_filename": "ClassManager.html",
        "linenr": 1065,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getDisplayName",
        "owner": "Ext.ClassManager",
        "doc": "\n"
      },
      {
        "shortDoc": "Get the name of the class by its reference or its instance. ...",
        "params": [
          {
            "type": "Class/Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getName",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 365,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getName",
        "owner": "Ext.ClassManager",
        "doc": "<p>Get the name of the class by its reference or its instance.</p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getName\" rel=\"Ext.ClassManager-method-getName\" class=\"docClass\">Ext.ClassManager.getName</a>.</p>\n"
      },
      {
        "shortDoc": "Get the name of a class by its alias. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "alias"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlias",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 335,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getNameByAlias",
        "owner": "Ext.ClassManager",
        "doc": "<p>Get the name of a class by its alias.</p>\n"
      },
      {
        "shortDoc": "Get the name of a class by its alternate name. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "alternate"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlternate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 345,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getNameByAlternate",
        "owner": "Ext.ClassManager",
        "doc": "<p>Get the name of a class by its alternate name.</p>\n"
      },
      {
        "shortDoc": "Converts a string expression to an array of matching class names. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "expression"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-getNamesByExpression",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>classNames</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 774,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getNamesByExpression",
        "owner": "Ext.ClassManager",
        "doc": "<p>Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor class names. Expressions support wildcards:</p>\n\n<pre><code>// returns ['Ext.window.Window']\nvar window = Ext.ClassManager.getNamesByExpression('widget.window');\n\n// returns ['widget.panel', 'widget.window', ...]\nvar allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');\n\n// returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]\nvar allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');\n</code></pre>\n"
      },
      {
        "shortDoc": "Instantiate a class by either full name, alias or alternate name. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>,... Additional arguments after the name will be passed to the class' constructor.</p>\n",
            "name": "args"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-instantiate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 555,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "instantiate",
        "owner": "Ext.ClassManager",
        "doc": "<p>Instantiate a class by either full name, alias or alternate name.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a>.</p>\n"
      },
      {
        "shortDoc": "Instantiate a class by its alias. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "alias"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>,... Additional arguments after the alias will be passed to the\nclass constructor.</p>\n",
            "name": "args"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-instantiateByAlias",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 507,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "instantiateByAlias",
        "owner": "Ext.ClassManager",
        "doc": "<p>Instantiate a class by its alias.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a>.</p>\n"
      },
      {
        "shortDoc": "Checks if a class has already been created. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-isCreated",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>exist</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 68,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "isCreated",
        "owner": "Ext.ClassManager",
        "doc": "<p>Checks if a class has already been created.</p>\n"
      },
      {
        "shortDoc": "Register a post-processor function. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "\n",
            "name": "postprocessor"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-registerPostprocessor",
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
        "html_filename": "ClassManager.html",
        "linenr": 707,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "registerPostprocessor",
        "owner": "Ext.ClassManager",
        "doc": "<p>Register a post-processor function.</p>\n"
      },
      {
        "shortDoc": "Sets a name reference to a class. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "value"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-set",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.ClassManager",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 235,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "set",
        "owner": "Ext.ClassManager",
        "doc": "<p>Sets a name reference to a class.</p>\n"
      },
      {
        "shortDoc": "Register the alias for a class. ...",
        "params": [
          {
            "type": "Class/String",
            "optional": false,
            "doc": "<p>a reference to a class or a className</p>\n",
            "name": "cls"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Alias to use when referring to this class</p>\n",
            "name": "alias"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-setAlias",
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
        "html_filename": "ClassManager.html",
        "linenr": 286,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "setAlias",
        "owner": "Ext.ClassManager",
        "doc": "<p>Register the alias for a class.</p>\n"
      },
      {
        "shortDoc": "Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The post-processor name. Note that it needs to be registered with\n<a href=\"#/api/Ext.ClassManager-method-registerPostprocessor\" rel=\"Ext.ClassManager-method-registerPostprocessor\" class=\"docClass\">registerPostprocessor</a> before this</p>\n",
            "name": "name"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n",
            "name": "offset"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "relativeName"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessorPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.ClassManager",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 735,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "setDefaultPostprocessorPosition",
        "owner": "Ext.ClassManager",
        "doc": "<p>Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor</p>\n"
      },
      {
        "shortDoc": "Set the default post processors array stack which are applied to every class. ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>name of a registered post processor or an array of registered names.</p>\n",
            "name": "The"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessors",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.ClassManager",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 723,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "setDefaultPostprocessors",
        "owner": "Ext.ClassManager",
        "doc": "<p>Set the default post processors array stack which are applied to every class.</p>\n"
      },
      {
        "shortDoc": "Creates a namespace and assign the value to the created object\n\nExt.ClassManager.setNamespace('MyCompany.pkg.Example'...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "value"
          }
        ],
        "href": "ClassManager.html#Ext-ClassManager-method-setNamespace",
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
        "html_filename": "ClassManager.html",
        "linenr": 171,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "setNamespace",
        "owner": "Ext.ClassManager",
        "doc": "<p>Creates a namespace and assign the <code>value</code> to the created object</p>\n\n<pre><code>Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);\n\nalert(MyCompany.pkg.Example === someObject); // alerts true\n</code></pre>\n"
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
  "html_filename": "ClassManager.html",
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
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.ClassManager",
  "doc": "<p>Ext.ClassManager manages all classes and handles mapping from string class name to\nactual class objects throughout the whole framework. It is not generally accessed directly, rather through\nthese convenient shorthands:</p>\n\n<ul>\n<li><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></li>\n<li><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></li>\n<li><a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a></li>\n<li><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></li>\n<li><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></li>\n</ul>\n\n",
  "extends": null,
  "docauthor": "Jacky Nguyen <jacky@sencha.com>"
});