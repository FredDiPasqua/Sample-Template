"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-character";
exports.ids = ["vendor-chunks/micromark-util-character"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-character/dev/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-character/dev/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asciiAlpha: () => (/* binding */ asciiAlpha),\n/* harmony export */   asciiAlphanumeric: () => (/* binding */ asciiAlphanumeric),\n/* harmony export */   asciiAtext: () => (/* binding */ asciiAtext),\n/* harmony export */   asciiControl: () => (/* binding */ asciiControl),\n/* harmony export */   asciiDigit: () => (/* binding */ asciiDigit),\n/* harmony export */   asciiHexDigit: () => (/* binding */ asciiHexDigit),\n/* harmony export */   asciiPunctuation: () => (/* binding */ asciiPunctuation),\n/* harmony export */   markdownLineEnding: () => (/* binding */ markdownLineEnding),\n/* harmony export */   markdownLineEndingOrSpace: () => (/* binding */ markdownLineEndingOrSpace),\n/* harmony export */   markdownSpace: () => (/* binding */ markdownSpace),\n/* harmony export */   unicodePunctuation: () => (/* binding */ unicodePunctuation),\n/* harmony export */   unicodeWhitespace: () => (/* binding */ unicodeWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var _lib_unicode_punctuation_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/unicode-punctuation-regex.js */ \"(ssr)/./node_modules/micromark-util-character/dev/lib/unicode-punctuation-regex.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n */\n\n\n\n\n/**\n * Check whether the character code represents an ASCII alpha (`a` through `z`,\n * case insensitive).\n *\n * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.\n *\n * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)\n * to U+005A (`Z`).\n *\n * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)\n * to U+007A (`z`).\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst asciiAlpha = regexCheck(/[A-Za-z]/)\n\n/**\n * Check whether the character code represents an ASCII alphanumeric (`a`\n * through `z`, case insensitive, or `0` through `9`).\n *\n * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha\n * (see `asciiAlpha`).\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst asciiAlphanumeric = regexCheck(/[\\dA-Za-z]/)\n\n/**\n * Check whether the character code represents an ASCII atext.\n *\n * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in\n * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),\n * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F\n * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E\n * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE\n * (`{`) to U+007E TILDE (`~`).\n *\n * See:\n * **\\[RFC5322]**:\n * [Internet Message Format](https://tools.ietf.org/html/rfc5322).\n * P. Resnick.\n * IETF.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst asciiAtext = regexCheck(/[#-'*+\\--9=?A-Z^-~]/)\n\n/**\n * Check whether a character code is an ASCII control character.\n *\n * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)\n * to U+001F (US), or U+007F (DEL).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction asciiControl(code) {\n  return (\n    // Special whitespace codes (which have negative values), C0 and Control\n    // character DEL\n    code !== null && (code < micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.del)\n  )\n}\n\n/**\n * Check whether the character code represents an ASCII digit (`0` through `9`).\n *\n * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to\n * U+0039 (`9`).\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst asciiDigit = regexCheck(/\\d/)\n\n/**\n * Check whether the character code represents an ASCII hex digit (`a` through\n * `f`, case insensitive, or `0` through `9`).\n *\n * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex\n * digit, or an ASCII lower hex digit.\n *\n * An **ASCII upper hex digit** is a character in the inclusive range U+0041\n * (`A`) to U+0046 (`F`).\n *\n * An **ASCII lower hex digit** is a character in the inclusive range U+0061\n * (`a`) to U+0066 (`f`).\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst asciiHexDigit = regexCheck(/[\\dA-Fa-f]/)\n\n/**\n * Check whether the character code represents ASCII punctuation.\n *\n * An **ASCII punctuation** is a character in the inclusive ranges U+0021\n * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT\n * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT\n * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)\n\n/**\n * Check whether a character code is a markdown line ending.\n *\n * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN\n * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).\n *\n * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE\n * RETURN (CR) are replaced by these virtual characters depending on whether\n * they occurred together.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownLineEnding(code) {\n  return code !== null && code < micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab\n}\n\n/**\n * Check whether a character code is a markdown line ending (see\n * `markdownLineEnding`) or markdown space (see `markdownSpace`).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownLineEndingOrSpace(code) {\n  return code !== null && (code < micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.nul || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.space)\n}\n\n/**\n * Check whether a character code is a markdown space.\n *\n * A **markdown space** is the concrete character U+0020 SPACE (SP) and the\n * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).\n *\n * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is\n * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL\n * SPACE (VS) characters, depending on the column at which the tab occurred.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownSpace(code) {\n  return (\n    code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab ||\n    code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace ||\n    code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.space\n  )\n}\n\n// Size note: removing ASCII from the regex and using `asciiPunctuation` here\n// In fact adds to the bundle size.\n/**\n * Check whether the character code represents Unicode punctuation.\n *\n * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,\n * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`\n * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`\n * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII\n * punctuation (see `asciiPunctuation`).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst unicodePunctuation = regexCheck(_lib_unicode_punctuation_regex_js__WEBPACK_IMPORTED_MODULE_1__.unicodePunctuationRegex)\n\n/**\n * Check whether the character code represents Unicode whitespace.\n *\n * Note that this does handle micromark specific markdown whitespace characters.\n * See `markdownLineEndingOrSpace` to check that.\n *\n * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,\n * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),\n * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\\[UNICODE]**).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst unicodeWhitespace = regexCheck(/\\s/)\n\n/**\n * Create a code check from a regex.\n *\n * @param {RegExp} regex\n * @returns {(code: Code) => boolean}\n */\nfunction regexCheck(regex) {\n  return check\n\n  /**\n   * Check whether a code matches the bound regex.\n   *\n   * @param {Code} code\n   *   Character code.\n   * @returns {boolean}\n   *   Whether the character code matches the bound regex.\n   */\n  function check(code) {\n    return code !== null && regex.test(String.fromCharCode(code))\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7O0FBRW9EO0FBQ3NCOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlFQUFLLG1CQUFtQixpRUFBSztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0RBQWdEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsaUVBQUs7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDLGlFQUFLLGlCQUFpQixpRUFBSztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsaUVBQUs7QUFDbEIsYUFBYSxpRUFBSztBQUNsQixhQUFhLGlFQUFLO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sc0NBQXNDLHNGQUF1Qjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jb250ZW50LWVkaXRvci8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jaGFyYWN0ZXIvZGV2L2luZGV4LmpzPzljNDgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqL1xuXG5pbXBvcnQge2NvZGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29kZXMuanMnXG5pbXBvcnQge3VuaWNvZGVQdW5jdHVhdGlvblJlZ2V4fSBmcm9tICcuL2xpYi91bmljb2RlLXB1bmN0dWF0aW9uLXJlZ2V4LmpzJ1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgYWxwaGEgKGBhYCB0aHJvdWdoIGB6YCxcbiAqIGNhc2UgaW5zZW5zaXRpdmUpLlxuICpcbiAqIEFuICoqQVNDSUkgYWxwaGEqKiBpcyBhbiBBU0NJSSB1cHBlciBhbHBoYSBvciBBU0NJSSBsb3dlciBhbHBoYS5cbiAqXG4gKiBBbiAqKkFTQ0lJIHVwcGVyIGFscGhhKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNDEgKGBBYClcbiAqIHRvIFUrMDA1QSAoYFpgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGxvd2VyIGFscGhhKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNjEgKGBhYClcbiAqIHRvIFUrMDA3QSAoYHpgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBbHBoYSA9IHJlZ2V4Q2hlY2soL1tBLVphLXpdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyAoYGFgXG4gKiB0aHJvdWdoIGB6YCwgY2FzZSBpbnNlbnNpdGl2ZSwgb3IgYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGFscGhhbnVtZXJpYyoqIGlzIGFuIEFTQ0lJIGRpZ2l0IChzZWUgYGFzY2lpRGlnaXRgKSBvciBBU0NJSSBhbHBoYVxuICogKHNlZSBgYXNjaWlBbHBoYWApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUFscGhhbnVtZXJpYyA9IHJlZ2V4Q2hlY2soL1tcXGRBLVphLXpdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGF0ZXh0LlxuICpcbiAqIGF0ZXh0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyAoc2VlIGBhc2NpaUFscGhhbnVtZXJpY2ApLCBvciBhIGNoYXJhY3RlciBpblxuICogdGhlIGluY2x1c2l2ZSByYW5nZXMgVSswMDIzIE5VTUJFUiBTSUdOIChgI2ApIHRvIFUrMDAyNyBBUE9TVFJPUEhFIChgJ2ApLFxuICogVSswMDJBIEFTVEVSSVNLIChgKmApLCBVKzAwMkIgUExVUyBTSUdOIChgK2ApLCBVKzAwMkQgREFTSCAoYC1gKSwgVSswMDJGXG4gKiBTTEFTSCAoYC9gKSwgVSswMDNEIEVRVUFMUyBUTyAoYD1gKSwgVSswMDNGIFFVRVNUSU9OIE1BUksgKGA/YCksIFUrMDA1RVxuICogQ0FSRVQgKGBeYCkgdG8gVSswMDYwIEdSQVZFIEFDQ0VOVCAoYGAgYCBgYCksIG9yIFUrMDA3QiBMRUZUIENVUkxZIEJSQUNFXG4gKiAoYHtgKSB0byBVKzAwN0UgVElMREUgKGB+YCkuXG4gKlxuICogU2VlOlxuICogKipcXFtSRkM1MzIyXSoqOlxuICogW0ludGVybmV0IE1lc3NhZ2UgRm9ybWF0XShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMikuXG4gKiBQLiBSZXNuaWNrLlxuICogSUVURi5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBdGV4dCA9IHJlZ2V4Q2hlY2soL1sjLScqK1xcLS05PT9BLVpeLX5dLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYW4gQVNDSUkgY29udHJvbCBjaGFyYWN0ZXIuXG4gKlxuICogQW4gKipBU0NJSSBjb250cm9sKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwMDAgTlVMTCAoTlVMKVxuICogdG8gVSswMDFGIChVUyksIG9yIFUrMDA3RiAoREVMKS5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc2NpaUNvbnRyb2woY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIFNwZWNpYWwgd2hpdGVzcGFjZSBjb2RlcyAod2hpY2ggaGF2ZSBuZWdhdGl2ZSB2YWx1ZXMpLCBDMCBhbmQgQ29udHJvbFxuICAgIC8vIGNoYXJhY3RlciBERUxcbiAgICBjb2RlICE9PSBudWxsICYmIChjb2RlIDwgY29kZXMuc3BhY2UgfHwgY29kZSA9PT0gY29kZXMuZGVsKVxuICApXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBkaWdpdCAoYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGRpZ2l0KiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwMzAgKGAwYCkgdG9cbiAqIFUrMDAzOSAoYDlgKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlEaWdpdCA9IHJlZ2V4Q2hlY2soL1xcZC8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBoZXggZGlnaXQgKGBhYCB0aHJvdWdoXG4gKiBgZmAsIGNhc2UgaW5zZW5zaXRpdmUsIG9yIGAwYCB0aHJvdWdoIGA5YCkuXG4gKlxuICogQW4gKipBU0NJSSBoZXggZGlnaXQqKiBpcyBhbiBBU0NJSSBkaWdpdCAoc2VlIGBhc2NpaURpZ2l0YCksIEFTQ0lJIHVwcGVyIGhleFxuICogZGlnaXQsIG9yIGFuIEFTQ0lJIGxvd2VyIGhleCBkaWdpdC5cbiAqXG4gKiBBbiAqKkFTQ0lJIHVwcGVyIGhleCBkaWdpdCoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDQxXG4gKiAoYEFgKSB0byBVKzAwNDYgKGBGYCkuXG4gKlxuICogQW4gKipBU0NJSSBsb3dlciBoZXggZGlnaXQqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDA2MVxuICogKGBhYCkgdG8gVSswMDY2IChgZmApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUhleERpZ2l0ID0gcmVnZXhDaGVjaygvW1xcZEEtRmEtZl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgQVNDSUkgcHVuY3R1YXRpb24uXG4gKlxuICogQW4gKipBU0NJSSBwdW5jdHVhdGlvbioqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2VzIFUrMDAyMVxuICogRVhDTEFNQVRJT04gTUFSSyAoYCFgKSB0byBVKzAwMkYgU0xBU0ggKGAvYCksIFUrMDAzQSBDT0xPTiAoYDpgKSB0byBVKzAwNDAgQVRcbiAqIFNJR04gKGBAYCksIFUrMDA1QiBMRUZUIFNRVUFSRSBCUkFDS0VUIChgW2ApIHRvIFUrMDA2MCBHUkFWRSBBQ0NFTlRcbiAqIChgYCBgIGBgKSwgb3IgVSswMDdCIExFRlQgQ1VSTFkgQlJBQ0UgKGB7YCkgdG8gVSswMDdFIFRJTERFIChgfmApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaVB1bmN0dWF0aW9uID0gcmVnZXhDaGVjaygvWyEtLzotQFstYHstfl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIGxpbmUgZW5kaW5nLlxuICpcbiAqIEEgKiptYXJrZG93biBsaW5lIGVuZGluZyoqIGlzIHRoZSB2aXJ0dWFsIGNoYXJhY3RlcnMgTS0wMDAzIENBUlJJQUdFIFJFVFVSTlxuICogTElORSBGRUVEIChDUkxGKSwgTS0wMDA0IExJTkUgRkVFRCAoTEYpIGFuZCBNLTAwMDUgQ0FSUklBR0UgUkVUVVJOIChDUikuXG4gKlxuICogSW4gbWljcm9tYXJrLCB0aGUgYWN0dWFsIGNoYXJhY3RlciBVKzAwMEEgTElORSBGRUVEIChMRikgYW5kIFUrMDAwRCBDQVJSSUFHRVxuICogUkVUVVJOIChDUikgYXJlIHJlcGxhY2VkIGJ5IHRoZXNlIHZpcnR1YWwgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gd2hldGhlclxuICogdGhleSBvY2N1cnJlZCB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkge1xuICByZXR1cm4gY29kZSAhPT0gbnVsbCAmJiBjb2RlIDwgY29kZXMuaG9yaXpvbnRhbFRhYlxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIGxpbmUgZW5kaW5nIChzZWVcbiAqIGBtYXJrZG93bkxpbmVFbmRpbmdgKSBvciBtYXJrZG93biBzcGFjZSAoc2VlIGBtYXJrZG93blNwYWNlYCkuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSB7XG4gIHJldHVybiBjb2RlICE9PSBudWxsICYmIChjb2RlIDwgY29kZXMubnVsIHx8IGNvZGUgPT09IGNvZGVzLnNwYWNlKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhIG1hcmtkb3duIHNwYWNlLlxuICpcbiAqIEEgKiptYXJrZG93biBzcGFjZSoqIGlzIHRoZSBjb25jcmV0ZSBjaGFyYWN0ZXIgVSswMDIwIFNQQUNFIChTUCkgYW5kIHRoZVxuICogdmlydHVhbCBjaGFyYWN0ZXJzIE0tMDAwMSBWSVJUVUFMIFNQQUNFIChWUykgYW5kIE0tMDAwMiBIT1JJWk9OVEFMIFRBQiAoSFQpLlxuICpcbiAqIEluIG1pY3JvbWFyaywgdGhlIGFjdHVhbCBjaGFyYWN0ZXIgVSswMDA5IENIQVJBQ1RFUiBUQUJVTEFUSU9OIChIVCkgaXNcbiAqIHJlcGxhY2VkIGJ5IG9uZSBNLTAwMDIgSE9SSVpPTlRBTCBUQUIgKEhUKSBhbmQgYmV0d2VlbiAwIGFuZCAzIE0tMDAwMSBWSVJUVUFMXG4gKiBTUEFDRSAoVlMpIGNoYXJhY3RlcnMsIGRlcGVuZGluZyBvbiB0aGUgY29sdW1uIGF0IHdoaWNoIHRoZSB0YWIgb2NjdXJyZWQuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25TcGFjZShjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgY29kZSA9PT0gY29kZXMuaG9yaXpvbnRhbFRhYiB8fFxuICAgIGNvZGUgPT09IGNvZGVzLnZpcnR1YWxTcGFjZSB8fFxuICAgIGNvZGUgPT09IGNvZGVzLnNwYWNlXG4gIClcbn1cblxuLy8gU2l6ZSBub3RlOiByZW1vdmluZyBBU0NJSSBmcm9tIHRoZSByZWdleCBhbmQgdXNpbmcgYGFzY2lpUHVuY3R1YXRpb25gIGhlcmVcbi8vIEluIGZhY3QgYWRkcyB0byB0aGUgYnVuZGxlIHNpemUuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgVW5pY29kZSBwdW5jdHVhdGlvbi5cbiAqXG4gKiBBICoqVW5pY29kZSBwdW5jdHVhdGlvbioqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBVbmljb2RlIGBQY2AgKFB1bmN0dWF0aW9uLFxuICogQ29ubmVjdG9yKSwgYFBkYCAoUHVuY3R1YXRpb24sIERhc2gpLCBgUGVgIChQdW5jdHVhdGlvbiwgQ2xvc2UpLCBgUGZgXG4gKiAoUHVuY3R1YXRpb24sIEZpbmFsIHF1b3RlKSwgYFBpYCAoUHVuY3R1YXRpb24sIEluaXRpYWwgcXVvdGUpLCBgUG9gXG4gKiAoUHVuY3R1YXRpb24sIE90aGVyKSwgb3IgYFBzYCAoUHVuY3R1YXRpb24sIE9wZW4pIGNhdGVnb3JpZXMsIG9yIGFuIEFTQ0lJXG4gKiBwdW5jdHVhdGlvbiAoc2VlIGBhc2NpaVB1bmN0dWF0aW9uYCkuXG4gKlxuICogU2VlOlxuICogKipcXFtVTklDT0RFXSoqOlxuICogW1RoZSBVbmljb2RlIFN0YW5kYXJkXShodHRwczovL3d3dy51bmljb2RlLm9yZy92ZXJzaW9ucy8pLlxuICogVW5pY29kZSBDb25zb3J0aXVtLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmljb2RlUHVuY3R1YXRpb24gPSByZWdleENoZWNrKHVuaWNvZGVQdW5jdHVhdGlvblJlZ2V4KVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgVW5pY29kZSB3aGl0ZXNwYWNlLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgaGFuZGxlIG1pY3JvbWFyayBzcGVjaWZpYyBtYXJrZG93biB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKiBTZWUgYG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2VgIHRvIGNoZWNrIHRoYXQuXG4gKlxuICogQSAqKlVuaWNvZGUgd2hpdGVzcGFjZSoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBVbmljb2RlIGBac2AgKFNlcGFyYXRvcixcbiAqIFNwYWNlKSBjYXRlZ29yeSwgb3IgVSswMDA5IENIQVJBQ1RFUiBUQUJVTEFUSU9OIChIVCksIFUrMDAwQSBMSU5FIEZFRUQgKExGKSxcbiAqIFUrMDAwQyAoRkYpLCBvciBVKzAwMEQgQ0FSUklBR0UgUkVUVVJOIChDUikgKCoqXFxbVU5JQ09ERV0qKikuXG4gKlxuICogU2VlOlxuICogKipcXFtVTklDT0RFXSoqOlxuICogW1RoZSBVbmljb2RlIFN0YW5kYXJkXShodHRwczovL3d3dy51bmljb2RlLm9yZy92ZXJzaW9ucy8pLlxuICogVW5pY29kZSBDb25zb3J0aXVtLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmljb2RlV2hpdGVzcGFjZSA9IHJlZ2V4Q2hlY2soL1xccy8pXG5cbi8qKlxuICogQ3JlYXRlIGEgY29kZSBjaGVjayBmcm9tIGEgcmVnZXguXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4XG4gKiBAcmV0dXJucyB7KGNvZGU6IENvZGUpID0+IGJvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4Q2hlY2socmVnZXgpIHtcbiAgcmV0dXJuIGNoZWNrXG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgYSBjb2RlIG1hdGNoZXMgdGhlIGJvdW5kIHJlZ2V4LlxuICAgKlxuICAgKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAgICogICBDaGFyYWN0ZXIgY29kZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqICAgV2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgbWF0Y2hlcyB0aGUgYm91bmQgcmVnZXguXG4gICAqL1xuICBmdW5jdGlvbiBjaGVjayhjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgIT09IG51bGwgJiYgcmVnZXgudGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-character/dev/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-util-character/dev/lib/unicode-punctuation-regex.js":
/*!************************************************************************************!*\
  !*** ./node_modules/micromark-util-character/dev/lib/unicode-punctuation-regex.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unicodePunctuationRegex: () => (/* binding */ unicodePunctuationRegex)\n/* harmony export */ });\n// This module is generated by `script/`.\n//\n// CommonMark handles attention (emphasis, strong) markers based on what comes\n// before or after them.\n// One such difference is if those characters are Unicode punctuation.\n// This script is generated from the Unicode data.\n\n/**\n * Regular expression that matches a unicode punctuation character.\n */\nconst unicodePunctuationRegex =\n  /[!-/:-@[-`{-~\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061D-\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u09FD\\u0A76\\u0AF0\\u0C77\\u0C84\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1B7D\\u1B7E\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E4F\\u2E52-\\u2E5D\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65]/\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2Rldi9saWIvdW5pY29kZS1wdW5jdHVhdGlvbi1yZWdleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNvbnRlbnQtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNoYXJhY3Rlci9kZXYvbGliL3VuaWNvZGUtcHVuY3R1YXRpb24tcmVnZXguanM/ZDUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIG1vZHVsZSBpcyBnZW5lcmF0ZWQgYnkgYHNjcmlwdC9gLlxuLy9cbi8vIENvbW1vbk1hcmsgaGFuZGxlcyBhdHRlbnRpb24gKGVtcGhhc2lzLCBzdHJvbmcpIG1hcmtlcnMgYmFzZWQgb24gd2hhdCBjb21lc1xuLy8gYmVmb3JlIG9yIGFmdGVyIHRoZW0uXG4vLyBPbmUgc3VjaCBkaWZmZXJlbmNlIGlzIGlmIHRob3NlIGNoYXJhY3RlcnMgYXJlIFVuaWNvZGUgcHVuY3R1YXRpb24uXG4vLyBUaGlzIHNjcmlwdCBpcyBnZW5lcmF0ZWQgZnJvbSB0aGUgVW5pY29kZSBkYXRhLlxuXG4vKipcbiAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgYSB1bmljb2RlIHB1bmN0dWF0aW9uIGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuaWNvZGVQdW5jdHVhdGlvblJlZ2V4ID1cbiAgL1shLS86LUBbLWB7LX5cXHUwMEExXFx1MDBBN1xcdTAwQUJcXHUwMEI2XFx1MDBCN1xcdTAwQkJcXHUwMEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRC1cXHUwNjFGXFx1MDY2QS1cXHUwNjZEXFx1MDZENFxcdTA3MDAtXFx1MDcwRFxcdTA3RjctXFx1MDdGOVxcdTA4MzAtXFx1MDgzRVxcdTA4NUVcXHUwOTY0XFx1MDk2NVxcdTA5NzBcXHUwOUZEXFx1MEE3NlxcdTBBRjBcXHUwQzc3XFx1MEM4NFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZFXFx1MTY5QlxcdTE2OUNcXHUxNkVCLVxcdTE2RURcXHUxNzM1XFx1MTczNlxcdTE3RDQtXFx1MTdENlxcdTE3RDgtXFx1MTdEQVxcdTE4MDAtXFx1MTgwQVxcdTE5NDRcXHUxOTQ1XFx1MUExRVxcdTFBMUZcXHUxQUEwLVxcdTFBQTZcXHUxQUE4LVxcdTFBQURcXHUxQjVBLVxcdTFCNjBcXHUxQjdEXFx1MUI3RVxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNEZcXHUyRTUyLVxcdTJFNURcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XS9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-character/dev/lib/unicode-punctuation-regex.js\n");

/***/ })

};
;