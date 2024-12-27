"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-subtokenize";
exports.ids = ["vendor-chunks/micromark-util-subtokenize"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-subtokenize/dev/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark-util-subtokenize/dev/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   subtokenize: () => (/* binding */ subtokenize)\n/* harmony export */ });\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/* harmony import */ var uvu_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uvu/assert */ \"(ssr)/./node_modules/uvu/assert/index.mjs\");\n/**\n * @typedef {import('micromark-util-types').Chunk} Chunk\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Token} Token\n */\n\n\n\n\n\n\n/**\n * Tokenize subcontent.\n *\n * @param {Array<Event>} events\n *   List of events.\n * @returns {boolean}\n *   Whether subtokens were found.\n */\nfunction subtokenize(events) {\n  /** @type {Record<string, number>} */\n  const jumps = {}\n  let index = -1\n  /** @type {Event} */\n  let event\n  /** @type {number | undefined} */\n  let lineIndex\n  /** @type {number} */\n  let otherIndex\n  /** @type {Event} */\n  let otherEvent\n  /** @type {Array<Event>} */\n  let parameters\n  /** @type {Array<Event>} */\n  let subevents\n  /** @type {boolean | undefined} */\n  let more\n\n  while (++index < events.length) {\n    while (index in jumps) {\n      index = jumps[index]\n    }\n\n    event = events[index]\n\n    // Add a hook for the GFM tasklist extension, which needs to know if text\n    // is in the first content of a list item.\n    if (\n      index &&\n      event[1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.chunkFlow &&\n      events[index - 1][1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.listItemPrefix\n    ) {\n      (0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(event[1]._tokenizer, 'expected `_tokenizer` on subtokens')\n      subevents = event[1]._tokenizer.events\n      otherIndex = 0\n\n      if (\n        otherIndex < subevents.length &&\n        subevents[otherIndex][1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEndingBlank\n      ) {\n        otherIndex += 2\n      }\n\n      if (\n        otherIndex < subevents.length &&\n        subevents[otherIndex][1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.content\n      ) {\n        while (++otherIndex < subevents.length) {\n          if (subevents[otherIndex][1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.content) {\n            break\n          }\n\n          if (subevents[otherIndex][1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.chunkText) {\n            subevents[otherIndex][1]._isInFirstContentOfListItem = true\n            otherIndex++\n          }\n        }\n      }\n    }\n\n    // Enter.\n    if (event[0] === 'enter') {\n      if (event[1].contentType) {\n        Object.assign(jumps, subcontent(events, index))\n        index = jumps[index]\n        more = true\n      }\n    }\n    // Exit.\n    else if (event[1]._container) {\n      otherIndex = index\n      lineIndex = undefined\n\n      while (otherIndex--) {\n        otherEvent = events[otherIndex]\n\n        if (\n          otherEvent[1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding ||\n          otherEvent[1].type === micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEndingBlank\n        ) {\n          if (otherEvent[0] === 'enter') {\n            if (lineIndex) {\n              events[lineIndex][1].type = micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEndingBlank\n            }\n\n            otherEvent[1].type = micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding\n            lineIndex = otherIndex\n          }\n        } else {\n          break\n        }\n      }\n\n      if (lineIndex) {\n        // Fix position.\n        event[1].end = Object.assign({}, events[lineIndex][1].start)\n\n        // Switch container exit w/ line endings.\n        parameters = events.slice(lineIndex, index)\n        parameters.unshift(event)\n        ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, lineIndex, index - lineIndex + 1, parameters)\n      }\n    }\n  }\n\n  return !more\n}\n\n/**\n * Tokenize embedded tokens.\n *\n * @param {Array<Event>} events\n * @param {number} eventIndex\n * @returns {Record<string, number>}\n */\nfunction subcontent(events, eventIndex) {\n  const token = events[eventIndex][1]\n  const context = events[eventIndex][2]\n  let startPosition = eventIndex - 1\n  /** @type {Array<number>} */\n  const startPositions = []\n  ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(token.contentType, 'expected `contentType` on subtokens')\n  const tokenizer =\n    token._tokenizer || context.parser[token.contentType](token.start)\n  const childEvents = tokenizer.events\n  /** @type {Array<[number, number]>} */\n  const jumps = []\n  /** @type {Record<string, number>} */\n  const gaps = {}\n  /** @type {Array<Chunk>} */\n  let stream\n  /** @type {Token | undefined} */\n  let previous\n  let index = -1\n  /** @type {Token | undefined} */\n  let current = token\n  let adjust = 0\n  let start = 0\n  const breaks = [start]\n\n  // Loop forward through the linked tokens to pass them in order to the\n  // subtokenizer.\n  while (current) {\n    // Find the position of the event for this token.\n    while (events[++startPosition][1] !== current) {\n      // Empty.\n    }\n\n    (0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(\n      !previous || current.previous === previous,\n      'expected previous to match'\n    )\n    ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(!previous || previous.next === current, 'expected next to match')\n\n    startPositions.push(startPosition)\n\n    if (!current._tokenizer) {\n      stream = context.sliceStream(current)\n\n      if (!current.next) {\n        stream.push(micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_3__.codes.eof)\n      }\n\n      if (previous) {\n        tokenizer.defineSkip(current.start)\n      }\n\n      if (current._isInFirstContentOfListItem) {\n        tokenizer._gfmTasklistFirstContentOfListItem = true\n      }\n\n      tokenizer.write(stream)\n\n      if (current._isInFirstContentOfListItem) {\n        tokenizer._gfmTasklistFirstContentOfListItem = undefined\n      }\n    }\n\n    // Unravel the next token.\n    previous = current\n    current = current.next\n  }\n\n  // Now, loop back through all events (and linked tokens), to figure out which\n  // parts belong where.\n  current = token\n\n  while (++index < childEvents.length) {\n    if (\n      // Find a void token that includes a break.\n      childEvents[index][0] === 'exit' &&\n      childEvents[index - 1][0] === 'enter' &&\n      childEvents[index][1].type === childEvents[index - 1][1].type &&\n      childEvents[index][1].start.line !== childEvents[index][1].end.line\n    ) {\n      (0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(current, 'expected a current token')\n      start = index + 1\n      breaks.push(start)\n      // Help GC.\n      current._tokenizer = undefined\n      current.previous = undefined\n      current = current.next\n    }\n  }\n\n  // Help GC.\n  tokenizer.events = []\n\n  // If there’s one more token (which is the cases for lines that end in an\n  // EOF), that’s perfect: the last point we found starts it.\n  // If there isn’t then make sure any remaining content is added to it.\n  if (current) {\n    // Help GC.\n    current._tokenizer = undefined\n    current.previous = undefined\n    ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(!current.next, 'expected no next token')\n  } else {\n    breaks.pop()\n  }\n\n  // Now splice the events from the subtokenizer into the current events,\n  // moving back to front so that splice indices aren’t affected.\n  index = breaks.length\n\n  while (index--) {\n    const slice = childEvents.slice(breaks[index], breaks[index + 1])\n    const start = startPositions.pop()\n    ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(start !== undefined, 'expected a start position when splicing')\n    jumps.unshift([start, start + slice.length - 1])\n    ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, start, 2, slice)\n  }\n\n  index = -1\n\n  while (++index < jumps.length) {\n    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]\n    adjust += jumps[index][1] - jumps[index][0] - 1\n  }\n\n  return gaps\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc3VidG9rZW5pemUvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLHNDQUFzQztBQUNuRDs7QUFFNkM7QUFDTztBQUNBO0FBQ2I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBSztBQUM3QixvQ0FBb0MsaUVBQUs7QUFDekM7QUFDQSxNQUFNLDhDQUFNO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGlFQUFLO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGlFQUFLO0FBQy9DO0FBQ0E7QUFDQSxnREFBZ0QsaUVBQUs7QUFDckQ7QUFDQTs7QUFFQSxnREFBZ0QsaUVBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLGlFQUFLO0FBQ3RDLGlDQUFpQyxpRUFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsaUVBQUs7QUFDL0M7O0FBRUEsaUNBQWlDLGlFQUFLO0FBQ3RDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQU07QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0EsRUFBRSwrQ0FBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw4Q0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQU07O0FBRVY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpRUFBSztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4Q0FBTTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQU07QUFDVixJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWO0FBQ0EsSUFBSSwrREFBTTtBQUNWOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jb250ZW50LWVkaXRvci8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1zdWJ0b2tlbml6ZS9kZXYvaW5kZXguanM/YjU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ2h1bmt9IENodW5rXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbn0gVG9rZW5cbiAqL1xuXG5pbXBvcnQge3NwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcbmltcG9ydCB7Y29kZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC9jb2Rlcy5qcydcbmltcG9ydCB7dHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC90eXBlcy5qcydcbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICd1dnUvYXNzZXJ0J1xuXG4vKipcbiAqIFRva2VuaXplIHN1YmNvbnRlbnQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxFdmVudD59IGV2ZW50c1xuICogICBMaXN0IG9mIGV2ZW50cy5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIHN1YnRva2VucyB3ZXJlIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidG9rZW5pemUoZXZlbnRzKSB7XG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn0gKi9cbiAgY29uc3QganVtcHMgPSB7fVxuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0V2ZW50fSAqL1xuICBsZXQgZXZlbnRcbiAgLyoqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9ICovXG4gIGxldCBsaW5lSW5kZXhcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBvdGhlckluZGV4XG4gIC8qKiBAdHlwZSB7RXZlbnR9ICovXG4gIGxldCBvdGhlckV2ZW50XG4gIC8qKiBAdHlwZSB7QXJyYXk8RXZlbnQ+fSAqL1xuICBsZXQgcGFyYW1ldGVyc1xuICAvKiogQHR5cGUge0FycmF5PEV2ZW50Pn0gKi9cbiAgbGV0IHN1YmV2ZW50c1xuICAvKiogQHR5cGUge2Jvb2xlYW4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBtb3JlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGluZGV4IGluIGp1bXBzKSB7XG4gICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgIH1cblxuICAgIGV2ZW50ID0gZXZlbnRzW2luZGV4XVxuXG4gICAgLy8gQWRkIGEgaG9vayBmb3IgdGhlIEdGTSB0YXNrbGlzdCBleHRlbnNpb24sIHdoaWNoIG5lZWRzIHRvIGtub3cgaWYgdGV4dFxuICAgIC8vIGlzIGluIHRoZSBmaXJzdCBjb250ZW50IG9mIGEgbGlzdCBpdGVtLlxuICAgIGlmIChcbiAgICAgIGluZGV4ICYmXG4gICAgICBldmVudFsxXS50eXBlID09PSB0eXBlcy5jaHVua0Zsb3cgJiZcbiAgICAgIGV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgPT09IHR5cGVzLmxpc3RJdGVtUHJlZml4XG4gICAgKSB7XG4gICAgICBhc3NlcnQoZXZlbnRbMV0uX3Rva2VuaXplciwgJ2V4cGVjdGVkIGBfdG9rZW5pemVyYCBvbiBzdWJ0b2tlbnMnKVxuICAgICAgc3ViZXZlbnRzID0gZXZlbnRbMV0uX3Rva2VuaXplci5ldmVudHNcbiAgICAgIG90aGVySW5kZXggPSAwXG5cbiAgICAgIGlmIChcbiAgICAgICAgb3RoZXJJbmRleCA8IHN1YmV2ZW50cy5sZW5ndGggJiZcbiAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09IHR5cGVzLmxpbmVFbmRpbmdCbGFua1xuICAgICAgKSB7XG4gICAgICAgIG90aGVySW5kZXggKz0gMlxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSB0eXBlcy5jb250ZW50XG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKCsrb3RoZXJJbmRleCA8IHN1YmV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09IHR5cGVzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSB0eXBlcy5jaHVua1RleHQpIHtcbiAgICAgICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS5faXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB0cnVlXG4gICAgICAgICAgICBvdGhlckluZGV4KytcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnRlci5cbiAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgIGlmIChldmVudFsxXS5jb250ZW50VHlwZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGp1bXBzLCBzdWJjb250ZW50KGV2ZW50cywgaW5kZXgpKVxuICAgICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgICAgICBtb3JlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGl0LlxuICAgIGVsc2UgaWYgKGV2ZW50WzFdLl9jb250YWluZXIpIHtcbiAgICAgIG90aGVySW5kZXggPSBpbmRleFxuICAgICAgbGluZUluZGV4ID0gdW5kZWZpbmVkXG5cbiAgICAgIHdoaWxlIChvdGhlckluZGV4LS0pIHtcbiAgICAgICAgb3RoZXJFdmVudCA9IGV2ZW50c1tvdGhlckluZGV4XVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBvdGhlckV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpbmVFbmRpbmcgfHxcbiAgICAgICAgICBvdGhlckV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmxpbmVFbmRpbmdCbGFua1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAob3RoZXJFdmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgICAgaWYgKGxpbmVJbmRleCkge1xuICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gdHlwZXMubGluZUVuZGluZ0JsYW5rXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9IHR5cGVzLmxpbmVFbmRpbmdcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IG90aGVySW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgIC8vIEZpeCBwb3NpdGlvbi5cbiAgICAgICAgZXZlbnRbMV0uZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2xpbmVJbmRleF1bMV0uc3RhcnQpXG5cbiAgICAgICAgLy8gU3dpdGNoIGNvbnRhaW5lciBleGl0IHcvIGxpbmUgZW5kaW5ncy5cbiAgICAgICAgcGFyYW1ldGVycyA9IGV2ZW50cy5zbGljZShsaW5lSW5kZXgsIGluZGV4KVxuICAgICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoZXZlbnQpXG4gICAgICAgIHNwbGljZShldmVudHMsIGxpbmVJbmRleCwgaW5kZXggLSBsaW5lSW5kZXggKyAxLCBwYXJhbWV0ZXJzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAhbW9yZVxufVxuXG4vKipcbiAqIFRva2VuaXplIGVtYmVkZGVkIHRva2Vucy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PEV2ZW50Pn0gZXZlbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gZXZlbnRJbmRleFxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIG51bWJlcj59XG4gKi9cbmZ1bmN0aW9uIHN1YmNvbnRlbnQoZXZlbnRzLCBldmVudEluZGV4KSB7XG4gIGNvbnN0IHRva2VuID0gZXZlbnRzW2V2ZW50SW5kZXhdWzFdXG4gIGNvbnN0IGNvbnRleHQgPSBldmVudHNbZXZlbnRJbmRleF1bMl1cbiAgbGV0IHN0YXJ0UG9zaXRpb24gPSBldmVudEluZGV4IC0gMVxuICAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovXG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gW11cbiAgYXNzZXJ0KHRva2VuLmNvbnRlbnRUeXBlLCAnZXhwZWN0ZWQgYGNvbnRlbnRUeXBlYCBvbiBzdWJ0b2tlbnMnKVxuICBjb25zdCB0b2tlbml6ZXIgPVxuICAgIHRva2VuLl90b2tlbml6ZXIgfHwgY29udGV4dC5wYXJzZXJbdG9rZW4uY29udGVudFR5cGVdKHRva2VuLnN0YXJ0KVxuICBjb25zdCBjaGlsZEV2ZW50cyA9IHRva2VuaXplci5ldmVudHNcbiAgLyoqIEB0eXBlIHtBcnJheTxbbnVtYmVyLCBudW1iZXJdPn0gKi9cbiAgY29uc3QganVtcHMgPSBbXVxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIG51bWJlcj59ICovXG4gIGNvbnN0IGdhcHMgPSB7fVxuICAvKiogQHR5cGUge0FycmF5PENodW5rPn0gKi9cbiAgbGV0IHN0cmVhbVxuICAvKiogQHR5cGUge1Rva2VuIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgcHJldmlvdXNcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtUb2tlbiB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGN1cnJlbnQgPSB0b2tlblxuICBsZXQgYWRqdXN0ID0gMFxuICBsZXQgc3RhcnQgPSAwXG4gIGNvbnN0IGJyZWFrcyA9IFtzdGFydF1cblxuICAvLyBMb29wIGZvcndhcmQgdGhyb3VnaCB0aGUgbGlua2VkIHRva2VucyB0byBwYXNzIHRoZW0gaW4gb3JkZXIgdG8gdGhlXG4gIC8vIHN1YnRva2VuaXplci5cbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAvLyBGaW5kIHRoZSBwb3NpdGlvbiBvZiB0aGUgZXZlbnQgZm9yIHRoaXMgdG9rZW4uXG4gICAgd2hpbGUgKGV2ZW50c1srK3N0YXJ0UG9zaXRpb25dWzFdICE9PSBjdXJyZW50KSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9XG5cbiAgICBhc3NlcnQoXG4gICAgICAhcHJldmlvdXMgfHwgY3VycmVudC5wcmV2aW91cyA9PT0gcHJldmlvdXMsXG4gICAgICAnZXhwZWN0ZWQgcHJldmlvdXMgdG8gbWF0Y2gnXG4gICAgKVxuICAgIGFzc2VydCghcHJldmlvdXMgfHwgcHJldmlvdXMubmV4dCA9PT0gY3VycmVudCwgJ2V4cGVjdGVkIG5leHQgdG8gbWF0Y2gnKVxuXG4gICAgc3RhcnRQb3NpdGlvbnMucHVzaChzdGFydFBvc2l0aW9uKVxuXG4gICAgaWYgKCFjdXJyZW50Ll90b2tlbml6ZXIpIHtcbiAgICAgIHN0cmVhbSA9IGNvbnRleHQuc2xpY2VTdHJlYW0oY3VycmVudClcblxuICAgICAgaWYgKCFjdXJyZW50Lm5leHQpIHtcbiAgICAgICAgc3RyZWFtLnB1c2goY29kZXMuZW9mKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgdG9rZW5pemVyLmRlZmluZVNraXAoY3VycmVudC5zdGFydClcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnQuX2lzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtKSB7XG4gICAgICAgIHRva2VuaXplci5fZ2ZtVGFza2xpc3RGaXJzdENvbnRlbnRPZkxpc3RJdGVtID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB0b2tlbml6ZXIud3JpdGUoc3RyZWFtKVxuXG4gICAgICBpZiAoY3VycmVudC5faXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0pIHtcbiAgICAgICAgdG9rZW5pemVyLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVbnJhdmVsIHRoZSBuZXh0IHRva2VuLlxuICAgIHByZXZpb3VzID0gY3VycmVudFxuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRcbiAgfVxuXG4gIC8vIE5vdywgbG9vcCBiYWNrIHRocm91Z2ggYWxsIGV2ZW50cyAoYW5kIGxpbmtlZCB0b2tlbnMpLCB0byBmaWd1cmUgb3V0IHdoaWNoXG4gIC8vIHBhcnRzIGJlbG9uZyB3aGVyZS5cbiAgY3VycmVudCA9IHRva2VuXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjaGlsZEV2ZW50cy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICAvLyBGaW5kIGEgdm9pZCB0b2tlbiB0aGF0IGluY2x1ZGVzIGEgYnJlYWsuXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMF0gPT09ICdleGl0JyAmJlxuICAgICAgY2hpbGRFdmVudHNbaW5kZXggLSAxXVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgY2hpbGRFdmVudHNbaW5kZXhdWzFdLnR5cGUgPT09IGNoaWxkRXZlbnRzW2luZGV4IC0gMV1bMV0udHlwZSAmJlxuICAgICAgY2hpbGRFdmVudHNbaW5kZXhdWzFdLnN0YXJ0LmxpbmUgIT09IGNoaWxkRXZlbnRzW2luZGV4XVsxXS5lbmQubGluZVxuICAgICkge1xuICAgICAgYXNzZXJ0KGN1cnJlbnQsICdleHBlY3RlZCBhIGN1cnJlbnQgdG9rZW4nKVxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgIGJyZWFrcy5wdXNoKHN0YXJ0KVxuICAgICAgLy8gSGVscCBHQy5cbiAgICAgIGN1cnJlbnQuX3Rva2VuaXplciA9IHVuZGVmaW5lZFxuICAgICAgY3VycmVudC5wcmV2aW91cyA9IHVuZGVmaW5lZFxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHAgR0MuXG4gIHRva2VuaXplci5ldmVudHMgPSBbXVxuXG4gIC8vIElmIHRoZXJl4oCZcyBvbmUgbW9yZSB0b2tlbiAod2hpY2ggaXMgdGhlIGNhc2VzIGZvciBsaW5lcyB0aGF0IGVuZCBpbiBhblxuICAvLyBFT0YpLCB0aGF04oCZcyBwZXJmZWN0OiB0aGUgbGFzdCBwb2ludCB3ZSBmb3VuZCBzdGFydHMgaXQuXG4gIC8vIElmIHRoZXJlIGlzbuKAmXQgdGhlbiBtYWtlIHN1cmUgYW55IHJlbWFpbmluZyBjb250ZW50IGlzIGFkZGVkIHRvIGl0LlxuICBpZiAoY3VycmVudCkge1xuICAgIC8vIEhlbHAgR0MuXG4gICAgY3VycmVudC5fdG9rZW5pemVyID0gdW5kZWZpbmVkXG4gICAgY3VycmVudC5wcmV2aW91cyA9IHVuZGVmaW5lZFxuICAgIGFzc2VydCghY3VycmVudC5uZXh0LCAnZXhwZWN0ZWQgbm8gbmV4dCB0b2tlbicpXG4gIH0gZWxzZSB7XG4gICAgYnJlYWtzLnBvcCgpXG4gIH1cblxuICAvLyBOb3cgc3BsaWNlIHRoZSBldmVudHMgZnJvbSB0aGUgc3VidG9rZW5pemVyIGludG8gdGhlIGN1cnJlbnQgZXZlbnRzLFxuICAvLyBtb3ZpbmcgYmFjayB0byBmcm9udCBzbyB0aGF0IHNwbGljZSBpbmRpY2VzIGFyZW7igJl0IGFmZmVjdGVkLlxuICBpbmRleCA9IGJyZWFrcy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGNvbnN0IHNsaWNlID0gY2hpbGRFdmVudHMuc2xpY2UoYnJlYWtzW2luZGV4XSwgYnJlYWtzW2luZGV4ICsgMV0pXG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydFBvc2l0aW9ucy5wb3AoKVxuICAgIGFzc2VydChzdGFydCAhPT0gdW5kZWZpbmVkLCAnZXhwZWN0ZWQgYSBzdGFydCBwb3NpdGlvbiB3aGVuIHNwbGljaW5nJylcbiAgICBqdW1wcy51bnNoaWZ0KFtzdGFydCwgc3RhcnQgKyBzbGljZS5sZW5ndGggLSAxXSlcbiAgICBzcGxpY2UoZXZlbnRzLCBzdGFydCwgMiwgc2xpY2UpXG4gIH1cblxuICBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBqdW1wcy5sZW5ndGgpIHtcbiAgICBnYXBzW2FkanVzdCArIGp1bXBzW2luZGV4XVswXV0gPSBhZGp1c3QgKyBqdW1wc1tpbmRleF1bMV1cbiAgICBhZGp1c3QgKz0ganVtcHNbaW5kZXhdWzFdIC0ganVtcHNbaW5kZXhdWzBdIC0gMVxuICB9XG5cbiAgcmV0dXJuIGdhcHNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-subtokenize/dev/index.js\n");

/***/ })

};
;