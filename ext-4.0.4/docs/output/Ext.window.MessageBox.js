Ext.data.JsonP.Ext_window_MessageBox({
  "href": "MessageBox.html#Ext-window-MessageBox",
  "component": true,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.container.AbstractContainer",
    "Ext.container.Container",
    "Ext.panel.AbstractPanel",
    "Ext.panel.Panel",
    "Ext.window.Window"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Component. ...",
        "params": [
          {
            "type": "Ext.core.Element/String/Object",
            "optional": false,
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "name": "config"
          }
        ],
        "href": "Component2.html#Ext-Component-method-constructor",
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
        "html_filename": "Component2.html",
        "linenr": 1,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.Component",
        "doc": "<p>Creates new Component.</p>\n"
      },
      {
        "shortDoc": "Adds Component(s) to this Container. ...",
        "params": [
          {
            "type": "...Object/Array",
            "optional": false,
            "doc": "<p>Either one or more Components to add or an Array of Components to add.\nSee <code><a href=\"#/api/Ext.window.MessageBox-cfg-items\" rel=\"Ext.window.MessageBox-cfg-items\" class=\"docClass\">items</a></code> for additional information.</p>\n",
            "name": "Component"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-add",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component/Array",
          "doc": "<p>The Components that were added.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 446,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "add",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Adds <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>(s) to this Container.</p>\n\n<h2>Description:</h2>\n\n<ul>\n<li>Fires the <a href=\"#/api/Ext.window.MessageBox-event-beforeadd\" rel=\"Ext.window.MessageBox-event-beforeadd\" class=\"docClass\">beforeadd</a> event before adding.</li>\n<li>The Container's <a href=\"#/api/Ext.window.MessageBox-cfg-defaults\" rel=\"Ext.window.MessageBox-cfg-defaults\" class=\"docClass\">default config values</a> will be applied\naccordingly (see <code><a href=\"#/api/Ext.window.MessageBox-cfg-defaults\" rel=\"Ext.window.MessageBox-cfg-defaults\" class=\"docClass\">defaults</a></code> for details).</li>\n<li>Fires the <code><a href=\"#/api/Ext.window.MessageBox-event-add\" rel=\"Ext.window.MessageBox-event-add\" class=\"docClass\">add</a></code> event after the component has been added.</li>\n</ul>\n\n\n<h2>Notes:</h2>\n\n<p>If the Container is <strong>already rendered</strong> when <code>add</code>\nis called, it will render the newly added Component into its content area.</p>\n\n<p><strong><strong>If</strong></strong> the Container was configured with a size-managing <a href=\"#/api/Ext.window.MessageBox-cfg-layout\" rel=\"Ext.window.MessageBox-cfg-layout\" class=\"docClass\">layout</a> manager, the Container\nwill recalculate its internal layout at this time too.</p>\n\n<p>Note that the default layout manager simply renders child Components sequentially into the content area and thereafter performs no sizing.</p>\n\n<p>If adding multiple new child Components, pass them as an array to the <code>add</code> method, so that only one layout recalculation is performed.</p>\n\n<pre><code>tb = new <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a>({\n    renderTo: document.body\n});  // toolbar is rendered\ntb.add([{text:'Button 1'}, {text:'Button 2'}]); // add multiple items. (<a href=\"#/api/Ext.window.MessageBox-cfg-defaultType\" rel=\"Ext.window.MessageBox-cfg-defaultType\" class=\"docClass\">defaultType</a> for <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Toolbar</a> is 'button')\n</code></pre>\n\n<h2>Warning:##</h2>\n\n<p>Components directly managed by the BorderLayout layout manager\nmay not be removed or added.  See the Notes for <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">BorderLayout</a>\nfor more details.</p>\n"
      },
      {
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "deprecated": {
          "version": "4.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-addCls\" rel=\"Ext.picker.Color-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2412,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2390,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n",
            "name": "skip"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1547,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.window.MessageBox-method-addUIClsToElement\" rel=\"Ext.window.MessageBox-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n"
      },
      {
        "shortDoc": "Adds docked item(s) to the panel. ...",
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The Component or array of components to add. The components\nmust include a 'dock' parameter on each component to indicate where it should be docked ('top', 'right',\n'bottom', 'left').</p>\n",
            "name": "component"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index at which the Component will be added</p>\n",
            "name": "pos"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-addDocked",
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
        "html_filename": "AbstractPanel.html",
        "linenr": 263,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "addDocked",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Adds docked item(s) to the panel.</p>\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.window.MessageBox-method-fireEvent\" rel=\"Ext.window.MessageBox-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The event name or an array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
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
        "html_filename": "Stateful.html",
        "linenr": 159,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n"
      },
      {
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to remove from the element</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1618,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n"
      },
      {
        "shortDoc": " ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2781,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "\n"
      },
      {
        "shortDoc": "Displays a standard read-only message box with an OK button (comparable to the basic JavaScript alert prompt). ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The title bar text</p>\n",
            "name": "title"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The message box body text</p>\n",
            "name": "msg"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The callback function invoked after the message box is closed</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser wnidow.</p>\n",
            "name": "scope"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-alert",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 707,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "alert",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Displays a standard read-only message box with an OK button (comparable to the basic JavaScript alert prompt).\nIf a callback function is passed it will be called after the user clicks the button, and the\nid of the button that was clicked will be passed as the only parameter to the callback\n(could also be the top-right close button).</p>\n"
      },
      {
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must be a\nomponent instance. If a string id is passed, it will be used as an element id.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 177,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "alignTo",
        "owner": "Ext.util.Floating",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n"
      },
      {
        "shortDoc": "Perform custom animation on this object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "name": "config"
          }
        ],
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 207,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "animate",
        "owner": "Ext.util.Animate",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n"
      },
      {
        "shortDoc": "Applies the state to the object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state</p>\n",
            "name": "state"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
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
        "html_filename": "Stateful.html",
        "linenr": 225,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n"
      },
      {
        "shortDoc": "Occurs before componentLayout is run. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2792,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n"
      },
      {
        "shortDoc": "Occurs before componentLayout is run. ...",
        "params": [

        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-beforeLayout",
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
        "html_filename": "AbstractContainer2.html",
        "linenr": 883,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "beforeLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the containerLayout\nfrom being executed.</p>\n"
      },
      {
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
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
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
            "name": "args"
          }
        ],
        "href": "Component2.html#Ext-Component-method-bubble",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 1011,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "bubble",
        "owner": "Ext.Component",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n"
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
        "shortDoc": "Cascades down the component/container heirarchy from this component (passed in the first call), calling the specified...",
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
            "doc": "<p>(optional) The scope of the function (defaults to current component)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with. The current component always passed as the last argument.</p>\n",
            "name": "args"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-cascade",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 742,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "cascade",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Cascades down the component/container heirarchy from this component (passed in the first call), calling the specified function with\neach component. The scope (<code>this</code> reference) of the\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n"
      },
      {
        "shortDoc": "Center this Component in its container. ...",
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-center",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 264,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "center",
        "owner": "Ext.util.Floating",
        "doc": "<p>Center this Component in its container.</p>\n"
      },
      {
        "shortDoc": "Retrieves the first direct child of this container which matches the passed selector. ...",
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) An Ext.ComponentQuery selector. If no selector is\nspecified, the first child will be returned.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-child",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.Component</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 809,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "child",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Retrieves the first direct child of this container which matches the passed selector.\nThe passed in selector must comply with an <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector.</p>\n"
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
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 951,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n"
      },
      {
        "shortDoc": "Closes the Panel. ...",
        "params": [

        ],
        "href": "Panel2.html#Ext-panel-Panel-method-close",
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
        "html_filename": "Panel2.html",
        "linenr": 779,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "close",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Closes the Panel. By default, this method, removes it from the DOM, <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">destroy</a>s\nthe Panel object and all its descendant Components. The <a href=\"#/api/Ext.window.MessageBox-event-beforeclose\" rel=\"Ext.window.MessageBox-event-beforeclose\" class=\"docClass\">beforeclose</a>\nevent is fired before the close happens and will cancel the close action if it returns false.<p>\n<p><b>Note:</b> This method is not affected by the <a href=\"#/api/Ext.window.MessageBox-cfg-closeAction\" rel=\"Ext.window.MessageBox-cfg-closeAction\" class=\"docClass\">closeAction</a> setting which\nonly affects the action triggered when clicking the <a href=\"#/api/Ext.window.MessageBox-cfg-closable\" rel=\"Ext.window.MessageBox-cfg-closable\" class=\"docClass\">'close' tool in the header</a>.\nTo hide the Panel without destroying it, call <a href=\"#/api/Ext.window.MessageBox-event-hide\" rel=\"Ext.window.MessageBox-event-hide\" class=\"docClass\">hide</a>.</p>\n\n"
      },
      {
        "shortDoc": "Collapses the panel body so that the body becomes hidden. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>. The direction to collapse towards. Must be one of<ul>\n<li>Ext.Component.DIRECTION_TOP</li>\n<li>Ext.Component.DIRECTION_RIGHT</li>\n<li>Ext.Component.DIRECTION_BOTTOM</li>\n<li>Ext.Component.DIRECTION_LEFT</li></ul></p>\n",
            "name": "direction"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to animate the transition, else false (defaults to the value of the\n<a href=\"#/api/Ext.window.MessageBox-cfg-animCollapse\" rel=\"Ext.window.MessageBox-cfg-animCollapse\" class=\"docClass\">animCollapse</a> panel config)</p>\n",
            "name": "animate"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-collapse",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.panel.Panel",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 922,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Collapses the panel body so that the body becomes hidden. Docked Components parallel to the\nborder towards which the collapse takes place will remain visible.  Fires the <a href=\"#/api/Ext.window.MessageBox-event-beforecollapse\" rel=\"Ext.window.MessageBox-event-beforecollapse\" class=\"docClass\">beforecollapse</a> event which will\ncancel the collapse action if it returns false.</p>\n"
      },
      {
        "shortDoc": "Displays a confirmation message box with Yes and No buttons (comparable to JavaScript's confirm). ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The title bar text</p>\n",
            "name": "title"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The message box body text</p>\n",
            "name": "msg"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The callback function invoked after the message box is closed</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser wnidow.</p>\n",
            "name": "scope"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-confirm",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 627,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "confirm",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Displays a confirmation message box with Yes and No buttons (comparable to JavaScript's confirm).\nIf a callback function is passed it will be called after the user clicks either button,\nand the id of the button that was clicked will be passed as the only parameter to the callback\n(could also be the top-right close button).</p>\n"
      },
      {
        "shortDoc": "Destroys the Component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2974,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Destroys the Component.</p>\n"
      },
      {
        "shortDoc": "Disable the component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2329,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Disable the component.</p>\n"
      },
      {
        "shortDoc": "Handles autoRender. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 987,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n"
      },
      {
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "width"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "height"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "isSetSize"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2714,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n"
      },
      {
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is\nto be constrained. Defaults to the element into which this floating Component was rendered.</p>\n",
            "name": "constrainTo"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
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
        "html_filename": "Floating.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element it was\nrendered to.</p>\n\n<p>An alternative constraint may be passed.</p>\n"
      },
      {
        "shortDoc": "Manually force this container's layout to be recalculated. ...",
        "params": [

        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-doLayout",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 343,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "doLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Manually force this container's layout to be recalculated.  The framwork uses this internally to refresh layouts\nform most cases.</p>\n"
      },
      {
        "shortDoc": "Retrieves the first descendant of this container which matches the passed selector. ...",
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) An Ext.ComponentQuery selector. If no selector is\nspecified, the first child will be returned.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-down",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.Component</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 821,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "down",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Retrieves the first descendant of this container which matches the passed selector.\nThe passed in selector must comply with an <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector.</p>\n"
      },
      {
        "shortDoc": "Enable the component ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2306,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable the component</p>\n"
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
        "shortDoc": "Expands the panel body so that it becomes visible. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to animate the transition, else false (defaults to the value of the\n<a href=\"#/api/Ext.window.MessageBox-cfg-animCollapse\" rel=\"Ext.window.MessageBox-cfg-animCollapse\" class=\"docClass\">animCollapse</a> panel config)</p>\n",
            "name": "animate"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-expand",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.panel.Panel",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 1223,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "expand",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Expands the panel body so that it becomes visible.  Fires the <a href=\"#/api/Ext.window.MessageBox-event-beforeexpand\" rel=\"Ext.window.MessageBox-event-beforeexpand\" class=\"docClass\">beforeexpand</a> event which will\ncancel the expand action if it returns false.</p>\n"
      },
      {
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 943,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n"
      },
      {
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "name": "fn"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 982,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "findParentBy",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n"
      },
      {
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "params": [
          {
            "type": "String/Class",
            "optional": false,
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "name": "xtype"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 996,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "findParentByType",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n"
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.window.MessageBox-method-addListener\" rel=\"Ext.window.MessageBox-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.window.MessageBox-method-enableBubble\" rel=\"Ext.window.MessageBox-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n"
      },
      {
        "shortDoc": "Try to focus this component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
            "name": "selectText"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
            "name": "delay"
          }
        ],
        "href": "Component2.html#Ext-Component-method-focus",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 860,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "focus",
        "owner": "Ext.Component",
        "doc": "<p>Try to focus this component.</p>\n"
      },
      {
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2755,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n"
      },
      {
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 377,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n"
      },
      {
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getBox",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 542,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "getBox",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>the Container which owns this Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2527,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n"
      },
      {
        "shortDoc": "Return the immediate child Component in which the passed element is located. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The element to test.</p>\n",
            "name": "el"
          }
        ],
        "href": "Container2.html#Ext-container-Container-method-getChildByElement",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>The child item which contains the passed element.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Container2.html",
        "linenr": 160,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/container/Container.js",
        "private": false,
        "name": "getChildByElement",
        "owner": "Ext.container.Container",
        "doc": "<p>Return the immediate child Component in which the passed element is located.</p>\n"
      },
      {
        "shortDoc": "Attempts a default component lookup (see Ext.container.Container.getComponent). ...",
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The component id, itemId or position to find</p>\n",
            "name": "comp"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-getComponent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The component (if found)</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 176,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "getComponent",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Attempts a default component lookup (see <a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">Ext.container.Container.getComponent</a>). If the component is not found in the normal\nitems, the dockedItems are searched and the matched component (if any) returned (see {@loink #getDockedComponent}). Note that docked\nitems will only be matched by component id or itemId -- if you pass a numeric index only non-docked child components will be searched.</p>\n"
      },
      {
        "shortDoc": "Finds a docked component by id, itemId or position. ...",
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The id, itemId or position of the docked component (see <a href=\"#/api/Ext.window.MessageBox-method-getComponent\" rel=\"Ext.window.MessageBox-method-getComponent\" class=\"docClass\">getComponent</a> for details)</p>\n",
            "name": "comp"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-getDockedComponent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The docked component (if found)</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 164,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "getDockedComponent",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Finds a docked component by id, itemId or position. Also see <a href=\"#/api/Ext.window.MessageBox-method-getDockedItems\" rel=\"Ext.window.MessageBox-method-getDockedItems\" class=\"docClass\">getDockedItems</a></p>\n"
      },
      {
        "shortDoc": "Retrieve an array of all currently docked Components. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector string to filter the returned items.</p>\n",
            "name": "cqSelector"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-getDockedItems",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of components.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 363,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "getDockedItems",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Retrieve an array of all currently docked Components.</p>\n"
      },
      {
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2143,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Gets the configured default focus item. ...",
        "params": [

        ],
        "href": "Window.html#Ext-window-Window-method-getFocusEl",
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
        "html_filename": "Window.html",
        "linenr": 464,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "getFocusEl",
        "owner": "Ext.window.Window",
        "doc": "<p>Gets the configured default focus item.  If a <a href=\"#/api/Ext.window.MessageBox-cfg-defaultFocus\" rel=\"Ext.window.MessageBox-cfg-defaultFocus\" class=\"docClass\">defaultFocus</a> is set, it will receive focus, otherwise the\nContainer itself will receive focus.</p>\n"
      },
      {
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2881,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Retrieves the id of this component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2131,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n"
      },
      {
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "params": [
          {
            "type": "String/Number/Element/HTMLElement",
            "optional": false,
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "name": "position"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 1758,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n"
      },
      {
        "shortDoc": "Returns the layout instance currently associated with this Container. ...",
        "params": [

        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-getLayout",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.layout.container.AbstractContainer",
          "doc": "<p>The layout</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 329,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "getLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Returns the <a href=\"#/api/Ext.layout.container.AbstractContainer\" rel=\"Ext.layout.container.AbstractContainer\" class=\"docClass\">layout</a> instance currently associated with this Container.\nIf a layout has not been instantiated yet, that is done first</p>\n"
      },
      {
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.ComponentLoader",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2889,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n"
      },
      {
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "pluginId"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.AbstractPlugin",
          "doc": "<p>pluginInstance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 3017,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n"
      },
      {
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 607,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "getPosition",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2865,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 809,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.window.MessageBox-cfg-stateId\" rel=\"Ext.window.MessageBox-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n"
      },
      {
        "shortDoc": "Gets the state id for this object. ...",
        "params": [

        ],
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The state id, null if not found.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 237,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Gets the state id for this object.</p>\n"
      },
      {
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2873,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "params": [

        ],
        "href": "Component2.html#Ext-Component-method-getXType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The xtype</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 969,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "getXType",
        "owner": "Ext.Component",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The xtype hierarchy string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2189,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "deprecated": {
          "version": "4.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-getActiveAnimation\" rel=\"Ext.picker.Color-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "doc": "Returns thq current animation if this object has any effects actively running or queued, else returns false."
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 369,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n"
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
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The cls to check</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1607,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n"
      },
      {
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "params": [
          {
            "type": "String/Element/Component",
            "optional": true,
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Component2.html#Ext-Component-method-hide",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 755,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "hide",
        "owner": "Ext.Component",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.window.MessageBox-cfg-hideMode\" rel=\"Ext.window.MessageBox-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n"
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
        "shortDoc": "Inserts a Component into this Container at a specified index. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the Component will be inserted\ninto the Container's items collection</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The child Component to insert.<br><br>\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> uses lazy rendering, and will only render the inserted Component should\nit become necessary.<br><br>\nA Component config object may be passed in order to avoid the overhead of\nconstructing a real Component object if lazy rendering might mean that the\ninserted Component will not be rendered immediately. To take advantage of\nthis 'lazy instantiation', set the <a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">Ext.Component.xtype</a> config\nproperty to the registered type of the Component wanted.<br><br>\nFor a list of all available xtypes, see <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n",
            "name": "component"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-insert",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>component The Component (or config object) that was\ninserted with the Container's default config values applied.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 570,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "insert",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Inserts a Component into this Container at a specified index. Fires the\n<a href=\"#/api/Ext.window.MessageBox-event-beforeadd\" rel=\"Ext.window.MessageBox-event-beforeadd\" class=\"docClass\">beforeadd</a> event before inserting, then fires the <a href=\"#/api/Ext.window.MessageBox-event-add\" rel=\"Ext.window.MessageBox-event-add\" class=\"docClass\">add</a> event after the\nComponent has been inserted.</p>\n"
      },
      {
        "shortDoc": "Inserts docked item(s) to the panel at the indicated position. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the Component will be inserted</p>\n",
            "name": "pos"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>. The Component or array of components to add. The components\nmust include a 'dock' paramater on each component to indicate where it should be docked ('top', 'right',\n'bottom', 'left').</p>\n",
            "name": "component"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-insertDocked",
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
        "html_filename": "AbstractPanel.html",
        "linenr": 309,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "insertDocked",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Inserts docked item(s) to the panel at the indicated position.</p>\n"
      },
      {
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 1970,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n"
      },
      {
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "params": [
          {
            "type": "Ext.Container",
            "optional": false,
            "doc": "\n",
            "name": "container"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>isDescendant</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 3033,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the disabled state of this Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2366,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the draggable state of this component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2543,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the droppable state of this component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2551,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the floating state of this component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2535,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the hidden state of this Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2382,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n"
      },
      {
        "shortDoc": "Returns true if this component is visible. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "name": "deep"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2266,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns true if this component is visible.</p>\n"
      },
      {
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The xtype to check for this Component</p>\n",
            "name": "xtype"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
            "name": "shallow"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2158,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Fits the window within its current container and automatically replaces\nthe 'maximize' tool button with the 'restore'...",
        "params": [

        ],
        "href": "Window.html#Ext-window-Window-method-maximize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.Window",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 600,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "maximize",
        "owner": "Ext.window.Window",
        "doc": "<p>Fits the window within its current container and automatically replaces\nthe <a href=\"#/api/Ext.window.MessageBox-cfg-maximizable\" rel=\"Ext.window.MessageBox-cfg-maximizable\" class=\"docClass\">'maximize' tool button</a> with the 'restore' tool button.\nAlso see <a href=\"#/api/Ext.window.MessageBox-method-toggleMaximize\" rel=\"Ext.window.MessageBox-method-toggleMaximize\" class=\"docClass\">toggleMaximize</a>.</p>\n"
      },
      {
        "shortDoc": "Placeholder method for minimizing the window. ...",
        "params": [

        ],
        "href": "Window.html#Ext-window-Window-method-minimize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.Window",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 562,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "minimize",
        "owner": "Ext.window.Window",
        "doc": "<p>Placeholder method for minimizing the window.  By default, this method simply fires the <a href=\"#/api/Ext.window.MessageBox-event-minimize\" rel=\"Ext.window.MessageBox-event-minimize\" class=\"docClass\">minimize</a> event\nsince the behavior of minimizing a window is application-specific.  To implement custom minimize behavior,\neither the minimize event can be handled or this method can be overridden.</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.window.MessageBox-method-addManagedListener\" rel=\"Ext.window.MessageBox-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
      },
      {
        "shortDoc": "Moves a Component within the Container ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index the Component you wish to move is currently at.</p>\n",
            "name": "fromIdx"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new index for the Component.</p>\n",
            "name": "toIdx"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-move",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>component The Component (or config object) that was moved.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 592,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "move",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Moves a Component within the Container</p>\n"
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.window.MessageBox-method-removeManagedListener\" rel=\"Ext.window.MessageBox-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.window.MessageBox-method-mon\" rel=\"Ext.window.MessageBox-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
      },
      {
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2096,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.window.MessageBox-method-nextSibling\" rel=\"Ext.window.MessageBox-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n"
      },
      {
        "shortDoc": "Returns the next sibling of this Component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2000,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.window.MessageBox-method-nextNode\" rel=\"Ext.window.MessageBox-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n"
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.window.MessageBox-method-fireEvent\" rel=\"Ext.window.MessageBox-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.window.MessageBox-method-addListener\" rel=\"Ext.window.MessageBox-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n"
      },
      {
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2060,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.window.MessageBox-method-previousSibling\" rel=\"Ext.window.MessageBox-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n"
      },
      {
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2030,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.window.MessageBox-method-previousNode\" rel=\"Ext.window.MessageBox-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n"
      },
      {
        "shortDoc": "Displays a message box with a progress bar. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The title bar text</p>\n",
            "name": "title"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The message box body text</p>\n",
            "name": "msg"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The text to display inside the progress bar (defaults to '')</p>\n",
            "name": "progressText"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-progress",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 732,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "progress",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Displays a message box with a progress bar.  This message box has no buttons and is not closeable by\nthe user.  You are responsible for updating the progress bar as needed via <a href=\"#/api/Ext.window.MessageBox-method-updateProgress\" rel=\"Ext.window.MessageBox-method-updateProgress\" class=\"docClass\">updateProgress</a>\nand closing the message box when the process is complete.</p>\n"
      },
      {
        "shortDoc": "Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to JavaScript's p...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The title bar text</p>\n",
            "name": "title"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The message box body text</p>\n",
            "name": "msg"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The callback function invoked after the message box is closed</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser wnidow.</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) True to create a multiline textbox using the defaultTextHeight\nproperty, or the height in pixels to create the textbox (defaults to false / single-line)</p>\n",
            "name": "multiline"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Default value of the text input element (defaults to '')</p>\n",
            "name": "value"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-prompt",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 652,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "prompt",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to JavaScript's prompt).\nThe prompt can be a single-line or multi-line textbox.  If a callback function is passed it will be called after the user\nclicks either button, and the id of the button that was clicked (could also be the top-right\nclose button) and the text that was entered will be passed as the two parameters to the callback.</p>\n"
      },
      {
        "shortDoc": "Retrieves all descendant components which match the passed selector. ...",
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Selector complying to an <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector.\nIf no selector is specified all items will be returned.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-query",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>Ext.Component's which matched the selector</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 797,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "query",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Retrieves all descendant components which match the passed selector.\nExecutes an Ext.ComponentQuery.query using this container as its root.</p>\n"
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
        "shortDoc": "Removes a component from this container. ...",
        "params": [
          {
            "type": "Component/String",
            "optional": false,
            "doc": "<p>The component reference or id to remove.</p>\n",
            "name": "component"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to automatically invoke the removed Component's <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">Ext.Component.destroy</a> function.\nDefaults to the value of this Container's <a href=\"#/api/Ext.window.MessageBox-cfg-autoDestroy\" rel=\"Ext.window.MessageBox-cfg-autoDestroy\" class=\"docClass\">autoDestroy</a> config.</p>\n",
            "name": "autoDestroy"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-remove",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>component The Component that was removed.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 623,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "remove",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Removes a component from this container.  Fires the <a href=\"#/api/Ext.window.MessageBox-event-beforeremove\" rel=\"Ext.window.MessageBox-event-beforeremove\" class=\"docClass\">beforeremove</a> event before removing, then fires\nthe <a href=\"#/api/Ext.window.MessageBox-event-remove\" rel=\"Ext.window.MessageBox-event-remove\" class=\"docClass\">remove</a> event after the component has been removed.</p>\n"
      },
      {
        "shortDoc": "Removes all components from this container. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to automatically invoke the removed Component's <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">Ext.Component.destroy</a> function.\nDefaults to the value of this Container's <a href=\"#/api/Ext.window.MessageBox-cfg-autoDestroy\" rel=\"Ext.window.MessageBox-cfg-autoDestroy\" class=\"docClass\">autoDestroy</a> config.</p>\n",
            "name": "autoDestroy"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-removeAll",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>Array of the destroyed components</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 676,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "removeAll",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Removes all components from this container.</p>\n"
      },
      {
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2422,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1578,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.window.MessageBox-method-removeUIClsFromElement\" rel=\"Ext.window.MessageBox-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n"
      },
      {
        "shortDoc": "Removes the docked item from the panel. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>. The Component to remove.</p>\n",
            "name": "item"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Destroy the component after removal.</p>\n",
            "name": "autoDestroy"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-removeDocked",
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
        "html_filename": "AbstractPanel.html",
        "linenr": 320,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "removeDocked",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Removes the docked item from the panel.</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.window.MessageBox-method-addListener\" rel=\"Ext.window.MessageBox-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.window.MessageBox-method-mon\" rel=\"Ext.window.MessageBox-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
      },
      {
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to add to the element</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n"
      },
      {
        "shortDoc": "Restores a maximized  window back to its original\nsize and position prior to being maximized and also replaces\nthe 'r...",
        "params": [

        ],
        "href": "Window.html#Ext-window-Window-method-restore",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.Window",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 639,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "restore",
        "owner": "Ext.window.Window",
        "doc": "<p>Restores a <a href=\"#/api/Ext.window.MessageBox-cfg-maximizable\" rel=\"Ext.window.MessageBox-cfg-maximizable\" class=\"docClass\">maximized</a>  window back to its original\nsize and position prior to being maximized and also replaces\nthe 'restore' tool button with the 'maximize' tool button.\nAlso see <a href=\"#/api/Ext.window.MessageBox-method-toggleMaximize\" rel=\"Ext.window.MessageBox-method-toggleMaximize\" class=\"docClass\">toggleMaximize</a>.</p>\n"
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.window.MessageBox-method-suspendEvents\" rel=\"Ext.window.MessageBox-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n"
      },
      {
        "shortDoc": "Conditionally saves a single property from this object to the given state object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the property to save.</p>\n",
            "name": "propName"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state object in to which to save the property.</p>\n",
            "name": "state"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The optional name to use for the property in state.</p>\n",
            "name": "stateName"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-savePropToState",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the property was saved, false if not.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 274,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "savePropToState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Conditionally saves a single property from this object to the given state object.\nThe idea is to only save state which has changed from the initial state so that\ncurrent software settings do not override future software settings. Only those\nvalues that are user-changed state should be saved.</p>\n"
      },
      {
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 357,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.window.MessageBox-method-syncFx\" rel=\"Ext.window.MessageBox-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n"
      },
      {
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating Component has either been\nmoved to th...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
            "name": "active"
          },
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
            "name": "newActive"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-setActive",
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
        "html_filename": "Floating.html",
        "linenr": 227,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating Component has either been\nmoved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n<p>If a <em>Window</em> is superceded by another Window, deactivating it hides its shadow.</p>\n\n<p>This method also fires the <a href=\"#/api/Ext.Component-event-activate\" rel=\"Ext.Component-event-activate\" class=\"docClass\">activate</a> or\n<a href=\"#/api/Ext.Component-event-deactivate\" rel=\"Ext.Component-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n"
      },
      {
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "name": "scroll"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 362,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n"
      },
      {
        "shortDoc": "Enable or disable the component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2374,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable or disable the component.</p>\n"
      },
      {
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "dock"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "layoutParent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2948,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n"
      },
      {
        "shortDoc": "Sets the height of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2852,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.window.MessageBox-event-resize\" rel=\"Ext.window.MessageBox-event-resize\" class=\"docClass\">resize</a> event.</p>\n"
      },
      {
        "shortDoc": "Adds the specified icon to the dialog. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A CSS classname specifying the icon's background image url, or empty string to clear the icon</p>\n",
            "name": "icon"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-setIcon",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 575,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "setIcon",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Adds the specified icon to the dialog.  By default, the class 'ext-mb-icon' is applied for default\nstyling, and the class passed in is expected to supply the background image url. Pass in empty string ('')\nto clear any existing icon. This method must be called before the MessageBox is shown.\nThe following built-in icon classes are supported, but you can also pass in a custom class name:</p>\n\n<pre>Ext.window.MessageBox.INFO\nExt.window.MessageBox.WARNING\nExt.window.MessageBox.QUESTION\nExt.window.MessageBox.ERROR\n</pre>\n\n"
      },
      {
        "shortDoc": "Set the iconCls for the panel&#39;s header. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new CSS class name</p>\n",
            "name": "newIconCls"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-setIconCls",
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
        "html_filename": "Panel2.html",
        "linenr": 472,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "setIconCls",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Set the iconCls for the panel&#39;s header. See <a href=\"#/api/Ext.panel.Header-cfg-iconCls\" rel=\"Ext.panel.Header-cfg-iconCls\" class=\"docClass\">Ext.panel.Header.iconCls</a>.\nIt will fire the <a href=\"#/api/Ext.window.MessageBox-event-iconchange\" rel=\"Ext.window.MessageBox-event-iconchange\" class=\"docClass\">iconchange</a> event after completion.</p>\n"
      },
      {
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "params": [
          {
            "type": "Boolean/Object/String",
            "optional": false,
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
            "name": "load"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
            "name": "targetEl"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.LoadMask",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2913,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n"
      },
      {
        "shortDoc": "Sets the page XY position of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If passed, the Component is <i>animated</i> into its new position. If this parameter\nis a number, it is used as the animation duration in milliseconds.</p>\n",
            "name": "animate"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 505,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.window.MessageBox-method-setPosition\" rel=\"Ext.window.MessageBox-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.window.MessageBox-event-move\" rel=\"Ext.window.MessageBox-event-move\" class=\"docClass\">move</a> event.</p>\n"
      },
      {
        "shortDoc": "Sets the left and top of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new left</p>\n",
            "name": "left"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new top</p>\n",
            "name": "top"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
            "name": "animate"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 421,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "setPosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.window.MessageBox-method-setPagePosition\" rel=\"Ext.window.MessageBox-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.window.MessageBox-event-move\" rel=\"Ext.window.MessageBox-event-move\" class=\"docClass\">move</a> event.</p>\n"
      },
      {
        "shortDoc": "Sets the width and height of this Component. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2591,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.window.MessageBox-event-resize\" rel=\"Ext.window.MessageBox-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n"
      },
      {
        "shortDoc": "Set a title for the panel&#39;s header. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "newTitle"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-setTitle",
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
        "html_filename": "Panel2.html",
        "linenr": 451,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "setTitle",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Set a title for the panel&#39;s header. See <a href=\"#/api/Ext.panel.Header-cfg-title\" rel=\"Ext.panel.Header-cfg-title\" class=\"docClass\">Ext.panel.Header.title</a>.</p>\n"
      },
      {
        "shortDoc": "Sets the UI for the component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new UI for the component</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1501,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n"
      },
      {
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to show, false to hide</p>\n",
            "name": "visible"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2257,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n"
      },
      {
        "shortDoc": "Sets the width of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "name": "width"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2840,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.window.MessageBox-event-resize\" rel=\"Ext.window.MessageBox-event-resize\" class=\"docClass\">resize</a> event.</p>\n"
      },
      {
        "shortDoc": "Displays a new message box, or reinitializes an existing message box, based on the config options\npassed in. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The following config options are supported: <ul>\n<li><b>animateTarget</b> : String/Element<div class=\"sub-desc\">An id or Element from which the message box should animate as it\nopens and closes (defaults to undefined)</div></li>\n<li><b>buttons</b> : Number<div class=\"sub-desc\">A bitwise button specifier consisting of the sum of any of the following constants:<ul>\n<li>Ext.window.MessageBox.OK</li>\n<li>Ext.window.MessageBox.YES</li>\n<li>Ext.window.MessageBox.NO</li>\n<li>Ext.window.MessageBox.CANCEL</li>\n</ul>Or false to not show any buttons (defaults to false)</div></li>\n<li><b>closable</b> : Boolean<div class=\"sub-desc\">False to hide the top-right close button (defaults to true). Note that\nprogress and wait dialogs will ignore this property and always hide the close button as they can only\nbe closed programmatically.</div></li>\n<li><b>cls</b> : String<div class=\"sub-desc\">A custom CSS class to apply to the message box's container element</div></li>\n<li><b>defaultTextHeight</b> : Number<div class=\"sub-desc\">The default height in pixels of the message box's multiline textarea\nif displayed (defaults to 75)</div></li>\n<li><b>fn</b> : Function<div class=\"sub-desc\">A callback function which is called when the dialog is dismissed either\nby clicking on the configured buttons, or on the dialog close button, or by pressing\nthe return button to enter input.</p>\n\n<p>Progress and wait dialogs will ignore this option since they do not respond to user\nactions and can only be closed programmatically, so any required function should be called\nby the same code after it closes the dialog. Parameters passed:<ul>\n<li><b>buttonId</b> : String<div class=\"sub-desc\">The ID of the button pressed, one of:<div class=\"sub-desc\"><ul>\n<li><tt>ok</tt></li>\n<li><tt>yes</tt></li>\n<li><tt>no</tt></li>\n<li><tt>cancel</tt></li>\n</ul></div></div></li>\n<li><b>text</b> : String<div class=\"sub-desc\">Value of the input field if either <tt><a href=\"#show-option-prompt\" ext:member=\"show-option-prompt\" ext:cls=\"Ext.window.MessageBox\">prompt</a></tt>\nor <tt><a href=\"#show-option-multiline\" ext:member=\"show-option-multiline\" ext:cls=\"Ext.window.MessageBox\">multiline</a></tt> is true</div></li>\n<li><b>opt</b> : Object<div class=\"sub-desc\">The config object passed to show.</div></li>\n</ul></p>\n\n\n<p></div></li>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code>this</code> reference) in which the function will be executed.</div></li>\n<li><b>icon</b> : String<div class=\"sub-desc\">A CSS class that provides a background image to be used as the body icon for the\ndialog (e.g. Ext.window.MessageBox.WARNING or 'custom-class') (defaults to '')</div></li>\n<li><b>iconCls</b> : String<div class=\"sub-desc\">The standard <a href=\"#/api/Ext.window.Window-cfg-iconCls\" rel=\"Ext.window.Window-cfg-iconCls\" class=\"docClass\">Ext.window.Window.iconCls</a> to\nadd an optional header icon (defaults to '')</div></li>\n<li><b>maxWidth</b> : Number<div class=\"sub-desc\">The maximum width in pixels of the message box (defaults to 600)</div></li>\n<li><b>minWidth</b> : Number<div class=\"sub-desc\">The minimum width in pixels of the message box (defaults to 100)</div></li>\n<li><b>modal</b> : Boolean<div class=\"sub-desc\">False to allow user interaction with the page while the message box is\ndisplayed (defaults to true)</div></li>\n<li><b>msg</b> : String<div class=\"sub-desc\">A string that will replace the existing message box body text (defaults to the\nXHTML-compliant non-breaking space character '&amp;#160;')</div></li>\n<li><a id=\"show-option-multiline\"></a><b>multiline</b> : Boolean<div class=\"sub-desc\">\nTrue to prompt the user to enter multi-line text (defaults to false)</div></li>\n<li><b>progress</b> : Boolean<div class=\"sub-desc\">True to display a progress bar (defaults to false)</div></li>\n<li><b>progressText</b> : String<div class=\"sub-desc\">The text to display inside the progress bar if progress = true (defaults to '')</div></li>\n<li><a id=\"show-option-prompt\"></a><b>prompt</b> : Boolean<div class=\"sub-desc\">True to prompt the user to enter single-line text (defaults to false)</div></li>\n<li><b>proxyDrag</b> : Boolean<div class=\"sub-desc\">True to display a lightweight proxy while dragging (defaults to false)</div></li>\n<li><b>title</b> : String<div class=\"sub-desc\">The title text</div></li>\n<li><b>value</b> : String<div class=\"sub-desc\">The string value to set into the active textbox element if displayed</div></li>\n<li><b>wait</b> : Boolean<div class=\"sub-desc\">True to display a progress bar (defaults to false)</div></li>\n<li><b>waitConfig</b> : Object<div class=\"sub-desc\">A <a href=\"#/api/Ext.ProgressBar-method-wait\" rel=\"Ext.ProgressBar-method-wait\" class=\"docClass\">Ext.ProgressBar.wait</a> config object (applies only if wait = true)</div></li>\n<li><b>width</b> : Number<div class=\"sub-desc\">The width of the dialog in pixels</div></li>\n</ul>\nExample usage:</p>\n\n<pre><code>Ext.Msg.show({\ntitle: 'Address',\nmsg: 'Please enter your address:',\nwidth: 300,\nbuttons: Ext.window.MessageBox.OKCANCEL,\nmultiline: true,\nfn: saveAddress,\nanimateTarget: 'addAddressBtn',\nicon: Ext.window.MessageBox.INFO\n});\n</code></pre>\n\n",
            "name": "config"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-show",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 435,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "show",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Displays a new message box, or reinitializes an existing message box, based on the config options\npassed in. All display functions (e.g. prompt, alert, etc.) on MessageBox call this function internally,\nalthough those calls are basic shortcuts and do not support all of the config options allowed here.</p>\n"
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
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 335,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n"
      },
      {
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "deprecated": {
          "version": "4.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-stopAnimation\" rel=\"Ext.picker.Color-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 326,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n"
      },
      {
        "shortDoc": "Suspends the firing of all events. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.window.MessageBox-method-resumeEvents\" rel=\"Ext.window.MessageBox-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.window.MessageBox-method-resumeEvents\" rel=\"Ext.window.MessageBox-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
      },
      {
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 345,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.window.MessageBox-method-sequenceFx\" rel=\"Ext.window.MessageBox-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n"
      },
      {
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 255,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n"
      },
      {
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "name": "preventFocus"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 196,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n"
      },
      {
        "shortDoc": "Shortcut for performing an expand or collapse based on the current state of the panel. ...",
        "params": [

        ],
        "href": "Panel2.html#Ext-panel-Panel-method-toggleCollapse",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.panel.Panel",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 1414,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "toggleCollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Shortcut for performing an <a href=\"#/api/Ext.window.MessageBox-event-expand\" rel=\"Ext.window.MessageBox-event-expand\" class=\"docClass\">expand</a> or <a href=\"#/api/Ext.window.MessageBox-event-collapse\" rel=\"Ext.window.MessageBox-event-collapse\" class=\"docClass\">collapse</a> based on the current state of the panel.</p>\n"
      },
      {
        "shortDoc": "A shortcut method for toggling between maximize and restore based on the current maximized\nstate of the window. ...",
        "params": [

        ],
        "href": "Window.html#Ext-window-Window-method-toggleMaximize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.Window",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 718,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "toggleMaximize",
        "owner": "Ext.window.Window",
        "doc": "<p>A shortcut method for toggling between <a href=\"#/api/Ext.window.MessageBox-event-maximize\" rel=\"Ext.window.MessageBox-event-maximize\" class=\"docClass\">maximize</a> and <a href=\"#/api/Ext.window.MessageBox-event-restore\" rel=\"Ext.window.MessageBox-event-restore\" class=\"docClass\">restore</a> based on the current maximized\nstate of the window.</p>\n"
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.window.MessageBox-method-addListener\" rel=\"Ext.window.MessageBox-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.window.MessageBox-method-removeListener\" rel=\"Ext.window.MessageBox-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n"
      },
      {
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. The simple selector to test.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Container",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 1979,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Update the content area of a component. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> update</p>\n",
            "name": "htmlOrData"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
            "name": "loadScripts"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
            "name": "callback"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2225,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Update the content area of a component.</p>\n"
      },
      {
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "name": "box"
          }
        ],
        "href": "Component2.html#Ext-Component-method-updateBox",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 555,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "updateBox",
        "owner": "Ext.Component",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Updates a progress-style message box's text and progress bar. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Any number between 0 and 1 (e.g., .5, defaults to 0)</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The progress text to display inside the progress bar (defaults to '')</p>\n",
            "name": "progressText"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The message box's body text is replaced with the specified string (defaults to undefined\nso that any existing body text will not get overwritten by default unless a new value is passed in)</p>\n",
            "name": "msg"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-updateProgress",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 603,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "updateProgress",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Updates a progress-style message box's text and progress bar. Only relevant on message boxes\ninitiated via <a href=\"#/api/Ext.window.MessageBox-method-progress\" rel=\"Ext.window.MessageBox-method-progress\" class=\"docClass\">progress</a> or <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">wait</a>,\nor by calling <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> with progress: true.</p>\n"
      },
      {
        "shortDoc": "Displays a message box with an infinitely auto-updating progress bar. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The message box body text</p>\n",
            "name": "msg"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The title bar text</p>\n",
            "name": "title"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) A <a href=\"#/api/Ext.ProgressBar-method-wait\" rel=\"Ext.ProgressBar-method-wait\" class=\"docClass\">Ext.ProgressBar.wait</a> config object</p>\n",
            "name": "config"
          }
        ],
        "href": "MessageBox.html#Ext-window-MessageBox-method-wait",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.window.MessageBox",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 683,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "wait",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Displays a message box with an infinitely auto-updating progress bar.  This can be used to block user\ninteraction while waiting for a long-running process to complete that does not have defined intervals.\nYou are responsible for closing the message box when the process is complete.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-CANCEL",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 70,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "CANCEL",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays a single Cancel button</p>\n"
      },
      {
        "type": "String",
        "href": "MessageBox.html#Ext-window-MessageBox-property-ERROR",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 105,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "ERROR",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The CSS class that provides the ERROR icon image</p>\n"
      },
      {
        "type": "String",
        "href": "MessageBox.html#Ext-window-MessageBox-property-INFO",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 90,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "INFO",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The CSS class that provides the INFO icon image</p>\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-NO",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 65,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "NO",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays a single No button</p>\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-OK",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 55,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "OK",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays a single OK button</p>\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-OKCANCEL",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 75,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "OKCANCEL",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays OK and Cancel buttons</p>\n"
      },
      {
        "type": "String",
        "href": "MessageBox.html#Ext-window-MessageBox-property-QUESTION",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 100,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "QUESTION",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The CSS class that provides the QUESTION icon image</p>\n"
      },
      {
        "type": "String",
        "href": "MessageBox.html#Ext-window-MessageBox-property-WARNING",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 95,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "WARNING",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The CSS class that provides the WARNING icon image</p>\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-YES",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 60,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "YES",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays a single Yes button</p>\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-YESNO",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 80,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "YESNO",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays Yes and No buttons</p>\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-YESNOCANCEL",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 85,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "YESNOCANCEL",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>Button config that displays Yes, No and Cancel buttons</p>\n"
      },
      {
        "shortDoc": "An object containing the default button text strings that can be overriden for localized language support. ...",
        "type": "Object",
        "href": "MessageBox.html#Ext-window-MessageBox-property-buttonText",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 148,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "buttonText",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>An object containing the default button text strings that can be overriden for localized language support.\nSupported properties are: ok, cancel, yes and no.  Generally you should include a locale-specific\nresource file for handling language support across the framework.\nCustomize the default text like so: Ext.window.MessageBox.buttonText.yes = \"oui\"; //french</p>\n"
      },
      {
        "shortDoc": "If this Window is configured draggable, this property will contain\nan instance of Ext.util.ComponentDragger (A subcla...",
        "type": "Ext.util.ComponentDragger",
        "href": "Window.html#Ext-window-Window-property-dd",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 397,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "dd",
        "owner": "Ext.window.Window",
        "doc": "<p>If this Window is configured <a href=\"#/api/Ext.window.MessageBox-cfg-draggable\" rel=\"Ext.window.MessageBox-cfg-draggable\" class=\"docClass\">draggable</a>, this property will contain\nan instance of <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">Ext.util.ComponentDragger</a> (A subclass of <a href=\"#/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">DragTracker</a>)\nwhich handles dragging the Window's DOM Element, and constraining according to the <a href=\"#/api/Ext.window.MessageBox-cfg-constrain\" rel=\"Ext.window.MessageBox-cfg-constrain\" class=\"docClass\">constrain</a>\nand <a href=\"#/api/Ext.window.MessageBox-cfg-constrainHeader\" rel=\"Ext.window.MessageBox-cfg-constrainHeader\" class=\"docClass\">constrainHeader</a> .</p>\n\n\n<p>This has implementations of <code>onBeforeStart</code>, <code>onDrag</code> and <code>onEnd</code>\nwhich perform the dragging action. If extra logic is needed at these points, use\n<a href=\"#/api/Ext.Function-method-createInterceptor\" rel=\"Ext.Function-method-createInterceptor\" class=\"docClass\">createInterceptor</a> or <a href=\"#/api/Ext.Function-method-createSequence\" rel=\"Ext.Function-method-createSequence\" class=\"docClass\">createSequence</a> to\naugment the existing implementations.</p>\n\n"
      },
      {
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-defaultTextHeight",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 131,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "defaultTextHeight",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The default height in pixels of the message box's multiline textarea if displayed (defaults to 75)</p>\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 446,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n"
      },
      {
        "shortDoc": "Optional. ...",
        "type": "Ext.Container",
        "href": "Component2.html#Ext-Component-property-floatParent",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 224,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floatParent",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.window.MessageBox-property-zIndexManager\" rel=\"Ext.window.MessageBox-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n"
      },
      {
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "type": "Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 228,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.window.MessageBox-cfg-frame\" rel=\"Ext.window.MessageBox-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n"
      },
      {
        "type": "Ext.util.MixedCollection",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-property-items",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 281,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "items",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>The MixedCollection containing all the child items of this container.</p>\n"
      },
      {
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 593,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n"
      },
      {
        "shortDoc": "The minimum width in pixels of the message box if it is a progress-style dialog. ...",
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-minProgressWidth",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "minProgressWidth",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The minimum width in pixels of the message box if it is a progress-style dialog.  This is useful\nfor setting a different minimum width than text-only dialogs may need (defaults to 250).</p>\n"
      },
      {
        "shortDoc": "The minimum width in pixels of the message box if it is a prompt dialog. ...",
        "type": "Number",
        "href": "MessageBox.html#Ext-window-MessageBox-property-minPromptWidth",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "MessageBox.html",
        "linenr": 142,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
        "private": false,
        "name": "minPromptWidth",
        "owner": "Ext.window.MessageBox",
        "doc": "<p>The minimum width in pixels of the message box if it is a prompt dialog.  This is useful\nfor setting a different minimum width than text-only dialogs may need (defaults to 250).</p>\n"
      },
      {
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "type": "Ext.Container",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.window.MessageBox-cfg-itemId\" rel=\"Ext.window.MessageBox-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 572,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n"
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
        "shortDoc": "Optional. ...",
        "type": "Ext.ZIndexManager",
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 209,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "zIndexManager",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.window.MessageBox-method-toFront\" rel=\"Ext.window.MessageBox-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.window.MessageBox-method-toBack\" rel=\"Ext.window.MessageBox-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.window.MessageBox-property-floatParent\" rel=\"Ext.window.MessageBox-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n"
      }
    ],
    "cfg": [
      {
        "shortDoc": "A string component id or the numeric index of the component that should be initially activated within the\ncontainer's...",
        "type": "String/Number",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-activeItem",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 87,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "activeItem",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>A string component id or the numeric index of the component that should be initially activated within the\ncontainer's layout on render.  For example, activeItem: 'item-1' or activeItem: 0 (index 0 = the first\nitem in the container's collection).  activeItem only applies to layout styles that can display\nitems one at a time (like <a href=\"#/api/Ext.layout.container.Card\" rel=\"Ext.layout.container.Card\" class=\"docClass\">Ext.layout.container.Card</a> and <a href=\"#/api/Ext.layout.container.Fit\" rel=\"Ext.layout.container.Fit\" class=\"docClass\">Ext.layout.container.Fit</a>).</p>\n"
      },
      {
        "shortDoc": "true to animate the transition when the panel is collapsed, false to skip the\nanimation (defaults to true if the Ext....",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-animCollapse",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 109,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "animCollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to animate the transition when the panel is collapsed, <code>false</code> to skip the\nanimation (defaults to <code>true</code> if the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> class is available, otherwise <code>false</code>).\nMay also be specified as the animation duration in milliseconds.</p>\n"
      },
      {
        "type": "String/Element",
        "href": "Window.html#Ext-window-Window-cfg-animateTarget",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 54,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "animateTarget",
        "owner": "Ext.window.Window",
        "doc": "<p>Id or element from which the window should animate while opening (defaults to null with no animation).</p>\n"
      },
      {
        "shortDoc": "If true the container will automatically destroy any contained component that is removed from it, else\ndestruction mu...",
        "type": "Boolean",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-autoDestroy",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 161,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "autoDestroy",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>If true the container will automatically destroy any contained component that is removed from it, else\ndestruction must be handled manually.\nDefaults to true.</p>\n"
      },
      {
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 130,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.window.MessageBox-cfg-renderTpl\" rel=\"Ext.window.MessageBox-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n"
      },
      {
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 550,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.window.MessageBox-cfg-renderTo\" rel=\"Ext.window.MessageBox-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n"
      },
      {
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 172,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "autoScroll",
        "owner": "Ext.Component",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n"
      },
      {
        "shortDoc": "True to automatically show the component upon creation. ...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 543,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.window.MessageBox-cfg-floating\" rel=\"Ext.window.MessageBox-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.window.MessageBox-cfg-autoRender\" rel=\"Ext.window.MessageBox-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n"
      },
      {
        "type": "String",
        "href": "Window.html#Ext-window-Window-cfg-baseCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 85,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "baseCls",
        "owner": "Ext.window.Window",
        "doc": "<p>The base CSS class to apply to this panel's element (defaults to 'x-window').</p>\n"
      },
      {
        "shortDoc": "Convenience method. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-bbar",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 558,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "bbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Bottom Bar'.</p>\n\n<pre><code>bbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'bottom',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n"
      },
      {
        "shortDoc": "A shortcut to add or remove the border on the body of a panel. ...",
        "type": "Boolean",
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyBorder",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 30,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "bodyBorder",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>A shortcut to add or remove the border on the body of a panel. This only applies to a panel which has the <a href=\"#/api/Ext.window.MessageBox-cfg-frame\" rel=\"Ext.window.MessageBox-cfg-frame\" class=\"docClass\">frame</a> configuration set to <code>true</code>.\nDefaults to <code>undefined</code>.</p>\n"
      },
      {
        "shortDoc": "A CSS class, space-delimited string of classes, or array of classes to be applied to the panel's body element. ...",
        "type": "String/Array",
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 50,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "bodyCls",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>A CSS class, space-delimited string of classes, or array of classes to be applied to the panel's body element.\nThe following examples are all valid:</p>\n\n<pre><code>bodyCls: 'foo'\nbodyCls: 'foo bar'\nbodyCls: ['foo', 'bar']\n</code></pre>\n\n"
      },
      {
        "shortDoc": "A shortcut for setting a padding style on the body element. ...",
        "type": "Number/String",
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyPadding",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 23,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "bodyPadding",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>A shortcut for setting a padding style on the body element. The value can either be\na number to be applied to all sides, or a normal css string describing padding.\nDefaults to <code>undefined</code>.</p>\n"
      },
      {
        "shortDoc": "Custom CSS styles to be applied to the panel's body element, which can be supplied as a valid CSS style string,\nan ob...",
        "type": "String/Object/Function",
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyStyle",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 36,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "bodyStyle",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Custom CSS styles to be applied to the panel's body element, which can be supplied as a valid CSS style string,\nan object containing style property name/value pairs or a function that returns such a string or object.\nFor example, these two formats are interpreted to be equivalent:</p>\n\n<pre><code>bodyStyle: 'background:#ffc; padding:10px;'\n\nbodyStyle: {\n    background: '#ffc',\n    padding: '10px'\n}\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Specifies the border for this component. ...",
        "type": "Number/String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 411,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "shortDoc": "An array of events that, when fired, should be bubbled to any parent container. ...",
        "type": "Array",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-bubbleEvents",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 187,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "bubbleEvents",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>An array of events that, when fired, should be bubbled to any parent container.\nSee <a href=\"#/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">Ext.util.Observable.enableBubble</a>.\nDefaults to <code>['add', 'remove']</code>.\n\n"
      },
      {
        "shortDoc": "The alignment of any buttons added to this panel. ...",
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-buttonAlign",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 523,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "buttonAlign",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The alignment of any buttons added to this panel.  Valid values are 'right',\n'left' and 'center' (defaults to 'right' for buttons/fbar, 'left' for other toolbar types).</p>\n\n\n<p><b>NOTE:</b> The newer way to specify toolbars is to use the dockedItems config, and\ninstead of buttonAlign you would add the layout: { pack: 'start' | 'center' | 'end' }\noption to the dockedItem config.</p>\n\n"
      },
      {
        "shortDoc": "Convenience method used for adding buttons docked to the bottom of the panel. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-buttons",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 584,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "buttons",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method used for adding buttons docked to the bottom of the panel. This is a\nsynonym for the <a href=\"#/api/Ext.window.MessageBox-cfg-fbar\" rel=\"Ext.window.MessageBox-cfg-fbar\" class=\"docClass\">fbar</a> config.</p>\n\n<pre><code>buttons: [\n  { text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'bottom',\n    ui: 'footer',\n    defaults: {minWidth: <a href=\"#/api/Ext.window.MessageBox-cfg-minButtonWidth\" rel=\"Ext.window.MessageBox-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a>},\n    items: [\n        { xtype: 'component', flex: 1 },\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n\n<p>The <a href=\"#/api/Ext.window.MessageBox-cfg-minButtonWidth\" rel=\"Ext.window.MessageBox-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a> is used as the default <a href=\"#/api/Ext.button.Button-cfg-minWidth\" rel=\"Ext.button.Button-cfg-minWidth\" class=\"docClass\">minWidth</a> for\neach of the buttons in the buttons toolbar.</p>\n"
      },
      {
        "shortDoc": "True to display the 'close' tool button and allow the user to close the window, false to\nhide the button and disallow...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-closable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 166,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "closable",
        "owner": "Ext.window.Window",
        "doc": "<p>True to display the 'close' tool button and allow the user to close the window, false to\nhide the button and disallow closing the window (defaults to <code>true</code>).</p>\n\n\n<p>By default, when close is requested by either clicking the close button in the header\nor pressing ESC when the Window has focus, the <a href=\"#/api/Ext.window.MessageBox-method-close\" rel=\"Ext.window.MessageBox-method-close\" class=\"docClass\">close</a> method will be called. This\nwill <i><a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">destroy</a></i> the Window and its content meaning that\nit may not be reused.</p>\n\n\n<p>To make closing a Window <i>hide</i> the Window so that it may be reused, set\n<a href=\"#/api/Ext.window.MessageBox-cfg-closeAction\" rel=\"Ext.window.MessageBox-cfg-closeAction\" class=\"docClass\">closeAction</a> to 'hide'.</p>\n\n"
      },
      {
        "shortDoc": "The action to take when the close header tool is clicked:\n\n'destroy' : Default\nremove the window from the DOM and des...",
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-closeAction",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 221,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "closeAction",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The action to take when the close header tool is clicked:\n<div class=\"mdetail-params\"><ul>\n<li><b><code>'<a href=\"#/api/Ext.window.MessageBox-event-destroy\" rel=\"Ext.window.MessageBox-event-destroy\" class=\"docClass\">destroy</a>'</code></b> : <b>Default</b><div class=\"sub-desc\">\n<a href=\"#/api/Ext.window.MessageBox-event-destroy\" rel=\"Ext.window.MessageBox-event-destroy\" class=\"docClass\">remove</a> the window from the DOM and <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">destroy</a>\nit and all descendant Components. The window will <b>not</b> be available to be\nredisplayed via the <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> method.\n</div></li>\n<li><b><code>'<a href=\"#/api/Ext.window.MessageBox-event-hide\" rel=\"Ext.window.MessageBox-event-hide\" class=\"docClass\">hide</a>'</code></b> : <div class=\"sub-desc\">\n<a href=\"#/api/Ext.window.MessageBox-event-hide\" rel=\"Ext.window.MessageBox-event-hide\" class=\"docClass\">hide</a> the window by setting visibility to hidden and applying negative offsets.\nThe window will be available to be redisplayed via the <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> method.\n</div></li>\n</ul></div>\n<p><b>Note:</b> This behavior has changed! setting *does* affect the <a href=\"#/api/Ext.window.MessageBox-method-close\" rel=\"Ext.window.MessageBox-method-close\" class=\"docClass\">close</a> method\nwhich will invoke the approriate closeAction.\n\n"
      },
      {
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 340,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n"
      },
      {
        "shortDoc": "The direction to collapse the Panel when the toggle button is clicked. ...",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapseDirection",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 201,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapseDirection",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The direction to collapse the Panel when the toggle button is clicked.</p>\n\n\n<p>Defaults to the <a href=\"#/api/Ext.window.MessageBox-cfg-headerPosition\" rel=\"Ext.window.MessageBox-cfg-headerPosition\" class=\"docClass\">headerPosition</a></p>\n\n\n<p><b>Important: This config is <u>ignored</u> for <a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</b></p>\n\n\n<p>Specify as <code>'top'</code>, <code>'bottom'</code>, <code>'left'</code> or <code>'right'</code>.</p>\n\n"
      },
      {
        "shortDoc": "true to make sure the collapse/expand toggle button always renders first (to the left of)\nany other tools in the pane...",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapseFirst",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 134,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapseFirst",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to make sure the collapse/expand toggle button always renders first (to the left of)\nany other tools in the panel&#39;s title bar, <code>false</code> to render it last (defaults to <code>true</code>).</p>\n"
      },
      {
        "shortDoc": "Important: this config is only effective for collapsible Panels which are direct child items of a border layout. ...",
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapseMode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 156,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapseMode",
        "owner": "Ext.panel.Panel",
        "doc": "<p><b>Important: this config is only effective for <a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</b></p>\n\n\n<p>When <i>not</i> a direct child item of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>, then the Panel&#39;s header remains visible, and the body is collapsed to zero dimensions.\nIf the Panel has no header, then a new header (orientated correctly depending on the <a href=\"#/api/Ext.window.MessageBox-cfg-collapseDirection\" rel=\"Ext.window.MessageBox-cfg-collapseDirection\" class=\"docClass\">collapseDirection</a>) will be inserted to show a the title and a re-expand tool.</p>\n\n\n<p>When a child item of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>, this config has two options:\n<div class=\"mdetail-params\"><ul>\n<li><b><code>undefined/omitted</code></b><div class=\"sub-desc\">When collapsed, a placeholder <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a> is injected into the layout to represent the Panel\nand to provide a UI with a Tool to allow the user to re-expand the Panel.</div></li>\n<li><b><code>header</code></b> : <div class=\"sub-desc\">The Panel collapses to leave its header visible as when not inside a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</div></li>\n</ul></div></p>\n\n"
      },
      {
        "shortDoc": "True to render the window collapsed, false to render it expanded (defaults to false). ...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-collapsed",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 74,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "collapsed",
        "owner": "Ext.window.Window",
        "doc": "<p>True to render the window collapsed, false to render it expanded (defaults to false). Note that if\n<a href=\"#/api/Ext.window.MessageBox-cfg-expandOnShow\" rel=\"Ext.window.MessageBox-cfg-expandOnShow\" class=\"docClass\">expandOnShow</a> is true (the default) it will override the <code>collapsed</code> config and the window\nwill always be expanded when shown.</p>\n"
      },
      {
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapsedCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapsedCls",
        "owner": "Ext.panel.Panel",
        "doc": "<p>A CSS class to add to the panel&#39;s element after it has been collapsed (defaults to\n<code>'collapsed'</code>).</p>\n"
      },
      {
        "shortDoc": "True to make the panel collapsible and have an expand/collapse toggle Tool added into\nthe header tool button area. ...",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapsible",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 193,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapsible",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to make the panel collapsible and have an expand/collapse toggle Tool added into\nthe header tool button area. False to keep the panel sized either statically, or by an owning layout manager, with no toggle Tool (defaults to false).</p>\n\n\n<p>See <a href=\"#/api/Ext.window.MessageBox-cfg-collapseMode\" rel=\"Ext.window.MessageBox-cfg-collapseMode\" class=\"docClass\">collapseMode</a> and <a href=\"#/api/Ext.window.MessageBox-cfg-collapseDirection\" rel=\"Ext.window.MessageBox-cfg-collapseDirection\" class=\"docClass\">collapseDirection</a></p>\n"
      },
      {
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 334,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n"
      },
      {
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "type": "String/Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 242,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.window.MessageBox-method-setSize\" rel=\"Ext.window.MessageBox-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n"
      },
      {
        "shortDoc": "True to constrain the window within its containing element, false to allow it to fall outside of its\ncontaining element. ...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-constrain",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 107,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "constrain",
        "owner": "Ext.window.Window",
        "doc": "<p>True to constrain the window within its containing element, false to allow it to fall outside of its\ncontaining element. By default the window will be rendered to document.body.  To render and constrain the\nwindow within another element specify <a href=\"#/api/Ext.window.MessageBox-cfg-renderTo\" rel=\"Ext.window.MessageBox-cfg-renderTo\" class=\"docClass\">renderTo</a>.\n(defaults to false).  Optionally the header only can be constrained using <a href=\"#/api/Ext.window.MessageBox-cfg-constrainHeader\" rel=\"Ext.window.MessageBox-cfg-constrainHeader\" class=\"docClass\">constrainHeader</a>.</p>\n"
      },
      {
        "shortDoc": "True to constrain the window header within its containing element (allowing the window body to fall outside\nof its co...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-constrainHeader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 116,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "constrainHeader",
        "owner": "Ext.window.Window",
        "doc": "<p>True to constrain the window header within its containing element (allowing the window body to fall outside\nof its containing element) or false to allow the header to fall outside its containing element (defaults to\nfalse). Optionally the entire window can be constrained using <a href=\"#/api/Ext.window.MessageBox-cfg-constrain\" rel=\"Ext.window.MessageBox-cfg-constrain\" class=\"docClass\">constrain</a>.</p>\n"
      },
      {
        "shortDoc": "Optional. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 473,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.window.MessageBox-cfg-html\" rel=\"Ext.window.MessageBox-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.window.MessageBox-event-render\" rel=\"Ext.window.MessageBox-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-cfg-items\" rel=\"Ext.container.Container-cfg-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n"
      },
      {
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 260,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.window.MessageBox-cfg-tpl\" rel=\"Ext.window.MessageBox-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n"
      },
      {
        "shortDoc": "This object holds the default weights applied to dockedItems that have no weight. ...",
        "type": "Object",
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-defaultDockWeights",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 64,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "defaultDockWeights",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>This object holds the default weights applied to dockedItems that have no weight. These start with a\nweight of 1, to allow negative weights to insert before top items and are odd numbers\nso that even weights can be used to get between different dock orders.</p>\n\n<p>To make default docking order match border layout, do this:</p>\n\n<pre><code>Ext.panel.AbstractPanel.prototype.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };</code></pre>\n\n\n<p>Changing these defaults as above or individually on this object will effect all Panels.\nTo change the defaults on a single panel, you should replace the entire object:</p>\n\n<pre><code>initComponent: function () {\n    // NOTE: Don't change members of defaultDockWeights since the object is shared.\n    this.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };\n\n    this.callParent();\n}</code></pre>\n\n\n<p>To change only one of the default values, you do this:</p>\n\n<pre><code>initComponent: function () {\n    // NOTE: Don't change members of defaultDockWeights since the object is shared.\n    this.defaultDockWeights = Ext.applyIf({ top: 10 }, this.defaultDockWeights);\n\n    this.callParent();\n}</code></pre>\n\n"
      },
      {
        "shortDoc": "Specifies a Component to receive focus when this Window is focused. ...",
        "type": "String/Number/Component",
        "href": "Window.html#Ext-window-Window-cfg-defaultFocus",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 58,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "defaultFocus",
        "owner": "Ext.window.Window",
        "doc": "<p>Specifies a Component to receive focus when this Window is focused.</p>\n\n\n<p>This may be one of:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>The index of a footer Button.</li>\n<li>The id or <a href=\"#/api/Ext.AbstractComponent-cfg-itemId\" rel=\"Ext.AbstractComponent-cfg-itemId\" class=\"docClass\">Ext.AbstractComponent.itemId</a> of a descendant Component.</li>\n<li>A Component.</li>\n</ul></div>\n\n"
      },
      {
        "shortDoc": "The default xtype of child Components to create in this Container when\na child item is specified as a raw configurati...",
        "type": "String",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-defaultType",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 168,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "defaultType",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>The default <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">xtype</a> of child Components to create in this Container when\na child item is specified as a raw configuration object, rather than as an instantiated Component.</p>\n\n\n<p>Defaults to <code>'panel'</code>.</p>\n\n"
      },
      {
        "shortDoc": "This option is a means of applying default settings to all added items whether added through the items\nconfig or via ...",
        "type": "Object|Function",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-defaults",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 126,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "defaults",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>This option is a means of applying default settings to all added items whether added through the <a href=\"#/api/Ext.window.MessageBox-cfg-items\" rel=\"Ext.window.MessageBox-cfg-items\" class=\"docClass\">items</a>\nconfig or via the <a href=\"#/api/Ext.window.MessageBox-event-add\" rel=\"Ext.window.MessageBox-event-add\" class=\"docClass\">add</a> or <a href=\"#/api/Ext.window.MessageBox-method-insert\" rel=\"Ext.window.MessageBox-method-insert\" class=\"docClass\">insert</a> methods.</p>\n\n\n<p>If an added item is a config object, and <b>not</b> an instantiated Component, then the default properties are\nunconditionally applied. If the added item <b>is</b> an instantiated Component, then the default properties are\napplied conditionally so as not to override existing properties in the item.</p>\n\n\n<p>If the defaults option is specified as a function, then the function will be called using this Container as the\nscope (<code>this</code> reference) and passing the added item as the first parameter. Any resulting object\nfrom that call is then applied to the item as default properties.</p>\n\n\n<p>For example, to automatically apply padding to the body of each of a set of\ncontained <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> items, you could pass: <code>defaults: {bodyStyle:'padding:15px'}</code>.</p>\n\n\n<p>Usage:</p>\n\n\n<pre><code>defaults: {               // defaults are applied to items, not the container\n    autoScroll:true\n},\nitems: [\n    {\n        xtype: 'panel',   // defaults <b>do not</b> have precedence over\n        id: 'panel1',     // options in config objects, so the defaults\n        autoScroll: false // will not be applied here, panel1 will be autoScroll:false\n    },\n    new Ext.panel.Panel({       // defaults <b>do</b> have precedence over options\n        id: 'panel2',     // options in components, so the defaults\n        autoScroll: false // will be applied here, panel2 will be autoScroll:true.\n    })\n]</code></pre>\n\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabled",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 435,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n"
      },
      {
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 353,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n"
      },
      {
        "shortDoc": "A component or series of components to be added as docked items to this panel. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-dockedItems",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 240,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "dockedItems",
        "owner": "Ext.panel.Panel",
        "doc": "<p>A component or series of components to be added as docked items to this panel.\nThe docked items can be docked to either the top, right, left or bottom of a panel.\nThis is typically used for things like toolbars or tab bars:</p>\n\n<pre><code>var panel = new Ext.panel.Panel({\n    dockedItems: [{\n        xtype: 'toolbar',\n        dock: 'top',\n        items: [{\n            text: 'Docked to the top'\n        }]\n    }]\n});</pre>\n\n\n<p></code></p>\n"
      },
      {
        "shortDoc": "True to allow the window to be dragged by the header bar, false to disable dragging (defaults to true). ...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-draggable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 99,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.window.Window",
        "doc": "<p>True to allow the window to be dragged by the header bar, false to disable dragging (defaults to true).  Note\nthat by default the window will be centered in the viewport, so if dragging is disabled the window may need\nto be positioned programmatically after render (e.g., myWindow.setPosition(100, 100);).<p>\n\n"
      },
      {
        "shortDoc": "True to always expand the window when it is displayed, false to keep it in its current state (which may be\ncollapsed)...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-expandOnShow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 156,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "expandOnShow",
        "owner": "Ext.window.Window",
        "doc": "<p>True to always expand the window when it is displayed, false to keep it in its current state (which may be\n<a href=\"#/api/Ext.window.MessageBox-cfg-collapsed\" rel=\"Ext.window.MessageBox-cfg-collapsed\" class=\"docClass\">collapsed</a>) when displayed (defaults to true).</p>\n"
      },
      {
        "shortDoc": "Convenience method used for adding items to the bottom of the panel. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-fbar",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 617,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "fbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method used for adding items to the bottom of the panel. Short for Footer Bar.</p>\n\n<pre><code>fbar: [\n  { type: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'bottom',\n    ui: 'footer',\n    defaults: {minWidth: <a href=\"#/api/Ext.window.MessageBox-cfg-minButtonWidth\" rel=\"Ext.window.MessageBox-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a>},\n    items: [\n        { xtype: 'component', flex: 1 },\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n\n<p>The <a href=\"#/api/Ext.window.MessageBox-cfg-minButtonWidth\" rel=\"Ext.window.MessageBox-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a> is used as the default <a href=\"#/api/Ext.button.Button-cfg-minWidth\" rel=\"Ext.button.Button-cfg-minWidth\" class=\"docClass\">minWidth</a> for\neach of the buttons in the fbar.</p>\n"
      },
      {
        "shortDoc": "Important: This config is only effective for collapsible Panels which are direct child items of a border layout. ...",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-floatable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 178,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "floatable",
        "owner": "Ext.panel.Panel",
        "doc": "<p><b>Important: This config is only effective for <a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</b></p>\n\n\n<p><tt>true</tt> to allow clicking a collapsed Panel&#39;s <a href=\"#/api/Ext.window.MessageBox-cfg-placeholder\" rel=\"Ext.window.MessageBox-cfg-placeholder\" class=\"docClass\">placeholder</a> to display the Panel floated\nabove the layout, <tt>false</tt> to force the user to fully expand a collapsed region by\nclicking the expand button to see it again (defaults to <tt>true</tt>).</p>\n"
      },
      {
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-floating",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 178,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floating",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.window.MessageBox-method-toFront\" rel=\"Ext.window.MessageBox-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.window.MessageBox-property-ownerCt\" rel=\"Ext.window.MessageBox-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.window.MessageBox-property-floatParent\" rel=\"Ext.window.MessageBox-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.window.MessageBox-property-floatParent\" rel=\"Ext.window.MessageBox-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n"
      },
      {
        "shortDoc": "Specifies whether the floated component should be automatically focused when\nit is brought to the front. ...",
        "type": "Boolean",
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 8,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.Component-method-focus\" rel=\"Ext.Component-method-focus\" class=\"docClass\">focused</a> when\nit is <a href=\"#/api/Ext.window.MessageBox-method-toFront\" rel=\"Ext.window.MessageBox-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-frame",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 267,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "frame",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to apply a frame to the panel.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-frameHeader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 273,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "frameHeader",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to apply a frame to the panel panels header (if 'frame' is true).</p>\n"
      },
      {
        "shortDoc": "Specify as 'top', 'bottom', 'left' or 'right'. ...",
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-headerPosition",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 262,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "headerPosition",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Specify as <code>'top'</code>, <code>'bottom'</code>, <code>'left'</code> or <code>'right'</code>. Defaults to <code>'top'</code>.</p>\n"
      },
      {
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 406,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The height of this component in pixels.</p>\n"
      },
      {
        "shortDoc": "Render this Window hidden (default is true). ...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-hidden",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "hidden",
        "owner": "Ext.window.Window",
        "doc": "<p>Render this Window hidden (default is <code>true</code>). If <code>true</code>, the\n<a href=\"#/api/Ext.window.MessageBox-event-hide\" rel=\"Ext.window.MessageBox-event-hide\" class=\"docClass\">hide</a> method will be called internally.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-hideCollapseTool",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "hideCollapseTool",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to hide the expand/collapse toggle button when <code><a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> == true</code>,\n<code>false</code> to display it (defaults to <code>false</code>).</p>\n"
      },
      {
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 460,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n"
      },
      {
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "type": "String/Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 491,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.window.MessageBox-event-render\" rel=\"Ext.window.MessageBox-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.window.MessageBox-cfg-contentEl\" rel=\"Ext.window.MessageBox-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n"
      },
      {
        "shortDoc": "CSS class for icon in header. ...",
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-iconCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 314,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "iconCls",
        "owner": "Ext.panel.Panel",
        "doc": "<p>CSS class for icon in header. Used for displaying an icon to the left of a title.</p>\n"
      },
      {
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 50,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.window.MessageBox-method-getId\" rel=\"Ext.window.MessageBox-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.window.MessageBox-cfg-itemId\" rel=\"Ext.window.MessageBox-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.window.MessageBox-cfg-itemId\" rel=\"Ext.window.MessageBox-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.window.MessageBox-property-ownerCt\" rel=\"Ext.window.MessageBox-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n"
      },
      {
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 66,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.window.MessageBox-cfg-id\" rel=\"Ext.window.MessageBox-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.window.MessageBox-cfg-id\" rel=\"Ext.window.MessageBox-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.window.MessageBox-cfg-id\" rel=\"Ext.window.MessageBox-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.window.MessageBox-cfg-renderTo\" rel=\"Ext.window.MessageBox-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-cfg-items\" rel=\"Ext.container.Container-cfg-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.window.MessageBox-property-ownerCt\" rel=\"Ext.window.MessageBox-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.window.MessageBox-cfg-id\" rel=\"Ext.window.MessageBox-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.window.MessageBox-property-ownerCt\" rel=\"Ext.window.MessageBox-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n"
      },
      {
        "shortDoc": "A single item, or an array of child Components to be added to this container\n\n\nUnless configured with a layout, a Con...",
        "type": "Object/Array",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-items",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 94,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "items",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>A single item, or an array of child Components to be added to this container</p>\n\n\n<p><b>Unless configured with a <a href=\"#/api/Ext.window.MessageBox-cfg-layout\" rel=\"Ext.window.MessageBox-cfg-layout\" class=\"docClass\">layout</a>, a Container simply renders child Components serially into\nits encapsulating element and performs no sizing or positioning upon them.</b><p>\n<p>Example:</p>\n<pre><code>// specifying a single item\nitems: {...},\nlayout: 'fit',    // The single items is sized to fit\n\n// specifying multiple items\nitems: [{...}, {...}],\nlayout: 'hbox', // The items are arranged horizontally\n       </code></pre>\n<p>Each item may be:</p>\n<ul>\n<li>A <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></li>\n<li>A Component configuration object</li>\n</ul>\n<p>If a configuration object is specified, the actual type of Component to be\ninstantiated my be indicated by using the <a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a> option.</p>\n<p>Every Component class has its own <a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a>.</p>\n<p>If an <a href=\"#/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a> is not explicitly\nspecified, the <a href=\"#/api/Ext.window.MessageBox-cfg-defaultType\" rel=\"Ext.window.MessageBox-cfg-defaultType\" class=\"docClass\">defaultType</a> for the Container is used, which by default is usually <code>panel</code>.</p>\n<p><b>Notes</b>:</p>\n<p>Ext uses lazy rendering. Child Components will only be rendered\nshould it become necessary. Items are automatically laid out when they are first\nshown (no sizing is done while hidden), or in response to a <a href=\"#/api/Ext.window.MessageBox-method-doLayout\" rel=\"Ext.window.MessageBox-method-doLayout\" class=\"docClass\">doLayout</a> call.</p>\n<p>Do not specify <code><a href=\"#/api/Ext.panel.Panel-cfg-contentEl\" rel=\"Ext.panel.Panel-cfg-contentEl\" class=\"docClass\">contentEl</a></code> or \n<code><a href=\"#/api/Ext.panel.Panel-cfg-html\" rel=\"Ext.panel.Panel-cfg-html\" class=\"docClass\">html</a></code> with <code>items</code>.</p>\n\n"
      },
      {
        "shortDoc": "*Important: In order for child items to be correctly sized and\npositioned, typically a layout manager must be specifi...",
        "type": "String/Object",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-layout",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 20,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "layout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p><b>*Important</b>: In order for child items to be correctly sized and\npositioned, typically a layout manager <b>must</b> be specified through\nthe <code>layout</code> configuration option.</p>\n\n\n<br><p>The sizing and positioning of child <a href=\"#/api/Ext.window.MessageBox-cfg-items\" rel=\"Ext.window.MessageBox-cfg-items\" class=\"docClass\">items</a> is the responsibility of\n\n\n<p>the Container's layout manager which creates and manages the type of layout\nyou have in mind.  For example:</p></p>\n\n<p>If the <a href=\"#/api/Ext.window.MessageBox-cfg-layout\" rel=\"Ext.window.MessageBox-cfg-layout\" class=\"docClass\">layout</a> configuration is not explicitly specified for\na general purpose container (e.g. Container or Panel) the\n<a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used\nwhich does nothing but render child components sequentially into the\nContainer (no sizing or positioning will be performed in this situation).</p>\n\n\n<br><p><b><code>layout</code></b> may be specified as either as an Object or\n\n\n<p>as a String:</p><div><ul class=\"mdetail-params\"></p>\n\n<p><li><u>Specify as an Object</u></li></p>\n\n<div><ul class=\"mdetail-params\">\n<li>Example usage:</li>\n<pre><code>layout: {\n    type: 'vbox',\n    align: 'left'\n}\n       </code></pre>\n\n<li><code><b>type</b></code></li>\n<br/><p>The layout type to be used for this container.  If not specified,\na default <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">Ext.layout.container.Auto</a> will be created and used.</p>\n<br/><p>Valid layout <code>type</code> values are:</p>\n<div class=\"sub-desc\"><ul class=\"mdetail-params\">\n<li><code><b><a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">Auto</a></b></code> &nbsp;&nbsp;&nbsp; <b>Default</b></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Card\" rel=\"Ext.layout.container.Card\" class=\"docClass\">card</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Fit\" rel=\"Ext.layout.container.Fit\" class=\"docClass\">fit</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">hbox</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">vbox</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Anchor\" rel=\"Ext.layout.container.Anchor\" class=\"docClass\">anchor</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Table\" rel=\"Ext.layout.container.Table\" class=\"docClass\">table</a></b></code></li>\n</ul></div>\n\n<li>Layout specific configuration properties</li>\n<br/><p>Additional layout specific configuration properties may also be\nspecified. For complete details regarding the valid config options for\neach layout type, see the layout class corresponding to the <code>type</code>\nspecified.</p>\n\n</ul></div>\n\n\n<p><li><u>Specify as a String</u></li></p>\n\n<div><ul class=\"mdetail-params\">\n<li>Example usage:</li>\n<pre><code>layout: {\n    type: 'vbox',\n    padding: '5',\n    align: 'left'\n}\n       </code></pre>\n<li><code><b>layout</b></code></li>\n<br/><p>The layout <code>type</code> to be used for this container (see list\nof valid layout type values above).</p><br/>\n<br/><p>Additional layout specific configuration properties. For complete\ndetails regarding the valid config options for each layout type, see the\nlayout class corresponding to the <code>layout</code> specified.</p>\n</ul></div>\n\n\n<p></ul></div></p>\n"
      },
      {
        "shortDoc": "Convenience method. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-lbar",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 665,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "lbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Left Bar' (left-docked, vertical toolbar).</p>\n\n<pre><code>lbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'left',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n"
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
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.window.MessageBox-method-addListener\" rel=\"Ext.window.MessageBox-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "type": "Ext.ComponentLoader/Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 534,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n"
      },
      {
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 259,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n"
      },
      {
        "shortDoc": "Specifies the margin for this component. ...",
        "type": "Number/String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 423,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 523,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 528,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "True to display the 'maximize' tool button and allow the user to maximize the window, false to hide the button\nand di...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-maximizable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 141,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "maximizable",
        "owner": "Ext.window.Window",
        "doc": "<p>True to display the 'maximize' tool button and allow the user to maximize the window, false to hide the button\nand disallow maximizing the window (defaults to false).  Note that when a window is maximized, the tool button\nwill automatically change to a 'restore' button with the appropriate behavior already built-in that will\nrestore the window to its previous size.</p>\n"
      },
      {
        "shortDoc": "True to initially display the window in a maximized state. ...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-maximized",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 80,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "maximized",
        "owner": "Ext.window.Window",
        "doc": "<p>True to initially display the window in a maximized state. (Defaults to false).</p>\n"
      },
      {
        "shortDoc": "Minimum width of all footer toolbar buttons in pixels (defaults to 75). ...",
        "type": "Number",
        "href": "Panel2.html#Ext-panel-Panel-cfg-minButtonWidth",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 117,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "minButtonWidth",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Minimum width of all footer toolbar buttons in pixels (defaults to <tt>75</tt>). If set, this will\nbe used as the default value for the <tt><a href=\"#/api/Ext.button.Button-cfg-minWidth\" rel=\"Ext.button.Button-cfg-minWidth\" class=\"docClass\">Ext.button.Button.minWidth</a></tt> config of\neach Button added to the <b>footer toolbar</b> via the <a href=\"#/api/Ext.window.MessageBox-cfg-fbar\" rel=\"Ext.window.MessageBox-cfg-fbar\" class=\"docClass\">fbar</a> or <a href=\"#/api/Ext.window.MessageBox-cfg-buttons\" rel=\"Ext.window.MessageBox-cfg-buttons\" class=\"docClass\">buttons</a> configurations.\nIt will be ignored for buttons that have a minWidth configured some other way, e.g. in their own config\nobject or via the <a href=\"#/api/Ext.container.Container-cfg-defaults\" rel=\"Ext.container.Container-cfg-defaults\" class=\"docClass\">defaults</a> of their parent container.</p>\n"
      },
      {
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 513,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 518,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "True to display the 'minimize' tool button and allow the user to minimize the window, false to hide the button\nand di...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-minimizable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 132,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "minimizable",
        "owner": "Ext.window.Window",
        "doc": "<p>True to display the 'minimize' tool button and allow the user to minimize the window, false to hide the button\nand disallow minimizing the window (defaults to false).  Note that this button provides no implementation --\nthe behavior of minimizing a window is implementation-specific, so the minimize event must be handled and a\ncustom minimize behavior implemented for this option to be useful.</p>\n"
      },
      {
        "shortDoc": "True to make the window modal and mask everything behind it when displayed, false to display it without\nrestricting a...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-modal",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 49,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "modal",
        "owner": "Ext.window.Window",
        "doc": "<p>True to make the window modal and mask everything behind it when displayed, false to display it without\nrestricting access to other UI elements (defaults to false).</p>\n"
      },
      {
        "shortDoc": "Allows override of the built-in processing for the escape key. ...",
        "type": "Function",
        "href": "Window.html#Ext-window-Window-cfg-onEsc",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 67,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "onEsc",
        "owner": "Ext.window.Window",
        "doc": "<p>Allows override of the built-in processing for the escape key. Default action\nis to close the Window (performing whatever action is specified in <a href=\"#/api/Ext.window.MessageBox-cfg-closeAction\" rel=\"Ext.window.MessageBox-cfg-closeAction\" class=\"docClass\">closeAction</a>.\nTo prevent the Window closing when the escape key is pressed, specify this as\nExt.emptyFn (See <a href=\"#/api/Ext-method-emptyFn\" rel=\"Ext-method-emptyFn\" class=\"docClass\">Ext.emptyFn</a>).</p>\n"
      },
      {
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 346,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n"
      },
      {
        "shortDoc": "True to overlap the header in a panel over the framing of the panel itself. ...",
        "type": "Mixed",
        "href": "Panel2.html#Ext-panel-Panel-cfg-overlapHeader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 187,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "overlapHeader",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to overlap the header in a panel over the framing of the panel itself. This is needed when frame:true (and is done automatically for you). Otherwise it is undefined.\nIf you manually add rounded corners to a panel header which does not have frame:true, this will need to be set to true.</p>\n"
      },
      {
        "shortDoc": "Specifies the padding for this component. ...",
        "type": "Number/String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 417,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "shortDoc": "Important: This config is only effective for collapsible Panels which are direct child items of a border layout\nwhen ...",
        "type": "Mixed",
        "href": "Panel2.html#Ext-panel-Panel-cfg-placeholder",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 169,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "placeholder",
        "owner": "Ext.panel.Panel",
        "doc": "<p><b>Important: This config is only effective for <a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>\nwhen not using the <code>'header'</code> <a href=\"#/api/Ext.window.MessageBox-cfg-collapseMode\" rel=\"Ext.window.MessageBox-cfg-collapseMode\" class=\"docClass\">collapseMode</a>.</b></p>\n\n\n<p><b>Optional.</b> A Component (or config object for a Component) to show in place of this Panel when this Panel is collapsed by a\n<a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>. Defaults to a generated <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a>\ncontaining a <a href=\"#/api/Ext.panel.Tool\" rel=\"Ext.panel.Tool\" class=\"docClass\">Tool</a> to re-expand the Panel.</p>\n\n"
      },
      {
        "shortDoc": "True to render the window body with a transparent background so that it will blend into the framing\nelements, false t...",
        "type": "Boolean",
        "href": "Window.html#Ext-window-Window-cfg-plain",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 124,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "plain",
        "owner": "Ext.window.Window",
        "doc": "<p>True to render the window body with a transparent background so that it will blend into the framing\nelements, false to add a lighter background color to visually highlight the body element and separate it\nmore distinctly from the surrounding frame (defaults to false).</p>\n"
      },
      {
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "type": "Object/Array",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 563,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n"
      },
      {
        "shortDoc": "Prevent a Header from being created and shown. ...",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-preventHeader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 257,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "preventHeader",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Prevent a Header from being created and shown. Defaults to false.</p>\n"
      },
      {
        "shortDoc": "Convenience method. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-rbar",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 691,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "rbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Right Bar' (right-docked, vertical toolbar).</p>\n\n<pre><code>rbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'right',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n"
      },
      {
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "type": "Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.window.MessageBox-cfg-renderTpl\" rel=\"Ext.window.MessageBox-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n"
      },
      {
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 204,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.window.MessageBox-event-render\" rel=\"Ext.window.MessageBox-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n"
      },
      {
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 164,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.window.MessageBox-method-getEl\" rel=\"Ext.window.MessageBox-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.window.MessageBox-cfg-renderSelectors\" rel=\"Ext.window.MessageBox-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n"
      },
      {
        "shortDoc": "Specify as true to allow user resizing at each edge and corner of the window, false to disable\nresizing (defaults to ...",
        "type": "Mixed",
        "href": "Window.html#Ext-window-Window-cfg-resizable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 91,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "resizable",
        "owner": "Ext.window.Window",
        "doc": "<p>Specify as <code>true</code> to allow user resizing at each edge and corner of the window, false to disable\nresizing (defaults to true).</p>\n\n\n<p>This may also be specified as a config object to </p>\n\n"
      },
      {
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "type": "String",
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 166,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n"
      },
      {
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "type": "Number",
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 74,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n"
      },
      {
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "type": "String/Boolean",
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 15,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "shadow",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to true to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the shadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to false to disable the\nshadow. (Defaults to 'sides'.)</p>\n"
      },
      {
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "type": "Array",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 64,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.window.MessageBox-cfg-stateful\" rel=\"Ext.window.MessageBox-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n"
      },
      {
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "type": "String",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 58,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.window.MessageBox-cfg-stateful\" rel=\"Ext.window.MessageBox-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n"
      },
      {
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "type": "Boolean",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.window.MessageBox-cfg-stateId\" rel=\"Ext.window.MessageBox-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.window.MessageBox-cfg-stateEvents\" rel=\"Ext.window.MessageBox-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.window.MessageBox-method-getState\" rel=\"Ext.window.MessageBox-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.window.MessageBox-cfg-stateId\" rel=\"Ext.window.MessageBox-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.window.MessageBox-cfg-stateId\" rel=\"Ext.window.MessageBox-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.window.MessageBox-method-applyState\" rel=\"Ext.window.MessageBox-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.window.MessageBox-method-applyState\" rel=\"Ext.window.MessageBox-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.window.MessageBox-event-beforestaterestore\" rel=\"Ext.window.MessageBox-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.window.MessageBox-event-staterestore\" rel=\"Ext.window.MessageBox-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.window.MessageBox-event-beforestatesave\" rel=\"Ext.window.MessageBox-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.window.MessageBox-event-statesave\" rel=\"Ext.window.MessageBox-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n"
      },
      {
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 372,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n"
      },
      {
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 506,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n"
      },
      {
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 499,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n"
      },
      {
        "shortDoc": "If true, suspend calls to doLayout. ...",
        "type": "Boolean",
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-suspendLayout",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 155,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "suspendLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>If true, suspend calls to doLayout.  Useful when batching multiple adds to a container and not passing them\nas multiple arguments or an array.</p>\n"
      },
      {
        "shortDoc": "Convenience method. ...",
        "type": "Object/Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-tbar",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 532,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "tbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Top Bar'.</p>\n\n<pre><code>tbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'top',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n"
      },
      {
        "shortDoc": "The title text to be used to display in the panel header (defaults to ''). ...",
        "type": "String",
        "href": "Panel2.html#Ext-panel-Panel-cfg-title",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 307,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "title",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The title text to be used to display in the <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">panel header</a> (defaults to '').\nWhen a <code>title</code> is specified the <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Ext.panel.Header</a> will automatically be created and displayed unless\n<a href=\"#/api/Ext.window.MessageBox-cfg-preventHeader\" rel=\"Ext.window.MessageBox-cfg-preventHeader\" class=\"docClass\">preventHeader</a> is set to <code>true</code>.</p>\n"
      },
      {
        "shortDoc": "true to allow expanding and collapsing the panel (when collapsible = true)\nby clicking anywhere in the header bar, fa...",
        "type": "Boolean",
        "href": "Panel2.html#Ext-panel-Panel-cfg-titleCollapse",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 148,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "titleCollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to allow expanding and collapsing the panel (when <code><a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> = true</code>)\nby clicking anywhere in the header bar, <code>false</code>) to allow it only by clicking to tool button\n(defaults to <code>false</code>)).</p>\n"
      },
      {
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 202,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.window.MessageBox-method-toFront\" rel=\"Ext.window.MessageBox-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n"
      },
      {
        "shortDoc": "An array of Ext.panel.Tool configs/instances to be added to the header tool area. ...",
        "type": "Array",
        "href": "Panel2.html#Ext-panel-Panel-cfg-tools",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 279,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "tools",
        "owner": "Ext.panel.Panel",
        "doc": "<p>An array of <a href=\"#/api/Ext.panel.Tool\" rel=\"Ext.panel.Tool\" class=\"docClass\">Ext.panel.Tool</a> configs/instances to be added to the header tool area. The tools are stored as child\ncomponents of the header container. They can be accessed using <a href=\"#/api/Ext.window.MessageBox-method-down\" rel=\"Ext.window.MessageBox-method-down\" class=\"docClass\">down</a> and {#query}, as well as the other\ncomponent methods. The toggle tool is automatically created if <a href=\"#/api/Ext.window.MessageBox-cfg-collapsible\" rel=\"Ext.window.MessageBox-cfg-collapsible\" class=\"docClass\">collapsible</a> is set to true.</p>\n\n<p>Note that, apart from the toggle tool which is provided when a panel is collapsible, these\ntools only provide the visual button. Any required functionality must be provided by adding\nhandlers that implement the necessary behavior.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>tools:[{\n    type:'refresh',\n    tooltip: 'Refresh form Data',\n    // hidden:true,\n    handler: function(event, toolEl, panel){\n        // refresh logic\n    }\n},\n{\n    type:'help',\n    tooltip: 'Get Help',\n    handler: function(event, toolEl, panel){\n        // show help here\n    }\n}]\n</code></pre>\n\n"
      },
      {
        "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 252,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.window.MessageBox-cfg-data\" rel=\"Ext.window.MessageBox-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.window.MessageBox-cfg-tplWriteMode\" rel=\"Ext.window.MessageBox-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n"
      },
      {
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 317,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n"
      },
      {
        "shortDoc": "A set style for a component. ...",
        "type": "String/Array",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 359,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n"
      },
      {
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 401,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The width of this component in pixels.</p>\n"
      },
      {
        "shortDoc": "The X position of the left edge of the window on initial showing. ...",
        "type": "Number",
        "href": "Window.html#Ext-window-Window-cfg-x",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 39,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "x",
        "owner": "Ext.window.Window",
        "doc": "<p>The X position of the left edge of the window on initial showing. Defaults to centering the Window within\nthe width of the Window's container {@link <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> Element) (The Element that the Window is rendered to).</p>\n"
      },
      {
        "shortDoc": "The xtype configuration option can be used to optimize\nComponent creation and rendering. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-xtype",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 266,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "xtype",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <code>xtype</code> configuration option can be used to optimize\nComponent creation and rendering. It serves as a shortcut to the full componet\nname. For example, the component <code>Ext.button.Button</code> has an xtype of <code>button</code>.</p>\n\n<p>You can define your own xtype on a custom <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a> by\nspecifying the <a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a> config option with a prefix of\n<code>widget</code>. For example:</p>\n\n<pre><code>Ext.define({\n    extend: 'Ext.button.Button',\n    alias: 'widget.pressmebutton',\n    text: 'Press Me'\n})\n</code></pre>\n\n<p>Any Component can be created implicitly\nas an object config with an xtype specified, allowing it to be declared and\npassed into the rendering pipeline without actually being instantiated as\nan object. Not only is rendering deferred, but the actual creation of the\nobject itself is also deferred, saving memory and resources until they are\nactually needed. In complex, nested layouts containing many Components,\nthis can make a noticeable improvement in performance.</p>\n\n<pre><code>// Explicit creation of contained Components:\nvar panel = new Ext.Panel({\n   ...\n   items: [\n      Ext.create('Ext.button.Button', {\n         text: 'OK'\n      })\n   ]\n};\n\n// Implicit creation using xtype:\nvar panel = new Ext.Panel({\n   ...\n   items: [{\n      xtype: 'button',\n      text: 'OK'\n   }]\n};\n</code></pre>\n\n<p>In the first example, the button will always be created immediately\nduring the panel's initialization. With many added Components, this\napproach could potentially slow the rendering of the page. In the\nsecond example, the button will not be created or rendered until the\npanel is actually displayed in the browser. If the panel is never\ndisplayed (for example, if it is a tab that remains hidden) then the\nbutton will never be created and will never consume any resources whatsoever.</p>\n"
      },
      {
        "shortDoc": "The Y position of the top edge of the window on initial showing. ...",
        "type": "Number",
        "href": "Window.html#Ext-window-Window-cfg-y",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 44,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "y",
        "owner": "Ext.window.Window",
        "doc": "<p>The Y position of the top edge of the window on initial showing. Defaults to centering the Window within\nthe height of the Window's container {@link <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> Element) (The Element that the Window is rendered to).</p>\n"
      }
    ],
    "event": [
      {
        "shortDoc": "Fires after the window has been visually activated via setActive. ...",
        "params": [
          {
            "type": "Ext.window.Window",
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
        "href": "Window.html#Ext-window-Window-event-activate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 208,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "activate",
        "owner": "Ext.window.Window",
        "doc": "<p>Fires after the window has been visually activated via <a href=\"#/api/Ext.window.MessageBox-method-setActive\" rel=\"Ext.window.MessageBox-method-setActive\" class=\"docClass\">setActive</a>.</p>\n"
      },
      {
        "shortDoc": "@bubbles\nFires after any Ext.Component is added or inserted into the container. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component that was added</p>\n",
            "name": "component"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the component was added to the container's items collection</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-add",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 223,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "add",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>@bubbles\nFires after any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is added or inserted into the container.</p>\n"
      },
      {
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Parent Container</p>\n",
            "name": "container"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>position of Component</p>\n",
            "name": "pos"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 644,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n"
      },
      {
        "shortDoc": "Fires when the components in this container are arranged by the associated layout manager. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "ContainerLayout",
            "optional": false,
            "doc": "<p>The ContainerLayout implementation for this container</p>\n",
            "name": "layout"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-afterlayout",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 199,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "afterlayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires when the components in this container are arranged by the associated layout manager.</p>\n"
      },
      {
        "shortDoc": "Fires after the component rendering is finished. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 711,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.window.MessageBox-property-rendered\" rel=\"Ext.window.MessageBox-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n"
      },
      {
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 616,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n"
      },
      {
        "shortDoc": "Fires before any Ext.Component is added or inserted into the container. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component being added</p>\n",
            "name": "component"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the component will be added to the container's items collection</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-beforeadd",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 206,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "beforeadd",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires before any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is added or inserted into the container.\nA handler can return false to cancel the add.</p>\n"
      },
      {
        "shortDoc": "Fires before this container switches the active card. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that will be switched to</p>\n",
            "name": "newCard"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that will be switched from</p>\n",
            "name": "oldCard"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the card that will be switched to</p>\n",
            "name": "index"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if this cardswitch will be animated</p>\n",
            "name": "animated"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-beforecardswitch",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 240,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "beforecardswitch",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires before this container switches the active card. This event\nis only available if this container uses a CardLayout. Note that\nTabPanel and Carousel both get a CardLayout by default, so both\nwill have this event.\nA handler can return false to cancel the card switch.</p>\n"
      },
      {
        "shortDoc": "Fires before the user closes the panel. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel object</p>\n",
            "name": "panel"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-beforeclose",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 325,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "beforeclose",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires before the user closes the panel. Return\nfalse from any listener to stop the close event being fired</p>\n"
      },
      {
        "shortDoc": "Fires before this panel is collapsed. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel being collapsed.</p>\n",
            "name": "p"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>. The direction of the collapse. One of<ul>\n<li>Ext.Component.DIRECTION_TOP</li>\n<li>Ext.Component.DIRECTION_RIGHT</li>\n<li>Ext.Component.DIRECTION_BOTTOM</li>\n<li>Ext.Component.DIRECTION_LEFT</li></ul></p>\n",
            "name": "direction"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the collapse is animated, else false.</p>\n",
            "name": "animate"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-beforecollapse",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 341,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "beforecollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires before this panel is collapsed. Return false to prevent the collapse.</p>\n"
      },
      {
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 630,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is destroyed. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 719,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.window.MessageBox-event-destroy\" rel=\"Ext.window.MessageBox-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.window.MessageBox-event-destroy\" rel=\"Ext.window.MessageBox-event-destroy\" class=\"docClass\">destroy</a>.</p>\n"
      },
      {
        "shortDoc": "Fires before this panel is expanded. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel being expanded.</p>\n",
            "name": "p"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the expand is animated, else false.</p>\n",
            "name": "animate"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-beforeexpand",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 333,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "beforeexpand",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires before this panel is expanded. Return false to prevent the expand.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 677,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.window.MessageBox-event-hide\" rel=\"Ext.window.MessageBox-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n"
      },
      {
        "shortDoc": "Fires before any Ext.Component is removed from the container. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component being removed</p>\n",
            "name": "component"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-beforeremove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 215,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "beforeremove",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires before any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is removed from the container.  A handler can return\nfalse to cancel the remove.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is rendered. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 698,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.window.MessageBox-property-rendered\" rel=\"Ext.window.MessageBox-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.window.MessageBox-event-render\" rel=\"Ext.window.MessageBox-event-render\" class=\"docClass\">render</a>.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 664,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n"
      },
      {
        "shortDoc": "Fires before the state of the object is restored. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 101,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n"
      },
      {
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 122,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n"
      },
      {
        "shortDoc": "Fires after the Panel has been resized. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>the Panel which has been resized.</p>\n",
            "name": "p"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The Panel body's new width.</p>\n",
            "name": "width"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The Panel body's new height.</p>\n",
            "name": "height"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-event-bodyresize",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractPanel.html",
        "linenr": 121,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "name": "bodyresize",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Fires after the Panel has been resized.</p>\n"
      },
      {
        "shortDoc": "Fires after this container switches the active card. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that has been switched to</p>\n",
            "name": "newCard"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that has been switched from</p>\n",
            "name": "oldCard"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the card that has been switched to</p>\n",
            "name": "index"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if this cardswitch was animated</p>\n",
            "name": "animated"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-cardswitch",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 254,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "cardswitch",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires after this container switches the active card. If the card\nis switched using an animation, this event will fire after the\nanimation has finished. This event is only available if this container\nuses a CardLayout. Note that TabPanel and Carousel both get a CardLayout\nby default, so both will have this event.</p>\n"
      },
      {
        "shortDoc": "Fires after this Panel hass collapsed. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel that has been collapsed.</p>\n",
            "name": "p"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-collapse",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 361,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "collapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after this Panel hass collapsed.</p>\n"
      },
      {
        "shortDoc": "Fires after the window has been visually deactivated via setActive. ...",
        "params": [
          {
            "type": "Ext.window.Window",
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
        "href": "Window.html#Ext-window-Window-event-deactivate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 213,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "deactivate",
        "owner": "Ext.window.Window",
        "doc": "<p>Fires after the window has been visually deactivated via <a href=\"#/api/Ext.window.MessageBox-method-setActive\" rel=\"Ext.window.MessageBox-method-setActive\" class=\"docClass\">setActive</a>.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is destroyed. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 725,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.window.MessageBox-event-destroy\" rel=\"Ext.window.MessageBox-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is disabled. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 652,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is disabled.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is enabled. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is enabled.</p>\n"
      },
      {
        "shortDoc": "Fires after this Panel has expanded. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel that has been expanded.</p>\n",
            "name": "p"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-expand",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 354,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "expand",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after this Panel has expanded.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is hidden. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 684,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.window.MessageBox-event-hide\" rel=\"Ext.window.MessageBox-event-hide\" class=\"docClass\">hide</a> method.</p>\n"
      },
      {
        "shortDoc": "Fires after the Panel iconCls has been set or changed. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>the Panel which has been resized.</p>\n",
            "name": "p"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new iconCls.</p>\n",
            "name": "newIconCls"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The previous panel iconCls.</p>\n",
            "name": "oldIconCls"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-iconchange",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 377,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "iconchange",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after the Panel iconCls has been set or changed.</p>\n"
      },
      {
        "shortDoc": "Fires after the window has been maximized. ...",
        "params": [
          {
            "type": "Ext.window.Window",
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
        "href": "Window.html#Ext-window-Window-event-maximize",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 226,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "maximize",
        "owner": "Ext.window.Window",
        "doc": "<p>Fires after the window has been maximized.</p>\n"
      },
      {
        "shortDoc": "Fires after the window has been minimized. ...",
        "params": [
          {
            "type": "Ext.window.Window",
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
        "href": "Window.html#Ext-window-Window-event-minimize",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 232,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "minimize",
        "owner": "Ext.window.Window",
        "doc": "<p>Fires after the window has been minimized.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is moved. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 739,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is moved.</p>\n"
      },
      {
        "shortDoc": "@bubbles\nFires after any Ext.Component is removed from the container. ...",
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component that was removed</p>\n",
            "name": "component"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-remove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer2.html",
        "linenr": 232,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "name": "remove",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>@bubbles\nFires after any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is removed from the container.</p>\n"
      },
      {
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Container which holds the component</p>\n",
            "name": "ownerCt"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 691,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n"
      },
      {
        "shortDoc": "Fires after the component markup is rendered. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 705,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.window.MessageBox-property-rendered\" rel=\"Ext.window.MessageBox-property-rendered\" class=\"docClass\">rendered</a>.</p>\n"
      },
      {
        "shortDoc": "Fires after the window has been resized. ...",
        "params": [
          {
            "type": "Ext.window.Window",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The window's new width</p>\n",
            "name": "width"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The window's new height</p>\n",
            "name": "height"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Window.html#Ext-window-Window-event-resize",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 218,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "resize",
        "owner": "Ext.window.Window",
        "doc": "<p>Fires after the window has been resized.</p>\n"
      },
      {
        "shortDoc": "Fires after the window has been restored to its original size after being maximized. ...",
        "params": [
          {
            "type": "Ext.window.Window",
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
        "href": "Window.html#Ext-window-Window-event-restore",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Window.html",
        "linenr": 238,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/Window.js",
        "private": false,
        "name": "restore",
        "owner": "Ext.window.Window",
        "doc": "<p>Fires after the window has been restored to its original size after being maximized.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "params": [
          {
            "type": "Ext.Component",
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 671,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> method.</p>\n"
      },
      {
        "shortDoc": "Fires after the state of the object is restored. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 112,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is restored.</p>\n"
      },
      {
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 133,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n"
      },
      {
        "shortDoc": "Fires after the Panel title has been set or changed. ...",
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>the Panel which has been resized.</p>\n",
            "name": "p"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new title.</p>\n",
            "name": "newTitle"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The previous panel title.</p>\n",
            "name": "oldTitle"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-titlechange",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Panel2.html",
        "linenr": 368,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "name": "titlechange",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after the Panel title has been set or changed.</p>\n"
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
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "html_filename": "MessageBox.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/window/MessageBox.js",
  "private": false,
  "xtypes": [
    "messagebox"
  ],
  "name": "Ext.window.MessageBox",
  "doc": "<p>Utility class for generating different styles of message boxes.  The singleton instance, <a href=\"#/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a>\nalias <code>Ext.Msg</code> can also be used.</p>\n\n<p>Note that a MessageBox is asynchronous.  Unlike a regular JavaScript <code>alert</code> (which will halt\nbrowser execution), showing a MessageBox will not cause the code to stop.  For this reason, if you have code\nthat should only run <em>after</em> some user feedback from the MessageBox, you must use a callback function\n(see the <code>function</code> parameter for <a href=\"#/api/Ext.window.MessageBox-event-show\" rel=\"Ext.window.MessageBox-event-show\" class=\"docClass\">show</a> for more details).</p>\n\n<p><p><img src=\"doc-resources/Ext.window.MessageBox/messagebox1.png\" alt=\"alert MessageBox\"></p>\n<p><img src=\"doc-resources/Ext.window.MessageBox/messagebox2.png\" alt=\"prompt MessageBox\"></p>\n<p><img src=\"doc-resources/Ext.window.MessageBox/messagebox3.png\" alt=\"show MessageBox\"></p></p>\n\n<h1>Example usage:</h1>\n\n<pre><code>// Basic alert:\nExt.Msg.alert('Status', 'Changes saved successfully.');\n\n// Prompt for user data and process the result using a callback:\nExt.Msg.prompt('Name', 'Please enter your name:', function(btn, text){\n    if (btn == 'ok'){\n        // process text value and close...\n    }\n});\n\n// Show a dialog using config options:\nExt.Msg.show({\n     title:'Save Changes?',\n     msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',\n     buttons: Ext.Msg.YESNOCANCEL,\n     fn: processResult,\n     animateTarget: 'elId',\n     icon: Ext.Msg.QUESTION\n});\n</code></pre>\n",
  "extends": "Ext.window.Window",
  "docauthor": null
});