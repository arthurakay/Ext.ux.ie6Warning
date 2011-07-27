Ext.data.JsonP.Ext_util_Region({
  "href": "Region.html#Ext-util-Region",
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
        "shortDoc": "Creates a region from the bounding sides. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Top The topmost pixel of the Region.</p>\n",
            "name": "top"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Right The rightmost pixel of the Region.</p>\n",
            "name": "right"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Bottom The bottom pixel of the Region.</p>\n",
            "name": "bottom"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Left The leftmost pixel of the Region.</p>\n",
            "name": "left"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-constructor",
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
        "html_filename": "Region.html",
        "linenr": 40,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.util.Region",
        "doc": "<p>Creates a region from the bounding sides.</p>\n"
      },
      {
        "shortDoc": "Modifies the current region to be adjusted by offsets. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>top offset</p>\n",
            "name": "top"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>right offset</p>\n",
            "name": "right"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>bottom offset</p>\n",
            "name": "bottom"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>left offset</p>\n",
            "name": "left"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-adjust",
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
        "html_filename": "Region.html",
        "linenr": 116,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "adjust",
        "owner": "Ext.util.Region",
        "doc": "<p>Modifies the current region to be adjusted by offsets.</p>\n"
      },
      {
        "shortDoc": "Modifies the current region to be constrained to the targetRegion. ...",
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "targetRegion"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-constrainTo",
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
        "html_filename": "Region.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "constrainTo",
        "owner": "Ext.util.Region",
        "doc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n"
      },
      {
        "shortDoc": "Checks if this region completely contains the region that is passed in. ...",
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-contains",
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
        "html_filename": "Region.html",
        "linenr": 55,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "contains",
        "owner": "Ext.util.Region",
        "doc": "<p>Checks if this region completely contains the region that is passed in.</p>\n"
      },
      {
        "shortDoc": "Create a copy of this Region. ...",
        "params": [

        ],
        "href": "Region.html#Ext-util-Region-method-copy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 308,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "copy",
        "owner": "Ext.util.Region",
        "doc": "<p>Create a copy of this Region.</p>\n"
      },
      {
        "shortDoc": "Copy the values of another Region to this Region ...",
        "params": [
          {
            "type": "Region",
            "optional": false,
            "doc": "<p>region to copy from.</p>\n",
            "name": "The"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-copyFrom",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>This Region</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 316,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "copyFrom",
        "owner": "Ext.util.Region",
        "doc": "<p>Copy the values of another Region to this Region</p>\n"
      },
      {
        "shortDoc": "Check whether this region is equivalent to the given region ...",
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "<p>The region to compare with</p>\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-equals",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 374,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "equals",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether this region is equivalent to the given region</p>\n"
      },
      {
        "shortDoc": "Get the offset amount of a point outside the region ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>optional</p>\n",
            "name": "axis"
          },
          {
            "type": "Ext.util.Point",
            "optional": false,
            "doc": "<p>the point</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffset",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Offset",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 132,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "getOutOfBoundOffset",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount of a point outside the region</p>\n"
      },
      {
        "shortDoc": "Get the offset amount on the x-axis ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetX",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 155,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "getOutOfBoundOffsetX",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount on the x-axis</p>\n"
      },
      {
        "shortDoc": "Get the offset amount on the y-axis ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetY",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 170,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "getOutOfBoundOffsetY",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount on the y-axis</p>\n"
      },
      {
        "shortDoc": "Checks if this region intersects the region passed in. ...",
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-intersect",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Region/Boolean",
          "doc": "<p>Returns the intersected region or false if there is no intersection.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 68,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "intersect",
        "owner": "Ext.util.Region",
        "doc": "<p>Checks if this region intersects the region passed in.</p>\n"
      },
      {
        "shortDoc": "Check whether the point / offset is out of bound ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>optional</p>\n",
            "name": "axis"
          },
          {
            "type": "Ext.util.Point/Number",
            "optional": false,
            "doc": "<p>the point / offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-isOutOfBound",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 185,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "isOutOfBound",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the point / offset is out of bound</p>\n"
      },
      {
        "shortDoc": "Check whether the offset is out of bound in the x-axis ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundX",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 204,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "isOutOfBoundX",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the offset is out of bound in the x-axis</p>\n"
      },
      {
        "shortDoc": "Check whether the offset is out of bound in the y-axis ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundY",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 213,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "isOutOfBoundY",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the offset is out of bound in the y-axis</p>\n"
      },
      {
        "shortDoc": "Round all the properties of this region ...",
        "params": [

        ],
        "href": "Region.html#Ext-util-Region-method-round",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>this This Region</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 360,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "round",
        "owner": "Ext.util.Region",
        "doc": "<p>Round all the properties of this region</p>\n"
      },
      {
        "shortDoc": "Translate this region by the given offset amount ...",
        "params": [
          {
            "type": "Ext.util.Offset/Object",
            "optional": false,
            "doc": "<p>Object containing the <code>x</code> and <code>y</code> properties.\nOr the x value is using the two argument form.</p>\n",
            "name": "offset"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>y value unless using an Offset object.</p>\n",
            "name": "The"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-translateBy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>this This Region</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 339,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "translateBy",
        "owner": "Ext.util.Region",
        "doc": "<p>Translate this region by the given offset amount</p>\n"
      },
      {
        "shortDoc": "Returns the smallest region that contains the current AND targetRegion. ...",
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-union",
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
        "html_filename": "Region.html",
        "linenr": 88,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "union",
        "owner": "Ext.util.Region",
        "doc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n"
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
  "html_filename": "Region.html",
  "statics": {
    "method": [
      {
        "shortDoc": "Creates a Region from a \"box\" Object which contains four numeric properties top, right, bottom and left. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object with <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties.</p>\n",
            "name": "o"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-from",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>region The Region constructed based on the passed object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 27,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "from",
        "owner": "Ext.util.Region",
        "doc": "<p>Creates a Region from a \"box\" Object which contains four numeric properties <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</p>\n"
      },
      {
        "shortDoc": "Retrieves an Ext.util.Region for a particular element. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>An element ID, htmlElement or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> representing an element in the document.</p>\n",
            "name": "el"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getRegion",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>region</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Region.html",
        "linenr": 17,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "name": "getRegion",
        "owner": "Ext.util.Region",
        "doc": "<p>Retrieves an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> for a particular element.</p>\n"
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
  "author": null,
  "subclasses": [
    "Ext.util.Point"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.util.Region",
  "doc": "<p>This class represents a rectangular region in X,Y space, and performs geometric\ntransformations or tests upon the region.</p>\n\n\n<p>This class may be used to compare the document regions occupied by elements.</p>\n\n",
  "extends": "Object",
  "docauthor": null
});