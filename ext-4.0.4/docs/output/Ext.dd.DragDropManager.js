Ext.data.JsonP.Ext_dd_DragDropManager({
  "href": "DragDropManager.html#Ext-dd-DragDropManager",
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
        "shortDoc": "Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event...",
        "params": [
          {
            "type": "DragDrop[]",
            "optional": false,
            "doc": "<p>The array of drag and drop objects\ntargeted</p>\n",
            "name": "dds"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getBestMatch",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "DragDrop",
          "doc": "<p>The best single match</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 742,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "getBestMatch",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n"
      },
      {
        "shortDoc": "Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style) ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the elment to get</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getCss",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The style property of the element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 1024,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "getCss",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n"
      },
      {
        "shortDoc": "Returns the DragDrop instance for a given id ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the DragDrop object</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getDDById",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "DragDrop",
          "doc": "<p>the drag drop object, null if it is not found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 423,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "getDDById",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the DragDrop instance for a given id</p>\n"
      },
      {
        "shortDoc": "Returns the actual DOM element ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the elment to get</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getElement",
        "deprecated": {
          "version": null,
          "tagname": "deprecated",
          "text": "<p>use Ext.lib.Ext.getDom instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 1013,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "getElement",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the actual DOM element</p>\n"
      },
      {
        "shortDoc": "Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo...",
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n",
            "name": "oDD"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getLocation",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 856,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "getLocation",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n"
      },
      {
        "shortDoc": "Returns the drag and drop instances that are in all groups the\npassed in instance belongs to. ...",
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the obj to get related data for</p>\n",
            "name": "p_oDD"
          },
          {
            "type": "boolean",
            "optional": false,
            "doc": "<p>if true, only return targetable objs</p>\n",
            "name": "bTargetsOnly"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getRelated",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "DragDrop[]",
          "doc": "<p>the related instances</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 351,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "getRelated",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n"
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
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop item. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id to check</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isDragDrop",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "boolean",
          "doc": "<p>true if this element is a DragDrop item,\nfalse otherwise</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 339,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "isDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n"
      },
      {
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id to check</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isHandle",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "boolean",
          "doc": "<p>true if this element is a DragDrop handle, false\notherwise</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 410,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "isHandle",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n"
      },
      {
        "shortDoc": "Returns true if the specified dd target is a legal target for\nthe specifice drag obj ...",
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the drag obj</p>\n",
            "name": "oDD"
          },
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the target</p>\n",
            "name": "oTargetDD"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLegalTarget",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "boolean",
          "doc": "<p>true if the target is a legal target for the\ndd obj</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 376,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "isLegalTarget",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n"
      },
      {
        "shortDoc": "Is drag and drop locked? ...",
        "params": [

        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLocked",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "boolean",
          "doc": "<p>True if drag and drop is locked, false otherwise.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 202,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "isLocked",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Is drag and drop locked?</p>\n"
      },
      {
        "shortDoc": "My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>object to evaluate</p>\n",
            "name": "the"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isTypeOfDD",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "boolean",
          "doc": "<p>true if typeof oDD = DragDrop</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 396,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "isTypeOfDD",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n"
      },
      {
        "shortDoc": "Lock all drag and drop functionality ...",
        "params": [

        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-lock",
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
        "html_filename": "DragDropManager.html",
        "linenr": 190,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "lock",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Lock all drag and drop functionality</p>\n"
      },
      {
        "shortDoc": "Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s). ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>an associative array of groups to refresh</p>\n",
            "name": "groups"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-refreshCache",
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
        "html_filename": "DragDropManager.html",
        "linenr": 788,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "refreshCache",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\nExt.dd.DragDropManager.refreshCache(ddinstance.groups);\n</code>\nAlternatively:\n<code>\nExt.dd.DragDropManager.refreshCache({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n"
      },
      {
        "shortDoc": "Each DragDrop instance must be registered with the DragDropManager. ...",
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the DragDrop object to register</p>\n",
            "name": "oDD"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the name of the group this element belongs to</p>\n",
            "name": "sGroup"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regDragDrop",
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
        "html_filename": "DragDropManager.html",
        "linenr": 276,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "regDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n"
      },
      {
        "shortDoc": "Each DragDrop handle element must be registered. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the DragDrop id this element is a handle for</p>\n",
            "name": "sDDId"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that is the drag\nhandle</p>\n",
            "name": "sHandleId"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regHandle",
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
        "html_filename": "DragDropManager.html",
        "linenr": 324,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "regHandle",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n"
      },
      {
        "shortDoc": "Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{int} the X position of the original mousedown</p>\n",
            "name": "x"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{int} the Y position of the original mousedown</p>\n",
            "name": "y"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-startDrag",
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
        "html_filename": "DragDropManager.html",
        "linenr": 478,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "startDrag",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n"
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
        "shortDoc": "Utility to stop event propagation and event default, if these\nfeatures are turned on. ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the event as returned by this.getEvent()</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-stopEvent",
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
        "html_filename": "DragDropManager.html",
        "linenr": 522,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "stopEvent",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n"
      },
      {
        "shortDoc": "Unlock all drag and drop functionality ...",
        "params": [

        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-unlock",
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
        "html_filename": "DragDropManager.html",
        "linenr": 196,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "unlock",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Unlock all drag and drop functionality</p>\n"
      },
      {
        "shortDoc": "This checks to make sure an element exists and is in the DOM. ...",
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>the element to check</p>\n",
            "name": "el"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-verifyEl",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "boolean",
          "doc": "<p>true if the element looks usable</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 829,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "verifyEl",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "int",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-INTERSECT",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 131,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "INTERSECT",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n"
      },
      {
        "type": "int",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-POINT",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 123,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "POINT",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n"
      },
      {
        "shortDoc": "The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated. ...",
        "type": "int",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickPixelThresh",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 225,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "clickPixelThresh",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n"
      },
      {
        "shortDoc": "The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. ...",
        "type": "int",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickTimeThresh",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 233,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "clickTimeThresh",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n"
      },
      {
        "shortDoc": "The current drag and drop mode. ...",
        "type": "int",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-mode",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 139,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "mode",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The current drag and drop mode.  Default: POINT</p>\n"
      },
      {
        "shortDoc": "Flag to determine if we should prevent the default behavior of the\nevents we define. ...",
        "type": "boolean",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-preventDefault",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 80,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "preventDefault",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n"
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
        "shortDoc": "Flag to determine if we should stop the propagation of the events\nwe generate. ...",
        "type": "boolean",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-stopPropagation",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 89,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "stopPropagation",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n"
      },
      {
        "shortDoc": "Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a...",
        "type": "boolean",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-useCache",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDropManager.html",
        "linenr": 217,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "useCache",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n"
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
    "Ext.dd.DragDropMgr",
    "Ext.dd.DDM"
  ],
  "html_filename": "DragDropManager.html",
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
  "linenr": 10,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.dd.DragDropManager",
  "doc": "<p>DragDropManager is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n",
  "extends": "Ext.Base",
  "docauthor": null
});