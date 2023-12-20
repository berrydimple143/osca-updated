"use strict";
(() => {
var exports = {};
exports.id = 9635;
exports.ids = [9635];
exports.modules = {

/***/ 6848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ModalLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);





const FillupForm = ({ roleData , form , onFinish , onFinishFailed , formLoading , setFormLoading , setShowModal , reloadPage , selectedItemForEdit , getUser , formInitValues , setFormInitValues , checkEmail , hasMunicipality , handleMunicipality , municipalities , handleSelectedMunicipalities , setHasMunicipality , saving  })=>{
    const getEditableData = async (id)=>{
        try {
            setFormLoading(true);
            const { data  } = await getUser(id);
            const user = data.user;
            if (data.user_status == "success") {
                form.setFieldsValue({
                    last_name: user.last_name,
                    first_name: user.first_name,
                    middle_name: user.middle_name,
                    email: user.email,
                    role: user.role
                });
                if (user.role == "team lead" || user.role == "encoder") {
                    setHasMunicipality(true);
                    let mun = user.municipality;
                    if (mun && mun.indexOf(",") !== 0) {
                        mun = mun.split(",");
                    }
                    form.setFieldsValue({
                        municipality: mun
                    });
                }
            }
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            console.log(error);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedItemForEdit) {
            setFormInitValues({});
            getEditableData(selectedItemForEdit);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            formLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                message: "Loading, please wait ...",
                pcolor: "bg-yellow-500"
            }),
            saving && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                message: "Saving, please wait ...",
                pcolor: "bg-green-500"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
                layout: "vertical",
                form: form,
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
                initialValues: formInitValues,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                        name: "selected_municipalities",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                            type: "hidden",
                            id: "selected_municipalities",
                            value: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap w-100 justify-left items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "First Name",
                                    name: "first_name",
                                    rules: [
                                        {
                                            required: true,
                                            message: "First Name is required."
                                        }
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                        style: {
                                            width: "270px"
                                        },
                                        size: "large",
                                        placeholder: "First name here ..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "Last Name",
                                    name: "last_name",
                                    rules: [
                                        {
                                            required: true,
                                            message: "Last Name is required."
                                        }
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                        style: {
                                            width: "270px"
                                        },
                                        size: "large",
                                        placeholder: "Last name here ..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "Middle Name (Optional)",
                                    name: "middle_name",
                                    rules: [
                                        {
                                            required: false
                                        }
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                        style: {
                                            width: "270px"
                                        },
                                        size: "large",
                                        placeholder: "Middle name here ..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "Email",
                                    name: "email",
                                    rules: [
                                        {
                                            required: true,
                                            message: "Email is required."
                                        },
                                        {
                                            type: "email",
                                            message: "Invalid email address."
                                        }
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                        onChange: checkEmail,
                                        style: {
                                            width: "270px"
                                        },
                                        size: "large",
                                        placeholder: "Email here ..."
                                    })
                                })
                            }),
                            !selectedItemForEdit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "Password",
                                    name: "password",
                                    rules: [
                                        {
                                            required: true,
                                            message: "Password is required."
                                        },
                                        {
                                            min: 6,
                                            message: "Password must be at least 6 characters long."
                                        }
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Password, {
                                        style: {
                                            width: "270px"
                                        },
                                        size: "large",
                                        placeholder: "Type your password here ..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "Role",
                                    name: "role",
                                    rules: [
                                        {
                                            required: true,
                                            message: "Role is required."
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                        onChange: handleMunicipality,
                                        placeholder: "Select a role here ...",
                                        style: {
                                            width: "270px"
                                        },
                                        size: "large",
                                        children: [
                                            " ",
                                            roleData && roleData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                                    value: item.name,
                                                    children: item.name
                                                }, index))
                                        ]
                                    })
                                })
                            }),
                            hasMunicipality && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    label: "Municipality",
                                    name: "municipality",
                                    rules: [
                                        {
                                            required: true,
                                            message: "Municipality is required."
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                        onChange: handleSelectedMunicipalities,
                                        placeholder: "Select municipality here ...",
                                        style: {
                                            width: "270px"
                                        },
                                        mode: "multiple",
                                        size: "large",
                                        labelInValue: true,
                                        tokenSeparators: [
                                            ","
                                        ],
                                        children: [
                                            " ",
                                            municipalities && municipalities.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                                    value: item.municipality_code_number,
                                                    children: item.municipality_name
                                                }, index))
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full px-5 py-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "px-4 py-1 w-32 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                                                    size: "middle",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SaveOutlined, {
                                                            className: "animate-pulse"
                                                        }),
                                                        "Save"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>{
                                                    setShowModal(false);
                                                    reloadPage();
                                                },
                                                className: "px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                                                    size: "middle",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseSquareOutlined, {
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
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FillupForm);


