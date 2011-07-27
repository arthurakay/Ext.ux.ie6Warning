Ext.data.JsonP.Ext_data_Association({
  "href": "Association.html#Ext-data-Association",
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
        "shortDoc": "Creates the Association object. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Association.html#Ext-data-Association-method-constructor",
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
        "html_filename": "Association.html",
        "linenr": 170,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.data.Association",
        "doc": "<p>Creates the Association object.</p>\n"
      },
      {
        "shortDoc": "Get a specialized reader for reading associated data ...",
        "params": [

        ],
        "href": "Association.html#Ext-data-Association-method-getReader",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.reader.Reader",
          "doc": "<p>The reader, null if not supplied</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 214,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "getReader",
        "owner": "Ext.data.Association",
        "doc": "<p>Get a specialized reader for reading associated data</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "The name of the model is on the other end of the association (e.g. ...",
        "type": "String",
        "href": "Association.html#Ext-data-Association-property-associatedName",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 202,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "associatedName",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n"
      },
      {
        "type": "String",
        "href": "Association.html#Ext-data-Association-property-ownerName",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 196,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "ownerName",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the model that 'owns' the association</p>\n"
      }
    ],
    "cfg": [
      {
        "shortDoc": "The string name of the model that is being associated with. ...",
        "type": "String",
        "href": "Association.html#Ext-data-Association-cfg-associatedModel",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 122,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "associatedModel",
        "owner": "Ext.data.Association",
        "doc": "<p>The string name of the model that is being associated with. Required</p>\n"
      },
      {
        "shortDoc": "The name of the property in the data to read the association from. ...",
        "type": "String",
        "href": "Association.html#Ext-data-Association-cfg-associationKey",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "associationKey",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the property in the data to read the association from.\nDefaults to the name of the associated model.</p>\n"
      },
      {
        "shortDoc": "The string name of the model that owns the association. ...",
        "type": "String",
        "href": "Association.html#Ext-data-Association-cfg-ownerModel",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 118,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "ownerModel",
        "owner": "Ext.data.Association",
        "doc": "<p>The string name of the model that owns the association. Required</p>\n"
      },
      {
        "shortDoc": "The name of the primary key on the associated model. ...",
        "type": "String",
        "href": "Association.html#Ext-data-Association-cfg-primaryKey",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 126,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "primaryKey",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">Ext.data.Model.idProperty</a> of the Model.</p>\n"
      },
      {
        "type": "Ext.data.reader.Reader",
        "href": "Association.html#Ext-data-Association-cfg-reader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Association.html",
        "linenr": 132,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "name": "reader",
        "owner": "Ext.data.Association",
        "doc": "<p>A special reader to read associated data</p>\n"
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
  "html_filename": "Association.html",
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
    "Ext.data.HasManyAssociation",
    "Ext.data.BelongsToAssociation"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.Association",
  "doc": "<p>Associations enable you to express relationships between different <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>. Let's say we're\nwriting an ecommerce system where Users can make Orders - there's a relationship between these Models that we can\nexpress like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email'],\n\n    hasMany: {model: 'Order', name: 'orders'}\n});\n\nExt.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'user_id', 'status', 'price'],\n\n    belongsTo: 'User'\n});\n</code></pre>\n\n\n\n\n<p>We've set up two models - User and Order - and told them about each other. You can set up as many associations on\neach Model as you need using the two default types - <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany</a> and\n<a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo</a>. There's much more detail on the usage of each of those inside their\ndocumentation pages. If you're not familiar with Models already, <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">there is plenty on those too</a>.</p>\n\n\n\n\n<p><u>Further Reading</u></p>\n\n\n\n\n<ul style=\"list-style-type: disc; padding-left: 20px;\">\n  <li><a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany associations</a>\n  <li><a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo associations</a>\n  <li><a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">using Models</a>\n</ul>\n\n\n<p><b>Self association models</b></p>\n\n<p>We can also have models that create parent/child associations between the same type. Below is an example, where\ngroups can be nested inside other groups:</p>\n\n\n<pre><code>\n// Server Data\n{\n    \"groups\": {\n        \"id\": 10,\n        \"parent_id\": 100,\n        \"name\": \"Main Group\",\n        \"parent_group\": {\n            \"id\": 100,\n            \"parent_id\": null,\n            \"name\": \"Parent Group\"\n        },\n        \"child_groups\": [{\n            \"id\": 2,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 1\"\n        },{\n            \"id\": 3,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 2\"\n        },{\n            \"id\": 4,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 3\"\n        }]\n    }\n}\n\n// Client code\nExt.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'parent_id', 'name'],\n    proxy: {\n        type: 'ajax',\n        url: 'data.json',\n        reader: {\n            type: 'json',\n            root: 'groups'\n        }\n    },\n    associations: [{\n        type: 'hasMany',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        autoLoad: true,\n        associationKey: 'child_groups' // read child data from child_groups\n    }, {\n        type: 'belongsTo',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        autoLoad: true,\n        associationKey: 'parent_group' // read parent data from parent_group\n    }]\n});\n\n\nExt.onReady(function(){\n    \n    Group.load(10, {\n        success: function(group){\n            console.log(group.getGroup().get('name'));\n            \n            group.groups().each(function(rec){\n                console.log(rec.get('name'));\n            });\n        }\n    });\n    \n});\n</code></pre>\n\n",
  "extends": "Object",
  "docauthor": null
});