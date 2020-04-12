/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__(1);

	var _promise2 = _interopRequireDefault(_promise);

	var _log = __webpack_require__(2);

	var _log2 = _interopRequireDefault(_log);

	var _appCtrl = __webpack_require__(5);

	var _appCtrl2 = _interopRequireDefault(_appCtrl);

	var _treeCtrl = __webpack_require__(259);

	var _treeCtrl2 = _interopRequireDefault(_treeCtrl);

	var _tabCtrl = __webpack_require__(279);

	var _tabCtrl2 = _interopRequireDefault(_tabCtrl);

	var _editorCtrl = __webpack_require__(288);

	var _editorCtrl2 = _interopRequireDefault(_editorCtrl);

	var _gutterCtrl = __webpack_require__(294);

	var _gutterCtrl2 = _interopRequireDefault(_gutterCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Globals
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(300);

	// Functions


	// Controllers


	//Start app
	if (!(0, _promise2.default)()) {

	    (0, _log2.default)('Compatibilité navigateur', 'non support des <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank">Promise</a>');
	} else {

	    (function () {

	        (0, _log2.default)('Document ready');

	        // Extending Prims : add class .keyword-nameOfKeyword
	        Prism.hooks.add('wrap', function (env) {
	            if (env.type !== "keyword") {
	                return;
	            }
	            env.classes.push('keyword-' + env.content);
	        });

	        (0, _appCtrl2.default)();
	        (0, _treeCtrl2.default)();
	        _tabCtrl2.default.init();
	        (0, _editorCtrl2.default)();
	        (0, _gutterCtrl2.default)();
	    })();
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var supportPromise = function supportPromise() {

	    if (typeof Promise !== 'undefined') {

	        return Promise.toString().indexOf("[native code]") !== -1;
	    } else {
	        return false;
	    }
	};

	exports.default = supportPromise;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _displayLog = __webpack_require__(3);

	var _displayLog2 = _interopRequireDefault(_displayLog);

	var _http = __webpack_require__(4);

	var _http2 = _interopRequireDefault(_http);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Display alert
	 * =============
	 * @param  {string} sMsg   => message to show
	 * @param  {boolean} bError   => if is error
	 * @return display alert
	 */
	var LogCtrl = function LogCtrl(sMsg) {
	    var bError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	    if (typeof config == 'undefined') {
	        (0, _displayLog2.default)(sMsg, bError);
	    } else if (config.ENV == 'development') {
	        (0, _displayLog2.default)(sMsg, bError);
	    } else {

	        if (bError) {
	            console.warn('%c' + sMsg, 'color: red');
	        } else {
	            console.log('%c' + sMsg, 'color: green');
	        }
	    }
	};

	exports.default = LogCtrl;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var nContent = document.getElementById('jsLog');

	/**
	 * Display log
	 * ===========
	 * @param  {string} sMsg   => message to show
	 * @param  {boolean} bError   => if is error
	 * @return display alert
	 */
	var displayLog = function displayLog(sMsg) {
	    var bError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	    if (nContent !== null) {

	        if (!nContent.classList.contains('jsIsVisible')) {

	            nContent.classList.add('jsIsVisible');
	        }

	        var sClass = bError ? 'error' : '';

	        var sText = '<p class="' + sClass + '"><strong>' + sMsg + '</p>';

	        nContent.insertAdjacentHTML('beforeend', sText);

	        nContent.scrollTop = nContent.scrollHeight;
	    }
	};

	exports.default = displayLog;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * HTTP request
	 * ============
	 * @param  {string} sUrl 
	 * @return {object} => promise of result
	 * @thanks => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
	 */
	var $http = function $http(sUrl) {

	    'use strict';

	    var core = {

	        // Method that performs the ajax request
	        ajax: function ajax(method, sUrl, args) {

	            // Creating a promise
	            var promise = new Promise(function (resolve, reject) {

	                // Instantiates the XMLHttpRequest
	                var client = new XMLHttpRequest();
	                var uri = sUrl;

	                if (args && (method === 'POST' || method === 'PUT')) {

	                    uri += '?';

	                    var argcount = 0;

	                    for (var key in args) {

	                        if (args.hasOwnProperty(key)) {

	                            if (argcount++) {
	                                uri += '&';
	                            }
	                            uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
	                        }
	                    }
	                }

	                client.open(method, uri);

	                client.send();

	                client.onload = function () {

	                    if (this.status >= 200 && this.status < 300) {
	                        // Performs the function "resolve" when this.status is equal to 2xx
	                        resolve(this.response);
	                    } else {
	                        // Performs the function "reject" when this.status is different than 2xx
	                        reject(this.status + ' - ' + this.statusText);
	                    }
	                };

	                client.onerror = function () {
	                    reject(this.status + ' - ' + this.statusText);
	                };
	            });

	            // Return the promise
	            return promise;
	        }

	        // Adapter pattern
	    };return {
	        'get': function get(args) {
	            return core.ajax('GET', sUrl, args);
	        },
	        'post': function post(args) {
	            return core.ajax('POST', sUrl, args);
	        },
	        'put': function put(args) {
	            return core.ajax('PUT', sUrl, args);
	        },
	        'delete': function _delete(args) {
	            return core.ajax('DELETE', sUrl, args);
	        }
	    };
	};
	exports.default = $http;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AppComponent = __webpack_require__(6);

	var _AppComponent2 = _interopRequireDefault(_AppComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appCtrl = function appCtrl() {

	    var oApp = {
	        "fileName": "/home/laurentperroteau/www/cv/web/"
	    };

	    var App = new _AppComponent2.default('app');

	    App.setData(oApp);

	    App.initTemplate();
	};
	exports.default = appCtrl;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CreateComponent2 = __webpack_require__(7);

	var _CreateComponent3 = _interopRequireDefault(_CreateComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppComponent = function (_CreateComponent) {
	    _inherits(AppComponent, _CreateComponent);

	    function AppComponent(sName) {
	        _classCallCheck(this, AppComponent);

	        var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this, sName));

	        _this.sName = sName;
	        return _this;
	    }

	    return AppComponent;
	}(_CreateComponent3.default);

	exports.default = AppComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _log = __webpack_require__(2);

	var _log2 = _interopRequireDefault(_log);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _fp_camelCase = __webpack_require__(8);

	var rivets = __webpack_require__(238);

	rivets.configure({
	    prefix: 'my',
	    templateDelimiters: ['{{', '}}']
	});

	/**
	 * Helper to create screen
	 *
	 * @param string sName normalise name of screen
	 */

	var CreateComponent = function () {
	    function CreateComponent(sName) {
	        _classCallCheck(this, CreateComponent);

	        this.sName = sName;
	        this.oData = undefined;
	        this.nComponent = null;
	    }

	    _createClass(CreateComponent, [{
	        key: 'setData',
	        value: function setData(oData) {
	            this.oData = oData;
	        }
	    }, {
	        key: 'initTemplate',
	        value: function initTemplate() {

	            // Get path screens
	            var sPath = this.sName + '/' + this.sName;

	            // Get template htlm
	            var html = __webpack_require__(240)("./" + sPath + '.html');

	            // Add CSS
	            __webpack_require__(246)("./" + sPath + '.css');

	            // Insert HTML
	            if (this.nComponent === null) {

	                // It's a screens, and should be once.. then use an ID
	                // ex: editor => jsEditor
	                this.nComponent = document.getElementById(_fp_camelCase('js ' + this.sName));

	                if (this.nComponent !== null && html != '') {

	                    // Insert template
	                    this.nComponent.innerHTML = html;

	                    // Add node and data binding
	                    rivets.bind(this.nComponent, this.oData);

	                    (0, _log2.default)('Init template: ' + this.sName);
	                } else {
	                    console.warn('The element ' + this.sName + ' is null or empty');
	                }
	            }
	        }
	    }, {
	        key: 'setEventOnNodeList',
	        value: function setEventOnNodeList(event, selector, method) {
	            var _this = this;

	            var nItemS = this.nComponent.querySelectorAll(selector);

	            Array.from(nItemS).forEach(function (nItem) {

	                nItem.addEventListener(event, function (e) {
	                    return _this[method](e);
	                }, false);
	            });
	        }
	    }]);

	    return CreateComponent;
	}();

	exports.default = CreateComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(9),
	    func = convert('camelCase', __webpack_require__(218), __webpack_require__(237));

	func.placeholder = __webpack_require__(12);
	module.exports = func;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var baseConvert = __webpack_require__(10),
	    util = __webpack_require__(13);

	/**
	 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
	 * version with conversion `options` applied. If `name` is an object its methods
	 * will be converted.
	 *
	 * @param {string} name The name of the function to wrap.
	 * @param {Function} [func] The function to wrap.
	 * @param {Object} [options] The options object. See `baseConvert` for more details.
	 * @returns {Function|Object} Returns the converted function or object.
	 */
	function convert(name, func, options) {
	  return baseConvert(util, name, func, options);
	}

	module.exports = convert;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var mapping = __webpack_require__(11),
	    fallbackHolder = __webpack_require__(12);

	/** Built-in value reference. */
	var push = Array.prototype.push;

	/**
	 * Creates a function, with an arity of `n`, that invokes `func` with the
	 * arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} n The arity of the new function.
	 * @returns {Function} Returns the new function.
	 */
	function baseArity(func, n) {
	  return n == 2
	    ? function(a, b) { return func.apply(undefined, arguments); }
	    : function(a) { return func.apply(undefined, arguments); };
	}

	/**
	 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
	 * any additional arguments.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} n The arity cap.
	 * @returns {Function} Returns the new function.
	 */
	function baseAry(func, n) {
	  return n == 2
	    ? function(a, b) { return func(a, b); }
	    : function(a) { return func(a); };
	}

	/**
	 * Creates a clone of `array`.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the cloned array.
	 */
	function cloneArray(array) {
	  var length = array ? array.length : 0,
	      result = Array(length);

	  while (length--) {
	    result[length] = array[length];
	  }
	  return result;
	}

	/**
	 * Creates a function that clones a given object using the assignment `func`.
	 *
	 * @private
	 * @param {Function} func The assignment function.
	 * @returns {Function} Returns the new cloner function.
	 */
	function createCloner(func) {
	  return function(object) {
	    return func({}, object);
	  };
	}

	/**
	 * A specialized version of `_.spread` which flattens the spread array into
	 * the arguments of the invoked `func`.
	 *
	 * @private
	 * @param {Function} func The function to spread arguments over.
	 * @param {number} start The start position of the spread.
	 * @returns {Function} Returns the new function.
	 */
	function flatSpread(func, start) {
	  return function() {
	    var length = arguments.length,
	        lastIndex = length - 1,
	        args = Array(length);

	    while (length--) {
	      args[length] = arguments[length];
	    }
	    var array = args[start],
	        otherArgs = args.slice(0, start);

	    if (array) {
	      push.apply(otherArgs, array);
	    }
	    if (start != lastIndex) {
	      push.apply(otherArgs, args.slice(start + 1));
	    }
	    return func.apply(this, otherArgs);
	  };
	}

	/**
	 * Creates a function that wraps `func` and uses `cloner` to clone the first
	 * argument it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} cloner The function to clone arguments.
	 * @returns {Function} Returns the new immutable function.
	 */
	function wrapImmutable(func, cloner) {
	  return function() {
	    var length = arguments.length;
	    if (!length) {
	      return;
	    }
	    var args = Array(length);
	    while (length--) {
	      args[length] = arguments[length];
	    }
	    var result = args[0] = cloner.apply(undefined, args);
	    func.apply(undefined, args);
	    return result;
	  };
	}

	/**
	 * The base implementation of `convert` which accepts a `util` object of methods
	 * required to perform conversions.
	 *
	 * @param {Object} util The util object.
	 * @param {string} name The name of the function to convert.
	 * @param {Function} func The function to convert.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
	 * @param {boolean} [options.curry=true] Specify currying.
	 * @param {boolean} [options.fixed=true] Specify fixed arity.
	 * @param {boolean} [options.immutable=true] Specify immutable operations.
	 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
	 * @returns {Function|Object} Returns the converted function or object.
	 */
	function baseConvert(util, name, func, options) {
	  var isLib = typeof name == 'function',
	      isObj = name === Object(name);

	  if (isObj) {
	    options = func;
	    func = name;
	    name = undefined;
	  }
	  if (func == null) {
	    throw new TypeError;
	  }
	  options || (options = {});

	  var config = {
	    'cap': 'cap' in options ? options.cap : true,
	    'curry': 'curry' in options ? options.curry : true,
	    'fixed': 'fixed' in options ? options.fixed : true,
	    'immutable': 'immutable' in options ? options.immutable : true,
	    'rearg': 'rearg' in options ? options.rearg : true
	  };

	  var defaultHolder = isLib ? func : fallbackHolder,
	      forceCurry = ('curry' in options) && options.curry,
	      forceFixed = ('fixed' in options) && options.fixed,
	      forceRearg = ('rearg' in options) && options.rearg,
	      pristine = isLib ? func.runInContext() : undefined;

	  var helpers = isLib ? func : {
	    'ary': util.ary,
	    'assign': util.assign,
	    'clone': util.clone,
	    'curry': util.curry,
	    'forEach': util.forEach,
	    'isArray': util.isArray,
	    'isError': util.isError,
	    'isFunction': util.isFunction,
	    'isWeakMap': util.isWeakMap,
	    'iteratee': util.iteratee,
	    'keys': util.keys,
	    'rearg': util.rearg,
	    'toInteger': util.toInteger,
	    'toPath': util.toPath
	  };

	  var ary = helpers.ary,
	      assign = helpers.assign,
	      clone = helpers.clone,
	      curry = helpers.curry,
	      each = helpers.forEach,
	      isArray = helpers.isArray,
	      isError = helpers.isError,
	      isFunction = helpers.isFunction,
	      isWeakMap = helpers.isWeakMap,
	      keys = helpers.keys,
	      rearg = helpers.rearg,
	      toInteger = helpers.toInteger,
	      toPath = helpers.toPath;

	  var aryMethodKeys = keys(mapping.aryMethod);

	  var wrappers = {
	    'castArray': function(castArray) {
	      return function() {
	        var value = arguments[0];
	        return isArray(value)
	          ? castArray(cloneArray(value))
	          : castArray.apply(undefined, arguments);
	      };
	    },
	    'iteratee': function(iteratee) {
	      return function() {
	        var func = arguments[0],
	            arity = arguments[1],
	            result = iteratee(func, arity),
	            length = result.length;

	        if (config.cap && typeof arity == 'number') {
	          arity = arity > 2 ? (arity - 2) : 1;
	          return (length && length <= arity) ? result : baseAry(result, arity);
	        }
	        return result;
	      };
	    },
	    'mixin': function(mixin) {
	      return function(source) {
	        var func = this;
	        if (!isFunction(func)) {
	          return mixin(func, Object(source));
	        }
	        var pairs = [];
	        each(keys(source), function(key) {
	          if (isFunction(source[key])) {
	            pairs.push([key, func.prototype[key]]);
	          }
	        });

	        mixin(func, Object(source));

	        each(pairs, function(pair) {
	          var value = pair[1];
	          if (isFunction(value)) {
	            func.prototype[pair[0]] = value;
	          } else {
	            delete func.prototype[pair[0]];
	          }
	        });
	        return func;
	      };
	    },
	    'nthArg': function(nthArg) {
	      return function(n) {
	        var arity = n < 0 ? 1 : (toInteger(n) + 1);
	        return curry(nthArg(n), arity);
	      };
	    },
	    'rearg': function(rearg) {
	      return function(func, indexes) {
	        var arity = indexes ? indexes.length : 0;
	        return curry(rearg(func, indexes), arity);
	      };
	    },
	    'runInContext': function(runInContext) {
	      return function(context) {
	        return baseConvert(util, runInContext(context), options);
	      };
	    }
	  };

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Casts `func` to a function with an arity capped iteratee if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @returns {Function} Returns the cast function.
	   */
	  function castCap(name, func) {
	    if (config.cap) {
	      var indexes = mapping.iterateeRearg[name];
	      if (indexes) {
	        return iterateeRearg(func, indexes);
	      }
	      var n = !isLib && mapping.iterateeAry[name];
	      if (n) {
	        return iterateeAry(func, n);
	      }
	    }
	    return func;
	  }

	  /**
	   * Casts `func` to a curried function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */
	  function castCurry(name, func, n) {
	    return (forceCurry || (config.curry && n > 1))
	      ? curry(func, n)
	      : func;
	  }

	  /**
	   * Casts `func` to a fixed arity function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the cast function.
	   */
	  function castFixed(name, func, n) {
	    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
	      var data = mapping.methodSpread[name],
	          start = data && data.start;

	      return start  === undefined ? ary(func, n) : flatSpread(func, start);
	    }
	    return func;
	  }

	  /**
	   * Casts `func` to an rearged function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */
	  function castRearg(name, func, n) {
	    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
	      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
	      : func;
	  }

	  /**
	   * Creates a clone of `object` by `path`.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @param {Array|string} path The path to clone by.
	   * @returns {Object} Returns the cloned object.
	   */
	  function cloneByPath(object, path) {
	    path = toPath(path);

	    var index = -1,
	        length = path.length,
	        lastIndex = length - 1,
	        result = clone(Object(object)),
	        nested = result;

	    while (nested != null && ++index < length) {
	      var key = path[index],
	          value = nested[key];

	      if (value != null &&
	          !(isFunction(value) || isError(value) || isWeakMap(value))) {
	        nested[key] = clone(index == lastIndex ? value : Object(value));
	      }
	      nested = nested[key];
	    }
	    return result;
	  }

	  /**
	   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
	   * version with conversion `options` applied.
	   *
	   * @param {Object} [options] The options object. See `baseConvert` for more details.
	   * @returns {Function} Returns the converted `lodash`.
	   */
	  function convertLib(options) {
	    return _.runInContext.convert(options)(undefined);
	  }

	  /**
	   * Create a converter function for `func` of `name`.
	   *
	   * @param {string} name The name of the function to convert.
	   * @param {Function} func The function to convert.
	   * @returns {Function} Returns the new converter function.
	   */
	  function createConverter(name, func) {
	    var realName = mapping.aliasToReal[name] || name,
	        methodName = mapping.remap[realName] || realName,
	        oldOptions = options;

	    return function(options) {
	      var newUtil = isLib ? pristine : helpers,
	          newFunc = isLib ? pristine[methodName] : func,
	          newOptions = assign(assign({}, oldOptions), options);

	      return baseConvert(newUtil, realName, newFunc, newOptions);
	    };
	  }

	  /**
	   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
	   * arguments, ignoring any additional arguments.
	   *
	   * @private
	   * @param {Function} func The function to cap iteratee arguments for.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the new function.
	   */
	  function iterateeAry(func, n) {
	    return overArg(func, function(func) {
	      return typeof func == 'function' ? baseAry(func, n) : func;
	    });
	  }

	  /**
	   * Creates a function that wraps `func` to invoke its iteratee with arguments
	   * arranged according to the specified `indexes` where the argument value at
	   * the first index is provided as the first argument, the argument value at
	   * the second index is provided as the second argument, and so on.
	   *
	   * @private
	   * @param {Function} func The function to rearrange iteratee arguments for.
	   * @param {number[]} indexes The arranged argument indexes.
	   * @returns {Function} Returns the new function.
	   */
	  function iterateeRearg(func, indexes) {
	    return overArg(func, function(func) {
	      var n = indexes.length;
	      return baseArity(rearg(baseAry(func, n), indexes), n);
	    });
	  }

	  /**
	   * Creates a function that invokes `func` with its first argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function() {
	      var length = arguments.length;
	      if (!length) {
	        return func();
	      }
	      var args = Array(length);
	      while (length--) {
	        args[length] = arguments[length];
	      }
	      var index = config.rearg ? 0 : (length - 1);
	      args[index] = transform(args[index]);
	      return func.apply(undefined, args);
	    };
	  }

	  /**
	   * Creates a function that wraps `func` and applys the conversions
	   * rules by `name`.
	   *
	   * @private
	   * @param {string} name The name of the function to wrap.
	   * @param {Function} func The function to wrap.
	   * @returns {Function} Returns the converted function.
	   */
	  function wrap(name, func, placeholder) {
	    var result,
	        realName = mapping.aliasToReal[name] || name,
	        wrapped = func,
	        wrapper = wrappers[realName];

	    if (wrapper) {
	      wrapped = wrapper(func);
	    }
	    else if (config.immutable) {
	      if (mapping.mutate.array[realName]) {
	        wrapped = wrapImmutable(func, cloneArray);
	      }
	      else if (mapping.mutate.object[realName]) {
	        wrapped = wrapImmutable(func, createCloner(func));
	      }
	      else if (mapping.mutate.set[realName]) {
	        wrapped = wrapImmutable(func, cloneByPath);
	      }
	    }
	    each(aryMethodKeys, function(aryKey) {
	      each(mapping.aryMethod[aryKey], function(otherName) {
	        if (realName == otherName) {
	          var data = mapping.methodSpread[realName],
	              afterRearg = data && data.afterRearg;

	          result = afterRearg
	            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
	            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

	          result = castCap(realName, result);
	          result = castCurry(realName, result, aryKey);
	          return false;
	        }
	      });
	      return !result;
	    });

	    result || (result = wrapped);
	    if (result == func) {
	      result = forceCurry ? curry(result, 1) : function() {
	        return func.apply(this, arguments);
	      };
	    }
	    result.convert = createConverter(realName, func);
	    result.placeholder = func.placeholder = placeholder;

	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  if (!isObj) {
	    return wrap(name, func, defaultHolder);
	  }
	  var _ = func;

	  // Convert methods by ary cap.
	  var pairs = [];
	  each(aryMethodKeys, function(aryKey) {
	    each(mapping.aryMethod[aryKey], function(key) {
	      var func = _[mapping.remap[key] || key];
	      if (func) {
	        pairs.push([key, wrap(key, func, _)]);
	      }
	    });
	  });

	  // Convert remaining methods.
	  each(keys(_), function(key) {
	    var func = _[key];
	    if (typeof func == 'function') {
	      var length = pairs.length;
	      while (length--) {
	        if (pairs[length][0] == key) {
	          return;
	        }
	      }
	      func.convert = createConverter(key, func);
	      pairs.push([key, func]);
	    }
	  });

	  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
	  each(pairs, function(pair) {
	    _[pair[0]] = pair[1];
	  });

	  _.convert = convertLib;
	  _.placeholder = _;

	  // Assign aliases.
	  each(keys(_), function(key) {
	    each(mapping.realToAlias[key] || [], function(alias) {
	      _[alias] = _[key];
	    });
	  });

	  return _;
	}

	module.exports = baseConvert;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/** Used to map aliases to their real names. */
	exports.aliasToReal = {

	  // Lodash aliases.
	  'each': 'forEach',
	  'eachRight': 'forEachRight',
	  'entries': 'toPairs',
	  'entriesIn': 'toPairsIn',
	  'extend': 'assignIn',
	  'extendAll': 'assignInAll',
	  'extendAllWith': 'assignInAllWith',
	  'extendWith': 'assignInWith',
	  'first': 'head',

	  // Methods that are curried variants of others.
	  'conforms': 'conformsTo',
	  'matches': 'isMatch',
	  'property': 'get',

	  // Ramda aliases.
	  '__': 'placeholder',
	  'F': 'stubFalse',
	  'T': 'stubTrue',
	  'all': 'every',
	  'allPass': 'overEvery',
	  'always': 'constant',
	  'any': 'some',
	  'anyPass': 'overSome',
	  'apply': 'spread',
	  'assoc': 'set',
	  'assocPath': 'set',
	  'complement': 'negate',
	  'compose': 'flowRight',
	  'contains': 'includes',
	  'dissoc': 'unset',
	  'dissocPath': 'unset',
	  'dropLast': 'dropRight',
	  'dropLastWhile': 'dropRightWhile',
	  'equals': 'isEqual',
	  'identical': 'eq',
	  'indexBy': 'keyBy',
	  'init': 'initial',
	  'invertObj': 'invert',
	  'juxt': 'over',
	  'omitAll': 'omit',
	  'nAry': 'ary',
	  'path': 'get',
	  'pathEq': 'matchesProperty',
	  'pathOr': 'getOr',
	  'paths': 'at',
	  'pickAll': 'pick',
	  'pipe': 'flow',
	  'pluck': 'map',
	  'prop': 'get',
	  'propEq': 'matchesProperty',
	  'propOr': 'getOr',
	  'props': 'at',
	  'symmetricDifference': 'xor',
	  'symmetricDifferenceBy': 'xorBy',
	  'symmetricDifferenceWith': 'xorWith',
	  'takeLast': 'takeRight',
	  'takeLastWhile': 'takeRightWhile',
	  'unapply': 'rest',
	  'unnest': 'flatten',
	  'useWith': 'overArgs',
	  'where': 'conformsTo',
	  'whereEq': 'isMatch',
	  'zipObj': 'zipObject'
	};

	/** Used to map ary to method names. */
	exports.aryMethod = {
	  '1': [
	    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
	    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
	    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
	    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
	    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
	    'uniqueId', 'words', 'zipAll'
	  ],
	  '2': [
	    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
	    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
	    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
	    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
	    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
	    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
	    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
	    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
	    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
	    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
	    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
	    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
	    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
	    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
	    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
	    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
	    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
	    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
	    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
	    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
	    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
	    'zipObjectDeep'
	  ],
	  '3': [
	    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
	    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
	    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
	    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
	    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
	    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
	    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
	    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
	    'xorWith', 'zipWith'
	  ],
	  '4': [
	    'fill', 'setWith', 'updateWith'
	  ]
	};

	/** Used to map ary to rearg configs. */
	exports.aryRearg = {
	  '2': [1, 0],
	  '3': [2, 0, 1],
	  '4': [3, 2, 0, 1]
	};

	/** Used to map method names to their iteratee ary. */
	exports.iterateeAry = {
	  'dropRightWhile': 1,
	  'dropWhile': 1,
	  'every': 1,
	  'filter': 1,
	  'find': 1,
	  'findFrom': 1,
	  'findIndex': 1,
	  'findIndexFrom': 1,
	  'findKey': 1,
	  'findLast': 1,
	  'findLastFrom': 1,
	  'findLastIndex': 1,
	  'findLastIndexFrom': 1,
	  'findLastKey': 1,
	  'flatMap': 1,
	  'flatMapDeep': 1,
	  'flatMapDepth': 1,
	  'forEach': 1,
	  'forEachRight': 1,
	  'forIn': 1,
	  'forInRight': 1,
	  'forOwn': 1,
	  'forOwnRight': 1,
	  'map': 1,
	  'mapKeys': 1,
	  'mapValues': 1,
	  'partition': 1,
	  'reduce': 2,
	  'reduceRight': 2,
	  'reject': 1,
	  'remove': 1,
	  'some': 1,
	  'takeRightWhile': 1,
	  'takeWhile': 1,
	  'times': 1,
	  'transform': 2
	};

	/** Used to map method names to iteratee rearg configs. */
	exports.iterateeRearg = {
	  'mapKeys': [1],
	  'reduceRight': [1, 0]
	};

	/** Used to map method names to rearg configs. */
	exports.methodRearg = {
	  'assignInAllWith': [1, 0],
	  'assignInWith': [1, 2, 0],
	  'assignAllWith': [1, 0],
	  'assignWith': [1, 2, 0],
	  'differenceBy': [1, 2, 0],
	  'differenceWith': [1, 2, 0],
	  'getOr': [2, 1, 0],
	  'intersectionBy': [1, 2, 0],
	  'intersectionWith': [1, 2, 0],
	  'isEqualWith': [1, 2, 0],
	  'isMatchWith': [2, 1, 0],
	  'mergeAllWith': [1, 0],
	  'mergeWith': [1, 2, 0],
	  'padChars': [2, 1, 0],
	  'padCharsEnd': [2, 1, 0],
	  'padCharsStart': [2, 1, 0],
	  'pullAllBy': [2, 1, 0],
	  'pullAllWith': [2, 1, 0],
	  'rangeStep': [1, 2, 0],
	  'rangeStepRight': [1, 2, 0],
	  'setWith': [3, 1, 2, 0],
	  'sortedIndexBy': [2, 1, 0],
	  'sortedLastIndexBy': [2, 1, 0],
	  'unionBy': [1, 2, 0],
	  'unionWith': [1, 2, 0],
	  'updateWith': [3, 1, 2, 0],
	  'xorBy': [1, 2, 0],
	  'xorWith': [1, 2, 0],
	  'zipWith': [1, 2, 0]
	};

	/** Used to map method names to spread configs. */
	exports.methodSpread = {
	  'assignAll': { 'start': 0 },
	  'assignAllWith': { 'start': 0 },
	  'assignInAll': { 'start': 0 },
	  'assignInAllWith': { 'start': 0 },
	  'defaultsAll': { 'start': 0 },
	  'defaultsDeepAll': { 'start': 0 },
	  'invokeArgs': { 'start': 2 },
	  'invokeArgsMap': { 'start': 2 },
	  'mergeAll': { 'start': 0 },
	  'mergeAllWith': { 'start': 0 },
	  'partial': { 'start': 1 },
	  'partialRight': { 'start': 1 },
	  'without': { 'start': 1 },
	  'zipAll': { 'start': 0 }
	};

	/** Used to identify methods which mutate arrays or objects. */
	exports.mutate = {
	  'array': {
	    'fill': true,
	    'pull': true,
	    'pullAll': true,
	    'pullAllBy': true,
	    'pullAllWith': true,
	    'pullAt': true,
	    'remove': true,
	    'reverse': true
	  },
	  'object': {
	    'assign': true,
	    'assignAll': true,
	    'assignAllWith': true,
	    'assignIn': true,
	    'assignInAll': true,
	    'assignInAllWith': true,
	    'assignInWith': true,
	    'assignWith': true,
	    'defaults': true,
	    'defaultsAll': true,
	    'defaultsDeep': true,
	    'defaultsDeepAll': true,
	    'merge': true,
	    'mergeAll': true,
	    'mergeAllWith': true,
	    'mergeWith': true,
	  },
	  'set': {
	    'set': true,
	    'setWith': true,
	    'unset': true,
	    'update': true,
	    'updateWith': true
	  }
	};

	/** Used to map real names to their aliases. */
	exports.realToAlias = (function() {
	  var hasOwnProperty = Object.prototype.hasOwnProperty,
	      object = exports.aliasToReal,
	      result = {};

	  for (var key in object) {
	    var value = object[key];
	    if (hasOwnProperty.call(result, value)) {
	      result[value].push(key);
	    } else {
	      result[value] = [key];
	    }
	  }
	  return result;
	}());

	/** Used to map method names to other names. */
	exports.remap = {
	  'assignAll': 'assign',
	  'assignAllWith': 'assignWith',
	  'assignInAll': 'assignIn',
	  'assignInAllWith': 'assignInWith',
	  'curryN': 'curry',
	  'curryRightN': 'curryRight',
	  'defaultsAll': 'defaults',
	  'defaultsDeepAll': 'defaultsDeep',
	  'findFrom': 'find',
	  'findIndexFrom': 'findIndex',
	  'findLastFrom': 'findLast',
	  'findLastIndexFrom': 'findLastIndex',
	  'getOr': 'get',
	  'includesFrom': 'includes',
	  'indexOfFrom': 'indexOf',
	  'invokeArgs': 'invoke',
	  'invokeArgsMap': 'invokeMap',
	  'lastIndexOfFrom': 'lastIndexOf',
	  'mergeAll': 'merge',
	  'mergeAllWith': 'mergeWith',
	  'padChars': 'pad',
	  'padCharsEnd': 'padEnd',
	  'padCharsStart': 'padStart',
	  'propertyOf': 'get',
	  'rangeStep': 'range',
	  'rangeStepRight': 'rangeRight',
	  'restFrom': 'rest',
	  'spreadFrom': 'spread',
	  'trimChars': 'trim',
	  'trimCharsEnd': 'trimEnd',
	  'trimCharsStart': 'trimStart',
	  'zipAll': 'zip'
	};

	/** Used to track methods that skip fixing their arity. */
	exports.skipFixed = {
	  'castArray': true,
	  'flow': true,
	  'flowRight': true,
	  'iteratee': true,
	  'mixin': true,
	  'rearg': true,
	  'runInContext': true
	};

	/** Used to track methods that skip rearranging arguments. */
	exports.skipRearg = {
	  'add': true,
	  'assign': true,
	  'assignIn': true,
	  'bind': true,
	  'bindKey': true,
	  'concat': true,
	  'difference': true,
	  'divide': true,
	  'eq': true,
	  'gt': true,
	  'gte': true,
	  'isEqual': true,
	  'lt': true,
	  'lte': true,
	  'matchesProperty': true,
	  'merge': true,
	  'multiply': true,
	  'overArgs': true,
	  'partial': true,
	  'partialRight': true,
	  'propertyOf': true,
	  'random': true,
	  'range': true,
	  'rangeRight': true,
	  'subtract': true,
	  'zip': true,
	  'zipObject': true,
	  'zipObjectDeep': true
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * The default argument placeholder value for methods.
	 *
	 * @type {Object}
	 */
	module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  'ary': __webpack_require__(14),
	  'assign': __webpack_require__(83),
	  'clone': __webpack_require__(106),
	  'curry': __webpack_require__(170),
	  'forEach': __webpack_require__(67),
	  'isArray': __webpack_require__(53),
	  'isError': __webpack_require__(171),
	  'isFunction': __webpack_require__(22),
	  'isWeakMap': __webpack_require__(173),
	  'iteratee': __webpack_require__(174),
	  'keys': __webpack_require__(101),
	  'rearg': __webpack_require__(211),
	  'toInteger': __webpack_require__(79),
	  'toPath': __webpack_require__(217)
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(15);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_ARY_FLAG = 128;

	/**
	 * Creates a function that invokes `func`, with up to `n` arguments,
	 * ignoring any additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} [n=func.length] The arity cap.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new capped function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	 * // => [6, 8, 10]
	 */
	function ary(func, n, guard) {
	  n = guard ? undefined : n;
	  n = (func && n == null) ? func.length : n;
	  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
	}

	module.exports = ary;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(16),
	    createBind = __webpack_require__(34),
	    createCurry = __webpack_require__(37),
	    createHybrid = __webpack_require__(39),
	    createPartial = __webpack_require__(77),
	    getData = __webpack_require__(47),
	    mergeData = __webpack_require__(78),
	    setData = __webpack_require__(57),
	    setWrapToString = __webpack_require__(59),
	    toInteger = __webpack_require__(79);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *    1 - `_.bind`
	 *    2 - `_.bindKey`
	 *    4 - `_.curry` or `_.curryRight` of a bound function
	 *    8 - `_.curry`
	 *   16 - `_.curryRight`
	 *   32 - `_.partial`
	 *   64 - `_.partialRight`
	 *  128 - `_.rearg`
	 *  256 - `_.ary`
	 *  512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;

	  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;

	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);

	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];

	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] === undefined
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);

	  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setWrapToString(setter(result, newData), func, bitmask);
	}

	module.exports = createWrap;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(17),
	    metaMap = __webpack_require__(18);

	/**
	 * The base implementation of `setData` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};

	module.exports = baseSetData;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(19);

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(21),
	    getValue = __webpack_require__(33);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(22),
	    isMasked = __webpack_require__(30),
	    isObject = __webpack_require__(29),
	    toSource = __webpack_require__(32);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObject = __webpack_require__(29);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    getRawTag = __webpack_require__(27),
	    objectToString = __webpack_require__(28);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(26);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(31);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var createCtor = __webpack_require__(35),
	    root = __webpack_require__(25);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);

	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}

	module.exports = createBind;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(36),
	    isObject = __webpack_require__(29);

	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);

	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}

	module.exports = createCtor;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(38),
	    createCtor = __webpack_require__(35),
	    createHybrid = __webpack_require__(39),
	    createRecurry = __webpack_require__(43),
	    getHolder = __webpack_require__(73),
	    replaceHolders = __webpack_require__(76),
	    root = __webpack_require__(25);

	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);

	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}

	module.exports = createCurry;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(40),
	    composeArgsRight = __webpack_require__(41),
	    countHolders = __webpack_require__(42),
	    createCtor = __webpack_require__(35),
	    createRecurry = __webpack_require__(43),
	    getHolder = __webpack_require__(73),
	    reorder = __webpack_require__(74),
	    replaceHolders = __webpack_require__(76),
	    root = __webpack_require__(25);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_ARY_FLAG = 128,
	    WRAP_FLIP_FLAG = 512;

	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & WRAP_ARY_FLAG,
	      isBind = bitmask & WRAP_BIND_FLAG,
	      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	      isFlip = bitmask & WRAP_FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;

	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}

	module.exports = createHybrid;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;

	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}

	module.exports = composeArgs;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;

	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}

	module.exports = composeArgsRight;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;

	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }
	  return result;
	}

	module.exports = countHolders;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(44),
	    setData = __webpack_require__(57),
	    setWrapToString = __webpack_require__(59);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;

	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & WRAP_CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;

	  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

	  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];

	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}

	module.exports = createRecurry;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(45),
	    getData = __webpack_require__(47),
	    getFuncName = __webpack_require__(49),
	    lodash = __webpack_require__(51);

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];

	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}

	module.exports = isLaziable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(36),
	    baseLodash = __webpack_require__(46);

	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;

	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}

	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	module.exports = LazyWrapper;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}

	module.exports = baseLodash;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(18),
	    noop = __webpack_require__(48);

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};

	module.exports = getData;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(50);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}

	module.exports = getFuncName;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};

	module.exports = realNames;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(45),
	    LodashWrapper = __webpack_require__(52),
	    baseLodash = __webpack_require__(46),
	    isArray = __webpack_require__(53),
	    isObjectLike = __webpack_require__(54),
	    wrapperClone = __webpack_require__(55);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array and iteratees accept only
	 * one argument. The heuristic for whether a section qualifies for shortcut
	 * fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}

	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;

	module.exports = lodash;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(36),
	    baseLodash = __webpack_require__(46);

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}

	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	module.exports = LodashWrapper;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(45),
	    LodashWrapper = __webpack_require__(52),
	    copyArray = __webpack_require__(56);

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}

	module.exports = wrapperClone;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(16),
	    shortOut = __webpack_require__(58);

	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = shortOut(baseSetData);

	module.exports = setData;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var getWrapDetails = __webpack_require__(60),
	    insertWrapDetails = __webpack_require__(61),
	    setToString = __webpack_require__(62),
	    updateWrapDetails = __webpack_require__(66);

	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	function setWrapToString(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}

	module.exports = setWrapToString;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;

	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}

	module.exports = getWrapDetails;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length;
	  if (!length) {
	    return source;
	  }
	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}

	module.exports = insertWrapDetails;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(63),
	    shortOut = __webpack_require__(58);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(64),
	    defineProperty = __webpack_require__(65),
	    identity = __webpack_require__(17);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(67),
	    arrayIncludes = __webpack_require__(68);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256,
	    WRAP_FLIP_FLAG = 512;

	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', WRAP_ARY_FLAG],
	  ['bind', WRAP_BIND_FLAG],
	  ['bindKey', WRAP_BIND_KEY_FLAG],
	  ['curry', WRAP_CURRY_FLAG],
	  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	  ['flip', WRAP_FLIP_FLAG],
	  ['partial', WRAP_PARTIAL_FLAG],
	  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	  ['rearg', WRAP_REARG_FLAG]
	];

	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}

	module.exports = updateWrapDetails;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(69);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(70),
	    baseIsNaN = __webpack_require__(71),
	    strictIndexOf = __webpack_require__(72);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}

	module.exports = getHolder;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(56),
	    isIndex = __webpack_require__(75);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);

	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}

	module.exports = reorder;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}

	module.exports = replaceHolders;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(38),
	    createCtor = __webpack_require__(35),
	    root = __webpack_require__(25);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);

	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}

	module.exports = createPartial;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(40),
	    composeArgsRight = __webpack_require__(41),
	    replaceHolders = __webpack_require__(76);

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

	  var isCombo =
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & WRAP_BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = value;
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & WRAP_ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;

	  return data;
	}

	module.exports = mergeData;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(80);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(81);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29),
	    isSymbol = __webpack_require__(82);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(84),
	    keys = __webpack_require__(88);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(85),
	    baseAssignValue = __webpack_require__(86);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(86),
	    eq = __webpack_require__(87);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(65);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(89),
	    baseKeys = __webpack_require__(101),
	    isArrayLike = __webpack_require__(105);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(90),
	    isArguments = __webpack_require__(91),
	    isArray = __webpack_require__(53),
	    isBuffer = __webpack_require__(93),
	    isIndex = __webpack_require__(75),
	    isTypedArray = __webpack_require__(96);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(92),
	    isObjectLike = __webpack_require__(54);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(25),
	    stubFalse = __webpack_require__(95);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(97),
	    baseUnary = __webpack_require__(99),
	    nodeUtil = __webpack_require__(100);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isLength = __webpack_require__(98),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(26);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(102),
	    nativeKeys = __webpack_require__(103);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(104);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(22),
	    isLength = __webpack_require__(98);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(107);

	/** Used to compose bitmasks for cloning. */
	var CLONE_SYMBOLS_FLAG = 4;

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, CLONE_SYMBOLS_FLAG);
	}

	module.exports = clone;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(108),
	    arrayEach = __webpack_require__(67),
	    assignValue = __webpack_require__(85),
	    baseAssign = __webpack_require__(83),
	    baseAssignIn = __webpack_require__(137),
	    cloneBuffer = __webpack_require__(141),
	    copyArray = __webpack_require__(56),
	    copySymbols = __webpack_require__(142),
	    copySymbolsIn = __webpack_require__(146),
	    getAllKeys = __webpack_require__(150),
	    getAllKeysIn = __webpack_require__(152),
	    getTag = __webpack_require__(153),
	    initCloneArray = __webpack_require__(157),
	    initCloneByTag = __webpack_require__(158),
	    initCloneObject = __webpack_require__(165),
	    isArray = __webpack_require__(53),
	    isBuffer = __webpack_require__(93),
	    isMap = __webpack_require__(166),
	    isObject = __webpack_require__(29),
	    isSet = __webpack_require__(168),
	    keys = __webpack_require__(88);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(109),
	    stackClear = __webpack_require__(116),
	    stackDelete = __webpack_require__(117),
	    stackGet = __webpack_require__(118),
	    stackHas = __webpack_require__(119),
	    stackSet = __webpack_require__(120);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(110),
	    listCacheDelete = __webpack_require__(111),
	    listCacheGet = __webpack_require__(113),
	    listCacheHas = __webpack_require__(114),
	    listCacheSet = __webpack_require__(115);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(87);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(112);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(109);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(109),
	    Map = __webpack_require__(121),
	    MapCache = __webpack_require__(122);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(123),
	    mapCacheDelete = __webpack_require__(131),
	    mapCacheGet = __webpack_require__(134),
	    mapCacheHas = __webpack_require__(135),
	    mapCacheSet = __webpack_require__(136);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(124),
	    ListCache = __webpack_require__(109),
	    Map = __webpack_require__(121);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(125),
	    hashDelete = __webpack_require__(127),
	    hashGet = __webpack_require__(128),
	    hashHas = __webpack_require__(129),
	    hashSet = __webpack_require__(130);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(126);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(126);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(126);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(126);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(132);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(133);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(132);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(132);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(132);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(84),
	    keysIn = __webpack_require__(138);

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}

	module.exports = baseAssignIn;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(89),
	    baseKeysIn = __webpack_require__(139),
	    isArrayLike = __webpack_require__(105);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29),
	    isPrototype = __webpack_require__(102),
	    nativeKeysIn = __webpack_require__(140);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(25);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(84),
	    getSymbols = __webpack_require__(143);

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(144),
	    stubArray = __webpack_require__(145);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(84),
	    getSymbolsIn = __webpack_require__(147);

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	module.exports = copySymbolsIn;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(148),
	    getPrototype = __webpack_require__(149),
	    getSymbols = __webpack_require__(143),
	    stubArray = __webpack_require__(145);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(104);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(151),
	    getSymbols = __webpack_require__(143),
	    keys = __webpack_require__(88);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(148),
	    isArray = __webpack_require__(53);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(151),
	    getSymbolsIn = __webpack_require__(147),
	    keysIn = __webpack_require__(138);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(154),
	    Map = __webpack_require__(121),
	    Promise = __webpack_require__(155),
	    Set = __webpack_require__(156),
	    WeakMap = __webpack_require__(19),
	    baseGetTag = __webpack_require__(23),
	    toSource = __webpack_require__(32);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(159),
	    cloneDataView = __webpack_require__(161),
	    cloneRegExp = __webpack_require__(162),
	    cloneSymbol = __webpack_require__(163),
	    cloneTypedArray = __webpack_require__(164);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return new Ctor;

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return new Ctor;

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(160);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(159);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(159);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(36),
	    getPrototype = __webpack_require__(149),
	    isPrototype = __webpack_require__(102);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMap = __webpack_require__(167),
	    baseUnary = __webpack_require__(99),
	    nodeUtil = __webpack_require__(100);

	/* Node.js helper references. */
	var nodeIsMap = nodeUtil && nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	module.exports = isMap;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(153),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike(value) && getTag(value) == mapTag;
	}

	module.exports = baseIsMap;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsSet = __webpack_require__(169),
	    baseUnary = __webpack_require__(99),
	    nodeUtil = __webpack_require__(100);

	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	module.exports = isSet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(153),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var setTag = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag(value) == setTag;
	}

	module.exports = baseIsSet;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(15);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_FLAG = 8;

	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */
	function curry(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curry.placeholder;
	  return result;
	}

	// Assign default placeholders.
	curry.placeholder = {};

	module.exports = curry;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObjectLike = __webpack_require__(54),
	    isPlainObject = __webpack_require__(172);

	/** `Object#toString` result references. */
	var domExcTag = '[object DOMException]',
	    errorTag = '[object Error]';

	/**
	 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	 * `SyntaxError`, `TypeError`, or `URIError` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	 * @example
	 *
	 * _.isError(new Error);
	 * // => true
	 *
	 * _.isError(Error);
	 * // => false
	 */
	function isError(value) {
	  if (!isObjectLike(value)) {
	    return false;
	  }
	  var tag = baseGetTag(value);
	  return tag == errorTag || tag == domExcTag ||
	    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
	}

	module.exports = isError;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    getPrototype = __webpack_require__(149),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(153),
	    isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var weakMapTag = '[object WeakMap]';

	/**
	 * Checks if `value` is classified as a `WeakMap` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	 * @example
	 *
	 * _.isWeakMap(new WeakMap);
	 * // => true
	 *
	 * _.isWeakMap(new Map);
	 * // => false
	 */
	function isWeakMap(value) {
	  return isObjectLike(value) && getTag(value) == weakMapTag;
	}

	module.exports = isWeakMap;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(107),
	    baseIteratee = __webpack_require__(175);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a function that invokes `func` with the arguments of the created
	 * function. If `func` is a property name, the created function returns the
	 * property value for a given element. If `func` is an array or object, the
	 * created function returns `true` for elements that contain the equivalent
	 * source properties, otherwise it returns `false`.
	 *
	 * @static
	 * @since 4.0.0
	 * @memberOf _
	 * @category Util
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @returns {Function} Returns the callback.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, _.iteratee(['user', 'fred']));
	 * // => [{ 'user': 'fred', 'age': 40 }]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, _.iteratee('user'));
	 * // => ['barney', 'fred']
	 *
	 * // Create custom iteratee shorthands.
	 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	 *     return func.test(string);
	 *   };
	 * });
	 *
	 * _.filter(['abc', 'def'], /ef/);
	 * // => ['def']
	 */
	function iteratee(func) {
	  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
	}

	module.exports = iteratee;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(176),
	    baseMatchesProperty = __webpack_require__(193),
	    identity = __webpack_require__(17),
	    isArray = __webpack_require__(53),
	    property = __webpack_require__(208);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(177),
	    getMatchData = __webpack_require__(190),
	    matchesStrictComparable = __webpack_require__(192);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(108),
	    baseIsEqual = __webpack_require__(178);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(179),
	    isObjectLike = __webpack_require__(54);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(108),
	    equalArrays = __webpack_require__(180),
	    equalByTag = __webpack_require__(186),
	    equalObjects = __webpack_require__(189),
	    getTag = __webpack_require__(153),
	    isArray = __webpack_require__(53),
	    isBuffer = __webpack_require__(93),
	    isTypedArray = __webpack_require__(96);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(181),
	    arraySome = __webpack_require__(184),
	    cacheHas = __webpack_require__(185);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(122),
	    setCacheAdd = __webpack_require__(182),
	    setCacheHas = __webpack_require__(183);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    Uint8Array = __webpack_require__(160),
	    eq = __webpack_require__(87),
	    equalArrays = __webpack_require__(180),
	    mapToArray = __webpack_require__(187),
	    setToArray = __webpack_require__(188);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 188 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(150);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(191),
	    keys = __webpack_require__(88);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(178),
	    get = __webpack_require__(194),
	    hasIn = __webpack_require__(205),
	    isKey = __webpack_require__(197),
	    isStrictComparable = __webpack_require__(191),
	    matchesStrictComparable = __webpack_require__(192),
	    toKey = __webpack_require__(204);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(195);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(196),
	    toKey = __webpack_require__(204);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(53),
	    isKey = __webpack_require__(197),
	    stringToPath = __webpack_require__(198),
	    toString = __webpack_require__(201);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(53),
	    isSymbol = __webpack_require__(82);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(199);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(200);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(122);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(202);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    arrayMap = __webpack_require__(203),
	    isArray = __webpack_require__(53),
	    isSymbol = __webpack_require__(82);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 203 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(82);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(206),
	    hasPath = __webpack_require__(207);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(196),
	    isArguments = __webpack_require__(91),
	    isArray = __webpack_require__(53),
	    isIndex = __webpack_require__(75),
	    isLength = __webpack_require__(98),
	    toKey = __webpack_require__(204);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(209),
	    basePropertyDeep = __webpack_require__(210),
	    isKey = __webpack_require__(197),
	    toKey = __webpack_require__(204);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(195);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(15),
	    flatRest = __webpack_require__(212);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_REARG_FLAG = 256;

	/**
	 * Creates a function that invokes `func` with arguments arranged according
	 * to the specified `indexes` where the argument value at the first index is
	 * provided as the first argument, the argument value at the second index is
	 * provided as the second argument, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to rearrange arguments for.
	 * @param {...(number|number[])} indexes The arranged argument indexes.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var rearged = _.rearg(function(a, b, c) {
	 *   return [a, b, c];
	 * }, [2, 0, 1]);
	 *
	 * rearged('b', 'c', 'a')
	 * // => ['a', 'b', 'c']
	 */
	var rearg = flatRest(function(func, indexes) {
	  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
	});

	module.exports = rearg;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(213),
	    overRest = __webpack_require__(216),
	    setToString = __webpack_require__(62);

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}

	module.exports = flatRest;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(214);

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten(array, 1) : [];
	}

	module.exports = flatten;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(148),
	    isFlattenable = __webpack_require__(215);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    isArguments = __webpack_require__(91),
	    isArray = __webpack_require__(53);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(38);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(203),
	    copyArray = __webpack_require__(56),
	    isArray = __webpack_require__(53),
	    isSymbol = __webpack_require__(82),
	    stringToPath = __webpack_require__(198),
	    toKey = __webpack_require__(204),
	    toString = __webpack_require__(201);

	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}

	module.exports = toPath;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var capitalize = __webpack_require__(219),
	    createCompounder = __webpack_require__(228);

	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
	var camelCase = createCompounder(function(result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize(word) : word);
	});

	module.exports = camelCase;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(201),
	    upperFirst = __webpack_require__(220);

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst(toString(string).toLowerCase());
	}

	module.exports = capitalize;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(221);

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');

	module.exports = upperFirst;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var castSlice = __webpack_require__(222),
	    hasUnicode = __webpack_require__(224),
	    stringToArray = __webpack_require__(225),
	    toString = __webpack_require__(201);

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);

	    var strSymbols = hasUnicode(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	module.exports = createCaseFirst;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(223);

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	module.exports = castSlice;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	module.exports = hasUnicode;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var asciiToArray = __webpack_require__(226),
	    hasUnicode = __webpack_require__(224),
	    unicodeToArray = __webpack_require__(227);

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	module.exports = stringToArray;


/***/ }),
/* 226 */
/***/ (function(module, exports) {

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	module.exports = asciiToArray;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	module.exports = unicodeToArray;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(229),
	    deburr = __webpack_require__(230),
	    words = __webpack_require__(233);

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}

	module.exports = createCompounder;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var deburrLetter = __webpack_require__(231),
	    toString = __webpack_require__(201);

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}

	module.exports = deburr;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(232);

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = basePropertyOf(deburredLetters);

	module.exports = deburrLetter;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = basePropertyOf;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var asciiWords = __webpack_require__(234),
	    hasUnicodeWord = __webpack_require__(235),
	    toString = __webpack_require__(201),
	    unicodeWords = __webpack_require__(236);

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	module.exports = words;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	module.exports = asciiWords;


