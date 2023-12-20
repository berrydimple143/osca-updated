"use strict";
exports.id = 5040;
exports.ids = [5040];
exports.modules = {

/***/ 5443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(955);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js_auto__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__]);
([chart_js_auto__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ReportChart = ({ reportGraphLabels , activeData , inactiveData , highRiskData , atRiskData , passedAwayData , employedData , unemployedData , selfEmployedData , elementaryData , highSchoolData , collegeData , vocationalData , masterDegreeData , doctoralData , singleData , marriedData , divorcedData , separatedData , widowedData , maleData , femaleData , catholicData , iglesiaData , baptistData , adventistData , jilData , victoryData , cocData , islamData , buddhistData , methodistData , othersData , indigentData , pensionerData , supportedData , pwdData , alzheimerData , arthritisData , cancerData , kidneyData , pulmonaryData , diabetesData , heartData , cholesterolData , pneumoniaData , osteoporosisData , otherIllnessData , graphTitle , graphWidth , graphHeight , reportPage  })=>{
    let gLabels = reportGraphLabels.split(",");
    let data = {};
    let maxVal = 5;
    if (reportPage == "Member Status") {
        let activeValues = activeData.split(",");
        let inactiveValues = inactiveData.split(",");
        let atRiskValues = atRiskData.split(",");
        let highRiskValues = highRiskData.split(",");
        let passedAwayValues = passedAwayData.split(",");
        let gValues = [
            ...activeValues,
            ...inactiveValues,
            ...atRiskValues,
            ...highRiskValues,
            ...passedAwayValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Active",
                    data: activeValues,
                    backgroundColor: "rgba(60, 255, 113, 0.5)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Inactive",
                    data: inactiveValues,
                    backgroundColor: "rgb(255,255,0, 0.5)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "At Risk",
                    data: atRiskValues,
                    backgroundColor: "rgb(0,0,255, 0.5)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "High Risk",
                    data: highRiskValues,
                    backgroundColor: "rgb(249,105,14, 0.5)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Passed Away",
                    data: passedAwayValues,
                    backgroundColor: "rgb(255,0,0, 0.9)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Employment Status") {
        let employedValues = employedData.split(",");
        let unemployedValues = unemployedData.split(",");
        let selfEmployedValues = selfEmployedData.split(",");
        let gValues = [
            ...employedValues,
            ...unemployedValues,
            ...selfEmployedValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Employed",
                    data: employedValues,
                    backgroundColor: "rgba(0, 255, 0, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Unemployed",
                    data: unemployedValues,
                    backgroundColor: "rgb(255, 0, 0, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Self-Employed",
                    data: selfEmployedValues,
                    backgroundColor: "rgb(0, 0, 255, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Educational Attainment") {
        let elementaryValues = elementaryData.split(",");
        let highSchoolValues = highSchoolData.split(",");
        let collegeValues = collegeData.split(",");
        let vocationalValues = vocationalData.split(",");
        let masterDegreeValues = masterDegreeData.split(",");
        let doctoralValues = doctoralData.split(",");
        let gValues = [
            ...elementaryValues,
            ...highSchoolValues,
            ...collegeValues,
            ...vocationalValues,
            ...masterDegreeValues,
            ...doctoralValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Elementary",
                    data: elementaryValues,
                    backgroundColor: "rgba(255, 20, 20, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "High School",
                    data: highSchoolValues,
                    backgroundColor: "rgba(10, 10, 255, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "College",
                    data: collegeValues,
                    backgroundColor: "rgba(80, 0, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#000",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Vocational",
                    data: vocationalValues,
                    backgroundColor: "rgba(0, 255, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Master's Degree",
                    data: masterDegreeValues,
                    backgroundColor: "#FF00FF",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Doctoral",
                    data: doctoralValues,
                    backgroundColor: "#FFE900",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Civil Status") {
        let singleValues = singleData.split(",");
        let marriedValues = marriedData.split(",");
        let widowedValues = widowedData.split(",");
        let separatedValues = separatedData.split(",");
        let divorcedValues = divorcedData.split(",");
        let gValues = [
            ...singleValues,
            ...marriedValues,
            ...widowedValues,
            ...separatedValues,
            ...divorcedValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Single",
                    data: singleValues,
                    backgroundColor: "rgba(0, 255, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Married",
                    data: marriedValues,
                    backgroundColor: "rgba(10, 10, 255, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Widowed",
                    data: widowedValues,
                    backgroundColor: "rgba(80, 0, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#000",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Separated",
                    data: separatedValues,
                    backgroundColor: "rgba(255, 20, 20, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Divorced",
                    data: divorcedValues,
                    backgroundColor: "rgba(216,250,8, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Gender") {
        let maleValues = maleData.split(",");
        let femaleValues = femaleData.split(",");
        let gValues = [
            ...maleValues,
            ...femaleValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Male",
                    data: maleValues,
                    backgroundColor: "rgba(0, 0, 255, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Female",
                    data: femaleValues,
                    backgroundColor: "#FF00FF",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Religion") {
        let catholicValues = catholicData.split(",");
        let iglesiaValues = iglesiaData.split(",");
        let baptistValues = baptistData.split(",");
        let adventistValues = adventistData.split(",");
        let jilValues = jilData.split(",");
        let victoryValues = victoryData.split(",");
        let cocValues = cocData.split(",");
        let islamValues = islamData.split(",");
        let buddhistValues = buddhistData.split(",");
        let methodistValues = methodistData.split(",");
        let othersValues = othersData.split(",");
        let gValues = [
            ...catholicValues,
            ...iglesiaValues,
            ...baptistValues,
            ...adventistValues,
            ...jilValues,
            ...victoryValues,
            ...cocValues,
            ...islamValues,
            ...buddhistValues,
            ...methodistValues,
            ...othersValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Roman Catholic",
                    data: catholicValues,
                    backgroundColor: "rgba(255, 20, 20, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    //barPercentage: 0.5,
                    //barThickness: 6,
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Iglesia ni Cristo",
                    data: iglesiaValues,
                    backgroundColor: "rgba(10, 10, 255, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Baptist Church",
                    data: baptistValues,
                    backgroundColor: "rgba(0, 255, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#000",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Adventist",
                    data: adventistValues,
                    backgroundColor: "rgba(80, 0, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Jesus is Lord",
                    data: jilValues,
                    backgroundColor: "#FF00FF",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Victory",
                    data: victoryValues,
                    backgroundColor: "rgba(216,250,8, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Church of Christ",
                    data: cocValues,
                    backgroundColor: "#800080",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#000",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Islam",
                    data: islamValues,
                    backgroundColor: "#009000",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Buddhist",
                    data: buddhistValues,
                    backgroundColor: "#FF9800",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Methodist",
                    data: methodistValues,
                    backgroundColor: "#024D36",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Others",
                    data: othersValues,
                    backgroundColor: "#33FFE9",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Classification") {
        let indigentValues = indigentData.split(",");
        let pensionerValues = pensionerData.split(",");
        let supportedValues = supportedData.split(",");
        let pwdValues = pwdData.split(",");
        let gValues = [
            ...indigentValues,
            ...pensionerValues,
            ...supportedValues,
            ...pwdValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Indigent",
                    data: indigentValues,
                    backgroundColor: "rgba(0, 255, 0, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Pensioner",
                    data: pensionerValues,
                    backgroundColor: "rgb(255, 0, 0, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Supported",
                    data: supportedValues,
                    backgroundColor: "rgb(0, 0, 255, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "PWD",
                    data: pwdValues,
                    backgroundColor: "rgb(10, 125, 255, 0.8)",
                    hoverBackgroundColor: "rgb(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    } else if (reportPage == "Common Illness") {
        let alzheimerValues = alzheimerData.split(",");
        let arthritisValues = arthritisData.split(",");
        let cancerValues = cancerData.split(",");
        let kidneyValues = kidneyData.split(",");
        let pulmonaryValues = pulmonaryData.split(",");
        let diabetesValues = diabetesData.split(",");
        let heartValues = heartData.split(",");
        let cholesterolValues = cholesterolData.split(",");
        let pneumoniaValues = pneumoniaData.split(",");
        let osteoporosisValues = osteoporosisData.split(",");
        let otherIllnessValues = otherIllnessData.split(",");
        let gValues = [
            ...alzheimerValues,
            ...arthritisValues,
            ...cancerValues,
            ...kidneyValues,
            ...pulmonaryValues,
            ...diabetesValues,
            ...heartValues,
            ...cholesterolValues,
            ...pneumoniaValues,
            ...osteoporosisValues,
            ...otherIllnessValues
        ];
        maxVal = Math.max(...gValues);
        data = {
            labels: gLabels,
            datasets: [
                {
                    label: "Alzheimer's Disease",
                    data: alzheimerValues,
                    backgroundColor: "rgba(255, 210, 100, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Arthritis",
                    data: arthritisValues,
                    backgroundColor: "rgba(10, 10, 255, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Cancer",
                    data: cancerValues,
                    backgroundColor: "rgba(80, 0, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#000",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Chronic Kidney Disease",
                    data: kidneyValues,
                    backgroundColor: "rgba(0, 255, 0, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "COPD",
                    data: pulmonaryValues,
                    backgroundColor: "#FF00FF",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Diabetes",
                    data: diabetesValues,
                    backgroundColor: "rgba(216,250,8, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Heart Disease",
                    data: heartValues,
                    backgroundColor: "rgba(255, 10, 10, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#000",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "High Cholesterol",
                    data: cholesterolValues,
                    backgroundColor: "rgba(10, 255, 200, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Influenza and Pneumonia",
                    data: pneumoniaValues,
                    backgroundColor: "rgba(255,10,100, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Osteoporosis",
                    data: osteoporosisValues,
                    backgroundColor: "rgba(216,250,254, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                },
                {
                    label: "Others",
                    data: otherIllnessValues,
                    backgroundColor: "rgba(100,100,100, 0.8)",
                    hoverBackgroundColor: "rgba(255,255,0, 0.8)",
                    borderColor: "#7d4304",
                    fill: true,
                    borderWidth: 1
                }
            ]
        };
    }
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col border mr-5 mb-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pt-0 w-near-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {
                data: data,
                width: graphWidth,
                height: graphHeight,
                options: options
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



const ReportTable = ({ municipalities , memberStatus , allBarangay , reportData , reloadPage , title , typeValue , reportPage , classtype , listOfGeneralStatus , passedAway , highRisk , atRisk , inactive , active , reportTitle , employed , unemployed , selfEmployed , elementary , highSchool , college , vocational , masterDegree , doctoral , single , married , divorced , separated , widowed , male , female , catholic , iglesia , baptist , adventist , jil , victory , coc , islam , buddhist , methodist , others , indigent , pensioner , supported , pwd , alzheimer , arthritis , cancer , kidney , pulmonary , diabetes , heart , cholesterol , pneumonia , osteoporosis , otherIllness , cspan  })=>{
    let allAlzheimer = 0;
    let allArthritis = 0;
    let allCancer = 0;
    let allKidney = 0;
    let allPulmonary = 0;
    let allDiabetes = 0;
    let allHeart = 0;
    let allCholesterol = 0;
    let allPneumonia = 0;
    let allOsteoporosis = 0;
    let allOtherIllness = 0;
    let allIndigent = 0;
    let allPensioner = 0;
    let allSupported = 0;
    let allPwd = 0;
    let allCatholic = 0;
    let allIglesia = 0;
    let allBaptist = 0;
    let allAdventist = 0;
    let allJil = 0;
    let allVictory = 0;
    let allCoc = 0;
    let allIslam = 0;
    let allBuddhist = 0;
    let allMethodist = 0;
    let allOthers = 0;
    let total = 0;
    let allMale = 0;
    let allFemale = 0;
    let allPassedAway = 0;
    let allActive = 0;
    let allInactive = 0;
    let allAtRisk = 0;
    let allHighRisk = 0;
    let allEmployed = 0;
    let allUnemployed = 0;
    let allSelfEmployed = 0;
    let allElementary = 0;
    let allHighSchool = 0;
    let allCollege = 0;
    let allVocational = 0;
    let allMasters = 0;
    let allDoctoral = 0;
    let allSingle = 0;
    let allMarried = 0;
    let allWidowed = 0;
    let allSeparated = 0;
    let allDivorced = 0;
    let cName = "";
    let sum = [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pt-0 w-near-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "overflow-x-hidden sm:-mx-2 lg:-mx-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-2 inline-block min-w-full sm:px-2 lg:px-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "min-w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                        className: "bg-white border",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    colspan: `${cspan}`,
                                                    className: "border text-sm text-center font-large px-1 py-1 text-left",
                                                    children: `${reportTitle}`
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border text-sm font-small text-gray-900 px-1 py-1 text-left",
                                                        children: `${typeValue}`
                                                    }),
                                                    reportPage == "Member Status" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Active"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Inactive"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "At Risk"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "High Risk"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Passed Away"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Employment Status" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Employed"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Unemployed"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Self-Employed"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Educational Attainment" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Elementary"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "High School"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "College"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Vocational"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Master's Degree"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Doctoral"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Civil Status" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Single"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Married"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Widowed"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Separated"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Divorced"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Gender" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Male"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Female"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Religion" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Roman Catholic"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Iglesia ni Cristo"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Baptist Church"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Adventist"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Jesus is Lord"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Victory"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Church of Christ"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Islam"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Buddhist"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Methodist"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Others"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Classification" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Indigent"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Pensioner"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Supported"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "PWD"
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Common Illness" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Alzheimer's Disease"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Arthritis"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Cancer"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Chronic Kidney Disease"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "COPD"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Diabetes"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Heart Disease"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "High Cholesterol"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Influenza and Pneumonia"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Osteoporosis"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                                children: "Others"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border text-sm text-center font-small text-gray-900 px-1 py-1 text-left",
                                                        children: "Total No. of Senior Citizens"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                        children: [
                                            listOfGeneralStatus && listOfGeneralStatus.map((item, index)=>{
                                                if (reportPage == "Member Status") {
                                                    total = passedAway[index] + highRisk[index] + atRisk[index] + inactive[index] + active[index];
                                                    allPassedAway += passedAway[index];
                                                    allActive += active[index];
                                                    allInactive += inactive[index];
                                                    allAtRisk += atRisk[index];
                                                    allHighRisk += highRisk[index];
                                                } else if (reportPage == "Employment Status") {
                                                    total = employed[index] + unemployed[index] + selfEmployed[index];
                                                    allEmployed += employed[index];
                                                    allUnemployed += unemployed[index];
                                                    allSelfEmployed += selfEmployed[index];
                                                } else if (reportPage == "Educational Attainment") {
                                                    total = elementary[index] + highSchool[index] + college[index] + vocational[index] + masterDegree[index] + doctoral[index];
                                                    allElementary += elementary[index];
                                                    allHighSchool += highSchool[index];
                                                    allCollege += college[index];
                                                    allVocational += vocational[index];
                                                    allMasters += masterDegree[index];
                                                    allDoctoral += doctoral[index];
                                                } else if (reportPage == "Civil Status") {
                                                    total = single[index] + married[index] + divorced[index] + separated[index] + widowed[index];
                                                    allSingle += single[index];
                                                    allMarried += married[index];
                                                    allWidowed += widowed[index];
                                                    allSeparated += separated[index];
                                                    allDivorced += divorced[index];
                                                } else if (reportPage == "Gender") {
                                                    total = male[index] + female[index];
                                                    allMale += male[index];
                                                    allFemale += female[index];
                                                } else if (reportPage == "Religion") {
                                                    total = catholic[index] + iglesia[index] + baptist[index] + adventist[index] + jil[index] + victory[index] + coc[index] + islam[index] + buddhist[index] + methodist[index] + others[index];
                                                    allCatholic += catholic[index];
                                                    allIglesia += iglesia[index];
                                                    allBaptist += baptist[index];
                                                    allAdventist += adventist[index];
                                                    allJil += jil[index];
                                                    allVictory += victory[index];
                                                    allCoc += coc[index];
                                                    allIslam += islam[index];
                                                    allBuddhist += buddhist[index];
                                                    allMethodist += methodist[index];
                                                    allOthers += others[index];
                                                } else if (reportPage == "Classification") {
                                                    total = indigent[index] + pensioner[index] + supported[index] + pwd[index];
                                                    allIndigent += indigent[index];
                                                    allPensioner += pensioner[index];
                                                    allSupported += supported[index];
                                                    allPwd += pwd[index];
                                                } else if (reportPage == "Common Illness") {
                                                    total = alzheimer[index] + arthritis[index] + cancer[index] + kidney[index] + pulmonary[index] + diabetes[index] + heart[index] + cholesterol[index] + pneumonia[index] + osteoporosis[index] + otherIllness[index];
                                                    allAlzheimer += alzheimer[index];
                                                    allArthritis += arthritis[index];
                                                    allCancer += cancer[index];
                                                    allKidney += kidney[index];
                                                    allPulmonary += pulmonary[index];
                                                    allDiabetes += diabetes[index];
                                                    allHeart += heart[index];
                                                    allCholesterol += cholesterol[index];
                                                    allPneumonia += pneumonia[index];
                                                    allOsteoporosis += osteoporosis[index];
                                                    allOtherIllness += otherIllness[index];
                                                }
                                                sum.push(total);
                                                if (typeValue == "Municipality") {
                                                    cName = item.municipality_name;
                                                } else {
                                                    cName = item.barangay_name;
                                                }
                                                if (reportPage == "Member Status") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: active[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: inactive[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: atRisk[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: highRisk[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: passedAway[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Employment Status") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: employed[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: unemployed[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: selfEmployed[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Educational Attainment") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: elementary[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: highSchool[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: college[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: vocational[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: masterDegree[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: doctoral[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Civil Status") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: single[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: married[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: widowed[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: separated[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: divorced[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Gender") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: male[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: female[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Religion") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: catholic[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: iglesia[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: baptist[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: adventist[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: jil[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: victory[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: coc[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: islam[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: buddhist[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: methodist[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: others[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Classification") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: indigent[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: pensioner[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: supported[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: pwd[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                } else if (reportPage == "Common Illness") {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-xs font-bold text-black",
                                                                children: cName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: alzheimer[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: arthritis[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: cancer[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: kidney[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: pulmonary[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: diabetes[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: heart[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: cholesterol[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: pneumonia[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: osteoporosis[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: otherIllness[index]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black",
                                                                children: total
                                                            })
                                                        ]
                                                    }, index);
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "border",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "border px-1 py-1 whitespace-nowrap text-xl font-bold text-black",
                                                        children: "Total"
                                                    }),
                                                    reportPage == "Member Status" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allActive
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allInactive
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allAtRisk
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allHighRisk
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allPassedAway
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Employment Status" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allEmployed
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allUnemployed
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allSelfEmployed
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Educational Attainment" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allElementary
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allHighSchool
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allCollege
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allVocational
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allMasters
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allDoctoral
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Civil Status" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allSingle
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allMarried
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allWidowed
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allSeparated
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allDivorced
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Gender" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allMale
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allFemale
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Religion" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allCatholic
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allIglesia
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allBaptist
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allAdventist
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allJil
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allVictory
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allCoc
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allIslam
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allBuddhist
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allMethodist
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allOthers
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Classification" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allIndigent
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allPensioner
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allSupported
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allPwd
                                                            })
                                                        ]
                                                    }),
                                                    reportPage == "Common Illness" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allAlzheimer
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allArthritis
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allCancer
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allKidney
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allPulmonary
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allDiabetes
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allHeart
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allCholesterol
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allPneumonia
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allOsteoporosis
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                                children: allOtherIllness
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black",
                                                        children: sum.reduce((a, b)=>a + b, 0)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportTable);


/***/ }),

/***/ 5040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _printable_PrintTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5489);
/* harmony import */ var _printable_PrintChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2935);
/* harmony import */ var _services_reportService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_printable_PrintChart__WEBPACK_IMPORTED_MODULE_6__, _services_reportService__WEBPACK_IMPORTED_MODULE_7__]);
([_printable_PrintChart__WEBPACK_IMPORTED_MODULE_6__, _services_reportService__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const baseURL = `${"https://rpcbulacan.com"}`;
const ReportForm = ({ disabledDate , ReportTable , ReportChart , disableMunicipality , setRightInput , setBarangay , municipalities , municipalityRef , setDateInputFrom , dateFromRef , setDateInputTo , dateToRef , reloadPage , listOfGeneralStatus , viewTable , classtype , passedAway , highRisk , atRisk , inactive , active , memberStatus , allBarangay , reportData , typeValue , reportTitle , reportPage , reportGraphLabels , activeData , inactiveData , highRiskData , atRiskData , passedAwayData , graphTitle , employed , unemployed , selfEmployed , employedData , unemployedData , selfEmployedData , elementary , highSchool , college , vocational , masterDegree , doctoral , elementaryData , highSchoolData , collegeData , vocationalData , masterDegreeData , doctoralData , single , married , divorced , separated , widowed , singleData , marriedData , divorcedData , separatedData , widowedData , male , female , maleData , femaleData , catholic , iglesia , baptist , adventist , jil , victory , coc , islam , buddhist , methodist , others , catholicData , iglesiaData , baptistData , adventistData , jilData , victoryData , cocData , islamData , buddhistData , methodistData , othersData , indigent , pensioner , supported , pwd , indigentData , pensionerData , supportedData , pwdData , alzheimer , arthritis , cancer , kidney , pulmonary , diabetes , heart , cholesterol , pneumonia , osteoporosis , otherIllness , alzheimerData , arthritisData , cancerData , kidneyData , pulmonaryData , diabetesData , heartData , cholesterolData , pneumoniaData , osteoporosisData , otherIllnessData , cspan , dateFromString , dateToString , municipalityName , municipality , generateData , dateFrom , dateTo , setGraphTitle , setReportTitle , page  })=>{
    const [canPrint, setCanPrint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [canExport, setCanExport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const printTableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const printChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handlePrinting = ()=>{
        if (canPrint) {
            handlePrintTable();
        } else {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please view reports first before you can print.");
        }
    };
    const handleExport = async ()=>{
        if (canExport) {
            const params = {
                listOfGeneralStatus,
                passedAway,
                highRisk,
                atRisk,
                inactive,
                active,
                single,
                married,
                widowed,
                divorced,
                separated,
                employed,
                unemployed,
                selfEmployed,
                elementary,
                highSchool,
                college,
                vocational,
                masterDegree,
                doctoral,
                male,
                female,
                catholic,
                iglesia,
                baptist,
                adventist,
                jil,
                victory,
                coc,
                islam,
                buddhist,
                methodist,
                others,
                indigent,
                pensioner,
                supported,
                pwd,
                alzheimer,
                arthritis,
                cancer,
                kidney,
                pulmonary,
                diabetes,
                heart,
                cholesterol,
                pneumonia,
                osteoporosis,
                otherIllness,
                page,
                ctype: typeValue
            };
            const { data  } = await (0,_services_reportService__WEBPACK_IMPORTED_MODULE_7__/* .exportReport */ .Hy)(params);
            window.open(`${baseURL}/downloadReport/${data}`, "_blank");
        } else {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please view reports first before you can export.");
        }
    };
    const handlePrintTable = (0,react_to_print__WEBPACK_IMPORTED_MODULE_2__.useReactToPrint)({
        content: ()=>printTableRef.current,
        onAfterPrint: ()=>{
            handlePrintChart();
        }
    });
    const handlePrintChart = (0,react_to_print__WEBPACK_IMPORTED_MODULE_2__.useReactToPrint)({
        content: ()=>printChartRef.current,
        onAfterPrint: ()=>{
            reloadPage();
        }
    });
    const viewData = ()=>{
        if (typeValue == "Barangay") {
            setGraphTitle(`Total number of senior citizen members of ${municipalityName} from ${dateFromString} to ${dateToString}`);
            if (municipality == "") {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please select a municipality.");
                municipalityRef.current.focus();
            } else {
                if (dateFrom == "" && dateTo == "") {
                    antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please provide a starting and an ending date.");
                    dateFromRef.current.focus();
                } else if (dateFrom == "") {
                    antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please provide a starting date.");
                    dateFromRef.current.focus();
                } else if (dateTo == "") {
                    antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please provide an ending date.");
                    dateToRef.current.focus();
                } else if (dateTo < dateFrom) {
                    antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Date to should be after or the same as date from.");
                    dateToRef.current.focus();
                } else {
                    setReportTitle(`Municipality of ${municipalityName} - ${reportPage} per Barangay from ${dateFromString} to ${dateToString}`);
                    generateData();
                    setCanPrint(true);
                    setCanExport(true);
                }
            }
        } else {
            setGraphTitle(`Total number of senior citizen members per municipality from ${dateFromString} to ${dateToString}`);
            if (dateFrom == "" && dateTo == "") {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please provide a starting and an ending date.");
                dateFromRef.current.focus();
            } else if (dateFrom == "") {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please provide a starting date.");
                dateFromRef.current.focus();
            } else if (dateTo == "") {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Please provide an ending date.");
                dateToRef.current.focus();
            } else if (dateTo < dateFrom) {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Date to should be after or the same as date from.");
                dateToRef.current.focus();
            } else {
                setReportTitle(`${reportPage} per Municipality from ${dateFromString} to ${dateToString}`);
                generateData();
                setCanPrint(true);
                setCanExport(true);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border p-5 mr-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                        size: "middle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-xl",
                            children: [
                                "Data and Analytics - ",
                                reportPage
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Group, {
                                    compact: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                            style: {
                                                width: "100px"
                                            },
                                            disabled: true,
                                            placeholder: "Type:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                            onChange: setRightInput,
                                            placeholder: "Select type here ...",
                                            defaultValue: "Municipality",
                                            style: {
                                                width: "213px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                                    value: "Municipality",
                                                    children: "All Municipality"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                                    value: "Barangay",
                                                    children: "Per Barangay"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !disableMunicipality && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    onChange: setBarangay,
                                    placeholder: "Select municipality here ...",
                                    ref: municipalityRef,
                                    style: {
                                        width: "250px"
                                    },
                                    size: "medium",
                                    children: [
                                        " ",
                                        municipalities && municipalities.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                                value: item.municipality_code_number,
                                                children: item.municipality_name
                                            }, index))
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Group, {
                                    compact: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                            style: {
                                                width: "100px"
                                            },
                                            disabled: true,
                                            placeholder: "Date From:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.DatePicker, {
                                            onChange: setDateInputFrom,
                                            format: "MMMM DD, YYYY",
                                            disabledDate: disabledDate,
                                            ref: dateFromRef,
                                            style: {
                                                width: "212px"
                                            },
                                            size: "medium",
                                            placeholder: "Pick a date here ..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Group, {
                                    compact: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                            style: {
                                                width: "80px"
                                            },
                                            disabled: true,
                                            placeholder: "Date To:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.DatePicker, {
                                            onChange: setDateInputTo,
                                            format: "MMMM DD, YYYY",
                                            disabledDate: disabledDate,
                                            ref: dateToRef,
                                            style: {
                                                width: "172px"
                                            },
                                            size: "medium",
                                            placeholder: "Pick a date here ..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ReloadOutlined, {}),
                                    onClick: reloadPage,
                                    className: "rounded-none",
                                    size: "default",
                                    children: "Refresh"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    onClick: viewData,
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SearchOutlined, {}),
                                    className: "rounded-none",
                                    size: "default",
                                    children: "Preview"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                    title: "Tips before you print: You must adjust the scale in more settings after you click this button in order to fit the printing into one page.",
                                    placement: "top",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PrinterOutlined, {}),
                                        onClick: handlePrinting,
                                        className: "rounded-none",
                                        size: "default",
                                        children: "Print"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ExportOutlined, {}),
                                    onClick: handleExport,
                                    className: "rounded-none",
                                    size: "default",
                                    children: "Export"
                                })
                            ]
                        })
                    })
                ]
            }),
            listOfGeneralStatus && viewTable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_printable_PrintTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ref: printTableRef,
                            classtype: classtype,
                            listOfGeneralStatus: listOfGeneralStatus,
                            passedAway: passedAway,
                            highRisk: passedAway,
                            atRisk: atRisk,
                            inactive: inactive,
                            active: active,
                            employed: employed,
                            unemployed: unemployed,
                            selfEmployed: selfEmployed,
                            elementary: elementary,
                            highSchool: highSchool,
                            college: college,
                            vocational: vocational,
                            masterDegree: masterDegree,
                            doctoral: doctoral,
                            single: single,
                            married: married,
                            divorced: divorced,
                            separated: separated,
                            widowed: widowed,
                            male: male,
                            female: female,
                            catholic: catholic,
                            iglesia: iglesia,
                            baptist: baptist,
                            adventist: adventist,
                            jil: jil,
                            victory: victory,
                            coc: coc,
                            islam: islam,
                            buddhist: buddhist,
                            methodist: methodist,
                            others: others,
                            indigent: indigent,
                            pensioner: pensioner,
                            supported: supported,
                            pwd: pwd,
                            alzheimer: alzheimer,
                            arthritis: arthritis,
                            cancer: cancer,
                            kidney: kidney,
                            pulmonary: pulmonary,
                            diabetes: diabetes,
                            heart: heart,
                            cholesterol: cholesterol,
                            pneumonia: pneumonia,
                            osteoporosis: osteoporosis,
                            otherIllness: otherIllness,
                            municipalities: municipalities,
                            memberStatus: memberStatus,
                            allBarangay: allBarangay,
                            reportData: reportData,
                            reloadPage: reloadPage,
                            typeValue: typeValue,
                            reportTitle: reportTitle,
                            reportPage: reportPage,
                            cspan: cspan
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_printable_PrintChart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            ref: printChartRef,
                            reportPage: reportPage,
                            reportGraphLabels: reportGraphLabels,
                            activeData: activeData,
                            inactiveData: inactiveData,
                            highRiskData: highRiskData,
                            atRiskData: atRiskData,
                            passedAwayData: passedAwayData,
                            employedData: employedData,
                            unemployedData: unemployedData,
                            selfEmployedData: selfEmployedData,
                            elementaryData: elementaryData,
                            highSchoolData: highSchoolData,
                            collegeData: collegeData,
                            vocationalData: vocationalData,
                            masterDegreeData: masterDegreeData,
                            doctoralData: doctoralData,
                            singleData: singleData,
                            marriedData: marriedData,
                            divorcedData: divorcedData,
                            separatedData: separatedData,
                            widowedData: widowedData,
                            maleData: maleData,
                            femaleData: femaleData,
                            catholicData: catholicData,
                            iglesiaData: iglesiaData,
                            baptistData: baptistData,
                            adventistData: adventistData,
                            jilData: jilData,
                            victoryData: victoryData,
                            cocData: cocData,
                            islamData: islamData,
                            buddhistData: buddhistData,
                            methodistData: methodistData,
                            othersData: othersData,
                            indigentData: indigentData,
                            pensionerData: pensionerData,
                            supportedData: supportedData,
                            pwdData: pwdData,
                            alzheimerData: alzheimerData,
                            arthritisData: arthritisData,
                            cancerData: cancerData,
                            kidneyData: kidneyData,
                            pulmonaryData: pulmonaryData,
                            diabetesData: diabetesData,
                            heartData: heartData,
                            cholesterolData: cholesterolData,
                            pneumoniaData: pneumoniaData,
                            osteoporosisData: osteoporosisData,
                            otherIllnessData: otherIllnessData,
                            graphTitle: graphTitle,
                            graphWidth: "950",
                            graphHeight: "470"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_ReportChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_admin_ReportChart__WEBPACK_IMPORTED_MODULE_2__]);
_admin_ReportChart__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PrintChart = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, printChartRef)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: printChartRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_admin_ReportChart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            reportPage: props.reportPage,
            reportGraphLabels: props.reportGraphLabels,
            activeData: props.activeData,
            inactiveData: props.inactiveData,
            highRiskData: props.highRiskData,
            atRiskData: props.atRiskData,
            passedAwayData: props.passedAwayData,
            employedData: props.employedData,
            unemployedData: props.unemployedData,
            selfEmployedData: props.selfEmployedData,
            elementaryData: props.elementaryData,
            highSchoolData: props.highSchoolData,
            collegeData: props.collegeData,
            vocationalData: props.vocationalData,
            masterDegreeData: props.masterDegreeData,
            doctoralData: props.doctoralData,
            singleData: props.singleData,
            marriedData: props.marriedData,
            divorcedData: props.divorcedData,
            separatedData: props.separatedData,
            widowedData: props.widowedData,
            maleData: props.maleData,
            femaleData: props.femaleData,
            catholicData: props.catholicData,
            iglesiaData: props.iglesiaData,
            baptistData: props.baptistData,
            adventistData: props.adventistData,
            jilData: props.jilData,
            victoryData: props.victoryData,
            cocData: props.cocData,
            islamData: props.islamData,
            buddhistData: props.buddhistData,
            methodistData: props.methodistData,
            othersData: props.othersData,
            indigentData: props.indigentData,
            pensionerData: props.pensionerData,
            supportedData: props.supportedData,
            pwdData: props.pwdData,
            alzheimerData: props.alzheimerData,
            arthritisData: props.arthritisData,
            cancerData: props.cancerData,
            kidneyData: props.kidneyData,
            pulmonaryData: props.pulmonaryData,
            diabetesData: props.diabetesData,
            heartData: props.heartData,
            cholesterolData: props.cholesterolData,
            pneumoniaData: props.pneumoniaData,
            osteoporosisData: props.osteoporosisData,
            otherIllnessData: props.otherIllnessData,
            graphTitle: props.graphTitle,
            graphWidth: props.graphWidth,
            graphHeight: props.graphHeight
        })
    });
});
PrintChart.displayName = "OSCA";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_ReportTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1756);



const PrintTable = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, printTableRef)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: printTableRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_admin_ReportTable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            classtype: props.classtype,
            listOfGeneralStatus: props.listOfGeneralStatus,
            passedAway: props.passedAway,
            highRisk: props.highRisk,
            atRisk: props.atRisk,
            inactive: props.inactive,
            active: props.active,
            employed: props.employed,
            unemployed: props.unemployed,
            selfEmployed: props.selfEmployed,
            elementary: props.elementary,
            highSchool: props.highSchool,
            college: props.college,
            vocational: props.vocational,
            masterDegree: props.masterDegree,
            doctoral: props.doctoral,
            single: props.single,
            married: props.married,
            divorced: props.divorced,
            separated: props.separated,
            widowed: props.widowed,
            male: props.male,
            female: props.female,
            catholic: props.catholic,
            iglesia: props.iglesia,
            baptist: props.baptist,
            adventist: props.adventist,
            jil: props.jil,
            victory: props.victory,
            coc: props.coc,
            islam: props.islam,
            buddhist: props.buddhist,
            methodist: props.methodist,
            others: props.others,
            indigent: props.indigent,
            pensioner: props.pensioner,
            supported: props.supported,
            pwd: props.pwd,
            alzheimer: props.alzheimer,
            arthritis: props.arthritis,
            cancer: props.cancer,
            kidney: props.kidney,
            pulmonary: props.pulmonary,
            diabetes: props.diabetes,
            heart: props.heart,
            cholesterol: props.cholesterol,
            pneumonia: props.pneumonia,
            osteoporosis: props.osteoporosis,
            otherIllness: props.otherIllness,
            municipalities: props.municipalities,
            memberStatus: props.memberStatus,
            allBarangay: props.allBarangay,
            reportData: props.reportData,
            reloadPage: props.reloadPage,
            typeValue: props.typeValue,
            reportTitle: props.reportTitle,
            reportPage: props.reportPage,
            cspan: props.cspan
        })
    });
});
PrintTable.displayName = "OSCA";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintTable);


/***/ }),

/***/ 8530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ek": () => (/* binding */ getEmploymentStatuses),
/* harmony export */   "Hy": () => (/* binding */ exportReport),
/* harmony export */   "Ju": () => (/* binding */ getMemberStatuses),
/* harmony export */   "d0": () => (/* binding */ generateMemberReport)
/* harmony export */ });
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
const exportReport = async (params)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/exportReport`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const generateMemberReport = async (ctype, from, to, municipality, page, user_id)=>{
    try {
        const params = {
            ctype,
            from,
            to,
            municipality,
            page,
            user_id
        };
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/generateMemberReport`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getMemberStatuses = async ()=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getMemberStatuses`, {}, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getEmploymentStatuses = async ()=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getEmploymentStatuses`, {}, header);
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