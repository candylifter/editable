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

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Get all elements with 'data-editable'\n// Add tooltip which allows toggling between read and edit mode\n// Bind onClick to enable contenteditable on tag\n\nvar Editor = function () {\n  function Editor() {\n    _classCallCheck(this, Editor);\n\n    this.state = {\n      editableElements: []\n    };\n  }\n\n  _createClass(Editor, [{\n    key: 'init',\n    value: function init() {\n      var editableElements = document.querySelectorAll('[data-editable]');\n      this.state.editableElements = editableElements;\n\n      // editableElements.map((element) => console.log(element))\n      for (var i = 0; i < editableElements.length; i++) {\n        console.log(editableElements[i]);\n      }\n    }\n  }]);\n\n  return Editor;\n}();\n\nvar editor = new Editor();\n\neditor.init();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZWRpdG9yLmpzPzliMDkiXSwibmFtZXMiOlsiRWRpdG9yIiwic3RhdGUiLCJlZGl0YWJsZUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLE07QUFDSixvQkFBZTtBQUFBOztBQUNiLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyx3QkFBa0I7QUFEUCxLQUFiO0FBR0Q7Ozs7MkJBRU87QUFDTixVQUFJQSxtQkFBbUJDLFNBQVNDLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUNBLFdBQUtILEtBQUwsQ0FBV0MsZ0JBQVgsR0FBOEJBLGdCQUE5Qjs7QUFFQTtBQUNBLFdBQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxpQkFBaUJJLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUNoREUsZ0JBQVFDLEdBQVIsQ0FBWU4saUJBQWlCRyxDQUFqQixDQUFaO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsSUFBSUksU0FBUyxJQUFJVCxNQUFKLEVBQWI7O0FBRUFTLE9BQU9DLElBQVAiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCAnZGF0YS1lZGl0YWJsZSdcclxuLy8gQWRkIHRvb2x0aXAgd2hpY2ggYWxsb3dzIHRvZ2dsaW5nIGJldHdlZW4gcmVhZCBhbmQgZWRpdCBtb2RlXHJcbi8vIEJpbmQgb25DbGljayB0byBlbmFibGUgY29udGVudGVkaXRhYmxlIG9uIHRhZ1xyXG5cclxuY2xhc3MgRWRpdG9yIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlZGl0YWJsZUVsZW1lbnRzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdCAoKSB7XHJcbiAgICBsZXQgZWRpdGFibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVkaXRhYmxlXScpXHJcbiAgICB0aGlzLnN0YXRlLmVkaXRhYmxlRWxlbWVudHMgPSBlZGl0YWJsZUVsZW1lbnRzXHJcblxyXG4gICAgLy8gZWRpdGFibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IGNvbnNvbGUubG9nKGVsZW1lbnQpKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGl0YWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVkaXRhYmxlRWxlbWVudHNbaV0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZWRpdG9yID0gbmV3IEVkaXRvcigpXHJcblxyXG5lZGl0b3IuaW5pdCgpXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2VkaXRvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);