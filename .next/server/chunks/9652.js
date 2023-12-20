"use strict";
exports.id = 9652;
exports.ids = [9652];
exports.modules = {

/***/ 8439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RegistrationForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./components/ModalLoading.js
var ModalLoading = __webpack_require__(747);
// EXTERNAL MODULE: external "@mui/icons-material/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__(1507);
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: ./components/modal/ChildrenModal.js





function ChildrenModal({ children , childrenForm , setShowChildrenModal , showChildrenModal , onAddChildFinish , editChildren , clearForm , EditRoundedIcon  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showChildrenModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-auto my-6 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center p-1 border-b border-solid border-slate-200 rounded-none bg-tertiary",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-base text-white font-bold",
                                        children: "* * * * * * Add Child * * * * * *"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form, {
                                        form: childrenForm,
                                        layout: "vertical",
                                        onFinish: onAddChildFinish,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap w-98 justify-left items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Full Name",
                                                        name: "full_name",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Full Name is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type a fullname here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Occupation",
                                                        name: "occupation",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Occupation is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type an occupation here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Income",
                                                        name: "income",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Income is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type an income here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Age",
                                                        name: "age",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Age is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            type: "number",
                                                            className: "w-full",
                                                            placeholder: "Type an age here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Dependency",
                                                        name: "dependency",
                                                        rules: [
                                                            {
                                                                required: false
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type a dependency here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                                            children: [
                                                                !editChildren && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutline_default()), {}),
                                                                        " ADD"
                                                                    ]
                                                                }),
                                                                editChildren && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(EditRoundedIcon, {}),
                                                                        " EDIT"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    onClick: ()=>{
                                                                        setShowChildrenModal(false);
                                                                        clearForm();
                                                                    },
                                                                    className: "px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {}),
                                                                        "  \xa0Close"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "opacity-50 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
}

;// CONCATENATED MODULE: ./components/modal/MaintenanceModal.js





function MaintenanceModal({ children , setShowMedicineModal , showMedicineModal , onAddMedicineFinish , maintenanceForm , maintenanceEdit , clearForm , EditRoundedIcon  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showMedicineModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-auto my-6 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center p-1 border-b border-solid border-slate-200 rounded-none bg-tertiary",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-base text-white font-bold",
                                        children: "* * * * * * Add Maintenance * * * * * *"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form, {
                                        form: maintenanceForm,
                                        layout: "vertical",
                                        onFinish: onAddMedicineFinish,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-wrap w-95 justify-left items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Medicine Name",
                                                        name: "medicine",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Medicine Name is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type a medicine name here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Dosage",
                                                        name: "dosage",
                                                        rules: [
                                                            {
                                                                required: false
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type a dosage here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        label: "Quantity",
                                                        name: "quantity",
                                                        rules: [
                                                            {
                                                                required: false
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type a quantity here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                                            children: [
                                                                !maintenanceEdit && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutline_default()), {}),
                                                                        " ADD"
                                                                    ]
                                                                }),
                                                                maintenanceEdit && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(EditRoundedIcon, {}),
                                                                        " EDIT"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    onClick: ()=>{
                                                                        setShowMedicineModal(false);
                                                                        clearForm();
                                                                    },
                                                                    className: "px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {}),
                                                                        "  \xa0Close"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "opacity-50 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
}

// EXTERNAL MODULE: external "@mui/icons-material/EditRounded"
var EditRounded_ = __webpack_require__(746);
var EditRounded_default = /*#__PURE__*/__webpack_require__.n(EditRounded_);
// EXTERNAL MODULE: external "@mui/icons-material/Save"
var Save_ = __webpack_require__(9932);
var Save_default = /*#__PURE__*/__webpack_require__.n(Save_);
// EXTERNAL MODULE: external "@mui/icons-material/FileUpload"
var FileUpload_ = __webpack_require__(6098);
var FileUpload_default = /*#__PURE__*/__webpack_require__.n(FileUpload_);
// EXTERNAL MODULE: ./services/helperService.js
var helperService = __webpack_require__(9850);
// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__(3188);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);
;// CONCATENATED MODULE: ./components/forms/RegistrationForm.js














function RegistrationForm({ form , onFinish , onFinishFailed , prov , setProv , districtNumber , setDistrictNumber , addr , setAddr , brgy , setBrgy , memberType , setMemberType , idNumber , setIdNumber , sick , setSick , getAllBarangay , municipalities , getAddress , chosenBarangay , setChosenBarangay , dtFormat , birthChanged , gender , civilStatus , bloodType , religion , educations , employmentStatus , handleClassification , classification , uploadProps , handleIllness , formLoading , setFormLoading , saving , setShowModal , showModal , memberStatus , selectedItemForEdit , setSelectedItemForEdit , getMember , setMunicipality , formattedBday , setFormattedBday , reloadPage , illnessDefaultValues , setIllnessDefaultValues , formInitValues , setFormInitValues , saveDisabled , illnesses , companions , housings , educationArea , communityService , involvements , incomeSources , monthlyIncome , assets , socialProblems , economicProblems , healthIssues , getFullAddress , getStreet , offspring , setOffspring , medicines , setMedicines , showChildrenModal , setShowChildrenModal , showMedicineModal , setShowMedicineModal , handleSpecialization , handleServices , handleCompanion , handleInvolvement , handleSocialProblem , handleEconomicProblem , handleHealthIssue , handleIncomeSource , handleAssets , page , userArea , setUserArea , userService , setUserService , userHousing , setUserHousing , userCompanion , setUserCompanion , userInvolvement , setUserInvolvement , userSource , setUserSource , userAsset , setUserAsset , userSocial , setUserSocial , userEconomic , setUserEconomic , userHealth , setUserHealth  }) {
    const [editChildren, setEditChildren] = (0,external_react_.useState)(false);
    const [editableId, setEditableId] = (0,external_react_.useState)(null);
    const [maintenanceEdit, setMaintenanceEdit] = (0,external_react_.useState)(false);
    const [editableMaintenanceId, setEditableMaintenanceId] = (0,external_react_.useState)(null);
    const [deleting, setDeleting] = (0,external_react_.useState)(false);
    const [deletingMaintenance, setDeletingMaintenance] = (0,external_react_.useState)(false);
    const [childrenForm] = external_antd_.Form.useForm();
    const [maintenanceForm] = external_antd_.Form.useForm();
    const getEditableData = async (id)=>{
        try {
            setFormLoading(true);
            const { data  } = await getMember({
                id,
                type: "edit"
            });
            const user = data.user;
            let usrcls = user.classification;
            let usrsick = user.sickness;
            let bday = user.birth_date;
            let usrarea = user.area;
            let usrservice = user.service;
            let usrcompanion = user.companion;
            let usrinvolvement = user.activity;
            let usersoi = user.source_of_income;
            let usrasset = user.assets;
            let usrsocial = user.social_problem;
            let usreconomic = user.economic_problem;
            let usrhealth = user.health_issue;
            const childs = data.children;
            const maintenances = data.maintenances;
            setOffspring(childs);
            setMedicines(maintenances);
            if (usrcls && usrcls.indexOf(",") !== 0) {
                usrcls = usrcls.split(",");
            }
            if (usrsick && usrsick.indexOf(",") !== 0) {
                usrsick = usrsick.split(",");
            }
            if (usrarea && usrarea.indexOf(",") !== 0) {
                usrarea = usrarea.split(",");
            }
            if (usrservice && usrservice.indexOf(",") !== 0) {
                usrservice = usrservice.split(",");
            }
            if (usrcompanion && usrcompanion.indexOf(",") !== 0) {
                usrcompanion = usrcompanion.split(",");
            }
            if (usrinvolvement && usrinvolvement.indexOf(",") !== 0) {
                usrinvolvement = usrinvolvement.split(",");
            }
            if (usersoi && usersoi.indexOf(",") !== 0) {
                usersoi = usersoi.split(",");
            }
            if (usrasset && usrasset.indexOf(",") !== 0) {
                usrasset = usrasset.split(",");
            }
            if (usrsocial && usrsocial.indexOf(",") !== 0) {
                usrsocial = usrsocial.split(",");
            }
            if (usreconomic && usreconomic.indexOf(",") !== 0) {
                usreconomic = usreconomic.split(",");
            }
            if (usrhealth && usrhealth.indexOf(",") !== 0) {
                usrhealth = usrhealth.split(",");
            }
            setSick(usrsick);
            setMemberType(usrcls);
            setUserArea(usrarea);
            setUserService(usrservice);
            setUserCompanion(usrcompanion);
            setUserInvolvement(usrinvolvement);
            setUserSource(usersoi);
            setUserAsset(usrasset);
            setUserSocial(usrsocial);
            setUserEconomic(usreconomic);
            setUserHealth(usrhealth);
            let fbday = null;
            if (bday) {
                bday = external_moment_default()(bday, "MM-DD-YYYY");
                fbday = external_moment_default()(bday, "YYYY-MM-DD");
                setFormattedBday(fbday);
            } else {
                bday = null;
            }
            form.setFieldsValue({
                specialization_area: user.area,
                user_services: user.service,
                user_companion: user.companion,
                user_involvement: user.activity,
                user_social_problem: user.social_problem,
                user_economic_problem: user.economic_problem,
                user_health_issue: user.health_issue,
                user_assets: user.assets,
                user_income_source: user.source_of_income,
                health_issue: usrhealth,
                economic_problem: usreconomic,
                social_problem: usrsocial,
                mother_first_name: user.mother_first_name,
                mother_middle_name: user.mother_middle_name,
                mother_last_name: user.mother_last_name,
                mother_extension_name: user.mother_extension_name,
                father_extension_name: user.father_extension_name,
                father_last_name: user.father_last_name,
                father_middle_name: user.father_middle_name,
                father_first_name: user.father_first_name,
                spouse_extension_name: user.spouse_extension_name,
                spouse_last_name: user.spouse_last_name,
                spouse_middle_name: user.spouse_middle_name,
                spouse_first_name: user.spouse_first_name,
                income_range: user.income_range,
                assets: usrasset,
                source_of_income: usersoi,
                involvement: usrinvolvement,
                housing: user.type,
                companion: usrcompanion,
                active_in_politics: user.active_in_politics,
                able_to_travel: user.able_to_travel,
                association_id: user.association_id,
                other_id: user.other_id,
                services: usrservice,
                area: usrarea,
                language: user.language,
                ethnic_origin: user.ethnic_origin,
                messenger: user.messenger,
                house_no: user.house_no,
                street: user.street,
                extension_name: user.extension_name,
                selected_illness: user.sickness,
                member_type: user.classification,
                formatted_bday: fbday,
                id_number: user.id_number,
                first_name: user.first_name,
                last_name: user.last_name,
                middle_name: user.middle_name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                mobile: user.mobile,
                birth_date: bday,
                birth_place: user.birth_place,
                gender: user.gender,
                civil_status: user.civil_status,
                blood_type: user.blood_type,
                religion: user.religion,
                education: user.education,
                employment_status: user.employment_status,
                gsis: user.gsis,
                sss: user.sss,
                philhealth: user.philhealth,
                tin: user.tin,
                pension: user.pension,
                member_status: user.member_status,
                classification: usrcls,
                sickness: usrsick,
                contact_person: user.contact_person,
                contact_person_number: user.contact_person_number
            });
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            external_antd_.message.error("Something went wrong");
        }
    };
    const clearForm = ()=>{
        childrenForm.setFieldsValue({
            full_name: "",
            occupation: "",
            income: "",
            age: "",
            dependency: ""
        });
        maintenanceForm.setFieldsValue({
            medicine: "",
            dosage: "",
            quantity: ""
        });
    };
    const editMaintenance = (id)=>{
        setEditableMaintenanceId(id);
        setMaintenanceEdit(true);
        maintenanceForm.setFieldsValue({
            medicine: medicines[id].medicine,
            dosage: medicines[id].dosage,
            quantity: medicines[id].quantity
        });
        setShowMedicineModal(true);
    };
    const editChild = (id)=>{
        setEditableId(id);
        setEditChildren(true);
        childrenForm.setFieldsValue({
            full_name: offspring[id].full_name,
            occupation: offspring[id].occupation,
            income: offspring[id].income,
            age: offspring[id].age,
            dependency: offspring[id].dependency
        });
        setShowChildrenModal(true);
    };
    const deleteChild = (id)=>{
        let arr = offspring;
        delete arr[id];
        setDeleting(true);
        setTimeout(()=>{
            setOffspring(arr);
            setDeleting(false);
        }, 500);
    };
    const addChildren = (event)=>{
        event.preventDefault();
        setShowChildrenModal(true);
    };
    const onAddChildFinish = (values)=>{
        if (editChildren) {
            offspring[editableId].full_name = values.full_name;
            offspring[editableId].occupation = values.occupation;
            offspring[editableId].income = values.income;
            offspring[editableId].age = values.age;
            offspring[editableId].dependency = values.dependency;
        } else {
            let arr = offspring;
            arr.push(values);
            setOffspring(arr);
        }
        setShowChildrenModal(false);
        setEditChildren(false);
        setEditableId(null);
        clearForm();
    };
    const addMaintenance = (event)=>{
        event.preventDefault();
        setShowMedicineModal(true);
    };
    const deleteMaintenance = (id)=>{
        let arr = medicines;
        delete arr[id];
        setDeletingMaintenance(true);
        setTimeout(()=>{
            setMedicines(arr);
            setDeletingMaintenance(false);
        }, 500);
    };
    const onAddMedicineFinish = (values)=>{
        if (maintenanceEdit) {
            medicines[editableMaintenanceId].medicine = values.medicine;
            medicines[editableMaintenanceId].dosage = values.dosage;
            medicines[editableMaintenanceId].quantity = values.quantity;
        } else {
            let arr = medicines;
            arr.push(values);
            setMedicines(arr);
        }
        setShowMedicineModal(false);
        setMaintenanceEdit(false);
        setEditableMaintenanceId(null);
        clearForm();
    };
    (0,external_react_.useEffect)(()=>{
        if (page == "registration") {
            setFormInitValues({
                province: prov
            });
            form.setFieldsValue({
                province: prov
            });
        } else {
            setFormInitValues({
                specialization_area: userArea,
                user_services: userService,
                user_companion: userCompanion,
                user_involvement: userInvolvement,
                user_social_problem: userSocial,
                user_economic_problem: userEconomic,
                user_health_issue: userHealth,
                user_assets: userAsset,
                user_income_source: userSource,
                province: prov,
                district_no: districtNumber,
                municipality_name: addr,
                barangay_name: brgy,
                member_type: memberType,
                id_number: idNumber,
                selected_illness: sick,
                formatted_bday: formattedBday
            });
            form.setFieldsValue({
                specialization_area: userArea,
                user_services: userService,
                user_companion: userCompanion,
                user_involvement: userInvolvement,
                user_social_problem: userSocial,
                user_economic_problem: userEconomic,
                user_health_issue: userHealth,
                user_assets: userAsset,
                user_income_source: userSource,
                province: prov,
                district_no: districtNumber,
                municipality_name: addr,
                barangay_name: brgy,
                member_type: memberType,
                id_number: idNumber,
                selected_illness: sick,
                formatted_bday: formattedBday
            });
            if (selectedItemForEdit) {
                setFormInitValues({});
                getEditableData(selectedItemForEdit);
            }
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            formLoading && /*#__PURE__*/ jsx_runtime_.jsx(ModalLoading/* default */.Z, {
                message: "Loading, please wait ...",
                pcolor: "bg-yellow-500"
            }),
            saving && /*#__PURE__*/ jsx_runtime_.jsx(ModalLoading/* default */.Z, {
                message: "Saving, please wait ...",
                pcolor: "bg-green-500"
            }),
            deleting && /*#__PURE__*/ jsx_runtime_.jsx(ModalLoading/* default */.Z, {
                message: "Deleting child, please wait ...",
                pcolor: "bg-red-500"
            }),
            deletingMaintenance && /*#__PURE__*/ jsx_runtime_.jsx(ModalLoading/* default */.Z, {
                message: "Deleting maintenance, please wait ...",
                pcolor: "bg-red-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ChildrenModal, {
                childrenForm: childrenForm,
                showChildrenModal: showChildrenModal,
                setShowChildrenModal: setShowChildrenModal,
                onAddChildFinish: onAddChildFinish,
                editChildren: editChildren,
                clearForm: clearForm,
                EditRoundedIcon: (EditRounded_default())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MaintenanceModal, {
                maintenanceForm: maintenanceForm,
                showMedicineModal: showMedicineModal,
                setShowMedicineModal: setShowMedicineModal,
                onAddMedicineFinish: onAddMedicineFinish,
                maintenanceEdit: maintenanceEdit,
                clearForm: clearForm,
                EditRoundedIcon: (EditRounded_default())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form, {
                layout: "vertical",
                form: form,
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
                initialValues: formInitValues,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap justify-left items-center mt-5 uppercase",
                    children: [
                        (page === "add" || page === "registration") && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    name: "id_number",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                        type: "hidden",
                                        id: "id_number",
                                        value: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    name: "barangay_name",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                        type: "hidden",
                                        id: "barangay_name",
                                        value: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    name: "municipality_name",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                        type: "hidden",
                                        id: "municipality_name",
                                        value: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    name: "district_no",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                        type: "hidden",
                                        id: "district_no",
                                        value: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_income_source",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_income_source",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_assets",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_assets",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_health_issue",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_health_issue",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_economic_problem",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_economic_problem",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_social_problem",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_social_problem",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_involvement",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_involvement",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_companion",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_companion",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "user_services",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "user_services",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "specialization_area",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "specialization_area",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "member_type",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "member_type",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "selected_illness",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "selected_illness",
                                value: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "formatted_bday",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                type: "hidden",
                                id: "formatted_bday",
                                value: ""
                            })
                        }),
                        page === "edit" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "ID Number",
                                name: "id_number",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px",
                                        backgroundColor: "#e6b82c"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    readOnly: true
                                })
                            })
                        }),
                        (page === "add" || page === "registration") && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Region",
                                        name: "region",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Region here ...",
                                            readOnly: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Province",
                                        name: "province",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            readOnly: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Municipality",
                                        name: "municipality",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Municipality is required."
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            placeholder: "Select a municipality here ...",
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            onChange: getAllBarangay,
                                            children: [
                                                " ",
                                                municipalities && municipalities.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        value: item.municipality_code_number,
                                                        children: item.municipality_name
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Barangay",
                                        name: "barangay",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Barangay is required."
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            placeholder: "Select a barangay here ...",
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            onChange: getAddress,
                                            children: [
                                                " ",
                                                chosenBarangay && chosenBarangay.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.id,
                                                        children: item.barangay_name
                                                    }, index))
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "First Name",
                                name: "first_name",
                                rules: [
                                    {
                                        required: true,
                                        message: "First Name is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your first name here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Middle Name",
                                name: "middle_name",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your middle name here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Last Name",
                                name: "last_name",
                                rules: [
                                    {
                                        required: true,
                                        message: "Last Name is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your last name here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Extension (Jr,Sr)",
                                name: "extension_name",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your extension name here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "House No./Zone/Purok/Sitio",
                                name: "house_no",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    onChange: getFullAddress,
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your house no./zone/purok/sitio here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Street",
                                name: "street",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    onChange: getStreet,
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your street here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Address",
                                name: "address",
                                rules: [
                                    {
                                        required: true,
                                        message: "Address is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your address here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "E-mail Address",
                                name: "email",
                                rules: [
                                    {
                                        required: false
                                    },
                                    {
                                        type: "email",
                                        message: "Invalid email address."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your email address here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Telephone",
                                name: "phone",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your landline number here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Mobile No.",
                                name: "mobile",
                                rules: [
                                    {
                                        required: true,
                                        message: "Mobile number is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your mobile number here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Messenger",
                                name: "messenger",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your messenger here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Birthdate (mm-dd-yyyy)",
                                name: "birth_date",
                                rules: [
                                    {
                                        required: true,
                                        message: "Birthdate is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.DatePicker, {
                                    format: dtFormat,
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    disabledDate: helperService/* disabledDate */.Q8,
                                    onChange: birthChanged,
                                    placeholder: "Pick a date here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Place of Birth",
                                name: "birth_place",
                                rules: [
                                    {
                                        required: true,
                                        message: "Place of birth is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your birth place here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Sex ",
                                name: "gender",
                                rules: [
                                    {
                                        required: true,
                                        message: "Gender is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select a gender here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        gender && gender.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.type,
                                                children: item.type
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Civil Status ",
                                name: "civil_status",
                                rules: [
                                    {
                                        required: true,
                                        message: "Civil Status is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select a civil status here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        civilStatus && civilStatus.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.status,
                                                children: item.status
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Blood Type",
                                name: "blood_type",
                                rules: [
                                    {
                                        required: true,
                                        message: "Blood type is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select a blood type here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        bloodType && bloodType.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.type,
                                                children: item.type
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Religion",
                                name: "religion",
                                rules: [
                                    {
                                        required: true,
                                        message: "Religion is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select a religion here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        religion && religion.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.name,
                                                children: item.name
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Ethnic Origin",
                                name: "ethnic_origin",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your ethnic origin here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Language Spoken/Written",
                                name: "language",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your language spoken/written here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Highest Educational Attainment",
                                name: "education",
                                rules: [
                                    {
                                        required: true,
                                        message: "Educational attainment is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select education here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        educations && educations.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.level,
                                                children: item.level
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Area of Specialization",
                                name: "area",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    onChange: handleSpecialization,
                                    placeholder: "Select all applicable",
                                    style: {
                                        width: "270px"
                                    },
                                    labelInValue: true,
                                    mode: "multiple",
                                    size: "large",
                                    tokenSeparators: [
                                        ","
                                    ],
                                    children: [
                                        " ",
                                        educationArea && educationArea.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.area,
                                                children: item.area
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Community Service/Others",
                                name: "services",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    onChange: handleServices,
                                    placeholder: "Select all applicable",
                                    style: {
                                        width: "270px"
                                    },
                                    labelInValue: true,
                                    mode: "multiple",
                                    size: "large",
                                    tokenSeparators: [
                                        ","
                                    ],
                                    children: [
                                        " ",
                                        communityService && communityService.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.service,
                                                children: item.service
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "GSIS",
                                name: "gsis",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your GSIS ID number here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "SSS",
                                name: "sss",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your SSS ID number here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "TIN",
                                name: "tin",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your TIN ID number here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "PhilHealth",
                                name: "philhealth",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your PhilHealth ID number here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "SC Association / Org ID No.",
                                name: "association_id",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your SC Association/Org ID No. here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Other ID (please specify)",
                                name: "other_id",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your other ID here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Employment Status",
                                name: "employment_status",
                                rules: [
                                    {
                                        required: true,
                                        message: "Employment status is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select employment status here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        employmentStatus && employmentStatus.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.status,
                                                children: item.status
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Classification",
                                name: "classification",
                                rules: [
                                    {
                                        required: true,
                                        message: "Classification is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    onChange: handleClassification,
                                    placeholder: "Select a classification here",
                                    style: {
                                        width: "270px"
                                    },
                                    labelInValue: true,
                                    mode: "multiple",
                                    size: "large",
                                    tokenSeparators: [
                                        ","
                                    ],
                                    children: [
                                        " ",
                                        classification && classification.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.type,
                                                children: item.type
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Capability to travel",
                                name: "able_to_travel",
                                rules: [
                                    {
                                        required: true,
                                        message: "Capability to travel is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select an option here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                            className: "uppercase",
                                            value: "yes",
                                            children: "yes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                            className: "uppercase",
                                            value: "no",
                                            children: "no"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Active in Politics",
                                name: "active_in_politics",
                                rules: [
                                    {
                                        required: true,
                                        message: "Active in Politics is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select an option here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                            className: "uppercase",
                                            value: "yes",
                                            children: "yes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                            className: "uppercase",
                                            value: "no",
                                            children: "no"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Monthly Pension",
                                name: "pension",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your monthly pension here ..."
                                })
                            })
                        }),
                        (page === "add" || page === "edit") && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Member Status",
                                name: "member_status",
                                rules: [
                                    {
                                        required: true,
                                        message: "Member Status is required."
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select member status here",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        memberStatus && memberStatus.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.status,
                                                children: item.status
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "In case of Emergency",
                                name: "contact_person",
                                rules: [
                                    {
                                        required: true,
                                        message: "Contact person is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type your contact person here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Contact Number",
                                name: "contact_person_number",
                                rules: [
                                    {
                                        required: true,
                                        message: "Emergency contact number is required."
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    className: "uppercase",
                                    placeholder: "Type the contact number of contact person here ..."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Living/Residing with",
                                name: "companion",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    onChange: handleCompanion,
                                    placeholder: "Select all applicable",
                                    style: {
                                        width: "270px"
                                    },
                                    labelInValue: true,
                                    mode: "multiple",
                                    size: "large",
                                    tokenSeparators: [
                                        ","
                                    ],
                                    children: [
                                        " ",
                                        companions && companions.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.companion,
                                                children: item.companion
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Housing",
                                name: "housing",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    placeholder: "Select housing type",
                                    style: {
                                        width: "270px"
                                    },
                                    size: "large",
                                    children: [
                                        " ",
                                        housings && housings.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.type,
                                                children: item.type
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                label: "Involvement in Community",
                                name: "involvement",
                                rules: [
                                    {
                                        required: false
                                    }
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                    className: "uppercase",
                                    onChange: handleInvolvement,
                                    placeholder: "Select all applicable",
                                    style: {
                                        width: "270px"
                                    },
                                    labelInValue: true,
                                    mode: "multiple",
                                    size: "large",
                                    tokenSeparators: [
                                        ","
                                    ],
                                    children: [
                                        " ",
                                        involvements && involvements.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                className: "uppercase",
                                                value: item.field,
                                                children: item.field
                                            }, index))
                                    ]
                                })
                            })
                        }),
                        (page === "add" || page === "registration") && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Upload, {
                                ...uploadProps,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                    size: "large",
                                    className: "uppercase",
                                    style: {
                                        width: "270px"
                                    },
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((FileUpload_default()), {}),
                                    children: "Click To Upload a Valid ID"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex bg-secondary justify-center items-center py-2 gap-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "uppercase font-bold text-base text-white pt-2",
                                children: "- - - - Family Composition - - - -"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full flex flex-wrap justify-left items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Spouse's First Name",
                                        name: "spouse_first_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Spouse's First Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Spouse's Middle Name",
                                        name: "spouse_middle_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Spouse's Middle Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Spouse's Last Name",
                                        name: "spouse_last_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Spouse's Last Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Spouse's Extension (Jr,Sr)",
                                        name: "spouse_extension_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Spouse's Extension Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Father's First Name",
                                        name: "father_first_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Father's First Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Father's Middle Name",
                                        name: "father_middle_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Father's Middle Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Father's Last Name",
                                        name: "father_last_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Father's Last Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Father's Extension (Jr,Sr)",
                                        name: "father_extension_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Father's Extension Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Mother's First Name",
                                        name: "mother_first_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Mother's First Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Mother's Maiden Middle Name",
                                        name: "mother_middle_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Mother's Middle Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Mother's Maiden Last Name",
                                        name: "mother_last_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Mother's Last Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Mother's Extension (Jr,Sr)",
                                        name: "mother_extension_name",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            className: "uppercase",
                                            placeholder: "Type your Mother's Extension Name here ..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "w-near-full ml-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
                                            className: "bg-white border",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                                                        colspan: "5",
                                                        className: "border text-center font-small text-gray-900 px-1 py-1 text-left text-lg",
                                                        children: [
                                                            "List of Children\xa0\xa0",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                                                title: "Click to add a child",
                                                                placement: "top",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutline_default()), {
                                                                    onClick: addChildren,
                                                                    className: "cursor-pointer text-green-600"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Full Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Occupation"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Income"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Age"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Dependency"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Action"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            children: offspring && offspring.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.full_name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.occupation
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.income
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.age
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.dependency
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                                                            title: "Click to edit this child",
                                                                            placement: "top",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((EditRounded_default()), {
                                                                                onClick: ()=>editChild(index),
                                                                                className: "rounded-none border-2 border-gray-700 cursor-pointer"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                                                            title: "Click to delete this child",
                                                                            placement: "top",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {
                                                                                onClick: ()=>deleteChild(index),
                                                                                className: "rounded-none border-2 border-gray-700 cursor-pointer"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }, index)
                                                }))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex bg-white justify-center items-center py-2 gap-4 text-white",
                            children: "\xa0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex bg-secondary justify-center items-center py-2 gap-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "uppercase font-bold text-base text-white pt-2",
                                children: "- - - - Economic Profile - - - -"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full flex flex-wrap justify-left items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Source of Income and Assistance",
                                        name: "source_of_income",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            onChange: handleIncomeSource,
                                            placeholder: "Select all applicable",
                                            style: {
                                                width: "270px"
                                            },
                                            labelInValue: true,
                                            mode: "multiple",
                                            size: "large",
                                            tokenSeparators: [
                                                ","
                                            ],
                                            children: [
                                                " ",
                                                incomeSources && incomeSources.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.source,
                                                        children: item.source
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Assets and Properties",
                                        name: "assets",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            onChange: handleAssets,
                                            placeholder: "Select all applicable",
                                            style: {
                                                width: "270px"
                                            },
                                            labelInValue: true,
                                            mode: "multiple",
                                            size: "large",
                                            tokenSeparators: [
                                                ","
                                            ],
                                            children: [
                                                " ",
                                                assets && assets.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.type,
                                                        children: item.type
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Monthly Income (in Php)",
                                        name: "income_range",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            placeholder: "Select Monthly Income",
                                            style: {
                                                width: "270px"
                                            },
                                            size: "large",
                                            children: [
                                                " ",
                                                monthlyIncome && monthlyIncome.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.range,
                                                        children: item.range
                                                    }, index))
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex bg-secondary justify-center items-center py-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "uppercase font-bold text-base text-white pt-2",
                                children: "- - - - Health Profile - - - -"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full flex flex-wrap justify-left items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Social Problems/Needs",
                                        name: "social_problem",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            onChange: handleSocialProblem,
                                            placeholder: "Select all applicable",
                                            style: {
                                                width: "270px"
                                            },
                                            labelInValue: true,
                                            mode: "multiple",
                                            size: "large",
                                            tokenSeparators: [
                                                ","
                                            ],
                                            children: [
                                                " ",
                                                socialProblems && socialProblems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.problem,
                                                        children: item.problem
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Economic Problems/Needs",
                                        name: "economic_problem",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            onChange: handleEconomicProblem,
                                            placeholder: "Select all applicable",
                                            style: {
                                                width: "270px"
                                            },
                                            labelInValue: true,
                                            mode: "multiple",
                                            size: "large",
                                            tokenSeparators: [
                                                ","
                                            ],
                                            children: [
                                                " ",
                                                economicProblems && economicProblems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.problem,
                                                        children: item.problem
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Health Issues",
                                        name: "health_issue",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            onChange: handleHealthIssue,
                                            placeholder: "Select all applicable",
                                            style: {
                                                width: "270px"
                                            },
                                            labelInValue: true,
                                            mode: "multiple",
                                            size: "large",
                                            tokenSeparators: [
                                                ","
                                            ],
                                            children: [
                                                " ",
                                                healthIssues && healthIssues.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.problem,
                                                        children: item.problem
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                        label: "Common Illness and Sickness",
                                        name: "sickness",
                                        rules: [
                                            {
                                                required: false
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Select, {
                                            className: "uppercase",
                                            onChange: handleIllness,
                                            placeholder: "Select all applicable",
                                            style: {
                                                width: "270px"
                                            },
                                            labelInValue: true,
                                            mode: "multiple",
                                            size: "large",
                                            tokenSeparators: [
                                                ","
                                            ],
                                            children: [
                                                " ",
                                                illnesses && illnesses.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select.Option, {
                                                        className: "uppercase",
                                                        value: item.name,
                                                        children: item.name
                                                    }, index))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "w-near-full ml-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
                                            className: "bg-white border",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                                                        colspan: "3",
                                                        className: "border text-lg text-center font-small text-gray-900 px-1 py-1 text-left",
                                                        children: [
                                                            "List of Medicines for Maintenance\xa0\xa0",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                                                title: "Click to add a maintenance medicine",
                                                                placement: "top",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutline_default()), {
                                                                    onClick: addMaintenance,
                                                                    className: "cursor-pointer text-green-600"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Medicine Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Dosage"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Quantity"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "border text-base text-center font-small text-gray-900 px-1 py-1 text-left",
                                                            children: "Action"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            children: medicines && medicines.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        className: "border",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.medicine
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.dosage
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: item.quantity
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border p-2 whitespace-nowrap text-center text-sm font-semibold text-black",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                                                            title: "Click to edit this maintenance",
                                                                            placement: "top",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((EditRounded_default()), {
                                                                                onClick: ()=>editMaintenance(index),
                                                                                className: "rounded-none border-2 border-gray-700 cursor-pointer"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                                                            title: "Click to delete this maintenance",
                                                                            placement: "top",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {
                                                                                onClick: ()=>deleteMaintenance(index),
                                                                                className: "rounded-none border-2 border-gray-700 cursor-pointer"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }, index)
                                                }))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex bg-white justify-center items-center py-2 gap-4 text-white",
                            children: "\xa0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full px-10 py-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            disabled: saveDisabled,
                                            className: "px-8 py-3 w-64 border rounded-none bg-active uppercase text-xl hover:bg-yellow-500 drop-shadow",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                                size: "middle",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Save_default()), {
                                                        className: "animate-pulse"
                                                    }),
                                                    "Save"
                                                ]
                                            })
                                        }),
                                        (page === "add" || page === "edit") && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: ()=>{
                                                setShowModal(false);
                                                reloadPage();
                                            },
                                            className: "px-8 py-3 w-64 border rounded-none bg-sixth uppercase text-xl hover:bg-yellow-500",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                                                size: "middle",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                        className: "animate-pulse"
                                                    }),
                                                    "Close"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 7529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ uploadURL),
/* harmony export */   "v": () => (/* binding */ dateFormat)
/* harmony export */ });
function dateFormat() {
    return "MM-DD-YYYY";
}
function uploadURL() {
    return `${"https://rpcbulacan.com"}/api/file-upload`;
}


/***/ })

};
;