Ext.data.JsonP.Ext_data_proxy_Server({
  "href": "Server.html#Ext-data-proxy-Server",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.data.proxy.Proxy"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates the Proxy ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-constructor",
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
        "html_filename": "Proxy2.html",
        "linenr": 97,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Creates the Proxy</p>\n"
      },
      {
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
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
        "html_filename": "Observable.html",
        "linenr": 494,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
      },
      {
        "shortDoc": "Appends an event handler to this object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Server-method-fireEvent\" rel=\"Ext.data.proxy.Server-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
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
        "html_filename": "Observable.html",
        "linenr": 278,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n"
      },
      {
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
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
        "html_filename": "Observable.html",
        "linenr": 156,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
      },
      {
        "shortDoc": "Optional callback function which can be used to clean up after a request has been completed. ...",
        "params": [
          {
            "type": "Ext.data.Request",
            "optional": false,
            "doc": "<p>The Request object</p>\n",
            "name": "request"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the request was successful</p>\n",
            "name": "success"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-afterRequest",
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
        "html_filename": "Server.html",
        "linenr": 447,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "afterRequest",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Optional callback function which can be used to clean up after a request has been completed.</p>\n"
      },
      {
        "shortDoc": "Performs a batch of Operations, in the order specified by batchOrder. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Object containing the Model instances to act upon, keyed by action name</p>\n",
            "name": "operations"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) listeners object passed straight through to the Batch -\nsee <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a></p>\n",
            "name": "listeners"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-batch",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Batch",
          "doc": "<p>The newly created <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a> object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 256,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "batch",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs a batch of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operations</a>, in the order specified by <a href=\"#/api/Ext.data.proxy.Server-cfg-batchOrder\" rel=\"Ext.data.proxy.Server-cfg-batchOrder\" class=\"docClass\">batchOrder</a>. Used\ninternally by <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#/api/Ext.data.Store-method-sync\" rel=\"Ext.data.Store-method-sync\" class=\"docClass\">sync</a> method. Example usage:</p>\n\n<pre><code>myProxy.batch({\n    create : [myModel1, myModel2],\n    update : [myModel3],\n    destroy: [myModel4, myModel5]\n});\n</code></pre>\n\n<p>Where the myModel* above are <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances - in this case 1 and 2 are new instances and\nhave not been saved before, 3 has been saved previously but needs to be updated, and 4 and 5 have already been\nsaved but should now be destroyed.</p>\n"
      },
      {
        "shortDoc": "Creates and returns an Ext.data.Request object based on the options passed by the Store\nthat this Proxy is attached to. ...",
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object to execute</p>\n",
            "name": "operation"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-buildRequest",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Request",
          "doc": "<p>The request object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 171,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "buildRequest",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Creates and returns an <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object based on the options passed by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nthat this Proxy is attached to.</p>\n"
      },
      {
        "shortDoc": "Generates a url based on a given Ext.data.Request object. ...",
        "params": [
          {
            "type": "Ext.data.Request",
            "optional": false,
            "doc": "<p>The request object</p>\n",
            "name": "request"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-buildUrl",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The url</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 395,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "buildUrl",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Generates a url based on a given <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object. By default, ServerProxy's buildUrl will add the\ncache-buster param to the end of the url. Subclasses may need to perform additional modifications to the url.</p>\n"
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
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
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
        "html_filename": "Observable.html",
        "linenr": 425,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
      },
      {
        "shortDoc": "Removes all managed listeners for this object. ...",
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
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
        "html_filename": "Observable.html",
        "linenr": 454,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n"
      },
      {
        "shortDoc": "Performs the given create operation. ...",
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-create",
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
        "html_filename": "Proxy2.html",
        "linenr": 220,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "create",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given create operation.</p>\n"
      },
      {
        "shortDoc": "Performs the given destroy operation. ...",
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-destroy",
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
        "html_filename": "Proxy2.html",
        "linenr": 247,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given destroy operation.</p>\n"
      },
      {
        "shortDoc": "In ServerProxy subclasses, the create, read, update and destroy methods all\npass through to doRequest. ...",
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function to call when the Operation has completed</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope in which to execute the callback</p>\n",
            "name": "scope"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-doRequest",
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
        "html_filename": "Server.html",
        "linenr": 431,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "doRequest",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>In ServerProxy subclasses, the <a href=\"#/api/Ext.data.proxy.Server-method-create\" rel=\"Ext.data.proxy.Server-method-create\" class=\"docClass\">create</a>, <a href=\"#/api/Ext.data.proxy.Server-method-read\" rel=\"Ext.data.proxy.Server-method-read\" class=\"docClass\">read</a>, <a href=\"#/api/Ext.data.proxy.Server-method-update\" rel=\"Ext.data.proxy.Server-method-update\" class=\"docClass\">update</a> and <a href=\"#/api/Ext.data.proxy.Server-method-destroy\" rel=\"Ext.data.proxy.Server-method-destroy\" class=\"docClass\">destroy</a> methods all\npass through to doRequest. Each ServerProxy subclass must implement the doRequest method - see <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a> and <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> for examples. This method carries the same signature as\neach of the methods that delegate to it.</p>\n"
      },
      {
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
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
        "html_filename": "Observable.html",
        "linenr": 609,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Encodes the array of Ext.util.Filter objects into a string to be sent in the request url. ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n",
            "name": "sorters"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-encodeFilters",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The encoded filters</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 316,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "encodeFilters",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the filter data</p>\n"
      },
      {
        "shortDoc": "Encodes the array of Ext.util.Sorter objects into a string to be sent in the request url. ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorter</a> objects</p>\n",
            "name": "sorters"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-encodeSorters",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The encoded sorters</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 295,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "encodeSorters",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the sorter data</p>\n"
      },
      {
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 233,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.proxy.Server-method-enableBubble\" rel=\"Ext.data.proxy.Server-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n"
      },
      {
        "shortDoc": "Returns the model attached to this Proxy ...",
        "params": [

        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getModel",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The model</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "getModel",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Returns the model attached to this Proxy</p>\n"
      },
      {
        "shortDoc": "Returns the reader currently attached to this proxy instance ...",
        "params": [

        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getReader",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.reader.Reader",
          "doc": "<p>The Reader instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 176,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "getReader",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Returns the reader currently attached to this proxy instance</p>\n"
      },
      {
        "shortDoc": "Returns the writer currently attached to this proxy instance ...",
        "params": [

        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getWriter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.writer.Writer",
          "doc": "<p>The Writer instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 212,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "getWriter",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Returns the writer currently attached to this proxy instance</p>\n"
      },
      {
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 530,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
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
        "shortDoc": "Shorthand for addManagedListener. ...",
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "addManagedListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 681,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-addManagedListener\" rel=\"Ext.data.proxy.Server-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
      },
      {
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "removeManagedListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 687,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-removeManagedListener\" rel=\"Ext.data.proxy.Server-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Server-method-mon\" rel=\"Ext.data.proxy.Server-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
      },
      {
        "shortDoc": "Shorthand for addListener. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Server-method-fireEvent\" rel=\"Ext.data.proxy.Server-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "addListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 669,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n"
      },
      {
        "shortDoc": "Performs the given read operation. ...",
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-read",
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
        "html_filename": "Proxy2.html",
        "linenr": 229,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "read",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given read operation.</p>\n"
      },
      {
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
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
        "html_filename": "Observable.html",
        "linenr": 573,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n"
      },
      {
        "shortDoc": "Removes an event handler. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
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
        "html_filename": "Observable.html",
        "linenr": 392,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n"
      },
      {
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
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
        "html_filename": "Observable.html",
        "linenr": 197,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Server-method-mon\" rel=\"Ext.data.proxy.Server-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
      },
      {
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
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
        "html_filename": "Observable.html",
        "linenr": 554,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.proxy.Server-method-suspendEvents\" rel=\"Ext.data.proxy.Server-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n"
      },
      {
        "shortDoc": "Sets the model associated with this proxy. ...",
        "params": [
          {
            "type": "String/Ext.data.Model",
            "optional": false,
            "doc": "<p>The new model. Can be either the model name string,\nor a reference to the model's constructor</p>\n",
            "name": "model"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Sets the new model on the associated Store, if one is present</p>\n",
            "name": "setOnStore"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setModel",
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
        "html_filename": "Proxy2.html",
        "linenr": 115,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "setModel",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Sets the model associated with this proxy. This will only usually be called by a Store</p>\n"
      },
      {
        "shortDoc": "Sets the Proxy's Reader by string, config object or Reader instance ...",
        "params": [
          {
            "type": "String/Object/Ext.data.reader.Reader",
            "optional": false,
            "doc": "<p>The new Reader, which can be either a type string,\na configuration object or an <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> instance</p>\n",
            "name": "reader"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setReader",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.reader.Reader",
          "doc": "<p>The attached Reader object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 144,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "setReader",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Sets the Proxy's Reader by string, config object or Reader instance</p>\n"
      },
      {
        "shortDoc": "Sets the Proxy's Writer by string, config object or Writer instance ...",
        "params": [
          {
            "type": "String/Object/Ext.data.writer.Writer",
            "optional": false,
            "doc": "<p>The new Writer, which can be either a type string,\na configuration object or an <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> instance</p>\n",
            "name": "writer"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setWriter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.writer.Writer",
          "doc": "<p>The attached Writer object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 184,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "setWriter",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Sets the Proxy's Writer by string, config object or Writer instance</p>\n"
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
        "shortDoc": "Suspends the firing of all events. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.proxy.Server-method-resumeEvents\" rel=\"Ext.data.proxy.Server-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
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
        "html_filename": "Observable.html",
        "linenr": 541,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.proxy.Server-method-resumeEvents\" rel=\"Ext.data.proxy.Server-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
      },
      {
        "shortDoc": "Shorthand for removeListener. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "removeListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 675,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-removeListener\" rel=\"Ext.data.proxy.Server-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n"
      },
      {
        "shortDoc": "Performs the given update operation. ...",
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-update",
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
        "html_filename": "Proxy2.html",
        "linenr": 238,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "update",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given update operation.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
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
      {
        "shortDoc": "Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". ...",
        "type": "Object",
        "href": "Server.html#Ext-data-proxy-Server-cfg-api",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 97,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "api",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". Defaults to:</p>\n\n<pre><code>api: {\n    create  : undefined,\n    read    : undefined,\n    update  : undefined,\n    destroy : undefined\n}\n</code></pre>\n\n<p>The url is built based upon the action being executed [create|read|update|destroy] using the commensurate\n<a href=\"#/api/Ext.data.proxy.Server-cfg-api\" rel=\"Ext.data.proxy.Server-cfg-api\" class=\"docClass\">api</a> property, or if undefined default to the configured\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.<a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n\n<p>For example:</p>\n\n<pre><code>api: {\n    create  : '/controller/new',\n    read    : '/controller/load',\n    update  : '/controller/update',\n    destroy : '/controller/destroy_action'\n}\n</code></pre>\n\n<p>If the specific URL for a given CRUD action is undefined, the CRUD action request will be directed to the\nconfigured <a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n"
      },
      {
        "shortDoc": "True to batch actions of a particular type when synchronizing the store. ...",
        "type": "Boolean",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchActions",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 57,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "batchActions",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>True to batch actions of a particular type when synchronizing the store. Defaults to true.</p>\n"
      },
      {
        "shortDoc": "Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. ...",
        "type": "String",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchOrder",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 50,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "batchOrder",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. Override this to set a different\norder for the batched CRUD actions to be executed in. Defaults to 'create,update,destroy'.</p>\n"
      },
      {
        "shortDoc": "The name of the cache param added to the url when using noCache. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-cacheString",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 85,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "cacheString",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the cache param added to the url when using noCache. Defaults to \"_dc\".</p>\n"
      },
      {
        "shortDoc": "The name of the direction parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-directionParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 64,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "directionParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the direction parameter to send in a request. <strong>This is only used when simpleSortMode is set to\ntrue.</strong> Defaults to 'dir'.</p>\n"
      },
      {
        "shortDoc": "Extra parameters that will be included on every request. ...",
        "type": "Object",
        "href": "Server.html#Ext-data-proxy-Server-cfg-extraParams",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "extraParams",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Extra parameters that will be included on every request. Individual requests with params of the same name\nwill override these params when they are in conflict.</p>\n"
      },
      {
        "shortDoc": "The name of the 'filter' parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-filterParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 57,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "filterParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set this to undefined if you don't\nwant to send a filter parameter.</p>\n"
      },
      {
        "shortDoc": "The name of the 'group' parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-groupParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 43,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "groupParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'group' parameter to send in a request. Defaults to 'group'. Set this to undefined if you don't\nwant to send a group parameter.</p>\n"
      },
      {
        "shortDoc": "The name of the 'limit' parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-limitParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 36,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "limitParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'limit' parameter to send in a request. Defaults to 'limit'. Set this to undefined if you don't\nwant to send a limit parameter.</p>\n"
      },
      {
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "type": "Object",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "The name of the Model to tie to this Proxy. ...",
        "type": "String/Ext.data.Model",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-model",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 77,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "model",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>The name of the Model to tie to this Proxy. Can be either the string name of the Model, or a reference to the\nModel constructor. Required.</p>\n"
      },
      {
        "shortDoc": "Disable caching by adding a unique parameter name to the request. ...",
        "type": "Boolean",
        "href": "Server.html#Ext-data-proxy-Server-cfg-noCache",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 79,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "noCache",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Disable caching by adding a unique parameter name to the request. Set to false to allow caching. Defaults to true.</p>\n"
      },
      {
        "shortDoc": "The name of the 'page' parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-pageParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 22,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "pageParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'page' parameter to send in a request. Defaults to 'page'. Set this to undefined if you don't\nwant to send a page parameter.</p>\n"
      },
      {
        "shortDoc": "The Ext.data.reader.Reader to use to decode the server's response or data read from client. ...",
        "type": "Object/String/Ext.data.reader.Reader",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-reader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 83,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "reader",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>The <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> to use to decode the server's response or data read from client. This can either be a\nReader instance, a config object or just a valid Reader type name (e.g. 'json', 'xml').</p>\n"
      },
      {
        "shortDoc": "Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a\nremote...",
        "type": "Boolean",
        "href": "Server.html#Ext-data-proxy-Server-cfg-simpleSortMode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 71,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "simpleSortMode",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a\nremote sort is requested. The directionParam and sortParam will be sent with the property name and either 'ASC'\nor 'DESC'.</p>\n"
      },
      {
        "shortDoc": "The name of the 'sort' parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-sortParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 50,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "sortParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'sort' parameter to send in a request. Defaults to 'sort'. Set this to undefined if you don't\nwant to send a sort parameter.</p>\n"
      },
      {
        "shortDoc": "The name of the 'start' parameter to send in a request. ...",
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-startParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 29,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "startParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'start' parameter to send in a request. Defaults to 'start'. Set this to undefined if you don't\nwant to send a start parameter.</p>\n"
      },
      {
        "shortDoc": "The number of milliseconds to wait for a response. ...",
        "type": "Number",
        "href": "Server.html#Ext-data-proxy-Server-cfg-timeout",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 91,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "timeout",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The number of milliseconds to wait for a response. Defaults to 30000 milliseconds (30 seconds).</p>\n"
      },
      {
        "type": "String",
        "href": "Server.html#Ext-data-proxy-Server-cfg-url",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 17,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "url",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The URL from which to request the data object.</p>\n"
      },
      {
        "shortDoc": "The Ext.data.writer.Writer to use to encode any request sent to the server or saved to client. ...",
        "type": "Object/String/Ext.data.writer.Writer",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-writer",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Proxy2.html",
        "linenr": 89,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "name": "writer",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>The <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> to use to encode any request sent to the server or saved to client. This can either be\na Writer instance, a config object or just a valid Writer type name (e.g. 'json', 'xml').</p>\n"
      }
    ],
    "event": [
      {
        "shortDoc": "Fires when the server returns an exception ...",
        "params": [
          {
            "type": "Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The response from the AJAX request</p>\n",
            "name": "response"
          },
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The operation that triggered request</p>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-event-exception",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Server.html",
        "linenr": 130,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "name": "exception",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Fires when the server returns an exception</p>\n"
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
    "Ext.util.Observable"
  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [
    "Ext.data.ServerProxy"
  ],
  "html_filename": "Server.html",
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
  "author": "Ed Spencer",
  "subclasses": [
    "Ext.data.proxy.JsonP",
    "Ext.data.proxy.Ajax",
    "Ext.data.proxy.Direct"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.proxy.Server",
  "doc": "<p>ServerProxy is a superclass of <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">JsonPProxy</a> and <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">AjaxProxy</a>, and\nwould not usually be used directly.</p>\n\n<p>ServerProxy should ideally be named HttpProxy as it is a superclass for all HTTP proxies - for <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4.x it has been\ncalled ServerProxy to enable any 3.x applications that reference the HttpProxy to continue to work (HttpProxy is now\nan alias of AjaxProxy).</p>\n",
  "extends": "Ext.data.proxy.Proxy",
  "docauthor": null
});