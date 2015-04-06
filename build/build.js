(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.iterate = iterate;
'use strict';

var obj = {
  key1: 'value of key1',
  key2: 'value of key2',
  key3: 'value of key3'
};

function iterate() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      console.log(key, '->', obj[key]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

},{}],2:[function(require,module,exports){
'use strict';

var _iterate = require('./iterate_object');

window.onload = function () {

  _iterate.iterate();
};

},{"./iterate_object":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9lczYvanMvaXRlcmF0ZV9vYmplY3QuanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9lczYvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDU2dCLE9BQU8sR0FBUCxPQUFPO0FBVHZCLFlBQVksQ0FBQzs7QUFFYixJQUFJLEdBQUcsR0FBRztBQUNSLFFBQVEsZUFBZTtBQUN2QixRQUFRLGVBQWU7QUFDdkIsUUFBUSxlQUFlO0NBQ3hCLENBQUM7O0FBR0ssU0FBUyxPQUFPLEdBQUU7Ozs7Ozs7QUFFdkIseUJBQWUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7VUFBdkIsR0FBRzs7QUFDVCxhQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDbEM7Ozs7Ozs7Ozs7Ozs7OztDQUNGOzs7QUNkRCxZQUFZLENBQUM7O3VCQUVTLGtCQUFrQjs7QUFFeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFXOztBQUV6QixXQUpNLE9BQU8sRUFJSixDQUFDO0NBRVgsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmxldCBvYmogPSB7XG4gICdrZXkxJzogJ3ZhbHVlIG9mIGtleTEnLFxuICAna2V5Mic6ICd2YWx1ZSBvZiBrZXkyJyxcbiAgJ2tleTMnOiAndmFsdWUgb2Yga2V5Mydcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZXJhdGUoKXtcblxuICBmb3IobGV0IGtleSBvZiBPYmplY3Qua2V5cyhvYmopKXtcbiAgICBjb25zb2xlLmxvZyhrZXksICctPicsIG9ialtrZXldKTtcbiAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aXRlcmF0ZX0gZnJvbSAnLi9pdGVyYXRlX29iamVjdCc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICBpdGVyYXRlKCk7XG5cbn07Il19
