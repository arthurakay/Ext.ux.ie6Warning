Ext.data.JsonP.Ext_data_Request({
  "href": "Request.html#Ext-data-Request",
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
        "shortDoc": "Creates the Request object. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Request.html#Ext-data-Request-method-constructor",
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
        "html_filename": "Request.html",
        "linenr": 32,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.data.Request",
        "doc": "<p>Creates the Request object.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [
      {
        "shortDoc": "The name of the action this Request represents. ...",
        "type": "String",
        "href": "Request.html#Ext-data-Request-cfg-action",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Request.html",
        "linenr": 12,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "action",
        "owner": "Ext.data.Request",
        "doc": "<p>The name of the action this Request represents. Usually one of 'create', 'read', 'update' or 'destroy'</p>\n"
      },
      {
        "shortDoc": "The HTTP method to use on this Request (defaults to 'GET'). ...",
        "type": "String",
        "href": "Request.html#Ext-data-Request-cfg-method",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Request.html",
        "linenr": 22,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "method",
        "owner": "Ext.data.Request",
        "doc": "<p>The HTTP method to use on this Request (defaults to 'GET'). Should be one of 'GET', 'POST', 'PUT' or 'DELETE'</p>\n"
      },
      {
        "shortDoc": "HTTP request params. ...",
        "type": "Object",
        "href": "Request.html#Ext-data-Request-cfg-params",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Request.html",
        "linenr": 17,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "params",
        "owner": "Ext.data.Request",
        "doc": "<p>HTTP request params. The Proxy and its Writer have access to and can modify this object.</p>\n"
      },
      {
        "type": "String",
        "href": "Request.html#Ext-data-Request-cfg-url",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Request.html",
        "linenr": 27,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "url",
        "owner": "Ext.data.Request",
        "doc": "<p>The url to access on this Request</p>\n"
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
  "html_filename": "Request.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.Request",
  "doc": "<p>Simple class that represents a Request that will be made by any <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a> subclass.\nAll this class does is standardize the representation of a Request as used by any ServerProxy subclass,\nit does not contain any actual logic or perform the request itself.</p>\n\n",
  "extends": "Object",
  "docauthor": null
});