/***/ }),

/***/ 9003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActivationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ActivationModal({ children , showActivationModal , setShowActivationModal , selectedItemForActivation , activateRecord , page  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showActivationModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-auto my-6 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-xl font-semibold",
                                            children: "Activation/De-activation Confirmation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                            onClick: ()=>setShowActivationModal(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                children: "\xd7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "my-4 text-slate-500 text-lg leading-relaxed",
                                        children: `${page}`
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "button",
                                            onClick: activateRecord,
                                            children: "Yes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-yellow-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "button",
                                            onClick: ()=>setShowActivationModal(false),
                                            children: "No"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "opacity-50 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
}


/***/ }),

/***/ 8949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ModalForm({ children , showModal , setShowModal , mtitle  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center items-center absolute top-0 left-0 flex inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-auto max-w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: mtitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                            onClick: ()=>setShowModal(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                children: "\xd7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: children
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "opacity-80 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
}


/***/ }),

/***/ 4702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User),
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5120);
/* harmony import */ var _components_admin_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2976);
/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8949);
/* harmony import */ var _components_modal_PasswordModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1290);
/* harmony import */ var _components_modal_ActivationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9003);
/* harmony import */ var _components_admin_DeleteModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6878);
/* harmony import */ var _components_ModalLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(747);
/* harmony import */ var _components_forms_FillupForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6848);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9068);
/* harmony import */ var _services_roleService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1858);
/* harmony import */ var _services_memberService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8581);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__, _components_admin_DataTable__WEBPACK_IMPORTED_MODULE_7__, _services_userService__WEBPACK_IMPORTED_MODULE_14__, _services_roleService__WEBPACK_IMPORTED_MODULE_15__, _services_memberService__WEBPACK_IMPORTED_MODULE_16__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_4__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__, _components_admin_DataTable__WEBPACK_IMPORTED_MODULE_7__, _services_userService__WEBPACK_IMPORTED_MODULE_14__, _services_roleService__WEBPACK_IMPORTED_MODULE_15__, _services_memberService__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















