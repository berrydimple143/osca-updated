"use strict";
(() => {
var exports = {};
exports.id = 5907;
exports.ids = [5907];
exports.modules = {

/***/ 5594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Registration),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_front_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2960);
/* harmony import */ var _components_layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6383);
/* harmony import */ var _components_forms_RegistrationForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8439);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7391);
/* harmony import */ var _services_helperService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9850);
/* harmony import */ var _services_configService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7529);
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_5__, _services_authService__WEBPACK_IMPORTED_MODULE_7__, _services_dataService__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_5__, _services_authService__WEBPACK_IMPORTED_MODULE_7__, _services_dataService__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function getStaticProps() {
    const dtFormat = (0,_services_configService__WEBPACK_IMPORTED_MODULE_10__/* .dateFormat */ .v)();
    const fileURL = (0,_services_configService__WEBPACK_IMPORTED_MODULE_10__/* .uploadURL */ .D)();
    return {
        props: {
            dtFormat,
            fileURL
        }
    };
}
function Registration({ dtFormat , fileURL  }) {
    const [formLoading, setFormLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [saveDisabled, setSaveDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [municipalities, setMunicipalities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [chosenBarangay, setChosenBarangay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [civilStatus, setCivilStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [bloodType, setBloodType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [religion, setReligion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [educations, setEducations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [employmentStatus, setEmploymentStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [classification, setClassification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [illnesses, setIllnesses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [companions, setCompanions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [housings, setHousings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [educationArea, setEducationArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [communityService, setCommunityService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [involvements, setInvolvements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [incomeSources, setIncomeSources] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [monthlyIncome, setMonthlyIncome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [socialProblems, setSocialProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [economicProblems, setEconomicProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [healthIssues, setHealthIssues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sick, setSick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [memberType, setMemberType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formInitValues, setFormInitValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [addr, setAddr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [brgy, setBrgy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [houseNo, setHouseNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [street, setStreet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [districtNumber, setDistrictNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [idNumber, setIdNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [municipality, setMunicipality] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [prov, setProv] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("BULACAN");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("registration");
    const [regUploadData, setRegUploadData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [offspring, setOffspring] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [medicines, setMedicines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showChildrenModal, setShowChildrenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showMedicineModal, setShowMedicineModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [form] = antd__WEBPACK_IMPORTED_MODULE_3__.Form.useForm();
    const [userArea, setUserArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userService, setUserService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userHousing, setUserHousing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userCompanion, setUserCompanion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userInvolvement, setUserInvolvement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userSource, setUserSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userAsset, setUserAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userSocial, setUserSocial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userEconomic, setUserEconomic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userHealth, setUserHealth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onRegUpload = async (info)=>{
        if (info.file.status !== "uploading") {
            let src = await new Promise((resolve)=>{
                const reader = new FileReader();
                reader.readAsDataURL(info.file.originFileObj);
                reader.onload = ()=>resolve(reader.result);
            });
            setRegUploadData(src);
        }
        if (info.file.status === "done") {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            setRegUploadData(null);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error(`${info.file.name} file upload failed.`);
        }
    };
    const uploadProps = {
        name: "identification",
        accept: ".png, .jpeg, .jpg, .gif",
        action: fileURL,
        headers: {
            authorization: "authorization-text"
        },
        onRemove (info) {
            setRegUploadData(null);
        },
        onChange: onRegUpload
    };
    const onFinishFailed = (errorInfo)=>{
        (0,_services_helperService__WEBPACK_IMPORTED_MODULE_8__/* .showNotification */ .c0)("error", "Invalid Inputs", "There are some invalid inputs.", "Please check and provide a valid one.");
    };
    const onFinish = async (values)=>{
        setSaveDisabled(true);
        setSaving(true);
        if (idNumber == "limit") {
            setSaveDisabled(false);
            setSaving(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("User limit exceeded.");
        } else {
            const { stat  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_9__/* .seniorIdExist */ .rr)(idNumber);
            if (stat == "available") {
                setSaveDisabled(false);
                setSaving(false);
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Name is existing already. Please try again.");
            } else {
                values.data = regUploadData;
                values.offspring = offspring;
                values.medicines = medicines;
                save(values);
                setSaving(false);
            }
        }
    };
    const save = async (values)=>{
        const { reg_status  } = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_7__/* .register */ .z2)(values);
        values.identification = "";
        if (reg_status == "success") {
            let id_msg = `ID No.: ${idNumber}`;
            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_8__/* .showNotification */ .c0)("success", "Successful", "Registration successful.", id_msg);
            router.push("/");
        } else if (reg_status == "duplicate") {
            setSaveDisabled(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("This member already exist in our database.");
        } else {
            setSaveDisabled(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Registration failed.");
        }
    };
    const handleClassification = (value)=>{
        let str = "";
        if (value.length > 0) {
            str = value.map((mtype)=>{
                return mtype.value;
            }).join(",");
        }
        setMemberType(str);
        form.setFieldsValue({
            member_type: str
        });
    };
    const handleIllness = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((sick)=>{
                return sick.value;
            }).join(",");
        }
        setSick(sk);
        form.setFieldsValue({
            selected_illness: sk
        });
    };
    const handleSpecialization = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((area)=>{
                return area.value;
            }).join(",");
        }
        setUserArea(sk);
        form.setFieldsValue({
            specialization_area: sk
        });
    };
    const handleServices = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((service)=>{
                return service.value;
            }).join(",");
        }
        setUserService(sk);
        form.setFieldsValue({
            user_services: sk
        });
    };
    const handleCompanion = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((comp)=>{
                return comp.value;
            }).join(",");
        }
        setUserCompanion(sk);
        form.setFieldsValue({
            user_companion: sk
        });
    };
    const handleInvolvement = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((inv)=>{
                return inv.value;
            }).join(",");
        }
        setUserInvolvement(sk);
        form.setFieldsValue({
            user_involvement: sk
        });
    };
    const handleSocialProblem = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((soc)=>{
                return soc.value;
            }).join(",");
        }
        setUserSocial(sk);
        form.setFieldsValue({
            user_social_problem: sk
        });
    };
    const handleEconomicProblem = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((econ)=>{
                return econ.value;
            }).join(",");
        }
        setUserEconomic(sk);
        form.setFieldsValue({
            user_economic_problem: sk
        });
    };
    const handleHealthIssue = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((hlt)=>{
                return hlt.value;
            }).join(",");
        }
        setUserHealth(sk);
        form.setFieldsValue({
            user_health_issue: sk
        });
    };
    const handleAssets = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((asst)=>{
                return asst.value;
            }).join(",");
        }
        setUserAsset(sk);
        form.setFieldsValue({
            user_assets: sk
        });
    };
    const handleIncomeSource = (value)=>{
        let sk = "";
        if (value.length > 0) {
            sk = value.map((inc)=>{
                return inc.value;
            }).join(",");
        }
        setUserSource(sk);
        form.setFieldsValue({
            user_income_source: sk
        });
    };
    const getIdNumber = async (mun, dist)=>{
        try {
            const { senior_id  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_9__/* .getGeneratedId */ .R2)(mun, dist);
            setIdNumber(senior_id);
            form.setFieldsValue({
                id_number: senior_id
            });
        } catch (error) {
            setFormLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong.");
        }
    };
    const setFullAddress = (brn, hn, st, add)=>{
        let addrs = `Brgy. ${brn}, ${addr}, ${prov}`;
        if (hn != "" && st == "") {
            addrs = `${hn} Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if (hn != "" && st != "") {
            addrs = `${houseNo}, ${st}, Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if (hn == "" && st != "") {
            addrs = `${st}, Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if (hn == "" && st == "" && brn == "") {
            addrs = `Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if (hn == "" && st == "" && brn != "" && add != "") {
            if (houseNo != "" && street != "") {
                addrs = `${houseNo}, ${street}, Brgy. ${brn}, ${add}, ${prov}`;
            }
            if (houseNo == "" && street != "") {
                addrs = `${street}, Brgy. ${brn}, ${add}, ${prov}`;
            }
            if (houseNo != "" && street == "") {
                addrs = `${houseNo}, Brgy. ${brn}, ${add}, ${prov}`;
            }
            if (houseNo == "" && street == "") {
                addrs = `Brgy. ${brn}, ${add}, ${prov}`;
            }
        }
        form.setFieldsValue({
            address: addrs
        });
    };
    const getAddress = (value, value2)=>{
        let brn = value2.children;
        setBrgy(brn);
        form.setFieldsValue({
            barangay_name: brn
        });
        setFullAddress(brn, "", "", "");
    };
    const getFullAddress = (e)=>{
        setHouseNo(e.target.value);
        setFullAddress("", e.target.value, street, "");
    };
    const getStreet = (e)=>{
        setStreet(e.target.value);
        setFullAddress("", houseNo, e.target.value, "");
    };
    const getAllBarangay = async (value, value2)=>{
        setChosenBarangay([]);
        setBrgy("");
        form.setFieldsValue({
            barangay_name: ""
        });
        try {
            const selected = value2.children;
            setFormLoading(true);
            setMunicipality(value);
            setAddr(selected);
            const { barangays , district_no  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_9__/* .getBarangays */ .EZ)(value);
            setDistrictNumber(district_no);
            const brgyName = barangays[0].barangay_name;
            form.setFieldsValue({
                district_no: district_no,
                municipality_name: selected,
                barangay_name: brgyName,
                barangay: barangays[0].id
            });
            getIdNumber(value, district_no);
            setChosenBarangay(barangays);
            setBrgy(brgyName);
            setFullAddress(brgyName, "", "", selected);
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong.");
        }
    };
    const birthChanged = (date, dateString)=>{
        if ((0,_services_helperService__WEBPACK_IMPORTED_MODULE_8__/* .IsUnderAge */ .u9)(date)) {
            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_8__/* .showNotification */ .c0)("error", "Date of Birth Error", "Please check the birthdate entered.", "You are not qualified for Senior Citizen membership");
            form.setFieldsValue({
                birth_date: null,
                formatted_bday: null
            });
        } else {
            form.setFieldsValue({
                formatted_bday: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_8__/* .formatDate */ .p6)(date, "YYYY-MM-DD")
            });
        }
    };
    const getAllData = async ()=>{
        try {
            setFormLoading(true);
            const { status , mun , genders , civil_statuses , blood_types , religions , education , employment_statuses , classifications , illness , comps , houses , com_services , educ_area , involvementsList , income_sources , assetsList , socialProblemList , economicProblemList , healthIssueList , incomeRange  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_9__/* .getDetails */ .s_)();
            if (status == "success") {
                setMunicipalities(mun);
                setGender(genders);
                setCivilStatus(civil_statuses);
                setBloodType(blood_types);
                setReligion(religions);
                setEducations(education);
                setEmploymentStatus(employment_statuses);
                setClassification(classifications);
                setIllnesses(illness);
                setCompanions(comps);
                setHousings(houses);
                setCommunityService(com_services);
                setEducationArea(educ_area);
                setInvolvements(involvementsList);
                setIncomeSources(income_sources);
                setAssets(assetsList);
                setSocialProblems(socialProblemList);
                setEconomicProblems(economicProblemList);
                setHealthIssues(healthIssueList);
                setMonthlyIncome(incomeRange);
            }
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getAllData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Office of the Senior Citizen's Affairs - Registration",
        setLoading: setFormLoading,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_front_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                heading1: "Registration",
                page: "registration",
                bgImage: "h-screen bg-fixed bg-center bg-cover main-img",
                textWidth: "w-180"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_RegistrationForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                formInitValues: formInitValues,
                setFormInitValues: setFormInitValues,
                form: form,
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
                prov: prov,
                setProv: setProv,
                districtNumber: districtNumber,
                setDistrictNumber: setDistrictNumber,
                addr: addr,
                setAddr: setAddr,
                brgy: brgy,
                setBrgy: setBrgy,
                memberType: memberType,
                setMemberType: setMemberType,
                idNumber: idNumber,
                setIdNumber: setIdNumber,
                sick: sick,
                setSick: setSick,
                getAllBarangay: getAllBarangay,
                municipalities: municipalities,
                getAddress: getAddress,
                chosenBarangay: chosenBarangay,
                dtFormat: dtFormat,
                birthChanged: birthChanged,
                gender: gender,
                civilStatus: civilStatus,
                bloodType: bloodType,
                religion: religion,
                educations: educations,
                employmentStatus: employmentStatus,
                handleClassification: handleClassification,
                classification: classification,
                uploadProps: uploadProps,
                handleIllness: handleIllness,
                formLoading: formLoading,
                saving: saving,
                saveDisabled: saveDisabled,
                page: page,
                illnesses: illnesses,
                companions: companions,
                housings: housings,
                educationArea: educationArea,
                communityService: communityService,
                involvements: involvements,
                incomeSources: incomeSources,
                monthlyIncome: monthlyIncome,
                assets: assets,
                socialProblems: socialProblems,
                economicProblems: economicProblems,
                healthIssues: healthIssues,
                getFullAddress: getFullAddress,
                getStreet: getStreet,
                offspring: offspring,
                setOffspring: setOffspring,
                medicines: medicines,
                setMedicines: setMedicines,
                showChildrenModal: showChildrenModal,
                setShowChildrenModal: setShowChildrenModal,
                showMedicineModal: showMedicineModal,
                setShowMedicineModal: setShowMedicineModal,
                handleSpecialization: handleSpecialization,
                handleServices: handleServices,
                handleCompanion: handleCompanion,
                handleInvolvement: handleInvolvement,
                handleSocialProblem: handleSocialProblem,
                handleEconomicProblem: handleEconomicProblem,
                handleHealthIssue: handleHealthIssue,
                handleAssets: handleAssets,
                handleIncomeSource: handleIncomeSource,
                userArea: userArea,
                setUserArea: setUserArea,
                userService: userService,
                setUserService: setUserService,
                userHousing: userHousing,
                setUserHousing: setUserHousing,
                userCompanion: userCompanion,
                setUserCompanion: setUserCompanion,
                userInvolvement: userInvolvement,
                setUserInvolvement: setUserInvolvement,
                userSource: userSource,
                setUserSource: setUserSource,
                userAsset: userAsset,
                setUserAsset: setUserAsset,
                userSocial: userSocial,
                setUserSocial: setUserSocial,
                userEconomic: userEconomic,
                setUserEconomic: setUserEconomic,
                userHealth: userHealth,
                setUserHealth: setUserHealth
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

/***/ 1507:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircleOutline");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 746:
/***/ ((module) => {

module.exports = require("@mui/icons-material/EditRounded");

/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FileUpload");

/***/ }),

/***/ 9932:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Save");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 6752:
/***/ ((module) => {

module.exports = require("laravel-echo");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1272:
/***/ ((module) => {

module.exports = require("pusher-js");

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

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,3121,5675,747,9850,7391,8349,9086,9652], () => (__webpack_exec__(5594)));
module.exports = __webpack_exports__;

})();