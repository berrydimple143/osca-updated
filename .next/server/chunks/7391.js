"use strict";
exports.id = 7391;
exports.ids = [7391];
exports.modules = {

/***/ 7391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hd": () => (/* binding */ registerAdmin),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "z2": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseURL = `${"https://rpcbulacan.com"}/api`;
const login = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/login`, user);
        return data;
    } catch (error) {
        return error.response;
    }
};
const register = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/register`, user);
        return data;
    } catch (error) {
        return error.response;
    }
};
const registerAdmin = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/register/admin`, user);
        return data;
    } catch (error) {
        return error.response;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;