"use strict";
exports.id = 8349;
exports.ids = [8349];
exports.modules = {

/***/ 7695:
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




const AuthButton = ({ icon , animation , text , classType , clickEvent  })=>{
    const renderIcon = ()=>{
        switch(icon){
            case "arrow_down":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowDownOutlined, {
                    className: `${animation}`
                });
            case "arrow_up":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowUpOutlined, {
                    className: `${animation}`
                });
            case "arrow_left":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowLeftOutlined, {
                    className: `${animation}`
                });
            case "arrow_right":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowRightOutlined, {
                    className: `${animation}`
                });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: clickEvent,
        className: `${classType}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
            children: [
                renderIcon,
                text
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthButton);


/***/ }),

/***/ 4738:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6752);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(laravel_echo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1272);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const suffix = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CommentOutlined, {
    style: {
        fontSize: 16,
        color: "#1890ff"
    }
});
const ChatForm = ({ setShowChat , setShowLoginModal , getChats , onSend , chatMessages  })=>{
    const initChat = ()=>{
        const token = Cookies.get("token");
        const options = {
            broadcaster: "pusher",
            key: "55b59c021fa1781f83db",
            cluster: "ap1",
            authEndpoint: `${"https://rpcbulacan.com"}/broadcasting/auth`,
            forceTLS: true,
            encrypted: false,
            auth: {
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: "application/json"
                }
            }
        };
        window.Echo = new Echo({
            ...options,
            client: new Pusher(options.key, options)
        });
        window.Echo.private("chat").listen("MessageSent", (e)=>{
            getChats();
        });
    };
    useEffect(()=>{
        $(document).ready(function() {
            $("#message-input").keyup(function(e) {
                if (e.keyCode === 13) {
                    $(this).val("");
                }
            });
        });
        if (Cookies.get("loggedIn")) {
            setShowLoginModal(false);
            setShowChat(true);
            initChat();
        } else {
            setShowChat(false);
            setShowLoginModal(true);
        }
    }, []);
    return /*#__PURE__*/ _jsxs("div", {
        className: "w-full flex flex-col h-200 bg-white",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "hidden sm:block sticky top-0 z-10",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "border-b border-gray-200 dark:border-gray-600",
                    children: /*#__PURE__*/ _jsx("nav", {
                        className: "-mb-px flex bg-white dark:bg-gray-900",
                        "aria-label": "Tabs",
                        children: /*#__PURE__*/ _jsxs("a", {
                            onClick: ()=>setShowChat(false),
                            className: "flex justify-between bg-indigo-800 text-gray-50 w-full py-4 px-3 text-center border-b-2 dark:text-gray-50 dark:border-gray-600 font-medium text-sm",
                            "aria-current": "page",
                            children: [
                                "AltusTech IT Solutions Corp ",
                                /*#__PURE__*/ _jsx(CloseCircleOutlined, {
                                    style: {
                                        fontSize: 22
                                    }
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "w-full flex scrollbar-thin hover:scrollbar-thumb-indigo-700 dark:hover:scrollbar-thumb-indigo-700 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-400 scrollbar-track-gray-50 overflow-y-scroll",
                children: /*#__PURE__*/ _jsx("ul", {
                    className: "divide-y dark:divide-gray-700 divide-dotted divide-gray-200 w-full",
                    children: chatMessages && chatMessages.map((item, index)=>/*#__PURE__*/ _jsx("li", {
                            className: "bg-gray-300 py-2 px-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        className: "h-6 w-6 rounded-full",
                                        src: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex-1 space-y-1",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "text-sm font-medium",
                                                        children: `${item.usr?.first_name} ${item.usr?.last_name}`
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-sm text-gray-500 dark:text-gray-200",
                                                        children: item.cdate
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: item?.msg
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-sm bg-blue-500 p-1 rounded text-gray-50",
                                                        children: "public"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                "aria-labelledby": "chat-footer",
                className: "h-auto w-full sticky shadow-2xl bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-900 border-l dark:border-gray-800 border-gray-200 bottom-0 min-w-full flex-1 flex flex-col lg:order-last",
                children: /*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "px-3 py-3 h-full mt-1 flex rounded-md shadow-sm",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "relative flex items-stretch flex-grow focus-within:z-10",
                            children: /*#__PURE__*/ _jsx(Input, {
                                maxLength: 191,
                                id: "message-input",
                                placeholder: "Type your message here and press enter ...",
                                size: "large",
                                suffix: suffix,
                                onPressEnter: onSend
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ChatForm)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PublicChatForm = ()=>{
    const setChatBox = ()=>{
        let chatbox = document.getElementById("fb-customer-chat");
        chatbox.setAttribute("page_id", "102999182729258");
        chatbox.setAttribute("attribution", "biz_inbox");
        chatbox.setAttribute("theme_color", "#b88917");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.fbAsyncInit = function() {
            FB.init({
                xfbml: true,
                version: "v16.0"
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            //js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            js.src = "https://connect.facebook.net/en/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
        setChatBox();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "fb-root"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "fb-customer-chat",
                class: "fb-customerchat"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicChatForm);


/***/ }),

/***/ 2960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7695);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const Hero = ({ heading1 , heading2 , heading3 , buttontext1 , buttontext2 , page , bgImage , textWidth  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const gotoRegister = ()=>{
        router.push("registration");
    };
    const gotoLogin = ()=>{
        router.push("login");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-wrap items-center ${bgImage}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${textWidth} sm:w-95 md:w-95 px-20 z-[5]`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-white text-7xl font-bold uppercase mt-[10rem]",
                    children: heading1
                })
            }),
            page === "index" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap w-full px-20 z-[5]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        clickEvent: gotoLogin,
                        icon: "arrow_down",
                        text: `${buttontext1}`,
                        classType: "px-10 py-5 mr-5 border rounded-none btn-main bg-active uppercase text-xl",
                        animation: "animate-bounce"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        clickEvent: gotoRegister,
                        icon: "arrow_down",
                        text: `${buttontext2}`,
                        classType: "px-10 py-5 border rounded-none btn-main uppercase text-xl text-white",
                        animation: "animate-bounce"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 6369:
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



