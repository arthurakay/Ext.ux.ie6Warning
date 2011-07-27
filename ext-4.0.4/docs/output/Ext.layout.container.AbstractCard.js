Ext.data.JsonP.Ext_layout_container_AbstractCard({
  "href": "AbstractCard.html#Ext-layout-container-AbstractCard",
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
    "Ext.layout.container.Fit"
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

  ],
  "html_filename": "AbstractCard.html",
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
    "Ext.layout.container.Card"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.layout.container.AbstractCard",
  "doc": "<p>Abstract base class for <a href=\"#/api/Ext.layout.container.Card\" rel=\"Ext.layout.container.Card\" class=\"docClass\">Card layout</a>.</p>\n",
  "extends": "Ext.layout.container.Fit",
  "docauthor": null
});