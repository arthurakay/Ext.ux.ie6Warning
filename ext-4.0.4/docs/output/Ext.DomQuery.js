Ext.data.JsonP.Ext_DomQuery({
  "href": "DomQuery.html#Ext-DomQuery",
  "component": false,
  "singleton": true,
  "code_type": "assignment",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Compiles a selector/xpath query into a reusable function. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector/xpath query</p>\n",
            "name": "selector"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Either \"select\" (the default) or \"simple\" for a simple selector match</p>\n",
            "name": "type"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-compile",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Function",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 432,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "compile",
        "owner": "Ext.DomQuery",
        "doc": "<p>Compiles a selector/xpath query into a reusable function. The returned function\ntakes one parameter \"root\" (optional), which is the context node from where the query should start.</p>\n"
      },
      {
        "shortDoc": "Filters an array of elements to only include matches of a simple selector (e.g. ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>An array of elements to filter</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The simple selector to test</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>If true, it returns the elements that DON'T match\nthe selector instead of the ones that match</p>\n",
            "name": "nonMatches"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-filter",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An Array of DOM elements which match the selector. If there are\nno matches, and empty Array is returned.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 690,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "filter",
        "owner": "Ext.DomQuery",
        "doc": "<p>Filters an array of elements to only include matches of a simple selector (e.g. div.some-class or span:first-child)</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed element(s) match the passed simple selector (e.g. ...",
        "params": [
          {
            "type": "String/HTMLElement/Array",
            "optional": false,
            "doc": "<p>An element id, element or array of elements</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The simple selector to test</p>\n",
            "name": "selector"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-is",
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
        "html_filename": "DomQuery.html",
        "linenr": 675,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "is",
        "owner": "Ext.DomQuery",
        "doc": "<p>Returns true if the passed element(s) match the passed simple selector (e.g. div.some-class or span:first-child)</p>\n"
      },
      {
        "shortDoc": "Selects an array of DOM nodes using JavaScript-only implementation. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector/xpath query (can be a comma separated list of selectors)</p>\n",
            "name": "selector"
          },
          {
            "type": "Node/String",
            "optional": true,
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
            "name": "root"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-jsSelect",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An Array of DOM elements which match the selector. If there are\nno matches, and empty Array is returned.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 526,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "jsSelect",
        "owner": "Ext.DomQuery",
        "doc": "<p>Selects an array of DOM nodes using JavaScript-only implementation.</p>\n\n<p>Use <a href=\"#/api/Ext.DomQuery-method-select\" rel=\"Ext.DomQuery-method-select\" class=\"docClass\">select</a> to take advantage of browsers built-in support for CSS selectors.</p>\n"
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
        "href": "DomQuery.html#Ext-DomQuery-method-select",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of DOM elements (not a NodeList as returned by <code>querySelectorAll</code>).\nEmpty array when no matches.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 581,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "select",
        "owner": "Ext.DomQuery",
        "doc": "<p>Selects an array of DOM nodes by CSS/XPath selector.</p>\n\n<p>Uses <a href=\"https://developer.mozilla.org/en/DOM/document.querySelectorAll\">document.querySelectorAll</a> if browser supports that, otherwise falls back to\n<a href=\"#/api/Ext.DomQuery-method-jsSelect\" rel=\"Ext.DomQuery-method-jsSelect\" class=\"docClass\">jsSelect</a> to do the work.</p>\n\n<p>Aliased as <a href=\"#/api/Ext-method-query\" rel=\"Ext-method-query\" class=\"docClass\">Ext.query</a>.</p>\n"
      },
      {
        "shortDoc": "Selects a single element. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector/xpath query</p>\n",
            "name": "selector"
          },
          {
            "type": "Node",
            "optional": true,
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
            "name": "root"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-selectNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Element",
          "doc": "<p>The DOM element which matched the selector.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 628,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "selectNode",
        "owner": "Ext.DomQuery",
        "doc": "<p>Selects a single element.</p>\n"
      },
      {
        "shortDoc": "Selects the value of a node, parsing integers and floats. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector/xpath query</p>\n",
            "name": "selector"
          },
          {
            "type": "Node",
            "optional": true,
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
            "name": "root"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "defaultValue"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-selectNumber",
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
        "html_filename": "DomQuery.html",
        "linenr": 663,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "selectNumber",
        "owner": "Ext.DomQuery",
        "doc": "<p>Selects the value of a node, parsing integers and floats. Returns the defaultValue, or 0 if none is specified.</p>\n"
      },
      {
        "shortDoc": "Selects the value of a node, optionally replacing null with the defaultValue. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector/xpath query</p>\n",
            "name": "selector"
          },
          {
            "type": "Node",
            "optional": true,
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
            "name": "root"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "defaultValue"
          }
        ],
        "href": "DomQuery.html#Ext-DomQuery-method-selectValue",
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
        "html_filename": "DomQuery.html",
        "linenr": 638,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "selectValue",
        "owner": "Ext.DomQuery",
        "doc": "<p>Selects the value of a node, optionally replacing null with the defaultValue.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "Collection of matching regular expressions and code snippets. ...",
        "type": "Object",
        "href": "DomQuery.html#Ext-DomQuery-property-matchers",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 708,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "matchers",
        "owner": "Ext.DomQuery",
        "doc": "<p>Collection of matching regular expressions and code snippets.\nEach capture group within () will be replace the {} in the select\nstatement as specified by their index.</p>\n"
      },
      {
        "shortDoc": "Collection of operator comparison functions. ...",
        "type": "Object",
        "href": "DomQuery.html#Ext-DomQuery-property-operators",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 731,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "operators",
        "owner": "Ext.DomQuery",
        "doc": "<p>Collection of operator comparison functions. The default operators are =, !=, ^=, $=, *=, %=, |= and ~=.\nNew operators can be added as long as the match the format <i>c</i>= where <i>c</i> is any character other than space, &gt; &lt;.</p>\n"
      },
      {
        "shortDoc": "Object hash of \"pseudo class\" filter functions which are used when filtering selections. ...",
        "type": "Object",
        "href": "DomQuery.html#Ext-DomQuery-property-pseudos",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "DomQuery.html",
        "linenr": 762,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "name": "pseudos",
        "owner": "Ext.DomQuery",
        "doc": "<p>Object hash of \"pseudo class\" filter functions which are used when filtering selections.\nEach function is passed two parameters:</p>\n\n<ul>\n<li><p><strong>c</strong> : Array\n  An Array of DOM elements to filter.</p></li>\n<li><p><strong>v</strong> : String\n  The argument (if any) supplied in the selector.</p></li>\n</ul>\n\n\n<p>A filter function returns an Array of DOM elements which conform to the pseudo class.\nIn addition to the provided pseudo classes listed above such as <code>first-child</code> and <code>nth-child</code>,\ndevelopers may add additional, custom psuedo class filters to select elements according to application-specific requirements.</p>\n\n<p>For example, to filter <code>a</code> elements to only return links to <strong>external</strong> resources:</p>\n\n<pre><code>Ext.DomQuery.pseudos.external = function(c, v){\n    var r = [], ri = -1;\n    for(var i = 0, ci; ci = c[i]; i++){\n        // Include in result set only if it's a link to an external resource\n        if(ci.hostname != location.hostname){\n            r[++ri] = ci;\n        }\n    }\n    return r;\n};\n</code></pre>\n\n<p>Then external links could be gathered with the following statement:</p>\n\n<pre><code>var externalLinks = Ext.select(\"a:external\");\n</code></pre>\n"
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
  "html_filename": "DomQuery.html",
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
  "linenr": 5,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.DomQuery",
  "doc": "<p>Provides high performance selector/xpath processing by compiling queries into reusable functions. New pseudo classes and matchers can be plugged. It works on HTML and XML documents (if a content node is passed in).</p>\n\n<p>\nDomQuery supports most of the <a href=\"http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#selectors\">CSS3 selectors spec</a>, along with some custom selectors and basic XPath.</p>\n\n\n\n\n<p>\nAll selectors, attribute filters and pseudos below can be combined infinitely in any order. For example \"div.foo:nth-child(odd)[@foo=bar].bar:first\" would be a perfectly valid selector. Node filters are processed in the order in which they appear, which allows you to optimize your queries for your document structure.\n</p>\n\n\n<h4>Element Selectors:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>*</b> any element</li>\n    <li> <b>E</b> an element with the tag E</li>\n    <li> <b>E F</b> All descendent elements of E that have the tag F</li>\n    <li> <b>E > F</b> or <b>E/F</b> all direct children elements of E that have the tag F</li>\n    <li> <b>E + F</b> all elements with the tag F that are immediately preceded by an element with the tag E</li>\n    <li> <b>E ~ F</b> all elements with the tag F that are preceded by a sibling element with the tag E</li>\n</ul>\n\n\n<h4>Attribute Selectors:</h4>\n\n\n<p>The use of &#64; and quotes are optional. For example, div[&#64;foo='bar'] is also a valid attribute selector.</p>\n\n\n<ul class=\"list\">\n    <li> <b>E[foo]</b> has an attribute \"foo\"</li>\n    <li> <b>E[foo=bar]</b> has an attribute \"foo\" that equals \"bar\"</li>\n    <li> <b>E[foo^=bar]</b> has an attribute \"foo\" that starts with \"bar\"</li>\n    <li> <b>E[foo$=bar]</b> has an attribute \"foo\" that ends with \"bar\"</li>\n    <li> <b>E[foo*=bar]</b> has an attribute \"foo\" that contains the substring \"bar\"</li>\n    <li> <b>E[foo%=2]</b> has an attribute \"foo\" that is evenly divisible by 2</li>\n    <li> <b>E[foo!=bar]</b> attribute \"foo\" does not equal \"bar\"</li>\n</ul>\n\n\n<h4>Pseudo Classes:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>E:first-child</b> E is the first child of its parent</li>\n    <li> <b>E:last-child</b> E is the last child of its parent</li>\n    <li> <b>E:nth-child(<i>n</i>)</b> E is the <i>n</i>th child of its parent (1 based as per the spec)</li>\n    <li> <b>E:nth-child(odd)</b> E is an odd child of its parent</li>\n    <li> <b>E:nth-child(even)</b> E is an even child of its parent</li>\n    <li> <b>E:only-child</b> E is the only child of its parent</li>\n    <li> <b>E:checked</b> E is an element that is has a checked attribute that is true (e.g. a radio or checkbox) </li>\n    <li> <b>E:first</b> the first E in the resultset</li>\n    <li> <b>E:last</b> the last E in the resultset</li>\n    <li> <b>E:nth(<i>n</i>)</b> the <i>n</i>th E in the resultset (1 based)</li>\n    <li> <b>E:odd</b> shortcut for :nth-child(odd)</li>\n    <li> <b>E:even</b> shortcut for :nth-child(even)</li>\n    <li> <b>E:contains(foo)</b> E's innerHTML contains the substring \"foo\"</li>\n    <li> <b>E:nodeValue(foo)</b> E contains a textNode with a nodeValue that equals \"foo\"</li>\n    <li> <b>E:not(S)</b> an E element that does not match simple selector S</li>\n    <li> <b>E:has(S)</b> an E element that has a descendent that matches simple selector S</li>\n    <li> <b>E:next(S)</b> an E element whose next sibling matches simple selector S</li>\n    <li> <b>E:prev(S)</b> an E element whose previous sibling matches simple selector S</li>\n    <li> <b>E:any(S1|S2|S2)</b> an E element which matches any of the simple selectors S1, S2 or S3//\\\\</li>\n</ul>\n\n\n<h4>CSS Value Selectors:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>E{display=none}</b> css value \"display\" that equals \"none\"</li>\n    <li> <b>E{display^=none}</b> css value \"display\" that starts with \"none\"</li>\n    <li> <b>E{display$=none}</b> css value \"display\" that ends with \"none\"</li>\n    <li> <b>E{display*=none}</b> css value \"display\" that contains the substring \"none\"</li>\n    <li> <b>E{display%=2}</b> css value \"display\" that is evenly divisible by 2</li>\n    <li> <b>E{display!=none}</b> css value \"display\" that does not equal \"none\"</li>\n</ul>\n\n",
  "extends": null,
  "docauthor": null
});