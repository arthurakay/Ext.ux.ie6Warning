Ext.data.JsonP.Ext({
  "href": "Ext.html#Ext",
  "component": false,
  "singleton": true,
  "code_type": "nop",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Applies event listeners to elements by selectors when the document is ready. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The list of behaviors to apply</p>\n",
            "name": "obj"
          }
        ],
        "href": "Ext-more.html#Ext-method-addBehaviors",
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
        "html_filename": "Ext-more.html",
        "linenr": 695,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "addBehaviors",
        "owner": "Ext",
        "doc": "<p>Applies event listeners to elements by selectors when the document is ready.\nThe event name is specified with an <tt>&#64;</tt> suffix.</p>\n\n<pre><code>Ext.addBehaviors({\n    // add a listener for click on all anchors in element with id foo\n    '#foo a&#64;click' : function(e, t){\n        // do something\n    },\n\n    // add the same listener to multiple selectors (separated by comma BEFORE the &#64;)\n    '#foo a, #bar span.some-class&#64;mouseover' : function(){\n        // do something\n    }\n});\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Loads Ext.app.Application class and starts it up with given configuration after the page is ready. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Ext-more.html#Ext-method-application",
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
        "html_filename": "Ext-more.html",
        "linenr": 1002,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "application",
        "owner": "Ext",
        "doc": "<p>Loads <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> class and starts it up with given configuration after the page is ready.</p>\n\n<p>See <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> for details.</p>\n"
      },
      {
        "shortDoc": "Copies all the properties of config to the specified object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The receiver of the properties</p>\n",
            "name": "object"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The source of the properties</p>\n",
            "name": "config"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A different object that will also be applied for default values</p>\n",
            "name": "defaults"
          }
        ],
        "href": "Ext.html#Ext-method-apply",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>returns obj</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 34,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "apply",
        "owner": "Ext",
        "doc": "<p>Copies all the properties of config to the specified object.\nNote that if recursive merging and cloning without referencing the original objects / arrays is needed, use\n<a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a> instead.</p>\n"
      },
      {
        "shortDoc": "Copies all the properties of config to object if they don't already exist. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The receiver of the properties</p>\n",
            "name": "object"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The source of the properties</p>\n",
            "name": "config"
          }
        ],
        "href": "Ext.html#Ext-method-applyIf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>returns obj</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 81,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "applyIf",
        "owner": "Ext",
        "doc": "<p>Copies all the properties of config to object if they don't already exist.</p>\n"
      },
      {
        "shortDoc": "Create a new function from the provided fn, change this to the provided scope, optionally\noverrides arguments for the...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to delegate.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "name": "args"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
            "name": "appendArgs"
          }
        ],
        "href": "Function.html#Ext-method-bind",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "bind",
          "tagname": "alias",
          "cls": "Ext.Function",
          "doc": null
        },
        "return": {
          "type": "Function",
          "doc": "<p>The new function</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Function.html",
        "linenr": 371,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "name": "bind",
        "owner": "Ext",
        "doc": "<p>Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally\noverrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n\n<p><a href=\"#/api/Ext-method-bind\" rel=\"Ext-method-bind\" class=\"docClass\">Ext.bind</a> is alias for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n"
      },
      {
        "shortDoc": "Execute a callback function in a particular scope. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback to execute</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope to execute in</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The arguments to pass to the function</p>\n",
            "name": "args"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Pass a number to delay the call by a number of milliseconds.</p>\n",
            "name": "delay"
          }
        ],
        "href": "Ext-more.html#Ext-method-callback",
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
        "html_filename": "Ext-more.html",
        "linenr": 167,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "callback",
        "owner": "Ext",
        "doc": "<p>Execute a callback function in a particular scope. If no function is passed the call is ignored.</p>\n\n<p>For example, these lines are equivalent:</p>\n\n<pre><code>Ext.callback(myFunc, this, [arg1, arg2]);\nExt.isFunction(myFunc) &amp;&amp; myFunc.apply(this, [arg1, arg2]);\n</code></pre>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.clean\n\nFilter through an array and remove empty item as defined in Ext.isEmpty\n\nSee Ext.Array....",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          }
        ],
        "href": "Array2.html#Ext-method-clean",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "clean",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Array",
          "doc": "<p>results</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1034,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "clean",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a></p>\n\n<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\">Ext.Array.filter</a></p>\n"
      },
      {
        "shortDoc": "Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The variable to clone</p>\n",
            "name": "item"
          }
        ],
        "href": "Ext.html#Ext-method-clone",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>clone</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 485,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "clone",
        "owner": "Ext",
        "doc": "<p>Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference</p>\n"
      },
      {
        "shortDoc": "Copies a set of named properties fom the source object to the destination object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The destination object.</p>\n",
            "name": "dest"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The source object.</p>\n",
            "name": "source"
          },
          {
            "type": "Array/String",
            "optional": false,
            "doc": "<p>Either an Array of property names, or a comma-delimited list\nof property names to copy.</p>\n",
            "name": "names"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) Defaults to false. Pass true to copy keys off of the prototype as well as the instance.</p>\n",
            "name": "usePrototypeKeys"
          }
        ],
        "href": "Ext-more.html#Ext-method-copyTo",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The modified object.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 785,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "copyTo",
        "owner": "Ext",
        "doc": "<p>Copies a set of named properties fom the source object to the destination object.</p>\n\n<p>Example:</p>\n\n<pre><code>ImageComponent = Ext.extend(Ext.Component, {\n    initComponent: function() {\n        this.autoEl = { tag: 'img' };\n        MyComponent.superclass.initComponent.apply(this, arguments);\n        this.initialBox = Ext.copyTo({}, this.initialConfig, 'x,y,width,height');\n    }\n});\n</code></pre>\n\n<p>Important note: To borrow class prototype methods, use <a href=\"#/api/Ext.Base-method-borrow\" rel=\"Ext.Base-method-borrow\" class=\"docClass\">Ext.Base.borrow</a> instead.</p>\n"
      },
      {
        "shortDoc": "Instantiate a class by either full name, alias or alternate name. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>,... Additional arguments after the name will be passed to the class' constructor.</p>\n",
            "name": "args"
          }
        ],
        "href": "ClassManager.html#Ext-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "instantiate",
          "tagname": "alias",
          "cls": "Ext.ClassManager",
          "doc": null
        },
        "return": {
          "type": "Object",
          "doc": "<p>instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 973,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "create",
        "owner": "Ext",
        "doc": "<p>Instantiate a class by either full name, alias or alternate name.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a>.</p>\n"
      },
      {
        "shortDoc": "Instantiate a class by its alias. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "alias"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>,... Additional arguments after the alias will be passed to the\nclass constructor.</p>\n",
            "name": "args"
          }
        ],
        "href": "ClassManager.html#Ext-method-createByAlias",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "instantiateByAlias",
          "tagname": "alias",
          "cls": "Ext.ClassManager",
          "doc": null
        },
        "return": {
          "type": "Object",
          "doc": "<p>instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1044,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "createByAlias",
        "owner": "Ext",
        "doc": "<p>Instantiate a class by its alias.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a>.</p>\n"
      },
      {
        "shortDoc": "Old name for widget. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>xtype of the widget to create.</p>\n",
            "name": "name"
          }
        ],
        "href": "ClassManager.html#Ext-method-createWidget",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">widget</a> instead.</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "widget",
          "tagname": "alias",
          "cls": "Ext",
          "doc": null
        },
        "return": {
          "type": "Object",
          "doc": "<p>widget instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1115,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "createWidget",
        "owner": "Ext",
        "doc": "<p>Old name for <a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">widget</a>.</p>\n\n<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n"
      },
      {
        "shortDoc": "Shorthand for Ext.JSON.decode ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The JSON string</p>\n",
            "name": "json"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
            "name": "safe"
          }
        ],
        "href": "JSON3.html#Ext-method-decode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The resulting object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "JSON3.html",
        "linenr": 166,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "name": "decode",
        "owner": "Ext",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-decode\" rel=\"Ext.JSON-method-decode\" class=\"docClass\">Ext.JSON.decode</a></p>\n"
      },
      {
        "shortDoc": "Calls this function after the number of millseconds specified, optionally in a specific scope. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to defer.</p>\n",
            "name": "fn"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of milliseconds for the setTimeout call\n(if less than or equal to 0 the function is executed immediately)</p>\n",
            "name": "millis"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "name": "args"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
            "name": "appendArgs"
          }
        ],
        "href": "Function.html#Ext-method-defer",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "defer",
          "tagname": "alias",
          "cls": "Ext.Function",
          "doc": null
        },
        "return": {
          "type": "Number",
          "doc": "<p>The timeout id that can be used with clearTimeout</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Function.html",
        "linenr": 357,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "name": "defer",
        "owner": "Ext",
        "doc": "<p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a> is alias for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n"
      },
      {
        "shortDoc": "Defines a class. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The class name to create in string dot-namespaced format, for example:\n'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager'\nIt is highly recommended to follow this simple convention:</p>\n\n<ul>\n<li>The root and the class name are 'CamelCased'</li>\n<li>Everything else is lower-cased</li>\n</ul>\n\n",
            "name": "className"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The key - value pairs of properties to apply to this class. Property names can be of any valid\nstrings, except those in the reserved list below:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alternateClassName\" rel=\"Ext.Class-cfg-alternateClassName\" class=\"docClass\">alternateClassName</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-config\" rel=\"Ext.Class-cfg-config\" class=\"docClass\">config</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-extend\" rel=\"Ext.Class-cfg-extend\" class=\"docClass\">extend</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-inheritableStatics\" rel=\"Ext.Class-cfg-inheritableStatics\" class=\"docClass\">inheritableStatics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-mixins\" rel=\"Ext.Class-cfg-mixins\" class=\"docClass\">mixins</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-requires\" rel=\"Ext.Class-cfg-requires\" class=\"docClass\">requires</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-singleton\" rel=\"Ext.Class-cfg-singleton\" class=\"docClass\">singleton</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-uses\" rel=\"Ext.Class-cfg-uses\" class=\"docClass\">uses</a></li>\n</ul>\n\n",
            "name": "data"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional callback to execute after the class is created, the execution scope of which\n(<code>this</code>) will be the newly created class itself.</p>\n",
            "name": "createdFn"
          }
        ],
        "href": "ClassManager.html#Ext-method-define",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "create",
          "tagname": "alias",
          "cls": "Ext.ClassManager",
          "doc": null
        },
        "return": {
          "type": "Ext.Base",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1051,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "define",
        "owner": "Ext",
        "doc": "<p>Defines a class.</p>\n\n<pre><code>Ext.ClassManager.create('My.awesome.Class', {\n    someProperty: 'something',\n    someMethod: function() { ... }\n    ...\n\n}, function() {\n    alert('Created!');\n    alert(this === My.awesome.Class); // alerts true\n\n    var myInstance = new this();\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> is alias for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>.</p>\n"
      },
      {
        "shortDoc": "Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicab...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>An <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, or an Array of either of these to destroy</p>\n",
            "name": "arg1"
          },
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional)</p>\n",
            "name": "arg2"
          },
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>... (optional)</p>\n",
            "name": "etc"
          }
        ],
        "href": "Ext-more.html#Ext-method-destroy",
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
        "html_filename": "Ext-more.html",
        "linenr": 137,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext",
        "doc": "<p>Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicable) and calling their destroy functions (if available).  This method is primarily\nintended for arguments of type <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> and <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, but any subclass of\n<a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> can be passed in.  Any number of elements and/or components can be\npassed into this function in a single call as separate arguments.</p>\n"
      },
      {
        "shortDoc": "Attempts to destroy and then remove a set of named properties of the passed object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object (most likely a Component) who's properties you wish to destroy.</p>\n",
            "name": "o"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The name of the property to destroy and remove from the object.</p>\n",
            "name": "arg1"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>... More property names to destroy and remove.</p>\n",
            "name": "etc"
          }
        ],
        "href": "Ext-more.html#Ext-method-destroyMembers",
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
        "html_filename": "Ext-more.html",
        "linenr": 819,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "destroyMembers",
        "owner": "Ext",
        "doc": "<p>Attempts to destroy and then remove a set of named properties of the passed object.</p>\n"
      },
      {
        "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item. ...",
        "params": [
          {
            "type": "Array/NodeList/Mixed",
            "optional": false,
            "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n",
            "name": "iterable"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>. Arguments passed to this callback function are:</p>\n\n<ul>\n<li><code>item</code> : Mixed - The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code> : Number - The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code> : Array/NodeList/Mixed - The <code>array</code> passed as the first argument to <code>Ext.Array.each</code></li>\n</ul>\n\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n",
            "name": "reverse"
          }
        ],
        "href": "Array2.html#Ext-method-each",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "each",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Boolean",
          "doc": "<p>See description for the <code>fn</code> parameter.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 975,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "each",
        "owner": "Ext",
        "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a> is alias for <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n"
      },
      {
        "shortDoc": "A reusable empty function ...",
        "params": [

        ],
        "href": "Ext.html#Ext-method-emptyFn",
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
        "html_filename": "Ext.html",
        "linenr": 74,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "emptyFn",
        "owner": "Ext",
        "doc": "<p>A reusable empty function</p>\n"
      },
      {
        "shortDoc": "Shorthand for Ext.JSON.encode ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The variable to encode</p>\n",
            "name": "o"
          }
        ],
        "href": "JSON3.html#Ext-method-encode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The JSON string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "JSON3.html",
        "linenr": 158,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "name": "encode",
        "owner": "Ext",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-encode\" rel=\"Ext.JSON-method-encode\" class=\"docClass\">Ext.JSON.encode</a></p>\n"
      },
      {
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "str"
          }
        ],
        "href": "Ext-more.html#Ext-method-escapeRe",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.String-method-escapeRegex\" rel=\"Ext.String-method-escapeRegex\" class=\"docClass\">Ext.String.escapeRegex</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 685,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "escapeRe",
        "owner": "Ext",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n"
      },
      {
        "shortDoc": "Explicitly exclude files from being loaded. ...",
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "\n",
            "name": "excludes"
          }
        ],
        "href": "Loader.html#Ext-method-exclude",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "exclude",
          "tagname": "alias",
          "cls": "Ext.Loader",
          "doc": null
        },
        "return": {
          "type": "Object",
          "doc": "<p>object contains <code>require</code> method for chaining</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Loader.html",
        "linenr": 955,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "name": "exclude",
        "owner": "Ext",
        "doc": "<p>Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be chained with more <code>require</code> and <code>exclude</code> methods, e.g.:</p>\n\n<pre><code>Ext.exclude('Ext.data.*').require('*');\n\nExt.exclude('widget.button*').require('widget.*');\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-exclude\" rel=\"Ext-method-exclude\" class=\"docClass\">Ext.exclude</a> is alias for <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a> for convenience.</p>\n"
      },
      {
        "shortDoc": "This method deprecated. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "\n",
            "name": "superclass"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "overrides"
          }
        ],
        "href": "Ext.html#Ext-method-extend",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Function",
          "doc": "<p>The subclass constructor from the <tt>overrides</tt> parameter, or a generated one if not provided.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 133,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "extend",
        "owner": "Ext",
        "doc": "<p>This method deprecated. Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead.</p>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.flatten\n\nRecursively flattens into 1-d Array. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "array"
          }
        ],
        "href": "Array2.html#Ext-method-flatten",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "flatten",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1025,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "flatten",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a></p>\n\n<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n"
      },
      {
        "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. ...",
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The dom node or id</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts (e.g.\ninternally <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> uses \"_global\")</p>\n",
            "name": "named"
          }
        ],
        "href": "Element2.html#Ext-method-fly",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "fly",
          "tagname": "alias",
          "cls": "Ext.core.Element",
          "doc": null
        },
        "return": {
          "type": "Element",
          "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Element2.html",
        "linenr": 1007,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "name": "fly",
        "owner": "Ext",
        "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference\nto this element - the dom node can be overwritten by other code. <a href=\"#/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">fly</a> is alias for\n<a href=\"#/api/Ext.core.Element-method-fly\" rel=\"Ext.core.Element-method-fly\" class=\"docClass\">Ext.core.Element.fly</a>.</p>\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> will be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>\nclass.</p>\n"
      },
      {
        "shortDoc": "Retrieves Ext.core.Element objects. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n",
            "name": "el"
          }
        ],
        "href": "Element2.html#Ext-method-get",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "get",
          "tagname": "alias",
          "cls": "Ext.core.Element",
          "doc": null
        },
        "return": {
          "type": "Element",
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Element2.html",
        "linenr": 1000,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "name": "get",
        "owner": "Ext",
        "doc": "<p>Retrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects. <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">get</a> is alias for <a href=\"#/api/Ext.core.Element-method-get\" rel=\"Ext.core.Element-method-get\" class=\"docClass\">Ext.core.Element.get</a>.</p>\n\n<p><strong>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</strong> This method retrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>\nobjects which encapsulate DOM elements. To retrieve a Component by its ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an object was recreated with\nthe same id via AJAX or DOM.</p>\n"
      },
      {
        "shortDoc": "Returns the current document body as an Ext.core.Element. ...",
        "params": [

        ],
        "href": "Ext-more.html#Ext-method-getBody",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.core.Element The document body</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 85,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getBody",
        "owner": "Ext",
        "doc": "<p>Returns the current document body as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n"
      },
      {
        "shortDoc": "Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "ClassManager.html#Ext-method-getClass",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "getClass",
          "tagname": "alias",
          "cls": "Ext.ClassManager",
          "doc": null
        },
        "return": {
          "type": "Class",
          "doc": "<p>class</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1085,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getClass",
        "owner": "Ext",
        "doc": "<p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define.</p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a>.</p>\n"
      },
      {
        "shortDoc": "Get the name of the class by its reference or its instance. ...",
        "params": [
          {
            "type": "Class/Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "ClassManager.html#Ext-method-getClassName",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "getName",
          "tagname": "alias",
          "cls": "Ext.ClassManager",
          "doc": null
        },
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1058,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "getClassName",
        "owner": "Ext",
        "doc": "<p>Get the name of the class by its reference or its instance.</p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getName\" rel=\"Ext.ClassManager-method-getName\" class=\"docClass\">Ext.ClassManager.getName</a>.</p>\n"
      },
      {
        "shortDoc": "This is shorthand reference to Ext.ComponentManager.get. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n",
            "name": "id"
          }
        ],
        "href": "Ext-more.html#Ext-method-getCmp",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.Component The Component, <tt>undefined</tt> if not found, or <tt>null</tt> if a\nClass was found.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 118,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getCmp",
        "owner": "Ext",
        "doc": "<p>This is shorthand reference to <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.\nLooks up an existing <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> by <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n"
      },
      {
        "shortDoc": "Returns the current HTML document object as an Ext.core.Element. ...",
        "params": [

        ],
        "href": "Ext-more.html#Ext-method-getDoc",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.core.Element The document</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 110,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getDoc",
        "owner": "Ext",
        "doc": "<p>Returns the current HTML document object as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n"
      },
      {
        "shortDoc": "Return the dom node for the passed String (id), dom node, or Ext.core.Element. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "el"
          }
        ],
        "href": "Ext-more.html#Ext-method-getDom",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>HTMLElement</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 445,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getDom",
        "owner": "Ext",
        "doc": "<p>Return the dom node for the passed String (id), dom node, or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.\nOptional 'strict' flag is needed for IE since it can return 'name' and\n'id' elements by using getElementById.\nHere are some examples:</p>\n\n<pre><code>// gets dom node based on id\nvar elDom = Ext.getDom('elId');\n// gets dom node based on the dom node\nvar elDom1 = Ext.getDom(elDom);\n\n// If we don&#39;t know if we are working with an\n// <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> or a dom node use Ext.getDom\nfunction(el){\n    var dom = Ext.getDom(el);\n    // do something with the dom node\n}\n</code></pre>\n\n\n<p><b>Note</b>: the dom node to be found actually needs to exist (be rendered, etc)\nwhen this method is called to be successful.</p>\n"
      },
      {
        "shortDoc": "Returns the current document head as an Ext.core.Element. ...",
        "params": [

        ],
        "href": "Ext-more.html#Ext-method-getHead",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Ext.core.Element The document head</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 93,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getHead",
        "owner": "Ext",
        "doc": "<p>Returns the current document head as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n"
      },
      {
        "shortDoc": "Returns the current orientation of the mobile device ...",
        "params": [

        ],
        "href": "Ext-more.html#Ext-method-getOrientation",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>Either 'portrait' or 'landscape'</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 129,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getOrientation",
        "owner": "Ext",
        "doc": "<p>Returns the current orientation of the mobile device</p>\n"
      },
      {
        "shortDoc": "Utility method for getting the width of the browser's vertical scrollbar. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to force a recalculation of the value.</p>\n",
            "name": "force"
          }
        ],
        "href": "Ext-more.html#Ext-method-getScrollBarWidth",
        "deprecated": {
          "version": null,
          "tagname": "deprecated",
          "text": "\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The width of a vertical scrollbar.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 770,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getScrollBarWidth",
        "owner": "Ext",
        "doc": "<p>Utility method for getting the width of the browser's vertical scrollbar. This\ncan differ depending on operating system settings, such as the theme or font size.</p>\n\n<p>This method is deprected in favor of <a href=\"#/api/Ext-method-getScrollbarSize\" rel=\"Ext-method-getScrollbarSize\" class=\"docClass\">getScrollbarSize</a>.</p>\n"
      },
      {
        "shortDoc": "Returns the size of the browser scrollbars. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to force a recalculation of the value.</p>\n",
            "name": "force"
          }
        ],
        "href": "Ext-more.html#Ext-method-getScrollbarSize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the width of a vertical scrollbar and the\nheight of a horizontal scrollbar.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 736,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "getScrollbarSize",
        "owner": "Ext",
        "doc": "<p>Returns the size of the browser scrollbars. This can differ depending on\noperating system settings, such as the theme or font size.</p>\n"
      },
      {
        "shortDoc": "Gets a registered Store by id (shortcut to Ext.data.StoreManager.lookup) ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The id of the Store, or a Store instance</p>\n",
            "name": "id"
          }
        ],
        "href": "StoreManager.html#Ext-method-getStore",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Store",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "StoreManager.html",
        "linenr": 155,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/StoreManager.js",
        "private": false,
        "name": "getStore",
        "owner": "Ext",
        "doc": "<p>Gets a registered Store by id (shortcut to <a href=\"#/api/Ext.data.StoreManager-method-lookup\" rel=\"Ext.data.StoreManager-method-lookup\" class=\"docClass\">Ext.data.StoreManager.lookup</a>)</p>\n"
      },
      {
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to decode</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext-more.html#Ext-method-htmlDecode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The decoded text</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 201,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "htmlDecode",
        "owner": "Ext",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n"
      },
      {
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to encode</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext-more.html#Ext-method-htmlEncode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The encoded text</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 192,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "htmlEncode",
        "owner": "Ext",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n"
      },
      {
        "shortDoc": "Generates unique ids. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional) The element to generate an id for</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Id prefix (defaults \"ext-gen\")</p>\n",
            "name": "prefix"
          }
        ],
        "href": "Ext-more.html#Ext-method-id",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The generated Id.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 57,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "id",
        "owner": "Ext",
        "doc": "<p>Generates unique ids. If the element already has an id, it is unchanged</p>\n"
      },
      {
        "shortDoc": "Invokes a method on each item in an Array. ...",
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array of items to invoke the method on.</p>\n",
            "name": "arr"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The method name to invoke.</p>\n",
            "name": "methodName"
          },
          {
            "type": "...*",
            "optional": false,
            "doc": "<p>Arguments to send into the method invocation.</p>\n",
            "name": "args"
          }
        ],
        "href": "Ext-more.html#Ext-method-invoke",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Will be removed in the next major version</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>The results of invoking the method on each item in the array.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 905,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "invoke",
        "owner": "Ext",
        "doc": "<p>Invokes a method on each item in an Array.</p>\n\n<pre><code>// Example:\nExt.invoke(Ext.query(\"p\"), \"getAttribute\", \"id\");\n// [el1.getAttribute(\"id\"), el2.getAttribute(\"id\"), ..., elN.getAttribute(\"id\")]\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a JavaScript Array, false otherwise. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The target to test</p>\n",
            "name": "target"
          }
        ],
        "href": "Ext.html#Ext-method-isArray",
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
        "html_filename": "Ext.html",
        "linenr": 348,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isArray",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a JavaScript Array, false otherwise.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a boolean. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isBoolean",
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
        "html_filename": "Ext.html",
        "linenr": 436,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isBoolean",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a boolean.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a JavaScript Date object, false otherwise. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to test</p>\n",
            "name": "object"
          }
        ],
        "href": "Ext.html#Ext-method-isDate",
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
        "html_filename": "Ext.html",
        "linenr": 359,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isDate",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a JavaScript Date object, false otherwise.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is defined. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isDefined",
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
        "html_filename": "Ext.html",
        "linenr": 464,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isDefined",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is defined.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is an HTMLElement ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isElement",
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
        "html_filename": "Ext.html",
        "linenr": 446,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isElement",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is an HTMLElement</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is empty, false otherwise. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to allow empty strings (defaults to false)</p>\n",
            "name": "allowEmptyString"
          }
        ],
        "href": "Ext.html#Ext-method-isEmpty",
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
        "html_filename": "Ext.html",
        "linenr": 331,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isEmpty",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:</p>\n\n<ul>\n<li><code>null</code></li>\n<li><code>undefined</code></li>\n<li>a zero-length array</li>\n<li>a zero-length string (Unless the <code>allowEmptyString</code> parameter is set to <code>true</code>)</li>\n</ul>\n\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a JavaScript Function, false otherwise. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isFunction",
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
        "html_filename": "Ext.html",
        "linenr": 394,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isFunction",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a JavaScript Function, false otherwise.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is iterable, false otherwise ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isIterable",
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
        "html_filename": "Ext.html",
        "linenr": 473,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isIterable",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is iterable, false otherwise</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a number. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isNumber",
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
        "html_filename": "Ext.html",
        "linenr": 409,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isNumber",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a number. Returns false for non-finite numbers.</p>\n"
      },
      {
        "shortDoc": "Validates that a value is numeric. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Examples: 1, '1', '2.34'</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isNumeric",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if numeric, false otherwise</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 418,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isNumeric",
        "owner": "Ext",
        "doc": "<p>Validates that a value is numeric.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a JavaScript Object, false otherwise. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isObject",
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
        "html_filename": "Ext.html",
        "linenr": 368,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isObject",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a JavaScript Object, false otherwise.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isPrimitive",
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
        "html_filename": "Ext.html",
        "linenr": 383,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isPrimitive",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a string. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isString",
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
        "html_filename": "Ext.html",
        "linenr": 427,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isString",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a string.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed value is a TextNode ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-isTextNode",
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
        "html_filename": "Ext.html",
        "linenr": 455,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "isTextNode",
        "owner": "Ext",
        "doc": "<p>Returns true if the passed value is a TextNode</p>\n"
      },
      {
        "shortDoc": "Iterates either an array or an object. ...",
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The object or array to be iterated.</p>\n",
            "name": "object"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to be called for each iteration. See and <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> and\n<a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> for detailed lists of arguments passed to this function depending on the given object\ntype that is being iterated.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.\nDefaults to the object being iterated itself.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Ext.html#Ext-method-iterate",
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
        "html_filename": "Ext.html",
        "linenr": 101,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "iterate",
        "owner": "Ext",
        "doc": "<p>Iterates either an array or an object. This method delegates to\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> if the given value is iterable, and <a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> otherwise.</p>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.max\n\nReturns the maximum value in the Array. ...",
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array from which to select the maximum value.</p>\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) a function to perform the comparision which determines maximization.\nIf omitted the \">\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "name": "comparisonFn"
          }
        ],
        "href": "Array2.html#Ext-method-max",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "max",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Mixed",
          "doc": "<p>maxValue The maximum value</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 998,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "max",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a></p>\n\n<p>Returns the maximum value in the Array.</p>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.mean\n\nCalculates the mean of all items in the array. ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array to calculate the mean value of.</p>\n",
            "name": "array"
          }
        ],
        "href": "Array2.html#Ext-method-mean",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "mean",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Number",
          "doc": "<p>The mean.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1016,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "mean",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a></p>\n\n<p>Calculates the mean of all items in the array.</p>\n"
      },
      {
        "shortDoc": "A convenient alias method for Ext.Object.merge ...",
        "params": [

        ],
        "href": "Object.html#Ext-method-merge",
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
        "html_filename": "Object.html",
        "linenr": 490,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "merge",
        "owner": "Ext",
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a></p>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.min\n\nReturns the minimum value in the Array. ...",
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array from which to select the minimum value.</p>\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) a function to perform the comparision which determines minimization.\nIf omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "name": "comparisonFn"
          }
        ],
        "href": "Array2.html#Ext-method-min",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "min",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Mixed",
          "doc": "<p>minValue The minimum value</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 989,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "min",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a></p>\n\n<p>Returns the minimum value in the Array.</p>\n"
      },
      {
        "shortDoc": "Creates namespaces to be used for scoping variables and classes so that they are not global. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "namespace1"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "namespace2"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "etc"
          }
        ],
        "href": "ClassManager.html#Ext-method-namespace",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1092,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "namespace",
        "owner": "Ext",
        "doc": "<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n// equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n"
      },
      {
        "shortDoc": "Convenient alias for Ext.namespace\n\nCreates namespaces to be used for scoping variables and classes so that they are ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "namespace1"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "namespace2"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "etc"
          }
        ],
        "href": "ClassManager.html#Ext-method-ns",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "namespace",
          "tagname": "alias",
          "cls": "Ext",
          "doc": null
        },
        "return": {
          "type": "Object",
          "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1124,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "ns",
        "owner": "Ext",
        "doc": "<p>Convenient alias for <a href=\"#/api/Ext-method-namespace\" rel=\"Ext-method-namespace\" class=\"docClass\">Ext.namespace</a></p>\n\n<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n// equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n"
      },
      {
        "shortDoc": "This method is deprecated, please use Ext.Number.from instead ...",
        "params": [

        ],
        "href": "Number3.html#Ext-method-num",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by Ext.Number.from</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Number3.html",
        "linenr": 98,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "name": "num",
        "owner": "Ext",
        "doc": "<p>This method is deprecated, please use <a href=\"#/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a> instead</p>\n"
      },
      {
        "shortDoc": "Alias for Ext.EventManager.onDocumentReady ...",
        "params": [

        ],
        "href": "EventManager.html#Ext-method-onDocumentReady",
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
        "html_filename": "EventManager.html",
        "linenr": 852,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "name": "onDocumentReady",
        "owner": "Ext",
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-onDocumentReady\" rel=\"Ext.EventManager-method-onDocumentReady\" class=\"docClass\">Ext.EventManager.onDocumentReady</a></p>\n"
      },
      {
        "shortDoc": "Adds new listener to be executed when all required scripts are fully loaded. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function callback to be executed</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The execution scope (<code>this</code>) of the callback function</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not to wait for document dom ready as well</p>\n",
            "name": "withDomReady"
          }
        ],
        "href": "Loader.html#Ext-method-onReady",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "onReady",
          "tagname": "alias",
          "cls": "Ext.Loader",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Loader.html",
        "linenr": 962,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "name": "onReady",
        "owner": "Ext",
        "doc": "<p>Adds new listener to be executed when all required scripts are fully loaded.</p>\n"
      },
      {
        "shortDoc": "Proxy to Ext.Base.override. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The class to override</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The list of functions to add to origClass. This should be specified as an object literal\ncontaining one or more methods.</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Ext.html#Ext-method-override",
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
        "html_filename": "Ext.html",
        "linenr": 202,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "override",
        "owner": "Ext",
        "doc": "<p>Proxy to <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a>. Please refer <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a> for further details.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    sayHi: function() {\n        alert('Hi!');\n    }\n}\n\nExt.override(My.cool.Class, {\n    sayHi: function() {\n        alert('About to say...');\n\n        this.callOverridden();\n    }\n});\n\nvar cool = new My.cool.Class();\ncool.sayHi(); // alerts 'About to say...'\n              // alerts 'Hi!'\n</code></pre>\n\n<p>Please note that <code>this.callOverridden()</code> only works if the class was previously\ncreated with {@link Ext#define)</p>\n"
      },
      {
        "shortDoc": "Partitions the set into two sets: a true set and a false set. ...",
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The array to partition</p>\n",
            "name": "arr"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) a function to determine truth.  If this is omitted the element\nitself must be able to be evaluated for its truthfulness.</p>\n",
            "name": "truth"
          }
        ],
        "href": "Ext-more.html#Ext-method-partition",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Will be removed in the next major version</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>[array of truish values, array of falsy values]</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 873,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "partition",
        "owner": "Ext",
        "doc": "<p>Partitions the set into two sets: a true set and a false set.\nExample:\nExample2:</p>\n\n<pre><code>// Example 1:\nExt.partition([true, false, true, true, false]); // [[true, true, true], [false, false]]\n\n// Example 2:\nExt.partition(\n    Ext.query(\"p\"),\n    function(val){\n        return val.className == \"class1\"\n    }\n);\n// true are those paragraph elements with a className of \"class1\",\n// false set are those that do not have that className.\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Create a new function from the provided fn, the arguments of which are pre-set to args. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The original function</p>\n",
            "name": "fn"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The arguments to pass to new callback</p>\n",
            "name": "args"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Function.html#Ext-method-pass",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "pass",
          "tagname": "alias",
          "cls": "Ext.Function",
          "doc": null
        },
        "return": {
          "type": "Function",
          "doc": "<p>The new callback function</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Function.html",
        "linenr": 364,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "name": "pass",
        "owner": "Ext",
        "doc": "<p>Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to <code>args</code>.\nNew arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.\nThis is especially useful when creating callbacks.</p>\n\n<p>For example:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alerts 'Hello World'\ncallback('by Me'); // alerts 'Hello World by Me'\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-pass\" rel=\"Ext-method-pass\" class=\"docClass\">Ext.pass</a> is alias for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.pluck\n\nPlucks the value of a property from each item in the Array. ...",
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array of items to pluck the value from.</p>\n",
            "name": "array"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The property name to pluck from each element.</p>\n",
            "name": "propertyName"
          }
        ],
        "href": "Array2.html#Ext-method-pluck",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "pluck",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Array",
          "doc": "<p>The value from each item in the Array.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1052,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "pluck",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a></p>\n\n<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n"
      },
      {
        "shortDoc": "Shorthand for Ext.PluginManager.registerType ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The ptype mnemonic string by which the Plugin class\nmay be looked up.</p>\n",
            "name": "ptype"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The new Plugin class.</p>\n",
            "name": "cls"
          }
        ],
        "href": "PluginManager.html#Ext-method-preg",
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
        "html_filename": "PluginManager.html",
        "linenr": 97,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/PluginManager.js",
        "private": false,
        "name": "preg",
        "owner": "Ext",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.PluginManager-method-registerType\" rel=\"Ext.PluginManager-method-registerType\" class=\"docClass\">Ext.PluginManager.registerType</a></p>\n"
      },
      {
        "shortDoc": "Selects an array of DOM nodes by CSS/XPath selector. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector/xpath query</p>\n",
            "name": "path"
          },
          {
            "type": "Node",
            "optional": true,
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
            "name": "root"
          }
        ],
        "href": "DomQuery.html#Ext-method-query",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 979,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "query",
        "owner": "Ext",
        "doc": "<p>Selects an array of DOM nodes by CSS/XPath selector. Shorthand of <a href=\"#/api/Ext.DomQuery-method-select\" rel=\"Ext.DomQuery-method-select\" class=\"docClass\">Ext.DomQuery.select</a></p>\n"
      },
      {
        "shortDoc": "Old way for creating Model classes. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Name of the Model class.</p>\n",
            "name": "name"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A configuration object for the Model you wish to create.</p>\n",
            "name": "config"
          }
        ],
        "href": "ModelManager.html#Ext-method-regModel",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">define</a> instead.</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The newly registered Model</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ModelManager.html",
        "linenr": 148,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "name": "regModel",
        "owner": "Ext",
        "doc": "<p>Old way for creating Model classes.  Instead use:</p>\n\n<pre><code>Ext.define(\"MyModel\", {\n    extend: \"Ext.data.Model\",\n    fields: []\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Creates a new store for the given id and config, then registers it with the Store Mananger. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id to set on the new store</p>\n",
            "name": "id"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The store config</p>\n",
            "name": "config"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The new Component class.</p>\n",
            "name": "cls"
          }
        ],
        "href": "StoreManager.html#Ext-method-regStore",
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
        "html_filename": "StoreManager.html",
        "linenr": 117,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/StoreManager.js",
        "private": false,
        "name": "regStore",
        "owner": "Ext",
        "doc": "<p>Creates a new store for the given id and config, then registers it with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Store Mananger</a>. \nSample usage:</p>\n\n\n\n\n<pre><code>    Ext.regStore('AllUsers', {\n        model: 'User'\n    });\n\n    //the store can now easily be used throughout the application\n    new Ext.List({\n        store: 'AllUsers',\n        ... other config\n    });\n    </code></pre>\n\n"
      },
      {
        "shortDoc": "Removes a DOM node from the document. ...",
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The node to remove</p>\n",
            "name": "node"
          }
        ],
        "href": "Ext-more.html#Ext-method-removeNode",
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
        "html_filename": "Ext-more.html",
        "linenr": 493,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "removeNode",
        "owner": "Ext",
        "doc": "<p>Removes a DOM node from the document.</p>\n\n<p>Removes this element from the document, removes all DOM event listeners, and deletes the cache reference.\nAll DOM event listeners are removed from this element. If <a href=\"#/api/Ext-property-enableNestedListenerRemoval\" rel=\"Ext-property-enableNestedListenerRemoval\" class=\"docClass\">Ext.enableNestedListenerRemoval</a> is\n<code>true</code>, then DOM event listeners are also removed from all child nodes. The body node\nwill be ignored if passed in.</p>\n\n"
      },
      {
        "shortDoc": "Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback functi...",
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>Can either be a string or an array of string</p>\n",
            "name": "expressions"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The callback function</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
            "name": "scope"
          },
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n",
            "name": "excludes"
          }
        ],
        "href": "Loader.html#Ext-method-require",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "require",
          "tagname": "alias",
          "cls": "Ext.Loader",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Loader.html",
        "linenr": 941,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "name": "require",
        "owner": "Ext",
        "doc": "<p>Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> is alias for <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a> for convenience.</p>\n"
      },
      {
        "shortDoc": "Selects elements based on the passed CSS selector to enable Element methods\nto be applied to many related elements in...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The CSS selector or an array of elements</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to create a unique <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> for each element (defaults to a shared flyweight object)</p>\n",
            "name": "unique"
          },
          {
            "type": "HTMLElement/String",
            "optional": true,
            "doc": "<p>(optional) The root element of the query or id of the root</p>\n",
            "name": "root"
          }
        ],
        "href": "CompositeElement2.html#Ext-method-select",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElementLite/CompositeElement",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElement2.html",
        "linenr": 73,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElement.js",
        "private": false,
        "name": "select",
        "owner": "Ext",
        "doc": "<p>Selects elements based on the passed CSS selector to enable <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> methods\nto be applied to many related elements in one statement through the returned <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">CompositeElement</a> or\n<a href=\"#/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">CompositeElementLite</a> object.</p>\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.sum\n\nCalculates the sum of all items in the given array. ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array to calculate the sum value of.</p>\n",
            "name": "array"
          }
        ],
        "href": "Array2.html#Ext-method-sum",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "sum",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Number",
          "doc": "<p>The sum.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1007,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "sum",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a></p>\n\n<p>Calculates the sum of all items in the given array.</p>\n"
      },
      {
        "shortDoc": "Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given c...",
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>Can either be a string or an array of string</p>\n",
            "name": "expressions"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The callback function</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
            "name": "scope"
          },
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n",
            "name": "excludes"
          }
        ],
        "href": "Loader.html#Ext-method-syncRequire",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "syncRequire",
          "tagname": "alias",
          "cls": "Ext.Loader",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Loader.html",
        "linenr": 948,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "name": "syncRequire",
        "owner": "Ext",
        "doc": "<p>Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-syncRequire\" rel=\"Ext-method-syncRequire\" class=\"docClass\">Ext.syncRequire</a> is alias for <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a> for convenience.</p>\n"
      },
      {
        "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>the iterable object to be turned into a true Array.</p>\n",
            "name": "iterable"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n",
            "name": "start"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n",
            "name": "end"
          }
        ],
        "href": "Array2.html#Ext-method-toArray",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "toArray",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Array",
          "doc": "<p>array</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1061,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "toArray",
        "owner": "Ext",
        "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\">Ext.toArray</a> is alias for <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n"
      },
      {
        "shortDoc": "Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array to create a sentence from</p>\n",
            "name": "items"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to use to connect the last two words. Usually 'and' or 'or' - defaults to 'and'.</p>\n",
            "name": "connector"
          }
        ],
        "href": "Ext-more.html#Ext-method-toSentence",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Will be removed in the next major version</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The sentence string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 971,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "toSentence",
        "owner": "Ext",
        "doc": "<p>Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); //'Adama, Tigh and Roslin'\nExt.toSentence(['Adama', 'Tigh', 'Roslin'], 'or'); //'Adama, Tigh or Roslin'</p>\n"
      },
      {
        "shortDoc": "Old alias to typeOf\n\nReturns the type of the given variable in string format. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-type",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "typeOf",
          "tagname": "alias",
          "cls": "Ext",
          "doc": null
        },
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 576,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "type",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a></p>\n\n<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n"
      },
      {
        "shortDoc": "Returns the type of the given variable in string format. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "value"
          }
        ],
        "href": "Ext.html#Ext-method-typeOf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 258,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "typeOf",
        "owner": "Ext",
        "doc": "<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n"
      },
      {
        "shortDoc": "Old alias to Ext.Array.unique\n\nReturns a new array with unique items ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          }
        ],
        "href": "Array2.html#Ext-method-unique",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "unique",
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null
        },
        "return": {
          "type": "Array",
          "doc": "<p>results</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Array2.html",
        "linenr": 1043,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "name": "unique",
        "owner": "Ext",
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a></p>\n\n<p>Returns a new array with unique items</p>\n"
      },
      {
        "shortDoc": "Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The URL to append to.</p>\n",
            "name": "url"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The content to append to the URL.</p>\n",
            "name": "s"
          }
        ],
        "href": "Ext-more.html#Ext-method-urlAppend",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>(String) The resulting URL</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 210,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "urlAppend",
        "owner": "Ext",
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n"
      },
      {
        "shortDoc": "A convenient alias method for Ext.Object.fromQueryString ...",
        "params": [

        ],
        "href": "Object.html#Ext-method-urlDecode",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 518,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "urlDecode",
        "owner": "Ext",
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a></p>\n"
      },
      {
        "shortDoc": "A convenient alias method for Ext.Object.toQueryString ...",
        "params": [

        ],
        "href": "Object.html#Ext-method-urlEncode",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 498,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "urlEncode",
        "owner": "Ext",
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a></p>\n"
      },
      {
        "shortDoc": "Utility method for returning a default value if the passed value is empty. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to return if the original value is empty</p>\n",
            "name": "defaultValue"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n",
            "name": "allowBlank"
          }
        ],
        "href": "Ext-more.html#Ext-method-value",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Use <a href=\"#/api/Ext-method-valueFrom\" rel=\"Ext-method-valueFrom\" class=\"docClass\">valueFrom</a> instead</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>value, if non-empty, else defaultValue</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 667,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "value",
        "owner": "Ext",
        "doc": "<p>Utility method for returning a default value if the passed value is empty.</p>\n\n\n<p>The value is deemed to be empty if it is<div class=\"mdetail-params\"><ul>\n<li>null</li>\n<li>undefined</li>\n<li>an empty array</li>\n<li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>\n</ul></div>\n\n"
      },
      {
        "shortDoc": "Returns the given value itself if it's not empty, as described in isEmpty; returns the default\nvalue (second argument...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to test</p>\n",
            "name": "value"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to return if the original value is empty</p>\n",
            "name": "defaultValue"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n",
            "name": "allowBlank"
          }
        ],
        "href": "Ext.html#Ext-method-valueFrom",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>value, if non-empty, else defaultValue</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 245,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "valueFrom",
        "owner": "Ext",
        "doc": "<p>Returns the given value itself if it's not empty, as described in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">isEmpty</a>; returns the default\nvalue (second argument) otherwise.</p>\n"
      },
      {
        "shortDoc": "Convenient shorthand to create a widget by its xtype, also see Ext.ClassManager.instantiateByAlias\n\nvar button = Ext....",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>xtype of the widget to create.</p>\n",
            "name": "name"
          }
        ],
        "href": "ClassManager.html#Ext-method-widget",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>widget instance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ClassManager.html",
        "linenr": 1026,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "widget",
        "owner": "Ext",
        "doc": "<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n"
      },
      {
        "shortDoc": "Zips N sets together. ...",
        "params": [
          {
            "type": "Arrays|NodeLists",
            "optional": false,
            "doc": "<p>This argument may be repeated. Array(s) to contribute values.</p>\n",
            "name": "arr"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The last item in the argument list. This will drive how the items are zipped together.</p>\n",
            "name": "zipper"
          }
        ],
        "href": "Ext-more.html#Ext-method-zip",
        "deprecated": {
          "version": "4.0.0",
          "tagname": "deprecated",
          "text": "<p>Will be removed in the next major version</p>\n",
          "doc": null
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>The zipped set.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 931,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "zip",
        "owner": "Ext",
        "doc": "<p>Zips N sets together.</p>\n\n\n<pre><code>// Example 1:\nExt.zip([1,2,3],[4,5,6]); // [[1,4],[2,5],[3,6]]\n// Example 2:\nExt.zip(\n    [ \"+\", \"-\", \"+\"],\n    [  12,  10,  22],\n    [  43,  15,  96],\n    function(a, b, c){\n        return \"$\" + a + \"\" + b + \".\" + c\n    }\n); // [\"$+12.43\", \"$-10.15\", \"$+22.96\"]\n</code></pre>\n\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "URL to a 1x1 transparent gif image used by Ext to create inline icons with CSS background images. ...",
        "type": "String",
        "href": "Ext-more.html#Ext-property-BLANK_IMAGE_URL",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 659,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "BLANK_IMAGE_URL",
        "owner": "Ext",
        "doc": "<p>URL to a 1x1 transparent gif image used by <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> to create inline icons with CSS background images.\nIn older versions of IE, this defaults to \"http://sencha.com/s.gif\" and you should change this to a URL on your server.\nFor other browsers it uses an inline data URL.</p>\n"
      },
      {
        "shortDoc": "URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content...",
        "type": "String",
        "href": "Ext-more.html#Ext-property-SSL_SECURE_URL",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 408,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "SSL_SECURE_URL",
        "owner": "Ext",
        "doc": "<p>URL to a blank file used by <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content warning (<tt>'about:blank'</tt>, except for IE in secure mode, which is <tt>'javascript:\"\"'</tt>).</p>\n"
      },
      {
        "shortDoc": "Indicates whether to use native browser parsing for JSON methods. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-USE_NATIVE_JSON",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 436,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "USE_NATIVE_JSON",
        "owner": "Ext",
        "doc": "<p>Indicates whether to use native browser parsing for JSON methods.\nThis option is ignored if the browser does not support native JSON methods.\n<b>Note: Native JSON methods will not work with objects that have functions.\nAlso, property names must be quoted, otherwise the data will not parse.</b> (Defaults to false)</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-enableFx",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 415,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "enableFx",
        "owner": "Ext",
        "doc": "<p>True if the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> Class is available</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-enableGarbageCollector",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 45,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "enableGarbageCollector",
        "owner": "Ext",
        "doc": "<p>True to automatically uncache orphaned Ext.core.Elements periodically (defaults to true)</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-enableListenerCollection",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 51,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "enableListenerCollection",
        "owner": "Ext",
        "doc": "<p>True to automatically purge event listeners during garbageCollection (defaults to true).</p>\n"
      },
      {
        "shortDoc": "EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-enableNestedListenerRemoval",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 429,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "enableNestedListenerRemoval",
        "owner": "Ext",
        "doc": "<p>EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed.\nCurrently not optimized for performance.</p>\n"
      },
      {
        "type": "Array",
        "href": "Ext.html#Ext-property-enumerables",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext.html",
        "linenr": 28,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "name": "enumerables",
        "owner": "Ext",
        "doc": "<p>An array containing extra enumerables for old browsers</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isChrome",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 539,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isChrome",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Chrome.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isFF3_0",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 617,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isFF3_0",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses FireFox 3.0</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isFF3_5",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 623,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isFF3_5",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses FireFox 3.5</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isFF3_6",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 629,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isFF3_6",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses FireFox 3.6</p>\n"
      },
      {
        "shortDoc": "True if the detected browser uses the Gecko layout engine (e.g. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isGecko",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 599,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isGecko",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses the Gecko layout engine (e.g. Mozilla, Firefox).</p>\n"
      },
      {
        "shortDoc": "True if the detected browser uses a Gecko 1.9+ layout engine (e.g. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isGecko3",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 605,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isGecko3",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses a Gecko 1.9+ layout engine (e.g. Firefox 3.x).</p>\n"
      },
      {
        "shortDoc": "True if the detected browser uses a Gecko 2.0+ layout engine (e.g. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isGecko4",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 611,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isGecko4",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses a Gecko 2.0+ layout engine (e.g. Firefox 4.x).</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isIE",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 569,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isIE",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Internet Explorer.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isIE6",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 575,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isIE6",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Internet Explorer 6.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isIE7",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 581,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isIE7",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Internet Explorer 7.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isIE8",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 587,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isIE8",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Internet Explorer 8.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isIE9",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 593,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isIE9",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Internet Explorer 9.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isLinux",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 635,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isLinux",
        "owner": "Ext",
        "doc": "<p>True if the detected platform is Linux.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isMac",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 647,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isMac",
        "owner": "Ext",
        "doc": "<p>True if the detected platform is Mac OS.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isOpera",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 521,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isOpera",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Opera.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isOpera10_5",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 527,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isOpera10_5",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Opera 10.5x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isReady",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 39,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isReady",
        "owner": "Ext",
        "doc": "<p>True when the document is fully initialized and ready for action</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isSafari",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 545,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isSafari",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Safari.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isSafari2",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 563,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isSafari2",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Safari 2.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isSafari3",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 551,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isSafari3",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Safari 3.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isSafari4",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 557,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isSafari4",
        "owner": "Ext",
        "doc": "<p>True if the detected browser is Safari 4.x.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isWebKit",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 533,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isWebKit",
        "owner": "Ext",
        "doc": "<p>True if the detected browser uses WebKit.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-isWindows",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 641,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "isWindows",
        "owner": "Ext",
        "doc": "<p>True if the detected platform is Windows.</p>\n"
      },
      {
        "shortDoc": "Logs a message. ...",
        "type": "Object",
        "href": "Ext-more.html#Ext-property-log",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 832,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "log",
        "owner": "Ext",
        "doc": "<p>Logs a message. If a console is present it will be used. On Opera, the method\n\"opera.postError\" is called. In other cases, the message is logged to an array\n\"Ext.log.out\". An attached debugger can watch this array and view the log. The\nlog buffer is limited to a maximum of \"Ext.log.max\" entries (defaults to 250).\nThe <code>Ext.log.out</code> array can also be written to a popup window by entering the\nfollowing in the URL bar (a \"bookmarklet\"):</p>\n\n<p>   javascript:void(Ext.log.show());</p>\n\n<p>If additional parameters are passed, they are joined and appended to the message.\nA technique for tracing entry and exit of a function is this:</p>\n\n<pre><code> function foo () {\n     Ext.log({ indent: 1 }, '&gt;&gt; foo');\n\n     // log statements in here or methods called from here will be indented\n     // by one step\n\n     Ext.log({ outdent: 1 }, '&lt;&lt; foo');\n }\n</code></pre>\n\n<p>This method does nothing in a release build.</p>\n"
      },
      {
        "shortDoc": "True to scope the reset CSS to be just applied to Ext components. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-scopeResetCSS",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 421,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "scopeResetCSS",
        "owner": "Ext",
        "doc": "<p>True to scope the reset CSS to be just applied to <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> components. Note that this wraps root containers\nwith an additional element. Also remember that when you turn on this option, you have to use ext-all-scoped {\nunless you use the bootstrap.js to load your javascript, in which case it will be handled for you.</p>\n"
      },
      {
        "shortDoc": "By default, Ext intelligently decides whether floating elements should be shimmed. ...",
        "type": "Boolean",
        "href": "Ext-more.html#Ext-property-useShims",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 993,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "useShims",
        "owner": "Ext",
        "doc": "<p>By default, <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> intelligently decides whether floating elements should be shimmed. If you are using flash,\nyou may want to set this to true.</p>\n"
      },
      {
        "type": "Float",
        "href": "Ext-more.html#Ext-property-webKitVersion",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Ext-more.html",
        "linenr": 653,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "name": "webKitVersion",
        "owner": "Ext",
        "doc": "<p>The current version of WebKit (-1 if the browser does not use WebKit).</p>\n"
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

  ],
  "html_filename": "Ext.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext",
  "doc": "<p>The <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> namespace (global object) encapsulates all classes, singletons, and utility methods provided by Sencha's libraries.</p>\n Most user interface Components are at a lower level of nesting in the namespace, but many common utility functions are provided\n as direct properties of the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> namespace.</p>\n\n<p> Also many frequently used methods from other classes are provided as shortcuts within the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> namespace.\n For example <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a> aliases <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p> Many applications are initiated with <a href=\"#/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a> which is called once the DOM is ready.\n This ensures all scripts have been loaded, preventing dependency issues. For example</p>\n\n<pre><code> Ext.onReady(function(){\n     new Ext.Component({\n         renderTo: document.body,\n         html: 'DOM ready!'\n     });\n });\n</code></pre>\n\n<p>For more information about how to use the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> classes, see</p>\n\n<ul>\n<li><a href=\"http://www.sencha.com/learn/\">The Learning Center</a></li>\n<li><a href=\"http://www.sencha.com/learn/Ext_FAQ\">The FAQ</a></li>\n<li><a href=\"http://www.sencha.com/forum/\">The forums</a></li>\n</ul>\n\n",
  "extends": null,
  "docauthor": null,
  "xtype": null
});