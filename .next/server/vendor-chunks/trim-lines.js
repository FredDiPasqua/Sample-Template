"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trim-lines";
exports.ids = ["vendor-chunks/trim-lines"];
exports.modules = {

/***/ "(ssr)/./node_modules/trim-lines/index.js":
/*!******************************************!*\
  !*** ./node_modules/trim-lines/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trimLines: () => (/* binding */ trimLines)\n/* harmony export */ });\nconst tab = 9 /* `\\t` */\nconst space = 32 /* ` ` */\n\n/**\n * Remove initial and final spaces and tabs at the line breaks in `value`.\n * Does not trim initial and final spaces and tabs of the value itself.\n *\n * @param {string} value\n *   Value to trim.\n * @returns {string}\n *   Trimmed value.\n */\nfunction trimLines(value) {\n  const source = String(value)\n  const search = /\\r?\\n|\\r/g\n  let match = search.exec(source)\n  let last = 0\n  /** @type {Array<string>} */\n  const lines = []\n\n  while (match) {\n    lines.push(\n      trimLine(source.slice(last, match.index), last > 0, true),\n      match[0]\n    )\n\n    last = match.index + match[0].length\n    match = search.exec(source)\n  }\n\n  lines.push(trimLine(source.slice(last), last > 0, false))\n\n  return lines.join('')\n}\n\n/**\n * @param {string} value\n *   Line to trim.\n * @param {boolean} start\n *   Whether to trim the start of the line.\n * @param {boolean} end\n *   Whether to trim the end of the line.\n * @returns {string}\n *   Trimmed line.\n */\nfunction trimLine(value, start, end) {\n  let startIndex = 0\n  let endIndex = value.length\n\n  if (start) {\n    let code = value.codePointAt(startIndex)\n\n    while (code === tab || code === space) {\n      startIndex++\n      code = value.codePointAt(startIndex)\n    }\n  }\n\n  if (end) {\n    let code = value.codePointAt(endIndex - 1)\n\n    while (code === tab || code === space) {\n      endIndex--\n      code = value.codePointAt(endIndex - 1)\n    }\n  }\n\n  return endIndex > startIndex ? value.slice(startIndex, endIndex) : ''\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHJpbS1saW5lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY29udGVudC1lZGl0b3IvLi9ub2RlX21vZHVsZXMvdHJpbS1saW5lcy9pbmRleC5qcz9jOWI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhYiA9IDkgLyogYFxcdGAgKi9cbmNvbnN0IHNwYWNlID0gMzIgLyogYCBgICovXG5cbi8qKlxuICogUmVtb3ZlIGluaXRpYWwgYW5kIGZpbmFsIHNwYWNlcyBhbmQgdGFicyBhdCB0aGUgbGluZSBicmVha3MgaW4gYHZhbHVlYC5cbiAqIERvZXMgbm90IHRyaW0gaW5pdGlhbCBhbmQgZmluYWwgc3BhY2VzIGFuZCB0YWJzIG9mIHRoZSB2YWx1ZSBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBUcmltbWVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbUxpbmVzKHZhbHVlKSB7XG4gIGNvbnN0IHNvdXJjZSA9IFN0cmluZyh2YWx1ZSlcbiAgY29uc3Qgc2VhcmNoID0gL1xccj9cXG58XFxyL2dcbiAgbGV0IG1hdGNoID0gc2VhcmNoLmV4ZWMoc291cmNlKVxuICBsZXQgbGFzdCA9IDBcbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICBjb25zdCBsaW5lcyA9IFtdXG5cbiAgd2hpbGUgKG1hdGNoKSB7XG4gICAgbGluZXMucHVzaChcbiAgICAgIHRyaW1MaW5lKHNvdXJjZS5zbGljZShsYXN0LCBtYXRjaC5pbmRleCksIGxhc3QgPiAwLCB0cnVlKSxcbiAgICAgIG1hdGNoWzBdXG4gICAgKVxuXG4gICAgbGFzdCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhzb3VyY2UpXG4gIH1cblxuICBsaW5lcy5wdXNoKHRyaW1MaW5lKHNvdXJjZS5zbGljZShsYXN0KSwgbGFzdCA+IDAsIGZhbHNlKSlcblxuICByZXR1cm4gbGluZXMuam9pbignJylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgTGluZSB0byB0cmltLlxuICogQHBhcmFtIHtib29sZWFufSBzdGFydFxuICogICBXaGV0aGVyIHRvIHRyaW0gdGhlIHN0YXJ0IG9mIHRoZSBsaW5lLlxuICogQHBhcmFtIHtib29sZWFufSBlbmRcbiAqICAgV2hldGhlciB0byB0cmltIHRoZSBlbmQgb2YgdGhlIGxpbmUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBUcmltbWVkIGxpbmUuXG4gKi9cbmZ1bmN0aW9uIHRyaW1MaW5lKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGxldCBzdGFydEluZGV4ID0gMFxuICBsZXQgZW5kSW5kZXggPSB2YWx1ZS5sZW5ndGhcblxuICBpZiAoc3RhcnQpIHtcbiAgICBsZXQgY29kZSA9IHZhbHVlLmNvZGVQb2ludEF0KHN0YXJ0SW5kZXgpXG5cbiAgICB3aGlsZSAoY29kZSA9PT0gdGFiIHx8IGNvZGUgPT09IHNwYWNlKSB7XG4gICAgICBzdGFydEluZGV4KytcbiAgICAgIGNvZGUgPSB2YWx1ZS5jb2RlUG9pbnRBdChzdGFydEluZGV4KVxuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICBsZXQgY29kZSA9IHZhbHVlLmNvZGVQb2ludEF0KGVuZEluZGV4IC0gMSlcblxuICAgIHdoaWxlIChjb2RlID09PSB0YWIgfHwgY29kZSA9PT0gc3BhY2UpIHtcbiAgICAgIGVuZEluZGV4LS1cbiAgICAgIGNvZGUgPSB2YWx1ZS5jb2RlUG9pbnRBdChlbmRJbmRleCAtIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuZEluZGV4ID4gc3RhcnRJbmRleCA/IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA6ICcnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/trim-lines/index.js\n");

/***/ })

};
;