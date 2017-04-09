(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["flexTextarea"] = factory();
	else
		root["flexTextarea"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/yuchao/Documents/FEWoekSpace/度学金/vue-flex-textarea/src/flex-textarea.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4dcef010&file=flex-textarea.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./flex-textarea.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4dcef010&file=flex-textarea.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./flex-textarea.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n    textarea{\n        font-size: .4rem;\n    }\n    *{ font-size: .4rem;}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _autosize = __webpack_require__(6);

	var _autosize2 = _interopRequireDefault(_autosize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = '<textarea :rows="rows"  :value="value" :class="class" :placeholder="placeholder"></textarea>'; // <template>
	//        <autosize-textarea
	//        :rows="rows"
	//        :class="class"
	//        :value="value"
	//        :placeholder='placeholder'
	//        resized="onResized">
	//        </autosize-textarea>
	// </template>
	//
	// <script type="text/ecmascript-6">
	/**
	 * @file flex-textarea
	 * @author joyc-fe
	 *
	 * @since 3/27/2017
	 */

	var autosizeTextarea = {
	    props: ['rows', 'value', 'class', 'placeholder', 'resized'],
	    template: template,
	    ready: function ready() {
	        (0, _autosize2.default)(this.$el);
	        if (this.resized) {
	            this.$parent[this.resized](this.$el);
	        }
	    }
	};

	exports.default = {
	    props: ['rows', 'value', 'placeholder', 'class', 'resized'],
	    data: function data() {},

	    methods: {
	        onResized: function onResized() {
	            if (this.resized) {
	                if (!this.$parent[this.resized]) {
	                    throw ' function "' + this.resized + '" not found ';
	                }
	                return this.$parent[this.resized](this.$el);
	            }
	        }
	    },

	    components: {
	        autosizeTextarea: autosizeTextarea
	    },
	    created: function created() {}
	};
	// </script>
	//
	// <style  rel="stylesheet/css">
	//     textarea{
	//         font-size: .4rem;
	//     }
	//     *{ font-size: .4rem;}
	// </style>
	//
	//

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var map = typeof Map === "function" ? new Map() : function () {
	    var keys = [];
	    var values = [];

	    return {
	        has: function has(key) {
	            return keys.indexOf(key) > -1;
	        },
	        get: function get(key) {
	            return values[keys.indexOf(key)];
	        },
	        set: function set(key, value) {
	            if (keys.indexOf(key) === -1) {
	                keys.push(key);
	                values.push(value);
	            }
	        },
	        delete: function _delete(key) {
	            var index = keys.indexOf(key);
	            if (index > -1) {
	                keys.splice(index, 1);
	                values.splice(index, 1);
	            }
	        }
	    };
	}();

	var createEvent = function createEvent(name) {
	    return new Event(name, { bubbles: true });
	};
	try {
	    new Event('test');
	} catch (e) {
	    // IE does not support `new Event()`
	    createEvent = function createEvent(name) {
	        var evt = document.createEvent('Event');
	        evt.initEvent(name, true, false);
	        return evt;
	    };
	}

	function assign(ta) {
	    if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

	    var heightOffset = null;
	    var clientWidth = ta.clientWidth;
	    var cachedHeight = null;

	    function init() {
	        var style = window.getComputedStyle(ta, null);

	        if (style.resize === 'vertical') {
	            ta.style.resize = 'none';
	        } else if (style.resize === 'both') {
	            ta.style.resize = 'horizontal';
	        }

	        if (style.boxSizing === 'content-box') {
	            heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
	        } else {
	            heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
	        }
	        // Fix when a textarea is not on document body and heightOffset is Not a Number
	        if (isNaN(heightOffset)) {
	            heightOffset = 0;
	        }

	        update();
	    }

	    function changeOverflow(value) {
	        {
	            // Chrome/Safari-specific fix:
	            // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
	            // made available by removing the scrollbar. The following forces the necessary text reflow.
	            var width = ta.style.width;
	            ta.style.width = '0px';
	            // Force reflow:
	            /* jshint ignore:start */
	            ta.offsetWidth;
	            /* jshint ignore:end */
	            ta.style.width = width;
	        }

	        ta.style.overflowY = value;
	    }

	    function getParentOverflows(el) {
	        var arr = [];

	        while (el && el.parentNode && el.parentNode instanceof Element) {
	            if (el.parentNode.scrollTop) {
	                arr.push({
	                    node: el.parentNode,
	                    scrollTop: el.parentNode.scrollTop
	                });
	            }
	            el = el.parentNode;
	        }

	        return arr;
	    }

	    function resize() {
	        var originalHeight = ta.style.height;
	        var overflows = getParentOverflows(ta);
	        var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

	        ta.style.height = 'auto';

	        var endHeight = ta.scrollHeight + heightOffset;

	        if (ta.scrollHeight === 0) {
	            // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
	            ta.style.height = originalHeight;
	            return;
	        }

	        ta.style.height = endHeight + 'px';

	        // used to check if an update is actually necessary on window.resize
	        clientWidth = ta.clientWidth;

	        // prevents scroll-position jumping
	        overflows.forEach(function (el) {
	            el.node.scrollTop = el.scrollTop;
	        });

	        if (docTop) {
	            document.documentElement.scrollTop = docTop;
	        }
	    }

	    function update() {
	        resize();

	        var styleHeight = Math.round(parseFloat(ta.style.height));
	        var computed = window.getComputedStyle(ta, null);
	        var actualHeight = Math.round(parseFloat(computed.height));

	        // The actual height not matching the style height (set via the resize method) indicates that
	        // the max-height has been exceeded, in which case the overflow should be set to visible.
	        if (actualHeight !== styleHeight) {
	            if (computed.overflowY !== 'visible') {
	                changeOverflow('visible');
	                resize();
	                actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
	            }
	        } else {
	            // Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
	            if (computed.overflowY !== 'hidden') {
	                changeOverflow('hidden');
	                resize();
	                actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
	            }
	        }

	        if (cachedHeight !== actualHeight) {
	            cachedHeight = actualHeight;
	            var evt = createEvent('autosize:resized');
	            try {
	                ta.dispatchEvent(evt);
	            } catch (err) {
	                // Firefox will throw an error on dispatchEvent for a detached element
	                // https://bugzilla.mozilla.org/show_bug.cgi?id=889376
	            }
	        }
	    }

	    var pageResize = function pageResize() {
	        if (ta.clientWidth !== clientWidth) {
	            update();
	        }
	    };

	    var destroy = function (style) {
	        window.removeEventListener('resize', pageResize, false);
	        ta.removeEventListener('input', update, false);
	        ta.removeEventListener('keyup', update, false);
	        ta.removeEventListener('autosize:destroy', destroy, false);
	        ta.removeEventListener('autosize:update', update, false);

	        Object.keys(style).forEach(function (key) {
	            ta.style[key] = style[key];
	        });

	        map.delete(ta);
	    }.bind(ta, {
	        height: ta.style.height,
	        resize: ta.style.resize,
	        overflowY: ta.style.overflowY,
	        overflowX: ta.style.overflowX,
	        wordWrap: ta.style.wordWrap
	    });

	    ta.addEventListener('autosize:destroy', destroy, false);

	    // IE9 does not fire onpropertychange or oninput for deletions,
	    // so binding to onkeyup to catch most of those events.
	    // There is no way that I know of to detect something like 'cut' in IE9.
	    if ('onpropertychange' in ta && 'oninput' in ta) {
	        ta.addEventListener('keyup', update, false);
	    }

	    window.addEventListener('resize', pageResize, false);
	    ta.addEventListener('input', update, false);
	    ta.addEventListener('autosize:update', update, false);
	    ta.style.overflowX = 'hidden';
	    ta.style.wordWrap = 'break-word';

	    map.set(ta, {
	        destroy: destroy,
	        update: update
	    });

	    init();
	}

	function destroy(ta) {
	    var methods = map.get(ta);
	    if (methods) {
	        methods.destroy();
	    }
	}

	function update(ta) {
	    var methods = map.get(ta);
	    if (methods) {
	        methods.update();
	    }
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
	    autosize = function autosize(el) {
	        return el;
	    };
	    autosize.destroy = function (el) {
	        return el;
	    };
	    autosize.update = function (el) {
	        return el;
	    };
	} else {
	    autosize = function autosize(el, options) {
	        if (el) {
	            Array.prototype.forEach.call(el.length ? el : [el], function (x) {
	                return assign(x, options);
	            });
	        }
	        return el;
	    };
	    autosize.destroy = function (el) {
	        if (el) {
	            Array.prototype.forEach.call(el.length ? el : [el], destroy);
	        }
	        return el;
	    };
	    autosize.update = function (el) {
	        if (el) {
	            Array.prototype.forEach.call(el.length ? el : [el], update);
	        }
	        return el;
	    };
	}

	exports.default = autosize;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n       <autosize-textarea\n       :rows=\"rows\"\n       :class=\"class\"\n       :value=\"value\"\n       :placeholder='placeholder'\n       resized=\"onResized\">\n       </autosize-textarea>\n";

/***/ }
/******/ ])
});
;