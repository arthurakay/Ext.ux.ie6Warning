Ext.data.JsonP.Ext_data_reader_Json({
  "href": "Json.html#Ext-data-reader-Json",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.data.reader.Reader"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Reader. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
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
        "html_filename": "Reader.html",
        "linenr": 183,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Creates new Reader.</p>\n"
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
        "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The responce object</p>\n",
            "name": "response"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The useful data from the response</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 446,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "getResponseData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be\nimplemented by each subclass</p>\n"
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
        "shortDoc": "Reads the given response object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n",
            "name": "response"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-read",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The parsed ResultSet object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 215,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "read",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Json-method-readRecords\" rel=\"Ext.data.reader.Json-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n"
      },
      {
        "shortDoc": "Reads a JSON object and returns a ResultSet. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The raw JSON data</p>\n",
            "name": "data"
          }
        ],
        "href": "Json.html#Ext-data-reader-Json-method-readRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>A ResultSet containing model instances and meta data about the results</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Json.html",
        "linenr": 181,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "readRecords",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to\nretrieve meta data from the response, and extractData to turn the JSON data into model instances.</p>\n"
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
        "shortDoc": "DEPRECATED - will be removed in Ext JS 5.0. ...",
        "type": "Mixed",
        "href": "Json.html#Ext-data-reader-Json-property-jsonData",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Json.html",
        "linenr": 193,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "jsonData",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>DEPRECATED - will be removed in <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 5.0. This is just a copy of this.rawData - use that instead</p>\n"
      },
      {
        "shortDoc": "The raw data object that was last passed to readRecords. ...",
        "type": "Mixed",
        "href": "Reader.html#Ext-data-reader-Reader-property-rawData",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 255,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "rawData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n"
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
      }
    ],
    "cfg": [
      {
        "shortDoc": "Name of the property within a row object that contains a record identifier value. ...",
        "type": "String",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "idProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property within a row object that contains a record identifier value. Defaults to The id of the\nmodel. If an idProperty is explicitly specified it will override that of the one specified on the model</p>\n"
      },
      {
        "shortDoc": "True to automatically parse models nested within other models in a response object. ...",
        "type": "Boolean",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 174,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "implicitIncludes",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>True to automatically parse models nested within other models in a response object. See the\n<a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n"
      },
      {
        "shortDoc": "The name of the property which contains a response message. ...",
        "type": "String",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 169,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "messageProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The name of the property which contains a response message. This property is optional.</p>\n"
      },
      {
        "shortDoc": "The optional location within the JSON response that the record data itself can be found at. ...",
        "type": "String",
        "href": "Json.html#Ext-data-reader-Json-cfg-record",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Json.html",
        "linenr": 167,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "record",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>The optional location within the JSON response that the record data itself can be found at.\nSee the JsonReader intro docs for more details. This is not often needed and defaults to undefined.</p>\n"
      },
      {
        "shortDoc": "(Required) The name of the property which contains the Array of row objects. ...",
        "type": "String",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 161,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "root",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p><strong>(Required)</strong> The name of the property which contains the Array of row objects. Defaults to undefined. An\nexception will be thrown if the root property is undefined. The data packet value for this property should be an\nempty array to clear the data or show no data.</p>\n"
      },
      {
        "shortDoc": "Name of the property from which to retrieve the success attribute. ...",
        "type": "String",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 154,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "successProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to retrieve the success attribute. Defaults to success. See\n<a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a>.<a href=\"#/api/Ext.data.proxy.Server-event-exception\" rel=\"Ext.data.proxy.Server-event-exception\" class=\"docClass\">exception</a> for additional information.</p>\n"
      },
      {
        "shortDoc": "Name of the property from which to retrieve the total number of records in the dataset. ...",
        "type": "String",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Reader.html",
        "linenr": 147,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "totalProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to retrieve the total number of records in the dataset. This is only needed if\nthe whole dataset is not passed in one go, but is being paged from the remote server. Defaults to total.</p>\n"
      },
      {
        "shortDoc": "True to ensure that field names/mappings are treated as literals when\nreading values. ...",
        "type": "Boolean",
        "href": "Json.html#Ext-data-reader-Json-cfg-useSimpleAccessors",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Json.html",
        "linenr": 172,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "useSimpleAccessors",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>True to ensure that field names/mappings are treated as literals when\nreading values. Defalts to <tt>false</tt>.\nFor example, by default, using the mapping \"foo.bar.baz\" will try and read a property foo from the root, then a property bar\nfrom foo, then a property baz from bar. Setting the simple accessors to true will read the property with the name\n\"foo.bar.baz\" direct from the root object.</p>\n"
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
    "Ext.data.JsonReader"
  ],
  "html_filename": "Json.html",
  "statics": {
    "method": [
      {
        "href": "Base3.html#Ext-Base-method-addStatics",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "members",
            "doc": "\n"
          }
        ],
        "shortDoc": "Add / override static properties of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 392,
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "addStatics"
      },
      {
        "href": "Base3.html#Ext-Base-method-borrow",
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n\n"
          },
          {
            "type": "Array/String",
            "optional": false,
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n\n"
          }
        ],
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 482,
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "borrow"
      },
      {
        "href": "Base3.html#Ext-Base-method-create",
        "params": [

        ],
        "shortDoc": "Create a new instance of this Class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 330,
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "owner": "Ext.Base",
        "name": "create"
      },
      {
        "href": "Base3.html#Ext-Base-method-createAlias",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n"
          },
          {
            "type": "String/Object",
            "optional": false,
            "name": "origin",
            "doc": "<p>The original method name</p>\n\n"
          }
        ],
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 658,
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "createAlias"
      },
      {
        "href": "Base3.html#Ext-Base-method-getName",
        "params": [

        ],
        "shortDoc": "Get the current class' name in string format. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 639,
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "getName"
      },
      {
        "href": "Base3.html#Ext-Base-method-implement",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "members",
            "doc": "\n"
          }
        ],
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 420,
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "implement"
      },
      {
        "href": "Base3.html#Ext-Base-method-override",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "members",
            "doc": "\n"
          }
        ],
        "shortDoc": "Override prototype members of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 524,
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "override"
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
    "Ext.data.reader.Array"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.reader.Json",
  "doc": "<p>The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually\nhappens as a result of loading a Store - for example we might create something like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email']\n});\n\nvar store = new Ext.data.Store({\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json'\n        }\n    }\n});\n</code></pre>\n\n\n\n\n<p>The example above creates a 'User' model. Models are explained in the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> docs if you're\nnot already familiar with them.</p>\n\n\n\n\n<p>We created the simplest type of JSON Reader possible by simply telling our <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s \n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a> that we want a JSON Reader. The Store automatically passes the configured model to the\nStore, so it is as if we passed this instead:\n\n<pre><code>reader: {\n    type : 'json',\n    model: 'User'\n}\n</code></pre>\n\n<p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>\n\n<pre><code>[\n    {\n        \"id\": 1,\n        \"name\": \"Ed Spencer\",\n        \"email\": \"ed@sencha.com\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Abe Elias\",\n        \"email\": \"abe@sencha.com\"\n    }\n]\n</code></pre>\n\n<p><u>Reading other JSON formats</u></p>\n\n<p>If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually\npass JsonReader a couple of configuration options to make it parse your format. For example, we can use the \n<a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> configuration to parse data that comes back like this:</p>\n\n<pre><code>{\n    \"users\": [\n       {\n           \"id\": 1,\n           \"name\": \"Ed Spencer\",\n           \"email\": \"ed@sencha.com\"\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Abe Elias\",\n           \"email\": \"abe@sencha.com\"\n       }\n    ]\n}\n</code></pre>\n\n<p>To parse this we just pass in a <a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> configuration that matches the 'users' above:</p>\n\n<pre><code>reader: {\n    type: 'json',\n    root: 'users'\n}\n</code></pre>\n\n<p>Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata\naround each record inside a nested structure like this:</p>\n\n<pre><code>{\n    \"total\": 122,\n    \"offset\": 0,\n    \"users\": [\n        {\n            \"id\": \"ed-spencer-1\",\n            \"value\": 1,\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Ed Spencer\",\n                \"email\": \"ed@sencha.com\"\n            }\n        }\n    ]\n}\n</code></pre>\n\n<p>In the case above the record data is nested an additional level inside the \"users\" array as each \"user\" item has\nadditional metadata surrounding it ('id' and 'value' in this case). To parse data out of each \"user\" item in the \nJSON above we need to specify the <a href=\"#/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a> configuration like this:</p>\n\n<pre><code>reader: {\n    type  : 'json',\n    root  : 'users',\n    record: 'user'\n}\n</code></pre>\n\n<p><u>Response metadata</u></p>\n\n<p>The server can return additional data in its response, such as the <a href=\"#/api/Ext.data.reader.Json-cfg-totalProperty\" rel=\"Ext.data.reader.Json-cfg-totalProperty\" class=\"docClass\">total number of records</a> \nand the <a href=\"#/api/Ext.data.reader.Json-cfg-successProperty\" rel=\"Ext.data.reader.Json-cfg-successProperty\" class=\"docClass\">success status of the response</a>. These are typically included in the JSON response\nlike this:</p>\n\n<pre><code>{\n    \"total\": 100,\n    \"success\": true,\n    \"users\": [\n        {\n            \"id\": 1,\n            \"name\": \"Ed Spencer\",\n            \"email\": \"ed@sencha.com\"\n        }\n    ]\n}\n</code></pre>\n\n<p>If these properties are present in the JSON response they can be parsed out by the JsonReader and used by the\nStore that loaded it. We can set up the names of these properties by specifying a final pair of configuration \noptions:</p>\n\n<pre><code>reader: {\n    type : 'json',\n    root : 'users',\n    totalProperty  : 'total',\n    successProperty: 'success'\n}\n</code></pre>\n\n<p>These final options are not necessary to make the Reader work, but can be useful when the server needs to report\nan error or if it needs to indicate that there is a lot of data available of which only a subset is currently being\nreturned.</p>\n\n",
  "extends": "Ext.data.reader.Reader",
  "docauthor": null
});