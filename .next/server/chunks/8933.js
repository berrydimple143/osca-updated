"use strict";
exports.id = 8933;
exports.ids = [8933];
exports.modules = {

/***/ 895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(955);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js_auto__WEBPACK_IMPORTED_MODULE_3__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__]);
([chart_js_auto__WEBPACK_IMPORTED_MODULE_3__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const BarChart = ({ graphLabels , graphValues , legendLabel , graphTitle , graphWidth , graphHeight , setLoading  })=>{
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let gLabels = graphLabels.split(",");
    let gValues = graphValues.split(",");
    let maxVal = Math.max(...gValues);
    const onClick = async (event)=>{
        let points = (0,react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.getElementsAtEvent)(chartRef.current, event);
        if (points.length > 0) {
            setLoading(true);
            let first = points[0];
            let municipality = data.labels[first.index];
            let ps = await router.push({
                pathname: "/admin/members",
                query: {
                    municipality: municipality
                }
            });
            setLoading(false);
        }
    };
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        onHover: (event, chartElement)=>{
            if (chartElement.length == 1) {
                event.native.target.style.cursor = "pointer";
            } else {
                event.native.target.style.cursor = "";
            }
        },
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: graphTitle
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: maxVal + 3,
                ticks: {
                    callback: function(val, index) {
                        return index % 2 === 0 ? this.getLabelForValue(val) : "";
                    },
                    color: "#7d4304"
                }
            }
        }
    };
    const data = {
        labels: gLabels,
        datasets: [
            {
                label: legendLabel,
                data: gValues,
                backgroundColor: "rgb(255,255,0, 0.5)",
                hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                borderColor: "#7d4304",
                fill: true,
                borderWidth: 1
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {
            data: data,
            width: graphWidth,
            height: graphHeight,
            options: options,
            ref: chartRef,
            onClick: onClick
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StatisticsCard = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `h-11 ${props.bgColor} flex items-center justify-between`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mr-0 text-white text-lg pl-3",
                    children: props.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "py-1 text-2xl ml-5",
                children: props.count
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticsCard);


/***/ }),

/***/ 5154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getMunicipalitiesMembers)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseURL = `${"https://rpcbulacan.com"}/api`;
const getMunicipalitiesMembers = async (token)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${baseURL}/get-municipalities-members`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
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