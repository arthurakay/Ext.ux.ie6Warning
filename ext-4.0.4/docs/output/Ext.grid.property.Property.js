Ext.data.JsonP.Ext_grid_property_Property({
  "href": "Property.html#Ext-grid-property-Property",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.data.Model"
  ],
  "members": {
    "method": [
      {
        "shortDoc": " ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A data object in the format:</p>\n\n<pre><code>{\n    name: [name],\n    value: [value]\n}</code></pre>\n\n\n<p>The specified value's type\nwill be read automatically by the grid to determine the type of editor to use when displaying it.</p>\n",
            "name": "config"
          }
        ],
        "href": "Property.html#Ext-grid-property-Property-method-constructor",
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
        "html_filename": "Property.html",
        "linenr": 1,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/property/Property.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.grid.property.Property",
        "doc": "\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.property.Property-method-fireEvent\" rel=\"Ext.grid.property.Property-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "shortDoc": "Begins an edit. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-beginEdit",
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
        "html_filename": "Model.html",
        "linenr": 734,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "beginEdit",
        "owner": "Ext.data.Model",
        "doc": "<p>Begins an edit. While in edit mode, no events (e.g.. the <code>update</code> event) are relayed to the containing store.\nWhen an edit has begun, it must be followed by either <a href=\"#/api/Ext.grid.property.Property-method-endEdit\" rel=\"Ext.grid.property.Property-method-endEdit\" class=\"docClass\">endEdit</a> or <a href=\"#/api/Ext.grid.property.Property-method-cancelEdit\" rel=\"Ext.grid.property.Property-method-cancelEdit\" class=\"docClass\">cancelEdit</a>.</p>\n"
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
        "shortDoc": "Cancels all changes made in the current edit operation. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-cancelEdit",
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
        "html_filename": "Model.html",
        "linenr": 748,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "cancelEdit",
        "owner": "Ext.data.Model",
        "doc": "<p>Cancels all changes made in the current edit operation.</p>\n"
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
        "shortDoc": "Usually called by the Ext.data.Store which owns the model instance. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to skip notification of the owning store of the change.\nDefaults to false.</p>\n",
            "name": "silent"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-commit",
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
        "html_filename": "Model.html",
        "linenr": 873,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "commit",
        "owner": "Ext.data.Model",
        "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> which owns the model instance. Commits all changes made to the\ninstance since either creation or the last commit operation.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event to have their code notified of commit\noperations.</p>\n"
      },
      {
        "shortDoc": "Creates a copy (clone) of this Model instance. ...",
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A new id, defaults to the id of the instance being copied.\nSee <code><a href=\"#/api/Ext.data.Model-method-id\" rel=\"Ext.data.Model-method-id\" class=\"docClass\">id</a></code>. To generate a phantom instance with a new id use:</p>\n\n<pre><code>var rec = record.copy(); // clone the record\nExt.data.Model.id(rec); // automatically generate a unique sequential id\n</code></pre>\n",
            "name": "id"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-copy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Record",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 896,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "copy",
        "owner": "Ext.data.Model",
        "doc": "<p>Creates a copy (clone) of this Model instance.</p>\n"
      },
      {
        "shortDoc": "Destroys the model using the configured proxy. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Options to pass to the proxy</p>\n",
            "name": "options"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-destroy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The Model instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 1026,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.data.Model",
        "doc": "<p>Destroys the model using the configured proxy.</p>\n"
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
        "shortDoc": "Ends an edit. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to not notify the store of the change</p>\n",
            "name": "silent"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-endEdit",
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
        "html_filename": "Model.html",
        "linenr": 765,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "endEdit",
        "owner": "Ext.data.Model",
        "doc": "<p>Ends an edit. If any data was modified, the containing store is notified (ie, the store's <code>update</code> event will\nfire).</p>\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.grid.property.Property-method-enableBubble\" rel=\"Ext.grid.property.Property-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n"
      },
      {
        "shortDoc": "Returns the value of the given field ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The field to fetch the value for</p>\n",
            "name": "fieldName"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-get",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>The value</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 634,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "get",
        "owner": "Ext.data.Model",
        "doc": "<p>Returns the value of the given field</p>\n"
      },
      {
        "shortDoc": "Gets all of the data from this Models loaded associations. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-getAssociatedData",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The nested data set for the Model's loaded associations</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 1137,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "getAssociatedData",
        "owner": "Ext.data.Model",
        "doc": "<p>Gets all of the data from this Models <em>loaded</em> associations. It does this recursively - for example if we have a\nUser which hasMany Orders, and each Order hasMany OrderItems, it will return an object like this:</p>\n\n<pre><code>{\n    orders: [\n        {\n            id: 123,\n            status: 'shipped',\n            orderItems: [\n                ...\n            ]\n        }\n    ]\n}\n</code></pre>\n"
      },
      {
        "shortDoc": "Gets a hash of only the fields that have been modified since this Model was created or commited. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-getChanges",
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
        "html_filename": "Model.html",
        "linenr": 783,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "getChanges",
        "owner": "Ext.data.Model",
        "doc": "<p>Gets a hash of only the fields that have been modified since this Model was created or commited.</p>\n"
      },
      {
        "shortDoc": "Returns the unique ID allocated to this model instance as defined by idProperty. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-getId",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The id</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 1059,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "getId",
        "owner": "Ext.data.Model",
        "doc": "<p>Returns the unique ID allocated to this model instance as defined by <a href=\"#/api/Ext.grid.property.Property-cfg-idProperty\" rel=\"Ext.grid.property.Property-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n"
      },
      {
        "shortDoc": "Returns the configured Proxy for this Model. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-getProxy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The proxy</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 936,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "getProxy",
        "owner": "Ext.data.Model",
        "doc": "<p>Returns the configured Proxy for this Model.</p>\n"
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
        "shortDoc": "Returns true if the passed field name has been modified since the load or last commit. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p><a href=\"#/api/Ext.data.Field-cfg-name\" rel=\"Ext.data.Field-cfg-name\" class=\"docClass\">Ext.data.Field.name</a></p>\n",
            "name": "fieldName"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-isModified",
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
        "html_filename": "Model.html",
        "linenr": 801,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "isModified",
        "owner": "Ext.data.Model",
        "doc": "<p>Returns true if the passed field name has been <code><a href=\"#/api/Ext.grid.property.Property-property-modified\" rel=\"Ext.grid.property.Property-property-modified\" class=\"docClass\">modified</a></code> since the load or last commit.</p>\n"
      },
      {
        "shortDoc": "Checks if the model is valid. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-isValid",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the model is valid.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 975,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "isValid",
        "owner": "Ext.data.Model",
        "doc": "<p>Checks if the model is valid. See <a href=\"#/api/Ext.grid.property.Property-method-validate\" rel=\"Ext.grid.property.Property-method-validate\" class=\"docClass\">validate</a>.</p>\n"
      },
      {
        "shortDoc": "Tells this model instance that it has been added to a store. ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The store to which this model has been added.</p>\n",
            "name": "store"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-join",
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
        "html_filename": "Model.html",
        "linenr": 1075,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "join",
        "owner": "Ext.data.Model",
        "doc": "<p>Tells this model instance that it has been added to a store.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-addManagedListener\" rel=\"Ext.grid.property.Property-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-removeManagedListener\" rel=\"Ext.grid.property.Property-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.property.Property-method-mon\" rel=\"Ext.grid.property.Property-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.property.Property-method-fireEvent\" rel=\"Ext.grid.property.Property-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n"
      },
      {
        "shortDoc": "Usually called by the Ext.data.Store to which this model instance has been joined. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to skip notification of the owning store of the change.\nDefaults to false.</p>\n",
            "name": "silent"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-reject",
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
        "html_filename": "Model.html",
        "linenr": 840,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "reject",
        "owner": "Ext.data.Model",
        "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to which this model instance has been <a href=\"#/api/Ext.grid.property.Property-method-join\" rel=\"Ext.grid.property.Property-method-join\" class=\"docClass\">joined</a>. Rejects\nall changes made to the model instance since either creation, or the last commit operation. Modified fields are\nreverted to their original values.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event to have their code notified of reject\noperations.</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.property.Property-method-mon\" rel=\"Ext.grid.property.Property-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.grid.property.Property-method-suspendEvents\" rel=\"Ext.grid.property.Property-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n"
      },
      {
        "shortDoc": "Saves the model instance using the configured proxy. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Options to pass to the proxy</p>\n",
            "name": "options"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-save",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The Model instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 983,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "save",
        "owner": "Ext.data.Model",
        "doc": "<p>Saves the model instance using the configured proxy.</p>\n"
      },
      {
        "shortDoc": "Sets the given field to the given value, marks the instance as dirty ...",
        "params": [
          {
            "type": "String|Object",
            "optional": false,
            "doc": "<p>The field to set, or an object containing key/value pairs</p>\n",
            "name": "fieldName"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to set</p>\n",
            "name": "value"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-set",
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
        "html_filename": "Model.html",
        "linenr": 643,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "set",
        "owner": "Ext.data.Model",
        "doc": "<p>Sets the given field to the given value, marks the instance as dirty</p>\n"
      },
      {
        "shortDoc": "Marks this Record as dirty. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-setDirty",
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
        "html_filename": "Model.html",
        "linenr": 810,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "setDirty",
        "owner": "Ext.data.Model",
        "doc": "<p>Marks this <strong>Record</strong> as <code><a href=\"#/api/Ext.grid.property.Property-property-dirty\" rel=\"Ext.grid.property.Property-property-dirty\" class=\"docClass\">dirty</a></code>. This method is used interally when adding <code><a href=\"#/api/Ext.grid.property.Property-property-phantom\" rel=\"Ext.grid.property.Property-property-phantom\" class=\"docClass\">phantom</a></code> records\nto a <a href=\"#/api/Ext.data.proxy.Server-cfg-writer\" rel=\"Ext.data.proxy.Server-cfg-writer\" class=\"docClass\">writer enabled store</a>.</p>\n\n<p>Marking a record <code><a href=\"#/api/Ext.grid.property.Property-property-dirty\" rel=\"Ext.grid.property.Property-property-dirty\" class=\"docClass\">dirty</a></code> causes the phantom to be returned by <a href=\"#/api/Ext.data.Store-method-getUpdatedRecords\" rel=\"Ext.data.Store-method-getUpdatedRecords\" class=\"docClass\">Ext.data.Store.getUpdatedRecords</a>\nwhere it will have a create action composed for it during <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">model save</a> operations.</p>\n"
      },
      {
        "shortDoc": "Sets the model instance's id field to the given id. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new id</p>\n",
            "name": "id"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-setId",
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
        "html_filename": "Model.html",
        "linenr": 1067,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "setId",
        "owner": "Ext.data.Model",
        "doc": "<p>Sets the model instance's id field to the given id.</p>\n"
      },
      {
        "shortDoc": "Sets the Proxy to use for this model. ...",
        "params": [
          {
            "type": "String/Object/Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "<p>The proxy</p>\n",
            "name": "proxy"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-setProxy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 913,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "setProxy",
        "owner": "Ext.data.Model",
        "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by\n<a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>.</p>\n"
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.grid.property.Property-method-resumeEvents\" rel=\"Ext.grid.property.Property-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.grid.property.Property-method-resumeEvents\" rel=\"Ext.grid.property.Property-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-removeListener\" rel=\"Ext.grid.property.Property-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n"
      },
      {
        "shortDoc": "Tells this model instance that it has been removed from the store. ...",
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The store from which this model has been removed.</p>\n",
            "name": "store"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-unjoin",
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
        "html_filename": "Model.html",
        "linenr": 1087,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "unjoin",
        "owner": "Ext.data.Model",
        "doc": "<p>Tells this model instance that it has been removed from the store.</p>\n"
      },
      {
        "shortDoc": "Validates the current data against all of its configured validations. ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-validate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Errors",
          "doc": "<p>The errors object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 944,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "validate",
        "owner": "Ext.data.Model",
        "doc": "<p>Validates the current data against all of its configured <a href=\"#/api/Ext.grid.property.Property-cfg-validations\" rel=\"Ext.grid.property.Property-cfg-validations\" class=\"docClass\">validations</a>.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "Ext.util.MixedCollection",
        "href": "Model.html#Ext-data-Model-property-associations",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 542,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "associations",
        "owner": "Ext.data.Model",
        "doc": "<p><a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">Associations</a> defined on this model.</p>\n"
      },
      {
        "shortDoc": "True if this Record has been modified. ...",
        "type": "Boolean",
        "href": "Model.html#Ext-data-Model-property-dirty",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 479,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "dirty",
        "owner": "Ext.data.Model",
        "doc": "<p>True if this Record has been modified. Read-only.</p>\n"
      },
      {
        "shortDoc": "Internal flag used to track whether or not the model instance is currently being edited. ...",
        "type": "Boolean",
        "href": "Model.html#Ext-data-Model-property-editing",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 473,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "editing",
        "owner": "Ext.data.Model",
        "doc": "<p>Internal flag used to track whether or not the model instance is currently being edited. Read-only.</p>\n"
      },
      {
        "type": "Ext.util.MixedCollection",
        "href": "Model.html#Ext-data-Model-property-fields",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 519,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "fields",
        "owner": "Ext.data.Model",
        "doc": "<p>The fields defined on this model.</p>\n"
      },
      {
        "type": "Object",
        "href": "Model.html#Ext-data-Model-property-modified",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 582,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "modified",
        "owner": "Ext.data.Model",
        "doc": "<p>Key: value pairs of all fields whose values have changed</p>\n"
      },
      {
        "shortDoc": "True when the record does not yet exist in a server-side database (see setDirty). ...",
        "type": "Boolean",
        "href": "Model.html#Ext-data-Model-property-phantom",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 495,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "phantom",
        "owner": "Ext.data.Model",
        "doc": "<p>True when the record does not yet exist in a server-side database (see <a href=\"#/api/Ext.grid.property.Property-method-setDirty\" rel=\"Ext.grid.property.Property-method-setDirty\" class=\"docClass\">setDirty</a>).\nAny record which has a real database pk set as its id property is NOT a phantom -- it's real.</p>\n"
      },
      {
        "type": "Object",
        "href": "Model.html#Ext-data-Model-property-raw",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 573,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "raw",
        "owner": "Ext.data.Model",
        "doc": "<p>The raw data used to create this model if created via a reader.</p>\n"
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
        "type": "Ext.data.Store",
        "href": "Model.html#Ext-data-Model-property-store",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 1080,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "store",
        "owner": "Ext.data.Model",
        "doc": "<p>The <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> to which this Record belongs.</p>\n"
      }
    ],
    "cfg": [
      {
        "type": "[Object]",
        "href": "Model.html#Ext-data-Model-cfg-associations",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 530,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "associations",
        "owner": "Ext.data.Model",
        "doc": "<p>An array of <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a> for this model.</p>\n"
      },
      {
        "type": "String/Object/Array",
        "href": "Model.html#Ext-data-Model-cfg-belongsTo",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 538,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "belongsTo",
        "owner": "Ext.data.Model",
        "doc": "<p>One or more <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">BelongsTo associations</a> for this model.</p>\n"
      },
      {
        "shortDoc": "The string type of the default Model Proxy. ...",
        "type": "String",
        "href": "Model.html#Ext-data-Model-cfg-defaultProxyType",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 508,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "defaultProxyType",
        "owner": "Ext.data.Model",
        "doc": "<p>The string type of the default Model Proxy. Defaults to 'ajax'.</p>\n"
      },
      {
        "type": "[Object/String]",
        "href": "Model.html#Ext-data-Model-cfg-fields",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 515,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "fields",
        "owner": "Ext.data.Model",
        "doc": "<p>The fields for this model.</p>\n"
      },
      {
        "type": "String/Object/Array",
        "href": "Model.html#Ext-data-Model-cfg-hasMany",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 534,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "hasMany",
        "owner": "Ext.data.Model",
        "doc": "<p>One or more <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">HasMany associations</a> for this model.</p>\n"
      },
      {
        "shortDoc": "The name of the field treated as this Model's unique id. ...",
        "type": "String",
        "href": "Model.html#Ext-data-Model-cfg-idProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 502,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "idProperty",
        "owner": "Ext.data.Model",
        "doc": "<p>The name of the field treated as this Model's unique id. Defaults to 'id'.</p>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "The property on this Persistable object that its data is saved to. ...",
        "type": "String",
        "href": "Model.html#Ext-data-Model-cfg-persistenceProperty",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 485,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "persistenceProperty",
        "owner": "Ext.data.Model",
        "doc": "<p>The property on this Persistable object that its data is saved to. Defaults to 'data'\n(e.g. all persistable data resides in this.data.)</p>\n"
      },
      {
        "type": "String/Object/Ext.data.proxy.Proxy",
        "href": "Model.html#Ext-data-Model-cfg-proxy",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 547,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "proxy",
        "owner": "Ext.data.Model",
        "doc": "<p>The <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to use for this model.</p>\n"
      },
      {
        "type": "[Object]",
        "href": "Model.html#Ext-data-Model-cfg-validations",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Model.html",
        "linenr": 524,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "validations",
        "owner": "Ext.data.Model",
        "doc": "<p>An array of <a href=\"#/api/Ext.data.validations\" rel=\"Ext.data.validations\" class=\"docClass\">validations</a> for this model.</p>\n"
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
    "Ext.util.Observable"
  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [
    "Ext.PropGridProperty"
  ],
  "html_filename": "Property.html",
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
        "shortDoc": "Returns the configured Proxy for this Model ...",
        "params": [

        ],
        "href": "Model.html#Ext-data-Model-method-getProxy",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The proxy</p>\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Model.html",
        "linenr": 380,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "getProxy",
        "owner": "Ext.data.Model",
        "doc": "<p>Returns the configured Proxy for this Model</p>\n"
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
        "shortDoc": "Asynchronously loads a model instance by id. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The id of the model to load</p>\n",
            "name": "id"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) config object containing success, failure and callback functions, plus\noptional scope</p>\n",
            "name": "config"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-load",
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
        "html_filename": "Model.html",
        "linenr": 390,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "load",
        "owner": "Ext.data.Model",
        "doc": "<p>Asynchronously loads a model instance by id. Sample usage:</p>\n\n<pre><code>MyApp.User = Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id', type: 'int'},\n        {name: 'name', type: 'string'}\n    ]\n});\n\nMyApp.User.load(10, {\n    scope: this,\n    failure: function(record, operation) {\n        //do something if the load failed\n    },\n    success: function(record, operation) {\n        //do something if the load succeeded\n    },\n    callback: function(record, operation) {\n        //do something whether the load succeeded or failed\n    }\n});\n</code></pre>\n"
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
      },
      {
        "shortDoc": "Sets the Proxy to use for this model. ...",
        "params": [
          {
            "type": "String/Object/Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "<p>The proxy</p>\n",
            "name": "proxy"
          }
        ],
        "href": "Model.html#Ext-data-Model-method-setProxy",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Model.html",
        "linenr": 356,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "name": "setProxy",
        "owner": "Ext.data.Model",
        "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by\n<a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>.</p>\n"
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/property/Property.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.grid.property.Property",
  "doc": "<p>A specific <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> type that represents a name/value pair and is made to work with the\n<a href=\"#/api/Ext.grid.property.Grid\" rel=\"Ext.grid.property.Grid\" class=\"docClass\">Ext.grid.property.Grid</a>.  Typically, Properties do not need to be created directly as they can be\ncreated implicitly by simply using the appropriate data configs either via the <a href=\"#/api/Ext.grid.property.Grid-cfg-source\" rel=\"Ext.grid.property.Grid-cfg-source\" class=\"docClass\">Ext.grid.property.Grid.source</a>\nconfig property or by calling <a href=\"#/api/Ext.grid.property.Grid-method-setSource\" rel=\"Ext.grid.property.Grid-method-setSource\" class=\"docClass\">Ext.grid.property.Grid.setSource</a>.  However, if the need arises, these records\ncan also be created explicitly as shown below.  Example usage:</p>\n\n<pre><code>var rec = new Ext.grid.property.Property({\n    name: 'birthday',\n    value: Ext.Date.parse('17/06/1962', 'd/m/Y')\n});\n// Add record to an already populated grid\ngrid.store.addSorted(rec);\n</code></pre>\n\n",
  "extends": "Ext.data.Model",
  "docauthor": null
});