Ext.data.JsonP.Ext_data_Operation({
  "href": "Operation.html#Ext-data-Operation",
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
        "shortDoc": "Creates new Operation object. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Operation.html#Ext-data-Operation-method-constructor",
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
        "html_filename": "Operation.html",
        "linenr": 120,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.data.Operation",
        "doc": "<p>Creates new Operation object.</p>\n"
      },
      {
        "shortDoc": "Checks whether this operation should cause writing to occur. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-allowWrite",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>Whether the operation should cause a write to occur.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 239,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "allowWrite",
        "owner": "Ext.data.Operation",
        "doc": "<p>Checks whether this operation should cause writing to occur.</p>\n"
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
        "shortDoc": "Returns the error string or object that was set using setException ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-getError",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>The error object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 170,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "getError",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n"
      },
      {
        "shortDoc": "Returns an array of Ext.data.Model instances as set by the Proxy. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-getRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Ext.data.Model]",
          "doc": "<p>Any loaded Records</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 178,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "getRecords",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n"
      },
      {
        "shortDoc": "Returns the ResultSet object (if set by the Proxy). ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-getResultSet",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The ResultSet object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 188,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "getResultSet",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns the ResultSet object (if set by the Proxy). This object will contain the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a>\ninstances as well as meta data such as number of instances fetched, number available etc</p>\n"
      },
      {
        "shortDoc": "Returns true if this Operation encountered an exception (see also getError) ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-hasException",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if there was an exception</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 162,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "hasException",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n"
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
        "shortDoc": "Returns true if the Operation has been completed ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-isComplete",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation is complete</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 214,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "isComplete",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been completed</p>\n"
      },
      {
        "shortDoc": "Returns true if the Operation has been started but has not yet completed. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-isRunning",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation is currently running</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 206,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "isRunning",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n"
      },
      {
        "shortDoc": "Returns true if the Operation has been started. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-isStarted",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation has started</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 197,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "isStarted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been started. Note that the Operation may have started AND completed, see\n<a href=\"#/api/Ext.data.Operation-method-isRunning\" rel=\"Ext.data.Operation-method-isRunning\" class=\"docClass\">isRunning</a> to test if the Operation is currently running.</p>\n"
      },
      {
        "shortDoc": "Marks the Operation as completed. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-setCompleted",
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
        "html_filename": "Operation.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "setCompleted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as completed.</p>\n"
      },
      {
        "shortDoc": "Marks the Operation as having experienced an exception. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional) error string/object</p>\n",
            "name": "error"
          }
        ],
        "href": "Operation.html#Ext-data-Operation-method-setException",
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
        "html_filename": "Operation.html",
        "linenr": 151,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "setException",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n"
      },
      {
        "shortDoc": "Marks the Operation as started. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-setStarted",
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
        "html_filename": "Operation.html",
        "linenr": 128,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "setStarted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as started.</p>\n"
      },
      {
        "shortDoc": "Marks the Operation as successful. ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-setSuccessful",
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
        "html_filename": "Operation.html",
        "linenr": 144,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "setSuccessful",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as successful.</p>\n"
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
        "shortDoc": "Returns true if the Operation has completed and was successful ...",
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-wasSuccessful",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if successful</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 222,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "wasSuccessful",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has completed and was successful</p>\n"
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
        "shortDoc": "The action being performed by this Operation. ...",
        "type": "String",
        "href": "Operation.html#Ext-data-Operation-cfg-action",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "action",
        "owner": "Ext.data.Operation",
        "doc": "<p>The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'.</p>\n"
      },
      {
        "type": "Ext.data.Batch",
        "href": "Operation.html#Ext-data-Operation-cfg-batch",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 54,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "batch",
        "owner": "Ext.data.Operation",
        "doc": "<p>The batch that this Operation is a part of.</p>\n"
      },
      {
        "shortDoc": "Function to execute when operation completed. ...",
        "type": "Function",
        "href": "Operation.html#Ext-data-Operation-cfg-callback",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 60,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "callback",
        "owner": "Ext.data.Operation",
        "doc": "<p>Function to execute when operation completed.  Will be called with the following parameters:</p>\n\n<ul>\n<li>records : Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects.</li>\n<li>operation : The Ext.data.Operation itself.</li>\n<li>success : True when operation completed successfully.</li>\n</ul>\n\n"
      },
      {
        "shortDoc": "Optional array of filter objects. ...",
        "type": "[Ext.util.Filter]",
        "href": "Operation.html#Ext-data-Operation-cfg-filters",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 24,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "filters",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional array of filter objects. Only applies to 'read' actions.</p>\n"
      },
      {
        "shortDoc": "Optional grouping configuration. ...",
        "type": "Ext.util.Grouper",
        "href": "Operation.html#Ext-data-Operation-cfg-group",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 36,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "group",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional grouping configuration. Only applies to 'read' actions where grouping is desired.</p>\n"
      },
      {
        "shortDoc": "The number of records to load. ...",
        "type": "Number",
        "href": "Operation.html#Ext-data-Operation-cfg-limit",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 48,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "limit",
        "owner": "Ext.data.Operation",
        "doc": "<p>The number of records to load. Used on 'read' actions when paging is being used.</p>\n"
      },
      {
        "type": "Object",
        "href": "Operation.html#Ext-data-Operation-cfg-scope",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 70,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "scope",
        "owner": "Ext.data.Operation",
        "doc": "<p>Scope for the <a href=\"#/api/Ext.data.Operation-cfg-callback\" rel=\"Ext.data.Operation-cfg-callback\" class=\"docClass\">callback</a> function.</p>\n"
      },
      {
        "shortDoc": "Optional array of sorter objects. ...",
        "type": "[Ext.util.Sorter]",
        "href": "Operation.html#Ext-data-Operation-cfg-sorters",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 30,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "sorters",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional array of sorter objects. Only applies to 'read' actions.</p>\n"
      },
      {
        "type": "Number",
        "href": "Operation.html#Ext-data-Operation-cfg-start",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 42,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "start",
        "owner": "Ext.data.Operation",
        "doc": "<p>The start index (offset), used in paging when running a 'read' action.</p>\n"
      },
      {
        "shortDoc": "True if this Operation is to be executed synchronously (defaults to true). ...",
        "type": "Boolean",
        "href": "Operation.html#Ext-data-Operation-cfg-synchronous",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Operation.html",
        "linenr": 11,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "synchronous",
        "owner": "Ext.data.Operation",
        "doc": "<p>True if this Operation is to be executed synchronously (defaults to true). This property is inspected by a\n<a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Batch</a> to see if a series of Operations can be executed in parallel or not.</p>\n"
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
  "html_filename": "Operation.html",
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
  "author": "Ed Spencer",
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.Operation",
  "doc": "<p>Represents a single read or write operation performed by a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>. Operation objects are\nused to enable communication between Stores and Proxies. Application developers should rarely need to interact with\nOperation objects directly.</p>\n\n<p>Several Operations can be batched together in a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">batch</a>.</p>\n",
  "extends": "Ext.Base",
  "docauthor": null
});