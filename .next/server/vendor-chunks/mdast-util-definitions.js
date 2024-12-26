"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-definitions";
exports.ids = ["vendor-chunks/mdast-util-definitions"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-definitions/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdast-util-definitions/lib/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   definitions: () => (/* binding */ definitions)\n/* harmony export */ });\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast').Content} Content\n * @typedef {import('mdast').Definition} Definition\n */\n\n/**\n * @typedef {Root | Content} Node\n *\n * @callback GetDefinition\n *   Get a definition by identifier.\n * @param {string | null | undefined} [identifier]\n *   Identifier of definition.\n * @returns {Definition | null}\n *   Definition corresponding to `identifier` or `null`.\n */\n\n\n\nconst own = {}.hasOwnProperty\n\n/**\n * Find definitions in `tree`.\n *\n * Uses CommonMark precedence, which means that earlier definitions are\n * preferred over duplicate later definitions.\n *\n * @param {Node} tree\n *   Tree to check.\n * @returns {GetDefinition}\n *   Getter.\n */\nfunction definitions(tree) {\n  /** @type {Record<string, Definition>} */\n  const cache = Object.create(null)\n\n  if (!tree || !tree.type) {\n    throw new Error('mdast-util-definitions expected node')\n  }\n\n  (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, 'definition', (definition) => {\n    const id = clean(definition.identifier)\n    if (id && !own.call(cache, id)) {\n      cache[id] = definition\n    }\n  })\n\n  return definition\n\n  /** @type {GetDefinition} */\n  function definition(identifier) {\n    const id = clean(identifier)\n    // To do: next major: return `undefined` when not found.\n    return id && own.call(cache, id) ? cache[id] : null\n  }\n}\n\n/**\n * @param {string | null | undefined} [value]\n * @returns {string}\n */\nfunction clean(value) {\n  return String(value || '').toUpperCase()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1kZWZpbml0aW9ucy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsNEJBQTRCO0FBQ3pDOztBQUVBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFc0M7O0FBRXRDLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGFBQWEsNEJBQTRCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHVEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jb250ZW50LWVkaXRvci8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWRlZmluaXRpb25zL2xpYi9pbmRleC5qcz84NTI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkNvbnRlbnR9IENvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuRGVmaW5pdGlvbn0gRGVmaW5pdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1Jvb3QgfCBDb250ZW50fSBOb2RlXG4gKlxuICogQGNhbGxiYWNrIEdldERlZmluaXRpb25cbiAqICAgR2V0IGEgZGVmaW5pdGlvbiBieSBpZGVudGlmaWVyLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbaWRlbnRpZmllcl1cbiAqICAgSWRlbnRpZmllciBvZiBkZWZpbml0aW9uLlxuICogQHJldHVybnMge0RlZmluaXRpb24gfCBudWxsfVxuICogICBEZWZpbml0aW9uIGNvcnJlc3BvbmRpbmcgdG8gYGlkZW50aWZpZXJgIG9yIGBudWxsYC5cbiAqL1xuXG5pbXBvcnQge3Zpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIEZpbmQgZGVmaW5pdGlvbnMgaW4gYHRyZWVgLlxuICpcbiAqIFVzZXMgQ29tbW9uTWFyayBwcmVjZWRlbmNlLCB3aGljaCBtZWFucyB0aGF0IGVhcmxpZXIgZGVmaW5pdGlvbnMgYXJlXG4gKiBwcmVmZXJyZWQgb3ZlciBkdXBsaWNhdGUgbGF0ZXIgZGVmaW5pdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gKiAgIFRyZWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7R2V0RGVmaW5pdGlvbn1cbiAqICAgR2V0dGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5pdGlvbnModHJlZSkge1xuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIERlZmluaXRpb24+fSAqL1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBpZiAoIXRyZWUgfHwgIXRyZWUudHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWRhc3QtdXRpbC1kZWZpbml0aW9ucyBleHBlY3RlZCBub2RlJylcbiAgfVxuXG4gIHZpc2l0KHRyZWUsICdkZWZpbml0aW9uJywgKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBpZCA9IGNsZWFuKGRlZmluaXRpb24uaWRlbnRpZmllcilcbiAgICBpZiAoaWQgJiYgIW93bi5jYWxsKGNhY2hlLCBpZCkpIHtcbiAgICAgIGNhY2hlW2lkXSA9IGRlZmluaXRpb25cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGRlZmluaXRpb25cblxuICAvKiogQHR5cGUge0dldERlZmluaXRpb259ICovXG4gIGZ1bmN0aW9uIGRlZmluaXRpb24oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkID0gY2xlYW4oaWRlbnRpZmllcilcbiAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogcmV0dXJuIGB1bmRlZmluZWRgIHdoZW4gbm90IGZvdW5kLlxuICAgIHJldHVybiBpZCAmJiBvd24uY2FsbChjYWNoZSwgaWQpID8gY2FjaGVbaWRdIDogbnVsbFxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjbGVhbih2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlIHx8ICcnKS50b1VwcGVyQ2FzZSgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-definitions/lib/index.js\n");

/***/ })

};
;