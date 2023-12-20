"use strict";
(() => {
var exports = {};
exports.id = 7623;
exports.ids = [7623,7391];
exports.modules = {

/***/ 5885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CameraModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-webcam"
const external_react_webcam_namespaceObject = require("react-webcam");
var external_react_webcam_default = /*#__PURE__*/__webpack_require__.n(external_react_webcam_namespaceObject);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./components/admin/Camera.js




const WebcamComponent = ()=>/*#__PURE__*/ _jsx(Webcam, {});
let ratio = 490 / 350;
const videoConstraints = {
    width: 490,
    height: 350,
    facingMode: "user",
    aspectRatio: ratio
};
const Camera = ({ setShowCameraModal , userCamera , selectedItemForCamera , setSaving , setShowCardSuccess , setSuccessMessage , setUploadData , page  })=>{
    const [picture, setPicture] = (0,external_react_.useState)("");
    const webcamRef = external_react_default().useRef(null);
    const capture = external_react_default().useCallback(()=>{
        const pictureSrc = webcamRef.current.getScreenshot();
        setPicture(pictureSrc);
    });
    const handleSave = async ()=>{
        if (picture == "") {
            external_antd_.message.error("Please take a shot ...");
        } else {
            setShowCameraModal(false);
            if (page == "vaccine") {
                setUploadData(picture);
                setSuccessMessage("Vaccine card picture was taken and prepared for saving.");
                setShowCardSuccess(true);
            } else {
                setSaving(true);
                try {
                    const { data  } = await userCamera(selectedItemForCamera, picture);
                    setSaving(false);
                } catch (error) {
                    setSaving(false);
                    external_antd_.message.error("Something went wrong.");
                }
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: picture == "" ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_webcam_default()), {
                    audio: false,
                    height: 350,
                    ref: webcamRef,
                    width: 490,
                    screenshotFormat: "image/jpeg",
                    videoConstraints: videoConstraints
                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: picture
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4 flex justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Space, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: (e)=>{
                                e.preventDefault();
                                capture();
                            },
                            className: "px-5 py-3 border border-dotted bg-red-500 text-white",
                            children: "Capture"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleSave,
                            className: "px-5 py-3 border border-dotted bg-green-500 text-white",
                            children: "Save"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setShowCameraModal(false),
                            className: "px-5 py-3 border border-dotted bg-orange-500 text-white",
                            children: "Close"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const admin_Camera = (Camera);

// EXTERNAL MODULE: ./components/ModalLoading.js
var ModalLoading = __webpack_require__(747);
;// CONCATENATED MODULE: ./components/admin/CameraModal.js




function CameraModal({ children , showCameraModal , setShowCameraModal , selectedItemForCamera , setSaving , saving , userCamera , mtitle , setShowCardSuccess , setSuccessMessage , setUploadData , page  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            saving && /*#__PURE__*/ jsx_runtime_.jsx(ModalLoading/* default */.Z, {
                message: "Saving, please wait ...",
                pcolor: "bg-green-500"
            }),
            showCameraModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-auto my-4 mx-auto max-w-3xl",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-lg font-semibold",
                                                children: mtitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                                onClick: ()=>setShowCameraModal(false),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                    children: "x"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative p-6 flex-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(admin_Camera, {
                                            setUploadData: setUploadData,
                                            setSuccessMessage: setSuccessMessage,
                                            setShowCardSuccess: setShowCardSuccess,
                                            setShowCameraModal: setShowCameraModal,
                                            userCamera: userCamera,
                                            selectedItemForCamera: selectedItemForCamera,
                                            setSaving: setSaving,
                                            page: page
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
        ]
    });
}


/***/ }),

/***/ 8096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_memberService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8581);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_memberService__WEBPACK_IMPORTED_MODULE_2__]);
_services_memberService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const baseImgURL = `${"https://rpcbulacan.com"}/images`;
const host = `${"https://rpcbulacan.org"}`;
const Canvas = (props)=>{
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const base_image = new Image();
    const base_image_back = new Image();
    const wrapText = (ctx, text, x, y, maxWidth, lineHeight)=>{
        const words = text.split(" ");
        let line = "";
        for (const [index, w] of words.entries()){
            const testLine = line + w + " ";
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && index > 0) {
                ctx.fillText(line, x, y);
                line = w + " ";
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    };
    const draw = (ctx, name, address, bday, gender, issued, id, img, img2, photo, signature, position)=>{
        if (position == "front") {
            base_image.onload = ()=>{
                ctx.drawImage(base_image, -8, 1);
                ctx.font = "17px serif";
                ctx.fillStyle = "black";
                ctx.fillText(`${name}`, 155, 117);
                ctx.font = "13px serif";
                wrapText(ctx, `${address}`, 155, 158, 245, 18);
                ctx.font = "12px serif";
                ctx.fillText(`${bday}`, 155, 245);
                ctx.fillText(`${gender}`, 241, 245);
                ctx.fillText(`${issued}`, 300, 245);
                ctx.font = "9px serif";
                ctx.fillText(`${id}`, 47, 210);
                const qr_image = new Image();
                qr_image.onload = ()=>{
                    ctx.drawImage(qr_image, 352, 200);
                };
                qr_image.src = `${img}`;
                if (photo != "") {
                    const profile_image = new Image();
                    profile_image.onload = ()=>{
                        ctx.drawImage(profile_image, 20, 87);
                    };
                    profile_image.src = photo;
                }
                if (signature != "") {
                    const signature_image = new Image();
                    signature_image.onload = ()=>{
                        ctx.drawImage(signature_image, 80, 280);
                    };
                    signature_image.src = signature;
                }
            };
            base_image.src = `${baseImgURL}/id_bg.jpg`;
        } else if (position == "back") {
            base_image_back.onload = ()=>{
                ctx.drawImage(base_image_back, -8, 1);
                const qr_image_back = new Image();
                qr_image_back.onload = ()=>{
                    ctx.drawImage(qr_image_back, 140, 86);
                };
                qr_image_back.src = `${img2}`;
            };
            base_image_back.src = `${baseImgURL}/id_bg_back.jpg`;
        }
    };
    const getData = async (id, position, context)=>{
        try {
            const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_2__/* .getCanvasData */ .lT)(id, host);
            draw(context, data.name, data.address, data.bday, data.gender, data.issued, data.id, data.img, data.img2, data.photo, data.signature, position);
        } catch (error) {
            message.error("Something went wrong.");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        getData(props.selectedItemForPrint, props.position, context);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: canvasRef,
        ...props,
        width: 500,
        height: 325
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);



function ModalForm({ children , showModal , setShowModal , mtitle  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center items-center absolute top-1 left-0 flex inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-auto h-screen max-w-full",
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseCircleOutlined, {
                                            onClick: ()=>setShowModal(false),
                                            className: "p-1 ml-auto bg-transparent border-0 text-black opacity-7 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative pt-1 flex-auto",
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

/***/ 1314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_admin_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_admin_Canvas__WEBPACK_IMPORTED_MODULE_2__]);
_components_admin_Canvas__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PrintCanvas = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_Canvas__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            selectedItemForPrint: props.selectedItemForPrint,
            position: props.position
        })
    });
});
PrintCanvas.displayName = "OSCA";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintCanvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PrintModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_PrintCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1314);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_admin_PrintCanvas__WEBPACK_IMPORTED_MODULE_3__]);
_components_admin_PrintCanvas__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function PrintModal({ children , showPrintModal , setShowPrintModal , selectedItemForPrint , handlePrinter , componentRefBack , componentRef , closePrint , mtitle  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showPrintModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-auto h-screen my-1 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t",
                                    children: "\xa0"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative p-6 flex-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_PrintCanvas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            ref: componentRef,
                                            selectedItemForPrint: selectedItemForPrint,
                                            position: "front"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_PrintCanvas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            ref: componentRefBack,
                                            selectedItemForPrint: selectedItemForPrint,
                                            position: "back"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handlePrinter,
                                                className: "bg-green-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                type: "button",
                                                children: "Print"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                type: "button",
                                                onClick: closePrint,
                                                children: "Close"
                                            })
                                        ]
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SignatureModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: external "react-signature-canvas"
const external_react_signature_canvas_namespaceObject = require("react-signature-canvas");
var external_react_signature_canvas_default = /*#__PURE__*/__webpack_require__.n(external_react_signature_canvas_namespaceObject);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./components/admin/Signature.js





