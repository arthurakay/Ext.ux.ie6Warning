Ext.data.JsonP.Ext_chart_axis_Time({
  "href": "Time3.html#Ext-chart-axis-Time",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.chart.axis.Abstract",
    "Ext.chart.axis.Axis"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Axis. ...",
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config options.</p>\n",
            "name": "config"
          }
        ],
        "href": "Abstract.html#Ext-chart-axis-Abstract-method-constructor",
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
        "html_filename": "Abstract.html",
        "linenr": 13,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Abstract.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.chart.axis.Abstract",
        "doc": "<p>Creates new Axis.</p>\n"
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
        "shortDoc": "Renders the axis into the screen and updates it's position. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "init"
          }
        ],
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawAxis",
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
        "html_filename": "Axis.html",
        "linenr": 245,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "drawAxis",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Renders the axis into the screen and updates it's position.</p>\n"
      },
      {
        "shortDoc": "Renders an horizontal and/or vertical grid into the Surface. ...",
        "params": [

        ],
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawGrid",
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
        "html_filename": "Axis.html",
        "linenr": 379,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "drawGrid",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Renders an horizontal and/or vertical grid into the Surface.</p>\n"
      },
      {
        "shortDoc": "Renders the labels in the axes. ...",
        "params": [

        ],
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawLabel",
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
        "html_filename": "Axis.html",
        "linenr": 693,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "drawLabel",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Renders the labels in the axes.</p>\n"
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
        "shortDoc": "Updates the title of this axis. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "title"
          }
        ],
        "href": "Axis.html#Ext-chart-axis-Axis-method-setTitle",
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
        "html_filename": "Axis.html",
        "linenr": 754,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "setTitle",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Time-cfg-title\" rel=\"Ext.chart.axis.Time-cfg-title\" class=\"docClass\">title</a> of this axis.</p>\n"
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
        "shortDoc": "Aggregation operation when grouping. ...",
        "type": "String",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-aggregateOp",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 67,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "aggregateOp",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>Aggregation operation when grouping. Possible options are 'sum', 'avg', 'max', 'min'. Default's 'sum'.</p>\n"
      },
      {
        "shortDoc": "If true, the values of the chart will be rendered only if they belong between the fromDate and toDate. ...",
        "type": "Boolean",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-constrain",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 91,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "constrain",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>If true, the values of the chart will be rendered only if they belong between the fromDate and toDate.\nIf false, the time axis will adapt to the new values by adding/removing steps.\nDefault's [Ext.Date.DAY, 1].</p>\n"
      },
      {
        "shortDoc": "The size of the dash marker. ...",
        "type": "Number",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-dashSize",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 115,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "dashSize",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The size of the dash marker. Default's 3.</p>\n"
      },
      {
        "shortDoc": "Indicates the format the date will be rendered on. ...",
        "type": "String|Boolean",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-dateFormat",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 52,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "dateFormat",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>Indicates the format the date will be rendered on.\nFor example: 'M d' will render the dates as 'Jan 30', etc.\nFor a list of possible format strings see <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Date</a></p>\n"
      },
      {
        "type": "Date",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-fromDate",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 73,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "fromDate",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>The starting date for the time axis.</p>\n"
      },
      {
        "shortDoc": "The grid configuration enables you to set a background grid for an axis. ...",
        "type": "Boolean | Object",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-grid",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 56,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "grid",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The grid configuration enables you to set a background grid for an axis.\nIf set to <em>true</em> on a vertical axis, vertical lines will be drawn.\nIf set to <em>true</em> on a horizontal axis, horizontal lines will be drawn.\nIf both are set, a proper grid with horizontal and vertical lines will be drawn.</p>\n\n<p>You can set specific options for the grid configuration for odd and/or even lines/rows.\nSince the rows being drawn are rectangle sprites, you can set to an odd or even property\nall styles that apply to <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>. For more information on all the style\nproperties you can set please take a look at <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>. Some useful style properties are <code>opacity</code>, <code>fill</code>, <code>stroke</code>, <code>stroke-width</code>, etc.</p>\n\n<p>The possible values for a grid option are then <em>true</em>, <em>false</em>, or an object with <code>{ odd, even }</code> properties\nwhere each property contains a sprite style descriptor object that is defined in <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Numeric',\n    grid: true,\n    position: 'left',\n    fields: ['data1', 'data2', 'data3'],\n    title: 'Number of Hits',\n    grid: {\n        odd: {\n            opacity: 1,\n            fill: '#ddd',\n            stroke: '#bbb',\n            'stroke-width': 1\n        }\n    }\n}, {\n    type: 'Category',\n    position: 'bottom',\n    fields: ['name'],\n    title: 'Month of the Year',\n    grid: true\n}]\n</code></pre>\n"
      },
      {
        "shortDoc": "Indicates the time unit to use for each step. ...",
        "type": "String",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-groupBy",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 60,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "groupBy",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>Indicates the time unit to use for each step. Can be 'day', 'month', 'year'\nor a comma-separated combination of all of them. Default's 'year,month,day'.</p>\n"
      },
      {
        "shortDoc": "Offset axis position. ...",
        "type": "Number",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-length",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 130,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "length",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Offset axis position. Default's 0.</p>\n"
      },
      {
        "type": "Number",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-majorTickSteps",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 97,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "majorTickSteps",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>If <code>minimum</code> and <code>maximum</code> are specified it forces the number of major ticks to the specified value.</p>\n"
      },
      {
        "shortDoc": "The number of small ticks between two major ticks. ...",
        "type": "Number",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-minorTickSteps",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "minorTickSteps",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The number of small ticks between two major ticks. Default is zero.</p>\n"
      },
      {
        "shortDoc": "Where to set the axis. ...",
        "type": "String",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-position",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 121,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "position",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Where to set the axis. Available options are <code>left</code>, <code>bottom</code>, <code>right</code>, <code>top</code>. Default's <code>bottom</code>.</p>\n"
      },
      {
        "shortDoc": "An array with two components: The first is the unit of the step (day, month, year, etc). ...",
        "type": "Array",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-step",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 83,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "step",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>An array with two components: The first is the unit of the step (day, month, year, etc).\nThe second one is the number of units for the step (1, 2, etc.).\nDefault's [Ext.Date.DAY, 1].</p>\n"
      },
      {
        "type": "String",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-title",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 107,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "title",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The title for the Axis</p>\n"
      },
      {
        "type": "Date",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-toDate",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Time3.html",
        "linenr": 78,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "toDate",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>The ending date for the time axis.</p>\n"
      },
      {
        "shortDoc": "Offset axis width. ...",
        "type": "Number",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-width",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Axis.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "width",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Offset axis width. Default's 0.</p>\n"
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
    "Ext.chart.TimeAxis"
  ],
  "html_filename": "Time3.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.chart.axis.Time",
  "doc": "<p>A type of axis whose units are measured in time values. Use this axis\nfor listing dates that you will want to group or dynamically change.\nIf you just want to display dates as categories then use the\nCategory class for axis instead.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Time',\n    position: 'bottom',\n    fields: 'date',\n    title: 'Day',\n    dateFormat: 'M d',\n    groupBy: 'year,month,day',\n    aggregateOp: 'sum',\n\n    constrain: true,\n    fromDate: new Date('1/1/11'),\n    toDate: new Date('1/7/11')\n}]\n</code></pre>\n\n<p>In this example we're creating a time axis that has as title <em>Day</em>.\nThe field the axis is bound to is <code>date</code>.\nThe date format to use to display the text for the axis labels is <code>M d</code>\nwhich is a three letter month abbreviation followed by the day number.\nThe time axis will show values for dates between <code>fromDate</code> and <code>toDate</code>.\nSince <code>constrain</code> is set to true all other values for other dates not between\nthe fromDate and toDate will not be displayed.</p>\n",
  "extends": "Ext.chart.axis.Axis",
  "docauthor": null
});