async function getServerSideProps({ req  }) {
    const cookieData = cookie__WEBPACK_IMPORTED_MODULE_5__.parse(req.headers.cookie || "");
    const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_16__/* .getMembers */ .Zw)("all", "", "", "", cookieData.token);
    if (cookieData.user_role !== "admin") {
        return {
            redirect: {
                permanent: false,
                destination: "/admin"
            }
        };
    } else {
        return {
            props: {
                info: cookieData,
                details: data
            }
        };
    }
}
function User({ info , details  }) {
    const [breadcrumb, setBreadcrumb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formLoading, setFormLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [activating, setActivating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [activationMessage, setActivationMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [activationColor, setActivationColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [inputStatus, setInputStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("warning");
    const [selectedItemForEdit, setSelectedItemForEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("add");
    const [isDashboard, setIsDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMember, setIsMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUser, setIsUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [isReport, setIsReport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [deleting, setDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [changing, setChanging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showPasswordModal, setShowPasswordModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showActivationModal, setShowActivationModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [hasMunicipality, setHasMunicipality] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedItemForDelete, setSelectedItemForDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedItemForPassword, setSelectedItemForPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedItemForActivation, setSelectedItemForActivation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [userStatus, setUserStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [roleData, setRoleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [formInitValues, setFormInitValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [municipalities, setMunicipalities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [municipalityName, setMunicipalityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [form] = antd__WEBPACK_IMPORTED_MODULE_3__.Form.useForm();
    const getData = async ()=>{
        setLoading(true);
        const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .getUsers */ .Rf)();
        if (data.user_status == "success") {
            setMemberData(data.users);
        }
        setLoading(false);
    };
    const handleMunicipality = (val)=>{
        if (val == "encoder" || val == "team lead") {
            setHasMunicipality(true);
        } else {
            setHasMunicipality(false);
        }
    };
    const handleSelectedMunicipalities = (value)=>{
        let str = "";
        if (value.length > 0) {
            str = value.map((mtype)=>{
                return mtype.value;
            }).join(",");
        }
        form.setFieldsValue({
            selected_municipalities: str
        });
    };
    const getPasswordId = (val)=>{
        setSelectedItemForPassword(val);
        setShowPasswordModal(true);
    };
    const getMemberID = (val)=>{
        setSelectedItemForDelete(val);
        setShowDeleteModal(true);
    };
    const checkEmail = async (e)=>{
        const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .emailExist */ .e0)(e.target.value, page, selectedItemForEdit);
        if (data.email_status == "found") {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Email already exist.");
            if (page == "add") {
                form.setFieldsValue({
                    email: ""
                });
            } else {
                form.setFieldsValue({
                    email: data.email
                });
            }
        }
    };
    const deleteRecord = async ()=>{
        setShowDeleteModal(false);
        setDeleting(true);
        const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .deleteUser */ .h8)(selectedItemForDelete);
        if (data.delete_status == "success") {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success("User deleted successfully.");
            router.reload(window.location.pathname);
        } else {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Failed to delete this user.");
        }
        setDeleting(false);
    };
    const getRoleData = async ()=>{
        const { data  } = await (0,_services_roleService__WEBPACK_IMPORTED_MODULE_15__/* .getRoles */ .F)();
        if (data.role_status == "success") {
            setRoleData(data.roles);
        }
    };
    const onFinishFailed = (errorInfo)=>{
        antd__WEBPACK_IMPORTED_MODULE_3__.message.error("There are some invalid inputs.");
    };
    const reloadPage = ()=>{
        router.reload(window.location.pathname);
    };
    const activateRecord = async ()=>{
        let msg = "Activating account, please wait ...";
        let clr = "bg-green-500";
        let successMsg = "Activation successful.";
        if (userStatus == 1 || userStatus == "1") {
            msg = "De-activating account, please wait ...";
            clr = "bg-red-500";
            successMsg = "De-activation successful.";
        }
        setActivationMessage(msg);
        setActivationColor(clr);
        setShowActivationModal(false);
        setActivating(true);
        try {
            const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .activateAccount */ .NG)(selectedItemForActivation, userStatus);
            setActivating(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success(successMsg);
            reloadPage();
        } catch (error) {
            setActivating(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong.");
        }
    };
    const handleActivation = async (id)=>{
        setLoading(true);
        setSelectedItemForActivation(id);
        try {
            const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .getUserStatus */ .Tq)(id);
            setUserStatus(data.user_status);
            let pg = "Are you sure you want to activate this user?";
            if (data.user_status == 1 || data.user_status == "1") {
                pg = "Are you sure you want to de-activate this user?";
            }
            setPage(pg);
            setLoading(false);
            setShowActivationModal(true);
        } catch (error) {
            setLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong.");
        }
    };
    const showFormModal = ()=>{
        setShowModal(true);
    };
    const onPasswordFinish = async (values)=>{
        setShowPasswordModal(false);
        setChanging(true);
        if (selectedItemForPassword) {
            values.id = selectedItemForPassword;
            values.type = "user";
            const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .changePassword */ .Cp)(values);
            setChanging(false);
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success("Password changed successfully.");
            router.reload(window.location.pathname);
        }
    };
    const onFinish = async (values)=>{
        setSaving(true);
        if (selectedItemForEdit) {
            values.id = selectedItemForEdit;
            const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .updateUser */ .Nq)(values);
            setSaving(false);
            if (data.update_status == "success") {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.success("User updated successfully.");
            } else {
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("User update failed.");
            }
            router.reload(window.location.pathname);
        } else {
            try {
                const { register_status  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_14__/* .saveUser */ .JR)(values);
                console.log(register_status);
                setSaving(false);
                if (register_status == "success") {
                    antd__WEBPACK_IMPORTED_MODULE_3__.message.success("User created successful.");
                    router.reload(window.location.pathname);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_3__.message.error("User creation failed.");
                }
            } catch (error) {
                setSaving(false);
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error("Something went wrong.");
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const roleLabel = `Level: ${info.user_role} |`;
        setBreadcrumb([
            roleLabel,
            "Dashboard",
            ">>",
            "Users"
        ]);
        getData();
        getRoleData();
        if (details.member_status == "success") {
            setMunicipalities(details.selectedMunicipalities);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        role: info.user_role,
        isDashboard: isDashboard,
        isMember: isMember,
        isUser: isUser,
        isReport: isReport,
        title: "Administration Panel - Users",
        trail: breadcrumb,
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                message: "Loading, please wait ...",
                pcolor: "bg-yellow-500"
            }),
            deleting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                message: "Deleting, please wait ...",
                pcolor: "bg-orange-500"
            }),
            changing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                message: "Updating, please wait ...",
                pcolor: "bg-green-500"
            }),
            activating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                message: `${activationMessage}`,
                pcolor: `${activationColor}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                mtitle: "User",
                showModal: showModal,
                setShowModal: setShowModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_FillupForm__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    setHasMunicipality: setHasMunicipality,
                    handleSelectedMunicipalities: handleSelectedMunicipalities,
                    municipalities: municipalities,
                    handleMunicipality: handleMunicipality,
                    hasMunicipality: hasMunicipality,
                    checkEmail: checkEmail,
                    roleData: roleData,
                    form: form,
                    getUser: _services_userService__WEBPACK_IMPORTED_MODULE_14__/* .getUser */ .PR,
                    onFinish: onFinish,
                    onFinishFailed: onFinishFailed,
                    setFormLoading: setFormLoading,
                    formLoading: formLoading,
                    saving: saving,
                    loading: loading,
                    setShowModal: setShowModal,
                    reloadPage: reloadPage,
                    formInitValues: formInitValues,
                    setFormInitValues: setFormInitValues,
                    selectedItemForEdit: selectedItemForEdit,
                    title: "Please fill-up the form completely"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_DeleteModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                setShowDeleteModal: setShowDeleteModal,
                showDeleteModal: showDeleteModal,
                selectedItemForDelete: selectedItemForDelete,
                mtitle: "Delete Confirmation",
                deleteRecord: deleteRecord,
                deleting: deleting,
                page: "user"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_PasswordModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                form: form,
                setShowPasswordModal: setShowPasswordModal,
                showPasswordModal: showPasswordModal,
                onPasswordFinish: onPasswordFinish,
                selectedItemForPassword: selectedItemForPassword,
                reloadPage: reloadPage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_ActivationModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                selectedItemForActivation: selectedItemForActivation,
                showActivationModal: showActivationModal,
                setShowActivationModal: setShowActivationModal,
                activateRecord: activateRecord,
                page: page
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_DataTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                handleActivation: handleActivation,
                getMemberID: getMemberID,
                memberData: memberData,
                reloadPage: reloadPage,
                setSelectedItemForEdit: setSelectedItemForEdit,
                getPasswordId: getPasswordId,
                setPage: setPage,
                setShowModal: setShowModal,
                title: "List of Users",
                showFormModal: showFormModal,
                adminPage: "users"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getRoles)
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
const getRoles = async ()=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getRoles`, {}, header);
        return data;
    } catch (error) {
        return error.response;
    }
};

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

/***/ 1848:
/***/ ((module) => {

module.exports = require("react-highlight-words");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [747,5120,8581,5360], () => (__webpack_exec__(4702)));
module.exports = __webpack_exports__;

})();