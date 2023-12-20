"use strict";
exports.id = 9086;
exports.ids = [9086];
exports.modules = {

/***/ 9396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cz": () => (/* binding */ sendEmail),
/* harmony export */   "EZ": () => (/* binding */ getBarangays),
/* harmony export */   "R2": () => (/* binding */ getGeneratedId),
/* harmony export */   "rr": () => (/* binding */ seniorIdExist),
/* harmony export */   "s_": () => (/* binding */ getDetails),
/* harmony export */   "yz": () => (/* binding */ getBarangayData)
/* harmony export */ });
/* unused harmony exports getMunicipalities, getSpecificMunicipalities */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseURL = `${"https://rpcbulacan.com"}/api`;
const rootURL = (/* unused pure expression or super */ null && ("https://rpcbulacan.com"));
const sendEmail = async (info)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/sendEmail`, info);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getDetails = async ()=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${baseURL}/get-details`);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getMunicipalities = async ()=>{
    try {
        const { data  } = await axios.post(`${baseURL}/get-municipalities`);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getSpecificMunicipalities = async (mun)=>{
    try {
        const { data  } = await axios.get(`${baseURL}/getSpecificMunicipalities/${mun}`);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getBarangayData = async (info)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/get-barangay-data`, info);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getBarangays = async (mun)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${baseURL}/get-barangays/${mun}`);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getGeneratedId = async (mun, dist)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${baseURL}/generate-and-get-id/${mun}/${dist}`);
        return data;
    } catch (error) {
        return error.response;
    }
};
const seniorIdExist = async (idNumber)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${baseURL}/check-id-number/${idNumber}`);
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