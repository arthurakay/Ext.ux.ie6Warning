Ext.data.JsonP.Ext_form_field_VTypes({
  "href": "VTypes.html#Ext-form-field-VTypes",
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
        "shortDoc": "The function used to validate alpha values ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value</p>\n",
            "name": "value"
          }
        ],
        "href": "VTypes.html#Ext-form-field-VTypes-method-alpha",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 120,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alpha",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate alpha values</p>\n"
      },
      {
        "shortDoc": "The function used to validate alphanumeric values ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value</p>\n",
            "name": "value"
          }
        ],
        "href": "VTypes.html#Ext-form-field-VTypes-method-alphanum",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphanum",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate alphanumeric values</p>\n"
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
        "shortDoc": "The function used to validate email addresses. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The email address</p>\n",
            "name": "value"
          }
        ],
        "href": "VTypes.html#Ext-form-field-VTypes-method-email",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 77,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "email",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate email addresses.  Note that this is a very basic validation -- complete\nvalidation per the email RFC specifications is very complex and beyond the scope of this class, although\nthis function can be overridden if a more comprehensive validation scheme is desired.  See the validation\nsection of the <a href=\"http://en.wikipedia.org/wiki/E-mail_address\">Wikipedia article on email addresses</a>\nfor additional information.  This implementation is intended to validate the following emails:<tt>\n'barney@example.de', 'barney.rubble@example.com', 'barney-rubble@example.coop', 'barney+rubble@example.com'\n</tt>.</p>\n"
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
        "shortDoc": "The function used to validate URLs ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The URL</p>\n",
            "name": "value"
          }
        ],
        "href": "VTypes.html#Ext-form-field-VTypes-method-url",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 105,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "url",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate URLs</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "The keystroke filter mask to be applied on alpha input. ...",
        "type": "RegExp",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphaMask",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 134,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphaMask",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The keystroke filter mask to be applied on alpha input.  Defaults to:\n<tt>/[a-z_]/i</tt></p>\n"
      },
      {
        "shortDoc": "The error text to display when the alpha validation function returns false. ...",
        "type": "String",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphaText",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 128,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphaText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the alpha validation function returns false.  Defaults to:\n<tt>'This field should only contain letters and _'</tt></p>\n"
      },
      {
        "shortDoc": "The keystroke filter mask to be applied on alphanumeric input. ...",
        "type": "RegExp",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumMask",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 155,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphanumMask",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The keystroke filter mask to be applied on alphanumeric input.  Defaults to:\n<tt>/[a-z0-9_]/i</tt></p>\n"
      },
      {
        "shortDoc": "The error text to display when the alphanumeric validation function returns false. ...",
        "type": "String",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumText",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 149,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphanumText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the alphanumeric validation function returns false.  Defaults to:\n<tt>'This field should only contain letters, numbers and _'</tt></p>\n"
      },
      {
        "shortDoc": "The keystroke filter mask to be applied on email input. ...",
        "type": "RegExp",
        "href": "VTypes.html#Ext-form-field-VTypes-property-emailMask",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 97,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "emailMask",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The keystroke filter mask to be applied on email input.  See the <a href=\"#/api/Ext.form.field.VTypes-method-email\" rel=\"Ext.form.field.VTypes-method-email\" class=\"docClass\">email</a> method for\ninformation about more complex email validation. Defaults to:\n<tt>/[a-z0-9_.-@]/i</tt></p>\n"
      },
      {
        "shortDoc": "The error text to display when the email validation function returns false. ...",
        "type": "String",
        "href": "VTypes.html#Ext-form-field-VTypes-property-emailText",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 91,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "emailText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the email validation function returns false.  Defaults to:\n<tt>'This field should be an e-mail address in the format \"user@example.com\"'</tt></p>\n"
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
        "shortDoc": "The error text to display when the url validation function returns false. ...",
        "type": "String",
        "href": "VTypes.html#Ext-form-field-VTypes-property-urlText",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "VTypes.html",
        "linenr": 113,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "urlText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the url validation function returns false.  Defaults to:\n<tt>'This field should be a URL in the format \"http:/'+'/www.example.com\"'</tt></p>\n"
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
  "html_filename": "VTypes.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.form.field.VTypes",
  "doc": "<p>This is a singleton object which contains a set of commonly used field validation functions\nand provides a mechanism for creating reusable custom field validations.\nThe following field validation functions are provided out of the box:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-alpha\" rel=\"Ext.form.field.VTypes-method-alpha\" class=\"docClass\">alpha</a></li>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-alphanum\" rel=\"Ext.form.field.VTypes-method-alphanum\" class=\"docClass\">alphanum</a></li>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-email\" rel=\"Ext.form.field.VTypes-method-email\" class=\"docClass\">email</a></li>\n<li><a href=\"#/api/Ext.form.field.VTypes-method-url\" rel=\"Ext.form.field.VTypes-method-url\" class=\"docClass\">url</a></li>\n</ul>\n\n\n<p>VTypes can be applied to a <a href=\"#/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">Text Field</a> using the <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> configuration:</p>\n\n<pre><code>Ext.create('Ext.form.field.Text', {\n    fieldLabel: 'Email Address',\n    name: 'email',\n    vtype: 'email' // applies email validation rules to this field\n});\n</code></pre>\n\n<p>It's easy to create custom VTypes</p>\n\n<pre><code>// custom Vtype for vtype:'time'\nvar timeTest = /^([1-9]|1[0-9]):([0-5][0-9])(\\s[a|p]m)$/i;\nExt.apply(Ext.form.field.VTypes, {\n    //  vtype validation function\n    time: function(val, field) {\n        return timeTest.test(val);\n    },\n    // vtype Text property: The error text to display when the validation function returns false\n    timeText: 'Not a valid time.  Must be in the format \"12:34 PM\".',\n    // vtype Mask property: The keystroke filter mask\n    timeMask: /[\\d\\s:amp]/i\n});\n</code></pre>\n\n<p>In the above example the <code>time</code> function is the validator that will run when field validation occurs,\n<code>timeText</code> is the error message, and <code>timeMask</code> limits what characters can be typed into the field.\nNote that the <code>Text</code> and <code>Mask</code> functions must begin with the same name as the validator function.</p>\n\n<p>Using a custom validator is the same as using one of the build-in validators - just use the name of the validator function\nas the <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> configuration on a <a href=\"#/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">Text Field</a>:</p>\n\n<pre><code>Ext.create('Ext.form.field.Text', {\n    fieldLabel: 'Departure Time',\n    name: 'departureTime',\n    vtype: 'time' // applies custom time validation rules to this field\n});\n</code></pre>\n\n<p>Another example of a custom validator:</p>\n\n<pre><code>// custom Vtype for vtype:'IPAddress'\nExt.apply(Ext.form.field.VTypes, {\n    IPAddress:  function(v) {\n        return /^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(v);\n    },\n    IPAddressText: 'Must be a numeric IP address',\n    IPAddressMask: /[\\d\\.]/i\n});\n</code></pre>\n\n<p>It's important to note that using <a href=\"#/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply()</a> means that the custom validator function\nas well as <code>Text</code> and <code>Mask</code> fields are added as properties of the <code>Ext.form.field.VTypes</code> singleton.</p>\n",
  "extends": "Ext.Base",
  "docauthor": null
});