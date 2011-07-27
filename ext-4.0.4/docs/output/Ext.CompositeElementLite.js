Ext.data.JsonP.Ext_CompositeElementLite({
  "href": "CompositeElementLite-more.html#Ext-CompositeElementLite",
  "component": false,
  "singleton": false,
  "code_type": "assignment",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Adds elements to this Composite object. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Either an Array of DOM elements to add, or another Composite object who's elements should be added.</p>\n",
            "name": "els"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-add",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>This Composite object.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 75,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "add",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Adds elements to this Composite object.</p>\n"
      },
      {
        "shortDoc": "Removes all elements. ...",
        "params": [

        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-clear",
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
        "html_filename": "CompositeElementLite.html",
        "linenr": 246,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "clear",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Removes all elements.</p>\n"
      },
      {
        "shortDoc": "Returns true if this composite contains the passed element ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
            "name": "el"
          }
        ],
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-contains",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Boolean</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite-more.html",
        "linenr": 35,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "name": "contains",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns true if this composite contains the passed element</p>\n"
      },
      {
        "shortDoc": "Calls the passed function for each element in this composite. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call. The function is passed the following parameters:<ul>\n<li><b>el</b> : Element<div class=\"sub-desc\">The current Element in the iteration.\n<b>This is the flyweight (shared) <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> instance, so if you require a\na reference to the dom node, use el.dom.</b></div></li>\n<li><b>c</b> : Composite<div class=\"sub-desc\">This Composite object.</div></li>\n<li><b>idx</b> : Number<div class=\"sub-desc\">The zero-based index in the iteration.</div></li>\n</ul></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<i>this</i> reference) in which the function is executed. (defaults to the Element)</p>\n",
            "name": "scope"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-each",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 145,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "each",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Calls the passed function for each element in this composite.</p>\n\n"
      },
      {
        "shortDoc": "Clears this Composite and adds the elements passed. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Either an array of DOM elements, or another Composite from which to fill this Composite.</p>\n",
            "name": "els"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-fill",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 175,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "fill",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Clears this Composite and adds the elements passed.</p>\n"
      },
      {
        "shortDoc": "Filters this composite to only elements that match the passed selector. ...",
        "params": [
          {
            "type": "String/Function",
            "optional": false,
            "doc": "<p>A string CSS selector or a comparison function.\nThe comparison function will be called with the following arguments:<ul>\n<li><code>el</code> : Ext.core.Element<div class=\"sub-desc\">The current DOM element.</div></li>\n<li><code>index</code> : Number<div class=\"sub-desc\">The current index within the collection.</div></li>\n</ul></p>\n",
            "name": "selector"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-filter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 187,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "filter",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Filters this composite to only elements that match the passed selector.</p>\n"
      },
      {
        "shortDoc": "Returns the first Element ...",
        "params": [

        ],
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-first",
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
        "html_filename": "CompositeElementLite-more.html",
        "linenr": 19,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "name": "first",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns the first Element</p>\n"
      },
      {
        "shortDoc": "Returns the number of elements in this Composite. ...",
        "params": [

        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-getCount",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Number</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 68,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "getCount",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns the number of elements in this Composite.</p>\n"
      },
      {
        "shortDoc": "Find the index of the passed element within the composite collection. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
            "name": "el"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-indexOf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>Number The index of the passed <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> in the composite collection, or -1 if not found.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 214,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "indexOf",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Find the index of the passed element within the composite collection.</p>\n"
      },
      {
        "shortDoc": "Returns a flyweight Element of the dom element object at the specified index ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-item",
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
        "html_filename": "CompositeElementLite.html",
        "linenr": 115,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "item",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns a flyweight Element of the dom element object at the specified index</p>\n"
      },
      {
        "shortDoc": "Returns the last Element ...",
        "params": [

        ],
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-last",
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
        "html_filename": "CompositeElementLite-more.html",
        "linenr": 27,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "name": "last",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns the last Element</p>\n"
      },
      {
        "shortDoc": "Removes the specified element(s). ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nor an array of any of those.</p>\n",
            "name": "el"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to also remove the element from the document</p>\n",
            "name": "removeDom"
          }
        ],
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-removeElement",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite-more.html",
        "linenr": 44,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "name": "removeElement",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Removes the specified element(s).</p>\n"
      },
      {
        "shortDoc": "Replaces the specified element with the passed element. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nto replace.</p>\n",
            "name": "el"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of an element or the Element itself.</p>\n",
            "name": "replacement"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to remove and replace the element in the document too.</p>\n",
            "name": "domReplace"
          }
        ],
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-replaceElement",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 223,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "replaceElement",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Replaces the specified element with the passed element.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "The Array of DOM elements which this CompositeElement encapsulates. ...",
        "type": "Array",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-property-elements",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "CompositeElementLite.html",
        "linenr": 20,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "elements",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>The Array of DOM elements which this CompositeElement encapsulates. Read-only.</p>\n\n\n<p>This will not <i>usually</i> be accessed in developers' code, but developers wishing\nto augment the capabilities of the CompositeElementLite class may use it when adding\nmethods to the class.</p>\n\n\n<p>For example to add the <code>nextAll</code> method to the class to <b>add</b> all\nfollowing siblings of selected elements, the code would be</p>\n\n\n<p><code></p>\n\n<pre>Ext.override(Ext.CompositeElementLite, {\n    nextAll: function() {\n        var els = this.elements, i, l = els.length, n, r = [], ri = -1;\n\n//      Loop through all elements in this Composite, accumulating\n//      an Array of all siblings.\n        for (i = 0; i < l; i++) {\n            for (n = els[i].nextSibling; n; n = n.nextSibling) {\n                r[++ri] = n;\n            }\n        }\n\n//      Add all found siblings to this Composite\n        return this.add(r);\n    }\n});</pre>\n\n\n<p></code></p>\n"
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
  "html_filename": "CompositeElementLite-more.html",
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
    "Ext.CompositeElement"
  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.CompositeElementLite",
  "doc": "<p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter\nmembers, or to perform collective actions upon the whole set.</p>\n\n\n<p>Although they are not listed, this class supports all of the methods of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> and\n<a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a>. The methods from these classes will be performed on all the elements in this collection.</p>\n\n\n<p>Example:</p>\n\n<pre><code>var els = Ext.select(\"#some-el div.some-class\");\n// or select directly from an existing element\nvar el = Ext.get('some-el');\nel.select('div.some-class');\n\nels.setWidth(100); // all elements become 100 width\nels.hide(true); // all elements fade out and hide\n// or\nels.setWidth(100).hide(true);\n</code></pre>\n\n",
  "extends": null,
  "docauthor": null,
  "xtype": null
});