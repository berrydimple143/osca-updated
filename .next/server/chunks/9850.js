"use strict";
exports.id = 9850;
exports.ids = [9850];
exports.modules = {

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A2": () => (/* binding */ upper),
/* harmony export */   "MW": () => (/* binding */ chatDate),
/* harmony export */   "Q8": () => (/* binding */ disabledDate),
/* harmony export */   "c0": () => (/* binding */ showNotification),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "qN": () => (/* binding */ computeAge),
/* harmony export */   "u9": () => (/* binding */ IsUnderAge)
/* harmony export */ });
/* unused harmony exports convertObjectToString, searchAndCut, concatString, getMunicipalitiesObject, getAgeFromDate */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);




const disabledDate = (current)=>{
    return current > dayjs__WEBPACK_IMPORTED_MODULE_2___default()().endOf("day");
};
const IsUnderAge = (date)=>{
    let a = moment__WEBPACK_IMPORTED_MODULE_1___default()();
    let b = moment__WEBPACK_IMPORTED_MODULE_1___default()(date, "YYYY-MM-DD");
    let age = a.diff(b, "years");
    if (age < 60) {
        return true;
    }
    return false;
};
const upper = (str)=>{
    if (str) {
        return str.toString().toUpperCase();
    }
    return str;
};
const convertObjectToString = (object)=>{
    Object.fromEntries(Object.entries(object).map(([k, v])=>[
            k,
            v + ""
        ]));
};
const searchAndCut = (str, searchTxt)=>{
    if (str) {
        const pos = str.indexOf(searchTxt);
        if (pos !== -1) {
            str = str.substring(pos, -1) + " ...";
        }
    }
    return str;
};
const concatString = (str, limit)=>{
    if (str) {
        if (str.length > limit) {
            str = str.substring(0, limit) + " ...";
        }
    }
    return str;
};
const computeAge = (date)=>{
    let a = moment__WEBPACK_IMPORTED_MODULE_1___default()();
    let b = moment__WEBPACK_IMPORTED_MODULE_1___default()(date, "YYYY-MM-DD");
    let age = a.diff(b, "years");
    return age;
};
const chatDate = (created)=>{
    let msg = "";
    let eventTime = moment__WEBPACK_IMPORTED_MODULE_1___default()(created, "YYYY-MM-DD HH:mm:ss a");
    const hours = moment__WEBPACK_IMPORTED_MODULE_1___default().duration(moment__WEBPACK_IMPORTED_MODULE_1___default()() - eventTime).asHours();
    const hInt = Math.floor(hours);
    const minutes = moment__WEBPACK_IMPORTED_MODULE_1___default().duration(60 * (hours - hInt), "minutes").asMinutes();
    const mInt = Math.floor(minutes);
    const seconds = moment__WEBPACK_IMPORTED_MODULE_1___default().duration(60 * (minutes - mInt), "seconds").asSeconds();
    const sInt = Math.floor(seconds);
    if (hours >= 24) {
        let given = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day");
        let xd = moment__WEBPACK_IMPORTED_MODULE_1___default().duration(given.diff(eventTime)).asDays();
        let cntr = "days";
        if (xd == 1) {
            cntr = "day";
        }
        msg = xd + " " + cntr;
    } else {
        msg = `${hInt}hr ${mInt}m ${sInt}s`;
    }
    return msg;
};
const getMunicipalitiesObject = (mun)=>{
    let muni = {};
    mun.map((item, index)=>{
        muni[item.municipality_name] = item.municipality_code_number;
    });
    return muni;
};
const getAgeFromDate = (date)=>{
    let a = moment();
    let b = moment(date, "YYYY-MM-DD");
    let age = a.diff(b, "years");
    return age;
};
const formatDate = (date, fmt)=>{
    let newDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format(fmt);
    return newDate;
};
const showNotification = (type, title, txt1, txt2)=>{
    return antd__WEBPACK_IMPORTED_MODULE_3__.notification[type]({
        message: title,
        description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                txt1,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                txt2
            ]
        }),
        placement: "top",
        top: "30%"
    });
};


/***/ })

};
;