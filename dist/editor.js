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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Get all elements with 'data-editable'\n// Add tooltip which allows toggling between read and edit mode\n// Bind onClick to enable contenteditable on tag\n\nvar Editor = function () {\n  function Editor() {\n    _classCallCheck(this, Editor);\n\n    this.state = {\n      editableElements: []\n    };\n  }\n\n  _createClass(Editor, [{\n    key: 'init',\n    value: function init() {\n      var editableElements = document.querySelectorAll('[data-editable]');\n      this.state.editableElements = editableElements;\n\n      editableElements.map(function (element) {\n        return console.log(element);\n      });\n    }\n  }]);\n\n  return Editor;\n}();\n\nvar editor = new Editor();\n\neditor.init();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZWRpdG9yLmpzPzliMDkiXSwibmFtZXMiOlsiRWRpdG9yIiwic3RhdGUiLCJlZGl0YWJsZUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLE07QUFDSixvQkFBZTtBQUFBOztBQUNiLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyx3QkFBa0I7QUFEUCxLQUFiO0FBR0Q7Ozs7MkJBRU87QUFDTixVQUFJQSxtQkFBbUJDLFNBQVNDLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUNBLFdBQUtILEtBQUwsQ0FBV0MsZ0JBQVgsR0FBOEJBLGdCQUE5Qjs7QUFFQUEsdUJBQWlCRyxHQUFqQixDQUFxQixVQUFDQyxPQUFEO0FBQUEsZUFBYUMsUUFBUUMsR0FBUixDQUFZRixPQUFaLENBQWI7QUFBQSxPQUFyQjtBQUNEOzs7Ozs7QUFHSCxJQUFJRyxTQUFTLElBQUlULE1BQUosRUFBYjs7QUFFQVMsT0FBT0MsSUFBUCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0IGFsbCBlbGVtZW50cyB3aXRoICdkYXRhLWVkaXRhYmxlJ1xyXG4vLyBBZGQgdG9vbHRpcCB3aGljaCBhbGxvd3MgdG9nZ2xpbmcgYmV0d2VlbiByZWFkIGFuZCBlZGl0IG1vZGVcclxuLy8gQmluZCBvbkNsaWNrIHRvIGVuYWJsZSBjb250ZW50ZWRpdGFibGUgb24gdGFnXHJcblxyXG5jbGFzcyBFZGl0b3Ige1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVkaXRhYmxlRWxlbWVudHM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0ICgpIHtcclxuICAgIGxldCBlZGl0YWJsZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWRpdGFibGVdJylcclxuICAgIHRoaXMuc3RhdGUuZWRpdGFibGVFbGVtZW50cyA9IGVkaXRhYmxlRWxlbWVudHNcclxuXHJcbiAgICBlZGl0YWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gY29uc29sZS5sb2coZWxlbWVudCkpXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZWRpdG9yID0gbmV3IEVkaXRvcigpXHJcblxyXG5lZGl0b3IuaW5pdCgpXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2VkaXRvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);