class Signature extends external_react_.Component {
    state = {
        trimmedDataURL: null
    };
    sigPad = {};
    setShowSignatureModal = null;
    selectedItemForSignature = null;
    setSaving = null;
    userSignature = null;
    constructor(props){
        super(props);
        this.state = {
            trimmedDataURL: null
        };
        this.setShowSignatureModal = props.setShowSignatureModal;
        this.selectedItemForSignature = props.selectedItemForSignature;
        this.setSaving = props.setSaving;
        this.userSignature = props.userSignature;
    }
    close = ()=>{
        this.setShowSignatureModal(false);
    };
    clear = ()=>{
        this.sigPad.clear();
    };
    save = async ()=>{
        this.setShowSignatureModal(false);
        this.setSaving(true);
        const info = this.sigPad.getTrimmedCanvas().toDataURL("image/png");
        try {
            const { data  } = await this.userSignature(this.selectedItemForSignature, info);
            this.setSaving(false);
        } catch (error) {
            this.setSaving(false);
            external_antd_.message.error("Something went wrong.");
        }
    };
    render() {
        let { trimmedDataURL  } = this.state;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "padContainer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sigContainer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_signature_canvas_default()), {
                            canvasProps: {
                                className: "sigPad"
                            },
                            ref: (ref)=>{
                                this.sigPad = ref;
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "buttons",
                                onClick: this.clear,
                                children: "Clear"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "buttons",
                                onClick: this.save,
                                children: "Save"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "buttons",
                                onClick: this.close,
                                children: "Close"
                            })
                        ]
                    }),
                    trimmedDataURL ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "sigImage",
                        src: trimmedDataURL
                    }) : null
                ]
            })
        });
    }
}
/* harmony default export */ const admin_Signature = (Signature);

// EXTERNAL MODULE: ./components/ModalLoading.js
var ModalLoading = __webpack_require__(747);
;// CONCATENATED MODULE: ./components/admin/SignatureModal.js




function SignatureModal({ children , showSignatureModal , setShowSignatureModal , selectedItemForSignature , setSaving , saving , userSignature , mtitle  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            saving && /*#__PURE__*/ jsx_runtime_.jsx(ModalLoading/* default */.Z, {
                message: "Saving, please wait ...",
                pcolor: "bg-green-500"
            }),
            showSignatureModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-auto my-4 mx-auto max-w-3xl",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-lg font-semibold",
                                                children: mtitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                                onClick: ()=>setShowSignatureModal(false),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                    children: "\xd7"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative p-6 flex-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(admin_Signature, {
                                            setShowSignatureModal: setShowSignatureModal,
                                            selectedItemForSignature: selectedItemForSignature,
                                            setSaving: setSaving,
                                            userSignature: userSignature
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
        ]
    });
}


