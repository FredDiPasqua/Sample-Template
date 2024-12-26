"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-math";
exports.ids = ["vendor-chunks/mdast-util-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-math/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/mdast-util-math/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mathFromMarkdown: () => (/* binding */ mathFromMarkdown),\n/* harmony export */   mathToMarkdown: () => (/* binding */ mathToMarkdown)\n/* harmony export */ });\n/* harmony import */ var longest_streak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! longest-streak */ \"(ssr)/./node_modules/longest-streak/index.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_util_safe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/safe.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/safe.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/track.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/track.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_util_pattern_compile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/pattern-compile.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js\");\n/**\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('../index.js').Math} Math\n * @typedef {import('../index.js').InlineMath} InlineMath\n *\n * @typedef ToOptions\n *   Configuration.\n * @property {boolean | null | undefined} [singleDollarTextMath=true]\n *   Whether to support math (text) with a single dollar.\n *\n *   Single dollars work in Pandoc and many other places, but often interfere\n *   with “normal” dollars in text.\n *   If you turn this off, you can still use two or more dollars for text math.\n */\n\n\n\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown`.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */\nfunction mathFromMarkdown() {\n  return {\n    enter: {\n      mathFlow: enterMathFlow,\n      mathFlowFenceMeta: enterMathFlowMeta,\n      mathText: enterMathText\n    },\n    exit: {\n      mathFlow: exitMathFlow,\n      mathFlowFence: exitMathFlowFence,\n      mathFlowFenceMeta: exitMathFlowMeta,\n      mathFlowValue: exitMathData,\n      mathText: exitMathText,\n      mathTextData: exitMathData\n    }\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function enterMathFlow(token) {\n    this.enter(\n      {\n        type: 'math',\n        meta: null,\n        value: '',\n        data: {\n          hName: 'div',\n          hProperties: {className: ['math', 'math-display']},\n          hChildren: [{type: 'text', value: ''}]\n        }\n      },\n      token\n    )\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function enterMathFlowMeta() {\n    this.buffer()\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathFlowMeta() {\n    const data = this.resume()\n    const node = /** @type {Math} */ (this.stack[this.stack.length - 1])\n    node.meta = data\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathFlowFence() {\n    // Exit if this is the closing fence.\n    if (this.getData('mathFlowInside')) return\n    this.buffer()\n    this.setData('mathFlowInside', true)\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathFlow(token) {\n    const data = this.resume().replace(/^(\\r?\\n|\\r)|(\\r?\\n|\\r)$/g, '')\n    const node = /** @type {Math} */ (this.exit(token))\n    node.value = data\n    // @ts-expect-error: we defined it.\n    node.data.hChildren[0].value = data\n    this.setData('mathFlowInside')\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function enterMathText(token) {\n    this.enter(\n      {\n        type: 'inlineMath',\n        value: '',\n        data: {\n          hName: 'span',\n          hProperties: {className: ['math', 'math-inline']},\n          hChildren: [{type: 'text', value: ''}]\n        }\n      },\n      token\n    )\n    this.buffer()\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathText(token) {\n    const data = this.resume()\n    const node = /** @type {Math} */ (this.exit(token))\n    node.value = data\n    // @ts-expect-error: we defined it.\n    node.data.hChildren[0].value = data\n  }\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function exitMathData(token) {\n    this.config.enter.data.call(this, token)\n    this.config.exit.data.call(this, token)\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown`.\n *\n * @param {ToOptions | null | undefined} [options]\n *   Configuration.\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */\nfunction mathToMarkdown(options) {\n  let single = (options || {}).singleDollarTextMath\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  inlineMath.peek = inlineMathPeek\n\n  return {\n    unsafe: [\n      {character: '\\r', inConstruct: 'mathFlowMeta'},\n      {character: '\\n', inConstruct: 'mathFlowMeta'},\n      {\n        character: '$',\n        after: single ? undefined : '\\\\$',\n        inConstruct: 'phrasing'\n      },\n      {character: '$', inConstruct: 'mathFlowMeta'},\n      {atBreak: true, character: '$', after: '\\\\$'}\n    ],\n    handlers: {math, inlineMath}\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {Math} node\n   */\n  // To do: next major: rename `context` to state, `safeOptions` to info.\n  // Note: fixing this code? Please also fix the similar code for code:\n  // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/code.js>\n  function math(node, _, context, safeOptions) {\n    const raw = node.value || ''\n    const tracker = (0,mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__.track)(safeOptions)\n    const sequence = '$'.repeat(Math.max((0,longest_streak__WEBPACK_IMPORTED_MODULE_1__.longestStreak)(raw, '$') + 1, 2))\n    const exit = context.enter('mathFlow')\n    let value = tracker.move(sequence)\n\n    if (node.meta) {\n      const subexit = context.enter('mathFlowMeta')\n      value += tracker.move(\n        (0,mdast_util_to_markdown_lib_util_safe_js__WEBPACK_IMPORTED_MODULE_2__.safe)(context, node.meta, {\n          before: value,\n          after: '\\n',\n          encode: ['$'],\n          ...tracker.current()\n        })\n      )\n      subexit()\n    }\n\n    value += tracker.move('\\n')\n\n    if (raw) {\n      value += tracker.move(raw + '\\n')\n    }\n\n    value += tracker.move(sequence)\n    exit()\n    return value\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineMath} node\n   */\n  // Note: fixing this code? Please also fix the similar code for inline code:\n  // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/inline-code.js>\n  //\n  // To do: next major: rename `context` to state.\n  // To do: next major: use `state` (`safe`, `track`, `patternCompile`).\n  function inlineMath(node, _, context) {\n    let value = node.value || ''\n    let size = 1\n\n    if (!single) size++\n\n    // If there is a single dollar sign on its own in the math, use a fence of\n    // two.\n    // If there are two in a row, use one.\n    while (\n      new RegExp('(^|[^$])' + '\\\\$'.repeat(size) + '([^$]|$)').test(value)\n    ) {\n      size++\n    }\n\n    const sequence = '$'.repeat(size)\n\n    // If this is not just spaces or eols (tabs don’t count), and either the\n    // first and last character are a space or eol, or the first or last\n    // character are dollar signs, then pad with spaces.\n    if (\n      // Contains non-space.\n      /[^ \\r\\n]/.test(value) &&\n      // Starts with space and ends with space.\n      ((/^[ \\r\\n]/.test(value) && /[ \\r\\n]$/.test(value)) ||\n        // Starts or ends with dollar.\n        /^\\$|\\$$/.test(value))\n    ) {\n      value = ' ' + value + ' '\n    }\n\n    let index = -1\n\n    // We have a potential problem: certain characters after eols could result in\n    // blocks being seen.\n    // For example, if someone injected the string `'\\n# b'`, then that would\n    // result in an ATX heading.\n    // We can’t escape characters in `inlineMath`, but because eols are\n    // transformed to spaces when going from markdown to HTML anyway, we can swap\n    // them out.\n    while (++index < context.unsafe.length) {\n      const pattern = context.unsafe[index]\n      const expression = (0,mdast_util_to_markdown_lib_util_pattern_compile_js__WEBPACK_IMPORTED_MODULE_3__.patternCompile)(pattern)\n      /** @type {RegExpExecArray | null} */\n      let match\n\n      // Only look for `atBreak`s.\n      // Btw: note that `atBreak` patterns will always start the regex at LF or\n      // CR.\n      if (!pattern.atBreak) continue\n\n      while ((match = expression.exec(value))) {\n        let position = match.index\n\n        // Support CRLF (patterns only look for one of the characters).\n        if (\n          value.codePointAt(position) === 10 /* `\\n` */ &&\n          value.codePointAt(position - 1) === 13 /* `\\r` */\n        ) {\n          position--\n        }\n\n        value = value.slice(0, position) + ' ' + value.slice(match.index + 1)\n      }\n    }\n\n    return sequence + value + sequence\n  }\n\n  /**\n   * @returns {string}\n   */\n  function inlineMathPeek() {\n    return '$'\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tYXRoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsMENBQTBDO0FBQ3ZELGFBQWEseUNBQXlDO0FBQ3RELGFBQWEsNEJBQTRCO0FBQ3pDLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEM7QUFDZ0I7QUFDRTtBQUNtQjs7QUFFakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0NBQW9DO0FBQzVELHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNELHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU8sNkNBQTZDO0FBQ3BELE9BQU8sNkNBQTZDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU8sNENBQTRDO0FBQ25ELE9BQU87QUFDUDtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtFQUFLO0FBQ3pCLHlDQUF5Qyw2REFBYTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0dBQWM7QUFDdkMsaUJBQWlCLHdCQUF3QjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jb250ZW50LWVkaXRvci8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLW1hdGgvbGliL2luZGV4LmpzPzQ4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk9wdGlvbnN9IFRvTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2luZGV4LmpzJykuTWF0aH0gTWF0aFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW5kZXguanMnKS5JbmxpbmVNYXRofSBJbmxpbmVNYXRoXG4gKlxuICogQHR5cGVkZWYgVG9PcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbc2luZ2xlRG9sbGFyVGV4dE1hdGg9dHJ1ZV1cbiAqICAgV2hldGhlciB0byBzdXBwb3J0IG1hdGggKHRleHQpIHdpdGggYSBzaW5nbGUgZG9sbGFyLlxuICpcbiAqICAgU2luZ2xlIGRvbGxhcnMgd29yayBpbiBQYW5kb2MgYW5kIG1hbnkgb3RoZXIgcGxhY2VzLCBidXQgb2Z0ZW4gaW50ZXJmZXJlXG4gKiAgIHdpdGgg4oCcbm9ybWFs4oCdIGRvbGxhcnMgaW4gdGV4dC5cbiAqICAgSWYgeW91IHR1cm4gdGhpcyBvZmYsIHlvdSBjYW4gc3RpbGwgdXNlIHR3byBvciBtb3JlIGRvbGxhcnMgZm9yIHRleHQgbWF0aC5cbiAqL1xuXG5pbXBvcnQge2xvbmdlc3RTdHJlYWt9IGZyb20gJ2xvbmdlc3Qtc3RyZWFrJ1xuaW1wb3J0IHtzYWZlfSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3NhZmUuanMnXG5pbXBvcnQge3RyYWNrfSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3RyYWNrLmpzJ1xuaW1wb3J0IHtwYXR0ZXJuQ29tcGlsZX0gZnJvbSAnbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9wYXR0ZXJuLWNvbXBpbGUuanMnXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAuXG4gKlxuICogQHJldHVybnMge0Zyb21NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGhGcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHtcbiAgICAgIG1hdGhGbG93OiBlbnRlck1hdGhGbG93LFxuICAgICAgbWF0aEZsb3dGZW5jZU1ldGE6IGVudGVyTWF0aEZsb3dNZXRhLFxuICAgICAgbWF0aFRleHQ6IGVudGVyTWF0aFRleHRcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgIG1hdGhGbG93OiBleGl0TWF0aEZsb3csXG4gICAgICBtYXRoRmxvd0ZlbmNlOiBleGl0TWF0aEZsb3dGZW5jZSxcbiAgICAgIG1hdGhGbG93RmVuY2VNZXRhOiBleGl0TWF0aEZsb3dNZXRhLFxuICAgICAgbWF0aEZsb3dWYWx1ZTogZXhpdE1hdGhEYXRhLFxuICAgICAgbWF0aFRleHQ6IGV4aXRNYXRoVGV4dCxcbiAgICAgIG1hdGhUZXh0RGF0YTogZXhpdE1hdGhEYXRhXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVudGVyTWF0aEZsb3codG9rZW4pIHtcbiAgICB0aGlzLmVudGVyKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWF0aCcsXG4gICAgICAgIG1ldGE6IG51bGwsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGhOYW1lOiAnZGl2JyxcbiAgICAgICAgICBoUHJvcGVydGllczoge2NsYXNzTmFtZTogWydtYXRoJywgJ21hdGgtZGlzcGxheSddfSxcbiAgICAgICAgICBoQ2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogJyd9XVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW50ZXJNYXRoRmxvd01ldGEoKSB7XG4gICAgdGhpcy5idWZmZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoRmxvd01ldGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gLyoqIEB0eXBlIHtNYXRofSAqLyAodGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdKVxuICAgIG5vZGUubWV0YSA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBleGl0TWF0aEZsb3dGZW5jZSgpIHtcbiAgICAvLyBFeGl0IGlmIHRoaXMgaXMgdGhlIGNsb3NpbmcgZmVuY2UuXG4gICAgaWYgKHRoaXMuZ2V0RGF0YSgnbWF0aEZsb3dJbnNpZGUnKSkgcmV0dXJuXG4gICAgdGhpcy5idWZmZXIoKVxuICAgIHRoaXMuc2V0RGF0YSgnbWF0aEZsb3dJbnNpZGUnLCB0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoRmxvdyh0b2tlbikge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpLnJlcGxhY2UoL14oXFxyP1xcbnxcXHIpfChcXHI/XFxufFxccikkL2csICcnKVxuICAgIGNvbnN0IG5vZGUgPSAvKiogQHR5cGUge01hdGh9ICovICh0aGlzLmV4aXQodG9rZW4pKVxuICAgIG5vZGUudmFsdWUgPSBkYXRhXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogd2UgZGVmaW5lZCBpdC5cbiAgICBub2RlLmRhdGEuaENoaWxkcmVuWzBdLnZhbHVlID0gZGF0YVxuICAgIHRoaXMuc2V0RGF0YSgnbWF0aEZsb3dJbnNpZGUnKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVudGVyTWF0aFRleHQodG9rZW4pIHtcbiAgICB0aGlzLmVudGVyKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5saW5lTWF0aCcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGhOYW1lOiAnc3BhbicsXG4gICAgICAgICAgaFByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnbWF0aCcsICdtYXRoLWlubGluZSddfSxcbiAgICAgICAgICBoQ2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogJyd9XVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5cbiAgICApXG4gICAgdGhpcy5idWZmZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoVGV4dCh0b2tlbikge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IC8qKiBAdHlwZSB7TWF0aH0gKi8gKHRoaXMuZXhpdCh0b2tlbikpXG4gICAgbm9kZS52YWx1ZSA9IGRhdGFcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBkZWZpbmVkIGl0LlxuICAgIG5vZGUuZGF0YS5oQ2hpbGRyZW5bMF0udmFsdWUgPSBkYXRhXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdE1hdGhEYXRhKHRva2VuKSB7XG4gICAgdGhpcy5jb25maWcuZW50ZXIuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIHRoaXMuY29uZmlnLmV4aXQuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gLlxuICpcbiAqIEBwYXJhbSB7VG9PcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRoVG9NYXJrZG93bihvcHRpb25zKSB7XG4gIGxldCBzaW5nbGUgPSAob3B0aW9ucyB8fCB7fSkuc2luZ2xlRG9sbGFyVGV4dE1hdGhcblxuICBpZiAoc2luZ2xlID09PSBudWxsIHx8IHNpbmdsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2luZ2xlID0gdHJ1ZVxuICB9XG5cbiAgaW5saW5lTWF0aC5wZWVrID0gaW5saW5lTWF0aFBlZWtcblxuICByZXR1cm4ge1xuICAgIHVuc2FmZTogW1xuICAgICAge2NoYXJhY3RlcjogJ1xccicsIGluQ29uc3RydWN0OiAnbWF0aEZsb3dNZXRhJ30sXG4gICAgICB7Y2hhcmFjdGVyOiAnXFxuJywgaW5Db25zdHJ1Y3Q6ICdtYXRoRmxvd01ldGEnfSxcbiAgICAgIHtcbiAgICAgICAgY2hhcmFjdGVyOiAnJCcsXG4gICAgICAgIGFmdGVyOiBzaW5nbGUgPyB1bmRlZmluZWQgOiAnXFxcXCQnLFxuICAgICAgICBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ1xuICAgICAgfSxcbiAgICAgIHtjaGFyYWN0ZXI6ICckJywgaW5Db25zdHJ1Y3Q6ICdtYXRoRmxvd01ldGEnfSxcbiAgICAgIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICckJywgYWZ0ZXI6ICdcXFxcJCd9XG4gICAgXSxcbiAgICBoYW5kbGVyczoge21hdGgsIGlubGluZU1hdGh9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7TWF0aH0gbm9kZVxuICAgKi9cbiAgLy8gVG8gZG86IG5leHQgbWFqb3I6IHJlbmFtZSBgY29udGV4dGAgdG8gc3RhdGUsIGBzYWZlT3B0aW9uc2AgdG8gaW5mby5cbiAgLy8gTm90ZTogZml4aW5nIHRoaXMgY29kZT8gUGxlYXNlIGFsc28gZml4IHRoZSBzaW1pbGFyIGNvZGUgZm9yIGNvZGU6XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9ibG9iL21haW4vbGliL2hhbmRsZS9jb2RlLmpzPlxuICBmdW5jdGlvbiBtYXRoKG5vZGUsIF8sIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gICAgY29uc3QgcmF3ID0gbm9kZS52YWx1ZSB8fCAnJ1xuICAgIGNvbnN0IHRyYWNrZXIgPSB0cmFjayhzYWZlT3B0aW9ucylcbiAgICBjb25zdCBzZXF1ZW5jZSA9ICckJy5yZXBlYXQoTWF0aC5tYXgobG9uZ2VzdFN0cmVhayhyYXcsICckJykgKyAxLCAyKSlcbiAgICBjb25zdCBleGl0ID0gY29udGV4dC5lbnRlcignbWF0aEZsb3cnKVxuICAgIGxldCB2YWx1ZSA9IHRyYWNrZXIubW92ZShzZXF1ZW5jZSlcblxuICAgIGlmIChub2RlLm1ldGEpIHtcbiAgICAgIGNvbnN0IHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCdtYXRoRmxvd01ldGEnKVxuICAgICAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKFxuICAgICAgICBzYWZlKGNvbnRleHQsIG5vZGUubWV0YSwge1xuICAgICAgICAgIGJlZm9yZTogdmFsdWUsXG4gICAgICAgICAgYWZ0ZXI6ICdcXG4nLFxuICAgICAgICAgIGVuY29kZTogWyckJ10sXG4gICAgICAgICAgLi4udHJhY2tlci5jdXJyZW50KClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIHN1YmV4aXQoKVxuICAgIH1cblxuICAgIHZhbHVlICs9IHRyYWNrZXIubW92ZSgnXFxuJylcblxuICAgIGlmIChyYXcpIHtcbiAgICAgIHZhbHVlICs9IHRyYWNrZXIubW92ZShyYXcgKyAnXFxuJylcbiAgICB9XG5cbiAgICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoc2VxdWVuY2UpXG4gICAgZXhpdCgpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7SW5saW5lTWF0aH0gbm9kZVxuICAgKi9cbiAgLy8gTm90ZTogZml4aW5nIHRoaXMgY29kZT8gUGxlYXNlIGFsc28gZml4IHRoZSBzaW1pbGFyIGNvZGUgZm9yIGlubGluZSBjb2RlOlxuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vYmxvYi9tYWluL2xpYi9oYW5kbGUvaW5saW5lLWNvZGUuanM+XG4gIC8vXG4gIC8vIFRvIGRvOiBuZXh0IG1ham9yOiByZW5hbWUgYGNvbnRleHRgIHRvIHN0YXRlLlxuICAvLyBUbyBkbzogbmV4dCBtYWpvcjogdXNlIGBzdGF0ZWAgKGBzYWZlYCwgYHRyYWNrYCwgYHBhdHRlcm5Db21waWxlYCkuXG4gIGZ1bmN0aW9uIGlubGluZU1hdGgobm9kZSwgXywgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG5vZGUudmFsdWUgfHwgJydcbiAgICBsZXQgc2l6ZSA9IDFcblxuICAgIGlmICghc2luZ2xlKSBzaXplKytcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2luZ2xlIGRvbGxhciBzaWduIG9uIGl0cyBvd24gaW4gdGhlIG1hdGgsIHVzZSBhIGZlbmNlIG9mXG4gICAgLy8gdHdvLlxuICAgIC8vIElmIHRoZXJlIGFyZSB0d28gaW4gYSByb3csIHVzZSBvbmUuXG4gICAgd2hpbGUgKFxuICAgICAgbmV3IFJlZ0V4cCgnKF58W14kXSknICsgJ1xcXFwkJy5yZXBlYXQoc2l6ZSkgKyAnKFteJF18JCknKS50ZXN0KHZhbHVlKVxuICAgICkge1xuICAgICAgc2l6ZSsrXG4gICAgfVxuXG4gICAgY29uc3Qgc2VxdWVuY2UgPSAnJCcucmVwZWF0KHNpemUpXG5cbiAgICAvLyBJZiB0aGlzIGlzIG5vdCBqdXN0IHNwYWNlcyBvciBlb2xzICh0YWJzIGRvbuKAmXQgY291bnQpLCBhbmQgZWl0aGVyIHRoZVxuICAgIC8vIGZpcnN0IGFuZCBsYXN0IGNoYXJhY3RlciBhcmUgYSBzcGFjZSBvciBlb2wsIG9yIHRoZSBmaXJzdCBvciBsYXN0XG4gICAgLy8gY2hhcmFjdGVyIGFyZSBkb2xsYXIgc2lnbnMsIHRoZW4gcGFkIHdpdGggc3BhY2VzLlxuICAgIGlmIChcbiAgICAgIC8vIENvbnRhaW5zIG5vbi1zcGFjZS5cbiAgICAgIC9bXiBcXHJcXG5dLy50ZXN0KHZhbHVlKSAmJlxuICAgICAgLy8gU3RhcnRzIHdpdGggc3BhY2UgYW5kIGVuZHMgd2l0aCBzcGFjZS5cbiAgICAgICgoL15bIFxcclxcbl0vLnRlc3QodmFsdWUpICYmIC9bIFxcclxcbl0kLy50ZXN0KHZhbHVlKSkgfHxcbiAgICAgICAgLy8gU3RhcnRzIG9yIGVuZHMgd2l0aCBkb2xsYXIuXG4gICAgICAgIC9eXFwkfFxcJCQvLnRlc3QodmFsdWUpKVxuICAgICkge1xuICAgICAgdmFsdWUgPSAnICcgKyB2YWx1ZSArICcgJ1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICAvLyBXZSBoYXZlIGEgcG90ZW50aWFsIHByb2JsZW06IGNlcnRhaW4gY2hhcmFjdGVycyBhZnRlciBlb2xzIGNvdWxkIHJlc3VsdCBpblxuICAgIC8vIGJsb2NrcyBiZWluZyBzZWVuLlxuICAgIC8vIEZvciBleGFtcGxlLCBpZiBzb21lb25lIGluamVjdGVkIHRoZSBzdHJpbmcgYCdcXG4jIGInYCwgdGhlbiB0aGF0IHdvdWxkXG4gICAgLy8gcmVzdWx0IGluIGFuIEFUWCBoZWFkaW5nLlxuICAgIC8vIFdlIGNhbuKAmXQgZXNjYXBlIGNoYXJhY3RlcnMgaW4gYGlubGluZU1hdGhgLCBidXQgYmVjYXVzZSBlb2xzIGFyZVxuICAgIC8vIHRyYW5zZm9ybWVkIHRvIHNwYWNlcyB3aGVuIGdvaW5nIGZyb20gbWFya2Rvd24gdG8gSFRNTCBhbnl3YXksIHdlIGNhbiBzd2FwXG4gICAgLy8gdGhlbSBvdXQuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjb250ZXh0LnVuc2FmZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LnVuc2FmZVtpbmRleF1cbiAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXR0ZXJuQ29tcGlsZShwYXR0ZXJuKVxuICAgICAgLyoqIEB0eXBlIHtSZWdFeHBFeGVjQXJyYXkgfCBudWxsfSAqL1xuICAgICAgbGV0IG1hdGNoXG5cbiAgICAgIC8vIE9ubHkgbG9vayBmb3IgYGF0QnJlYWtgcy5cbiAgICAgIC8vIEJ0dzogbm90ZSB0aGF0IGBhdEJyZWFrYCBwYXR0ZXJucyB3aWxsIGFsd2F5cyBzdGFydCB0aGUgcmVnZXggYXQgTEYgb3JcbiAgICAgIC8vIENSLlxuICAgICAgaWYgKCFwYXR0ZXJuLmF0QnJlYWspIGNvbnRpbnVlXG5cbiAgICAgIHdoaWxlICgobWF0Y2ggPSBleHByZXNzaW9uLmV4ZWModmFsdWUpKSkge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBtYXRjaC5pbmRleFxuXG4gICAgICAgIC8vIFN1cHBvcnQgQ1JMRiAocGF0dGVybnMgb25seSBsb29rIGZvciBvbmUgb2YgdGhlIGNoYXJhY3RlcnMpLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuY29kZVBvaW50QXQocG9zaXRpb24pID09PSAxMCAvKiBgXFxuYCAqLyAmJlxuICAgICAgICAgIHZhbHVlLmNvZGVQb2ludEF0KHBvc2l0aW9uIC0gMSkgPT09IDEzIC8qIGBcXHJgICovXG4gICAgICAgICkge1xuICAgICAgICAgIHBvc2l0aW9uLS1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgcG9zaXRpb24pICsgJyAnICsgdmFsdWUuc2xpY2UobWF0Y2guaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXF1ZW5jZSArIHZhbHVlICsgc2VxdWVuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gaW5saW5lTWF0aFBlZWsoKSB7XG4gICAgcmV0dXJuICckJ1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-math/lib/index.js\n");

/***/ })

};
;