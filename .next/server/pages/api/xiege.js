"use strict";
(() => {
var exports = {};
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fs = __webpack_require__(147);
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    res.writeHead(200, {
        // 'Content-Type': 'text/event-stream',
        // Connection: 'close',
        "Transfer-Encoding": "chunked",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
    });
    const readStream = fs.createReadStream(__dirname + "../../../static/data.txt");
    readStream.pipe(res);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(396));
module.exports = __webpack_exports__;

})();