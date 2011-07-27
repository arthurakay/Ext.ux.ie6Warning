Ext.data.JsonP.Ext_dd_DropZone({
  "href": "DropZone.html#Ext-dd-DropZone",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.dd.DragDrop",
    "Ext.dd.DDTarget",
    "Ext.dd.DropTarget"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new DropTarget. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The container element</p>\n",
            "name": "el"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "DropTarget.html#Ext-dd-DropTarget-method-constructor",
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
        "html_filename": "DropTarget.html",
        "linenr": 11,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>Creates new DropTarget.</p>\n"
      },
      {
        "shortDoc": "Lets you specify a css class of elements that will not initiate a drag ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the class of the elements you wish to ignore</p>\n",
            "name": "cssClass"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleClass",
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
        "html_filename": "DragDrop.html",
        "linenr": 861,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "addInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n"
      },
      {
        "shortDoc": "Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id of the element you wish to ignore</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleId",
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
        "html_filename": "DragDrop.html",
        "linenr": 848,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "addInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n"
      },
      {
        "shortDoc": "Allows you to specify a tag name that should not start a drag operation\nwhen clicked. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the type of element to exclude</p>\n",
            "name": "tagName"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleType",
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
        "html_filename": "DragDrop.html",
        "linenr": 836,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "addInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate embedding links within a\ndrag handle that do something other than start the drag.</p>\n"
      },
      {
        "shortDoc": "Adds this instance to a group of related drag/drop objects. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the name of the group</p>\n",
            "name": "sGroup"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addToGroup",
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
        "html_filename": "DragDrop.html",
        "linenr": 705,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "addToGroup",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Adds this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n"
      },
      {
        "shortDoc": "Applies the configuration parameters that were passed into the constructor. ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-applyConfig",
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
        "html_filename": "DragDrop.html",
        "linenr": 615,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "applyConfig",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Applies the configuration parameters that were passed into the constructor.\nThis is supposed to happen at each level through the inheritance chain.  So\na DDProxy implentation will execute apply config on DDProxy, DD, and\nDragDrop in order to get all of the parameters that are available in\neach object.</p>\n"
      },
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
        "shortDoc": "Clears any constraints applied to this instance. ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearConstraints",
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
        "html_filename": "DragDrop.html",
        "linenr": 1007,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "clearConstraints",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constraint at this time.</p>\n"
      },
      {
        "shortDoc": "Clears any tick interval defined for this instance ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearTicks",
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
        "html_filename": "DragDrop.html",
        "linenr": 1017,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "clearTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Clears any tick interval defined for this instance</p>\n"
      },
      {
        "shortDoc": "Initializes the drag drop object's constraints to restrict movement to a certain element. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to constrain to.</p>\n",
            "name": "constrainTo"
          },
          {
            "type": "Object/Number",
            "optional": true,
            "doc": "<p>(optional) Pad provides a way to specify \"padding\" of the constraints,\nand can be either a number for symmetrical padding (4 would be equal to <code>{left:4, right:4, top:4, bottom:4}</code>) or\nan object containing the sides to pad. For example: <code>{right:10, bottom:10}</code></p>\n",
            "name": "pad"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Constrain the draggable in the content box of the element (inside padding and borders)</p>\n",
            "name": "inContent"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-constrainTo",
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
        "html_filename": "DragDrop.html",
        "linenr": 478,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "constrainTo",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code>var dd = new Ext.dd.DDProxy(\"dragDiv1\", \"proxytest\",\n               { dragElId: \"existingProxyDiv\" });\ndd.startDrag = function(){\n    this.constrainTo(\"parent-id\");\n};\n</code></pre>\n\n<p>Or you can initalize it using the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object:</p>\n\n<pre><code>Ext.get(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n    startDrag : function(){\n        this.constrainTo(\"parent-id\");\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Called when we are done dragging the object ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-endDrag",
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
        "html_filename": "DragDrop.html",
        "linenr": 435,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "endDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when we are done dragging the object</p>\n"
      },
      {
        "shortDoc": "Returns a reference to the actual element to drag. ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getDragEl",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>the html element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 547,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "getDragEl",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be assigned to another\nelement. An example of this can be found in Ext.dd.DDProxy</p>\n"
      },
      {
        "shortDoc": "Returns a reference to the linked element ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getEl",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>the html element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 535,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "getEl",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns a reference to the linked element</p>\n"
      },
      {
        "shortDoc": "Returns a custom data object associated with the DOM node that is the target of the event. ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-getTargetFromEvent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>data The custom data</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 72,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "getTargetFromEvent",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Returns a custom data object associated with the DOM node that is the target of the event.  By default\nthis looks up the event target in the <a href=\"#/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>, although you can override this method to\nprovide your own custom lookup.</p>\n"
      },
      {
        "shortDoc": "Sets up the DragDrop object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the linked element</p>\n",
            "name": "id"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the group of related items</p>\n",
            "name": "sGroup"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>configuration attributes</p>\n",
            "name": "config"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-init",
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
        "html_filename": "DragDrop.html",
        "linenr": 557,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "init",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n"
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
        "shortDoc": "Initializes Targeting functionality only... ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the linked element</p>\n",
            "name": "id"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the group of related items</p>\n",
            "name": "sGroup"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>configuration attributes</p>\n",
            "name": "config"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-initTarget",
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
        "html_filename": "DragDrop.html",
        "linenr": 570,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "initTarget",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n"
      },
      {
        "shortDoc": "Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isLocked",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this obj or all drag/drop is locked, else\nfalse</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 783,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "isLocked",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n"
      },
      {
        "shortDoc": "Checks the tag exclusion list to see if this click should be ignored ...",
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>the HTMLElement to evaluate</p>\n",
            "name": "node"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isValidHandleChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this is a valid tag type, false if not</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 903,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "isValidHandleChild",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n"
      },
      {
        "shortDoc": "Locks this instance ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-lock",
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
        "html_filename": "DragDrop.html",
        "linenr": 183,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "lock",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Locks this instance</p>\n"
      },
      {
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop zone that the dragged item has\nbeen dropped on it. ...",
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyDrop",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>False if the drop was invalid.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 234,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "notifyDrop",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the dragged item has\nbeen dropped on it.  The drag zone will look up the target node based on the event passed in, and if there\nis a node registered for that event, it will delegate to <a href=\"#/api/Ext.dd.DropZone-method-onNodeDrop\" rel=\"Ext.dd.DropZone-method-onNodeDrop\" class=\"docClass\">onNodeDrop</a> for node-specific handling,\notherwise it will call <a href=\"#/api/Ext.dd.DropZone-method-onContainerDrop\" rel=\"Ext.dd.DropZone-method-onContainerDrop\" class=\"docClass\">onContainerDrop</a>.</p>\n"
      },
      {
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop zone that the source is now over\nthe zone. ...",
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyEnter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 172,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "notifyEnter",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the source is now over\nthe zone.  The default implementation returns this.dropNotAllowed and expects that only registered drop\nnodes can process drag drop operations, so if you need the drop zone itself to be able to process drops\nyou should override this method and provide a custom implementation.</p>\n"
      },
      {
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop zone that the source has been dragged\nout of the zone...",
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop target</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag zone</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyOut",
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
        "html_filename": "DropZone.html",
        "linenr": 219,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "notifyOut",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the source has been dragged\nout of the zone without dropping.  If the drag source is currently over a registered node, the notification\nwill be delegated to <a href=\"#/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a> for node-specific handling, otherwise it will be ignored.</p>\n"
      },
      {
        "shortDoc": "The function a Ext.dd.DragSource calls continuously while it is being dragged over the drop zone. ...",
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyOver",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 187,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "notifyOver",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls continuously while it is being dragged over the drop zone.\nThis method will be called on every mouse movement while the drag source is over the drop zone.\nIt will call <a href=\"#/api/Ext.dd.DropZone-method-onNodeOver\" rel=\"Ext.dd.DropZone-method-onNodeOver\" class=\"docClass\">onNodeOver</a> while the drag source is over a registered node, and will also automatically\ndelegate to the appropriate node-specific methods as necessary when the drag source enters and exits\nregistered nodes (<a href=\"#/api/Ext.dd.DropZone-method-onNodeEnter\" rel=\"Ext.dd.DropZone-method-onNodeEnter\" class=\"docClass\">onNodeEnter</a>, <a href=\"#/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a>). If the drag source is not currently over a\nregistered node, it will call <a href=\"#/api/Ext.dd.DropZone-method-onContainerOver\" rel=\"Ext.dd.DropZone-method-onContainerOver\" class=\"docClass\">onContainerOver</a>.</p>\n"
      },
      {
        "shortDoc": "Override the onAvailable method to do what is needed after the initial\nposition was determined. ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onAvailable",
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
        "html_filename": "DragDrop.html",
        "linenr": 460,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onAvailable",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n"
      },
      {
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has been dropped on it,\nbut not on any of its registered...",
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onContainerDrop",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the drop was valid, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 158,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "onContainerDrop",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dropped on it,\nbut not on any of its registered drop nodes.  The default implementation returns false, so it should be\noverridden to provide the appropriate processing of the drop event if you need the drop zone itself to\nbe able to accept drops.  It should return true when valid so that the drag source's repair action does not run.</p>\n"
      },
      {
        "shortDoc": "Called while the DropZone determines that a Ext.dd.DragSource is being dragged over it,\nbut not over any of its regis...",
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onContainerOver",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 144,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "onContainerOver",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called while the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> is being dragged over it,\nbut not over any of its registered drop nodes.  The default implementation returns this.dropNotAllowed, so\nit should be overridden to provide the proper feedback if necessary.</p>\n"
      },
      {
        "shortDoc": "Abstract method called during the onMouseMove event while dragging an\nobject. ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDrag",
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
        "html_filename": "DragDrop.html",
        "linenr": 358,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n"
      },
      {
        "shortDoc": "Abstract method called when this item is dropped on another DragDrop\nobj ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          },
          {
            "type": "String/[DragDrop]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this was dropped on.  In INTERSECT mode, an array of dd items this\nwas dropped on.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragDrop",
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
        "html_filename": "DragDrop.html",
        "linenr": 412,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onDragDrop",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n"
      },
      {
        "shortDoc": "Abstract method called when this element fist begins hovering over\nanother DragDrop obj ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          },
          {
            "type": "String/[DragDrop]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of one or more\ndragdrop items being hovered over.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragEnter",
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
        "html_filename": "DragDrop.html",
        "linenr": 365,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onDragEnter",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n"
      },
      {
        "shortDoc": "Abstract method called when we are no longer hovering over an element ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          },
          {
            "type": "String/[DragDrop]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this was hovering over.  In INTERSECT mode, an array of dd items\nthat the mouse is no longer over.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOut",
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
        "html_filename": "DragDrop.html",
        "linenr": 397,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onDragOut",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when we are no longer hovering over an element</p>\n"
      },
      {
        "shortDoc": "Abstract method called when this element is hovering over another\nDragDrop obj ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          },
          {
            "type": "String|DragDrop[]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of dd items\nbeing hovered over.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOver",
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
        "html_filename": "DragDrop.html",
        "linenr": 381,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onDragOver",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n"
      },
      {
        "shortDoc": "Abstract method called when this item is dropped on an area with no\ndrop target ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onInvalidDrop",
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
        "html_filename": "DragDrop.html",
        "linenr": 422,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onInvalidDrop",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n"
      },
      {
        "shortDoc": "Called when a drag/drop obj gets a mousedown ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousedown event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseDown",
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
        "html_filename": "DragDrop.html",
        "linenr": 448,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onMouseDown",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when a drag/drop obj gets a mousedown</p>\n"
      },
      {
        "shortDoc": "Called when a drag/drop obj gets a mouseup ...",
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseUp",
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
        "html_filename": "DragDrop.html",
        "linenr": 454,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "onMouseUp",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when a drag/drop obj gets a mouseup</p>\n"
      },
      {
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has been dropped onto\nthe drop node. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeDrop",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the drop was valid, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 129,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "onNodeDrop",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dropped onto\nthe drop node.  The default implementation returns false, so it should be overridden to provide the\nappropriate processing of the drop event and return true so that the drag source's repair action does not run.</p>\n"
      },
      {
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has entered a drop node\nthat has either been registered ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeEnter",
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
        "html_filename": "DropZone.html",
        "linenr": 83,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "onNodeEnter",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has entered a drop node\nthat has either been registered or detected by a configured implementation of <a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a>.\nThis method has no default implementation and should be overridden to provide\nnode-specific processing if necessary.</p>\n"
      },
      {
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has been dragged out of\nthe drop node without dropping. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeOut",
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
        "html_filename": "DropZone.html",
        "linenr": 115,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "onNodeOut",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dragged out of\nthe drop node without dropping.  This method has no default implementation and should be overridden to provide\nnode-specific processing if necessary.</p>\n"
      },
      {
        "shortDoc": "Called while the DropZone determines that a Ext.dd.DragSource is over a drop node\nthat has either been registered or ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeOver",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DropZone.html",
        "linenr": 98,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "name": "onNodeOver",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called while the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> is over a drop node\nthat has either been registered or detected by a configured implementation of <a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a>.\nThe default implementation returns this.dropNotAllowed, so it should be\noverridden to provide the proper feedback.</p>\n"
      },
      {
        "shortDoc": "Removes this instance from the supplied interaction group ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The group to drop</p>\n",
            "name": "sGroup"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeFromGroup",
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
        "html_filename": "DragDrop.html",
        "linenr": 716,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "removeFromGroup",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Removes this instance from the supplied interaction group</p>\n"
      },
      {
        "shortDoc": "Unsets an invalid css class ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the class of the element(s) you wish to\nre-enable</p>\n",
            "name": "cssClass"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleClass",
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
        "html_filename": "DragDrop.html",
        "linenr": 890,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "removeInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an invalid css class</p>\n"
      },
      {
        "shortDoc": "Unsets an invalid handle id ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element to re-enable</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleId",
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
        "html_filename": "DragDrop.html",
        "linenr": 879,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "removeInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an invalid handle id</p>\n"
      },
      {
        "shortDoc": "Unsets an excluded tag name set by addInvalidHandleType ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the type of element to unexclude</p>\n",
            "name": "tagName"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleType",
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
        "html_filename": "DragDrop.html",
        "linenr": 869,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "removeInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n"
      },
      {
        "shortDoc": "Must be called if you manually reposition a dd element. ...",
        "params": [
          {
            "type": "boolean",
            "optional": false,
            "doc": "\n",
            "name": "maintainOffset"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-resetConstraints",
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
        "html_filename": "DragDrop.html",
        "linenr": 1048,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "resetConstraints",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Must be called if you manually reposition a dd element.</p>\n"
      },
      {
        "shortDoc": "Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setDragElId",
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
        "html_filename": "DragDrop.html",
        "linenr": 728,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setDragElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n"
      },
      {
        "shortDoc": "Allows you to specify a child of the linked element that should be\nused to initiate the drag operation. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to\ninitiate the drag.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setHandleElId",
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
        "html_filename": "DragDrop.html",
        "linenr": 737,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setHandleElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example of this would be if\nyou have a content div with text and links.  Clicking anywhere in the\ncontent area would normally start the drag operation.  Use this method\nto specify that an element inside of the content div is the element\nthat starts the drag operation.</p>\n"
      },
      {
        "shortDoc": "Stores the initial placement of the linked element. ...",
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the X offset, default 0</p>\n",
            "name": "diffX"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the Y offset, default 0</p>\n",
            "name": "diffY"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setInitPosition",
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
        "html_filename": "DragDrop.html",
        "linenr": 665,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setInitPosition",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Stores the initial placement of the linked element.</p>\n"
      },
      {
        "shortDoc": "Allows you to set an element outside of the linked element as a drag\nhandle ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setOuterHandleElId",
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
        "html_filename": "DragDrop.html",
        "linenr": 755,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setOuterHandleElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n"
      },
      {
        "shortDoc": "Configures the padding for the target zone in px. ...",
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Top pad</p>\n",
            "name": "iTop"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Right pad</p>\n",
            "name": "iRight"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Bot pad</p>\n",
            "name": "iBot"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Left pad</p>\n",
            "name": "iLeft"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setPadding",
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
        "html_filename": "DragDrop.html",
        "linenr": 643,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setPadding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n"
      },
      {
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move to the left</p>\n",
            "name": "iLeft"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move to the\nright</p>\n",
            "name": "iRight"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>optional parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
            "name": "iTickSize"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setXConstraint",
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
        "html_filename": "DragDrop.html",
        "linenr": 986,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setXConstraint",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of the element.  Pass in\n0,0 for the parameters if you want to lock the drag to the y axis.</p>\n"
      },
      {
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move up</p>\n",
            "name": "iUp"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move down</p>\n",
            "name": "iDown"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>optional parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
            "name": "iTickSize"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setYConstraint",
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
        "html_filename": "DragDrop.html",
        "linenr": 1027,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "setYConstraint",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element.  Pass in 0,0 for the\nparameters if you want to lock the drag to the x axis.</p>\n"
      },
      {
        "shortDoc": "Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met. ...",
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>click location</p>\n",
            "name": "X"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>click location</p>\n",
            "name": "Y"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-startDrag",
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
        "html_filename": "DragDrop.html",
        "linenr": 344,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "startDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n"
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
        "shortDoc": "toString method ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-toString",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "string",
          "doc": "<p>string representation of the dd obj</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 1113,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "toString",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>toString method</p>\n"
      },
      {
        "shortDoc": "Unlocks this instace ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unlock",
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
        "html_filename": "DragDrop.html",
        "linenr": 198,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "unlock",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unlocks this instace</p>\n"
      },
      {
        "shortDoc": "Removes all drag and drop hooks for this element ...",
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unreg",
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
        "html_filename": "DragDrop.html",
        "linenr": 770,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "unreg",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Removes all drag and drop hooks for this element</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-available",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 319,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "available",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The available property is false until the linked dom element is accessible.</p>\n"
      },
      {
        "type": "object",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-config",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 87,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "config",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Configuration attributes passed into the constructor</p>\n"
      },
      {
        "type": "Object",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-defaultPadding",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 467,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "defaultPadding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Provides default constraint padding to \"constrainTo\" elements (defaults to <code>{left:0, right:0, top:0, bottom:0}</code>).</p>\n"
      },
      {
        "shortDoc": "The group defines a logical collection of DragDrop objects that are\nrelated. ...",
        "type": "object",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-groups",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 164,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "groups",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n"
      },
      {
        "shortDoc": "By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is. ...",
        "type": "boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-hasOuterHandles",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 326,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "hasOuterHandles",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. Defaults to false.</p>\n"
      },
      {
        "shortDoc": "The id of the element associated with this object. ...",
        "type": "String",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-id",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 77,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "id",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n"
      },
      {
        "shortDoc": "Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. ...",
        "type": "Boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-ignoreSelf",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 69,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "ignoreSelf",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n"
      },
      {
        "type": "Array",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleClasses",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 139,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "invalidHandleClasses",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n"
      },
      {
        "shortDoc": "An object who's property names identify the IDs of elements to be considered invalid as drag handles. ...",
        "type": "Object",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleIds",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 127,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "invalidHandleIds",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n"
      },
      {
        "shortDoc": "An object who's property names identify HTML tags to be considered invalid as drag handles. ...",
        "type": "Object",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleTypes",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 115,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "invalidHandleTypes",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n"
      },
      {
        "shortDoc": "By default, all instances can be a drop target. ...",
        "type": "boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-isTarget",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 205,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "isTarget",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n"
      },
      {
        "shortDoc": "Maintain offsets when we resetconstraints. ...",
        "type": "boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-maintainOffset",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 283,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "maintainOffset",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n"
      },
      {
        "shortDoc": "When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ...",
        "type": "boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-moveOnly",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 190,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "moveOnly",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n"
      },
      {
        "shortDoc": "The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. ...",
        "type": "[int]",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-padding",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 213,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn array containing the 4 padding values: [top, right, bottom, left]</p>\n"
      },
      {
        "shortDoc": "By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m...",
        "type": "boolean",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-primaryButtonOnly",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 309,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "primaryButtonOnly",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n"
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
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval. ...",
        "type": "[int]",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-xTicks",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 293,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "xTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n"
      },
      {
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval. ...",
        "type": "[int]",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-yTicks",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DragDrop.html",
        "linenr": 301,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "yTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n"
      }
    ],
    "cfg": [
      {
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "type": "String",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-ddGroup",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DropTarget.html",
        "linenr": 29,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "name": "ddGroup",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then this object will only\ninteract with other drag drop objects in the same group (defaults to undefined).</p>\n"
      },
      {
        "type": "String",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-dropAllowed",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DropTarget.html",
        "linenr": 38,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "name": "dropAllowed",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>The CSS class returned to the drag source when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n"
      },
      {
        "type": "String",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-dropNotAllowed",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DropTarget.html",
        "linenr": 43,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "name": "dropNotAllowed",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>The CSS class returned to the drag source when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n"
      },
      {
        "type": "String",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-overClass",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DropTarget.html",
        "linenr": 34,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "name": "overClass",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>The CSS class applied to the drop target element while the drag source is over it (defaults to \"\").</p>\n"
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
  "html_filename": "DropZone.html",
  "statics": {
    "method": [
      {
        "href": "Base3.html#Ext-Base-method-addStatics",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "members",
            "doc": "\n"
          }
        ],
        "shortDoc": "Add / override static properties of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 392,
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "addStatics"
      },
      {
        "href": "Base3.html#Ext-Base-method-borrow",
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "name": "fromClass",
            "doc": "<p>The class to borrow members from</p>\n\n"
          },
          {
            "type": "Array/String",
            "optional": false,
            "name": "members",
            "doc": "<p>The names of the members to borrow</p>\n\n"
          }
        ],
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 482,
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "borrow"
      },
      {
        "href": "Base3.html#Ext-Base-method-create",
        "params": [

        ],
        "shortDoc": "Create a new instance of this Class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 330,
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "owner": "Ext.Base",
        "name": "create"
      },
      {
        "href": "Base3.html#Ext-Base-method-createAlias",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "name": "alias",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n"
          },
          {
            "type": "String/Object",
            "optional": false,
            "name": "origin",
            "doc": "<p>The original method name</p>\n\n"
          }
        ],
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 658,
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "createAlias"
      },
      {
        "href": "Base3.html#Ext-Base-method-getName",
        "params": [

        ],
        "shortDoc": "Get the current class' name in string format. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 639,
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "getName"
      },
      {
        "href": "Base3.html#Ext-Base-method-implement",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "members",
            "doc": "\n"
          }
        ],
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 420,
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "implement"
      },
      {
        "href": "Base3.html#Ext-Base-method-override",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "members",
            "doc": "\n"
          }
        ],
        "shortDoc": "Override prototype members of this class. ...",
        "tagname": "method",
        "deprecated": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "static": true,
        "html_filename": "Base3.html",
        "inheritable": true,
        "protected": false,
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "linenr": 524,
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "owner": "Ext.Base",
        "name": "override"
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

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.dd.DropZone",
  "doc": "<p>This class provides a container DD instance that allows dropping on multiple child target nodes.</p>\n\n<p>By default, this class requires that child nodes accepting drop are registered with <a href=\"#/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>.\nHowever a simpler way to allow a DropZone to manage any number of target elements is to configure the\nDropZone with an implementation of <a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> which interrogates the passed\nmouse event to see if it has taken place within an element, or class of elements. This is easily done\nby using the event's <a href=\"#/api/Ext.EventObject-method-getTarget\" rel=\"Ext.EventObject-method-getTarget\" class=\"docClass\">getTarget</a> method to identify a node based on a\n<a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> selector.</p>\n\n<p>Once the DropZone has detected through calling getTargetFromEvent, that the mouse is over\na drop target, that target is passed as the first parameter to <a href=\"#/api/Ext.dd.DropZone-method-onNodeEnter\" rel=\"Ext.dd.DropZone-method-onNodeEnter\" class=\"docClass\">onNodeEnter</a>, <a href=\"#/api/Ext.dd.DropZone-method-onNodeOver\" rel=\"Ext.dd.DropZone-method-onNodeOver\" class=\"docClass\">onNodeOver</a>,\n<a href=\"#/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a>, <a href=\"#/api/Ext.dd.DropZone-method-onNodeDrop\" rel=\"Ext.dd.DropZone-method-onNodeDrop\" class=\"docClass\">onNodeDrop</a>. You may configure the instance of DropZone with implementations\nof these methods to provide application-specific behaviour for these events to update both\napplication state, and UI state.</p>\n\n<p>For example to make a GridPanel a cooperating target with the example illustrated in\n<a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>, the following technique might be used:</p>\n\n<pre><code>myGridPanel.on('render', function() {\n    myGridPanel.dropZone = new Ext.dd.DropZone(myGridPanel.getView().scroller, {\n\n        // If the mouse is over a grid row, return that node. This is\n        // provided as the \"target\" parameter in all \"onNodeXXXX\" node event handling functions\n        getTargetFromEvent: function(e) {\n            return e.getTarget(myGridPanel.getView().rowSelector);\n        },\n\n        // On entry into a target node, highlight that node.\n        onNodeEnter : function(target, dd, e, data){ \n            Ext.fly(target).addCls('my-row-highlight-class');\n        },\n\n        // On exit from a target node, unhighlight that node.\n        onNodeOut : function(target, dd, e, data){ \n            Ext.fly(target).removeCls('my-row-highlight-class');\n        },\n\n        // While over a target node, return the default drop allowed class which\n        // places a \"tick\" icon into the drag proxy.\n        onNodeOver : function(target, dd, e, data){ \n            return Ext.dd.DropZone.prototype.dropAllowed;\n        },\n\n        // On node drop we can interrogate the target to find the underlying\n        // application object that is the real target of the dragged data.\n        // In this case, it is a Record in the GridPanel's Store.\n        // We can use the data set up by the DragZone's getDragData method to read\n        // any data we decided to attach in the DragZone's getDragData method.\n        onNodeDrop : function(target, dd, e, data){\n            var rowIndex = myGridPanel.getView().findRowIndex(target);\n            var r = myGridPanel.getStore().getAt(rowIndex);\n            Ext.Msg.alert('Drop gesture', 'Dropped Record id ' + data.draggedRecord.id +\n                ' on Record id ' + r.id);\n            return true;\n        }\n    });\n}\n</code></pre>\n\n<p>See the <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> documentation for details about building a DragZone which\ncooperates with this DropZone.</p>\n",
  "extends": "Ext.dd.DropTarget",
  "docauthor": null
});