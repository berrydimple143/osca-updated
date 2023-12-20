"use strict";
(() => {
var exports = {};
exports.id = 2133;
exports.ids = [2133];
exports.modules = {

/***/ 3378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Report),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5120);
/* harmony import */ var _components_ModalLoading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(747);
/* harmony import */ var _components_admin_ReportTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1756);
/* harmony import */ var _components_forms_ReportForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5040);
/* harmony import */ var _components_admin_ReportChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5443);
/* harmony import */ var _services_memberService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8581);
/* harmony import */ var _services_helperService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9850);
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9396);
/* harmony import */ var _services_reportService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_8__, _components_forms_ReportForm__WEBPACK_IMPORTED_MODULE_11__, _components_admin_ReportChart__WEBPACK_IMPORTED_MODULE_12__, _services_memberService__WEBPACK_IMPORTED_MODULE_13__, _services_dataService__WEBPACK_IMPORTED_MODULE_15__, _services_reportService__WEBPACK_IMPORTED_MODULE_16__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_5__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_8__, _components_forms_ReportForm__WEBPACK_IMPORTED_MODULE_11__, _components_admin_ReportChart__WEBPACK_IMPORTED_MODULE_12__, _services_memberService__WEBPACK_IMPORTED_MODULE_13__, _services_dataService__WEBPACK_IMPORTED_MODULE_15__, _services_reportService__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const disabledDate = (current)=>{
    return current > dayjs__WEBPACK_IMPORTED_MODULE_7___default()().endOf("day");
};
async function getServerSideProps({ req  }) {
    const cookieData = cookie__WEBPACK_IMPORTED_MODULE_6__.parse(req.headers.cookie || "");
    const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_13__/* .getMembers */ .Zw)("all", "", "", "", cookieData.token);
    return {
        props: {
            info: cookieData,
            details: data
        }
    };
}
function Report({ info , details  }) {
    const [breadcrumb, setBreadcrumb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [municipalities, setMunicipalities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [memberStatus, setMemberStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [allBarangay, setAllBarangay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [reportData, setReportData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [disableMunicipality, setDisableMunicipality] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [typeValue, setTypeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Municipality");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("members");
    const [municipality, setMunicipality] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [municipalityName, setMunicipalityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dateFrom, setDateFrom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dateFromString, setDateFromString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dateTo, setDateTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dateToString, setDateToString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [viewTable, setViewTable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [listOfGeneralStatus, setListOfGeneralStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [classtype, setClasstype] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [graphTitle, setGraphTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [passedAway, setPassedAway] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [highRisk, setHighRisk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [atRisk, setAtRisk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [inactive, setInactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [reportGraphLabels, setReportGraphLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [activeData, setActiveData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [inactiveData, setInactiveData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [highRiskData, setHighRiskData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [atRiskData, setAtRiskData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [passedAwayData, setPassedAwayData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [reportTitle, setReportTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const municipalityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dateFromRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dateToRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isDashboard, setIsDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMember, setIsMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUser, setIsUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isReport, setIsReport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const generateData = async ()=>{
        setLoading(true);
        const { data  } = await (0,_services_reportService__WEBPACK_IMPORTED_MODULE_16__/* .generateMemberReport */ .d0)(typeValue, dateFrom, dateTo, municipality, "members", userId);
        setClasstype(data.classtype);
        setListOfGeneralStatus(data.listOfGeneralStatus);
        setPassedAway(data.passed_away);
        setHighRisk(data.high_risk);
        setAtRisk(data.at_risk);
        setInactive(data.inactive);
        setActive(data.active);
        setReportGraphLabels(data.labels);
        setActiveData(data.activeData);
        setInactiveData(data.inactiveData);
        setHighRiskData(data.highRiskData);
        setAtRiskData(data.atRiskData);
        setPassedAwayData(data.passedAwayData);
        setViewTable(true);
        setLoading(false);
    };
    const getSeniorStatuses = async ()=>{
        const { data  } = await (0,_services_reportService__WEBPACK_IMPORTED_MODULE_16__/* .getMemberStatuses */ .Ju)();
        setMemberStatus(data.member_statuses);
    };
    const setBarangay = async (value, value2)=>{
        setMunicipalityName(value2.children);
        setMunicipality(value);
        setLoading(true);
        try {
            const { barangays  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_15__/* .getBarangays */ .EZ)(value);
            setAllBarangay(barangays);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong.");
        }
    };
    const setDateInputFrom = (date, dateString)=>{
        if (date) {
            setDateFrom((0,_services_helperService__WEBPACK_IMPORTED_MODULE_14__/* .formatDate */ .p6)(date, "YYYY-MM-DD"));
            setDateFromString((0,_services_helperService__WEBPACK_IMPORTED_MODULE_14__/* .formatDate */ .p6)(date, "MMMM DD, YYYY"));
        } else {
            setDateFrom("");
            setDateFromString("");
        }
    };
    const setDateInputTo = (date, dateString)=>{
        if (date) {
            setDateTo((0,_services_helperService__WEBPACK_IMPORTED_MODULE_14__/* .formatDate */ .p6)(date, "YYYY-MM-DD"));
            setDateToString((0,_services_helperService__WEBPACK_IMPORTED_MODULE_14__/* .formatDate */ .p6)(date, "MMMM DD, YYYY"));
        } else {
            setDateTo("");
            setDateToString("");
        }
    };
    const setRightInput = (value)=>{
        setTypeValue(value);
        if (value == "Barangay") {
            setDisableMunicipality(false);
        } else {
            setDisableMunicipality(true);
        }
    };
    const reloadPage = ()=>{
        router.reload(window.location.pathname);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUserId(info.user_id);
        const roleLabel = `Level: ${info.user_role} |`;
        setBreadcrumb([
            roleLabel,
            "Dashboard",
            ">>",
            "Member Status Reports"
        ]);
        if (details.member_status == "success") {
            setMunicipalities(details.selectedMunicipalities);
        }
        getSeniorStatuses();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        role: info.user_role,
        isDashboard: isDashboard,
        isMember: isMember,
        isUser: isUser,
        isReport: isReport,
        title: "Administration Panel - Member Status Reports",
        trail: breadcrumb,
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                message: "Loading, please wait ...",
                pcolor: "bg-yellow-500"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_ReportForm__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                disabledDate: disabledDate,
                ReportTable: _components_admin_ReportTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                ReportChart: _components_admin_ReportChart__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                disableMunicipality: disableMunicipality,
                setRightInput: setRightInput,
                setBarangay: setBarangay,
                municipalities: municipalities,
                municipalityRef: municipalityRef,
                setDateInputFrom: setDateInputFrom,
                dateFromRef: dateFromRef,
                setDateInputTo: setDateInputTo,
                dateToRef: dateToRef,
                reloadPage: reloadPage,
                listOfGeneralStatus: listOfGeneralStatus,
                viewTable: viewTable,
                classtype: classtype,
                passedAway: passedAway,
                highRisk: highRisk,
                atRisk: atRisk,
                inactive: inactive,
                active: active,
                memberStatus: memberStatus,
                allBarangay: allBarangay,
                reportData: reportData,
                typeValue: typeValue,
                reportTitle: reportTitle,
                reportGraphLabels: reportGraphLabels,
                activeData: activeData,
                inactiveData: inactiveData,
                highRiskData: highRiskData,
                atRiskData: atRiskData,
                passedAwayData: passedAwayData,
                graphTitle: graphTitle,
                dateFromString: dateFromString,
                dateToString: dateToString,
                municipalityName: municipalityName,
                municipality: municipality,
                generateData: generateData,
                dateFrom: dateFrom,
                dateTo: dateTo,
                setGraphTitle: setGraphTitle,
                setReportTitle: setReportTitle,
                page: page,
                reportPage: "Member Status",
                cspan: "7"
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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 53:
/***/ ((module) => {

module.exports = require("react-to-print");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [747,9850,9086,5120,8581,5040], () => (__webpack_exec__(3378)));
module.exports = __webpack_exports__;

})();