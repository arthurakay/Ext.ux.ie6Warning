Ext.data.JsonP.Ext_data_validations({
  "href": "validations.html#Ext-data-validations",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Validates that the given value is present in the configured list. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "href": "validations.html#Ext-data-validations-method-exclusion",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is not present in the list</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 113,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "exclusion",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']}]\n</code></pre>\n"
      },
      {
        "shortDoc": "Returns true if the given value passes validation against the configured matcher regex. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "href": "validations.html#Ext-data-validations-method-format",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value passes the format validation</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 85,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "format",
        "owner": "Ext.data.validations",
        "doc": "<p>Returns true if the given value passes validation against the configured <code>matcher</code> regex.\nFor example:</p>\n\n<pre><code>validations: [{type: 'format', field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}]\n</code></pre>\n"
      },
      {
        "shortDoc": "Validates that the given value is present in the configured list. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "href": "validations.html#Ext-data-validations-method-inclusion",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is present in the list</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 99,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "inclusion",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'inclusion', field: 'gender', list: ['Male', 'Female']}]\n</code></pre>\n"
      },
      {
        "shortDoc": "Returns true if the given value is between the configured min and max values. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "href": "validations.html#Ext-data-validations-method-length",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value passes validation</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 59,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "length",
        "owner": "Ext.data.validations",
        "doc": "<p>Returns true if the given value is between the configured min and max values.\nFor example:</p>\n\n<pre><code>validations: [{type: 'length', field: 'name', min: 2}]\n</code></pre>\n"
      },
      {
        "shortDoc": "Validates that the given value is present. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Config object</p>\n",
            "name": "config"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "href": "validations.html#Ext-data-validations-method-presence",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if validation passed</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 41,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "presence",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present.\nFor example:</p>\n\n<pre><code>validations: [{type: 'presence', field: 'age'}]\n</code></pre>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "String",
        "href": "validations.html#Ext-data-validations-property-exclusionMessage",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 35,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "exclusionMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when an exclusion validation fails.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "validations.html#Ext-data-validations-property-formatMessage",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 23,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "formatMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a format validation fails.</p>\n"
      },
      {
        "type": "String",
        "href": "validations.html#Ext-data-validations-property-inclusionMessage",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 29,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "inclusionMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when an inclusion validation fails.</p>\n"
      },
      {
        "type": "String",
        "href": "validations.html#Ext-data-validations-property-lengthMessage",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 17,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "lengthMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a length validation fails.</p>\n"
      },
      {
        "type": "String",
        "href": "validations.html#Ext-data-validations-property-presenceMessage",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "validations.html",
        "linenr": 11,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "presenceMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a presence validation fails.</p>\n"
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
  "html_filename": "validations.html",
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
  "author": "Ed Spencer",
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.validations",
  "doc": "<p>This singleton contains a set of validation functions that can be used to validate any type of data. They are most\noften used in <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically set up and executed.</p>\n",
  "extends": "Object",
  "docauthor": null
});