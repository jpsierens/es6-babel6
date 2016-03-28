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

// block scope
var e = new _ExampleClass2.default(); // example import

e.sayHello();

},{"./ExampleClass":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvRXhhbXBsZUNsYXNzLmpzIiwiYXBwL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUI7QUFDcEIsVUFEb0IsWUFDcEIsR0FBZTt3QkFESyxjQUNMOztBQUNkLE9BQUssS0FBTCxHQUFhLGFBQWIsQ0FEYztFQUFmOztjQURvQjs7NkJBSVI7QUFDWCxXQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBWixDQURXOzs7O1FBSlE7Ozs7Ozs7O0FDQ3JCOzs7Ozs7O0FBR0EsSUFBSSxJQUFJLDRCQUFKOztBQUNKLEVBQUUsUUFBRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlQ2xhc3Mge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0dGhpcy5oZWxsbyA9IFwiaGVsbG8gd29ybGRcIjtcblx0fVxuXHRzYXlIZWxsbyAoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5oZWxsbyk7XG5cdH1cbn0iLCIvLyBleGFtcGxlIGltcG9ydFxuaW1wb3J0IEV4YW1wbGVDbGFzcyBmcm9tIFwiLi9FeGFtcGxlQ2xhc3NcIjtcblxuLy8gYmxvY2sgc2NvcGVcbmxldCBlID0gbmV3IEV4YW1wbGVDbGFzcygpO1xuZS5zYXlIZWxsbygpOyJdfQ==
