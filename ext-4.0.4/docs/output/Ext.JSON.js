Ext.data.JsonP.Ext_JSON({
  "href": "JSON3.html#Ext-JSON",
  "component": false,
  "singleton": true,
  "code_type": "assignment",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Decodes (parses) a JSON string to an object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The JSON string</p>\n",
            "name": "json"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
            "name": "safe"
          }
        ],
        "href": "JSON3.html#Ext-JSON-method-decode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The resulting object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "JSON3.html",
        "linenr": 129,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "name": "decode",
        "owner": "Ext.JSON",
        "doc": "<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n"
      },
      {
        "shortDoc": "Encodes an Object, Array or other value ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The variable to encode</p>\n",
            "name": "o"
          }
        ],
        "href": "JSON3.html#Ext-JSON-method-encode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The JSON string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "JSON3.html",
        "linenr": 112,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "name": "encode",
        "owner": "Ext.JSON",
        "doc": "<p>Encodes an Object, Array or other value</p>\n"
      },
      {
        "shortDoc": "Encodes a Date. ...",
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The Date to encode</p>\n",
            "name": "d"
          }
        ],
        "href": "JSON3.html#Ext-JSON-method-encodeDate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The string literal to use in a JSON string.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "JSON3.html",
        "linenr": 91,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "name": "encodeDate",
        "owner": "Ext.JSON",
        "doc": "<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code>     Ext.JSON.encodeDate = function(d) {\n     return d.format('\"Y-m-d\"');\n     };\n     </code></pre>\n\n"
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
  "html_filename": "JSON3.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.JSON",
  "doc": "<p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n",
  "extends": null,
  "docauthor": null
});