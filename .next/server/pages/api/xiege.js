"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/xiege";
exports.ids = ["pages/api/xiege"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "(api)/./pages/api/xiege.js":
/*!****************************!*\
  !*** ./pages/api/xiege.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst { Readable  } = __webpack_require__(/*! stream */ \"stream\");\nclass MyStream extends Readable {\n    constructor(options){\n        super(options);\n        this.count = 0;\n    }\n    _read() {\n        // 定期推送数据\n        setTimeout(()=>{\n            const data = `Count: ${this.count++}\\n`;\n            if (this.count > 5) {\n                this.push(null);\n            } else {\n                this.push(data);\n            }\n        }, 1000);\n    }\n}\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    res.writeHead(200, {\n        // 'Content-Type': 'text/event-stream',\n        // Connection: 'close',\n        \"Transfer-Encoding\": \"chunked\",\n        \"Access-Control-Allow-Origin\": \"*\",\n        \"Access-Control-Allow-Headers\": \"Content-Type\"\n    });\n    // const stream = new ReadableStream({\n    //   start(controller) {\n    //     setInterval(() => {\n    //       const rand = Math.round(Math.random());\n    //       if (rand > 7) {\n    //         controller.close();\n    //       }\n    //       controller.enqueue(`data: ${rand}\\n\\n`);\n    //     }, 1000);\n    //   },\n    // });\n    // let count = 0;\n    // const stream = new Readable({\n    //   read() {\n    //     // 定期推送数据\n    //     setInterval(() => {\n    //       const data = `Count: ${count++}\\n`;\n    //       if (count > 5) {\n    //         this.push(null);\n    //       } else {\n    //         this.push(data);\n    //       }\n    //     }, 1000);\n    //   },\n    // });\n    // const readStream2 = fs.createReadStream(__dirname + '/demo.js');\n    // readStream.pipe(res);\n    new MyStream().pipe(res);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkveGllZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEtBQUtDLG1CQUFPQSxDQUFDO0FBQ25CLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdELG1CQUFPQSxDQUFDO0FBRTdCLE1BQU1FLGlCQUFpQkQ7SUFDckJFLFlBQVlDLE9BQU8sQ0FBRTtRQUNuQixLQUFLLENBQUNBO1FBQ04sSUFBSSxDQUFDQyxLQUFLLEdBQUc7SUFDZjtJQUVBQyxRQUFRO1FBQ04sU0FBUztRQUNUQyxXQUFXLElBQU07WUFDZixNQUFNQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0gsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxHQUFHLEdBQUc7Z0JBQ2xCLElBQUksQ0FBQ0ksSUFBSSxDQUFDLElBQUk7WUFDaEIsT0FBTztnQkFDTCxJQUFJLENBQUNBLElBQUksQ0FBQ0Q7WUFDWixDQUFDO1FBQ0gsR0FBRztJQUNMO0FBQ0Y7QUFFQSw2QkFBZSwwQ0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDQSxJQUFJQyxTQUFTLENBQUMsS0FBSztRQUNqQix1Q0FBdUM7UUFDdkMsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFDL0IsZ0NBQWdDO0lBQ2xDO0lBRUEsc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLE1BQU07SUFDTixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsTUFBTTtJQUNOLG1FQUFtRTtJQUNuRSx3QkFBd0I7SUFDeEIsSUFBSVYsV0FBV1csSUFBSSxDQUFDRjtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS94aWVnZS5qcz8wNzcyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHsgUmVhZGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuXG5jbGFzcyBNeVN0cmVhbSBleHRlbmRzIFJlYWRhYmxlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgLy8g5a6a5pyf5o6o6YCB5pWw5o2uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYENvdW50OiAke3RoaXMuY291bnQrK31cXG5gO1xuICAgICAgaWYgKHRoaXMuY291bnQgPiA1KSB7XG4gICAgICAgIHRoaXMucHVzaChudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaChkYXRhKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgcmVzLndyaXRlSGVhZCgyMDAsIHtcbiAgICAvLyAnQ29udGVudC1UeXBlJzogJ3RleHQvZXZlbnQtc3RyZWFtJyxcbiAgICAvLyBDb25uZWN0aW9uOiAnY2xvc2UnLFxuICAgICdUcmFuc2Zlci1FbmNvZGluZyc6ICdjaHVua2VkJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScsXG4gIH0pO1xuXG4gIC8vIGNvbnN0IHN0cmVhbSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gIC8vICAgc3RhcnQoY29udHJvbGxlcikge1xuICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCByYW5kID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgLy8gICAgICAgaWYgKHJhbmQgPiA3KSB7XG4gIC8vICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShgZGF0YTogJHtyYW5kfVxcblxcbmApO1xuICAvLyAgICAgfSwgMTAwMCk7XG4gIC8vICAgfSxcbiAgLy8gfSk7XG4gIC8vIGxldCBjb3VudCA9IDA7XG4gIC8vIGNvbnN0IHN0cmVhbSA9IG5ldyBSZWFkYWJsZSh7XG4gIC8vICAgcmVhZCgpIHtcbiAgLy8gICAgIC8vIOWumuacn+aOqOmAgeaVsOaNrlxuICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gYENvdW50OiAke2NvdW50Kyt9XFxuYDtcbiAgLy8gICAgICAgaWYgKGNvdW50ID4gNSkge1xuICAvLyAgICAgICAgIHRoaXMucHVzaChudWxsKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICB0aGlzLnB1c2goZGF0YSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0sIDEwMDApO1xuICAvLyAgIH0sXG4gIC8vIH0pO1xuICAvLyBjb25zdCByZWFkU3RyZWFtMiA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgJy9kZW1vLmpzJyk7XG4gIC8vIHJlYWRTdHJlYW0ucGlwZShyZXMpO1xuICBuZXcgTXlTdHJlYW0oKS5waXBlKHJlcyk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiUmVhZGFibGUiLCJNeVN0cmVhbSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImNvdW50IiwiX3JlYWQiLCJzZXRUaW1lb3V0IiwiZGF0YSIsInB1c2giLCJyZXEiLCJyZXMiLCJ3cml0ZUhlYWQiLCJwaXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/xiege.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/xiege.js"));
module.exports = __webpack_exports__;

})();