/***/ }),
/* 235 */
/***/ (function(module, exports) {

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	module.exports = hasUnicodeWord;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	module.exports = unicodeWords;


/***/ }),
/* 237 */
/***/ (function(module, exports) {

	module.exports = {
	  'cap': false,
	  'curry': false,
	  'fixed': false,
	  'immutable': false,
	  'rearg': false
	};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// Rivets.js
	// version: 0.8.1
	// author: Michael Richards
	// license: MIT
	(function() {
	  var Rivets, bindMethod, unbindMethod, _ref,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __slice = [].slice,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  Rivets = {
	    options: ['prefix', 'templateDelimiters', 'rootInterface', 'preloadData', 'handler'],
	    extensions: ['binders', 'formatters', 'components', 'adapters'],
	    "public": {
	      binders: {},
	      components: {},
	      formatters: {},
	      adapters: {},
	      prefix: 'rv',
	      templateDelimiters: ['{', '}'],
	      rootInterface: '.',
	      preloadData: true,
	      handler: function(context, ev, binding) {
	        return this.call(context, ev, binding.view.models);
	      },
	      configure: function(options) {
	        var descriptor, key, option, value;
	        if (options == null) {
	          options = {};
	        }
	        for (option in options) {
	          value = options[option];
	          if (option === 'binders' || option === 'components' || option === 'formatters' || option === 'adapters') {
	            for (key in value) {
	              descriptor = value[key];
	              Rivets[option][key] = descriptor;
	            }
	          } else {
	            Rivets["public"][option] = value;
	          }
	        }
	      },
	      bind: function(el, models, options) {
	        var view;
	        if (models == null) {
	          models = {};
	        }
	        if (options == null) {
	          options = {};
	        }
	        view = new Rivets.View(el, models, options);
	        view.bind();
	        return view;
	      },
	      init: function(component, el, data) {
	        var scope, view;
	        if (data == null) {
	          data = {};
	        }
	        if (el == null) {
	          el = document.createElement('div');
	        }
	        component = Rivets["public"].components[component];
	        el.innerHTML = component.template.call(this, el);
	        scope = component.initialize.call(this, el, data);
	        view = new Rivets.View(el, scope);
	        view.bind();
	        return view;
	      }
	    }
	  };

	  if (window['jQuery'] || window['$']) {
	    _ref = 'on' in jQuery.prototype ? ['on', 'off'] : ['bind', 'unbind'], bindMethod = _ref[0], unbindMethod = _ref[1];
	    Rivets.Util = {
	      bindEvent: function(el, event, handler) {
	        return jQuery(el)[bindMethod](event, handler);
	      },
	      unbindEvent: function(el, event, handler) {
	        return jQuery(el)[unbindMethod](event, handler);
	      },
	      getInputValue: function(el) {
	        var $el;
	        $el = jQuery(el);
	        if ($el.attr('type') === 'checkbox') {
	          return $el.is(':checked');
	        } else {
	          return $el.val();
	        }
	      }
	    };
	  } else {
	    Rivets.Util = {
	      bindEvent: (function() {
	        if ('addEventListener' in window) {
	          return function(el, event, handler) {
	            return el.addEventListener(event, handler, false);
	          };
	        }
	        return function(el, event, handler) {
	          return el.attachEvent('on' + event, handler);
	        };
	      })(),
	      unbindEvent: (function() {
	        if ('removeEventListener' in window) {
	          return function(el, event, handler) {
	            return el.removeEventListener(event, handler, false);
	          };
	        }
	        return function(el, event, handler) {
	          return el.detachEvent('on' + event, handler);
	        };
	      })(),
	      getInputValue: function(el) {
	        var o, _i, _len, _results;
	        if (el.type === 'checkbox') {
	          return el.checked;
	        } else if (el.type === 'select-multiple') {
	          _results = [];
	          for (_i = 0, _len = el.length; _i < _len; _i++) {
	            o = el[_i];
	            if (o.selected) {
	              _results.push(o.value);
	            }
	          }
	          return _results;
	        } else {
	          return el.value;
	        }
	      }
	    };
	  }

	  Rivets.TypeParser = (function() {
	    function TypeParser() {}

	    TypeParser.types = {
	      primitive: 0,
	      keypath: 1
	    };

	    TypeParser.parse = function(string) {
	      if (/^'.*'$|^".*"$/.test(string)) {
	        return {
	          type: this.types.primitive,
	          value: string.slice(1, -1)
	        };
	      } else if (string === 'true') {
	        return {
	          type: this.types.primitive,
	          value: true
	        };
	      } else if (string === 'false') {
	        return {
	          type: this.types.primitive,
	          value: false
	        };
	      } else if (string === 'null') {
	        return {
	          type: this.types.primitive,
	          value: null
	        };
	      } else if (string === 'undefined') {
	        return {
	          type: this.types.primitive,
	          value: void 0
	        };
	      } else if (isNaN(Number(string)) === false) {
	        return {
	          type: this.types.primitive,
	          value: Number(string)
	        };
	      } else {
	        return {
	          type: this.types.keypath,
	          value: string
	        };
	      }
	    };

	    return TypeParser;

	  })();

	  Rivets.TextTemplateParser = (function() {
	    function TextTemplateParser() {}

	    TextTemplateParser.types = {
	      text: 0,
	      binding: 1
	    };

	    TextTemplateParser.parse = function(template, delimiters) {
	      var index, lastIndex, lastToken, length, substring, tokens, value;
	      tokens = [];
	      length = template.length;
	      index = 0;
	      lastIndex = 0;
	      while (lastIndex < length) {
	        index = template.indexOf(delimiters[0], lastIndex);
	        if (index < 0) {
	          tokens.push({
	            type: this.types.text,
	            value: template.slice(lastIndex)
	          });
	          break;
	        } else {
	          if (index > 0 && lastIndex < index) {
	            tokens.push({
	              type: this.types.text,
	              value: template.slice(lastIndex, index)
	            });
	          }
	          lastIndex = index + delimiters[0].length;
	          index = template.indexOf(delimiters[1], lastIndex);
	          if (index < 0) {
	            substring = template.slice(lastIndex - delimiters[1].length);
	            lastToken = tokens[tokens.length - 1];
	            if ((lastToken != null ? lastToken.type : void 0) === this.types.text) {
	              lastToken.value += substring;
	            } else {
	              tokens.push({
	                type: this.types.text,
	                value: substring
	              });
	            }
	            break;
	          }
	          value = template.slice(lastIndex, index).trim();
	          tokens.push({
	            type: this.types.binding,
	            value: value
	          });
	          lastIndex = index + delimiters[1].length;
	        }
	      }
	      return tokens;
	    };

	    return TextTemplateParser;

	  })();

	  Rivets.View = (function() {
	    function View(els, models, options) {
	      var k, option, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5;
	      this.els = els;
	      this.models = models;
	      if (options == null) {
	        options = {};
	      }
	      this.update = __bind(this.update, this);
	      this.publish = __bind(this.publish, this);
	      this.sync = __bind(this.sync, this);
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.select = __bind(this.select, this);
	      this.traverse = __bind(this.traverse, this);
	      this.build = __bind(this.build, this);
	      this.buildBinding = __bind(this.buildBinding, this);
	      this.bindingRegExp = __bind(this.bindingRegExp, this);
	      this.options = __bind(this.options, this);
	      if (!(this.els.jquery || this.els instanceof Array)) {
	        this.els = [this.els];
	      }
	      _ref1 = Rivets.extensions;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        option = _ref1[_i];
	        this[option] = {};
	        if (options[option]) {
	          _ref2 = options[option];
	          for (k in _ref2) {
	            v = _ref2[k];
	            this[option][k] = v;
	          }
	        }
	        _ref3 = Rivets["public"][option];
	        for (k in _ref3) {
	          v = _ref3[k];
	          if ((_base = this[option])[k] == null) {
	            _base[k] = v;
	          }
	        }
	      }
	      _ref4 = Rivets.options;
	      for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
	        option = _ref4[_j];
	        this[option] = (_ref5 = options[option]) != null ? _ref5 : Rivets["public"][option];
	      }
	      this.build();
	    }

	    View.prototype.options = function() {
	      var option, options, _i, _len, _ref1;
	      options = {};
	      _ref1 = Rivets.extensions.concat(Rivets.options);
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        option = _ref1[_i];
	        options[option] = this[option];
	      }
	      return options;
	    };

	    View.prototype.bindingRegExp = function() {
	      return new RegExp("^" + this.prefix + "-");
	    };

	    View.prototype.buildBinding = function(binding, node, type, declaration) {
	      var context, ctx, dependencies, keypath, options, pipe, pipes;
	      options = {};
	      pipes = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = declaration.split('|');
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          pipe = _ref1[_i];
	          _results.push(pipe.trim());
	        }
	        return _results;
	      })();
	      context = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = pipes.shift().split('<');
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          ctx = _ref1[_i];
	          _results.push(ctx.trim());
	        }
	        return _results;
	      })();
	      keypath = context.shift();
	      options.formatters = pipes;
	      if (dependencies = context.shift()) {
	        options.dependencies = dependencies.split(/\s+/);
	      }
	      return this.bindings.push(new Rivets[binding](this, node, type, keypath, options));
	    };

	    View.prototype.build = function() {
	      var el, parse, _i, _len, _ref1;
	      this.bindings = [];
	      parse = (function(_this) {
	        return function(node) {
	          var block, childNode, delimiters, n, parser, text, token, tokens, _i, _j, _len, _len1, _ref1, _results;
	          if (node.nodeType === 3) {
	            parser = Rivets.TextTemplateParser;
	            if (delimiters = _this.templateDelimiters) {
	              if ((tokens = parser.parse(node.data, delimiters)).length) {
	                if (!(tokens.length === 1 && tokens[0].type === parser.types.text)) {
	                  for (_i = 0, _len = tokens.length; _i < _len; _i++) {
	                    token = tokens[_i];
	                    text = document.createTextNode(token.value);
	                    node.parentNode.insertBefore(text, node);
	                    if (token.type === 1) {
	                      _this.buildBinding('TextBinding', text, null, token.value);
	                    }
	                  }
	                  node.parentNode.removeChild(node);
	                }
	              }
	            }
	          } else if (node.nodeType === 1) {
	            block = _this.traverse(node);
	          }
	          if (!block) {
	            _ref1 = (function() {
	              var _k, _len1, _ref1, _results1;
	              _ref1 = node.childNodes;
	              _results1 = [];
	              for (_k = 0, _len1 = _ref1.length; _k < _len1; _k++) {
	                n = _ref1[_k];
	                _results1.push(n);
	              }
	              return _results1;
	            })();
	            _results = [];
	            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	              childNode = _ref1[_j];
	              _results.push(parse(childNode));
	            }
	            return _results;
	          }
	        };
	      })(this);
	      _ref1 = this.els;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        el = _ref1[_i];
	        parse(el);
	      }
	      this.bindings.sort(function(a, b) {
	        var _ref2, _ref3;
	        return (((_ref2 = b.binder) != null ? _ref2.priority : void 0) || 0) - (((_ref3 = a.binder) != null ? _ref3.priority : void 0) || 0);
	      });
	    };

	    View.prototype.traverse = function(node) {
	      var attribute, attributes, binder, bindingRegExp, block, identifier, regexp, type, value, _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	      bindingRegExp = this.bindingRegExp();
	      block = node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE';
	      _ref1 = node.attributes;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        attribute = _ref1[_i];
	        if (bindingRegExp.test(attribute.name)) {
	          type = attribute.name.replace(bindingRegExp, '');
	          if (!(binder = this.binders[type])) {
	            _ref2 = this.binders;
	            for (identifier in _ref2) {
	              value = _ref2[identifier];
	              if (identifier !== '*' && identifier.indexOf('*') !== -1) {
	                regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
	                if (regexp.test(type)) {
	                  binder = value;
	                }
	              }
	            }
	          }
	          binder || (binder = this.binders['*']);
	          if (binder.block) {
	            block = true;
	            attributes = [attribute];
	          }
	        }
	      }
	      _ref3 = attributes || node.attributes;
	      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	        attribute = _ref3[_j];
	        if (bindingRegExp.test(attribute.name)) {
	          type = attribute.name.replace(bindingRegExp, '');
	          this.buildBinding('Binding', node, type, attribute.value);
	        }
	      }
	      if (!block) {
	        type = node.nodeName.toLowerCase();
	        if (this.components[type] && !node._bound) {
	          this.bindings.push(new Rivets.ComponentBinding(this, node, type));
	          block = true;
	        }
	      }
	      return block;
	    };

	    View.prototype.select = function(fn) {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        if (fn(binding)) {
	          _results.push(binding);
	        }
	      }
	      return _results;
	    };

	    View.prototype.bind = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.bind());
	      }
	      return _results;
	    };

	    View.prototype.unbind = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.unbind());
	      }
	      return _results;
	    };

	    View.prototype.sync = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(typeof binding.sync === "function" ? binding.sync() : void 0);
	      }
	      return _results;
	    };

	    View.prototype.publish = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.select(function(b) {
	        var _ref1;
	        return (_ref1 = b.binder) != null ? _ref1.publishes : void 0;
	      });
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.publish());
	      }
	      return _results;
	    };

	    View.prototype.update = function(models) {
	      var binding, key, model, _i, _len, _ref1, _results;
	      if (models == null) {
	        models = {};
	      }
	      for (key in models) {
	        model = models[key];
	        this.models[key] = model;
	      }
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(typeof binding.update === "function" ? binding.update(models) : void 0);
	      }
	      return _results;
	    };

	    return View;

	  })();

	  Rivets.Binding = (function() {
	    function Binding(view, el, type, keypath, options) {
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.keypath = keypath;
	      this.options = options != null ? options : {};
	      this.getValue = __bind(this.getValue, this);
	      this.update = __bind(this.update, this);
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.publish = __bind(this.publish, this);
	      this.sync = __bind(this.sync, this);
	      this.set = __bind(this.set, this);
	      this.eventHandler = __bind(this.eventHandler, this);
	      this.formattedValue = __bind(this.formattedValue, this);
	      this.parseTarget = __bind(this.parseTarget, this);
	      this.observe = __bind(this.observe, this);
	      this.setBinder = __bind(this.setBinder, this);
	      this.formatters = this.options.formatters || [];
	      this.dependencies = [];
	      this.formatterObservers = {};
	      this.model = void 0;
	      this.setBinder();
	    }

	    Binding.prototype.setBinder = function() {
	      var identifier, regexp, value, _ref1;
	      if (!(this.binder = this.view.binders[this.type])) {
	        _ref1 = this.view.binders;
	        for (identifier in _ref1) {
	          value = _ref1[identifier];
	          if (identifier !== '*' && identifier.indexOf('*') !== -1) {
	            regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
	            if (regexp.test(this.type)) {
	              this.binder = value;
	              this.args = new RegExp("^" + (identifier.replace(/\*/g, '(.+)')) + "$").exec(this.type);
	              this.args.shift();
	            }
	          }
	        }
	      }
	      this.binder || (this.binder = this.view.binders['*']);
	      if (this.binder instanceof Function) {
	        return this.binder = {
	          routine: this.binder
	        };
	      }
	    };

	    Binding.prototype.observe = function(obj, keypath, callback) {
	      return Rivets.sightglass(obj, keypath, callback, {
	        root: this.view.rootInterface,
	        adapters: this.view.adapters
	      });
	    };

	    Binding.prototype.parseTarget = function() {
	      var token;
	      token = Rivets.TypeParser.parse(this.keypath);
	      if (token.type === 0) {
	        return this.value = token.value;
	      } else {
	        this.observer = this.observe(this.view.models, this.keypath, this.sync);
	        return this.model = this.observer.target;
	      }
	    };

	    Binding.prototype.formattedValue = function(value) {
	      var ai, arg, args, fi, formatter, id, observer, processedArgs, _base, _i, _j, _len, _len1, _ref1;
	      _ref1 = this.formatters;
	      for (fi = _i = 0, _len = _ref1.length; _i < _len; fi = ++_i) {
	        formatter = _ref1[fi];
	        args = formatter.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g);
	        id = args.shift();
	        formatter = this.view.formatters[id];
	        args = (function() {
	          var _j, _len1, _results;
	          _results = [];
	          for (_j = 0, _len1 = args.length; _j < _len1; _j++) {
	            arg = args[_j];
	            _results.push(Rivets.TypeParser.parse(arg));
	          }
	          return _results;
	        })();
	        processedArgs = [];
	        for (ai = _j = 0, _len1 = args.length; _j < _len1; ai = ++_j) {
	          arg = args[ai];
	          processedArgs.push(arg.type === 0 ? arg.value : ((_base = this.formatterObservers)[fi] || (_base[fi] = {}), !(observer = this.formatterObservers[fi][ai]) ? (observer = this.observe(this.view.models, arg.value, this.sync), this.formatterObservers[fi][ai] = observer) : void 0, observer.value()));
	        }
	        if ((formatter != null ? formatter.read : void 0) instanceof Function) {
	          value = formatter.read.apply(formatter, [value].concat(__slice.call(processedArgs)));
	        } else if (formatter instanceof Function) {
	          value = formatter.apply(null, [value].concat(__slice.call(processedArgs)));
	        }
	      }
	      return value;
	    };

	    Binding.prototype.eventHandler = function(fn) {
	      var binding, handler;
	      handler = (binding = this).view.handler;
	      return function(ev) {
	        return handler.call(fn, this, ev, binding);
	      };
	    };

	    Binding.prototype.set = function(value) {
	      var _ref1;
	      value = value instanceof Function && !this.binder["function"] ? this.formattedValue(value.call(this.model)) : this.formattedValue(value);
	      return (_ref1 = this.binder.routine) != null ? _ref1.call(this, this.el, value) : void 0;
	    };

	    Binding.prototype.sync = function() {
	      var dependency, observer;
	      return this.set((function() {
	        var _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	        if (this.observer) {
	          if (this.model !== this.observer.target) {
	            _ref1 = this.dependencies;
	            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	              observer = _ref1[_i];
	              observer.unobserve();
	            }
	            this.dependencies = [];
	            if (((this.model = this.observer.target) != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
	              _ref3 = this.options.dependencies;
	              for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	                dependency = _ref3[_j];
	                observer = this.observe(this.model, dependency, this.sync);
	                this.dependencies.push(observer);
	              }
	            }
	          }
	          return this.observer.value();
	        } else {
	          return this.value;
	        }
	      }).call(this));
	    };

	    Binding.prototype.publish = function() {
	      var args, formatter, id, value, _i, _len, _ref1, _ref2, _ref3;
	      if (this.observer) {
	        value = this.getValue(this.el);
	        _ref1 = this.formatters.slice(0).reverse();
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          formatter = _ref1[_i];
	          args = formatter.split(/\s+/);
	          id = args.shift();
	          if ((_ref2 = this.view.formatters[id]) != null ? _ref2.publish : void 0) {
	            value = (_ref3 = this.view.formatters[id]).publish.apply(_ref3, [value].concat(__slice.call(args)));
	          }
	        }
	        return this.observer.setValue(value);
	      }
	    };

	    Binding.prototype.bind = function() {
	      var dependency, observer, _i, _len, _ref1, _ref2, _ref3;
	      this.parseTarget();
	      if ((_ref1 = this.binder.bind) != null) {
	        _ref1.call(this, this.el);
	      }
	      if ((this.model != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
	        _ref3 = this.options.dependencies;
	        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	          dependency = _ref3[_i];
	          observer = this.observe(this.model, dependency, this.sync);
	          this.dependencies.push(observer);
	        }
	      }
	      if (this.view.preloadData) {
	        return this.sync();
	      }
	    };

	    Binding.prototype.unbind = function() {
	      var ai, args, fi, observer, _i, _len, _ref1, _ref2, _ref3, _ref4;
	      if ((_ref1 = this.binder.unbind) != null) {
	        _ref1.call(this, this.el);
	      }
	      if ((_ref2 = this.observer) != null) {
	        _ref2.unobserve();
	      }
	      _ref3 = this.dependencies;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        observer = _ref3[_i];
	        observer.unobserve();
	      }
	      this.dependencies = [];
	      _ref4 = this.formatterObservers;
	      for (fi in _ref4) {
	        args = _ref4[fi];
	        for (ai in args) {
	          observer = args[ai];
	          observer.unobserve();
	        }
	      }
	      return this.formatterObservers = {};
	    };

	    Binding.prototype.update = function(models) {
	      var _ref1, _ref2;
	      if (models == null) {
	        models = {};
	      }
	      this.model = (_ref1 = this.observer) != null ? _ref1.target : void 0;
	      return (_ref2 = this.binder.update) != null ? _ref2.call(this, models) : void 0;
	    };

	    Binding.prototype.getValue = function(el) {
	      if (this.binder && (this.binder.getValue != null)) {
	        return this.binder.getValue.call(this, el);
	      } else {
	        return Rivets.Util.getInputValue(el);
	      }
	    };

	    return Binding;

	  })();

	  Rivets.ComponentBinding = (function(_super) {
	    __extends(ComponentBinding, _super);

	    function ComponentBinding(view, el, type) {
	      var attribute, bindingRegExp, propertyName, _i, _len, _ref1, _ref2;
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.locals = __bind(this.locals, this);
	      this.component = this.view.components[this.type];
	      this["static"] = {};
	      this.observers = {};
	      this.upstreamObservers = {};
	      bindingRegExp = view.bindingRegExp();
	      _ref1 = this.el.attributes || [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        attribute = _ref1[_i];
	        if (!bindingRegExp.test(attribute.name)) {
	          propertyName = this.camelCase(attribute.name);
	          if (__indexOf.call((_ref2 = this.component["static"]) != null ? _ref2 : [], propertyName) >= 0) {
	            this["static"][propertyName] = attribute.value;
	          } else {
	            this.observers[propertyName] = attribute.value;
	          }
	        }
	      }
	    }

	    ComponentBinding.prototype.sync = function() {};

	    ComponentBinding.prototype.update = function() {};

	    ComponentBinding.prototype.publish = function() {};

	    ComponentBinding.prototype.locals = function() {
	      var key, observer, result, value, _ref1, _ref2;
	      result = {};
	      _ref1 = this["static"];
	      for (key in _ref1) {
	        value = _ref1[key];
	        result[key] = value;
	      }
	      _ref2 = this.observers;
	      for (key in _ref2) {
	        observer = _ref2[key];
	        result[key] = observer.value();
	      }
	      return result;
	    };

	    ComponentBinding.prototype.camelCase = function(string) {
	      return string.replace(/-([a-z])/g, function(grouped) {
	        return grouped[1].toUpperCase();
	      });
	    };

	    ComponentBinding.prototype.bind = function() {
	      var k, key, keypath, observer, option, options, scope, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _results;
	      if (!this.bound) {
	        _ref1 = this.observers;
	        for (key in _ref1) {
	          keypath = _ref1[key];
	          this.observers[key] = this.observe(this.view.models, keypath, ((function(_this) {
	            return function(key) {
	              return function() {
	                return _this.componentView.models[key] = _this.observers[key].value();
	              };
	            };
	          })(this)).call(this, key));
	        }
	        this.bound = true;
	      }
	      if (this.componentView != null) {
	        return this.componentView.bind();
	      } else {
	        this.el.innerHTML = this.component.template.call(this);
	        scope = this.component.initialize.call(this, this.el, this.locals());
	        this.el._bound = true;
	        options = {};
	        _ref2 = Rivets.extensions;
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          option = _ref2[_i];
	          options[option] = {};
	          if (this.component[option]) {
	            _ref3 = this.component[option];
	            for (k in _ref3) {
	              v = _ref3[k];
	              options[option][k] = v;
	            }
	          }
	          _ref4 = this.view[option];
	          for (k in _ref4) {
	            v = _ref4[k];
	            if ((_base = options[option])[k] == null) {
	              _base[k] = v;
	            }
	          }
	        }
	        _ref5 = Rivets.options;
	        for (_j = 0, _len1 = _ref5.length; _j < _len1; _j++) {
	          option = _ref5[_j];
	          options[option] = (_ref6 = this.component[option]) != null ? _ref6 : this.view[option];
	        }
	        this.componentView = new Rivets.View(this.el, scope, options);
	        this.componentView.bind();
	        _ref7 = this.observers;
	        _results = [];
	        for (key in _ref7) {
	          observer = _ref7[key];
	          _results.push(this.upstreamObservers[key] = this.observe(this.componentView.models, key, ((function(_this) {
	            return function(key, observer) {
	              return function() {
	                return observer.setValue(_this.componentView.models[key]);
	              };
	            };
	          })(this)).call(this, key, observer)));
	        }
	        return _results;
	      }
	    };

	    ComponentBinding.prototype.unbind = function() {
	      var key, observer, _ref1, _ref2, _ref3;
	      _ref1 = this.upstreamObservers;
	      for (key in _ref1) {
	        observer = _ref1[key];
	        observer.unobserve();
	      }
	      _ref2 = this.observers;
	      for (key in _ref2) {
	        observer = _ref2[key];
	        observer.unobserve();
	      }
	      return (_ref3 = this.componentView) != null ? _ref3.unbind.call(this) : void 0;
	    };

	    return ComponentBinding;

	  })(Rivets.Binding);

	  Rivets.TextBinding = (function(_super) {
	    __extends(TextBinding, _super);

	    function TextBinding(view, el, type, keypath, options) {
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.keypath = keypath;
	      this.options = options != null ? options : {};
	      this.sync = __bind(this.sync, this);
	      this.formatters = this.options.formatters || [];
	      this.dependencies = [];
	      this.formatterObservers = {};
	    }

	    TextBinding.prototype.binder = {
	      routine: function(node, value) {
	        return node.data = value != null ? value : '';
	      }
	    };

	    TextBinding.prototype.sync = function() {
	      return TextBinding.__super__.sync.apply(this, arguments);
	    };

	    return TextBinding;

	  })(Rivets.Binding);

	  Rivets["public"].binders.text = function(el, value) {
	    if (el.textContent != null) {
	      return el.textContent = value != null ? value : '';
	    } else {
	      return el.innerText = value != null ? value : '';
	    }
	  };

	  Rivets["public"].binders.html = function(el, value) {
	    return el.innerHTML = value != null ? value : '';
	  };

	  Rivets["public"].binders.show = function(el, value) {
	    return el.style.display = value ? '' : 'none';
	  };

	  Rivets["public"].binders.hide = function(el, value) {
	    return el.style.display = value ? 'none' : '';
	  };

	  Rivets["public"].binders.enabled = function(el, value) {
	    return el.disabled = !value;
	  };

	  Rivets["public"].binders.disabled = function(el, value) {
	    return el.disabled = !!value;
	  };

	  Rivets["public"].binders.checked = {
	    publishes: true,
	    priority: 2000,
	    bind: function(el) {
	      return Rivets.Util.bindEvent(el, 'change', this.publish);
	    },
	    unbind: function(el) {
	      return Rivets.Util.unbindEvent(el, 'change', this.publish);
	    },
	    routine: function(el, value) {
	      var _ref1;
	      if (el.type === 'radio') {
	        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) === (value != null ? value.toString() : void 0);
	      } else {
	        return el.checked = !!value;
	      }
	    }
	  };

	  Rivets["public"].binders.unchecked = {
	    publishes: true,
	    priority: 2000,
	    bind: function(el) {
	      return Rivets.Util.bindEvent(el, 'change', this.publish);
	    },
	    unbind: function(el) {
	      return Rivets.Util.unbindEvent(el, 'change', this.publish);
	    },
	    routine: function(el, value) {
	      var _ref1;
	      if (el.type === 'radio') {
	        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) !== (value != null ? value.toString() : void 0);
	      } else {
	        return el.checked = !value;
	      }
	    }
	  };

	  Rivets["public"].binders.value = {
	    publishes: true,
	    priority: 3000,
	    bind: function(el) {
	      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
	        this.event = el.tagName === 'SELECT' ? 'change' : 'input';
	        return Rivets.Util.bindEvent(el, this.event, this.publish);
	      }
	    },
	    unbind: function(el) {
	      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
	        return Rivets.Util.unbindEvent(el, this.event, this.publish);
	      }
	    },
	    routine: function(el, value) {
	      var o, _i, _len, _ref1, _ref2, _ref3, _results;
	      if (el.tagName === 'INPUT' && el.type === 'radio') {
	        return el.setAttribute('value', value);
	      } else if (window.jQuery != null) {
	        el = jQuery(el);
	        if ((value != null ? value.toString() : void 0) !== ((_ref1 = el.val()) != null ? _ref1.toString() : void 0)) {
	          return el.val(value != null ? value : '');
	        }
	      } else {
	        if (el.type === 'select-multiple') {
	          if (value != null) {
	            _results = [];
	            for (_i = 0, _len = el.length; _i < _len; _i++) {
	              o = el[_i];
	              _results.push(o.selected = (_ref2 = o.value, __indexOf.call(value, _ref2) >= 0));
	            }
	            return _results;
	          }
	        } else if ((value != null ? value.toString() : void 0) !== ((_ref3 = el.value) != null ? _ref3.toString() : void 0)) {
	          return el.value = value != null ? value : '';
	        }
	      }
	    }
	  };

	  Rivets["public"].binders["if"] = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      var attr, declaration;
	      if (this.marker == null) {
	        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
	        declaration = el.getAttribute(attr);
	        this.marker = document.createComment(" rivets: " + this.type + " " + declaration + " ");
	        this.bound = false;
	        el.removeAttribute(attr);
	        el.parentNode.insertBefore(this.marker, el);
	        return el.parentNode.removeChild(el);
	      }
	    },
	    unbind: function() {
	      var _ref1;
	      return (_ref1 = this.nested) != null ? _ref1.unbind() : void 0;
	    },
	    routine: function(el, value) {
	      var key, model, models, _ref1;
	      if (!!value === !this.bound) {
	        if (value) {
	          models = {};
	          _ref1 = this.view.models;
	          for (key in _ref1) {
	            model = _ref1[key];
	            models[key] = model;
	          }
	          (this.nested || (this.nested = new Rivets.View(el, models, this.view.options()))).bind();
	          this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
	          return this.bound = true;
	        } else {
	          el.parentNode.removeChild(el);
	          this.nested.unbind();
	          return this.bound = false;
	        }
	      }
	    },
	    update: function(models) {
	      var _ref1;
	      return (_ref1 = this.nested) != null ? _ref1.update(models) : void 0;
	    }
	  };

	  Rivets["public"].binders.unless = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      return Rivets["public"].binders["if"].bind.call(this, el);
	    },
	    unbind: function() {
	      return Rivets["public"].binders["if"].unbind.call(this);
	    },
	    routine: function(el, value) {
	      return Rivets["public"].binders["if"].routine.call(this, el, !value);
	    },
	    update: function(models) {
	      return Rivets["public"].binders["if"].update.call(this, models);
	    }
	  };

	  Rivets["public"].binders['on-*'] = {
	    "function": true,
	    priority: 1000,
	    unbind: function(el) {
	      if (this.handler) {
	        return Rivets.Util.unbindEvent(el, this.args[0], this.handler);
	      }
	    },
	    routine: function(el, value) {
	      if (this.handler) {
	        Rivets.Util.unbindEvent(el, this.args[0], this.handler);
	      }
	      return Rivets.Util.bindEvent(el, this.args[0], this.handler = this.eventHandler(value));
	    }
	  };

	  Rivets["public"].binders['each-*'] = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      var attr, view, _i, _len, _ref1;
	      if (this.marker == null) {
	        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
	        this.marker = document.createComment(" rivets: " + this.type + " ");
	        this.iterated = [];
	        el.removeAttribute(attr);
	        el.parentNode.insertBefore(this.marker, el);
	        el.parentNode.removeChild(el);
	      } else {
	        _ref1 = this.iterated;
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          view = _ref1[_i];
	          view.bind();
	        }
	      }
	    },
	    unbind: function(el) {
	      var view, _i, _len, _ref1, _results;
	      if (this.iterated != null) {
	        _ref1 = this.iterated;
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          view = _ref1[_i];
	          _results.push(view.unbind());
	        }
	        return _results;
	      }
	    },
	    routine: function(el, collection) {
	      var binding, data, i, index, key, model, modelName, options, previous, template, view, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3, _results;
	      modelName = this.args[0];
	      collection = collection || [];
	      if (this.iterated.length > collection.length) {
	        _ref1 = Array(this.iterated.length - collection.length);
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          i = _ref1[_i];
	          view = this.iterated.pop();
	          view.unbind();
	          this.marker.parentNode.removeChild(view.els[0]);
	        }
	      }
	      for (index = _j = 0, _len1 = collection.length; _j < _len1; index = ++_j) {
	        model = collection[index];
	        data = {
	          index: index
	        };
	        data[modelName] = model;
	        if (this.iterated[index] == null) {
	          _ref2 = this.view.models;
	          for (key in _ref2) {
	            model = _ref2[key];
	            if (data[key] == null) {
	              data[key] = model;
	            }
	          }
	          previous = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker;
	          options = this.view.options();
	          options.preloadData = true;
	          template = el.cloneNode(true);
	          view = new Rivets.View(template, data, options);
	          view.bind();
	          this.iterated.push(view);
	          this.marker.parentNode.insertBefore(template, previous.nextSibling);
	        } else if (this.iterated[index].models[modelName] !== model) {
	          this.iterated[index].update(data);
	        }
	      }
	      if (el.nodeName === 'OPTION') {
	        _ref3 = this.view.bindings;
	        _results = [];
	        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	          binding = _ref3[_k];
	          if (binding.el === this.marker.parentNode && binding.type === 'value') {
	            _results.push(binding.sync());
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    },
	    update: function(models) {
	      var data, key, model, view, _i, _len, _ref1, _results;
	      data = {};
	      for (key in models) {
	        model = models[key];
	        if (key !== this.args[0]) {
	          data[key] = model;
	        }
	      }
	      _ref1 = this.iterated;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        view = _ref1[_i];
	        _results.push(view.update(data));
	      }
	      return _results;
	    }
	  };

	  Rivets["public"].binders['class-*'] = function(el, value) {
	    var elClass;
	    elClass = " " + el.className + " ";
	    if (!value === (elClass.indexOf(" " + this.args[0] + " ") !== -1)) {
	      return el.className = value ? "" + el.className + " " + this.args[0] : elClass.replace(" " + this.args[0] + " ", ' ').trim();
	    }
	  };

	  Rivets["public"].binders['*'] = function(el, value) {
	    if (value != null) {
	      return el.setAttribute(this.type, value);
	    } else {
	      return el.removeAttribute(this.type);
	    }
	  };

	  Rivets["public"].adapters['.'] = {
	    id: '_rv',
	    counter: 0,
	    weakmap: {},
	    weakReference: function(obj) {
	      var id, _base, _name;
	      if (!obj.hasOwnProperty(this.id)) {
	        id = this.counter++;
	        Object.defineProperty(obj, this.id, {
	          value: id
	        });
	      }
	      return (_base = this.weakmap)[_name = obj[this.id]] || (_base[_name] = {
	        callbacks: {}
	      });
	    },
	    cleanupWeakReference: function(ref, id) {
	      if (!Object.keys(ref.callbacks).length) {
	        if (!(ref.pointers && Object.keys(ref.pointers).length)) {
	          return delete this.weakmap[id];
	        }
	      }
	    },
	    stubFunction: function(obj, fn) {
	      var map, original, weakmap;
	      original = obj[fn];
	      map = this.weakReference(obj);
	      weakmap = this.weakmap;
	      return obj[fn] = function() {
	        var callback, k, r, response, _i, _len, _ref1, _ref2, _ref3, _ref4;
	        response = original.apply(obj, arguments);
	        _ref1 = map.pointers;
	        for (r in _ref1) {
	          k = _ref1[r];
	          _ref4 = (_ref2 = (_ref3 = weakmap[r]) != null ? _ref3.callbacks[k] : void 0) != null ? _ref2 : [];
	          for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
	            callback = _ref4[_i];
	            callback();
	          }
	        }
	        return response;
	      };
	    },
	    observeMutations: function(obj, ref, keypath) {
	      var fn, functions, map, _base, _i, _len;
	      if (Array.isArray(obj)) {
	        map = this.weakReference(obj);
	        if (map.pointers == null) {
	          map.pointers = {};
	          functions = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice'];
	          for (_i = 0, _len = functions.length; _i < _len; _i++) {
	            fn = functions[_i];
	            this.stubFunction(obj, fn);
	          }
	        }
	        if ((_base = map.pointers)[ref] == null) {
	          _base[ref] = [];
	        }
	        if (__indexOf.call(map.pointers[ref], keypath) < 0) {
	          return map.pointers[ref].push(keypath);
	        }
	      }
	    },
	    unobserveMutations: function(obj, ref, keypath) {
	      var idx, map, pointers;
	      if (Array.isArray(obj) && (obj[this.id] != null)) {
	        if (map = this.weakmap[obj[this.id]]) {
	          if (pointers = map.pointers[ref]) {
	            if ((idx = pointers.indexOf(keypath)) >= 0) {
	              pointers.splice(idx, 1);
	            }
	            if (!pointers.length) {
	              delete map.pointers[ref];
	            }
	            return this.cleanupWeakReference(map, obj[this.id]);
	          }
	        }
	      }
	    },
	    observe: function(obj, keypath, callback) {
	      var callbacks, desc, value;
	      callbacks = this.weakReference(obj).callbacks;
	      if (callbacks[keypath] == null) {
	        callbacks[keypath] = [];
	        desc = Object.getOwnPropertyDescriptor(obj, keypath);
	        if (!((desc != null ? desc.get : void 0) || (desc != null ? desc.set : void 0))) {
	          value = obj[keypath];
	          Object.defineProperty(obj, keypath, {
	            enumerable: true,
	            get: function() {
	              return value;
	            },
	            set: (function(_this) {
	              return function(newValue) {
	                var map, _i, _len, _ref1;
	                if (newValue !== value) {
	                  _this.unobserveMutations(value, obj[_this.id], keypath);
	                  value = newValue;
	                  if (map = _this.weakmap[obj[_this.id]]) {
	                    callbacks = map.callbacks;
	                    if (callbacks[keypath]) {
	                      _ref1 = callbacks[keypath].slice();
	                      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	                        callback = _ref1[_i];
	                        if (__indexOf.call(callbacks[keypath], callback) >= 0) {
	                          callback();
	                        }
	                      }
	                    }
	                    return _this.observeMutations(newValue, obj[_this.id], keypath);
	                  }
	                }
	              };
	            })(this)
	          });
	        }
	      }
	      if (__indexOf.call(callbacks[keypath], callback) < 0) {
	        callbacks[keypath].push(callback);
	      }
	      return this.observeMutations(obj[keypath], obj[this.id], keypath);
	    },
	    unobserve: function(obj, keypath, callback) {
	      var callbacks, idx, map;
	      if (map = this.weakmap[obj[this.id]]) {
	        if (callbacks = map.callbacks[keypath]) {
	          if ((idx = callbacks.indexOf(callback)) >= 0) {
	            callbacks.splice(idx, 1);
	            if (!callbacks.length) {
	              delete map.callbacks[keypath];
	            }
	          }
	          this.unobserveMutations(obj[keypath], obj[this.id], keypath);
	          return this.cleanupWeakReference(map, obj[this.id]);
	        }
	      }
	    },
	    get: function(obj, keypath) {
	      return obj[keypath];
	    },
	    set: function(obj, keypath, value) {
	      return obj[keypath] = value;
	    }
	  };

	  Rivets.factory = function(sightglass) {
	    Rivets.sightglass = sightglass;
	    Rivets["public"]._ = Rivets;
	    return Rivets["public"];
	  };

	  if (typeof (typeof module !== "undefined" && module !== null ? module.exports : void 0) === 'object') {
	    module.exports = Rivets.factory(__webpack_require__(239));
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(239)], __WEBPACK_AMD_DEFINE_RESULT__ = function(sightglass) {
	      return this.rivets = Rivets.factory(sightglass);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    this.rivets = Rivets.factory(sightglass);
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  // Public sightglass interface.
	  function sightglass(obj, keypath, callback, options) {
	    return new Observer(obj, keypath, callback, options)
	  }

	  // Batteries not included.
	  sightglass.adapters = {}

	  // Constructs a new keypath observer and kicks things off.
	  function Observer(obj, keypath, callback, options) {
	    this.options = options || {}
	    this.options.adapters = this.options.adapters || {}
	    this.obj = obj
	    this.keypath = keypath
	    this.callback = callback
	    this.objectPath = []
	    this.update = this.update.bind(this)
	    this.parse()

	    if (isObject(this.target = this.realize())) {
	      this.set(true, this.key, this.target, this.callback)
	    }
	  }

	  // Tokenizes the provided keypath string into interface + path tokens for the
	  // observer to work with.
	  Observer.tokenize = function(keypath, interfaces, root) {
	    var tokens = []
	    var current = {i: root, path: ''}
	    var index, chr

	    for (index = 0; index < keypath.length; index++) {
	      chr = keypath.charAt(index)

	      if (!!~interfaces.indexOf(chr)) {
	        tokens.push(current)
	        current = {i: chr, path: ''}
	      } else {
	        current.path += chr
	      }
	    }

	    tokens.push(current)
	    return tokens
	  }

	  // Parses the keypath using the interfaces defined on the view. Sets variables
	  // for the tokenized keypath as well as the end key.
	  Observer.prototype.parse = function() {
	    var interfaces = this.interfaces()
	    var root, path

	    if (!interfaces.length) {
	      error('Must define at least one adapter interface.')
	    }

	    if (!!~interfaces.indexOf(this.keypath[0])) {
	      root = this.keypath[0]
	      path = this.keypath.substr(1)
	    } else {
	      if (typeof (root = this.options.root || sightglass.root) === 'undefined') {
	        error('Must define a default root adapter.')
	      }

	      path = this.keypath
	    }

	    this.tokens = Observer.tokenize(path, interfaces, root)
	    this.key = this.tokens.pop()
	  }

	  // Realizes the full keypath, attaching observers for every key and correcting
	  // old observers to any changed objects in the keypath.
	  Observer.prototype.realize = function() {
	    var current = this.obj
	    var unreached = false
	    var prev

	    this.tokens.forEach(function(token, index) {
	      if (isObject(current)) {
	        if (typeof this.objectPath[index] !== 'undefined') {
	          if (current !== (prev = this.objectPath[index])) {
	            this.set(false, token, prev, this.update)
	            this.set(true, token, current, this.update)
	            this.objectPath[index] = current
	          }
	        } else {
	          this.set(true, token, current, this.update)
	          this.objectPath[index] = current
	        }

	        current = this.get(token, current)
	      } else {
	        if (unreached === false) {
	          unreached = index
	        }

	        if (prev = this.objectPath[index]) {
	          this.set(false, token, prev, this.update)
	        }
	      }
	    }, this)

	    if (unreached !== false) {
	      this.objectPath.splice(unreached)
	    }

	    return current
	  }

	  // Updates the keypath. This is called when any intermediary key is changed.
	  Observer.prototype.update = function() {
	    var next, oldValue

	    if ((next = this.realize()) !== this.target) {
	      if (isObject(this.target)) {
	        this.set(false, this.key, this.target, this.callback)
	      }

	      if (isObject(next)) {
	        this.set(true, this.key, next, this.callback)
	      }

	      oldValue = this.value()
	      this.target = next

	      // Always call callback if value is a function. If not a function, call callback only if value changed
	      if (this.value() instanceof Function || this.value() !== oldValue) this.callback()
	    }
	  }

	  // Reads the current end value of the observed keypath. Returns undefined if
	  // the full keypath is unreachable.
	  Observer.prototype.value = function() {
	    if (isObject(this.target)) {
	      return this.get(this.key, this.target)
	    }
	  }

	  // Sets the current end value of the observed keypath. Calling setValue when
	  // the full keypath is unreachable is a no-op.
	  Observer.prototype.setValue = function(value) {
	    if (isObject(this.target)) {
	      this.adapter(this.key).set(this.target, this.key.path, value)
	    }
	  }

	  // Gets the provided key on an object.
	  Observer.prototype.get = function(key, obj) {
	    return this.adapter(key).get(obj, key.path)
	  }

	  // Observes or unobserves a callback on the object using the provided key.
	  Observer.prototype.set = function(active, key, obj, callback) {
	    var action = active ? 'observe' : 'unobserve'
	    this.adapter(key)[action](obj, key.path, callback)
	  }

	  // Returns an array of all unique adapter interfaces available.
	  Observer.prototype.interfaces = function() {
	    var interfaces = Object.keys(this.options.adapters)

	    Object.keys(sightglass.adapters).forEach(function(i) {
	      if (!~interfaces.indexOf(i)) {
	        interfaces.push(i)
	      }
	    })

	    return interfaces
	  }

	  // Convenience function to grab the adapter for a specific key.
	  Observer.prototype.adapter = function(key) {
	    return this.options.adapters[key.i] ||
	      sightglass.adapters[key.i]
	  }

	  // Unobserves the entire keypath.
	  Observer.prototype.unobserve = function() {
	    var obj

	    this.tokens.forEach(function(token, index) {
	      if (obj = this.objectPath[index]) {
	        this.set(false, token, obj, this.update)
	      }
	    }, this)

	    if (isObject(this.target)) {
	      this.set(false, this.key, this.target, this.callback)
	    }
	  }

	  // Check if a value is an object than can be observed.
	  function isObject(obj) {
	    return typeof obj === 'object' && obj !== null
	  }

	  // Error thrower.
	  function error(message) {
	    throw new Error('[sightglass] ' + message)
	  }

	  // Export module for Node and the browser.
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = sightglass
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return this.sightglass = sightglass
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    this.sightglass = sightglass
	  }
	}).call(this);


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./app/app.html": 241,
		"./editor/editor.html": 242,
		"./gutter/gutter.html": 243,
		"./tab/tab.html": 244,
		"./tree/tree.html": 245
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 240;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"app\">\n    <div class=\"app__bar\">   \n        <div \n            class=\"app__bar__top\">   \n            {{ fileName }}\n        </div>\n        <div>   \n            <ul class=\"list list--inline\">\n                <li>File</li>\n                <li>Edit</li>\n                <li>Selection</li>\n                <li>Find</li>\n                <li>View</li>\n                <li>Goto</li>\n                <li>Tools</li>\n                <li>Project</li>\n                <li>Preferences</li>\n                <li>Help</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"app__main\">   \n        <div id=\"jsTree\" class=\"tree\"></div>\n        <div class=\"app__main__content\">   \n            <div class=\"editor-ctn\">\n                <div id=\"jsTab\" class=\"tab\"></div>\n                <div id=\"jsEditor\" class=\"editor\"></div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 242 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"editor__inner\">\n    <div id=\"jsGutter\" class=\"gutter\"></div>\n    <div class=\"editor__inner__content\">\n        <pre style=\"cursor: text;\"><!--\n        --><code id=\"jsCodeContent\" class=\"language-js\" contenteditable=\"true\"></code>\n        </pre>\n        <div id=\"jsMarkdownContent\" class=\"markdown-body jsIsHidden\"></div>\n    </div>\n</div>";

