Ext.data.JsonP.Ext_data_writer_Xml({
  "href": "Xml2.html#Ext-data-writer-Xml",
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
        "type": "String",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Xml2.html",
        "linenr": 31,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "defaultDocumentRoot",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>The root to be used if <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n"
      },
      {
        "shortDoc": "The name of the root element of the document. ...",
        "type": "String",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-documentRoot",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Xml2.html",
        "linenr": 24,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "documentRoot",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>The name of the root element of the document. Defaults to <tt>'xmlData'</tt>.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n"
      },
      {
        "shortDoc": "A header to use in the XML document (such as setting the encoding or version). ...",
        "type": "String",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-header",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Xml2.html",
        "linenr": 37,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "header",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>A header to use in the XML document (such as setting the encoding or version).\nDefaults to <tt>''</tt>.</p>\n"
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
        "shortDoc": "The name of the node to use for each record. ...",
        "type": "String",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-record",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Xml2.html",
        "linenr": 43,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "record",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>The name of the node to use for each record. Defaults to <tt>'record'</tt>.</p>\n"
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
    "Ext.data.XmlWriter"
  ],
  "html_filename": "Xml2.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.writer.Xml",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n",
  "extends": "Ext.data.writer.Writer",
  "docauthor": null
});