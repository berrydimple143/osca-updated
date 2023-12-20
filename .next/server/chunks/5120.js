"use strict";
exports.id = 5120;
exports.ids = [5120];
exports.modules = {

/***/ 1308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _components_modal_PasswordModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1290);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9068);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__, _services_userService__WEBPACK_IMPORTED_MODULE_6__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_4__, _services_userService__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const rootURL = "https://rpcbulacan.org";
const Breadcrumb = ({ title  })=>{
    const [showPasswordModal, setShowPasswordModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedItemForPassword, setSelectedItemForPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const newPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const oldPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const showPasswordForm = ()=>{
        setShowPasswordModal(true);
    };
    const menu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        items: [
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: showPasswordForm,
                    className: "cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.KeyOutlined, {}),
                                "Change Password"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/logout`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.LogoutOutlined, {}),
                                "Logout"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            }
        ]
    });
    const reloadPage = ()=>{
        router.reload(window.location.pathname);
    };
    const resetPassword = ()=>{
        oldPasswordRef.current.focus();
        antd__WEBPACK_IMPORTED_MODULE_2__.message.error("You forgot your old password.");
        form.setFieldsValue({
            old_password: ""
        });
    };
    const onPasswordFinish = async (values)=>{
        const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_6__/* .checkPassword */ .oH)(values.old_password);
        if (data.password_status == "not match") {
            resetPassword();
        } else {
            setShowPasswordModal(false);
            values.type = "admin";
            const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_6__/* .changePassword */ .Cp)(values);
            antd__WEBPACK_IMPORTED_MODULE_2__.message.success("Password changed successfully.");
            router.reload(window.location.pathname);
        }
    };
    const getPassword = async (e)=>{
        const { data  } = await (0,_services_userService__WEBPACK_IMPORTED_MODULE_6__/* .checkPassword */ .oH)(e.target.value);
        if (data.password_status == "not match") {
            resetPassword();
        } else {
            newPasswordRef.current.focus();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("loggedIn")) {
            setUsername(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("user_first_name"));
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between px-5 mb-2 text-md text-gray-500 bg-gradient-to-t from-yellow-200 to-yellow-50 font-semibold text-shadow-sm rounded-b-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_PasswordModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                form: form,
                setShowPasswordModal: setShowPasswordModal,
                showPasswordModal: showPasswordModal,
                onPasswordFinish: onPasswordFinish,
                selectedItemForPassword: selectedItemForPassword,
                reloadPage: reloadPage,
                getPassword: getPassword,
                newPasswordRef: newPasswordRef,
                oldPasswordRef: oldPasswordRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-breadcrumb",
                children: title.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: t
                            }, i),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "\xa0\xa0"
                            })
                        ]
                    }))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                    overlay: menu,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                "Welcome, ",
                                `${username}`,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DownOutlined, {})
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8237:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Header = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "w-screen flex justify-between items-center p-1 navbar-color drop-shadow",
        children: [
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx("h1", {
                    children: "OSCA Administration Panel"
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx("h1", {
                    children: "OSCA Administration Panel"
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Header)));


/***/ }),

/***/ 7578:
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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);




const rootURL = "https://rpcbulacan.org";
const Sidebar = ({ isDashboard , isMember , isUser , isReport , role  })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [isAdmin, setIsAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const menu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        items: [
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserSwitchOutlined, {}),
                                "Member Status"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/employment`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SolutionOutlined, {}),
                                "Employment Status"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/education`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ReadOutlined, {}),
                                "Educational Attainment"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/civil-status`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.IdcardOutlined, {}),
                                "Civil Status"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/gender`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.WomanOutlined, {}),
                                "Gender"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/religion`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ShopOutlined, {}),
                                "Religion"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/classification`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ApartmentOutlined, {}),
                                "Classification"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            },
            {
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `${rootURL}/admin/reports/common-illness`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MedicineBoxOutlined, {}),
                                "Common Illness"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "divider"
                        })
                    ]
                })
            }
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (role == "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `bg-fourth min-h-screen ${open ? "w-64" : "w-16"} duration-500 text-gray-100 px-4`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-3 flex justify-between",
                children: [
                    open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-md text-white font-bold",
                                children: "OSCA Admin Panel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuFoldOutlined, {
                                style: {
                                    fontSize: "20px"
                                },
                                className: "cursor-pointer",
                                onClick: ()=>setOpen(!open)
                            })
                        ]
                    }),
                    !open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuUnfoldOutlined, {
                        style: {
                            fontSize: "20px"
                        },
                        className: "cursor-pointer",
                        onClick: ()=>setOpen(!open)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 flex flex-col gap-4 relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `${rootURL}/admin`,
                        className: `group flex ${isDashboard && "bg-yellow-600"} items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DashboardOutlined, {
                                    style: {
                                        fontSize: "18px",
                                        color: "#fff"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                style: {
                                    transitionDelay: "300ms"
                                },
                                className: `text-white whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`,
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`,
                                children: "Dashboard"
                            })
                        ]
                    }),
                    isAdmin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `${rootURL}/admin/users`,
                        className: `group flex ${isUser && "bg-yellow-600"} items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {
                                    style: {
                                        fontSize: "18px",
                                        color: "#fff"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                style: {
                                    transitionDelay: "300ms"
                                },
                                className: `text-white whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`,
                                children: "Users"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`,
                                children: "Users"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `${rootURL}/admin/members`,
                        className: `group flex ${isMember && "bg-yellow-600"} items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UsergroupAddOutlined, {
                                    style: {
                                        fontSize: "18px",
                                        color: "#fff"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                style: {
                                    transitionDelay: "300ms"
                                },
                                className: `text-white whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`,
                                children: "Members"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`,
                                children: "Members"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `${rootURL}/admin/reports`,
                        className: `group flex ${isReport && "bg-yellow-600"} items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.BarChartOutlined, {
                                    style: {
                                        fontSize: "18px",
                                        color: "#fff"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                                style: {
                                    transitionDelay: "300ms"
                                },
                                overlayClassName: `text-white whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`,
                                overlay: menu,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        transitionDelay: "300ms"
                                    },
                                    className: `text-white whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                        children: [
                                            "Reports",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DownOutlined, {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                                style: {
                                    transitionDelay: "300ms"
                                },
                                overlayClassName: `${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`,
                                overlay: menu,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        transitionDelay: "300ms"
                                    },
                                    className: `${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                        children: [
                                            "Reports",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DownOutlined, {})
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 5120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7578);
/* harmony import */ var _admin_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8237);
/* harmony import */ var _admin_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_admin_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__]);
_admin_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AdminLayout = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: props.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_admin_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        isDashboard: props.isDashboard,
                        isMember: props.isMember,
                        isUser: props.isUser,
                        isReport: props.isReport,
                        role: props.role
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        style: {
                            width: "1150px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_admin_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                title: props.trail
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col w-full gap-y-3",
                                children: props.children
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PasswordModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);




function PasswordModal({ children , form , showPasswordModal , setShowPasswordModal , selectedItemForPassword , onPasswordFinish , reloadPage , newPasswordRef , oldPasswordRef , getPassword  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showPasswordModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                            children: "Password Change Confirmation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                            onClick: ()=>setShowPasswordModal(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                children: "\xd7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                        layout: "vertical",
                                        form: form,
                                        onFinish: onPasswordFinish,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-wrap w-90 justify-left items-center",
                                            children: [
                                                !selectedItemForPassword && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "Old Password",
                                                        name: "old_password",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Old password is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "password",
                                                            ref: oldPasswordRef,
                                                            className: "border border-gray-300 p-2 hover:border-blue-300",
                                                            placeholder: "Type your old password here ...",
                                                            style: {
                                                                width: "350px"
                                                            },
                                                            onBlur: getPassword
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "New Password",
                                                        name: "password",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "New password is required."
                                                            },
                                                            {
                                                                min: 6,
                                                                message: "Password must be at least 6 characters long."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
                                                            ref: newPasswordRef,
                                                            style: {
                                                                width: "350px"
                                                            },
                                                            size: "large",
                                                            placeholder: "Type your new password here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "Confirm New Password",
                                                        name: "confirm",
                                                        dependencies: [
                                                            "password"
                                                        ],
                                                        hasFeedback: true,
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Please confirm your new password!"
                                                            },
                                                            ({ getFieldValue  })=>({
                                                                    validator (_, value) {
                                                                        if (!value || getFieldValue("password") === value) {
                                                                            return Promise.resolve();
                                                                        }
                                                                        return Promise.reject(new Error("New password does not match with password confirmation!"));
                                                                    }
                                                                })
                                                        ],
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
                                                            style: {
                                                                width: "350px"
                                                            },
                                                            size: "large",
                                                            placeholder: "Type your password here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "px-4 py-1 w-32 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                                                        size: "middle",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SaveOutlined, {
                                                                                className: "animate-pulse"
                                                                            }),
                                                                            "Save"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>{
                                                                        setShowPasswordModal(false);
                                                                        reloadPage();
                                                                    },
                                                                    className: "px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                                                        size: "middle",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CloseSquareOutlined, {
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

/***/ 9068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "JR": () => (/* binding */ saveUser),
/* harmony export */   "NG": () => (/* binding */ activateAccount),
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "Tq": () => (/* binding */ getUserStatus),
/* harmony export */   "e0": () => (/* binding */ emailExist),
/* harmony export */   "h8": () => (/* binding */ deleteUser),
/* harmony export */   "oH": () => (/* binding */ checkPassword)
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
const getUsers = async ()=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getUsers`, {}, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getUser = async (id)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getUser`, {
            id
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getUserStatus = async (id)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getUserStatus`, {
            id
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const saveUser = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/saveUser`, user, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const updateUser = async (user)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/updateUser`, user, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const deleteUser = async (id)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/deleteUser`, {
            id
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const emailExist = async (email, page, id)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/emailExist`, {
            email,
            page,
            id
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const checkPassword = async (password)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/checkPassword`, {
            password
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const activateAccount = async (id, status)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/activateAccount`, {
            id,
            status
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const changePassword = async (user)=>{
    try {
        const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/changePassword`, user, header);
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