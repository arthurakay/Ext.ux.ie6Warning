Ext.data.JsonP.Ext_String({
  "href": "String.html#Ext-String",
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
        "shortDoc": "Capitalize the given string ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-capitalize",
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
        "html_filename": "String.html",
        "linenr": 101,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "capitalize",
        "owner": "Ext.String",
        "doc": "<p>Capitalize the given string</p>\n"
      },
      {
        "shortDoc": "Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to truncate</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The maximum length to allow before truncating</p>\n",
            "name": "length"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to try to find a common word break</p>\n",
            "name": "word"
          }
        ],
        "href": "String.html#Ext-String-method-ellipsis",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The converted text</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "String.html",
        "linenr": 110,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "ellipsis",
        "owner": "Ext.String",
        "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n"
      },
      {
        "shortDoc": "Escapes the passed string for ' and \\ ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to escape</p>\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-escape",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The escaped string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "String.html",
        "linenr": 140,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "escape",
        "owner": "Ext.String",
        "doc": "<p>Escapes the passed string for ' and \\</p>\n"
      },
      {
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-escapeRegex",
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
        "html_filename": "String.html",
        "linenr": 131,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "escapeRegex",
        "owner": "Ext.String",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n"
      },
      {
        "shortDoc": "Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The tokenized string to be formatted</p>\n",
            "name": "string"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to replace token {0}</p>\n",
            "name": "value1"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Etc...</p>\n",
            "name": "value2"
          }
        ],
        "href": "String.html#Ext-String-method-format",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The formatted string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "String.html",
        "linenr": 192,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "format",
        "owner": "Ext.String",
        "doc": "<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n"
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
        "href": "String.html#Ext-String-method-htmlDecode",
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
        "html_filename": "String.html",
        "linenr": 41,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "htmlDecode",
        "owner": "Ext.String",
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
        "href": "String.html#Ext-String-method-htmlEncode",
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
        "html_filename": "String.html",
        "linenr": 14,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "htmlEncode",
        "owner": "Ext.String",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n"
      },
      {
        "shortDoc": "Pads the left side of a string with a specified character. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The original string</p>\n",
            "name": "string"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The total length of the output string</p>\n",
            "name": "size"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The character with which to pad the original string (defaults to empty string \" \")</p>\n",
            "name": "character"
          }
        ],
        "href": "String.html#Ext-String-method-leftPad",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The padded string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "String.html",
        "linenr": 170,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "leftPad",
        "owner": "Ext.String",
        "doc": "<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n"
      },
      {
        "shortDoc": "Returns a string with a specified number of repititions a given string pattern. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The pattern to repeat.</p>\n",
            "name": "pattern"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of times to repeat the pattern (may be 0).</p>\n",
            "name": "count"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>An option string to separate each pattern.</p>\n",
            "name": "sep"
          }
        ],
        "href": "String.html#Ext-String-method-repeat",
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
        "html_filename": "String.html",
        "linenr": 212,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "repeat",
        "owner": "Ext.String",
        "doc": "<p>Returns a string with a specified number of repititions a given string pattern.\nThe pattern be separated by a different string.</p>\n\n<pre><code> var s = Ext.String.repeat('---', 4); // = '------------'\n var t = Ext.String.repeat('--', 3, '/'); // = '--/--/--'\n</code></pre>\n"
      },
      {
        "shortDoc": "Utility function that allows you to easily switch a string between two alternating values. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The current string</p>\n",
            "name": "string"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to compare to the current string</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new value to use if the string already equals the first value passed in</p>\n",
            "name": "other"
          }
        ],
        "href": "String.html#Ext-String-method-toggle",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The new value</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "String.html",
        "linenr": 149,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "toggle",
        "owner": "Ext.String",
        "doc": "<p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>    // alternate sort directions\n    sort = Ext.String.toggle(sort, 'ASC', 'DESC');\n\n    // instead of conditional logic:\n    sort = (sort == 'ASC' ? 'DESC' : 'ASC');\n       </code></pre>\n\n"
      },
      {
        "shortDoc": "Trims whitespace from either end of a string, leaving spaces within the string intact. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to escape</p>\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-trim",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The trimmed string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "String.html",
        "linenr": 87,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "trim",
        "owner": "Ext.String",
        "doc": "<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n"
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
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-urlAppend",
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
        "html_filename": "String.html",
        "linenr": 72,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "name": "urlAppend",
        "owner": "Ext.String",
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n"
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
  "html_filename": "String.html",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.String",
  "doc": "<p>A collection of useful static methods to deal with strings</p>\n",
  "extends": null,
  "docauthor": null
});