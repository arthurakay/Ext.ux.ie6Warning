Ext.data.JsonP.Ext_layout_container_Card({
  "href": "Card.html#Ext-layout-container-Card",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.AbstractFit",
    "Ext.layout.container.Fit",
    "Ext.layout.container.AbstractCard"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Containers should not lay out child components when collapsed. ...",
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-beforeLayout",
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
        "html_filename": "AbstractContainer.html",
        "linenr": 58,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "beforeLayout",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Containers should not lay out child components when collapsed.</p>\n"
      },
      {
        "shortDoc": "Return the active (visible) component in the layout. ...",
        "params": [

        ],
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getActiveItem",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractCard.html",
        "linenr": 72,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "getActiveItem",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Return the active (visible) component in the layout.</p>\n"
      },
      {
        "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n...",
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>of child components</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer.html",
        "linenr": 49,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "getLayoutItems",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n"
      },
      {
        "shortDoc": "Return the active (visible) component in the layout to the next card ...",
        "params": [

        ],
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getNext",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The next component or false.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractCard.html",
        "linenr": 131,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "getNext",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Return the active (visible) component in the layout to the next card</p>\n"
      },
      {
        "shortDoc": "Return the active (visible) component in the layout to the previous card ...",
        "params": [

        ],
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getPrev",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The previous component or false.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractCard.html",
        "linenr": 155,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "getPrev",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Return the active (visible) component in the layout to the previous card</p>\n"
      },
      {
        "shortDoc": "Returns the element into which rendering must take place. ...",
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer.html",
        "linenr": 75,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "getRenderTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's target element.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n"
      },
      {
        "shortDoc": "Returns all items that are rendered ...",
        "params": [

        ],
        "href": "Container.html#Ext-layout-container-Container-method-getRenderedItems",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>All matching items</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Container.html",
        "linenr": 53,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "name": "getRenderedItems",
        "owner": "Ext.layout.container.Container",
        "doc": "<p>Returns all items that are rendered</p>\n"
      },
      {
        "shortDoc": "Returns the owner component's resize element. ...",
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getTarget",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer.html",
        "linenr": 68,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "getTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns the owner component's resize element.</p>\n"
      },
      {
        "shortDoc": "Returns all items that are both rendered and visible ...",
        "params": [

        ],
        "href": "Container.html#Ext-layout-container-Container-method-getVisibleItems",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>All matching items</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Container.html",
        "linenr": 76,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "name": "getVisibleItems",
        "owner": "Ext.layout.container.Container",
        "doc": "<p>Returns all items that are both rendered and visible</p>\n"
      },
      {
        "shortDoc": "Sets the active (visible) component in the layout to the next card ...",
        "params": [

        ],
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-next",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>the activated component or false when nothing activated.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractCard.html",
        "linenr": 144,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "next",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Sets the active (visible) component in the layout to the next card</p>\n"
      },
      {
        "shortDoc": "Sets the active (visible) component in the layout to the previous card ...",
        "params": [

        ],
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-prev",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>the activated component or false when nothing activated.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractCard.html",
        "linenr": 168,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "prev",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Sets the active (visible) component in the layout to the previous card</p>\n"
      },
      {
        "shortDoc": "Makes the given card active. ...",
        "params": [
          {
            "type": "Ext.Component/Number/String",
            "optional": false,
            "doc": "<p>The component, component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a>,\n<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>, or index of component.</p>\n",
            "name": "newCard"
          }
        ],
        "href": "Card.html#Ext-layout-container-Card-method-setActiveItem",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>the activated component or false when nothing activated.\nFalse is returned also when trying to activate an already active card.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Card.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Card.js",
        "private": false,
        "name": "setActiveItem",
        "owner": "Ext.layout.container.Card",
        "doc": "<p>Makes the given card active.</p>\n\n<pre><code>var card1 = Ext.create('Ext.panel.Panel', {itemId: 'card-1'});\nvar card2 = Ext.create('Ext.panel.Panel', {itemId: 'card-2'});\nvar panel = Ext.create('Ext.panel.Panel', {\n    layout: 'card',\n    activeItem: 0,\n    items: [card1, card2]\n});\n// These are all equivalent\npanel.getLayout().setActiveItem(card2);\npanel.getLayout().setActiveItem('card-2');\npanel.getLayout().setActiveItem(1);\n</code></pre>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer.html",
        "linenr": 17,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "bindToOwnerCtComponent",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer.html",
        "linenr": 23,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "bindToOwnerCtContainer",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n"
      },
      {
        "shortDoc": "True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the ...",
        "type": "Boolean",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-cfg-deferredRender",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractCard.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "deferredRender",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the layout is rendered (defaults to false).  If there is a significant amount of content or\na lot of heavy controls being rendered into panels that are not displayed by default, setting this to\ntrue might improve performance.</p>\n"
      },
      {
        "shortDoc": "An optional extra CSS class that will be added to the container. ...",
        "type": "String",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractContainer.html",
        "linenr": 29,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "itemCls",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-componentCls\" rel=\"Ext.Component-cfg-componentCls\" class=\"docClass\">componentCls</a> also.</p>\n\n\n<p></p></p>\n"
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
    "Ext.layout.CardLayout"
  ],
  "html_filename": "Card.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Card.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.layout.container.Card",
  "doc": "<p>This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be\nvisible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.\nThis class is intended to be extended or created via the layout:'card' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n<p>The CardLayout's focal method is <a href=\"#/api/Ext.layout.container.Card-method-setActiveItem\" rel=\"Ext.layout.container.Card-method-setActiveItem\" class=\"docClass\">setActiveItem</a>.  Since only one panel is displayed at a time,\nthe only way to move from one Component to the next is by calling setActiveItem, passing the id or index of\nthe next panel to display.  The layout itself does not provide a user interface for handling this navigation,\nso that functionality must be provided by the developer.</p>\n\n<p>To change the active card of a container, call the setActiveItem method of its layout:</p>\n\n<pre><code>var p = new Ext.panel.Panel({\n    layout: 'card',\n    items: [\n        {html: 'Card 1'},\n        {html: 'Card 2'}\n    ],\n    renderTo: Ext.getBody()\n});\n\np.getLayout().setActiveItem(1);\n</code></pre>\n\n<p>In the following example, a simplistic wizard setup is demonstrated.  A button bar is added\nto the footer of the containing panel to provide navigation buttons.  The buttons will be handled by a\ncommon navigation routine.  Note that other uses of a CardLayout (like a tab control) would require a\ncompletely different implementation.  For serious implementations, a better approach would be to extend\nCardLayout to provide the custom functionality needed.</p>\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Card/Ext.layout.container.Card.png\" alt=\"Ext.layout.container.Card container layout\"></p></p>\n\n<p>Example usage:</p>\n\n<pre><code>var navigate = function(panel, direction){\n    // This routine could contain business logic required to manage the navigation steps.\n    // It would call setActiveItem as needed, manage navigation button state, handle any\n    // branching logic that might be required, handle alternate actions like cancellation\n    // or finalization, etc.  A complete wizard implementation could get pretty\n    // sophisticated depending on the complexity required, and should probably be\n    // done as a subclass of CardLayout in a real-world implementation.\n    var layout = panel.getLayout();\n    layout[direction]();\n    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());\n    Ext.getCmp('move-next').setDisabled(!layout.getNext());\n};\n\nExt.create('Ext.panel.Panel', {\n    title: 'Example Wizard',\n    width: 300,\n    height: 200,\n    layout: 'card',\n    bodyStyle: 'padding:15px',\n    defaults: {\n        // applied to each contained panel\n        border: false\n    },\n    // just an example of one possible navigation scheme, using buttons\n    bbar: [\n        {\n            id: 'move-prev',\n            text: 'Back',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"prev\");\n            },\n            disabled: true\n        },\n        '-&gt;', // greedy spacer so that the buttons are aligned to each side\n        {\n            id: 'move-next',\n            text: 'Next',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"next\");\n            }\n        }\n    ],\n    // the panels (or \"cards\") within the layout\n    items: [{\n        id: 'card-0',\n        html: '&lt;h1&gt;Welcome to the Wizard!&lt;/h1&gt;&lt;p&gt;Step 1 of 3&lt;/p&gt;'\n    },{\n        id: 'card-1',\n        html: '&lt;p&gt;Step 2 of 3&lt;/p&gt;'\n    },{\n        id: 'card-2',\n        html: '&lt;h1&gt;Congratulations!&lt;/h1&gt;&lt;p&gt;Step 3 of 3 - Complete&lt;/p&gt;'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "extends": "Ext.layout.container.AbstractCard",
  "docauthor": null
});