/***/ }),
/* 243 */
/***/ (function(module, exports) {

	module.exports = "<li \n    my-each-gutter=\"line\"\n    class=\"gutter__item\">\n    {{iLine}}\n</li>";

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	module.exports = "<ul class=\"editor__tab\">\n    <li \n        my-each-tab=\"tab\"\n        class=\"editor__tab__item\"\n        my-class-jsIsActive=\"tab.active\">\n        <button\n            type=\"button\"\n            class=\"\n                jsEventTabItem\n                btn-reset\n                editor__tab__item__open\"\n            my-data-name=\"tab.name\"\n            my-data-full-path=\"tab.fullPath\">\n            {{ tab.name }}\n        </button>\n        <button\n            type=\"button\"\n            class=\"\n                jsEventTabItemClose\n                btn-reset\n                editor__tab__item__close\"\n            my-data-name=\"tab.name\"\n            my-data-full-path=\"tab.fullPath\">\n            x\n        </button>\n    </li>\n</ul>";

/***/ }),
/* 245 */
/***/ (function(module, exports) {

	module.exports = "<ul>\n    <li \n        class=\"\n            tree__item\n            tree__item--root\">\n        <span \n            class=\"\n                btn-tree\n                btn-tree--folder\">\n            {{ title }}\n        </span>\n        <ul>                \n            <li \n                my-each-level1=\"tree\"\n                class=\"\n                    tree__item\n                    tree__item--level1\">\n                <button\n                    type=\"button\"\n                    class=\"\n                        jsEventMenuItem\n                        btn-reset\n                        btn-tree\"\n                    my-class-btn-tree--folder=\"level1.isFolder\"\n                    my-class-btn-tree--arrow=\"level1.isFolder\"\n                    my-class-jsisfolder=\"level1.isFolder\"\n                    my-data-name=\"level1.name\"\n                    my-data-full-path=\"level1.fullPath\">    \n                    {{ level1.name }}\n                </button>\n                <ul>                \n                    <li \n                        my-each-level2=\"level1.children\"\n                        class=\"\n                            tree__item\n                            tree__item--level2\">\n                        <button\n                            type=\"button\"\n                            class=\"\n                                jsEventMenuItem\n                                btn-reset\n                                btn-tree\"\n                            my-class-btn-tree--folder=\"level2.isFolder\"\n                            my-class-btn-tree--arrow=\"level2.isFolder\"\n                            my-class-jsisfolder=\"level2.isFolder\"\n                            my-data-name=\"level2.name\"\n                            my-data-full-path=\"level2.fullPath\">    \n                            {{ level2.name }}\n                        </button>\n                        <ul>                \n                            <li \n                                my-each-level3=\"level2.children\"\n                                class=\"\n                                    tree__item\n                                    tree__item--level3\">\n                                <button\n                                    type=\"button\"\n                                    class=\"\n                                        jsEventMenuItem\n                                        btn-reset\n                                        btn-tree\"\n                                    my-class-btn-tree--folder=\"level3.isFolder\"\n                                    my-data-name=\"level3.name\"\n                                    my-data-full-path=\"level3.fullPath\">    \n                                    {{ level3.name }}\n                                </button>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n</ul> ";

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./app/app.css": 247,
		"./editor/editor.css": 251,
		"./gutter/gutter.css": 253,
		"./tab/tab.css": 255,
		"./tree/tree.css": 257
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 246;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./app.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(249)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\nprogress,sub,sup {\n    vertical-align: baseline;\n}\n\nbutton,hr,input {\n    overflow: visible;\n}\n\n[type=checkbox],[type=radio],legend {\n    box-sizing: border-box;\n    padding: 0;\n}\n\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n}\n\nbody {\n    margin: 0;\n}\n\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {\n    display: block;\n}\n\naudio,canvas,progress,video {\n    display: inline-block;\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n[hidden],template {\n    display: none;\n}\n\na {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n\na:active,a:hover {\n    outline-width: 0;\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n}\n\nb,strong {\n    font-weight: bolder;\n}\n\ndfn {\n    font-style: italic;\n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0;\n}\n\nmark {\n    background-color: #ff0;\n    color: #000;\n}\n\nsmall {\n    font-size: 80%;\n}\n\nsub,sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n}\n\nsub {\n    bottom: -.25em;\n}\n\nsup {\n    top: -.5em;\n}\n\nimg {\n    border-style: none;\n}\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\ncode,kbd,pre,samp {\n    font-family: monospace,monospace;\n    font-size: 1em;\n}\n\nfigure {\n    margin: 1em 40px;\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0;\n}\n\nbutton,input,optgroup,select,textarea {\n    font: inherit;\n    margin: 0;\n}\n\noptgroup {\n    font-weight: 700;\n}\n\nbutton,select {\n    text-transform: none;\n}\n\n[type=reset],[type=submit],button,html [type=button] {\n    -webkit-appearance: button;\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n    outline: ButtonText dotted 1px;\n}\n\nfieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: .35em .625em .75em;\n}\n\nlegend {\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    white-space: normal;\n}\n\ntextarea {\n    overflow: auto;\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n[type=search] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: .54;\n}\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n}\n/* Helpers */\n/* ------- */\n\n.cf:before, .cf:after {\n    content: \" \";\n    display: table;\n}\n\n.cf:after {\n    clear: both;\n}\n\n\n/* Additional reset */\n/* ---------------- */\nul, li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n*, *::before, *::after{\n    box-sizing: border-box;\n}\n\n\n/* Object */\n/* ------ */\n\n.list {\n}\n\n.list--inline li {\n    display: inline-block;\n    margin: 0 7px;\n}\n\n.btn-reset {\n    display: inline-block;\n    background-color: transparent;\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.btn-reset:focus {\n    outline: none;\n}\n\n\n/* Style */\n/* ----- */\n\nbody {\n    font: 14/16 arial, helvetica, sans-serif;\n    color: white;\n}\n\n.app {\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%\n}\n\n.app__bar {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    height: 48px;\n    padding: 0 10px;\n    background-color: #2D2D2D;\n    font-size: 14px;\n}\n\n.app__bar__top {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n}\n\n.app__main {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n    height: 100%;\n}\n\n.app__main__content {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    width: 1px;\n    height: 100%;\n}\n\n.log-terminal {\n    display: none;\n    position: fixed;\n    z-index: 2;\n    left: 20px;\n    bottom: 20px;\n    width: 272px;\n    height: 120px;\n    padding: 5px 10px 10px;\n    overflow: auto;\n    background-color: white;\n    border: 1px solid black;\n    font-family: 'Inconsolata', courier;\n    font-weight: 400;\n    color: green;\n}\n\n.log-terminal p {\n    font-size: 12px;\n    margin: 5px 0 0\n}\n\n.log-terminal p.error {\n    color: red;\n}\n\n.log-terminal.jsIsVisible {\n    display: block;\n}\n\n.editor-ctn {\n    background-color: var(--sublime-background);\n}", ""]);

	// exports


/***/ }),
/* 249 */
/***/ (function(module, exports) {

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


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./editor.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./editor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(249)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\nprogress,sub,sup {\n    vertical-align: baseline;\n}\n\nbutton,hr,input {\n    overflow: visible;\n}\n\n[type=checkbox],[type=radio],legend {\n    box-sizing: border-box;\n    padding: 0;\n}\n\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n}\n\nbody {\n    margin: 0;\n}\n\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {\n    display: block;\n}\n\naudio,canvas,progress,video {\n    display: inline-block;\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n[hidden],template {\n    display: none;\n}\n\na {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n\na:active,a:hover {\n    outline-width: 0;\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n}\n\nb,strong {\n    font-weight: bolder;\n}\n\ndfn {\n    font-style: italic;\n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0;\n}\n\nmark {\n    background-color: #ff0;\n    color: #000;\n}\n\nsmall {\n    font-size: 80%;\n}\n\nsub,sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n}\n\nsub {\n    bottom: -.25em;\n}\n\nsup {\n    top: -.5em;\n}\n\nimg {\n    border-style: none;\n}\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\ncode,kbd,pre,samp {\n    font-family: monospace,monospace;\n    font-size: 1em;\n}\n\nfigure {\n    margin: 1em 40px;\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0;\n}\n\nbutton,input,optgroup,select,textarea {\n    font: inherit;\n    margin: 0;\n}\n\noptgroup {\n    font-weight: 700;\n}\n\nbutton,select {\n    text-transform: none;\n}\n\n[type=reset],[type=submit],button,html [type=button] {\n    -webkit-appearance: button;\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n    outline: ButtonText dotted 1px;\n}\n\nfieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: .35em .625em .75em;\n}\n\nlegend {\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    white-space: normal;\n}\n\ntextarea {\n    overflow: auto;\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n[type=search] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: .54;\n}\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n}\n/* Editor */\n/* ------ */\n\n/* TODO: solve scope var, in json ? bof */\n\n::-webkit-scrollbar {\n    width: 10px;\n    background-color: #222;\n    border-radius: 10px;\n}\n  \n::-webkit-scrollbar-thumb {\n    background-color: #565656;\n    border-radius: 10px;\n}\n\n.editor * {\n    outline: none;\n}\n\n.editor__inner {\n    display: -ms-flexbox;\n    display: flex;\n    /*flex-wrap: wrap;\n        justify-content: space-between;\n        align-content: stretch;*/\n    height: calc( 100% - 33px -  48px );\n    /* TODO: top bar, get var*/\n    padding: 5px;\n}\n\n.editor__inner__content {\n    /* TODO: fix height when too many gutter lines */\n    overflow: auto;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n}\n\n.editor__inner__content pre {\n    margin: 0;\n    padding: 0;\n    background-color: #141414;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n}\n\n.editor__inner__content pre.jsIsHidden {\n    display: none;\n}\n\n.editor__inner__content pre[class*=\"language-\"], .editor__inner__content code[class*=\"language-\"] {\n    line-height: 18px;\n}\n\n.editor__inner__content .markdown-body {\n    padding: 45px;\n    background-color: white;\n}\n\n.editor__inner__content .markdown-body ul {\n    list-style: initial;\n    margin: initial;\n    padding: 0 0 0 40px;\n}\n\n.editor__inner__content .markdown-body ul li {\n    list-style: initial;\n    display: list-item;\n}\n\n.editor__inner__content .markdown-body h1, .editor__inner__content .markdown-body h2, .editor__inner__content .markdown-body h3, .editor__inner__content .markdown-body h4, .editor__inner__content .markdown-body h5, .editor__inner__content .markdown-body h6 {\n    margin-bottom: 0;\n}\n\n.editor__inner__content .markdown-body.jsIsHidden {\n    display: none;\n}", ""]);

	// exports


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(254);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./gutter.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./gutter.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(249)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\nprogress,sub,sup {\n    vertical-align: baseline\n}\n\nbutton,hr,input {\n    overflow: visible\n}\n\n[type=checkbox],[type=radio],legend {\n    box-sizing: border-box;\n    padding: 0\n}\n\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%\n}\n\nbody {\n    margin: 0\n}\n\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {\n    display: block\n}\n\naudio,canvas,progress,video {\n    display: inline-block\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden],template {\n    display: none\n}\n\na {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects\n}\n\na:active,a:hover {\n    outline-width: 0\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted\n}\n\nb,strong {\n    font-weight: bolder\n}\n\ndfn {\n    font-style: italic\n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0\n}\n\nmark {\n    background-color: #ff0;\n    color: #000\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub,sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative\n}\n\nsub {\n    bottom: -.25em\n}\n\nsup {\n    top: -.5em\n}\n\nimg {\n    border-style: none\n}\n\nsvg:not(:root) {\n    overflow: hidden\n}\n\ncode,kbd,pre,samp {\n    font-family: monospace,monospace;\n    font-size: 1em\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0\n}\n\nbutton,input,optgroup,select,textarea {\n    font: inherit;\n    margin: 0\n}\n\noptgroup {\n    font-weight: 700\n}\n\nbutton,select {\n    text-transform: none\n}\n\n[type=reset],[type=submit],button,html [type=button] {\n    -webkit-appearance: button\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n    border-style: none;\n    padding: 0\n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n    outline: ButtonText dotted 1px\n}\n\nfieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: .35em .625em .75em\n}\n\nlegend {\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    white-space: normal\n}\n\ntextarea {\n    overflow: auto\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {\n    height: auto\n}\n\n[type=search] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px\n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: .54\n}\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit\n}\n/* Gutter line number */\n/* ------------------ */\n\n.gutter {\n    width: 50px;\n    height: 100%;\n    padding: 0 20px 0 15px;\n    font-size: 13px;\n    color: #555;\n    text-align: right\n}\n\n.gutter__item {\n    height: 18px;\n    line-height: 18px\n}", ""]);

	// exports


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(256);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./tab.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./tab.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(249)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\nprogress,sub,sup {\n    vertical-align: baseline    \n}\n\nbutton,hr,input {\n    overflow: visible    \n}\n\n[type=checkbox],[type=radio],legend {\n    box-sizing: border-box;\n    padding: 0    \n}\n\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%    \n}\n\nbody {\n    margin: 0    \n}\n\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {\n    display: block    \n}\n\naudio,canvas,progress,video {\n    display: inline-block    \n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0    \n}\n\n[hidden],template {\n    display: none    \n}\n\na {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects    \n}\n\na:active,a:hover {\n    outline-width: 0    \n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted    \n}\n\nb,strong {\n    font-weight: bolder    \n}\n\ndfn {\n    font-style: italic    \n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0    \n}\n\nmark {\n    background-color: #ff0;\n    color: #000    \n}\n\nsmall {\n    font-size: 80%    \n}\n\nsub,sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative    \n}\n\nsub {\n    bottom: -.25em    \n}\n\nsup {\n    top: -.5em    \n}\n\nimg {\n    border-style: none    \n}\n\nsvg:not(:root) {\n    overflow: hidden    \n}\n\ncode,kbd,pre,samp {\n    font-family: monospace,monospace;\n    font-size: 1em    \n}\n\nfigure {\n    margin: 1em 40px    \n}\n\nhr {\n    box-sizing: content-box;\n    height: 0    \n}\n\nbutton,input,optgroup,select,textarea {\n    font: inherit;\n    margin: 0    \n}\n\noptgroup {\n    font-weight: 700    \n}\n\nbutton,select {\n    text-transform: none    \n}\n\n[type=reset],[type=submit],button,html [type=button] {\n    -webkit-appearance: button    \n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n    border-style: none;\n    padding: 0    \n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n    outline: ButtonText dotted 1px    \n}\n\nfieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: .35em .625em .75em    \n}\n\nlegend {\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    white-space: normal    \n}\n\ntextarea {\n    overflow: auto    \n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {\n    height: auto    \n}\n\n[type=search] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px    \n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none    \n}\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: .54    \n}\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit    \n}\n/* Editor */\n/* ------ */\n\n/* TODO: solve scope var */\n\n.editor {\n    background-color: #141414    \n}\n\n.editor__tab {\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 33px;\n    padding: 5px 0 0 50px;\n    background-color: #565656    \n}\n\n.editor__tab__item {\n    position: relative;\n    z-index: 1;\n    /* Sizes */\n    max-width: 175px;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    margin-left: -12px;\n    padding: 0 10px;\n    /* Trapezoid */\n    height: 0;\n    line-height: calc( 33px - 5px );\n    border-bottom: calc( 33px - 5px ) solid #666;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    font-size: 13px;\n    cursor: default;    \n}\n\n.editor__tab__item .btn-reset {\n    overflow: hidden;\n    height: 33px    \n}\n\n.editor__tab__item.jsIsActive {\n    z-index: 2;\n    border-bottom-color: #141414    \n}\n\n.editor__tab__item__open {\n    width: 84%;\n    color: white;\n    text-align: left    \n}\n\n.editor__tab__item__close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 30px;\n    height: calc( 33px - 5px );\n    color: white;\n    cursor: default;\n    outline: none    \n}", ""]);

	// exports


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(258);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./tree.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./tree.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(249)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\nprogress,sub,sup {\n    vertical-align: baseline\n}\n\nbutton,hr,input {\n    overflow: visible\n}\n\n[type=checkbox],[type=radio],legend {\n    box-sizing: border-box;\n    padding: 0\n}\n\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%\n}\n\nbody {\n    margin: 0\n}\n\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {\n    display: block\n}\n\naudio,canvas,progress,video {\n    display: inline-block\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden],template {\n    display: none\n}\n\na {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects\n}\n\na:active,a:hover {\n    outline-width: 0\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted\n}\n\nb,strong {\n    font-weight: bolder\n}\n\ndfn {\n    font-style: italic\n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0\n}\n\nmark {\n    background-color: #ff0;\n    color: #000\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub,sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative\n}\n\nsub {\n    bottom: -.25em\n}\n\nsup {\n    top: -.5em\n}\n\nimg {\n    border-style: none\n}\n\nsvg:not(:root) {\n    overflow: hidden\n}\n\ncode,kbd,pre,samp {\n    font-family: monospace,monospace;\n    font-size: 1em\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0\n}\n\nbutton,input,optgroup,select,textarea {\n    font: inherit;\n    margin: 0\n}\n\noptgroup {\n    font-weight: 700\n}\n\nbutton,select {\n    text-transform: none\n}\n\n[type=reset],[type=submit],button,html [type=button] {\n    -webkit-appearance: button\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n    border-style: none;\n    padding: 0\n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n    outline: ButtonText dotted 1px\n}\n\nfieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: .35em .625em .75em\n}\n\nlegend {\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    white-space: normal\n}\n\ntextarea {\n    overflow: auto\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {\n    height: auto\n}\n\n[type=search] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px\n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: .54\n}\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit\n}\n/* Tree */\n/* ---- */\n\n.btn-tree {\n    height: 24px;\n    line-height: 24px\n}\n\n.btn-tree--folder {\n    font-weight: bold\n}\n\n.btn-tree--arrow {}\n\n.btn-tree--arrow::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 10px;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 8px 5px 0 5px;\n    border-color: #666666 transparent transparent transparent;\n    transform: rotate(-90deg);\n    transition: transform 100ms linear\n}\n\n.btn-tree--arrow.jsIsOpen::before {\n    transform: rotate(0)\n}\n\n.tree {\n    width: 246px;\n    height: 100%;\n    padding: 20px 10px;\n    background-color: var(--sublime-menu);\n    font-family: 'Inconsolata', courier;\n    font-weight: 400;\n    color: black;\n}\n\n.tree strong {\n    font-weight: 700;\n}\n\n.tree ul ul ul {\n    padding-left: 8px;\n    /*ul {\n            padding-left: 16px;\n            \n            ul {\n                padding-left: 24px;\n            }\n        }*/\n}\n\n.tree__item {\n    position: relative;\n    padding-left: 10px;\n}\n\n.tree__item .jsisfolder + ul {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 100ms linear\n}\n\n.tree__item--root > ul {\n    margin-top: 3px\n}\n\n.tree__item--level1 .jsisfolder.jsIsOpen + ul {\n    max-height: 700px\n}\n\n.tree__item--level2 .jsisfolder.jsIsOpen + ul {\n    max-height: 300px\n}\n\n.tree__item--level3 .jsisfolder.jsIsOpen + ul {\n    max-height: 200px\n}", ""]);

	// exports


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _TreeComponent = __webpack_require__(260);

	var _TreeComponent2 = _interopRequireDefault(_TreeComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _fp_forEach = __webpack_require__(262);
	var _fp_sortBy = __webpack_require__(270);

	var treeCtrl = function treeCtrl() {

	    var Tree = new _TreeComponent2.default('tree', './tree/tree.json');

	    Tree.load().then(function (data) {

	        // Get all tree (include root)
	        var oResult = JSON.parse(data);

	        // Sort subfolder
	        oResult = _fp_forEach(function (oLevel1) {

	            if (oLevel1.isFolder) {

	                oLevel1.children = _fp_sortBy(function (o) {
	                    return o.name.toLowerCase();
	                })(oLevel1.children);

	                _fp_forEach(function (oLevel2) {

	                    oLevel2.children = _fp_sortBy(function (o) {
	                        return o.name.toLowerCase();
	                    })(oLevel2.children);
	                })(oLevel1.children);
	            }
	        })(oResult.children);

	        // And sort first level
	        oResult = _fp_sortBy(function (o) {
	            return [!o.isFolder, o.name.toLowerCase()].join("_");
	        })(oResult);

	        var oTree = {
	            "title": "Curriculum Vitae",
	            "tree": oResult
	        };

	        Tree.setData(oTree);

	        Tree.initTemplate();

	        // Tree.setClickEvent()
	        Tree.setEventOnNodeList('click', '.jsEventMenuItem', '_triggerItem');
	    });
	};
	exports.default = treeCtrl;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _log = __webpack_require__(2);

	var _log2 = _interopRequireDefault(_log);

	var _http = __webpack_require__(4);

	var _http2 = _interopRequireDefault(_http);

	var _CreateComponent2 = __webpack_require__(7);

	var _CreateComponent3 = _interopRequireDefault(_CreateComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PubSub = __webpack_require__(261);

	var TreeComponent = function (_CreateComponent) {
	    _inherits(TreeComponent, _CreateComponent);

	    function TreeComponent(sName, sUrl) {
	        _classCallCheck(this, TreeComponent);

	        var _this = _possibleConstructorReturn(this, (TreeComponent.__proto__ || Object.getPrototypeOf(TreeComponent)).call(this, sName));

	        _this.sUrl = sUrl;
	        return _this;
	    }

	    _createClass(TreeComponent, [{
	        key: 'load',
	        value: function load() {
	            return (0, _http2.default)(this.sUrl).get();
	        }
	    }, {
	        key: '_triggerItem',
	        value: function _triggerItem(e) {

	            var nElem = e.currentTarget;

	            // Info : rivets.js convert class in lowercase
	            if (nElem.classList.contains('jsisfolder')) {

	                this._triggerFolder(nElem);
	            } else {
	                this._triggerFile(nElem);
	            }
	        }
	    }, {
	        key: '_triggerFolder',
	        value: function _triggerFolder(nElem) {

	            nElem.classList.toggle('jsIsOpen');

	            (0, _log2.default)('Open Folder ' + nElem.dataset.name);
	        }
	    }, {
	        key: '_triggerFile',
	        value: function _triggerFile(nElem) {

	            // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
	            PubSub.publish('OPEN_TAB', nElem.dataset);
	        }
	    }]);

	    return TreeComponent;
	}(_CreateComponent3.default);

	exports.default = TreeComponent;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
	 * License: MIT - http://mrgnrdrck.mit-license.org
	 *
	 * https://github.com/mroderick/PubSubJS
	 */

	(function (root, factory){
	    'use strict';

	    var PubSub = {};
	    root.PubSub = PubSub;

	    var define = root.define;

	    factory(PubSub);

	    // AMD support
	    if (typeof define === 'function' && define.amd){
	        define(function() { return PubSub; });

	        // CommonJS and Node.js module support
	    } else if (true){
	        if (module !== undefined && module.exports) {
	            exports = module.exports = PubSub; // Node.js specific `module.exports`
	        }
	        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
	        module.exports = exports = PubSub; // CommonJS
	    }

	}(( typeof window === 'object' && window ) || this, function (PubSub){
	    'use strict';

	    var messages = {},
	        lastUid = -1;

	    function hasKeys(obj){
	        var key;

	        for (key in obj){
	            if ( obj.hasOwnProperty(key) ){
	                return true;
	            }
	        }
	        return false;
	    }

	    /**
	     * Returns a function that throws the passed exception, for use as argument for setTimeout
	     * @alias throwException
	     * @function
	     * @param { Object } ex An Error object
	     */
	    function throwException( ex ){
	        return function reThrowException(){
	            throw ex;
	        };
	    }

	    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
	        try {
	            subscriber( message, data );
	        } catch( ex ){
	            setTimeout( throwException( ex ), 0);
	        }
	    }

	    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
	        subscriber( message, data );
	    }

	    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
	        var subscribers = messages[matchedMessage],
	            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
	            s;

	        if ( !messages.hasOwnProperty( matchedMessage ) ) {
	            return;
	        }

	        for (s in subscribers){
	            if ( subscribers.hasOwnProperty(s)){
	                callSubscriber( subscribers[s], originalMessage, data );
	            }
	        }
	    }

	    function createDeliveryFunction( message, data, immediateExceptions ){
	        return function deliverNamespaced(){
	            var topic = String( message ),
	                position = topic.lastIndexOf( '.' );

	            // deliver the message as it is now
	            deliverMessage(message, message, data, immediateExceptions);

	            // trim the hierarchy and deliver message to each level
	            while( position !== -1 ){
	                topic = topic.substr( 0, position );
	                position = topic.lastIndexOf('.');
	                deliverMessage( message, topic, data, immediateExceptions );
	            }
	        };
	    }

	    function messageHasSubscribers( message ){
	        var topic = String( message ),
	            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
	            position = topic.lastIndexOf( '.' );

	        while ( !found && position !== -1 ){
	            topic = topic.substr( 0, position );
	            position = topic.lastIndexOf( '.' );
	            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
	        }

	        return found;
	    }

	    function publish( message, data, sync, immediateExceptions ){
	        message = (typeof message === 'symbol') ? message.toString() : message;

	        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
	            hasSubscribers = messageHasSubscribers( message );

	        if ( !hasSubscribers ){
	            return false;
	        }

	        if ( sync === true ){
	            deliver();
	        } else {
	            setTimeout( deliver, 0 );
	        }
	        return true;
	    }

	    /**
	     * Publishes the message, passing the data to it's subscribers
	     * @function
	     * @alias publish
	     * @param { String } message The message to publish
	     * @param {} data The data to pass to subscribers
	     * @return { Boolean }
	     */
	    PubSub.publish = function( message, data ){
	        return publish( message, data, false, PubSub.immediateExceptions );
	    };

	    /**
	     * Publishes the message synchronously, passing the data to it's subscribers
	     * @function
	     * @alias publishSync
	     * @param { String } message The message to publish
	     * @param {} data The data to pass to subscribers
	     * @return { Boolean }
	     */
	    PubSub.publishSync = function( message, data ){
	        return publish( message, data, true, PubSub.immediateExceptions );
	    };

	    /**
	     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
	     * @function
	     * @alias subscribe
	     * @param { String } message The message to subscribe to
	     * @param { Function } func The function to call when a new message is published
	     * @return { String }
	     */
	    PubSub.subscribe = function( message, func ){
	        if ( typeof func !== 'function'){
	            return false;
	        }

	        message = (typeof message === 'symbol') ? message.toString() : message;

	        // message is not registered yet
	        if ( !messages.hasOwnProperty( message ) ){
	            messages[message] = {};
	        }

	        // forcing token as String, to allow for future expansions without breaking usage
	        // and allow for easy use as key names for the 'messages' object
	        var token = 'uid_' + String(++lastUid);
	        messages[message][token] = func;
	        
	        // return token for unsubscribing
	        return token;
	    };

	    /**
	     * Subscribes the passed function to the passed message once
	     * @function
	     * @alias subscribeOnce
	     * @param { String } message The message to subscribe to
	     * @param { Function } func The function to call when a new message is published
	     * @return { PubSub }
	     */
	    PubSub.subscribeOnce = function( message, func ){
	        var token = PubSub.subscribe( message, function(){
	            // before func apply, unsubscribe message
	            PubSub.unsubscribe( token );
	            func.apply( this, arguments );
	        });
	        return PubSub;
	    };

	    /**
	     * Clears all subscriptions
	     * @function
	     * @public
	     * @alias clearAllSubscriptions
	     */
	    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
	        messages = {};
	    };

	    /**
	     * Clear subscriptions by the topic
	     * @function
	     * @public
	     * @alias clearAllSubscriptions
	     * @return { int }
	     */
	    PubSub.clearSubscriptions = function clearSubscriptions(topic){
	        var m;
	        for (m in messages){
	            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
	                delete messages[m];
	            }
	        }
	    };

	    /** 
	       Count subscriptions by the topic
	     * @function
	     * @public
	     * @alias countSubscriptions
	     * @return { Array }
	    */
	    PubSub.countSubscriptions = function countSubscriptions(topic){
	        var m;
	        var count = 0;
	        for (m in messages){
	            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
	                count++;
	            }
	        }
	        return count;
	    };

	    
	    /** 
	       Gets subscriptions by the topic
	     * @function
	     * @public
	     * @alias getSubscriptions
	    */
	    PubSub.getSubscriptions = function getSubscriptions(topic){
	        var m;
	        var list = [];
	        for (m in messages){
	            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
	                list.push(m);
	            }
	        }
	        return list;
	    };

	    /**
	     * Removes subscriptions
	     *
	     * - When passed a token, removes a specific subscription.
	     *
		 * - When passed a function, removes all subscriptions for that function
	     *
		 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
	     * @function
	     * @public
	     * @alias subscribeOnce
	     * @param { String | Function } value A token, function or topic to unsubscribe from
	     * @example // Unsubscribing with a token
	     * var token = PubSub.subscribe('mytopic', myFunc);
	     * PubSub.unsubscribe(token);
	     * @example // Unsubscribing with a function
	     * PubSub.unsubscribe(myFunc);
	     * @example // Unsubscribing from a topic
	     * PubSub.unsubscribe('mytopic');
	     */
	    PubSub.unsubscribe = function(value){
	        var descendantTopicExists = function(topic) {
	                var m;
	                for ( m in messages ){
	                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){
	                        // a descendant of the topic exists:
	                        return true;
	                    }
	                }

	                return false;
	            },
	            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),
	            isToken    = !isTopic && typeof value === 'string',
	            isFunction = typeof value === 'function',
	            result = false,
	            m, message, t;

	        if (isTopic){
	            PubSub.clearSubscriptions(value);
	            return;
	        }

	        for ( m in messages ){
	            if ( messages.hasOwnProperty( m ) ){
	                message = messages[m];

	                if ( isToken && message[value] ){
	                    delete message[value];
	                    result = value;
	                    // tokens are unique, so we can just stop here
	                    break;
	                }

	                if (isFunction) {
	                    for ( t in message ){
	                        if (message.hasOwnProperty(t) && message[t] === value){
	                            delete message[t];
	                            result = true;
	                        }
	                    }
	                }
	            }
	        }

	        return result;
	    };
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(9),
	    func = convert('forEach', __webpack_require__(263));

	func.placeholder = __webpack_require__(12);
	module.exports = func;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(67),
	    baseEach = __webpack_require__(264),
	    castFunction = __webpack_require__(269),
	    isArray = __webpack_require__(53);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(265),
	    createBaseEach = __webpack_require__(268);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(266),
	    keys = __webpack_require__(88);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(267);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(105);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(17);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(9),
	    func = convert('sortBy', __webpack_require__(271));

	func.placeholder = __webpack_require__(12);
	module.exports = func;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(214),
	    baseOrderBy = __webpack_require__(272),
	    baseRest = __webpack_require__(277),
	    isIterateeCall = __webpack_require__(278);

	/**
	 * Creates an array of elements, sorted in ascending order by the results of
	 * running each element in a collection thru each iteratee. This method
	 * performs a stable sort, that is, it preserves the original sort order of
	 * equal elements. The iteratees are invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {...(Function|Function[])} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 34 }
	 * ];
	 *
	 * _.sortBy(users, [function(o) { return o.user; }]);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 *
	 * _.sortBy(users, ['user', 'age']);
	 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	 */
	var sortBy = baseRest(function(collection, iteratees) {
	  if (collection == null) {
	    return [];
	  }
	  var length = iteratees.length;
	  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	    iteratees = [];
	  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	    iteratees = [iteratees[0]];
	  }
	  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	});

	module.exports = sortBy;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(203),
	    baseIteratee = __webpack_require__(175),
	    baseMap = __webpack_require__(273),
	    baseSortBy = __webpack_require__(274),
	    baseUnary = __webpack_require__(99),
	    compareMultiple = __webpack_require__(275),
	    identity = __webpack_require__(17);

	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy(collection, iteratees, orders) {
	  var index = -1;
	  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

	  var result = baseMap(collection, function(value, key, collection) {
	    var criteria = arrayMap(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });

	  return baseSortBy(result, function(object, other) {
	    return compareMultiple(object, other, orders);
	  });
	}

	module.exports = baseOrderBy;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(264),
	    isArrayLike = __webpack_require__(105);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ }),
