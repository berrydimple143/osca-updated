"use strict";
exports.id = 8581;
exports.ids = [8581];
exports.modules = {

/***/ 8581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ getDosageLevel),
/* harmony export */   "EP": () => (/* binding */ deleteMember),
/* harmony export */   "Hg": () => (/* binding */ vaccineIdCamera),
/* harmony export */   "L": () => (/* binding */ getMember),
/* harmony export */   "PQ": () => (/* binding */ getExport),
/* harmony export */   "Zw": () => (/* binding */ getMembers),
/* harmony export */   "do": () => (/* binding */ userCamera),
/* harmony export */   "dp": () => (/* binding */ saveVaccinationInfo),
/* harmony export */   "hS": () => (/* binding */ updateMember),
/* harmony export */   "lT": () => (/* binding */ getCanvasData),
/* harmony export */   "lV": () => (/* binding */ saveMemberTransaction),
/* harmony export */   "yx": () => (/* binding */ userSignature)
/* harmony export */ });
/* unused harmony export uploadImage */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseURL = `${"https://rpcbulacan.com"}/api`;
const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("token");
const header = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
};
const saveMemberTransaction = async (params)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/saveMemberTransaction`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const uploadImage = async (params)=>{
    try {
        const data = await axios.post(`${baseURL}/uploadImage`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getDosageLevel = async ()=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getDosageLevel`, {}, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const saveVaccinationInfo = async (user)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/saveVaccinationInfo`, user, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getCanvasData = async (id, host)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getCanvasData`, {
            id,
            host
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const userCamera = async (id, info)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/userCamera`, {
            id,
            info
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const vaccineIdCamera = async (id, info)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/vaccineIdCamera`, {
            id,
            info
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const userSignature = async (id, info)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/userSignature`, {
            id,
            info
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getMembers = async (mtype, mun, bar, stype, token)=>{
    try {
        const params = {
            mtype,
            mun,
            bar,
            stype
        };
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getMembers`, params, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        return error.response;
    }
};
const getExport = async (params)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/exportData`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const updateMember = async (user)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/updateMember`, user, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getMember = async (params)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getMember`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const deleteMember = async (id)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/deleteMember`, {
            id
        }, header);
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