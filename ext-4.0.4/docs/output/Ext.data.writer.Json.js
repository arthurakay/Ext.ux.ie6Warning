Ext.data.JsonP.Ext_data_writer_Json({
  "href": "Json2.html#Ext-data-writer-Json",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.data.writer.Writer"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Writer. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Writer.html#Ext-data-writer-Writer-method-constructor",
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
        "html_filename": "Writer.html",
        "linenr": 62,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>Creates new Writer.</p>\n"
      },
      {
        "shortDoc": "Formats the data for each record before sending it to the server. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The record that we are writing to the server.</p>\n",
            "name": "record"
          }
        ],
        "href": "Writer.html#Ext-data-writer-Writer-method-getRecordData",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Writer.html",
        "linenr": 88,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "getRecordData",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n"
      },
      {
        "shortDoc": "Prepares a Proxy's Ext.data.Request object ...",
        "params": [
          {
            "type": "Ext.data.Request",
            "optional": false,
            "doc": "<p>The request object</p>\n",
            "name": "request"
          }
        ],
        "href": "Writer.html#Ext-data-writer-Writer-method-write",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Request",
          "doc": "<p>The modified request object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Writer.html",
        "linenr": 70,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "write",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>Prepares a Proxy's <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [
      {
        "shortDoc": "False to ensure that records are always wrapped in an array, even if there is only\none record being sent. ...",
        "type": "Boolean",
        "href": "Json2.html#Ext-data-writer-Json-cfg-allowSingle",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Json2.html",
        "linenr": 33,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "name": "allowSingle",
        "owner": "Ext.data.writer.Json",
        "doc": "<p>False to ensure that records are always wrapped in an array, even if there is only\none record being sent. When there is more than one record, they will always be encoded into an array.\nDefaults to <tt>true</tt>. Example:</p>\n\n<pre><code>// with allowSingle: true\n\"root\": {\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}\n\n// with allowSingle: false\n\"root\": [{\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}]\n</code></pre>\n\n"
      },
      {
        "shortDoc": "True to use Ext.encode() on the data before sending. ...",
        "type": "Boolean",
        "href": "Json2.html#Ext-data-writer-Json-cfg-encode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Json2.html",
        "linenr": 25,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "name": "encode",
        "owner": "Ext.data.writer.Json",
        "doc": "<p>True to use Ext.encode() on the data before sending. Defaults to <tt>false</tt>.\nThe encode option should only be set to true when a <a href=\"#/api/Ext.data.writer.Json-cfg-root\" rel=\"Ext.data.writer.Json-cfg-root\" class=\"docClass\">root</a> is defined, because the values will be\nsent as part of the request parameters as opposed to a raw post. The root will be the name of the parameter\nsent to the server.</p>\n"
      },
      {
        "shortDoc": "This property is used to read the key for each value that will be sent to the server. ...",
        "type": "String",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-nameProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Writer.html",
        "linenr": 29,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "nameProperty",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'first',\n        mapping: 'firstName'\n    }, {\n        name: 'last',\n        mapping: 'lastName'\n    }, {\n        name: 'age'\n    }]\n});\nnew Ext.data.writer.Writer({\n    writeAllFields: true,\n    nameProperty: 'mapping'\n});\n\n// This will be sent to the server\n{\n    firstName: 'first name value',\n    lastName: 'last name value',\n    age: 1\n}\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n"
      },
      {
        "shortDoc": "The key under which the records in this Writer will be placed. ...",
        "type": "String",
        "href": "Json2.html#Ext-data-writer-Json-cfg-root",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Json2.html",
        "linenr": 16,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "name": "root",
        "owner": "Ext.data.writer.Json",
        "doc": "<p>The key under which the records in this Writer will be placed. Defaults to <tt>undefined</tt>.\nExample generated request, using root: 'records':</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n\n"
      },
      {
        "shortDoc": "True to write all fields from the record to the server. ...",
        "type": "Boolean",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-writeAllFields",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Writer.html",
        "linenr": 22,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "writeAllFields",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n"
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
    "Ext.data.JsonWriter"
  ],
  "html_filename": "Json2.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.writer.Json",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in a JSON format.\nThe <a href=\"#/api/Ext.data.writer.Json-cfg-allowSingle\" rel=\"Ext.data.writer.Json-cfg-allowSingle\" class=\"docClass\">allowSingle</a> configuration can be set to false to force the records to always be\nencoded in an array, even if there is only a single record being sent.</p>\n",
  "extends": "Ext.data.writer.Writer",
  "docauthor": null
});