/***/ }),

/***/ 6942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);



const SuccessAlert = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",
        role: "alert",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block sm:inline",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute top-0 bottom-0 right-0 px-4 py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckOutlined, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessAlert);


/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InformationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_helperService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9850);





function InformationModal({ children , setShowInformationModal , memberInfo , photo , transaction , reloadPage , childrenInfo , maintenanceInfo  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "justify-center items-center flex flex-col overflow-x-hidden fixed overflow-y-auto inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-11/12 h-screen my-10 mx-auto",
                    children: [
                        photo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative flex w-11/12 bg-white outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-5 shadow-sm w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${photo}`
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 shadow-sm w-full text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold uppercase text-lg text-white",
                                    children: "Personal Information"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "ID Number: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.id_number)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Age: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.age),
                                            " yrs. old"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Extension Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.extension_name)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "First Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.first_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Middle Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.middle_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Last Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.last_name)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Address: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.address)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "E-mail Address: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.email)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Telephone: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.phone)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Mobile No.: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.mobile)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Date of Birth: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.birth_date)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Place of Birth: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.birth_place)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Messenger: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.messenger)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Ethnic Origin: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.ethnic_origin)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Language Spoken/Written: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.language)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Capability To Travel: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.able_to_travel)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Active in Politics: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.active_in_politics)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "SC Association/Org ID No.: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.association_id)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Other ID: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.other_id)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Area of Specialization: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.area)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Community Service/Others: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.service)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Living/residing with: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.companion)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Housing: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.type)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Involvement in Community: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.activity)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Gender: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.gender)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Civil Status: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.civil_status)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Blood Type: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.blood_type)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Religion: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.religion)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Highest Educational Attainment: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.education)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "GSIS: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.gsis)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "SSS: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.sss)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "TIN: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.tin)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "PhilHealth: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.philhealth)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Employment Status: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.employment_status)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Member Status: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.member_status)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Classification: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.classification)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Monthly Pension: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.pension)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "In case of Emergency: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.contact_person)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Emergency Contact Number: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.contact_person_number)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 shadow-sm w-full text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold uppercase text-lg text-white",
                                    children: "Economic Profile"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Source of Income: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.source_of_income)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Assets and Properties: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.assets)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Monthly Income: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.income_range)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 shadow-sm w-full text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold uppercase text-lg text-white",
                                    children: "Vaccination Information"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Vaccine Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.vaccine)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Vaccination Dose/Stage: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.dose)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Vaccination Date: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.vaccination_date)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 shadow-sm w-full text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold uppercase text-lg text-white",
                                    children: "Family Composition"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Spouse's First Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.spouse_first_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Spouse's Middle Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.spouse_middle_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Spouse's Last Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.spouse_last_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Spouse's Extension Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.spouse_extension_name)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Father's First Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.father_first_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Father's Middle Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.father_middle_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Father's Last Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.father_last_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Father's Extension Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.father_extension_name)
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Mother's First Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.mother_first_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Mother's Middle Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.mother_middle_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Mother's Last Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.mother_last_name)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Mother's Extension Name: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.mother_extension_name)
                                        ]
                                    })
                                })
                            ]
                        }),
                        childrenInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border rounded-none relative flex items-center w-11/12 bg-white outline-none focus:outline-none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-0 shadow-sm w-full text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "font-bold uppercase text-lg text-gray-600",
                                            children: "Children"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "No."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Full Name"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Occupation"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Income"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Age"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Dependency"
                                            })
                                        })
                                    ]
                                }),
                                childrenInfo.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: index + 1
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.full_name)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.occupation)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.income)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.age)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.dependency)
                                                })
                                            })
                                        ]
                                    }, index))
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 shadow-sm w-full text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold uppercase text-lg text-white",
                                    children: "Health Profile"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Social Problems: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.social_problem)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Economic Problems: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.economic_problem)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Health Issues: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.health_issue)
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "font-bold",
                                        children: [
                                            "Common Illness: ",
                                            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(memberInfo.sickness)
                                        ]
                                    })
                                })
                            ]
                        }),
                        maintenanceInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-1 shadow-sm w-full text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "font-bold uppercase text-lg text-white",
                                            children: "List of Medicines for Maintenance"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "No."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Medicine Name"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Dosage"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: "Quantity"
                                            })
                                        })
                                    ]
                                }),
                                maintenanceInfo.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: index + 1
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.medicine)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.dosage)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-1 shadow-sm w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.quantity)
                                                })
                                            })
                                        ]
                                    }, index))
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 shadow-sm w-full text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold uppercase text-lg text-white",
                                    children: "Inventory and Monitoring"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-bold",
                                        children: "Senior ID Inventory"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-bold",
                                        children: "Date of Release"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-bold",
                                        children: "Municipality"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-bold",
                                        children: "Released by"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-1 shadow-sm w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-bold",
                                        children: "Remarks"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: transaction && transaction.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.name)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.release_date)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.office_released)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.released_by)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-1 shadow-sm w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold",
                                                children: (0,_services_helperService__WEBPACK_IMPORTED_MODULE_4__/* .upper */ .A2)(item.remarks)
                                            })
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative flex w-11/12 bg-white outline-none focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-5 shadow-sm w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        setShowInformationModal(false);
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
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "opacity-50 fixed inset-0 z-40 bg-black"
            })
        ]
    });
}


/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VaccinationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);




function VaccinationModal({ children , form , showVaccinationModal , setShowVaccinationModal , selectedItemForVaccine , onVaccineFinish , dosageLevel , reloadPage , CameraModal , userCamera , ModalLoading , saving , setSaving , showCameraModal , setShowCameraModal , SuccessAlert , fileURL , vaccineDate , setUploadData , disabledDate  }) {
    const [showCardUploadButton, setShowCardUploadButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showCardSuccess, setShowCardSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onUpload = async (info)=>{
        let filename = info.file.name;
        if (info.file.status !== "uploading") {
            let src = await new Promise((resolve)=>{
                const reader = new FileReader();
                reader.readAsDataURL(info.file.originFileObj);
                reader.onload = ()=>resolve(reader.result);
            });
            setUploadData(src);
            setSuccessMessage("Vaccine card was uploaded and prepared for saving.");
            setShowCardUploadButton(false);
            setShowCardSuccess(true);
        }
        if (info.file.status === "done") {
            antd__WEBPACK_IMPORTED_MODULE_2__.message.success(`${filename} vaccine card uploaded successfully`);
        } else if (info.file.status === "error") {
            setUploadData(null);
            antd__WEBPACK_IMPORTED_MODULE_2__.message.error(`${filename} vaccine card upload failed.`);
        }
    };
    const uploadProps = {
        name: "card",
        accept: ".png, .jpeg, .jpg, .gif",
        action: fileURL,
        headers: {
            authorization: "authorization-text"
        },
        onRemove (info) {
            setUploadData(null);
        },
        onChange: onUpload
    };
    const selectMethod = (val)=>{
        if (val == "picture") {
            setShowCameraModal(true);
        } else if (val == "upload") {
            setShowCardUploadButton(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            saving && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalLoading, {
                message: "Saving, please wait ...",
                pcolor: "bg-green-500"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-auto my-6 mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start justify-between pl-5 pt-2 border-b border-solid border-slate-200 rounded-t",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-lg font-semibold",
                                        children: "VACCINATION INFORMATION"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: ()=>setShowVaccinationModal(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative p-3 flex-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CameraModal, {
                                        setUploadData: setUploadData,
                                        setSuccessMessage: setSuccessMessage,
                                        setShowCardSuccess: setShowCardSuccess,
                                        setShowCameraModal: setShowCameraModal,
                                        showCameraModal: showCameraModal,
                                        selectedItemForCamera: selectedItemForVaccine,
                                        setSaving: setSaving,
                                        saving: saving,
                                        userCamera: userCamera,
                                        mtitle: "Please take a picture of your card below:",
                                        page: "vaccine"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                        layout: "vertical",
                                        form: form,
                                        onFinish: onVaccineFinish,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-wrap w-90 justify-left items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                    name: "formatted_vdate",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                        type: "hidden",
                                                        id: "formatted_vdate",
                                                        value: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "Stage/Dose:",
                                                        name: "dose",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Stage/Dose is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                                            placeholder: "Select dosage level here ...",
                                                            style: {
                                                                width: "350px"
                                                            },
                                                            size: "large",
                                                            children: [
                                                                " ",
                                                                dosageLevel && dosageLevel.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                                                                        value: item.level,
                                                                        children: item.level
                                                                    }, index))
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "Name of Vaccine:",
                                                        name: "vaccine",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Name of Vaccine is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                            style: {
                                                                width: "350px"
                                                            },
                                                            size: "large",
                                                            placeholder: "Name of Vaccine here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "Date of Vaccination:",
                                                        name: "vaccination_date",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "Date of Vaccination is required."
                                                            }
                                                        ],
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
                                                            format: "MM-DD-YYYY",
                                                            style: {
                                                                width: "350px"
                                                            },
                                                            disabledDate: disabledDate,
                                                            onChange: vaccineDate,
                                                            size: "large",
                                                            placeholder: "Pick a date here ..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full px-5 py-0",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                        label: "Vaccination Card:",
                                                        name: "method",
                                                        rules: [
                                                            {
                                                                required: false
                                                            }
                                                        ],
                                                        children: [
                                                            !showCardUploadButton && !showCardSuccess && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                                                onChange: selectMethod,
                                                                placeholder: "Select method here ...",
                                                                style: {
                                                                    width: "350px"
                                                                },
                                                                size: "large",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                                                                        value: "upload",
                                                                        children: "Upload a card"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                                                                        value: "picture",
                                                                        children: "Take a picture"
                                                                    })
                                                                ]
                                                            }),
                                                            showCardUploadButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Upload, {
                                                                ...uploadProps,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                    size: "large",
                                                                    style: {
                                                                        width: "350px"
                                                                    },
                                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UploadOutlined, {}),
                                                                    children: "Click To Upload a Vaccine Card"
                                                                })
                                                            }),
                                                            showCardSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessAlert, {
                                                                title: `${successMessage}`
                                                            })
                                                        ]
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
                                                                        setShowVaccinationModal(false);
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
    });
}


/***/ }),

/***/ 2053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Member),
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
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5120);
/* harmony import */ var _components_admin_BarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _components_alerts_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6942);
/* harmony import */ var _components_modal_VaccinationModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5661);
/* harmony import */ var _components_modal_InformationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(347);
/* harmony import */ var _components_admin_ModalForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3621);
/* harmony import */ var _components_admin_DeleteModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6878);
/* harmony import */ var _components_admin_PrintModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4978);
/* harmony import */ var _components_admin_SignatureModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9730);
/* harmony import */ var _components_admin_CameraModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5885);
/* harmony import */ var _components_forms_RegistrationForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8439);
/* harmony import */ var _components_admin_StatisticsCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1455);
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5154);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7391);
/* harmony import */ var _components_admin_DataTable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2976);
/* harmony import */ var _components_ModalLoading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(747);
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9396);
/* harmony import */ var _services_memberService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8581);
/* harmony import */ var _services_helperService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9850);
/* harmony import */ var _services_configService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7529);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__, _components_admin_BarChart__WEBPACK_IMPORTED_MODULE_7__, _components_admin_PrintModal__WEBPACK_IMPORTED_MODULE_13__, _services_analyticsService__WEBPACK_IMPORTED_MODULE_18__, _services_authService__WEBPACK_IMPORTED_MODULE_19__, _components_admin_DataTable__WEBPACK_IMPORTED_MODULE_20__, _services_dataService__WEBPACK_IMPORTED_MODULE_22__, _services_memberService__WEBPACK_IMPORTED_MODULE_23__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__, _components_admin_BarChart__WEBPACK_IMPORTED_MODULE_7__, _components_admin_PrintModal__WEBPACK_IMPORTED_MODULE_13__, _services_analyticsService__WEBPACK_IMPORTED_MODULE_18__, _services_authService__WEBPACK_IMPORTED_MODULE_19__, _components_admin_DataTable__WEBPACK_IMPORTED_MODULE_20__, _services_dataService__WEBPACK_IMPORTED_MODULE_22__, _services_memberService__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const baseURL = `${"https://rpcbulacan.com"}`;
async function getServerSideProps({ req , query  }) {
    const cookieData = cookie__WEBPACK_IMPORTED_MODULE_4__.parse(req.headers.cookie || "");
    const dtFormat = (0,_services_configService__WEBPACK_IMPORTED_MODULE_26__/* .dateFormat */ .v)();
    const fileURL = (0,_services_configService__WEBPACK_IMPORTED_MODULE_26__/* .uploadURL */ .D)();
    const { municipality  } = query;
    let det = [];
    let munQuery = "";
    if (municipality !== undefined) {
        const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getMembers */ .Zw)("municipality", municipality, "", "str", cookieData.token);
        det = data;
        munQuery = municipality;
    } else {
        const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getMembers */ .Zw)("all", "", "", "", cookieData.token);
        det = data;
    }
    return {
        props: {
            dtFormat,
            fileURL,
            info: cookieData,
            details: det,
            munQuery
        }
    };
}
function Member({ dtFormat , fileURL , info , details , munQuery  }) {
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("user_role"));
    const [breadcrumb, setBreadcrumb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [memberStatus, setMemberStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [municipalities, setMunicipalities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [municipality, setMunicipality] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [barangay, setBarangay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [illnessDefaultValues, setIllnessDefaultValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedBarangay, setSelectedBarangay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [disableExport, setDisableExport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [deleting, setDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formLoading, setFormLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [form] = antd__WEBPACK_IMPORTED_MODULE_25__.Form.useForm();
    const [prov, setProv] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("BULACAN");
    const [districtNumber, setDistrictNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [addr, setAddr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [brgy, setBrgy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [sick, setSick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [memberType, setMemberType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formattedBday, setFormattedBday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [civilStatus, setCivilStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [bloodType, setBloodType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [religion, setReligion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [educations, setEducations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [employmentStatus, setEmploymentStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [classification, setClassification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [illnesses, setIllnesses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [idNumber, setIdNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("add");
    const [isDashboard, setIsDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMember, setIsMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [isUser, setIsUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isReport, setIsReport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [chosenBarangay, setChosenBarangay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedItemForEdit, setSelectedItemForEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedItemForDelete, setSelectedItemForDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showPrintModal, setShowPrintModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showSignatureModal, setShowSignatureModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formInitValues, setFormInitValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [selectedItemForSignature, setSelectedItemForSignature] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showCameraModal, setShowCameraModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedItemForCamera, setSelectedItemForCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedItemForPrint, setSelectedItemForPrint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isEncoder, setIsEncoder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dosageLevel, setDosageLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showVaccinationModal, setShowVaccinationModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showCardSuccess, setShowCardSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showInformationModal, setShowInformationModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedItemForVaccine, setSelectedItemForVaccine] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [uploadData, setUploadData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [regUploadData, setRegUploadData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [memberInfo, setMemberInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [photo, setPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [transaction, setTransaction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [offspring, setOffspring] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [medicines, setMedicines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showChildrenModal, setShowChildrenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showMedicineModal, setShowMedicineModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [companions, setCompanions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [housings, setHousings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [educationArea, setEducationArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [communityService, setCommunityService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [involvements, setInvolvements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [incomeSources, setIncomeSources] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [monthlyIncome, setMonthlyIncome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [socialProblems, setSocialProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [economicProblems, setEconomicProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [healthIssues, setHealthIssues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [houseNo, setHouseNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [street, setStreet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const componentRefBack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
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
    const [childrenInfo, setChildrenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [maintenanceInfo, setMaintenanceInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handlePrinter = (0,react_to_print__WEBPACK_IMPORTED_MODULE_5__.useReactToPrint)({
        content: ()=>componentRef.current,
        onAfterPrint: ()=>{
            saveTransactionInfo();
            handlePrinterBack();
        }
    });
    const handlePrinterBack = (0,react_to_print__WEBPACK_IMPORTED_MODULE_5__.useReactToPrint)({
        content: ()=>componentRefBack.current,
        onAfterPrint: ()=>{
            setShowPrintModal(false);
            router.reload(window.location.pathname);
        }
    });
    const handlePrint = (val)=>{
        setSelectedItemForPrint(val);
        setShowPrintModal(true);
    };
    const saveTransactionInfo = async ()=>{
        const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .saveMemberTransaction */ .lV)({
            id: selectedItemForPrint
        });
    };
    const handleVaccination = (val)=>{
        setSelectedItemForVaccine(val);
        setShowVaccinationModal(true);
    };
    const getInformation = async (id)=>{
        setLoading(true);
        try {
            const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getMember */ .L)({
                id,
                type: "info"
            });
            if (data.user_status == "success") {
                setMemberInfo(data.user);
                setTransaction(data.transactions);
                setChildrenInfo(data.children);
                setMaintenanceInfo(data.maintenances);
                if (data.photo) {
                    setPhoto(data.photo);
                }
            }
            setLoading(false);
            setShowInformationModal(true);
        } catch (error) {
            setLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong");
        }
    };
    const onVaccineFinish = async (values)=>{
        setShowVaccinationModal(false);
        setSaving(true);
        try {
            values.id = selectedItemForVaccine;
            values.data = uploadData;
            const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .saveVaccinationInfo */ .dp)(values);
            setSaving(false);
            reloadPage();
        } catch (error) {
            setSaving(false);
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong.");
        }
    };
    const closePrint = ()=>{
        setShowPrintModal(false);
        router.reload(window.location.pathname);
    };
    const handleCamera = (val)=>{
        setSelectedItemForCamera(val);
        setShowCameraModal(true);
    };
    const handleSignature = (val)=>{
        setSelectedItemForSignature(val);
        setShowSignatureModal(true);
    };
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
            antd__WEBPACK_IMPORTED_MODULE_25__.message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            setRegUploadData(null);
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error(`${info.file.name} file upload failed.`);
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
    const getMemberID = (val)=>{
        setSelectedItemForDelete(val);
        setPage("delete");
        setShowDeleteModal(true);
    };
    const deleteRecord = async ()=>{
        setShowDeleteModal(false);
        setDeleting(true);
        const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .deleteMember */ .EP)(selectedItemForDelete);
        if (data.delete_status == "success") {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.success("Member deleted successfully.");
            router.reload(window.location.pathname);
        } else {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Failed to delete this member.");
        }
        setDeleting(false);
    };
    const handleIllness = (values)=>{
        let str = "";
        if (values.length > 0) {
            str = values.map((sktype)=>{
                return sktype.value;
            }).join(",");
        }
        setSick(str);
        form.setFieldsValue({
            selected_illness: str
        });
    };
    const handleClassification = (values)=>{
        let str = "";
        if (values.length > 0) {
            str = values.map((ctype)=>{
                return ctype.value;
            }).join(",");
        }
        setMemberType(str);
        form.setFieldsValue({
            member_type: str
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
    const getAddress = (value, value2)=>{
        let brn = value2.children;
        setBrgy(brn);
        form.setFieldsValue({
            barangay_name: brn
        });
        setFullAddress(brn, "", "");
    };
    const getFullAddress = (e)=>{
        setHouseNo(e.target.value);
        setFullAddress("", e.target.value, street);
    };
    const getStreet = (e)=>{
        setStreet(e.target.value);
        setFullAddress("", houseNo, e.target.value);
    };
    const setFullAddress = (brn, hn, st)=>{
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
        form.setFieldsValue({
            address: addrs
        });
    };
    const vaccineDate = (date, dateString)=>{
        let fdate = (0,_services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .formatDate */ .p6)(date, "YYYY-MM-DD");
        form.setFieldsValue({
            formatted_vdate: fdate
        });
    };
    const birthChanged = (date, dateString)=>{
        if ((0,_services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .IsUnderAge */ .u9)(date)) {
            (0,_services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .showNotification */ .c0)("error", "Date of Birth Error", "Please check the birthdate entered.", "You are not qualified for Senior Citizen membership");
            setFormattedBday(null);
            form.setFieldsValue({
                birth_date: null,
                formatted_bday: null
            });
        } else {
            let fdate = (0,_services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .formatDate */ .p6)(date, "YYYY-MM-DD");
            setFormattedBday(fdate);
            form.setFieldsValue({
                formatted_bday: fdate
            });
        }
    };
    const reloadPage = ()=>{
        router.reload(window.location.pathname);
    };
    const onFinishFailed = (errorInfo)=>{
        (0,_services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .showNotification */ .c0)("error", "Invalid Inputs", "There are some invalid inputs.", "Please check and provide a valid one.");
    };
    const onFinish = async (values)=>{
        setSaving(true);
        values.offspring = offspring;
        values.medicines = medicines;
        if (selectedItemForEdit) {
            values.id = selectedItemForEdit;
            values.formatted_bday = (0,_services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .formatDate */ .p6)(values.formatted_bday, "YYYY-MM-DD");
            const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .updateMember */ .hS)(values);
            setSaving(false);
            antd__WEBPACK_IMPORTED_MODULE_25__.message.success("Member updated successfully.");
            router.reload(window.location.pathname);
        } else {
            if (idNumber == "limit") {
                setSaving(false);
                antd__WEBPACK_IMPORTED_MODULE_25__.message.error("User limit exceeded.");
            } else {
                const { stat  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_22__/* .seniorIdExist */ .rr)(idNumber);
                if (stat == "available") {
                    setSaving(false);
                    antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Name is existing already. Please try again.");
                } else {
                    values.data = regUploadData;
                    save(values);
                    setSaving(false);
                }
            }
        }
    };
    const save = async (values)=>{
        const { reg_status  } = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_19__/* .register */ .z2)(values);
        values.identification = "";
        setShowModal(false);
        if (reg_status == "success") {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.success("Member added successfully.");
            router.reload(window.location.pathname);
        } else if (reg_status == "duplicate") {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("This member already exist in our database.");
        } else {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Failed to add this member.");
        }
    };
    const getAllBarangay = async (value, value2)=>{
        setChosenBarangay([]);
        setBrgy("");
        form.setFieldsValue({
            barangay_name: ""
        });
        try {
            setFormLoading(true);
            setMunicipality(value);
            setAddr(value2.children);
            form.setFieldsValue({
                municipality_name: value2.children
            });
            const { barangays , district_no  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_22__/* .getBarangays */ .EZ)(value);
            setDistrictNumber(district_no);
            form.setFieldsValue({
                district_no: district_no
            });
            getIdNumber(value, district_no);
            setChosenBarangay(barangays);
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong.");
        }
    };
    const getIdNumber = async (mun, dist)=>{
        try {
            const { senior_id  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_22__/* .getGeneratedId */ .R2)(mun, dist);
            setIdNumber(senior_id);
            form.setFieldsValue({
                id_number: senior_id
            });
        } catch (error) {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong.");
        }
    };
    const getBarangay = async (value, value2)=>{
        try {
            const { barangays  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_22__/* .getBarangays */ .EZ)(value);
            setBarangay(barangays);
            setMunicipality(value);
            let mtype = "municipality";
            if (value === "all") {
                mtype = value;
                setBarangay([]);
            }
            getData(mtype, value, "", "");
        } catch (error) {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong.");
        }
    };
    const getPerBarangay = async (value, value2)=>{
        try {
            setSelectedBarangay(value);
            getData("barangay", municipality, value, "");
        } catch (error) {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong.");
        }
    };
    const getData = async (mtype, mun, bar, stype)=>{
        setLoading(true);
        const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getMembers */ .Zw)(mtype, mun, bar, stype, info.token);
        if (data.member_status == "success") {
            let members_array = data.members;
            setMunicipalities(data.selectedMunicipalities);
            setMemberData(members_array);
            if (members_array.length === 0) {
                setDisableExport(true);
            } else {
                setDisableExport(false);
            }
        }
        setLoading(false);
    };
    const getAllData = async ()=>{
        try {
            setFormLoading(true);
            const { status , genders , civil_statuses , blood_types , religions , education , employment_statuses , classifications , member_statuses , illness , comps , houses , com_services , educ_area , involvementsList , income_sources , assetsList , socialProblemList , economicProblemList , healthIssueList , incomeRange  } = await (0,_services_dataService__WEBPACK_IMPORTED_MODULE_22__/* .getDetails */ .s_)();
            if (status == "success") {
                setGender(genders);
                setCivilStatus(civil_statuses);
                setMemberStatus(member_statuses);
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
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong");
        }
    };
    const handleExport = async ()=>{
        setLoading(true);
        let mtype = "";
        if (municipality && selectedBarangay) {
            mtype = "barangay";
        } else if (municipality && !selectedBarangay) {
            mtype = "municipality";
        }
        const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getExport */ .PQ)({
            mtype,
            mun: municipality,
            bar: selectedBarangay,
            munQuery
        });
        window.open(`${baseURL}/downloadFile/${data}`, "_blank");
        setLoading(false);
    };
    const showFormModal = ()=>{
        setShowModal(true);
    };
    const getDosage = async ()=>{
        try {
            const { data  } = await (0,_services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getDosageLevel */ .$o)();
            if (data.level_status == "success") {
                setDosageLevel(data.level);
            }
        } catch (error) {
            antd__WEBPACK_IMPORTED_MODULE_25__.message.error("Something went wrong");
        }
    };
    const setData = ()=>{
        if (details.member_status == "success") {
            let members_array = details.members;
            setMunicipalities(details.selectedMunicipalities);
            setMemberData(members_array);
            if (members_array.length === 0) {
                setDisableExport(true);
            } else {
                setDisableExport(false);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const roleLabel = `Level: ${info.user_role} |`;
        setBreadcrumb([
            roleLabel,
            "Dashboard",
            ">>",
            "Members"
        ]);
        if (info.user_role == "encoder") {
            setIsEncoder(true);
        }
        setData();
        getAllData();
        getDosage();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        role: role,
        isDashboard: isDashboard,
        isMember: isMember,
        isUser: isUser,
        isReport: isReport,
        title: "Administration Panel - Members",
        trail: breadcrumb,
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                message: "Loading, please wait ...",
                pcolor: "bg-yellow-500"
            }),
            deleting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalLoading__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                message: "Deleting, please wait ...",
                pcolor: "bg-orange-500"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_ModalForm__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                mtitle: "Registration",
                showModal: showModal,
                setShowModal: setShowModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_RegistrationForm__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    form: form,
                    onFinish: onFinish,
                    onFinishFailed: onFinishFailed,
                    prov: prov,
                    setProv: setProv,
                    districtNumber: districtNumber,
                    addr: addr,
                    brgy: brgy,
                    memberType: memberType,
                    setMemberType: setMemberType,
                    idNumber: idNumber,
                    setAddr: setAddr,
                    sick: sick,
                    setSick: setSick,
                    getAllBarangay: getAllBarangay,
                    setMunicipality: setMunicipality,
                    formattedBday: formattedBday,
                    setFormattedBday: setFormattedBday,
                    municipalities: municipalities,
                    getAddress: getAddress,
                    chosenBarangay: chosenBarangay,
                    setChosenBarangay: setChosenBarangay,
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
                    illnesses: illnesses,
                    companions: companions,
                    housings: housings,
                    educationArea: educationArea,
                    communityService: communityService,
                    involvements: involvements,
                    incomeSources: incomeSources,
                    assets: assets,
                    monthlyIncome: monthlyIncome,
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
                    formLoading: formLoading,
                    setFormLoading: setFormLoading,
                    saving: saving,
                    setShowModal: setShowModal,
                    showModal: showModal,
                    memberStatus: memberStatus,
                    selectedItemForEdit: selectedItemForEdit,
                    setSelectedItemForEdit: setSelectedItemForEdit,
                    getMember: _services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .getMember */ .L,
                    reloadPage: reloadPage,
                    setIllnessDefaultValues: setIllnessDefaultValues,
                    illnessDefaultValues: illnessDefaultValues,
                    formInitValues: formInitValues,
                    setFormInitValues: setFormInitValues,
                    page: page,
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_DeleteModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                setShowDeleteModal: setShowDeleteModal,
                showDeleteModal: showDeleteModal,
                selectedItemForDelete: selectedItemForDelete,
                mtitle: "Delete Confirmation",
                deleteRecord: deleteRecord,
                deleting: deleting,
                page: "member"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_PrintModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                setShowPrintModal: setShowPrintModal,
                showPrintModal: showPrintModal,
                selectedItemForPrint: selectedItemForPrint,
                closePrint: closePrint,
                handlePrinter: handlePrinter,
                componentRefBack: componentRefBack,
                componentRef: componentRef,
                mtitle: "Print Confirmation"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_SignatureModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                setShowSignatureModal: setShowSignatureModal,
                showSignatureModal: showSignatureModal,
                selectedItemForSignature: selectedItemForSignature,
                setSaving: setSaving,
                saving: saving,
                userSignature: _services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .userSignature */ .yx,
                mtitle: "Please sign inside the box below:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CameraModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                setShowCardSuccess: setShowCardSuccess,
                setShowCameraModal: setShowCameraModal,
                showCameraModal: showCameraModal,
                selectedItemForCamera: selectedItemForCamera,
                setSaving: setSaving,
                saving: saving,
                userCamera: _services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .userCamera */ ["do"],
                mtitle: "Please take a photo below:",
                page: "members"
            }),
            showVaccinationModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_VaccinationModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                form: form,
                SuccessAlert: _components_alerts_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                showVaccinationModal: showVaccinationModal,
                setShowVaccinationModal: setShowVaccinationModal,
                selectedItemForVaccine: selectedItemForVaccine,
                onVaccineFinish: onVaccineFinish,
                reloadPage: reloadPage,
                dosageLevel: dosageLevel,
                CameraModal: _components_admin_CameraModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                userCamera: _services_memberService__WEBPACK_IMPORTED_MODULE_23__/* .vaccineIdCamera */ .Hg,
                ModalLoading: _components_ModalLoading__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
                saving: saving,
                setSaving: setSaving,
                showCameraModal: showCameraModal,
                setShowCameraModal: setShowCameraModal,
                fileURL: fileURL,
                vaccineDate: vaccineDate,
                setUploadData: setUploadData,
                disabledDate: _services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .disabledDate */ .Q8
            }),
            showInformationModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_InformationModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                setShowInformationModal: setShowInformationModal,
                childrenInfo: childrenInfo,
                maintenanceInfo: maintenanceInfo,
                memberInfo: memberInfo,
                photo: photo,
                transaction: transaction,
                reloadPage: reloadPage
            }),
            !showInformationModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_DataTable__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                role: role,
                isEncoder: isEncoder,
                handleVaccination: handleVaccination,
                disableExport: disableExport,
                municipalities: municipalities,
                barangay: barangay,
                memberData: memberData,
                title: "List of Senior Citizen Members",
                getBarangay: getBarangay,
                getPerBarangay: getPerBarangay,
                handleExport: handleExport,
                showFormModal: showFormModal,
                reloadPage: reloadPage,
                setSelectedItemForEdit: setSelectedItemForEdit,
                setSelectedItemForDelete: setSelectedItemForDelete,
                setShowDeleteModal: setShowDeleteModal,
                setShowModal: setShowModal,
                setPage: setPage,
                getMemberID: getMemberID,
                handlePrint: handlePrint,
                handleSignature: handleSignature,
                handleCamera: handleCamera,
                getInformation: getInformation,
                computeAge: _services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .computeAge */ .qN,
                formatDate: _services_helperService__WEBPACK_IMPORTED_MODULE_24__/* .formatDate */ .p6,
                adminPage: "members"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hd": () => (/* binding */ registerAdmin),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "z2": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseURL = `${"https://rpcbulacan.com"}/api`;
const login = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/login`, user);
        return data;
    } catch (error) {
        return error.response;
    }
};
const register = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/register`, user);
        return data;
    } catch (error) {
        return error.response;
    }
};
const registerAdmin = async (user)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${baseURL}/register/admin`, user);
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

/***/ 1848:
/***/ ((module) => {

module.exports = require("react-highlight-words");

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
var __webpack_exports__ = __webpack_require__.X(0, [747,9850,9086,5120,8581,9652,5360,8933], () => (__webpack_exec__(2053)));
module.exports = __webpack_exports__;

})();