const DirectContact = ({ buttonClass , btnType , title , icon , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: `${title}`,
        placement: "top",
        children: [
            btnType === "call" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "tel:+639063091425",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: onClick,
                    className: `${buttonClass}`,
                    children: icon
                })
            }),
            btnType === "chat" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: onClick,
                className: `${buttonClass}`,
                children: icon
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectContact);


/***/ }),

/***/ 4660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_searchService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_searchService__WEBPACK_IMPORTED_MODULE_8__]);
_services_searchService__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Footer = ({ setLoading  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const searchPage = async ()=>{
        if (searchRef.current.value == "") {
            antd__WEBPACK_IMPORTED_MODULE_6__.message.error("Please provide a search query.");
        } else {
            setLoading(true);
            const urls = [
                "privileges-benefits",
                "republic-act-7432",
                "republic-act-9994",
                "republic-act",
                "functions",
                "news-events",
                "privacy-policy",
                "useful-links",
                ""
            ];
            const baseUrl = "https://rpcbulacan.org";
            urls.map((url)=>{
                fetch(`${baseUrl}/${url}`).then(function(response) {
                    return response.text();
                }).then(function(html) {
                    const str = html.toString();
                    if (str.search(searchRef.current.value) !== -1) {
                        router.push(`${baseUrl}/${url}`);
                    } else {
                        console.log("not found");
                    }
                    setLoading(false);
                }).catch(function(err) {
                    console.warn("Something went wrong.", err);
                    setLoading(false);
                });
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function() {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#searchInput").keyup(function(e) {
                if (e.keyCode === 13) {
                    searchPage();
                }
            });
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bottom-0 left-0 w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-h-[500px] m-auto flex justify-around items-start p-16 bg-fourth text-tertiary",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mr-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/logos/edit_logo-removebg-preview-e1653023867453-300x151.png",
                            alt: "/",
                            width: "300",
                            height: "151",
                            "object-fit": "cover"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mr-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.FlagFilled, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Provincial Government of Bulacan Guinhawa, Malolos City, Bulacan"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.FacebookFilled, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "OSCA Office"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.PhoneFilled, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "(123) 123-4567"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.MailFilled, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "osca.support@altustechit.com"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col footer-link",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: searchRef,
                                type: "text",
                                id: "searchInput",
                                className: "w-44 sm:w-44 md:w-60 lg:w-60 xl:w-60 2xl:w-60 p-3",
                                placeholder: "Search here ..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: searchPage,
                                className: "w-44 sm:w-44 md:w-60 lg:w-60 xl:w-60 2xl:w-60 mt-2 px-5 py-2 bg-secondary font-bold text-white",
                                children: "SEARCH"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "pt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/",
                                            className: "text-tertiary",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/#about-page",
                                            className: "text-tertiary",
                                            children: "About OSCA"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/#senior-citizens-corner-page",
                                            className: "text-tertiary",
                                            children: "Senior Citizens' Corner"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/contact",
                                            className: "text-tertiary",
                                            children: "Contact Us"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/downloads",
                                            className: "text-tertiary",
                                            children: "Downloads"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/useful-links",
                                            className: "text-tertiary",
                                            children: "Useful Links"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/privacy-policy",
                                            className: "text-tertiary",
                                            children: "Privacy Policy"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-16 m-auto p-3 flex justify-around items-center bg-fifth text-tertiary border border-t-1 border-b-0 border-l-0 border-r-0 border-amber-300 border-dotted text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "leading-none text-tertiary",
                        children: "Copyright \xa9 2022 OFFICE OF THE SENIOR CITIZENS' AFFAIRS. All Rights Reserved."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "leading-none text-tertiary",
                        children: [
                            "Powered by: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "text-tertiary",
                                href: "https://altustechit.com/",
                                target: "_blank",
                                children: "AltusTech IT Solutions Corp."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);







const Navbar = ()=>{
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const handleNav = ()=>{
        setNav(!nav);
    };
    const handleRoute = (page)=>{
        setNav(!nav);
        router.push(page);
    };
    const aboutSubMenu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Menu, {
        items: [
            {
                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "font-bold text-sm text-primary",
                    onClick: ()=>{
                        router.push("/republic-act");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.AuditOutlined, {}),
                            "Republic Act 7432 & 9994"
                        ]
                    })
                })
            },
            {
                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "font-bold text-sm text-primary",
                    onClick: ()=>{
                        router.push("/functions");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.FunctionOutlined, {}),
                            "Functions"
                        ]
                    })
                })
            },
            {
                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "font-bold text-sm text-primary",
                    onClick: ()=>{
                        router.push("/privileges-benefits");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.TeamOutlined, {}),
                            "Privileges & Benefits"
                        ]
                    })
                })
            },
            {
                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "font-bold text-sm text-primary",
                    onClick: ()=>{
                        router.push("/downloads");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownloadOutlined, {}),
                            "Downloads"
                        ]
                    })
                })
            }
        ]
    });
    const cornerSubMenu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Menu, {
        items: [
            {
                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "font-bold text-sm text-primary",
                    onClick: ()=>{
                        router.push("/data-analytics");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LineChartOutlined, {}),
                            "Data & Analytics"
                        ]
                    })
                })
            },
            {
                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "font-bold text-sm text-primary",
                    onClick: ()=>{
                        router.push("/news-events");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SolutionOutlined, {}),
                            "News & Events"
                        ]
                    })
                })
            }
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 left-0 w-full z-10 ease-in duration-300 navbar-color drop-shadow",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-[1366px] m-auto flex justify-around items-center p-1",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/images/logo.png",
                        alt: "/",
                        width: "151",
                        height: "74",
                        priority: true,
                        "object-fit": "cover"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex items-center font-bold text-lg hidden sm:flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "p-4-custom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "p-4-custom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
                                    overlay: aboutSubMenu,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        className: "hidden sm:flex menu-button",
                                        type: "link",
                                        children: "About OSCA"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "p-4-custom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
                                    overlay: cornerSubMenu,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        className: "hidden sm:flex menu-button",
                                        type: "link",
                                        children: "Senior Citizen's Corner"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "p-4-custom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/contact",
                                children: "Contact Us"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: handleNav,
                    className: "border border-white text-primary p-1 block sm:hidden border-black z-10 mr-1",
                    children: nav ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CloseOutlined, {
                        className: "cursor-pointer",
                        style: {
                            fontSize: "20px"
                        }
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.MenuOutlined, {
                        className: "cursor-pointer",
                        style: {
                            fontSize: "20px"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-100 text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-100 text-center ease-in duration-300",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/"),
                                    className: "cursor-pointer",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/republic-act"),
                                    className: "cursor-pointer",
                                    children: "Republic Act 7432 & 9994"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/functions"),
                                    className: "cursor-pointer",
                                    children: "Functions"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/privileges-benefits"),
                                    className: "cursor-pointer",
                                    children: "Privileges & Benefits"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/downloads"),
                                    className: "cursor-pointer",
                                    children: "Downloads"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/data-analytics"),
                                    className: "cursor-pointer",
                                    children: "Data & Analytics"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/news-events"),
                                    className: "cursor-pointer",
                                    children: "News & Events"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/contact"),
                                    className: "cursor-pointer",
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/registration"),
                                    className: "cursor-pointer",
                                    children: "Register"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-3 text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>handleRoute("/login"),
                                    className: "cursor-pointer",
                                    children: "Login"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 6383:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var _front_parts_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4660);
/* harmony import */ var _front_parts_DirectContact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6369);
/* harmony import */ var _forms_ChatForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4738);
/* harmony import */ var _forms_PublicChatForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4550);
/* harmony import */ var _modal_LoginModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2471);
/* harmony import */ var _modal_SelectChatModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5015);
/* harmony import */ var _front_parts_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9204);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7391);
/* harmony import */ var _services_chatService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6307);
/* harmony import */ var _services_helperService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__, _front_parts_Footer__WEBPACK_IMPORTED_MODULE_6__, _forms_ChatForm__WEBPACK_IMPORTED_MODULE_8__, _services_authService__WEBPACK_IMPORTED_MODULE_14__, _services_chatService__WEBPACK_IMPORTED_MODULE_15__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_5__, _front_parts_Footer__WEBPACK_IMPORTED_MODULE_6__, _forms_ChatForm__WEBPACK_IMPORTED_MODULE_8__, _services_authService__WEBPACK_IMPORTED_MODULE_14__, _services_chatService__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const SiteLayout = (props)=>{
    const [showChat, setShowChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showPublicChat, setShowPublicChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showLoginModal, setShowLoginModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showSelectChatModal, setShowSelectChatModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [chatMessages, setChatMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [publicChatMessages, setPublicChatMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const onClick = ()=>{
        setShowChat(false);
        setShowPublicChat(true);
    };
    const onSend = async (event)=>{
        try {
            const data = await (0,_services_chatService__WEBPACK_IMPORTED_MODULE_15__/* .sendMessage */ .bG)(event.target.value);
            if (data.status === "success") {
                antd__WEBPACK_IMPORTED_MODULE_4__.message.success("Message sent successfully.");
            }
        } catch (error) {
            console.log(error);
            antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Something went wrong.");
        }
    };
    const onPublicSend = async (event)=>{
        try {
            const data = await (0,_services_chatService__WEBPACK_IMPORTED_MODULE_15__/* .sendPublicMessage */ .OH)(event.target.value);
            if (data.status === "success") {
                antd__WEBPACK_IMPORTED_MODULE_4__.message.success("Message sent successfully.");
            }
        } catch (error) {
            console.log(error);
            antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Something went wrong.");
        }
    };
    const onLoginFinish = async (values)=>{
        props.setLoading(true);
        try {
            const { login_status , user_id , user_first_name , user_status , token , role  } = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_14__/* .login */ .x4)(values);
            props.setLoading(false);
            if (user_status == 0 || user_status == "0") {
                router.push("/deactivated");
            } else {
                if (login_status == "success") {
                    js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("loggedIn", true);
                    js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("token", token);
                    js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("user_id", user_id);
                    js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("user_first_name", user_first_name);
                    js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("user_role", role);
                    router.reload(window.location.pathname);
                } else {
                    setShowChat(false);
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Invalid email/password.");
                }
            }
        } catch (error) {
            props.setLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Something went wrong.");
        }
    };
    const onSelectFinish = (opt)=>{
        setShowSelectChatModal(false);
        if (opt == "member") {
            setShowChat(true);
        } else {
            setShowPublicChat(true);
        }
    };
    const getChats = async ()=>{
        try {
            const data = await (0,_services_chatService__WEBPACK_IMPORTED_MODULE_15__/* .getMessages */ ._U)({});
            let arr = [];
            for(let i = 0; i < data.length; i++){
                let fdate = (0,_services_helperService__WEBPACK_IMPORTED_MODULE_16__/* .chatDate */ .MW)(data[i].created_at);
                arr.push({
                    msg: data[i].message,
                    cdate: fdate,
                    usr: data[i].user
                });
            }
            setChatMessages(arr);
        } catch (error) {
            console.log(error);
            antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Something went wrong.");
        }
    };
    const getPublicChats = async ()=>{
        try {
            const data = await (0,_services_chatService__WEBPACK_IMPORTED_MODULE_15__/* .getPublicMessages */ .Z$)({});
            let arr = [];
            for(let i = 0; i < data.length; i++){
                let fdate = (0,_services_helperService__WEBPACK_IMPORTED_MODULE_16__/* .chatDate */ .MW)(data[i].created_at);
                arr.push({
                    msg: data[i].message,
                    cdate: fdate,
                    usr: data[i].user
                });
            }
            setPublicChatMessages(arr);
        } catch (error) {
            console.log(error);
            antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Something went wrong.");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get("loggedIn")) {
            getChats();
        } else {
            getPublicChats();
        }
    /*if(Cookies.get('loggedIn'))
    {
      setShowChat(true);
    }*/ }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: props.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_front_parts_Navbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            props.children,
            !showChat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed bottom-0 right-1 z-40",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forms_PublicChatForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_front_parts_DirectContact__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        btnType: "call",
                        buttonClass: "fixed z-40 bottom-6 right-26 bg-yellow-600 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-yellow-400 hover:drop-shadow-2xl hover:animate-bounce duration-300",
                        title: "Call Us Now",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__.PhoneOutlined, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_front_parts_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                setLoading: props.setLoading
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);




function LoginModal({ children , setShowLoginModal , showLoginModal , onLoginFinish  }) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: showLoginModal ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "relative w-auto my-6 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                    children: [
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "text-md font-semibold",
                                            children: "Sign in to your account first before you can start to chat."
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                            onClick: ()=>setShowLoginModal(false),
                                            children: /*#__PURE__*/ _jsx("span", {
                                                className: "text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                children: /*#__PURE__*/ _jsx(CloseSquareOutlined, {})
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ _jsx(Form, {
                                        layout: "vertical",
                                        onFinish: onLoginFinish,
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "flex flex-wrap w-90 justify-left items-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ _jsx(Form.Item, {
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
                                                            },
                                                            {
                                                                max: 191,
                                                                message: "Email must be at most 191 characters long"
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ _jsx(Input, {
                                                            size: "large",
                                                            className: "w-full",
                                                            placeholder: "Type your email here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ _jsx(Form.Item, {
                                                        label: "Password",
                                                        name: "password",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Password is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ _jsx(Input.Password, {
                                                            className: "w-full",
                                                            size: "large",
                                                            placeholder: "Type your password here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ _jsx(Form.Item, {
                                                        children: /*#__PURE__*/ _jsxs(Space, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    className: "px-4 py-1 w-32 border rounded-none bg-active uppercase text-md hover:bg-yellow-500",
                                                                    children: /*#__PURE__*/ _jsxs(Space, {
                                                                        size: "middle",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(SendOutlined, {
                                                                                className: "animate-pulse"
                                                                            }),
                                                                            "Login"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>{
                                                                        setShowLoginModal(false);
                                                                    },
                                                                    className: "px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500",
                                                                    children: /*#__PURE__*/ _jsxs(Space, {
                                                                        size: "middle",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(CloseSquareOutlined, {
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
                /*#__PURE__*/ _jsx("div", {
                    className: "opacity-50 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
}


/***/ }),

/***/ 5015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);




function SelectChatModal({ children , setShowSelectChatModal , showSelectChatModal , onSelectFinish  }) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: showSelectChatModal ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "relative w-auto my-6 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                    children: [
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: "Please choose a chat option below."
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                            onClick: ()=>setShowSelectChatModal(false),
                                            children: /*#__PURE__*/ _jsx("span", {
                                                className: "text-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                children: /*#__PURE__*/ _jsx(CloseSquareOutlined, {})
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "flex w-95 justify-around items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ _jsx("button", {
                                                onClick: ()=>{
                                                    onSelectFinish("member");
                                                },
                                                className: "p-2 w-72 border rounded-none bg-blue-500 uppercase text-lg text-white hover:bg-yellow-500",
                                                children: /*#__PURE__*/ _jsxs(Space, {
                                                    size: "middle",
                                                    className: "border border-dotted px-3 py-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(CommentOutlined, {
                                                            className: "animate-pulse text-5xl"
                                                        }),
                                                        "Chat as Member"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("button", {
                                                onClick: ()=>{
                                                    onSelectFinish("guest");
                                                },
                                                className: "p-2 w-72 border rounded-none bg-green-500 uppercase text-lg text-white hover:bg-yellow-500",
                                                children: /*#__PURE__*/ _jsxs(Space, {
                                                    size: "middle",
                                                    className: "border border-dotted px-3 py-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(CommentOutlined, {
                                                            className: "animate-pulse text-5xl"
                                                        }),
                                                        "Chat as Guest"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "opacity-50 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
}


/***/ }),

/***/ 6307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OH": () => (/* binding */ sendPublicMessage),
/* harmony export */   "Z$": () => (/* binding */ getPublicMessages),
/* harmony export */   "_U": () => (/* binding */ getMessages),
/* harmony export */   "bG": () => (/* binding */ sendMessage)
/* harmony export */ });
/* unused harmony export getAdminToken */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseURL = `${"https://rpcbulacan.com"}/api`;
const rootURL = (/* unused pure expression or super */ null && (`${"https://rpcbulacan.com"}`));
const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("token");
const header = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
};
const getAdminToken = async (user)=>{
    try {
        const { data  } = await axios.post(`${baseURL}/getAdminToken`, user);
        return data;
    } catch (error) {
        return error.response;
    }
};
const getMessages = async (params)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getMessages`, params, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const sendMessage = async (message)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/sendMessage`, {
            message
        }, header);
        return data;
    } catch (error) {
        return error.response;
    }
};
const sendPublicMessage = async (message)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/sendPublicMessage`, {
            message
        });
        return data;
    } catch (error) {
        return error.response;
    }
};
const getPublicMessages = async (params)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/getPublicMessages`, params);
        return data;
    } catch (error) {
        return error.response;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export searchURL */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseURL = (/* unused pure expression or super */ null && ("https://rpcbulacan.org"));
const searchURL = async (url)=>{
    try {
        const data = await scrapeHtmlWeb(options);
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