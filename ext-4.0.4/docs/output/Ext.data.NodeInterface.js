Ext.data.JsonP.Ext_data_NodeInterface({
  "href": "NodeInterface.html#Ext-data-NodeInterface",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Insert node(s) as the last child node of this node. ...",
        "params": [
          {
            "type": "Node/Array",
            "optional": false,
            "doc": "<p>The node or Array of nodes to append</p>\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-appendChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>The appended node if single append, or null if an array was passed</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 362,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "appendChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n"
      },
      {
        "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "name": "args"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-bubble",
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
        "html_filename": "NodeInterface.html",
        "linenr": 757,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "bubble",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n"
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
        "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "name": "args"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-cascadeBy",
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
        "html_filename": "NodeInterface.html",
        "linenr": 784,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "cascadeBy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n"
      },
      {
        "shortDoc": "Collapse this node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once the collapse completes</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapse",
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
        "html_filename": "NodeInterface.html",
        "linenr": 1056,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Collapse this node.</p>\n"
      },
      {
        "shortDoc": "Collapse all the children of this node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once all the children are collapsed</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapseChildren",
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
        "html_filename": "NodeInterface.html",
        "linenr": 1093,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "collapseChildren",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Collapse all the children of this node.</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is an ancestor (at any point) of the passed node. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-contains",
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
        "html_filename": "NodeInterface.html",
        "linenr": 865,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "contains",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n"
      },
      {
        "shortDoc": "Creates a copy (clone) of this Node. ...",
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A new id, defaults to this Node's id.</p>\n",
            "name": "id"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) <p>If passed as <code>true</code>, all child Nodes are recursively copied into the new Node.</p></p>\n\n<p>If omitted or false, the copy will have no child Nodes.</p>\n\n",
            "name": "deep"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-copy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>A copy of this Node.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 505,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "copy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Creates a copy (clone) of this Node.</p>\n"
      },
      {
        "shortDoc": "Ensures that the passed object is an instance of a Record with the NodeInterface applied ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-createNode",
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
        "html_filename": "NodeInterface.html",
        "linenr": 244,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "createNode",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n"
      },
      {
        "shortDoc": "Destroys the node. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "silent"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-destroy",
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
        "html_filename": "NodeInterface.html",
        "linenr": 542,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Destroys the node.</p>\n"
      },
      {
        "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node in the iteration.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "name": "args"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-eachChild",
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
        "html_filename": "NodeInterface.html",
        "linenr": 804,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "eachChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n"
      },
      {
        "shortDoc": "Expand this node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once the expand completes</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expand",
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
        "html_filename": "NodeInterface.html",
        "linenr": 974,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Expand this node.</p>\n"
      },
      {
        "shortDoc": "Expand all the children of this node. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once all the children are expanded</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expandChildren",
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
        "html_filename": "NodeInterface.html",
        "linenr": 1025,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "expandChildren",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Expand all the children of this node.</p>\n"
      },
      {
        "shortDoc": "Finds the first child that has the attribute with the specified value. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The attribute name</p>\n",
            "name": "attribute"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to search for</p>\n",
            "name": "value"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
            "name": "deep"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 824,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "findChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n"
      },
      {
        "shortDoc": "Finds the first child by a custom function. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>A function which must return <code>true</code> if the passed Node is the required Node.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Node being tested.</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
            "name": "deep"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChildBy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 837,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "findChildBy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n"
      },
      {
        "shortDoc": "Returns the child node at the specified index. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getChildAt",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 697,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "getChildAt",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns the child node at the specified index.</p>\n"
      },
      {
        "shortDoc": "Returns depth of this node (the root node has a depth of 0) ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getDepth",
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
        "html_filename": "NodeInterface.html",
        "linenr": 749,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "getDepth",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n"
      },
      {
        "shortDoc": "Gets the hierarchical path from the root of the current node. ...",
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The field to construct the path from. Defaults to the model idProperty.</p>\n",
            "name": "field"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A separator to use. Defaults to <code>'/'</code>.</p>\n",
            "name": "separator"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getPath",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The node path</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 729,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "getPath",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Gets the hierarchical path from the root of the current node.</p>\n"
      },
      {
        "shortDoc": "Returns true if this node has one or more child nodes, else false. ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-hasChildNodes",
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
        "html_filename": "NodeInterface.html",
        "linenr": 340,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "hasChildNodes",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n"
      },
      {
        "shortDoc": "Returns the index of a child node ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-indexOf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The index of the node or -1 if it was not found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 720,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "indexOf",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns the index of a child node</p>\n"
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
        "shortDoc": "Inserts the first node before the second node in this nodes childNodes collection. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to insert</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to insert before (if null the node is appended)</p>\n",
            "name": "refNode"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertBefore",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>The inserted node</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 570,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "insertBefore",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n"
      },
      {
        "shortDoc": "Insert a node into this node ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The zero-based index to insert the node at</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The node to insert</p>\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Record",
          "doc": "<p>The record you just inserted</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 652,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "insertChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Insert a node into this node</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed node is an ancestor (at any point) of this node. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isAncestor",
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
        "html_filename": "NodeInterface.html",
        "linenr": 874,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isAncestor",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n"
      },
      {
        "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpandable",
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
        "html_filename": "NodeInterface.html",
        "linenr": 348,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isExpandable",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true, otherwise returns false.</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is expaned ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpanded",
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
        "html_filename": "NodeInterface.html",
        "linenr": 927,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isExpanded",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is expaned</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is the first child of its parent ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isFirst",
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
        "html_filename": "NodeInterface.html",
        "linenr": 332,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isFirst",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the first child of its parent</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is the last child of its parent ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLast",
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
        "html_filename": "NodeInterface.html",
        "linenr": 324,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isLast",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the last child of its parent</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is a leaf ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLeaf",
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
        "html_filename": "NodeInterface.html",
        "linenr": 256,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isLeaf",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is a leaf</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is loaded ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoaded",
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
        "html_filename": "NodeInterface.html",
        "linenr": 935,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isLoaded",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is loaded</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is loading ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoading",
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
        "html_filename": "NodeInterface.html",
        "linenr": 943,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isLoading",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is loading</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is the root node ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isRoot",
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
        "html_filename": "NodeInterface.html",
        "linenr": 951,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isRoot",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the root node</p>\n"
      },
      {
        "shortDoc": "Returns true if this node is visible ...",
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isVisible",
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
        "html_filename": "NodeInterface.html",
        "linenr": 959,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "isVisible",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is visible</p>\n"
      },
      {
        "shortDoc": "Removes this node from its parent ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "name": "destroy"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-remove",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 668,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes this node from its parent</p>\n"
      },
      {
        "shortDoc": "Removes all child nodes from this node. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "name": "destroy"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeAll",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 682,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "removeAll",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes all child nodes from this node.</p>\n"
      },
      {
        "shortDoc": "Removes a child node from this node. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to remove</p>\n",
            "name": "node"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "name": "destroy"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>The removed node</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 451,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "removeChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes a child node from this node.</p>\n"
      },
      {
        "shortDoc": "Replaces one child node in this node with another. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The replacement node</p>\n",
            "name": "newChild"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to replace</p>\n",
            "name": "oldChild"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-replaceChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Node",
          "doc": "<p>The replaced node</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 706,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "replaceChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Replaces one child node in this node with another.</p>\n"
      },
      {
        "shortDoc": "Sorts this nodes children using the supplied sort function. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.</p>\n",
            "name": "fn"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not to apply this sort recursively</p>\n",
            "name": "recursive"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Set to true to not fire a sort event.</p>\n",
            "name": "suppressEvent"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-sort",
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
        "html_filename": "NodeInterface.html",
        "linenr": 890,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n"
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
        "shortDoc": "Updates general data of this node like isFirst, isLast, depth. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "silent"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-updateInfo",
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
        "html_filename": "NodeInterface.html",
        "linenr": 282,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "updateInfo",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "An array of this nodes children. ...",
        "type": "Object",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-childNodes",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 36,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "childNodes",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>An array of this nodes children.  Array will be empty if this node has no chidren.</p>\n"
      },
      {
        "shortDoc": "A reference to this node's first child node. ...",
        "type": "Object",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-firstChild",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 31,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "firstChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>A reference to this node's first child node. <code>null</code> if this node has no children.</p>\n"
      },
      {
        "shortDoc": "A reference to this node's last child node. ...",
        "type": "Object",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-lastChild",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 26,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "lastChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>A reference to this node's last child node. <code>null</code> if this node has no children.</p>\n"
      },
      {
        "shortDoc": "A reference to this node's next sibling node. ...",
        "type": "Object",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-nextSibling",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 11,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "nextSibling",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>A reference to this node's next sibling node. <code>null</code> if this node does not have a next sibling.</p>\n"
      },
      {
        "shortDoc": "A reference to this node's parent node. ...",
        "type": "Object",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-parentNode",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 21,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "parentNode",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>A reference to this node's parent node. <code>null</code> if this node is the root node.</p>\n"
      },
      {
        "shortDoc": "A reference to this node's previous sibling node. ...",
        "type": "Object",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-previousSibling",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 16,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "previousSibling",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>A reference to this node's previous sibling node. <code>null</code> if this node does not have a previous sibling.</p>\n"
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
      }
    ],
    "cfg": [

    ],
    "event": [
      {
        "shortDoc": "Fires when a new child node is appended ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The newly appended node</p>\n",
            "name": "node"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the newly appended node</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-append",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 108,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "append",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a new child node is appended</p>\n"
      },
      {
        "shortDoc": "Fires before a new child is appended, return false to cancel the append. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be appended</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeappend",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 144,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "beforeappend",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n"
      },
      {
        "shortDoc": "Fires before this node is collapsed. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The collapsing node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforecollapse",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 200,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "beforecollapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is collapsed.</p>\n"
      },
      {
        "shortDoc": "Fires before this node is expanded. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The expanding node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeexpand",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 193,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "beforeexpand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is expanded.</p>\n"
      },
      {
        "shortDoc": "Fires before a new child is inserted, return false to cancel the insert. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be inserted</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node the node is being inserted before</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeinsert",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 170,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "beforeinsert",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n"
      },
      {
        "shortDoc": "Fires before this node is moved to a new location in the tree. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent of this node</p>\n",
            "name": "oldParent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The new parent this node is moving to</p>\n",
            "name": "newParent"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index it is being moved to</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforemove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 160,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "beforemove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n"
      },
      {
        "shortDoc": "Fires before a child is removed, return false to cancel the remove. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be removed</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeremove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 152,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "beforeremove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n"
      },
      {
        "shortDoc": "Fires when this node is collapsed. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The collapsing node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-collapse",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 186,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is collapsed.</p>\n"
      },
      {
        "shortDoc": "Fires when this node is expanded. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The expanding node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-expand",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is expanded.</p>\n"
      },
      {
        "shortDoc": "Fires when a new child node is inserted. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node inserted</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node the node was inserted before</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-insert",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 135,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "insert",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a new child node is inserted.</p>\n"
      },
      {
        "shortDoc": "Fires when this node is moved to a new location in the tree ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The old parent of this node</p>\n",
            "name": "oldParent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The new parent of this node</p>\n",
            "name": "newParent"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index it was moved to</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-move",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 125,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "move",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n"
      },
      {
        "shortDoc": "Fires when a child node is removed ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The removed node</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-remove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 117,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a child node is removed</p>\n"
      },
      {
        "shortDoc": "Fires when this node's childNodes are sorted. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node.</p>\n",
            "name": "this"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>childNodes of this node.</p>\n",
            "name": "The"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-sort",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 207,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node's childNodes are sorted.</p>\n"
      }
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
  "html_filename": "NodeInterface.html",
  "statics": {
    "method": [
      {
        "shortDoc": "Add / override static properties of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-addStatics",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 392,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "doc": "<p>The class to borrow members from</p>\n",
            "name": "fromClass"
          },
          {
            "type": "Array/String",
            "optional": false,
            "doc": "<p>The names of the members to borrow</p>\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-borrow",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 482,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "borrow",
        "owner": "Ext.Base",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n"
      },
      {
        "shortDoc": "Create a new instance of this Class. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 330,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n"
      },
      {
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "href": "Base3.html#Ext-Base-method-createAlias",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n"
      },
      {
        "shortDoc": "This method allows you to decorate a Record's prototype to implement the NodeInterface. ...",
        "params": [
          {
            "type": "Ext.data.Record",
            "optional": false,
            "doc": "<p>The Record you want to decorate the prototype of.</p>\n",
            "name": "record"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-decorate",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "NodeInterface.html",
        "linenr": 42,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "name": "decorate",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, new events, new properties and new fields on every Record\nwith the same Model as the passed Record.</p>\n"
      },
      {
        "shortDoc": "Get the current class' name in string format. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 639,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n"
      },
      {
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-implement",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 420,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n"
      },
      {
        "shortDoc": "Override prototype members of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-override",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 524,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n"
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.NodeInterface",
  "doc": "<p>This class is meant to be used as a set of methods that are applied to the prototype of a\nRecord to decorate it with a Node API. This means that models used in conjunction with a tree\nwill have all of the tree related methods available on the model. In general this class will\nnot be used directly by the developer.</p>\n",
  "extends": "Ext.Base",
  "docauthor": null
});