Ext.data.JsonP.Ext_Number({
  "href": "Number3.html#Ext-Number",
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
        "shortDoc": "Checks whether or not the passed number is within a desired range. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number to check</p>\n",
            "name": "number"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The minimum number in the range</p>\n",
            "name": "min"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The maximum number in the range</p>\n",
            "name": "max"
          }
        ],
        "href": "Number3.html#Ext-Number-method-constrain",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The constrained value if outside the range, otherwise the current value</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Number3.html",
        "linenr": 13,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "name": "constrain",
        "owner": "Ext.Number",
        "doc": "<p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n"
      },
      {
        "shortDoc": "Validate that a value is numeric and convert it to a number if necessary. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The value to return if the original value is non-numeric</p>\n",
            "name": "defaultValue"
          }
        ],
        "href": "Number3.html#Ext-Number-method-from",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>value, if numeric, defaultValue otherwise</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Number3.html",
        "linenr": 76,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "name": "from",
        "owner": "Ext.Number",
        "doc": "<p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<p>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1</p>\n"
      },
      {
        "shortDoc": "Snaps the passed number between stopping points based upon a passed increment value. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The unsnapped value.</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The increment by which the value must move.</p>\n",
            "name": "increment"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The minimum value to which the returned value must be constrained. Overrides the increment..</p>\n",
            "name": "minValue"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The maximum value to which the returned value must be constrained. Overrides the increment..</p>\n",
            "name": "maxValue"
          }
        ],
        "href": "Number3.html#Ext-Number-method-snap",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The value of the nearest snap target.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Number3.html",
        "linenr": 34,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "name": "snap",
        "owner": "Ext.Number",
        "doc": "<p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n"
      },
      {
        "shortDoc": "Formats a number using fixed-point notation ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number to format</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of digits to show after the decimal point</p>\n",
            "name": "precision"
          }
        ],
        "href": "Number3.html#Ext-Number-method-toFixed",
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
        "html_filename": "Number3.html",
        "linenr": 61,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "name": "toFixed",
        "owner": "Ext.Number",
        "doc": "<p>Formats a number using fixed-point notation</p>\n"
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
  "html_filename": "Number3.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.Number",
  "doc": "<p>A collection of useful static methods to deal with numbers</p>\n",
  "extends": null,
  "docauthor": null
});