Ext.data.JsonP.Ext_data_TreeStore({
  "href": "TreeStore.html#Ext-data-TreeStore",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.data.AbstractStore"
  ],
  "members": {
    "method": [
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.TreeStore-method-fireEvent\" rel=\"Ext.data.TreeStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.TreeStore-method-enableBubble\" rel=\"Ext.data.TreeStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n"
      },
      {
        "shortDoc": "Returns all Model instances that are either currently a phantom (e.g. ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getNewRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Ext.data.Model]",
          "doc": "<p>The Model instances</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 461,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "getNewRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet been saved on this Store (this happens when adding a non-phantom record from another Store into this one)</p>\n"
      },
      {
        "shortDoc": "Returns the record node by id ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "id"
          }
        ],
        "href": "TreeStore.html#Ext-data-TreeStore-method-getNodeById",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.NodeInterface",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 365,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "getNodeById",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Returns the record node by id</p>\n"
      },
      {
        "shortDoc": "Returns the proxy currently attached to this proxy instance ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getProxy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The Proxy instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 316,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "getProxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns the proxy currently attached to this proxy instance</p>\n"
      },
      {
        "shortDoc": "Returns any records that have been removed from the store but not yet destroyed on the proxy. ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getRemovedRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Ext.data.Model]",
          "doc": "<p>The removed Model instances</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 487,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "getRemovedRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n"
      },
      {
        "shortDoc": "Returns the root node for this tree. ...",
        "params": [

        ],
        "href": "TreeStore.html#Ext-data-TreeStore-method-getRootNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.NodeInterface",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 357,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "getRootNode",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Returns the root node for this tree.</p>\n"
      },
      {
        "shortDoc": "Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getUpdatedRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Ext.data.Model]",
          "doc": "<p>The updated Model instances</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 470,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "getUpdatedRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n"
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
        "shortDoc": "Performs initialization of this mixin. ...",
        "params": [

        ],
        "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
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
        "html_filename": "Sortable.html",
        "linenr": 32,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "initSortable",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method during their\nown initialization.</p>\n"
      },
      {
        "shortDoc": "Returns true if the Store is currently performing a load operation ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-isLoading",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Store is currently loading</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 726,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "isLoading",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns true if the Store is currently performing a load operation</p>\n"
      },
      {
        "shortDoc": "Loads the Store using its configured proxy. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object. This is passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a>\nobject that is created and then sent to the proxy's <a href=\"#/api/Ext.data.proxy.Proxy-method-read\" rel=\"Ext.data.proxy.Proxy-method-read\" class=\"docClass\">Ext.data.proxy.Proxy.read</a> function.\nThe options can also contain a node, which indicates which node is to be loaded. If not specified, it will\ndefault to the root node.</p>\n",
            "name": "options"
          }
        ],
        "href": "TreeStore.html#Ext-data-TreeStore-method-load",
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
        "html_filename": "TreeStore.html",
        "linenr": 373,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "load",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Loads the Store using its configured <a href=\"#/api/Ext.data.TreeStore-cfg-proxy\" rel=\"Ext.data.TreeStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-addManagedListener\" rel=\"Ext.data.TreeStore-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-removeManagedListener\" rel=\"Ext.data.TreeStore-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.TreeStore-method-mon\" rel=\"Ext.data.TreeStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.TreeStore-method-fireEvent\" rel=\"Ext.data.TreeStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n"
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
        "shortDoc": "Removes all records from the store. ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-removeAll",
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
        "html_filename": "AbstractStore.html",
        "linenr": 716,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "removeAll",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Removes all records from the store. This method does a \"fast remove\",\nindividual remove events are not called. The <a href=\"#/api/Ext.data.TreeStore-event-clear\" rel=\"Ext.data.TreeStore-event-clear\" class=\"docClass\">clear</a> event is\nfired upon completion.</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.TreeStore-method-mon\" rel=\"Ext.data.TreeStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.TreeStore-method-suspendEvents\" rel=\"Ext.data.TreeStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n"
      },
      {
        "shortDoc": "Sets the Store's Proxy by string, config object or Proxy instance ...",
        "params": [
          {
            "type": "String/Object/Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "<p>The new Proxy, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> instance</p>\n",
            "name": "proxy"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-setProxy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The attached Proxy object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 287,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "setProxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n"
      },
      {
        "shortDoc": "Sets the root node for this store. ...",
        "params": [
          {
            "type": "Ext.data.Model/Ext.data.NodeInterface/Object",
            "optional": false,
            "doc": "\n",
            "name": "root"
          }
        ],
        "href": "TreeStore.html#Ext-data-TreeStore-method-setRootNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.NodeInterface",
          "doc": "<p>The new root</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 320,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "setRootNode",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Sets the root node for this store.  See also the <a href=\"#/api/Ext.data.TreeStore-cfg-root\" rel=\"Ext.data.TreeStore-cfg-root\" class=\"docClass\">root</a> config option.</p>\n"
      },
      {
        "shortDoc": "Sorts the data in the Store by one or more of its properties. ...",
        "params": [
          {
            "type": "String|[Ext.util.Sorter]",
            "optional": false,
            "doc": "<p>Either a string name of one of the fields in this Store's configured\n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>, or an array of sorter configurations.</p>\n",
            "name": "sorters"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
            "name": "direction"
          }
        ],
        "href": "Sortable.html#Ext-util-Sortable-method-sort",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "[Ext.util.Sorter]",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Sortable.html",
        "linenr": 53,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "sort",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates\nthe actual sorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n</code></pre>\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n"
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.TreeStore-method-resumeEvents\" rel=\"Ext.data.TreeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.TreeStore-method-resumeEvents\" rel=\"Ext.data.TreeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
      },
      {
        "shortDoc": "Synchronizes the Store with its Proxy. ...",
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-sync",
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
        "html_filename": "AbstractStore.html",
        "linenr": 557,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "sync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in the store, updating the Store's internal representation of the records\nas each operation completes.</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-removeListener\" rel=\"Ext.data.TreeStore-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "Sets the updating behavior based on batch synchronization. ...",
        "type": "String",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-batchUpdateMode",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 69,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "batchUpdateMode",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal representation of the data after each operation of the batch has completed, 'complete' will wait until\nthe entire batch has been completed before updating the Store's data. 'complete' is a good choice for local\nstorage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.</p>\n"
      },
      {
        "shortDoc": "The string type of the Proxy to create if none is specified. ...",
        "type": "String",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-defaultProxyType",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 100,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "defaultProxyType",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The string type of the Proxy to create if none is specified. This defaults to creating a\n<a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">memory proxy</a>.</p>\n"
      },
      {
        "type": "String",
        "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sortable.html",
        "linenr": 17,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "defaultSortDirection",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n"
      },
      {
        "shortDoc": "If we have no fields declare for the store, add some defaults. ...",
        "type": "Object",
        "href": "TreeStore.html#Ext-data-TreeStore-property-fields",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 80,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "fields",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>If we have no fields declare for the store, add some defaults.\nThese will be ignored if a model is explicitly specified.</p>\n"
      },
      {
        "shortDoc": "If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "type": "Boolean",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filterOnLoad",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 78,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "filterOnLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if <a href=\"#/api/Ext.data.Store-cfg-remoteFilter\" rel=\"Ext.data.Store-cfg-remoteFilter\" class=\"docClass\">remoteFilter</a> is true</p>\n"
      },
      {
        "type": "Ext.util.MixedCollection",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filters",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 278,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "filters",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filters</a> currently applied to this Store</p>\n"
      },
      {
        "shortDoc": "True if the Store has already been destroyed. ...",
        "type": "Boolean",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-isDestroyed",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 107,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "isDestroyed",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>True if the Store has already been destroyed. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n"
      },
      {
        "shortDoc": "Flag denoting that this object is sortable. ...",
        "type": "Boolean",
        "href": "Sortable.html#Ext-util-Sortable-property-isSortable",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sortable.html",
        "linenr": 11,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "isSortable",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n"
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
        "shortDoc": "If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "type": "Boolean",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-sortOnLoad",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 85,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "sortOnLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if <a href=\"#/api/Ext.data.Store-cfg-remoteSort\" rel=\"Ext.data.Store-cfg-remoteSort\" class=\"docClass\">remoteSort</a> is true</p>\n"
      },
      {
        "type": "String",
        "href": "Sortable.html#Ext-util-Sortable-property-sortRoot",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sortable.html",
        "linenr": 27,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "sortRoot",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The property in each item that contains the data to sort.</p>\n"
      },
      {
        "type": "Ext.util.MixedCollection",
        "href": "Sortable.html#Ext-util-Sortable-property-sorters",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Sortable.html",
        "linenr": 40,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "sorters",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n"
      }
    ],
    "cfg": [
      {
        "shortDoc": "If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called\nafte...",
        "type": "Boolean/Object",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoLoad",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 55,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "autoLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called\nafter creation. If the value of autoLoad is an Object, this Object will be passed to the store's load method.\nDefaults to false.</p>\n"
      },
      {
        "shortDoc": "True to automatically sync the Store with its Proxy after every edit to one of its Records. ...",
        "type": "Boolean",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoSync",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 63,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "autoSync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>True to automatically sync the Store with its Proxy after every edit to one of its Records. Defaults to false.</p>\n"
      },
      {
        "shortDoc": "Remove previously existing child nodes before loading. ...",
        "type": "Boolean",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-clearOnLoad",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 42,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "clearOnLoad",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Remove previously existing child nodes before loading. Default to true.</p>\n"
      },
      {
        "shortDoc": "The default root id. ...",
        "type": "String",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-defaultRootId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 55,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "defaultRootId",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The default root id. Defaults to 'root'</p>\n"
      },
      {
        "type": "String",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-defaultRootProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 61,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "defaultRootProperty",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The root property to specify on the reader if one is not explicitly defined.</p>\n"
      },
      {
        "shortDoc": "This may be used in place of specifying a model configuration. ...",
        "type": "[Object]",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-fields",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 122,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "fields",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.TreeStore-cfg-model\" rel=\"Ext.data.TreeStore-cfg-model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.TreeStore-cfg-model\" rel=\"Ext.data.TreeStore-cfg-model\" class=\"docClass\">model</a>\nconfig.</p>\n"
      },
      {
        "shortDoc": "Set to true to automatically prepend a leaf sorter. ...",
        "type": "Boolean",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-folderSort",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 67,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "folderSort",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Set to true to automatically prepend a leaf sorter. Defaults to <code>undefined</code>.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Name of the Model associated with this store. ...",
        "type": "String",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-model",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 132,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "model",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Name of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> associated with this store.\nThe string is used as an argument for <a href=\"#/api/Ext.ModelManager-method-getModel\" rel=\"Ext.ModelManager-method-getModel\" class=\"docClass\">Ext.ModelManager.getModel</a>.</p>\n"
      },
      {
        "shortDoc": "The name of the parameter sent to the server which contains the identifier of the node. ...",
        "type": "String",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-nodeParam",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 48,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "nodeParam",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The name of the parameter sent to the server which contains the identifier of the node.\nDefaults to 'node'.</p>\n"
      },
      {
        "shortDoc": "The Proxy to use for this Store. ...",
        "type": "String/Ext.data.proxy.Proxy/Object",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-proxy",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 49,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "proxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The Proxy to use for this Store. This can be either a string, a config object or a Proxy instance -\nsee <a href=\"#/api/Ext.data.TreeStore-method-setProxy\" rel=\"Ext.data.TreeStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n"
      },
      {
        "shortDoc": "The root node for this store. ...",
        "type": "Ext.data.Model/Ext.data.NodeInterface/Object",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-root",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 24,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "root",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The root node for this store. For example:</p>\n\n<pre><code>root: {\n    expanded: true, \n    text: \"My Root\",\n    children: [\n        { text: \"Child 1\", leaf: true },\n        { text: \"Child 2\", expanded: true, children: [\n            { text: \"GrandChild\", leaf: true }\n        ] }\n    ]\n}\n</code></pre>\n\n<p>Setting the <code>root</code> config option is the same as calling <a href=\"#/api/Ext.data.TreeStore-method-setRootNode\" rel=\"Ext.data.TreeStore-method-setRootNode\" class=\"docClass\">setRootNode</a>.</p>\n"
      },
      {
        "shortDoc": "Unique identifier for this store. ...",
        "type": "String",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-storeId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 116,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "storeId",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Unique identifier for this store. If present, this Store will be registered with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Ext.data.StoreManager</a>,\nmaking it easy to reuse elsewhere. Defaults to undefined.</p>\n"
      }
    ],
    "event": [
      {
        "shortDoc": "Fired when a Model instance has been added to this Store ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The store</p>\n",
            "name": "store"
          },
          {
            "type": "[Ext.data.Model]",
            "optional": false,
            "doc": "<p>The Model instances that were added</p>\n",
            "name": "records"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the instances were inserted</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-add",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 146,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "add",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired when a Model instance has been added to this Store</p>\n"
      },
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-append",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "append",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 95,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "append",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeappend",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "beforeappend",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 119,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "beforeappend",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforecollapse",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "beforecollapse",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 161,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "beforecollapse",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeexpand",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "beforeexpand",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 155,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "beforeexpand",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeinsert",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "beforeinsert",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 137,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "beforeinsert",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n"
      },
      {
        "shortDoc": "Fires before a request is made for a new data object. ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>This Store</p>\n",
            "name": "store"
          },
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object that will be passed to the Proxy to\nload the Store</p>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforeload",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 185,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "beforeload",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires before a request is made for a new data object. If the beforeload handler returns false the load\naction will be canceled.</p>\n"
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforemove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "beforemove",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 131,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "beforemove",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeremove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "beforeremove",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 125,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "beforeremove",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n"
      },
      {
        "shortDoc": "Fired before a call to sync is executed. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Hash of all records to be synchronized, broken down into create, update and destroy</p>\n",
            "name": "options"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforesync",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 204,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "beforesync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired before a call to <a href=\"#/api/Ext.data.TreeStore-method-sync\" rel=\"Ext.data.TreeStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n"
      },
      {
        "shortDoc": "Fired after the removeAll method is called. ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-clear",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 210,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "clear",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired after the <a href=\"#/api/Ext.data.TreeStore-method-removeAll\" rel=\"Ext.data.TreeStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n"
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-collapse",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "collapse",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 149,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "collapse",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when this node is collapsed.</p>\n"
      },
      {
        "shortDoc": "Fires whenever the records in the Store have changed in some way - this could include adding or removing\nrecords, or ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The data store</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-datachanged",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 177,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "datachanged",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires whenever the records in the Store have changed in some way - this could include adding or removing\nrecords, or updating the data in existing records</p>\n"
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-expand",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "expand",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 143,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "expand",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-insert",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "insert",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 113,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "insert",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when a new child node is inserted.</p>\n"
      },
      {
        "shortDoc": "Fires whenever the store reads data from a remote data source. ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "[Ext.data.Model]",
            "optional": false,
            "doc": "<p>An array of records</p>\n",
            "name": "records"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the operation was successful.</p>\n",
            "name": "successful"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-load",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 195,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "load",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires whenever the store reads data from a remote data source.</p>\n"
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-move",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "move",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 107,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "move",
        "owner": "Ext.data.TreeStore",
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
        "href": "TreeStore.html#Ext-data-TreeStore-event-remove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "remove",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 101,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "remove",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when a child node is removed</p>\n"
      },
      {
        "shortDoc": "Fires whenever the root node is changed in the tree. ...",
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The new root</p>\n",
            "name": "root"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "TreeStore.html#Ext-data-TreeStore-event-rootchange",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": {
          "member": "rootchange",
          "tagname": "alias",
          "cls": "Ext.data.Tree",
          "doc": null
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 167,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "rootchange",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires whenever the root node is changed in the tree.</p>\n"
      },
      {
        "shortDoc": "Fires when this TreeStore is sorted. ...",
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node that is sorted.</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "TreeStore.html#Ext-data-TreeStore-event-sort",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "TreeStore.html",
        "linenr": 194,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "sort",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when this TreeStore is sorted.</p>\n"
      },
      {
        "shortDoc": "Fires when a Record has been updated ...",
        "params": [
          {
            "type": "Store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The Model instance that was updated</p>\n",
            "name": "record"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The update operation being performed. Value may be one of:</p>\n\n<pre><code>Ext.data.Model.EDIT\nExt.data.Model.REJECT\nExt.data.Model.COMMIT\n</code></pre>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-update",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractStore.html",
        "linenr": 164,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "update",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires when a Record has been updated</p>\n"
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
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "html_filename": "TreeStore.html",
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
  "author": null,
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.TreeStore",
  "doc": "<p>The TreeStore is a store implementation that is backed by by an <a href=\"#/api/Ext.data.Tree\" rel=\"Ext.data.Tree\" class=\"docClass\">Ext.data.Tree</a>.\nIt provides convenience methods for loading nodes, as well as the ability to use\nthe hierarchical tree structure combined with a store. This class is generally used\nin conjunction with <a href=\"#/api/Ext.tree.Panel\" rel=\"Ext.tree.Panel\" class=\"docClass\">Ext.tree.Panel</a>. This class also relays many events from\nthe Tree for convenience.</p>\n\n<h1>Using Models</h1>\n\n<p>If no Model is specified, an implicit model will be created that implements <a href=\"#/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">Ext.data.NodeInterface</a>.\nThe standard Tree fields will also be copied onto the Model for maintaining their state.</p>\n\n<h1>Reading Nested Data</h1>\n\n<p>For the tree to read nested data, the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> must be configured with a root property,\nso the reader can find nested data for each node. If a root is not specified, it will default to\n'children'.</p>\n",
  "extends": "Ext.data.AbstractStore",
  "docauthor": null
});