(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleClass = function () {
	function ExampleClass() {
		_classCallCheck(this, ExampleClass);

		this.hello = "hello world";
	}

	_createClass(ExampleClass, [{
		key: "sayHello",
		value: function sayHello() {
			console.log(this.hello);
		}
	}]);

	return ExampleClass;
}();

exports.default = ExampleClass;

},{}],2:[function(require,module,exports){
"use strict";

var _ExampleClass = require("./ExampleClass");

var _ExampleClass2 = _interopRequireDefault(_ExampleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

e = new _ExampleClass2.default();
e.sayHello();

},{"./ExampleClass":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvRXhhbXBsZUNsYXNzLmpzIiwiYXBwL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUI7QUFDcEIsVUFEb0IsWUFDcEIsR0FBZTt3QkFESyxjQUNMOztBQUNkLE9BQUssS0FBTCxHQUFhLGFBQWIsQ0FEYztFQUFmOztjQURvQjs7NkJBSVI7QUFDWCxXQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBWixDQURXOzs7O1FBSlE7Ozs7Ozs7O0FDQXJCOzs7Ozs7QUFFQSxJQUFJLDRCQUFKO0FBQ0EsRUFBRSxRQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGVDbGFzcyB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHR0aGlzLmhlbGxvID0gXCJoZWxsbyB3b3JsZFwiO1xuXHR9XG5cdHNheUhlbGxvICgpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmhlbGxvKTtcblx0fVxufSIsImltcG9ydCBFeGFtcGxlQ2xhc3MgZnJvbSBcIi4vRXhhbXBsZUNsYXNzXCI7XG5cbmUgPSBuZXcgRXhhbXBsZUNsYXNzKCk7XG5lLnNheUhlbGxvKCk7Il19