/* 274 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */
	function baseSortBy(array, comparer) {
	  var length = array.length;

	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}

	module.exports = baseSortBy;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	var compareAscending = __webpack_require__(276);

	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;

	  while (++index < length) {
	    var result = compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}

	module.exports = compareMultiple;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(82);

	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol(value);

	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol(other);

	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}

	module.exports = compareAscending;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(17),
	    overRest = __webpack_require__(216),
	    setToString = __webpack_require__(62);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(87),
	    isArrayLike = __webpack_require__(105),
	    isIndex = __webpack_require__(75),
	    isObject = __webpack_require__(29);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(280);

	var _store2 = _interopRequireDefault(_store);

	var _TabComponent = __webpack_require__(281);

	var _TabComponent2 = _interopRequireDefault(_TabComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _fp_concat = __webpack_require__(286);

	var PubSub = __webpack_require__(261);

	var tabCtrl = {

	    init: function init() {
	        var _this = this;

	        var bShowSavedTab = false;

	        var oTab = {
	            "tab": []
	        };

	        if (config.PREVENT_TAB) {

	            bShowSavedTab = confirm('Voulez-vous restaurez les onglets de la session précédemente ?');
	        }

	        if (bShowSavedTab && _store2.default.getTab('oTab') !== null) {

	            oTab.tab = _fp_concat(oTab.tab, _store2.default.getTab('oTab').tab);
	        } else {

	            oTab.tab.push({
	                name: "demo.js",
	                fullPath: "./content/demo.js",
	                active: true
	            });
	        }

	        this.Tab = new _TabComponent2.default('tab');

	        this.Tab.setData(oTab);

	        this.Tab.initTemplate();

	        // this.Tab.openEventOnLoad()
	        this.Tab.setEventOnNodeList('click', '.jsEventTabItem', 'openTab');
	        this.Tab.closeEventOnLoad();

	        var onTabPublish = function onTabPublish(msg, data) {

	            // Arrow fonction have not this, then this is tabCtrl
	            if (data !== undefined) _this.Tab.openTab(data);
	        };

	        PubSub.subscribe('OPEN_TAB', onTabPublish);
	    },

	    /**
	     * Open tab
	     * ========
	     * @param  {obj} oTab
	     */
	    // TODO : corriger, la function existe déjà dans la classe, je me répète
	    openTab: function openTab(oTab) {

	        this.Tab.openTab(oTab);
	    },
	    isTabOpen: function isTabOpen(sName) {

	        return this.Tab._getIndexActiveTab == this.Tab._getIndexTabByName(sName);
	    }
	};
	exports.default = tabCtrl;

/***/ }),
/* 280 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var store = {

	    setTab: function setTab(oTab) {

	        if ((typeof Storage === "undefined" ? "undefined" : _typeof(Storage)) !== undefined) {

	            localStorage.setItem("oTab", JSON.stringify(oTab));
	        }
	    },
	    getTab: function getTab() {

	        if ((typeof Storage === "undefined" ? "undefined" : _typeof(Storage)) !== undefined) {
	            return JSON.parse(localStorage.getItem("oTab"));
	        }
	    }
	};
	exports.default = store;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _store = __webpack_require__(280);

	var _store2 = _interopRequireDefault(_store);

	var _log = __webpack_require__(2);

	var _log2 = _interopRequireDefault(_log);

	var _CreateComponent2 = __webpack_require__(7);

	var _CreateComponent3 = _interopRequireDefault(_CreateComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Lodash: on import method only, using param is diferent on some method
	// @info: https://github.com/lodash/lodash/wiki/FP-Guide
	var _fp_cloneDeep = __webpack_require__(282);
	var _fp_findIndex = __webpack_require__(284);

	var PubSub = __webpack_require__(261);

	var TabClass = function (_CreateComponent) {
	    _inherits(TabClass, _CreateComponent);

	    function TabClass(sName) {
	        _classCallCheck(this, TabClass);

	        var _this = _possibleConstructorReturn(this, (TabClass.__proto__ || Object.getPrototypeOf(TabClass)).call(this, sName));

	        _this.sName = sName;
	        _this.sFileName = '';
	        _this.sFileFullPath = '';
	        return _this;
	    }

	    _createClass(TabClass, [{
	        key: 'closeEventOnLoad',
	        value: function closeEventOnLoad() {
	            var _this2 = this;

	            var nItemS = this.nComponent.querySelectorAll('.jsEventTabItemClose');

	            Array.from(nItemS).forEach(function (nItem) {

	                _this2._bindUnbindCloseEvent(nItem, 'add');
	            });
	        }

	        /**
	         * Open tab (calling or triggring)
	         * ===============================
	         * @param  {obj} data => mouse event or dataset
	         */

	    }, {
	        key: 'openTab',
	        value: function openTab(data) {
	            var _this3 = this;

	            if (data.target !== undefined) {
	                data = data.target.dataset;
	            }

	            if (this.sFileName == data.name) return false;

	            this.sFileName = data.name;
	            this.sFileFullPath = data.fullPath;

	            var self = this;

	            // If tab exist yet, switch active tab        
	            if (this._getIndexTabByName(this.sFileName) !== -1) {

	                this.oData.tab.forEach(function (item) {

	                    if (!item.active && item.name == self.sFileName) {

	                        item.active = true;
	                        self._showFile(_this3.sFileFullPath);

	                        (0, _log2.default)('ACTIVE tab ' + item.name);
	                    } else if (item.active && item.name != self.sFileName) {

	                        item.active = false;

	                        (0, _log2.default)('ACTIVE tab ' + item.name);
	                    }
	                });
	            }
	            // Tab doesn't exist : unactive all and add it
	            else {
	                    this._unactiveAllTab();

	                    this._addTabWithName();

	                    this._showFile(this.sFileFullPath);

	                    // TODO: bof...
	                    var nElemTab = this.nComponent.querySelector('.jsEventTabItem[data-name="' + this.sFileName + '"]');
	                    var nElemBtnClose = this.nComponent.querySelector('.jsEventTabItemClose[data-name="' + this.sFileName + '"]');

	                    if (nElemTab !== null && nElemBtnClose !== null) {

	                        this._bindUnbindOpenEvent(nElemTab, 'add');
	                        this._bindUnbindCloseEvent(nElemBtnClose, 'add');
	                    }
	                }
	        }

	        /**
	         * On close tab
	         * ============
	         * @param  {obj} e => event on click
	         */

	    }, {
	        key: '_closeTab',
	        value: function _closeTab(e) {

	            var iTabToClose = null;
	            var bTabWasActive = null;

	            var nElem = e.currentTarget;

	            var sFileName = nElem.dataset.name;

	            // We will perhaps remove an item, thus saving a clone to work with
	            var aClone = _fp_cloneDeep(this.oData.tab);

	            aClone.forEach(function (item, i, object) {

	                if (item.name == sFileName) {

	                    bTabWasActive = item.active;
	                    iTabToClose = i;

	                    (0, _log2.default)('DELETE tab ' + item.name);

	                    return; // Stop forEach
	                }
	            });

	            // If the tab was active, now activate the tab with its index
	            if (aClone.length > 0 && bTabWasActive && iTabToClose !== null) {

	                // If was the last open on right, close one before
	                if (aClone.length == iTabToClose + 1) {

	                    var indexToActive = iTabToClose - 1;

	                    if (aClone[indexToActive] !== undefined) {

	                        this._activeOtherTab(indexToActive);

	                        this._showFile(aClone[indexToActive].fullPath);
	                    }
	                }
	                // If not, show next
	                else {

	                        if (aClone[iTabToClose + 1] !== undefined) {

	                            this._activeOtherTab(iTabToClose + 1);

	                            this._showFile(aClone[iTabToClose + 1].fullPath);
	                        }
	                    }
	            }

	            // Close tab to close (only after all others things)
	            if (iTabToClose !== null) {

	                if (this.oData.tab[iTabToClose] !== undefined) {

	                    this._deleteTabByIndex(iTabToClose);

	                    this._bindUnbindOpenEvent(nElem.parentElement, 'remove');
	                    this._bindUnbindCloseEvent(nElem, 'remove');
	                }

	                // If after delete, no more tab, empty editor 
	                if (this.oData.tab.length === 0) {

	                    PubSub.publish('EMPTY_EDITOR', sFileName);
	                }
	            }
	        }
	    }, {
	        key: '_activeOtherTab',
	        value: function _activeOtherTab(i) {

	            this._unactiveAllTab();

	            this._activeTabByIndex(i);
	        }
	    }, {
	        key: '_bindUnbindOpenEvent',
	        value: function _bindUnbindOpenEvent(nItem, sType) {
	            var _this4 = this;

	            if (sType == 'add') {

	                nItem.addEventListener('click', function (e) {
	                    return _this4.openTab(e);
	                }, false);
	            } else {
	                nItem.removeEventListener('click', function (e) {
	                    return _this4.openTab(e);
	                }, false);
	            }
	        }
	    }, {
	        key: '_bindUnbindCloseEvent',
	        value: function _bindUnbindCloseEvent(nItem, sType) {
	            var _this5 = this;

	            if (sType == 'add') {

	                nItem.addEventListener('click', function (e) {
	                    return _this5._closeTab(e);
	                }, false);
	            } else {
	                nItem.removeEventListener('click', function (e) {
	                    return _this5._closeTab(e);
	                }, false);
	            }
	        }
	    }, {
	        key: '_updateStore',
	        value: function _updateStore() {

	            _store2.default.setTab(this.oData);
	            (0, _log2.default)('Save tab in localStorage');
	        }

	        // Tabs event tested
	        // -----------------

	    }, {
	        key: '_showFile',
	        value: function _showFile(sFileFullPath) {

	            PubSub.publish('DISPLAY_FILE', sFileFullPath);

	            (0, _log2.default)('PUBLISH display file event of ' + sFileFullPath);
	        }

	        // Array tabs method (tested)
	        // --------------------------

	    }, {
	        key: '_getIndexTabByName',
	        value: function _getIndexTabByName(sFileName) {

	            return _fp_findIndex(function (o) {
	                return o.name == sFileName;
	            })(this.oData.tab);
	        }
	    }, {
	        key: '_getIndexActiveTab',
	        value: function _getIndexActiveTab() {

	            return _fp_findIndex(function (o) {
	                return o.active == true;
	            })(this.oData.tab);
	        }
	    }, {
	        key: '_deleteTabByIndex',
	        value: function _deleteTabByIndex(i) {

	            this.oData.tab.splice(i, 1);
	            this._updateStore();
	        }
	    }, {
	        key: '_addTabWithName',
	        value: function _addTabWithName() {

	            var oNewTab = {
	                name: this.sFileName,
	                fullPath: this.sFileFullPath,
	                active: true
	            };

	            this.oData.tab.push(oNewTab);
	            this._updateStore();
	        }
	    }, {
	        key: '_unactiveAllTab',
	        value: function _unactiveAllTab() {

	            // TODO: voir utilise loadash
	            this.oData.tab.map(function (x) {
	                x.active = false;
	                return x;
	            });
	        }
	    }, {
	        key: '_activeTabByIndex',
	        value: function _activeTabByIndex(i) {

	            this.oData.tab[i].active = true;
	            this._updateStore();
	        }
	    }]);

	    return TabClass;
	}(_CreateComponent3.default);

	exports.default = TabClass;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(9),
	    func = convert('cloneDeep', __webpack_require__(283), __webpack_require__(237));

	func.placeholder = __webpack_require__(12);
	module.exports = func;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(107);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	module.exports = cloneDeep;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(9),
	    func = convert('findIndex', __webpack_require__(285));

	func.placeholder = __webpack_require__(12);
	module.exports = func;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(70),
	    baseIteratee = __webpack_require__(175),
	    toInteger = __webpack_require__(79);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(9),
	    func = convert('concat', __webpack_require__(287));

	func.placeholder = __webpack_require__(12);
	module.exports = func;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(148),
	    baseFlatten = __webpack_require__(214),
	    copyArray = __webpack_require__(56),
	    isArray = __webpack_require__(53);

	/**
	 * Creates a new array concatenating `array` with any additional arrays
	 * and/or values.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to concatenate.
	 * @param {...*} [values] The values to concatenate.
	 * @returns {Array} Returns the new concatenated array.
	 * @example
	 *
	 * var array = [1];
	 * var other = _.concat(array, 2, [3], [[4]]);
	 *
	 * console.log(other);
	 * // => [1, 2, 3, [4]]
	 *
	 * console.log(array);
	 * // => [1]
	 */
	function concat() {
	  var length = arguments.length;
	  if (!length) {
	    return [];
	  }
	  var args = Array(length - 1),
	      array = arguments[0],
	      index = length;

	  while (index--) {
	    args[index - 1] = arguments[index];
	  }
	  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
	}

	module.exports = concat;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _http = __webpack_require__(4);

	var _http2 = _interopRequireDefault(_http);

	var _EditorComponent = __webpack_require__(289);

	var _EditorComponent2 = _interopRequireDefault(_EditorComponent);

	var _tabCtrl = __webpack_require__(279);

	var _tabCtrl2 = _interopRequireDefault(_tabCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PubSub = __webpack_require__(261);

	var editorCtrl = function editorCtrl() {

	    __webpack_require__(292);

	    var Editor = new _EditorComponent2.default('editor');

	    Editor.initTemplate();

	    Editor.setMarkdownCtn('jsMarkdownContent');
	    Editor.initCodeCtn('jsCodeContent');

	    if (!_tabCtrl2.default.isTabOpen('demo.js')) {

	        _tabCtrl2.default.openTab({ name: 'demo.js', fullPath: './content/demo.js' });

	        (0, _http2.default)('./content/demo.js').get().then(function (data) {

	            Editor.initWrite(data).then(function () {

	                _tabCtrl2.default.openTab({ name: 'README.md', fullPath: './README-fr.md' });
	            });
	        });
	    }

	    PubSub.subscribe('DISPLAY_FILE', onDisplayFilePublish);

	    function onDisplayFilePublish(msg, data) {

	        // Display seulement si n'existe pas encore
	        if (data !== undefined) Editor.showOutput(data);
	    }

	    PubSub.subscribe('EMPTY_EDITOR', onDeleteFilePublish);

	    function onDeleteFilePublish(msg, data) {

	        if (data !== undefined) Editor.removeOutput();
	    }
	};
	exports.default = editorCtrl;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _http = __webpack_require__(4);

	var _http2 = _interopRequireDefault(_http);

	var _log = __webpack_require__(2);

	var _log2 = _interopRequireDefault(_log);

	var _CreateComponent2 = __webpack_require__(7);

	var _CreateComponent3 = _interopRequireDefault(_CreateComponent2);

	var _WriteClass = __webpack_require__(290);

	var _WriteClass2 = _interopRequireDefault(_WriteClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditorComponent = function (_CreateComponent) {
	    _inherits(EditorComponent, _CreateComponent);

	    function EditorComponent(sName) {
	        _classCallCheck(this, EditorComponent);

	        var _this = _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).call(this, sName));

	        _this.sName = sName;
	        _this.bIsTecnic = false;
	        _this.nCodeCtn = null;
	        _this.nMarkdownCtn = null;
	        return _this;
	    }

	    /**
	     * Init output (set elem and init class)
	     * =====================================
	     * @param  {string} sId => elem id
	     */


	    _createClass(EditorComponent, [{
	        key: 'initCodeCtn',
	        value: function initCodeCtn(sId) {

	            this.nCodeCtn = document.getElementById(sId);

	            this.WriteClass = new _WriteClass2.default(this.nCodeCtn, this.bIsTecnic);
	        }
	    }, {
	        key: 'setMarkdownCtn',
	        value: function setMarkdownCtn(sId) {

	            this.nMarkdownCtn = document.getElementById(sId);
	        }

	        /**
	         * Init writting
	         * =============
	         * @param  {string} sCode => code to display
	         * @return {Promise}
	         */

	    }, {
	        key: 'initWrite',
	        value: function initWrite(sCode) {

	            return this.WriteClass.init(sCode);
	        }

	        /**
	         * Show output
	         * ===========
	         * @param  {string} sFileName 
	         */

	    }, {
	        key: 'showOutput',
	        value: function showOutput(sFileName) {

	            this._getRawText(sFileName);
	        }
	    }, {
	        key: 'removeOutput',
	        value: function removeOutput() {

	            var self = this;

	            this.WriteClass.stop();

	            setTimeout(function () {
	                self.nCodeCtn.innerHTML = '';
	                self.nMarkdownCtn.innerHTML = '';
	                self.nMarkdownCtn.classList.add('jsIsHidden');
	            }, 100);
	        }

	        /**
	         * Get raw text (async call)
	         * =========================
	         * @param  {string} sPathFile 
	         */

	    }, {
	        key: '_getRawText',
	        value: function _getRawText(sPathFile) {
	            var _this2 = this;

	            (0, _log2.default)('GET content of ./' + sPathFile);

	            var sLanguage = this._getLanguage(sPathFile);

	            (0, _http2.default)('./' + sPathFile).get().then(function (data) {

	                _this2._displayOutput(data, sLanguage);
	            }).catch(function (error) {

	                _this2._displayOutput('404 - Page not found', 'html');
	                (0, _log2.default)('Can\'t get ./' + sPathFile, true);
	            });
	        }

	        /**
	         * Display/print code
	         * ==================
	         * @param  {string} sOutput   
	         * @param  {string} sLanguage => language-{js/css/html}
	         */

	    }, {
	        key: '_displayOutput',
	        value: function _displayOutput(sOutput, sLanguage) {

	            // Stop writting
	            if (this.WriteClass.isWritting) {
	                this.WriteClass.stop();
	            }

	            // If convert HTML to string
	            if (sLanguage == 'language-html') {
	                sOutput = this._htmlEntities(sOutput);
	            }

	            // If mardwon, convert to HTML
	            if (sLanguage == 'markdown') {
	                sOutput = Markdown.toHTML(sOutput);
	                this._displayMarkdown(sOutput);
	            } else {
	                this._displayCode(sOutput, sLanguage);
	            }
	        }
	    }, {
	        key: '_displayMarkdown',
	        value: function _displayMarkdown(sOutput) {

	            // Print code
	            this.nMarkdownCtn.innerHTML = sOutput;

	            this.nMarkdownCtn.classList.remove('jsIsHidden');
	            this.nCodeCtn.parentNode.classList.add('jsIsHidden');

	            (0, _log2.default)('SHOW markdown file and highlight then');
	        }
	    }, {
	        key: '_displayCode',
	        value: function _displayCode(sOutput, sLanguage) {

	            // Print code
	            this.nCodeCtn.innerHTML = sOutput;

	            this.nCodeCtn.parentNode.classList.remove('jsIsHidden');
	            this.nMarkdownCtn.classList.add('jsIsHidden');

	            // Switch class for Prism
	            this.nCodeCtn.className = '';
	            this.nCodeCtn.classList.add(sLanguage);

	            // Remove spellcheck
	            this._disableSpellCheck(this.nCodeCtn);

	            if (typeof Prism != 'undefined' && sLanguage != 'markdown-body') {
	                Prism.highlightAll();
	            }

	            (0, _log2.default)('SHOW code file and highlight then');
	        }

	        /**
	         * Get current language
	         * ====================
	         * @param  {string} sPathFile 
	         * @return {string} => class name to add for Prism
	         */

	    }, {
	        key: '_getLanguage',
	        value: function _getLanguage(sPathFile) {

	            if (sPathFile.indexOf('.md') !== -1) {
	                return 'markdown';
	            } else if (sPathFile.indexOf('.html') !== -1) {
	                return 'language-html';
	            } else if (sPathFile.indexOf('.css') !== -1) {
	                return 'language-css';
	            } else {
	                return 'language-js';
	            }
	        }

	        /**
	         * HTML entities
	         * =============
	         * @param  {string} html markup
	         * @return {string} => html with escaped <, > and &
	         */

	    }, {
	        key: '_htmlEntities',
	        value: function _htmlEntities(html) {

	            return String(html).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	        }
	    }, {
	        key: '_disableSpellCheck',
	        value: function _disableSpellCheck(nElem) {

	            nElem.spellcheck = false;
	            nElem.focus();
	            nElem.blur();
	        }
	    }]);

	    return EditorComponent;
	}(_CreateComponent3.default);

	exports.default = EditorComponent;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _log = __webpack_require__(2);

	var _log2 = _interopRequireDefault(_log);

	var _writeChar = __webpack_require__(291);

	var _writeChar2 = _interopRequireDefault(_writeChar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WriteClass = function () {
	    function WriteClass(nOutput, bSlow) {
	        _classCallCheck(this, WriteClass);

	        this.nOutput = nOutput;
	        this.iSpeed = bSlow ? 16 : 1;
	        this.bPaused = false;
	        this.bIsWritting = false;
	    }

	    _createClass(WriteClass, [{
	        key: 'init',
	        value: function init(sText) {
	            var _this = this;

	            return new Promise(function (resolve, reject) {

	                _this._startWritting(resolve, sText, _this.nOutput, _this.iSpeed);
	            });
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.bPaused = true;
	        }
	    }, {
	        key: 'isWritting',
	        value: function isWritting() {
	            return this.bIsWritting;
	        }
	    }, {
	        key: '_startWritting',
	        value: function _startWritting(resolve, sText, nOutput, iSpeed) {

	            var self = this;

	            (0, _log2.default)('Start writting text ');

	            this._runWrite(resolve, sText, 0, 1);
	        }
	    }, {
	        key: '_runWrite',
	        value: function _runWrite(resolve, sNewText, index, charsPerInterval) {

	            var self = this;

	            // Write a character or multiple characters to the buffer.
	            var chars = sNewText.slice(index, index + charsPerInterval);

	            index += charsPerInterval;

	            _writeChar2.default.simple(this.nOutput, chars);

	            Prism.highlightAll();

	            var endOfSentence = /[\.\?\!]\s$/;
	            var comma = /\D[\,]\s$/;
	            var endOfBlock = /[^\/]\n\n$/;
	            var endOfLine = /[^\/]\n$/;
	            var openMustache = /[\{!]\s$/;

	            // Schedule another write.
	            if (!this.bPaused && index < sNewText.length) {

	                this.bIsWritting = true;

	                var thisInterval = this.iSpeed;
	                var thisSlice = sNewText.slice(index - 2, index + 1);
	                // let thisWords = sNewText.slice(index - 10, index + 20);

	                // if( comma.test( thisSlice ) ) thisInterval = interval * 30

	                if (endOfBlock.test(thisSlice)) thisInterval = this.iSpeed * 50;

	                if (endOfLine.test(thisSlice) && !openMustache.test(thisSlice)) {

	                    thisInterval = this.iSpeed * 50;

	                    // Ensure we stay scrolled to the bottom.
	                    this.nOutput.scrollTop = this.nOutput.scrollHeight;
	                }

	                // if( endOfSentence.test( thisSlice ) ) thisInterval = this.iSpeed * 70

	                // Wait specific delay
	                setTimeout(function () {

	                    self._runWrite(resolve, sNewText, index, charsPerInterval);
	                }, thisInterval);
	            } else {
	                this.bIsWritting = false;

	                (0, _log2.default)('Writting end');

	                return resolve();
	            }
	        }
	    }]);

	    return WriteClass;
	}();

	exports.default = WriteClass;

/***/ }),
/* 291 */
/***/ (function(module, exports) {

	'use strict';

	var styleBuffer = '';
	var fullTextStorage = {};

	module.exports = function writeChar(el, char, style) {
	  // Grab text. We buffer it in storage so we don't have to read from the DOM every iteration.
	  var fullText = fullTextStorage[el.id];
	  if (!fullText) fullText = fullTextStorage[el.id] = el.innerHTML;

	  fullText = module.exports.handleChar(fullText, char);
	  // But we still write to the DOM every iteration, which can be pretty slow.
	  el.innerHTML = fullTextStorage[el.id] = fullText;

	  // Buffer writes to the <style> element so we don't have to paint quite so much.
	  styleBuffer += char;
	  if (char === ';') {
	    style.textContent += styleBuffer;
	    styleBuffer = '';
	  }
	};

	module.exports.simple = function writeSimpleChar(el, char) {
	  el.innerHTML += char;
	};

	var openComment = false;
	var commentRegex = /(\/\*(?:[^](?!\/\*))*\*)$/;
	var keyRegex = /([a-zA-Z- ^\n]*)$/;
	var valueRegex = /([^:]*)$/;
	var selectorRegex = /(.*)$/;
	var pxRegex = /\dp/;
	var pxRegex2 = /p$/;

	module.exports.handleChar = function handleChar(fullText, char) {
	  if (openComment && char !== '/') {
	    // Short-circuit during a comment so we don't highlight inside it.
	    fullText += char;
	  } else if (char === '/' && openComment === false) {
	    openComment = true;
	    fullText += char;
	  } else if (char === '/' && fullText.slice(-1) === '*' && openComment === true) {
	    openComment = false;
	    // Unfortunately we can't just open a span and close it, because the browser will helpfully
	    // 'fix' it for us, and we'll end up with a single-character span and an empty closing tag.
	    fullText = fullText.replace(commentRegex, '<span class="comment">$1/</span>');
	  } else if (char === ':') {
	    fullText = fullText.replace(keyRegex, '<span class="key">$1</span>:');
	  } else if (char === ';') {
	    fullText = fullText.replace(valueRegex, '<span class="value">$1</span>;');
	  } else if (char === '{') {
	    fullText = fullText.replace(selectorRegex, '<span class="selector">$1</span>{');
	  } else if (char === 'x' && pxRegex.test(fullText.slice(-2))) {
	    fullText = fullText.replace(pxRegex2, '<span class="value px">px</span>');
	  } else {
	    fullText += char;
	  }
	  return fullText;
	};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(293);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(250)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../css-loader/index.js!../postcss-loader/index.js!./github-markdown.css", function() {
				var newContent = require("!!../css-loader/index.js!../postcss-loader/index.js!./github-markdown.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(249)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\nprogress,sub,sup {\n  vertical-align: baseline;\n}\n\nbutton,hr,input {\n  overflow: visible;\n}\n\n[type=checkbox],[type=radio],legend {\n  box-sizing: border-box;\n  padding: 0;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {\n  display: block;\n}\n\naudio,canvas,progress,video {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],template {\n  display: none;\n}\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na:active,a:hover {\n  outline-width: 0;\n}\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\nb,strong {\n  font-weight: bolder;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0;\n}\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\ncode,kbd,pre,samp {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\nbutton,input,optgroup,select,textarea {\n  font: inherit;\n  margin: 0;\n}\n\noptgroup {\n  font-weight: 700;\n}\n\nbutton,select {\n  text-transform: none;\n}\n\n[type=reset],[type=submit],button,html [type=button] {\n  -webkit-appearance: button;\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n  outline: ButtonText dotted 1px;\n}\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: .35em .625em .75em;\n}\n\nlegend {\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  white-space: normal;\n}\n\ntextarea {\n  overflow: auto;\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: .54;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\n@font-face {\n  font-family: octicons-link;\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAZwABAAAAAACFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAAGaAAAAAgAAAAIAAAAAUdTVUIAAAZcAAAACgAAAAoAAQAAT1MvMgAAAyQAAABJAAAAYFYEU3RjbWFwAAADcAAAAEUAAACAAJThvmN2dCAAAATkAAAABAAAAAQAAAAAZnBnbQAAA7gAAACyAAABCUM+8IhnYXNwAAAGTAAAABAAAAAQABoAI2dseWYAAAFsAAABPAAAAZwcEq9taGVhZAAAAsgAAAA0AAAANgh4a91oaGVhAAADCAAAABoAAAAkCA8DRGhtdHgAAAL8AAAADAAAAAwGAACfbG9jYQAAAsAAAAAIAAAACABiATBtYXhwAAACqAAAABgAAAAgAA8ASm5hbWUAAAToAAABQgAAAlXu73sOcG9zdAAABiwAAAAeAAAAME3QpOBwcmVwAAAEbAAAAHYAAAB/aFGpk3jaTY6xa8JAGMW/O62BDi0tJLYQincXEypYIiGJjSgHniQ6umTsUEyLm5BV6NDBP8Tpts6F0v+k/0an2i+itHDw3v2+9+DBKTzsJNnWJNTgHEy4BgG3EMI9DCEDOGEXzDADU5hBKMIgNPZqoD3SilVaXZCER3/I7AtxEJLtzzuZfI+VVkprxTlXShWKb3TBecG11rwoNlmmn1P2WYcJczl32etSpKnziC7lQyWe1smVPy/Lt7Kc+0vWY/gAgIIEqAN9we0pwKXreiMasxvabDQMM4riO+qxM2ogwDGOZTXxwxDiycQIcoYFBLj5K3EIaSctAq2kTYiw+ymhce7vwM9jSqO8JyVd5RH9gyTt2+J/yUmYlIR0s04n6+7Vm1ozezUeLEaUjhaDSuXHwVRgvLJn1tQ7xiuVv/ocTRF42mNgZGBgYGbwZOBiAAFGJBIMAAizAFoAAABiAGIAznjaY2BkYGAA4in8zwXi+W2+MjCzMIDApSwvXzC97Z4Ig8N/BxYGZgcgl52BCSQKAA3jCV8CAABfAAAAAAQAAEB42mNgZGBg4f3vACQZQABIMjKgAmYAKEgBXgAAeNpjYGY6wTiBgZWBg2kmUxoDA4MPhGZMYzBi1AHygVLYQUCaawqDA4PChxhmh/8ODDEsvAwHgMKMIDnGL0x7gJQCAwMAJd4MFwAAAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAGVYYDT+AEjAwuDFpBmA9KMDEwMCh9i/v8H8sH0/4dQc1iAmAkALaUKLgAAAHjaTY9LDsIgEIbtgqHUPpDi3gPoBVyRTmTddOmqTXThEXqrob2gQ1FjwpDvfwCBdmdXC5AVKFu3e5MfNFJ29KTQT48Ob9/lqYwOGZxeUelN2U2R6+cArgtCJpauW7UQBqnFkUsjAY/kOU1cP+DAgvxwn1chZDwUbd6CFimGXwzwF6tPbFIcjEl+vvmM/byA48e6tWrKArm4ZJlCbdsrxksL1AwWn/yBSJKpYbq8AXaaTb8AAHja28jAwOC00ZrBeQNDQOWO//sdBBgYGRiYWYAEELEwMTE4uzo5Zzo5b2BxdnFOcALxNjA6b2ByTswC8jYwg0VlNuoCTWAMqNzMzsoK1rEhNqByEyerg5PMJlYuVueETKcd/89uBpnpvIEVomeHLoMsAAe1Id4AAAAAAAB42oWQT07CQBTGv0JBhagk7HQzKxca2sJCE1hDt4QF+9JOS0nbaaYDCQfwCJ7Au3AHj+LO13FMmm6cl7785vven0kBjHCBhfpYuNa5Ph1c0e2Xu3jEvWG7UdPDLZ4N92nOm+EBXuAbHmIMSRMs+4aUEd4Nd3CHD8NdvOLTsA2GL8M9PODbcL+hD7C1xoaHeLJSEao0FEW14ckxC+TU8TxvsY6X0eLPmRhry2WVioLpkrbp84LLQPGI7c6sOiUzpWIWS5GzlSgUzzLBSikOPFTOXqly7rqx0Z1Q5BAIoZBSFihQYQOOBEdkCOgXTOHA07HAGjGWiIjaPZNW13/+lm6S9FT7rLHFJ6fQbkATOG1j2OFMucKJJsxIVfQORl+9Jyda6Sl1dUYhSCm1dyClfoeDve4qMYdLEbfqHf3O/AdDumsjAAB42mNgYoAAZQYjBmyAGYQZmdhL8zLdDEydARfoAqIAAAABAAMABwAKABMAB///AA8AAQAAAAAAAAAAAAAAAAABAAAAAA==) format('woff');\n}\n\n.markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n.markdown-body .pl-c {\n  color: #6a737d;\n}\n\n.markdown-body .pl-c1, .markdown-body .pl-s .pl-v {\n  color: #005cc5;\n}\n\n.markdown-body .pl-e, .markdown-body .pl-en {\n  color: #6f42c1;\n}\n\n.markdown-body .pl-smi, .markdown-body .pl-s .pl-s1 {\n  color: #24292e;\n}\n\n.markdown-body .pl-ent {\n  color: #22863a;\n}\n\n.markdown-body .pl-k {\n  color: #d73a49;\n}\n\n.markdown-body .pl-s, .markdown-body .pl-pds, .markdown-body .pl-s .pl-pse .pl-s1, .markdown-body .pl-sr, .markdown-body .pl-sr .pl-cce, .markdown-body .pl-sr .pl-sre, .markdown-body .pl-sr .pl-sra {\n  color: #032f62;\n}\n\n.markdown-body .pl-v, .markdown-body .pl-smw {\n  color: #e36209;\n}\n\n.markdown-body .pl-bu {\n  color: #b31d28;\n}\n\n.markdown-body .pl-ii {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n\n.markdown-body .pl-c2 {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n\n.markdown-body .pl-c2::before {\n  content: \"^M\";\n}\n\n.markdown-body .pl-sr .pl-cce {\n  font-weight: bold;\n  color: #22863a;\n}\n\n.markdown-body .pl-ml {\n  color: #735c0f;\n}\n\n.markdown-body .pl-mh, .markdown-body .pl-mh .pl-en, .markdown-body .pl-ms {\n  font-weight: bold;\n  color: #005cc5;\n}\n\n.markdown-body .pl-mi {\n  font-style: italic;\n  color: #24292e;\n}\n\n.markdown-body .pl-mb {\n  font-weight: bold;\n  color: #24292e;\n}\n\n.markdown-body .pl-md {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n\n.markdown-body .pl-mi1 {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n\n.markdown-body .pl-mc {\n  color: #e36209;\n  background-color: #ffebda;\n}\n\n.markdown-body .pl-mi2 {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n\n.markdown-body .pl-mdr {\n  font-weight: bold;\n  color: #6f42c1;\n}\n\n.markdown-body .pl-ba {\n  color: #586069;\n}\n\n.markdown-body .pl-sg {\n  color: #959da5;\n}\n\n.markdown-body .pl-corl {\n  text-decoration: underline;\n  color: #032f62;\n}\n\n.markdown-body .octicon {\n  display: inline-block;\n  vertical-align: text-top;\n  fill: currentColor;\n}\n\n.markdown-body a {\n  background-color: transparent;\n}\n\n.markdown-body a:active, .markdown-body a:hover {\n  outline-width: 0;\n}\n\n.markdown-body strong {\n  font-weight: inherit;\n}\n\n.markdown-body strong {\n  font-weight: bolder;\n}\n\n.markdown-body h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n.markdown-body img {\n  border-style: none;\n}\n\n.markdown-body code, .markdown-body kbd, .markdown-body pre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n.markdown-body hr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\n.markdown-body input {\n  font: inherit;\n  margin: 0;\n}\n\n.markdown-body input {\n  overflow: visible;\n}\n\n.markdown-body [type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.markdown-body * {\n  box-sizing: border-box;\n}\n\n.markdown-body input {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.markdown-body a {\n  color: #0366d6;\n  text-decoration: none;\n}\n\n.markdown-body a:hover {\n  text-decoration: underline;\n}\n\n.markdown-body strong {\n  font-weight: 600;\n}\n\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n\n.markdown-body hr::before {\n  display: table;\n  content: \"\";\n}\n\n.markdown-body hr::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n\n.markdown-body table {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.markdown-body td, .markdown-body th {\n  padding: 0;\n}\n\n.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body h1 {\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.markdown-body h2 {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.markdown-body h3 {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.markdown-body h4 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.markdown-body h5 {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.markdown-body h6 {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.markdown-body p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.markdown-body blockquote {\n  margin: 0;\n}\n\n.markdown-body ul, .markdown-body ol {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body ol ol, .markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n.markdown-body ul ul ol, .markdown-body ul ol ol, .markdown-body ol ul ol, .markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n  margin-left: 0;\n}\n\n.markdown-body code {\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 12px;\n}\n\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 12px;\n}\n\n.markdown-body .octicon {\n  vertical-align: text-bottom;\n}\n\n.markdown-body .pl-0 {\n  padding-left: 0 !important;\n}\n\n.markdown-body .pl-1 {\n  padding-left: 4px !important;\n}\n\n.markdown-body .pl-2 {\n  padding-left: 8px !important;\n}\n\n.markdown-body .pl-3 {\n  padding-left: 16px !important;\n}\n\n.markdown-body .pl-4 {\n  padding-left: 24px !important;\n}\n\n.markdown-body .pl-5 {\n  padding-left: 32px !important;\n}\n\n.markdown-body .pl-6 {\n  padding-left: 40px !important;\n}\n\n.markdown-body::before {\n  display: table;\n  content: \"\";\n}\n\n.markdown-body::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n\n.markdown-body>*:first-child {\n  margin-top: 0 !important;\n}\n\n.markdown-body>*:last-child {\n  margin-bottom: 0 !important;\n}\n\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.markdown-body .anchor {\n  float: left;\n  padding-right: 4px;\n  margin-left: -20px;\n  line-height: 1;\n}\n\n.markdown-body .anchor:focus {\n  outline: none;\n}\n\n.markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.markdown-body hr {\n  height: 0.25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n\n.markdown-body blockquote {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: 0.25em solid #dfe2e5;\n}\n\n.markdown-body blockquote>:first-child {\n  margin-top: 0;\n}\n\n.markdown-body blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font-size: 11px;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: solid 1px #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n}\n\n.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n\n.markdown-body h1 .octicon-link, .markdown-body h2 .octicon-link, .markdown-body h3 .octicon-link, .markdown-body h4 .octicon-link, .markdown-body h5 .octicon-link, .markdown-body h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor, .markdown-body h2:hover .anchor, .markdown-body h3:hover .anchor, .markdown-body h4:hover .anchor, .markdown-body h5:hover .anchor, .markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link, .markdown-body h2:hover .anchor .octicon-link, .markdown-body h3:hover .anchor .octicon-link, .markdown-body h4:hover .anchor .octicon-link, .markdown-body h5:hover .anchor .octicon-link, .markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\n.markdown-body h1 {\n  padding-bottom: 0.3em;\n  font-size: 2em;\n  border-bottom: 1px solid #eaecef;\n}\n\n.markdown-body h2 {\n  padding-bottom: 0.3em;\n  font-size: 1.5em;\n  border-bottom: 1px solid #eaecef;\n}\n\n.markdown-body h3 {\n  font-size: 1.25em;\n}\n\n.markdown-body h4 {\n  font-size: 1em;\n}\n\n.markdown-body h5 {\n  font-size: 0.875em;\n}\n\n.markdown-body h6 {\n  font-size: 0.85em;\n  color: #6a737d;\n}\n\n.markdown-body ul, .markdown-body ol {\n  padding-left: 2em;\n}\n\n.markdown-body ul ul, .markdown-body ul ol, .markdown-body ol ol, .markdown-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body li {\n  word-wrap: break-all;\n}\n\n.markdown-body li>p {\n  margin-top: 16px;\n}\n\n.markdown-body li+li {\n  margin-top: 0.25em;\n}\n\n.markdown-body dl {\n  padding: 0;\n}\n\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.markdown-body table th {\n  font-weight: 600;\n}\n\n.markdown-body table th, .markdown-body table td {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.markdown-body img {\n  max-width: 100%;\n  box-sizing: content-box;\n  background-color: #fff;\n}\n\n.markdown-body img[align=right] {\n  padding-left: 20px;\n}\n\n.markdown-body img[align=left] {\n  padding-right: 20px;\n}\n\n.markdown-body code {\n  padding: 0.2em 0.4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,0.05);\n  border-radius: 3px;\n}\n\n.markdown-body pre {\n  word-wrap: normal;\n}\n\n.markdown-body pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.markdown-body .highlight pre, .markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n\n.markdown-body pre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.markdown-body .full-commit .btn-outline:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: solid 1px #d1d5da;\n  border-bottom-color: #c6cbd1;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #c6cbd1;\n}\n\n.markdown-body :checked+.radio-label {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n\n.markdown-body .task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n  margin: 0 0.2em 0.25em -1.6em;\n  vertical-align: middle;\n}\n\n.markdown-body hr {\n  border-bottom-color: #eee;\n}\n", ""]);

	// exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _GutterComponent = __webpack_require__(295);

	var _GutterComponent2 = _interopRequireDefault(_GutterComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gutterCtrl = function gutterCtrl() {

	    // Define how many line we want
	    var iQtyLine = 251;

	    // Generate array
	    var aLine = Array.apply(null, { length: iQtyLine }).map(Number.call, Number);

	    // Prepare index of array of line
	    var _iLine = 0;

	    var oLine = {
	        "line": aLine,
	        "iLine": function iLine() {
	            return _iLine++;
	        }
	    };

	    var Gutter = new _GutterComponent2.default('gutter');

	    Gutter.setData(oLine);

	    Gutter.initTemplate();
	};
	exports.default = gutterCtrl;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CreateComponent2 = __webpack_require__(7);

	var _CreateComponent3 = _interopRequireDefault(_CreateComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GutterClass = function (_CreateComponent) {
	    _inherits(GutterClass, _CreateComponent);

	    function GutterClass(sName) {
	        _classCallCheck(this, GutterClass);

	        var _this = _possibleConstructorReturn(this, (GutterClass.__proto__ || Object.getPrototypeOf(GutterClass)).call(this, sName));

	        _this.sName = sName;
	        return _this;
	    }

	    return GutterClass;
	}(_CreateComponent3.default);

	exports.default = GutterClass;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["config"] = __webpack_require__(297);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 297 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    ENV: 'developement',
	    PREVENT_TAB: false,
	    LINKEDIN_PERFIL_URL: 'https://www.linkedin.com/in/laurent-perroteau-15a6ab68',
	    TITLE_TAG: '<title>Laurent Perroteau | Développeur Front-End</title>',
	    DESCRIPTION_TAG: '<meta name="description" content="Développeur Web depuis 5 ans, spécialisé Front-End depuis 4 ans, référent technique Front-End depuis 2 ans." />'
	};

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Prims"] = __webpack_require__(299);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 299 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript&plugins=highlight-keywords */
	var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	    Prism = function () {
	  var e = /\blang(?:uage)?-(\w+)\b/i,
	      t = 0,
	      n = _self.Prism = { util: { encode: function encode(e) {
	        return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
	      }, type: function type(e) {
	        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
	      }, objId: function objId(e) {
	        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
	      }, clone: function clone(e) {
	        var t = n.util.type(e);switch (t) {case "Object":
	            var a = {};for (var r in e) {
	              e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
	            }return a;case "Array":
	            return e.map && e.map(function (e) {
	              return n.util.clone(e);
	            });}return e;
	      } }, languages: { extend: function extend(e, t) {
	        var a = n.util.clone(n.languages[e]);for (var r in t) {
	          a[r] = t[r];
	        }return a;
	      }, insertBefore: function insertBefore(e, t, a, r) {
	        r = r || n.languages;var l = r[e];if (2 == arguments.length) {
	          a = arguments[1];for (var i in a) {
	            a.hasOwnProperty(i) && (l[i] = a[i]);
	          }return l;
	        }var o = {};for (var s in l) {
	          if (l.hasOwnProperty(s)) {
	            if (s == t) for (var i in a) {
	              a.hasOwnProperty(i) && (o[i] = a[i]);
	            }o[s] = l[s];
	          }
	        }return n.languages.DFS(n.languages, function (t, n) {
	          n === r[e] && t != e && (this[t] = o);
	        }), r[e] = o;
	      }, DFS: function DFS(e, t, a, r) {
	        r = r || {};for (var l in e) {
	          e.hasOwnProperty(l) && (t.call(e, l, e[l], a || l), "Object" !== n.util.type(e[l]) || r[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || r[n.util.objId(e[l])] || (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, r)) : (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, r)));
	        }
	      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
	      var a = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var r, l = a.elements || document.querySelectorAll(a.selector), i = 0; r = l[i++];) {
	        n.highlightElement(r, e === !0, a.callback);
	      }
	    }, highlightElement: function highlightElement(t, a, r) {
	      for (var l, i, o = t; o && !e.test(o.className);) {
	        o = o.parentNode;
	      }o && (l = (o.className.match(e) || [, ""])[1], i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);var s = t.textContent,
	          u = { element: t, language: l, grammar: i, code: s };if (!s || !i) return n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), a && _self.Worker) {
	        var c = new Worker(n.filename);c.onmessage = function (e) {
	          u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
	        }, c.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
	      } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
	    }, highlight: function highlight(e, t, r) {
	      var l = n.tokenize(e, t);return a.stringify(n.util.encode(l), r);
	    }, tokenize: function tokenize(e, t) {
	      var a = n.Token,
	          r = [e],
	          l = t.rest;if (l) {
	        for (var i in l) {
	          t[i] = l[i];
	        }delete t.rest;
	      }e: for (var i in t) {
	        if (t.hasOwnProperty(i) && t[i]) {
	          var o = t[i];o = "Array" === n.util.type(o) ? o : [o];for (var s = 0; s < o.length; ++s) {
	            var u = o[s],
	                c = u.inside,
	                g = !!u.lookbehind,
	                f = 0,
	                h = u.alias;u = u.pattern || u;for (var p = 0; p < r.length; p++) {
	              var d = r[p];if (r.length > e.length) break e;if (!(d instanceof a)) {
	                u.lastIndex = 0;var m = u.exec(d);if (m) {
	                  g && (f = m[1].length);var y = m.index - 1 + f,
	                      m = m[0].slice(f),
	                      v = m.length,
	                      b = y + v,
	                      k = d.slice(0, y + 1),
	                      w = d.slice(b + 1),
	                      _ = [p, 1];k && _.push(k);var P = new a(i, c ? n.tokenize(m, c) : m, h);_.push(P), w && _.push(w), Array.prototype.splice.apply(r, _);
	                }
	              }
	            }
	          }
	        }
	      }return r;
	    }, hooks: { all: {}, add: function add(e, t) {
	        var a = n.hooks.all;a[e] = a[e] || [], a[e].push(t);
	      }, run: function run(e, t) {
	        var a = n.hooks.all[e];if (a && a.length) for (var r, l = 0; r = a[l++];) {
	          r(t);
	        }
	      } } },
	      a = n.Token = function (e, t, n) {
	    this.type = e, this.content = t, this.alias = n;
	  };if (a.stringify = function (e, t, r) {
	    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
	      return a.stringify(n, t, e);
	    }).join("");var l = { type: e.type, content: a.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r };if ("comment" == l.type && (l.attributes.spellcheck = "true"), e.alias) {
	      var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
	    }n.hooks.run("wrap", l);var o = "";for (var s in l.attributes) {
	      o += (o ? " " : "") + s + '="' + (l.attributes[s] || "") + '"';
	    }return "<" + l.tag + ' class="' + l.classes.join(" ") + '" ' + o + ">" + l.content + "</" + l.tag + ">";
	  }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
	    var t = JSON.parse(e.data),
	        a = t.language,
	        r = t.code,
	        l = t.immediateClose;_self.postMessage(n.highlight(r, n.languages[a], a)), l && _self.close();
	  }, !1), _self.Prism) : _self.Prism;var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), _self.Prism;
	}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
	Prism.languages.markup = { comment: /<!--[\w\W]*?-->/, prolog: /<\?[\w\W]+?\?>/, doctype: /<!DOCTYPE[\w\W]+?>/, cdata: /<!\[CDATA\[[\w\W]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.hooks.add("wrap", function (a) {
	  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
	}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
	Prism.languages.css = { comment: /\/\*[\w\W]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
	Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
	// Modif : add more keywork
	Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(module|exports|document|classList|innerHTML|lengthas|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0 } }), Prism.languages.insertBefore("javascript", "class-name", { "template-string": { pattern: /`(?:\\\\|\\?[^\\])*?`/, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
	!function () {
	  "undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("wrap", function (e) {
	    "keyword" === e.type && e.classes.push("keyword-" + e.content);
	  });
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Markdown"] = __webpack_require__(301);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// Released under MIT license
	// Copyright (c) 2009-2010 Dominic Baggott
	// Copyright (c) 2009-2010 Ash Berlin
	// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

	/*jshint browser:true, devel:true */

	(function( expose ) {

	/**
	 *  class Markdown
	 *
	 *  Markdown processing in Javascript done right. We have very particular views
	 *  on what constitutes 'right' which include:
	 *
	 *  - produces well-formed HTML (this means that em and strong nesting is
	 *    important)
	 *
	 *  - has an intermediate representation to allow processing of parsed data (We
	 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
	 *
	 *  - is easily extensible to add new dialects without having to rewrite the
	 *    entire parsing mechanics
	 *
	 *  - has a good test suite
	 *
	 *  This implementation fulfills all of these (except that the test suite could
	 *  do with expanding to automatically run all the fixtures from other Markdown
	 *  implementations.)
	 *
	 *  ##### Intermediate Representation
	 *
	 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
	 *
	 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
	 **/
	var Markdown = expose.Markdown = function(dialect) {
	  switch (typeof dialect) {
	    case "undefined":
	      this.dialect = Markdown.dialects.Gruber;
	      break;
	    case "object":
	      this.dialect = dialect;
	      break;
	    default:
	      if ( dialect in Markdown.dialects ) {
	        this.dialect = Markdown.dialects[dialect];
	      }
	      else {
	        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
	      }
	      break;
	  }
	  this.em_state = [];
	  this.strong_state = [];
	  this.debug_indent = "";
	};

	/**
	 *  parse( markdown, [dialect] ) -> JsonML
	 *  - markdown (String): markdown string to parse
	 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
	 *
	 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
	 **/
	expose.parse = function( source, dialect ) {
	  // dialect will default if undefined
	  var md = new Markdown( dialect );
	  return md.toTree( source );
	};

	/**
	 *  toHTML( markdown, [dialect]  ) -> String
	 *  toHTML( md_tree ) -> String
	 *  - markdown (String): markdown string to parse
	 *  - md_tree (Markdown.JsonML): parsed markdown tree
	 *
	 *  Take markdown (either as a string or as a JsonML tree) and run it through
	 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
	 **/
	expose.toHTML = function toHTML( source , dialect , options ) {
	  var input = expose.toHTMLTree( source , dialect , options );

	  return expose.renderJsonML( input );
	};

	/**
	 *  toHTMLTree( markdown, [dialect] ) -> JsonML
	 *  toHTMLTree( md_tree ) -> JsonML
	 *  - markdown (String): markdown string to parse
	 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
	 *  - md_tree (Markdown.JsonML): parsed markdown tree
	 *
	 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
	 *  to this function, it is first parsed into a markdown tree by calling
	 *  [[parse]].
	 **/
	expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
	  // convert string input to an MD tree
	  if ( typeof input ==="string" ) input = this.parse( input, dialect );

	  // Now convert the MD tree to an HTML tree

	  // remove references from the tree
	  var attrs = extract_attr( input ),
	      refs = {};

	  if ( attrs && attrs.references ) {
	    refs = attrs.references;
	  }

	  var html = convert_tree_to_html( input, refs , options );
	  merge_text_nodes( html );
	  return html;
	};

	// For Spidermonkey based engines
	function mk_block_toSource() {
	  return "Markdown.mk_block( " +
	          uneval(this.toString()) +
	          ", " +
	          uneval(this.trailing) +
	          ", " +
	          uneval(this.lineNumber) +
	          " )";
	}

	// node
	function mk_block_inspect() {
	  var util = __webpack_require__(302);
	  return "Markdown.mk_block( " +
	          util.inspect(this.toString()) +
	          ", " +
	          util.inspect(this.trailing) +
	          ", " +
	          util.inspect(this.lineNumber) +
	          " )";

	}

	var mk_block = Markdown.mk_block = function(block, trail, line) {
	  // Be helpful for default case in tests.
	  if ( arguments.length == 1 ) trail = "\n\n";

	  var s = new String(block);
	  s.trailing = trail;
	  // To make it clear its not just a string
	  s.inspect = mk_block_inspect;
	  s.toSource = mk_block_toSource;

	  if ( line != undefined )
	    s.lineNumber = line;

	  return s;
	};

	function count_lines( str ) {
	  var n = 0, i = -1;
	  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
	  return n;
	}

	// Internal - split source into rough blocks
	Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
	  input = input.replace(/(\r\n|\n|\r)/g, "\n");
	  // [\s\S] matches _anything_ (newline or space)
	  // [^] is equivalent but doesn't work in IEs.
	  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
	      blocks = [],
	      m;

	  var line_no = 1;

	  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
	    // skip (but count) leading blank lines
	    line_no += count_lines( m[0] );
	    re.lastIndex = m[0].length;
	  }

	  while ( ( m = re.exec(input) ) !== null ) {
	    if (m[2] == "\n#") {
	      m[2] = "\n";
	      re.lastIndex--;
	    }
	    blocks.push( mk_block( m[1], m[2], line_no ) );
	    line_no += count_lines( m[0] );
	  }

	  return blocks;
	};

	/**
	 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
	 *  - block (String): the block to process
	 *  - next (Array): the following blocks
	 *
	 * Process `block` and return an array of JsonML nodes representing `block`.
	 *
	 * It does this by asking each block level function in the dialect to process
	 * the block until one can. Succesful handling is indicated by returning an
	 * array (with zero or more JsonML nodes), failure by a false value.
	 *
	 * Blocks handlers are responsible for calling [[Markdown#processInline]]
	 * themselves as appropriate.
	 *
	 * If the blocks were split incorrectly or adjacent blocks need collapsing you
	 * can adjust `next` in place using shift/splice etc.
	 *
	 * If any of this default behaviour is not right for the dialect, you can
	 * define a `__call__` method on the dialect that will get invoked to handle
	 * the block processing.
	 */
	Markdown.prototype.processBlock = function processBlock( block, next ) {
	  var cbs = this.dialect.block,
	      ord = cbs.__order__;

	  if ( "__call__" in cbs ) {
	    return cbs.__call__.call(this, block, next);
	  }

	  for ( var i = 0; i < ord.length; i++ ) {
	    //D:this.debug( "Testing", ord[i] );
	    var res = cbs[ ord[i] ].call( this, block, next );
	    if ( res ) {
	      //D:this.debug("  matched");
	      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
	        this.debug(ord[i], "didn't return a proper array");
	      //D:this.debug( "" );
	      return res;
	    }
	  }

	  // Uhoh! no match! Should we throw an error?
	  return [];
	};

	Markdown.prototype.processInline = function processInline( block ) {
	  return this.dialect.inline.__call__.call( this, String( block ) );
	};

	/**
	 *  Markdown#toTree( source ) -> JsonML
	 *  - source (String): markdown source to parse
	 *
	 *  Parse `source` into a JsonML tree representing the markdown document.
	 **/
	// custom_tree means set this.tree to `custom_tree` and restore old value on return
	Markdown.prototype.toTree = function toTree( source, custom_root ) {
	  var blocks = source instanceof Array ? source : this.split_blocks( source );

	  // Make tree a member variable so its easier to mess with in extensions
	  var old_tree = this.tree;
	  try {
	    this.tree = custom_root || this.tree || [ "markdown" ];

	    blocks:
	    while ( blocks.length ) {
	      var b = this.processBlock( blocks.shift(), blocks );

	      // Reference blocks and the like won't return any content
	      if ( !b.length ) continue blocks;

	      this.tree.push.apply( this.tree, b );
	    }
	    return this.tree;
	  }
	  finally {
	    if ( custom_root ) {
	      this.tree = old_tree;
	    }
	  }
	};

	// Noop by default
	Markdown.prototype.debug = function () {
	  var args = Array.prototype.slice.call( arguments);
	  args.unshift(this.debug_indent);
	  if ( typeof print !== "undefined" )
	      print.apply( print, args );
	  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
	      console.log.apply( null, args );
	}

	Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
	  // Dont use /g regexps with this
	  var m,
	      b = block.valueOf();

	  while ( b.length && (m = re.exec(b) ) != null ) {
	    b = b.substr( m[0].length );
	    cb.call(this, m);
	  }
	  return b;
	};

	/**
	 * Markdown.dialects
	 *
	 * Namespace of built-in dialects.
	 **/
	Markdown.dialects = {};

	/**
	 * Markdown.dialects.Gruber
	 *
	 * The default dialect that follows the rules set out by John Gruber's
	 * markdown.pl as closely as possible. Well actually we follow the behaviour of
	 * that script which in some places is not exactly what the syntax web page
	 * says.
	 **/
	Markdown.dialects.Gruber = {
	  block: {
	    atxHeader: function atxHeader( block, next ) {
	      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

	      if ( !m ) return undefined;

	      var header = [ "header", { level: m[ 1 ].length } ];
	      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

	      if ( m[0].length < block.length )
	        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

	      return [ header ];
	    },

	    setextHeader: function setextHeader( block, next ) {
	      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

	      if ( !m ) return undefined;

	      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
	      var header = [ "header", { level : level }, m[ 1 ] ];

	      if ( m[0].length < block.length )
	        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

	      return [ header ];
	    },

	    code: function code( block, next ) {
	      // |    Foo
	      // |bar
	      // should be a code block followed by a paragraph. Fun
	      //
	      // There might also be adjacent code block to merge.

	      var ret = [],
	          re = /^(?: {0,3}\t| {4})(.*)\n?/,
	          lines;

	      // 4 spaces + content
	      if ( !block.match( re ) ) return undefined;

	      block_search:
	      do {
	        // Now pull out the rest of the lines
	        var b = this.loop_re_over_block(
	                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

	        if ( b.length ) {
	          // Case alluded to in first comment. push it back on as a new block
	          next.unshift( mk_block(b, block.trailing) );
	          break block_search;
	        }
	        else if ( next.length ) {
	          // Check the next block - it might be code too
	          if ( !next[0].match( re ) ) break block_search;

	          // Pull how how many blanks lines follow - minus two to account for .join
	          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

	          block = next.shift();
	        }
	        else {
	          break block_search;
	        }
	      } while ( true );

	      return [ [ "code_block", ret.join("\n") ] ];
	    },

	    horizRule: function horizRule( block, next ) {
	      // this needs to find any hr in the block to handle abutting blocks
	      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

	      if ( !m ) {
	        return undefined;
	      }

	      var jsonml = [ [ "hr" ] ];

	      // if there's a leading abutting block, process it
	      if ( m[ 1 ] ) {
	        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
	      }

	      // if there's a trailing abutting block, stick it into next
	      if ( m[ 3 ] ) {
	        next.unshift( mk_block( m[ 3 ] ) );
	      }

	      return jsonml;
	    },

	    // There are two types of lists. Tight and loose. Tight lists have no whitespace
	    // between the items (and result in text just in the <li>) and loose lists,
	    // which have an empty line between list items, resulting in (one or more)
	    // paragraphs inside the <li>.
	    //
	    // There are all sorts weird edge cases about the original markdown.pl's
	    // handling of lists:
	    //
	    // * Nested lists are supposed to be indented by four chars per level. But
	    //   if they aren't, you can get a nested list by indenting by less than
	    //   four so long as the indent doesn't match an indent of an existing list
	    //   item in the 'nest stack'.
	    //
	    // * The type of the list (bullet or number) is controlled just by the
	    //    first item at the indent. Subsequent changes are ignored unless they
	    //    are for nested lists
	    //
	    lists: (function( ) {
	      // Use a closure to hide a few variables.
	      var any_list = "[*+-]|\\d+\\.",
	          bullet_list = /[*+-]/,
	          number_list = /\d+\./,
	          // Capture leading indent as it matters for determining nested lists.
	          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
	          indent_re = "(?: {0,3}\\t| {4})";

	      // TODO: Cache this regexp for certain depths.
	      // Create a regexp suitable for matching an li for a given stack depth
	      function regex_for_depth( depth ) {

	        return new RegExp(
	          // m[1] = indent, m[2] = list_type
	          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
	          // m[3] = cont
	          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
	        );
	      }
	      function expand_tab( input ) {
	        return input.replace( / {0,3}\t/g, "    " );
	      }

	      // Add inline content `inline` to `li`. inline comes from processInline
	      // so is an array of content
	      function add(li, loose, inline, nl) {
	        if ( loose ) {
	          li.push( [ "para" ].concat(inline) );
	          return;
	        }
	        // Hmmm, should this be any block level element or just paras?
	        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
	                   ? li[li.length -1]
	                   : li;

	        // If there is already some content in this list, add the new line in
	        if ( nl && li.length > 1 ) inline.unshift(nl);

	        for ( var i = 0; i < inline.length; i++ ) {
	          var what = inline[i],
	              is_str = typeof what == "string";
	          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
	            add_to[ add_to.length-1 ] += what;
	          }
	          else {
	            add_to.push( what );
	          }
	        }
	      }

	      // contained means have an indent greater than the current one. On
	      // *every* line in the block
	      function get_contained_blocks( depth, blocks ) {

	        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
	            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
	            ret = [];

	        while ( blocks.length > 0 ) {
	          if ( re.exec( blocks[0] ) ) {
	            var b = blocks.shift(),
	                // Now remove that indent
	                x = b.replace( replace, "");

	            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
	          }
	          else {
	            break;
	          }
	        }
	        return ret;
	      }

	      // passed to stack.forEach to turn list items up the stack into paras
	      function paragraphify(s, i, stack) {
	        var list = s.list;
	        var last_li = list[list.length-1];

	        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
	          return;
	        }
	        if ( i + 1 == stack.length ) {
	          // Last stack frame
	          // Keep the same array, but replace the contents
	          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
	        }
	        else {
	          var sublist = last_li.pop();
	          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
	        }
	      }

	      // The matcher function
	      return function( block, next ) {
	        var m = block.match( is_list_re );
	        if ( !m ) return undefined;

	        function make_list( m ) {
	          var list = bullet_list.exec( m[2] )
	                   ? ["bulletlist"]
	                   : ["numberlist"];

	          stack.push( { list: list, indent: m[1] } );
	          return list;
	        }


	        var stack = [], // Stack of lists for nesting.
	            list = make_list( m ),
	            last_li,
	            loose = false,
	            ret = [ stack[0].list ],
	            i;

	        // Loop to search over block looking for inner block elements and loose lists
	        loose_search:
	        while ( true ) {
	          // Split into lines preserving new lines at end of line
	          var lines = block.split( /(?=\n)/ );

	          // We have to grab all lines for a li and call processInline on them
	          // once as there are some inline things that can span lines.
	          var li_accumulate = "";

	          // Loop over the lines in this block looking for tight lists.
	          tight_search:
	          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
	            var nl = "",
	                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

	            // TODO: really should cache this
	            var line_re = regex_for_depth( stack.length );

	            m = l.match( line_re );
	            //print( "line:", uneval(l), "\nline match:", uneval(m) );

	            // We have a list item
	            if ( m[1] !== undefined ) {
	              // Process the previous list item, if any
	              if ( li_accumulate.length ) {
	                add( last_li, loose, this.processInline( li_accumulate ), nl );
	                // Loose mode will have been dealt with. Reset it
	                loose = false;
	                li_accumulate = "";
	              }

	              m[1] = expand_tab( m[1] );
	              var wanted_depth = Math.floor(m[1].length/4)+1;
	              //print( "want:", wanted_depth, "stack:", stack.length);
	              if ( wanted_depth > stack.length ) {
	                // Deep enough for a nested list outright
	                //print ( "new nested list" );
	                list = make_list( m );
	                last_li.push( list );
	                last_li = list[1] = [ "listitem" ];
	              }
	              else {
	                // We aren't deep enough to be strictly a new level. This is
	                // where Md.pl goes nuts. If the indent matches a level in the
	                // stack, put it there, else put it one deeper then the
	                // wanted_depth deserves.
	                var found = false;
	                for ( i = 0; i < stack.length; i++ ) {
	                  if ( stack[ i ].indent != m[1] ) continue;
	                  list = stack[ i ].list;
	                  stack.splice( i+1, stack.length - (i+1) );
	                  found = true;
	                  break;
	                }

	                if (!found) {
	                  //print("not found. l:", uneval(l));
	                  wanted_depth++;
	                  if ( wanted_depth <= stack.length ) {
	                    stack.splice(wanted_depth, stack.length - wanted_depth);
	                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
	                    list = stack[wanted_depth-1].list;
	                    //print("list:", uneval(list) );
	                  }
	                  else {
	                    //print ("made new stack for messy indent");
	                    list = make_list(m);
	                    last_li.push(list);
	                  }
	                }

	                //print( uneval(list), "last", list === stack[stack.length-1].list );
	                last_li = [ "listitem" ];
	                list.push(last_li);
	              } // end depth of shenegains
	              nl = "";
	            }

	            // Add content
	            if ( l.length > m[0].length ) {
	              li_accumulate += nl + l.substr( m[0].length );
	            }
	          } // tight_search

	          if ( li_accumulate.length ) {
	            add( last_li, loose, this.processInline( li_accumulate ), nl );
	            // Loose mode will have been dealt with. Reset it
	            loose = false;
	            li_accumulate = "";
	          }

	          // Look at the next block - we might have a loose list. Or an extra
	          // paragraph for the current li
	          var contained = get_contained_blocks( stack.length, next );

	          // Deal with code blocks or properly nested lists
	          if ( contained.length > 0 ) {
	            // Make sure all listitems up the stack are paragraphs
	            forEach( stack, paragraphify, this);

	            last_li.push.apply( last_li, this.toTree( contained, [] ) );
	          }

	          var next_block = next[0] && next[0].valueOf() || "";

	          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
	            block = next.shift();

	            // Check for an HR following a list: features/lists/hr_abutting
	            var hr = this.dialect.block.horizRule( block, next );

	            if ( hr ) {
	              ret.push.apply(ret, hr);
	              break;
	            }

	            // Make sure all listitems up the stack are paragraphs
	            forEach( stack, paragraphify, this);

	            loose = true;
	            continue loose_search;
	          }
	          break;
	        } // loose_search

	        return ret;
	      };
	    })(),

	    blockquote: function blockquote( block, next ) {
	      if ( !block.match( /^>/m ) )
	        return undefined;

	      var jsonml = [];

	      // separate out the leading abutting block, if any. I.e. in this case:
	      //
	      //  a
	      //  > b
	      //
	      if ( block[ 0 ] != ">" ) {
	        var lines = block.split( /\n/ ),
	            prev = [],
	            line_no = block.lineNumber;

	        // keep shifting lines until you find a crotchet
	        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
	            prev.push( lines.shift() );
	            line_no++;
	        }

	        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
	        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
	        // reassemble new block of just block quotes!
	        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
	      }


	      // if the next block is also a blockquote merge it in
	      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
	        var b = next.shift();
	        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
	      }

	      // Strip off the leading "> " and re-process as a block.
	      var input = block.replace( /^> ?/gm, "" ),
	          old_tree = this.tree,
	          processedBlock = this.toTree( input, [ "blockquote" ] ),
	          attr = extract_attr( processedBlock );

	      // If any link references were found get rid of them
	      if ( attr && attr.references ) {
	        delete attr.references;
	        // And then remove the attribute object if it's empty
	        if ( isEmpty( attr ) ) {
	          processedBlock.splice( 1, 1 );
	        }
	      }

	      jsonml.push( processedBlock );
	      return jsonml;
	    },

	    referenceDefn: function referenceDefn( block, next) {
	      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
	      // interesting matches are [ , ref_id, url, , title, title ]

	      if ( !block.match(re) )
	        return undefined;

	      // make an attribute node if it doesn't exist
	      if ( !extract_attr( this.tree ) ) {
	        this.tree.splice( 1, 0, {} );
	      }

	      var attrs = extract_attr( this.tree );

	      // make a references hash if it doesn't exist
	      if ( attrs.references === undefined ) {
	        attrs.references = {};
	      }

	      var b = this.loop_re_over_block(re, block, function( m ) {

	        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
	          m[2] = m[2].substring( 1, m[2].length - 1 );

	        var ref = attrs.references[ m[1].toLowerCase() ] = {
	          href: m[2]
	        };

	        if ( m[4] !== undefined )
	          ref.title = m[4];
	        else if ( m[5] !== undefined )
	          ref.title = m[5];

	      } );

	      if ( b.length )
	        next.unshift( mk_block( b, block.trailing ) );

	      return [];
	    },

	    para: function para( block, next ) {
	      // everything's a para!
	      return [ ["para"].concat( this.processInline( block ) ) ];
	    }
	  }
	};

	Markdown.dialects.Gruber.inline = {

	    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
	      var m,
	          res,
	          lastIndex = 0;

	      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
	      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

	      m = re.exec( text );
	      if (!m) {
	        // Just boring text
	        return [ text.length, text ];
	      }
	      else if ( m[1] ) {
	        // Some un-interesting text matched. Return that first
	        return [ m[1].length, m[1] ];
	      }

	      var res;
	      if ( m[2] in this.dialect.inline ) {
	        res = this.dialect.inline[ m[2] ].call(
	                  this,
	                  text.substr( m.index ), m, previous_nodes || [] );
	      }
	      // Default for now to make dev easier. just slurp special and output it.
	      res = res || [ m[2].length, m[2] ];
	      return res;
	    },

	    __call__: function inline( text, patterns ) {

	      var out = [],
	          res;

	      function add(x) {
	        //D:self.debug("  adding output", uneval(x));
	        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
	          out[ out.length-1 ] += x;
	        else
	          out.push(x);
	      }

	      while ( text.length > 0 ) {
	        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
	        text = text.substr( res.shift() );
	        forEach(res, add )
	      }

	      return out;
	    },

	    // These characters are intersting elsewhere, so have rules for them so that
	    // chunks of plain text blocks don't include them
	    "]": function () {},
	    "}": function () {},

	    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

	    "\\": function escaped( text ) {
	      // [ length of input processed, node/children to add... ]
	      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
	      if ( this.dialect.inline.__escape__.exec( text ) )
	        return [ 2, text.charAt( 1 ) ];
	      else
	        // Not an esacpe
	        return [ 1, "\\" ];
	    },

	    "![": function image( text ) {

	      // Unlike images, alt text is plain text only. no other elements are
	      // allowed in there

	      // ![Alt text](/path/to/img.jpg "Optional title")
	      //      1          2            3       4         <--- captures
	      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

	      if ( m ) {
	        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
	          m[2] = m[2].substring( 1, m[2].length - 1 );

	        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

	        var attrs = { alt: m[1], href: m[2] || "" };
	        if ( m[4] !== undefined)
	          attrs.title = m[4];

	        return [ m[0].length, [ "img", attrs ] ];
	      }

	      // ![Alt text][id]
	      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

	      if ( m ) {
	        // We can't check if the reference is known here as it likely wont be
	        // found till after. Check it in md tree->hmtl tree conversion
	        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
	      }

	      // Just consume the '!['
	      return [ 2, "![" ];
	    },

	    "[": function link( text ) {

	      var orig = String(text);
	      // Inline content is possible inside `link text`
	      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

	      // No closing ']' found. Just consume the [
	      if ( !res ) return [ 1, "[" ];

	      var consumed = 1 + res[ 0 ],
	          children = res[ 1 ],
	          link,
	          attrs;

	      // At this point the first [...] has been parsed. See what follows to find
	      // out which kind of link we are (reference or direct url)
	      text = text.substr( consumed );

	      // [link text](/path/to/img.jpg "Optional title")
	      //                 1            2       3         <--- captures
	      // This will capture up to the last paren in the block. We then pull
	      // back based on if there a matching ones in the url
	      //    ([here](/url/(test))
	      // The parens have to be balanced
	      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
	      if ( m ) {
	        var url = m[1];
	        consumed += m[0].length;

	        if ( url && url[0] == "<" && url[url.length-1] == ">" )
	          url = url.substring( 1, url.length - 1 );

	        // If there is a title we don't have to worry about parens in the url
	        if ( !m[3] ) {
	          var open_parens = 1; // One open that isn't in the capture
	          for ( var len = 0; len < url.length; len++ ) {
	            switch ( url[len] ) {
	            case "(":
	              open_parens++;
	              break;
	            case ")":
	              if ( --open_parens == 0) {
	                consumed -= url.length - len;
	                url = url.substring(0, len);
	              }
	              break;
	            }
	          }
	        }

	        // Process escapes only
	        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

	        attrs = { href: url || "" };
	        if ( m[3] !== undefined)
	          attrs.title = m[3];

	        link = [ "link", attrs ].concat( children );
	        return [ consumed, link ];
	      }

	      // [Alt text][id]
	      // [Alt text] [id]
	      m = text.match( /^\s*\[(.*?)\]/ );

	      if ( m ) {

	        consumed += m[ 0 ].length;

	        // [links][] uses links as its reference
	        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

	        link = [ "link_ref", attrs ].concat( children );

	        // We can't check if the reference is known here as it likely wont be
	        // found till after. Check it in md tree->hmtl tree conversion.
	        // Store the original so that conversion can revert if the ref isn't found.
	        return [ consumed, link ];
	      }

	      // [id]
	      // Only if id is plain (no formatting.)
	      if ( children.length == 1 && typeof children[0] == "string" ) {

	        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
	        link = [ "link_ref", attrs, children[0] ];
	        return [ consumed, link ];
	      }

	      // Just consume the "["
	      return [ 1, "[" ];
	    },


	    "<": function autoLink( text ) {
	      var m;

	      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
	        if ( m[3] ) {
	          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

	        }
	        else if ( m[2] == "mailto" ) {
	          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
	        }
	        else
	          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
	      }

	      return [ 1, "<" ];
	    },

	    "`": function inlineCode( text ) {
	      // Inline code block. as many backticks as you like to start it
	      // Always skip over the opening ticks.
	      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

	      if ( m && m[2] )
	        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
	      else {
	        // TODO: No matching end code found - warn!
	        return [ 1, "`" ];
	      }
	    },

	    "  \n": function lineBreak( text ) {
	      return [ 3, [ "linebreak" ] ];
	    }

	};

	// Meta Helper/generator method for em and strong handling
	function strong_em( tag, md ) {

	  var state_slot = tag + "_state",
	      other_slot = tag == "strong" ? "em_state" : "strong_state";

	  function CloseTag(len) {
	    this.len_after = len;
	    this.name = "close_" + md;
	  }

	  return function ( text, orig_match ) {

	    if ( this[state_slot][0] == md ) {
	      // Most recent em is of this type
	      //D:this.debug("closing", md);
	      this[state_slot].shift();

	      // "Consume" everything to go back to the recrusion in the else-block below
	      return[ text.length, new CloseTag(text.length-md.length) ];
	    }
	    else {
	      // Store a clone of the em/strong states
	      var other = this[other_slot].slice(),
	          state = this[state_slot].slice();

	      this[state_slot].unshift(md);

	      //D:this.debug_indent += "  ";

	      // Recurse
	      var res = this.processInline( text.substr( md.length ) );
	      //D:this.debug_indent = this.debug_indent.substr(2);

	      var last = res[res.length - 1];

	      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

	      var check = this[state_slot].shift();
	      if ( last instanceof CloseTag ) {
	        res.pop();
	        // We matched! Huzzah.
	        var consumed = text.length - last.len_after;
	        return [ consumed, [ tag ].concat(res) ];
	      }
	      else {
	        // Restore the state of the other kind. We might have mistakenly closed it.
	        this[other_slot] = other;
	        this[state_slot] = state;

	        // We can't reuse the processed result as it could have wrong parsing contexts in it.
	        return [ md.length, md ];
	      }
	    }
	  }; // End returned function
	}

	Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
	Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
	Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
	Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


	// Build default order from insertion order.
	Markdown.buildBlockOrder = function(d) {
	  var ord = [];
	  for ( var i in d ) {
	    if ( i == "__order__" || i == "__call__" ) continue;
	    ord.push( i );
	  }
	  d.__order__ = ord;
	};

	// Build patterns for inline matcher
	Markdown.buildInlinePatterns = function(d) {
	  var patterns = [];

	  for ( var i in d ) {
	    // __foo__ is reserved and not a pattern
	    if ( i.match( /^__.*__$/) ) continue;
	    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
	             .replace( /\n/, "\\n" );
	    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
	  }

	  patterns = patterns.join("|");
	  d.__patterns__ = patterns;
	  //print("patterns:", uneval( patterns ) );

	  var fn = d.__call__;
	  d.__call__ = function(text, pattern) {
	    if ( pattern != undefined ) {
	      return fn.call(this, text, pattern);
	    }
	    else
	    {
	      return fn.call(this, text, patterns);
	    }
	  };
	};

	Markdown.DialectHelpers = {};
	Markdown.DialectHelpers.inline_until_char = function( text, want ) {
	  var consumed = 0,
	      nodes = [];

	  while ( true ) {
	    if ( text.charAt( consumed ) == want ) {
	      // Found the character we were looking for
	      consumed++;
	      return [ consumed, nodes ];
	    }

	    if ( consumed >= text.length ) {
	      // No closing char found. Abort.
	      return null;
	    }

	    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
	    consumed += res[ 0 ];
	    // Add any returned nodes.
	    nodes.push.apply( nodes, res.slice( 1 ) );
	  }
	}

	// Helper function to make sub-classing a dialect easier
	Markdown.subclassDialect = function( d ) {
	  function Block() {}
	  Block.prototype = d.block;
	  function Inline() {}
	  Inline.prototype = d.inline;

	  return { block: new Block(), inline: new Inline() };
	};

	Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
	Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

	Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

	Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
	  var meta = split_meta_hash( meta_string ),
	      attr = {};

	  for ( var i = 0; i < meta.length; ++i ) {
	    // id: #foo
	    if ( /^#/.test( meta[ i ] ) ) {
	      attr.id = meta[ i ].substring( 1 );
	    }
	    // class: .foo
	    else if ( /^\./.test( meta[ i ] ) ) {
	      // if class already exists, append the new one
	      if ( attr["class"] ) {
	        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
	      }
	      else {
	        attr["class"] = meta[ i ].substring( 1 );
	      }
	    }
	    // attribute: foo=bar
	    else if ( /\=/.test( meta[ i ] ) ) {
	      var s = meta[ i ].split( /\=/ );
	      attr[ s[ 0 ] ] = s[ 1 ];
	    }
	  }

	  return attr;
	}

	function split_meta_hash( meta_string ) {
	  var meta = meta_string.split( "" ),
	      parts = [ "" ],
	      in_quotes = false;

	  while ( meta.length ) {
	    var letter = meta.shift();
	    switch ( letter ) {
	      case " " :
	        // if we're in a quoted section, keep it
	        if ( in_quotes ) {
	          parts[ parts.length - 1 ] += letter;
	        }
	        // otherwise make a new part
	        else {
	          parts.push( "" );
	        }
	        break;
	      case "'" :
	      case '"' :
	        // reverse the quotes and move straight on
	        in_quotes = !in_quotes;
	        break;
	      case "\\" :
	        // shift off the next letter to be used straight away.
	        // it was escaped so we'll keep it whatever it is
	        letter = meta.shift();
	      default :
	        parts[ parts.length - 1 ] += letter;
	        break;
	    }
	  }

	  return parts;
	}

	Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
	  // we're only interested in the first block
	  if ( block.lineNumber > 1 ) return undefined;

	  // document_meta blocks consist of one or more lines of `Key: Value\n`
	  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

	  // make an attribute node if it doesn't exist
	  if ( !extract_attr( this.tree ) ) {
	    this.tree.splice( 1, 0, {} );
	  }

	  var pairs = block.split( /\n/ );
	  for ( p in pairs ) {
	    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
	        key = m[ 1 ].toLowerCase(),
	        value = m[ 2 ];

	    this.tree[ 1 ][ key ] = value;
	  }

	  // document_meta produces no content!
	  return [];
	};

	Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
	  // check if the last line of the block is an meta hash
	  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
	  if ( !m ) return undefined;

	  // process the meta hash
	  var attr = this.dialect.processMetaHash( m[ 2 ] );

	  var hash;

	  // if we matched ^ then we need to apply meta to the previous block
	  if ( m[ 1 ] === "" ) {
	    var node = this.tree[ this.tree.length - 1 ];
	    hash = extract_attr( node );

	    // if the node is a string (rather than JsonML), bail
	    if ( typeof node === "string" ) return undefined;

	    // create the attribute hash if it doesn't exist
	    if ( !hash ) {
	      hash = {};
	      node.splice( 1, 0, hash );
	    }

	    // add the attributes in
	    for ( a in attr ) {
	      hash[ a ] = attr[ a ];
	    }

	    // return nothing so the meta hash is removed
	    return [];
	  }

	  // pull the meta hash off the block and process what's left
	  var b = block.replace( /\n.*$/, "" ),
	      result = this.processBlock( b, [] );

	  // get or make the attributes hash
	  hash = extract_attr( result[ 0 ] );
	  if ( !hash ) {
	    hash = {};
	    result[ 0 ].splice( 1, 0, hash );
	  }

	  // attach the attributes to the block
	  for ( a in attr ) {
	    hash[ a ] = attr[ a ];
	  }

	  return result;
	};

	Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
	  // one or more terms followed by one or more definitions, in a single block
	  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
	      list = [ "dl" ],
	      i, m;

	  // see if we're dealing with a tight or loose block
	  if ( ( m = block.match( tight ) ) ) {
	    // pull subsequent tight DL blocks out of `next`
	    var blocks = [ block ];
	    while ( next.length && tight.exec( next[ 0 ] ) ) {
	      blocks.push( next.shift() );
	    }

	    for ( var b = 0; b < blocks.length; ++b ) {
	      var m = blocks[ b ].match( tight ),
	          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
	          defns = m[ 2 ].split( /\n:\s+/ );

	      // print( uneval( m ) );

	      for ( i = 0; i < terms.length; ++i ) {
	        list.push( [ "dt", terms[ i ] ] );
	      }

	      for ( i = 0; i < defns.length; ++i ) {
	        // run inline processing over the definition
	        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
	      }
	    }
	  }
	  else {
	    return undefined;
	  }

	  return [ list ];
	};

	// splits on unescaped instances of @ch. If @ch is not a character the result
	// can be unpredictable

	Markdown.dialects.Maruku.block.table = function table (block, next) {

	    var _split_on_unescaped = function(s, ch) {
	        ch = ch || '\\s';
	        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
	        var res = [ ],
	            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
	            m;
	        while(m = s.match(r)) {
	            res.push(m[1]);
	            s = m[2];
	        }
	        res.push(s);
	        return res;
	    }

	    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
	        // find at least an unescaped pipe in each line
	        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
	        i, m;
	    if (m = block.match(leading_pipe)) {
	        // remove leading pipes in contents
	        // (header and horizontal rule already have the leading pipe left out)
	        m[3] = m[3].replace(/^\s*\|/gm, '');
	    } else if (! ( m = block.match(no_leading_pipe))) {
	        return undefined;
	    }

	    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

	    // remove trailing pipes, then split on pipes
	    // (no escaped pipes are allowed in horizontal rule)
	    m[2] = m[2].replace(/\|\s*$/, '').split('|');

	    // process alignment
	    var html_attrs = [ ];
	    forEach (m[2], function (s) {
	        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
	        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
	        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
	        else                              html_attrs.push({});
	    });

	    // now for the header, avoid escaped pipes
	    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
	    for (i = 0; i < m[1].length; i++) {
	        table[1][1].push(['th', html_attrs[i] || {}].concat(
	            this.processInline(m[1][i].trim())));
	    }

	    // now for body contents
	    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
	        var html_row = ['tr'];
	        row = _split_on_unescaped(row, '|');
	        for (i = 0; i < row.length; i++) {
	            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
	        }
	        table[2].push(html_row);
	    }, this);

	    return [table];
	}

	Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
	  if ( !out.length ) {
	    return [ 2, "{:" ];
	  }

	  // get the preceeding element
	  var before = out[ out.length - 1 ];

	  if ( typeof before === "string" ) {
	    return [ 2, "{:" ];
	  }

	  // match a meta hash
	  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

	  // no match, false alarm
	  if ( !m ) {
	    return [ 2, "{:" ];
	  }

	  // attach the attributes to the preceeding element
	  var meta = this.dialect.processMetaHash( m[ 1 ] ),
	      attr = extract_attr( before );

	  if ( !attr ) {
	    attr = {};
	    before.splice( 1, 0, attr );
	  }

	  for ( var k in meta ) {
	    attr[ k ] = meta[ k ];
	  }

	  // cut out the string and replace it with nothing
	  return [ m[ 0 ].length, "" ];
	};

	Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

	Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
	Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

	var isArray = Array.isArray || function(obj) {
	  return Object.prototype.toString.call(obj) == "[object Array]";
	};

	var forEach;
	// Don't mess with Array.prototype. Its not friendly
	if ( Array.prototype.forEach ) {
	  forEach = function( arr, cb, thisp ) {
	    return arr.forEach( cb, thisp );
	  };
	}
	else {
	  forEach = function(arr, cb, thisp) {
	    for (var i = 0; i < arr.length; i++) {
	      cb.call(thisp || arr, arr[i], i, arr);
	    }
	  }
	}

	var isEmpty = function( obj ) {
	  for ( var key in obj ) {
	    if ( hasOwnProperty.call( obj, key ) ) {
	      return false;
	    }
	  }

	  return true;
	}

	function extract_attr( jsonml ) {
	  return isArray(jsonml)
	      && jsonml.length > 1
	      && typeof jsonml[ 1 ] === "object"
	      && !( isArray(jsonml[ 1 ]) )
	      ? jsonml[ 1 ]
	      : undefined;
	}



	/**
	 *  renderJsonML( jsonml[, options] ) -> String
	 *  - jsonml (Array): JsonML array to render to XML
	 *  - options (Object): options
	 *
	 *  Converts the given JsonML into well-formed XML.
	 *
	 *  The options currently understood are:
	 *
	 *  - root (Boolean): wether or not the root node should be included in the
	 *    output, or just its children. The default `false` is to not include the
	 *    root itself.
	 */
	expose.renderJsonML = function( jsonml, options ) {
	  options = options || {};
	  // include the root element in the rendered output?
	  options.root = options.root || false;

	  var content = [];

	  if ( options.root ) {
	    content.push( render_tree( jsonml ) );
	  }
	  else {
	    jsonml.shift(); // get rid of the tag
	    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
	      jsonml.shift(); // get rid of the attributes
	    }

	    while ( jsonml.length ) {
	      content.push( render_tree( jsonml.shift() ) );
	    }
	  }

	  return content.join( "\n\n" );
	};

	function escapeHTML( text ) {
	  return text.replace( /&/g, "&amp;" )
	             .replace( /</g, "&lt;" )
	             .replace( />/g, "&gt;" )
	             .replace( /"/g, "&quot;" )
	             .replace( /'/g, "&#39;" );
	}

	function render_tree( jsonml ) {
	  // basic case
	  if ( typeof jsonml === "string" ) {
	    return escapeHTML( jsonml );
	  }

	  var tag = jsonml.shift(),
	      attributes = {},
	      content = [];

	  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
	    attributes = jsonml.shift();
	  }

	  while ( jsonml.length ) {
	    content.push( render_tree( jsonml.shift() ) );
	  }

	  var tag_attrs = "";
	  for ( var a in attributes ) {
	    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
	  }

	  // be careful about adding whitespace here for inline elements
	  if ( tag == "img" || tag == "br" || tag == "hr" ) {
	    return "<"+ tag + tag_attrs + "/>";
	  }
	  else {
	    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
	  }
	}

	function convert_tree_to_html( tree, references, options ) {
	  var i;
	  options = options || {};

	  // shallow clone
	  var jsonml = tree.slice( 0 );

	  if ( typeof options.preprocessTreeNode === "function" ) {
	      jsonml = options.preprocessTreeNode(jsonml, references);
	  }

	  // Clone attributes if they exist
	  var attrs = extract_attr( jsonml );
	  if ( attrs ) {
	    jsonml[ 1 ] = {};
	    for ( i in attrs ) {
	      jsonml[ 1 ][ i ] = attrs[ i ];
	    }
	    attrs = jsonml[ 1 ];
	  }

	  // basic case
	  if ( typeof jsonml === "string" ) {
	    return jsonml;
	  }

	  // convert this node
	  switch ( jsonml[ 0 ] ) {
	    case "header":
	      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
	      delete jsonml[ 1 ].level;
	      break;
	    case "bulletlist":
	      jsonml[ 0 ] = "ul";
	      break;
	    case "numberlist":
	      jsonml[ 0 ] = "ol";
	      break;
	    case "listitem":
	      jsonml[ 0 ] = "li";
	      break;
	    case "para":
	      jsonml[ 0 ] = "p";
	      break;
	    case "markdown":
	      jsonml[ 0 ] = "html";
	      if ( attrs ) delete attrs.references;
	      break;
	    case "code_block":
	      jsonml[ 0 ] = "pre";
	      i = attrs ? 2 : 1;
	      var code = [ "code" ];
	      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
	      jsonml[ i ] = code;
	      break;
	    case "inlinecode":
	      jsonml[ 0 ] = "code";
	      break;
	    case "img":
	      jsonml[ 1 ].src = jsonml[ 1 ].href;
	      delete jsonml[ 1 ].href;
	      break;
	    case "linebreak":
	      jsonml[ 0 ] = "br";
	    break;
	    case "link":
	      jsonml[ 0 ] = "a";
	      break;
	    case "link_ref":
	      jsonml[ 0 ] = "a";

	      // grab this ref and clean up the attribute node
	      var ref = references[ attrs.ref ];

	      // if the reference exists, make the link
	      if ( ref ) {
	        delete attrs.ref;

	        // add in the href and title, if present
	        attrs.href = ref.href;
	        if ( ref.title ) {
	          attrs.title = ref.title;
	        }

	        // get rid of the unneeded original text
	        delete attrs.original;
	      }
	      // the reference doesn't exist, so revert to plain text
	      else {
	        return attrs.original;
	      }
	      break;
	    case "img_ref":
	      jsonml[ 0 ] = "img";

	      // grab this ref and clean up the attribute node
	      var ref = references[ attrs.ref ];

	      // if the reference exists, make the link
	      if ( ref ) {
	        delete attrs.ref;

	        // add in the href and title, if present
	        attrs.src = ref.href;
	        if ( ref.title ) {
	          attrs.title = ref.title;
	        }

	        // get rid of the unneeded original text
	        delete attrs.original;
	      }
	      // the reference doesn't exist, so revert to plain text
	      else {
	        return attrs.original;
	      }
	      break;
	  }

	  // convert all the children
	  i = 1;

	  // deal with the attribute node, if it exists
	  if ( attrs ) {
	    // if there are keys, skip over it
	    for ( var key in jsonml[ 1 ] ) {
	        i = 2;
	        break;
	    }
	    // if there aren't, remove it
	    if ( i === 1 ) {
	      jsonml.splice( i, 1 );
	    }
	  }

	  for ( ; i < jsonml.length; ++i ) {
	    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
	  }

	  return jsonml;
	}


	// merges adjacent text nodes into a single node
	function merge_text_nodes( jsonml ) {
	  // skip the tag name and attribute hash
	  var i = extract_attr( jsonml ) ? 2 : 1;

	  while ( i < jsonml.length ) {
	    // if it's a string check the next item too
	    if ( typeof jsonml[ i ] === "string" ) {
	      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
	        // merge the second string into the first and remove it
	        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
	      }
	      else {
	        ++i;
	      }
	    }
	    // if it's not a string recurse
	    else {
	      merge_text_nodes( jsonml[ i ] );
	      ++i;
	    }
	  }
	}

	} )( (function() {
	  if ( false ) {
	    window.markdown = {};
	    return window.markdown;
	  }
	  else {
	    return exports;
	  }
	} )() );


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(304);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(305);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(303)))

/***/ }),
/* 303 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 304 */
/***/ (function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ }),
/* 305 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ })
/******/ ]);