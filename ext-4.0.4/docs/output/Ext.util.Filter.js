Ext.data.JsonP.Ext_util_Filter({
  "href": "Filter.html#Ext-util-Filter",
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
        "shortDoc": "Creates new Filter. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object</p>\n",
            "name": "config"
          }
        ],
        "href": "Filter.html#Ext-util-Filter-method-constructor",
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
        "html_filename": "Filter.html",
        "linenr": 72,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.util.Filter",
        "doc": "<p>Creates new Filter.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [
      {
        "shortDoc": "True to allow any match - no regex start/end line anchors will be added. ...",
        "type": "Boolean",
        "href": "Filter.html#Ext-util-Filter-cfg-anyMatch",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Filter.html",
        "linenr": 51,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "anyMatch",
        "owner": "Ext.util.Filter",
        "doc": "<p>True to allow any match - no regex start/end line anchors will be added. Defaults to false</p>\n"
      },
      {
        "shortDoc": "True to make the regex case sensitive (adds 'i' switch to regex). ...",
        "type": "Boolean",
        "href": "Filter.html#Ext-util-Filter-cfg-caseSensitive",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Filter.html",
        "linenr": 62,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "caseSensitive",
        "owner": "Ext.util.Filter",
        "doc": "<p>True to make the regex case sensitive (adds 'i' switch to regex). Defaults to false.</p>\n"
      },
      {
        "shortDoc": "True to force exact match (^ and $ characters added to the regex). ...",
        "type": "Boolean",
        "href": "Filter.html#Ext-util-Filter-cfg-exactMatch",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Filter.html",
        "linenr": 56,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "exactMatch",
        "owner": "Ext.util.Filter",
        "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.\nIgnored if anyMatch is true.</p>\n"
      },
      {
        "shortDoc": "A custom filter function which is passed each item in the Ext.util.MixedCollection\nin turn. ...",
        "type": "Function",
        "href": "Filter.html#Ext-util-Filter-cfg-filterFn",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Filter.html",
        "linenr": 46,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "filterFn",
        "owner": "Ext.util.Filter",
        "doc": "<p>A custom filter function which is passed each item in the <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>\nin turn. Should return true to accept each item or false to reject it</p>\n"
      },
      {
        "shortDoc": "The property to filter on. ...",
        "type": "String",
        "href": "Filter.html#Ext-util-Filter-cfg-property",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Filter.html",
        "linenr": 42,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "property",
        "owner": "Ext.util.Filter",
        "doc": "<p>The property to filter on. Required unless a <a href=\"#/api/Ext.util.Filter-cfg-filterFn\" rel=\"Ext.util.Filter-cfg-filterFn\" class=\"docClass\">filterFn</a> is passed</p>\n"
      },
      {
        "shortDoc": "Optional root property. ...",
        "type": "String",
        "href": "Filter.html#Ext-util-Filter-cfg-root",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Filter.html",
        "linenr": 67,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "root",
        "owner": "Ext.util.Filter",
        "doc": "<p>Optional root property. This is mostly useful when filtering a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Filter-cfg-property\" rel=\"Ext.util.Filter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n"
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
  "html_filename": "Filter.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.util.Filter",
  "doc": "<p>Represents a filter that can be applied to a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. Can either simply\nfilter on a property/value pair or pass in a filter function with custom logic. Filters are always used in the context\nof MixedCollections, though <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s frequently create them when filtering and searching on their\nrecords. Example usage:</p>\n\n\n<pre><code>//set up a fictional MixedCollection containing a few people to filter on\nvar allNames = new Ext.util.MixedCollection();\nallNames.addAll([\n    {id: 1, name: 'Ed',    age: 25},\n    {id: 2, name: 'Jamie', age: 37},\n    {id: 3, name: 'Abe',   age: 32},\n    {id: 4, name: 'Aaron', age: 26},\n    {id: 5, name: 'David', age: 32}\n]);\n\nvar ageFilter = new Ext.util.Filter({\n    property: 'age',\n    value   : 32\n});\n\nvar longNameFilter = new Ext.util.Filter({\n    filterFn: function(item) {\n        return item.name.length > 4;\n    }\n});\n\n//a new MixedCollection with the 3 names longer than 4 characters\nvar longNames = allNames.filter(longNameFilter);\n\n//a new MixedCollection with the 2 people of age 24:\nvar youngFolk = allNames.filter(ageFilter);\n</code></pre>\n\n",
  "extends": "Object",
  "docauthor": null
});