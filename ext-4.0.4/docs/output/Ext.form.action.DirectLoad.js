Ext.data.JsonP.Ext_form_action_DirectLoad({
  "href": "DirectLoad.html#Ext-form-action-DirectLoad",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.form.action.Action",
    "Ext.form.action.Load"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Action. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Action.html#Ext-form-action-Action-method-constructor",
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
        "html_filename": "Action.html",
        "linenr": 163,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.form.action.Action",
        "doc": "<p>Creates new Action.</p>\n"
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
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "The type of failure detected will be one of these: Ext.form.action.Action.CLIENT_INVALID,\nExt.form.action.Action.SERV...",
        "type": "String",
        "href": "Action.html#Ext-form-action-Action-property-failureType",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 106,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "failureType",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The type of failure detected will be one of these: <a href=\"#/api/Ext.form.action.Action-property-CLIENT_INVALID\" rel=\"Ext.form.action.Action-property-CLIENT_INVALID\" class=\"docClass\">Ext.form.action.Action.CLIENT_INVALID</a>,\n<a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>, <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>, or\n<a href=\"#/api/Ext.form.action.Action-property-LOAD_FAILURE\" rel=\"Ext.form.action.Action-property-LOAD_FAILURE\" class=\"docClass\">Ext.form.action.Action.LOAD_FAILURE</a>.  Usage:</p>\n\n<pre><code>var fp = new Ext.form.Panel({\n...\nbuttons: [{\n    text: 'Save',\n    formBind: true,\n    handler: function(){\n        if(fp.getForm().isValid()){\n            fp.getForm().submit({\n                url: 'form-submit.php',\n                waitMsg: 'Submitting your data...',\n                success: function(form, action){\n                    // server responded with success = true\n                    var result = action.<a href=\"#/api/Ext.form.action.DirectLoad-property-result\" rel=\"Ext.form.action.DirectLoad-property-result\" class=\"docClass\">result</a>;\n                },\n                failure: function(form, action){\n                    if (action.<a href=\"#/api/Ext.form.action.DirectLoad-property-failureType\" rel=\"Ext.form.action.DirectLoad-property-failureType\" class=\"docClass\">failureType</a> === <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>) {\n                        Ext.Msg.alert('Error',\n                            'Status:'+action.<a href=\"#/api/Ext.form.action.DirectLoad-property-response\" rel=\"Ext.form.action.DirectLoad-property-response\" class=\"docClass\">response</a>.status+': '+\n                            action.<a href=\"#/api/Ext.form.action.DirectLoad-property-response\" rel=\"Ext.form.action.DirectLoad-property-response\" class=\"docClass\">response</a>.statusText);\n                    }\n                    if (action.failureType === <a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>){\n                        // server responded with success = false\n                        Ext.Msg.alert('Invalid', action.<a href=\"#/api/Ext.form.action.DirectLoad-property-result\" rel=\"Ext.form.action.DirectLoad-property-result\" class=\"docClass\">result</a>.errormsg);\n                    }\n                }\n            });\n        }\n    }\n},{\n    text: 'Reset',\n    handler: function(){\n        fp.getForm().reset();\n    }\n}]\n</code></pre>\n\n"
      },
      {
        "type": "Object",
        "href": "Action.html#Ext-form-action-Action-property-response",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 150,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "response",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The raw XMLHttpRequest object used to perform the action.</p>\n"
      },
      {
        "type": "Object",
        "href": "Action.html#Ext-form-action-Action-property-result",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 156,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "result",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The decoded response object containing a boolean <tt>success</tt> property and\nother, action-specific properties.</p>\n"
      },
      {
        "type": "Object",
        "href": "Action.html#Ext-form-action-Action-property-run",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "run",
        "owner": "Ext.form.action.Action",
        "doc": "<p>Invokes this action using the current configuration.</p>\n"
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
        "shortDoc": "The type of action this Action instance performs. ...",
        "type": "String",
        "href": "Action.html#Ext-form-action-Action-property-type",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 99,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "type",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The type of action this Action instance performs.\nCurrently only \"submit\" and \"load\" are supported.</p>\n"
      }
    ],
    "cfg": [
      {
        "shortDoc": "The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication. ...",
        "type": "Function",
        "href": "Action.html#Ext-form-action-Action-cfg-failure",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 68,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "failure",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : Ext.form.Basic<div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : Ext.form.action.Action<div class=\"sub-desc\">The Action class. If an Ajax\nerror ocurred, the failure type will be in <a href=\"#/api/Ext.form.action.DirectLoad-property-failureType\" rel=\"Ext.form.action.DirectLoad-property-failureType\" class=\"docClass\">failureType</a>. The <a href=\"#/api/Ext.form.action.DirectLoad-property-result\" rel=\"Ext.form.action.DirectLoad-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n"
      },
      {
        "shortDoc": "The BasicForm instance that\nis invoking this Action. ...",
        "type": "Ext.form.Basic",
        "href": "Action.html#Ext-form-action-Action-cfg-form",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "form",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">BasicForm</a> instance that\nis invoking this Action. Required.</p>\n"
      },
      {
        "shortDoc": "Extra headers to be sent in the AJAX request for submit and load actions. ...",
        "type": "Object",
        "href": "Action.html#Ext-form-action-Action-cfg-headers",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 47,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "headers",
        "owner": "Ext.form.action.Action",
        "doc": "<p>Extra headers to be sent in the AJAX request for submit and load actions. See\n<a href=\"#/api/Ext.data.proxy.Ajax-cfg-headers\" rel=\"Ext.data.proxy.Ajax-cfg-headers\" class=\"docClass\">Ext.data.proxy.Ajax.headers</a>.</p>\n\n"
      },
      {
        "shortDoc": "The HTTP method to use to access the requested URL. ...",
        "type": "String",
        "href": "Action.html#Ext-form-action-Action-cfg-method",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 35,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "method",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The HTTP method to use to access the requested URL. Defaults to the\n<a href=\"#/api/Ext.form.Basic-cfg-method\" rel=\"Ext.form.Basic-cfg-method\" class=\"docClass\">BasicForm's method</a>, or 'POST' if not specified.</p>\n"
      },
      {
        "shortDoc": "Extra parameter values to pass. ...",
        "type": "Object/String",
        "href": "Action.html#Ext-form-action-Action-cfg-params",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 40,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "params",
        "owner": "Ext.form.action.Action",
        "doc": "<p>Extra parameter values to pass. These are added to the Form's\n<a href=\"#/api/Ext.form.Basic-cfg-baseParams\" rel=\"Ext.form.Basic-cfg-baseParams\" class=\"docClass\">Ext.form.Basic.baseParams</a> and passed to the specified URL along with the Form's\ninput fields.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p>\n\n"
      },
      {
        "shortDoc": "When set to true, causes the Form to be\nreset on Action success. ...",
        "type": "Boolean",
        "href": "Action.html#Ext-form-action-Action-cfg-reset",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 28,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "reset",
        "owner": "Ext.form.action.Action",
        "doc": "<p>When set to <tt><b>true</b></tt>, causes the Form to be\n<a href=\"#/api/Ext.form.Basic-method-reset\" rel=\"Ext.form.Basic-method-reset\" class=\"docClass\">reset</a> on Action success. If specified, this happens\nbefore the <a href=\"#/api/Ext.form.action.DirectLoad-cfg-success\" rel=\"Ext.form.action.DirectLoad-cfg-success\" class=\"docClass\">success</a> callback is called and before the Form's\n<a href=\"#/api/Ext.form.Basic-event-actioncomplete\" rel=\"Ext.form.Basic-event-actioncomplete\" class=\"docClass\">actioncomplete</a> event fires.</p>\n"
      },
      {
        "shortDoc": "The scope in which to call the configured success and failure\ncallback functions (the this reference for the callback...",
        "type": "Object",
        "href": "Action.html#Ext-form-action-Action-cfg-scope",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 79,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "scope",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The scope in which to call the configured <tt>success</tt> and <tt>failure</tt>\ncallback functions (the <tt>this</tt> reference for the callback functions).</p>\n"
      },
      {
        "shortDoc": "If set to true, the emptyText value will be sent with the form\nwhen it is submitted. ...",
        "type": "Boolean",
        "href": "Action.html#Ext-form-action-Action-cfg-submitEmptyText",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 94,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "submitEmptyText",
        "owner": "Ext.form.action.Action",
        "doc": "<p>If set to <tt>true</tt>, the emptyText value will be sent with the form\nwhen it is submitted. Defaults to <tt>true</tt>.</p>\n"
      },
      {
        "shortDoc": "The function to call when a valid success return packet is received. ...",
        "type": "Function",
        "href": "Action.html#Ext-form-action-Action-cfg-success",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 59,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "success",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The function to call when a valid success return packet is received.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : Ext.form.Basic<div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : Ext.form.action.Action<div class=\"sub-desc\">The Action class. The <a href=\"#/api/Ext.form.action.DirectLoad-property-result\" rel=\"Ext.form.action.DirectLoad-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n"
      },
      {
        "shortDoc": "The number of seconds to wait for a server response before\nfailing with the failureType as Ext.form.action.Action.CON...",
        "type": "Number",
        "href": "Action.html#Ext-form-action-Action-cfg-timeout",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 52,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "timeout",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The number of seconds to wait for a server response before\nfailing with the <a href=\"#/api/Ext.form.action.DirectLoad-property-failureType\" rel=\"Ext.form.action.DirectLoad-property-failureType\" class=\"docClass\">failureType</a> as <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>. If not specified,\ndefaults to the configured <tt><a href=\"#/api/Ext.form.Basic-cfg-timeout\" rel=\"Ext.form.Basic-cfg-timeout\" class=\"docClass\">timeout</a></tt> of the\n<a href=\"#/api/Ext.form.action.DirectLoad-cfg-form\" rel=\"Ext.form.action.DirectLoad-cfg-form\" class=\"docClass\">form</a>.</p>\n"
      },
      {
        "shortDoc": "The URL that the Action is to invoke. ...",
        "type": "String",
        "href": "Action.html#Ext-form-action-Action-cfg-url",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 23,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "url",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The URL that the Action is to invoke. Will default to the <a href=\"#/api/Ext.form.Basic-cfg-url\" rel=\"Ext.form.Basic-cfg-url\" class=\"docClass\">url</a>\nconfigured on the <a href=\"#/api/Ext.form.action.DirectLoad-cfg-form\" rel=\"Ext.form.action.DirectLoad-cfg-form\" class=\"docClass\">form</a>.</p>\n"
      },
      {
        "type": "String",
        "href": "Action.html#Ext-form-action-Action-cfg-waitMsg",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 84,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "waitMsg",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The message to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n"
      },
      {
        "type": "String",
        "href": "Action.html#Ext-form-action-Action-cfg-waitTitle",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Action.html",
        "linenr": 89,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "name": "waitTitle",
        "owner": "Ext.form.action.Action",
        "doc": "<p>The title to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n"
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
    "Ext.form.Action.DirectLoad"
  ],
  "html_filename": "DirectLoad.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/DirectLoad.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.form.action.DirectLoad",
  "doc": "<p>Provides <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a> support for loading form data.</p>\n\n\n<p>This example illustrates usage of Ext.direct.Direct to <b>load</b> a form through Ext.Direct.</p>\n\n\n<pre><code>var myFormPanel = new Ext.form.Panel({\n    // configs for FormPanel\n    title: 'Basic Information',\n    renderTo: document.body,\n    width: 300, height: 160,\n    padding: 10,\n\n    // configs apply to child items\n    defaults: {anchor: '100%'},\n    defaultType: 'textfield',\n    items: [{\n        fieldLabel: 'Name',\n        name: 'name'\n    },{\n        fieldLabel: 'Email',\n        name: 'email'\n    },{\n        fieldLabel: 'Company',\n        name: 'company'\n    }],\n\n    // configs for BasicForm\n    api: {\n        // The server-side method to call for load() requests\n        load: Profile.getBasicInfo,\n        // The server-side must mark the submit handler as a 'formHandler'\n        submit: Profile.updateBasicInfo\n    },\n    // specify the order for the passed params\n    paramOrder: ['uid', 'foo']\n});\n\n// load the form\nmyFormPanel.getForm().load({\n    // pass 2 arguments to server side getBasicInfo method (len=2)\n    params: {\n        foo: 'bar',\n        uid: 34\n    }\n});\n</code></pre>\n\n\n<p>The data packet sent to the server will resemble something like:</p>\n\n<pre><code>[\n    {\n        \"action\":\"Profile\",\"method\":\"getBasicInfo\",\"type\":\"rpc\",\"tid\":2,\n        \"data\":[34,\"bar\"] // note the order of the params\n    }\n]\n</code></pre>\n\n\n<p>The form will process a data packet returned by the server that is similar\nto the following format:</p>\n\n<pre><code>[\n    {\n        \"action\":\"Profile\",\"method\":\"getBasicInfo\",\"type\":\"rpc\",\"tid\":2,\n        \"result\":{\n            \"success\":true,\n            \"data\":{\n                \"name\":\"Fred Flintstone\",\n                \"company\":\"Slate Rock and Gravel\",\n                \"email\":\"fred.flintstone@slaterg.com\"\n            }\n        }\n    }\n]\n</code></pre>\n\n",
  "extends": "Ext.form.action.Load",
  "docauthor": null
});