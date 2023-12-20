"use strict";
(() => {
var exports = {};
exports.id = 6964;
exports.ids = [6964];
exports.modules = {

/***/ 4866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5120);
/* harmony import */ var _components_admin_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895);
/* harmony import */ var _components_admin_StatisticsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1455);
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5154);
/* harmony import */ var _components_ModalLoading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_5__, _components_admin_BarChart__WEBPACK_IMPORTED_MODULE_6__, _services_analyticsService__WEBPACK_IMPORTED_MODULE_8__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_5__, _components_admin_BarChart__WEBPACK_IMPORTED_MODULE_6__, _services_analyticsService__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










async function getServerSideProps({ req  }) {
    const cookieData = cookie__WEBPACK_IMPORTED_MODULE_4__.parse(req.headers.cookie || "");
    const { data  } = await (0,_services_analyticsService__WEBPACK_IMPORTED_MODULE_8__/* .getMunicipalitiesMembers */ .A)(cookieData.token);
    return {
        props: {
            info: cookieData,
            data
        }
    };
}
function Dashboard({ info , data  }) {
    const [graphLabels, setGraphLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [graphValues, setGraphValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [todayMembers, setTodayMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [totalMembers, setTotalMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isDashboard, setIsDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [isMember, setIsMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUser, setIsUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isReport, setIsReport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [breadcrumb, setBreadcrumb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const initComponents = ()=>{
        const roleLabel = `Level: ${info.user_role} |`;
        setBreadcrumb([
            roleLabel,
            "Dashboard"
        ]);
        if (data) {
            setGraphLabels(data.labels);
            setGraphValues(data.info);
            setTodayMembers(data.today);
            setTotalMembers(data.total);
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        initComponents();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        role: info.user_role,
        isDashboard: isDashboard,
        isMember: isMember,
        isUser: isUser,
        isReport: isReport,
        title: "Administration Panel",
        trail: breadcrumb,
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                message: "Loading, please wait ...",
                pcolor: "bg-yellow-500"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-2 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_StatisticsCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: "Today’s Senior Citizen",
                        count: todayMembers,
                        bgColor: "bg-secondary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_StatisticsCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: "Total Senior Citizen",
                        count: totalMembers,
                        bgColor: "bg-primary"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-2 border",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_BarChart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    setLoading: setLoading,
                    legendLabel: "Total Senior Citizen",
                    graphLabels: graphLabels,
                    graphValues: graphValues,
                    graphTitle: "Total number of senior citizen members per municipality",
                    graphWidth: "950",
                    graphHeight: "350"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 955:
/***/ ((module) => {

module.exports = import("chart.js/auto");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 738:
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [747,5120,8933], () => (__webpack_exec__(4866)));
module.exports = __webpack_exports__;

})();