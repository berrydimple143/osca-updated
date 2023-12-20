"use strict";
exports.id = 5360;
exports.ids = [5360];
exports.modules = {

/***/ 2976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1848);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_admin_GroupButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6226);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_admin_GroupButton__WEBPACK_IMPORTED_MODULE_5__]);
_components_admin_GroupButton__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DataTable = ({ handleActivation , municipalities , title , getBarangay , getPerBarangay , barangay , memberData , handleExport , disableExport , showFormModal , reloadPage , setSelectedItemForEdit , getPasswordId , setSelectedItemForDelete , setShowDeleteModal , setShowModal , setPage , getMemberID , handlePrint , handleSignature , handleCamera , handleVaccination , adminPage , role , isEncoder , getInformation , computeAge , formatDate  })=>{
    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [searchedColumn, setSearchedColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const searchInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSearch = (selectedKeys, confirm, dataIndex)=>{
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters)=>{
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex)=>({
            filterDropdown: ({ setSelectedKeys , selectedKeys , confirm , clearFilters , close  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        padding: 8
                    },
                    onKeyDown: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                            ref: searchInput,
                            placeholder: `Search ${dataIndex.replace("_", " ")}`,
                            value: selectedKeys[0],
                            onChange: (e)=>setSelectedKeys(e.target.value ? [
                                    e.target.value
                                ] : []),
                            onPressEnter: ()=>handleSearch(selectedKeys, confirm, dataIndex),
                            style: {
                                marginBottom: 8,
                                display: "block"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    type: "primary",
                                    onClick: ()=>handleSearch(selectedKeys, confirm, dataIndex),
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutlined, {}),
                                    size: "small",
                                    style: {
                                        width: 90
                                    },
                                    children: "Search"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    onClick: ()=>clearFilters && handleReset(clearFilters),
                                    size: "small",
                                    style: {
                                        width: 90
                                    },
                                    children: "Reset"
                                })
                            ]
                        })
                    ]
                }),
            filterIcon: (filtered)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutlined, {
                    style: {
                        color: filtered ? "#1890ff" : undefined
                    }
                }),
            onFilter: (value, record)=>record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownOpenChange: (visible)=>{
                if (visible) {
                    setTimeout(()=>searchInput.current?.select(), 100);
                }
            },
            render: (text)=>searchedColumn === dataIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_highlight_words__WEBPACK_IMPORTED_MODULE_4___default()), {
                    highlightStyle: {
                        backgroundColor: "#ffc069",
                        padding: 0
                    },
                    searchWords: [
                        searchText
                    ],
                    autoEscape: true,
                    textToHighlight: text ? text.toString() : ""
                }) : text
        });
    const setAllComponents = ()=>{
        let col = [];
        if (adminPage == "members") {
            col = [
                {
                    title: "ID Number",
                    dataIndex: "id_number",
                    key: "id_number",
                    width: 120,
                    responsive: [
                        "md"
                    ],
                    fixed: "left",
                    ...getColumnSearchProps("id_number"),
                    sorter: (a, b)=>a.id_number.localeCompare(b.id_number),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 8,
                    render: (text, record, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: ()=>getInformation(text),
                            children: text
                        })
                },
                {
                    title: "Last Name",
                    dataIndex: "last_name",
                    width: 100,
                    className: "text-sm",
                    responsive: [
                        "md"
                    ],
                    fixed: "left",
                    key: "last_name",
                    ...getColumnSearchProps("last_name"),
                    sorter: (a, b)=>a.last_name.localeCompare(b.last_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 7
                },
                {
                    title: "First Name",
                    dataIndex: "first_name",
                    responsive: [
                        "md"
                    ],
                    fixed: "left",
                    width: 100,
                    key: "first_name",
                    ...getColumnSearchProps("first_name"),
                    sorter: (a, b)=>a.first_name.localeCompare(b.first_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 6
                },
                {
                    title: "Date of Birth",
                    dataIndex: "birth_date",
                    width: 100,
                    responsive: [
                        "md"
                    ],
                    key: "birth_date",
                    align: "center",
                    ...getColumnSearchProps("birth_date"),
                    sorter: (a, b)=>a.birth_date.localeCompare(b.birth_date),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 5,
                    render: (text, record, index)=>{
                        let bday = formatDate(text, "MMMM DD, YYYY");
                        return bday;
                    }
                },
                {
                    title: "Age",
                    dataIndex: "birth_date",
                    dataIndex: [
                        "birth_date",
                        "age"
                    ],
                    width: 60,
                    responsive: [
                        "md"
                    ],
                    key: "birth_date",
                    align: "center",
                    ...getColumnSearchProps("age"),
                    sorter: (a, b)=>a.birth_date.localeCompare(b.birth_date),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 4,
                    render: (text, row)=>{
                        let age = computeAge(row.birth_date);
                        return age;
                    }
                },
                {
                    title: "Province",
                    dataIndex: "province_name",
                    width: 70,
                    key: "province_name",
                    responsive: [
                        "md"
                    ],
                    ...getColumnSearchProps("province_name"),
                    sorter: (a, b)=>a.province_name.localeCompare(b.province_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 3
                },
                {
                    title: "Municipality",
                    dataIndex: "municipality_name",
                    width: 100,
                    key: "municipality_name",
                    responsive: [
                        "md"
                    ],
                    ...getColumnSearchProps("municipality_name"),
                    sorter: (a, b)=>a.municipality_name.localeCompare(b.municipality_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 2
                },
                {
                    title: "Barangay",
                    dataIndex: "barangay_name",
                    width: 100,
                    key: "barangay_name",
                    responsive: [
                        "md"
                    ],
                    ...getColumnSearchProps("barangay_name"),
                    sorter: (a, b)=>a.barangay_name.localeCompare(b.barangay_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ],
                    multiple: 1
                }
            ];
            if (role == "admin") {
                col.push({
                    title: "Action",
                    dataIndex: "id",
                    align: "center",
                    key: "operation",
                    fixed: "right",
                    width: 150,
                    render: (text, record, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_GroupButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            handleVaccination: handleVaccination,
                            memberPage: true,
                            setShowDeleteModal: setShowDeleteModal,
                            handleCamera: handleCamera,
                            handleSignature: handleSignature,
                            handlePrint: handlePrint,
                            getMemberID: getMemberID,
                            setSelectedItemForDelete: setSelectedItemForDelete,
                            setSelectedItemForEdit: setSelectedItemForEdit,
                            setShowModal: setShowModal,
                            setPage: setPage,
                            text: `${text}`,
                            record: `${record}`,
                            index: `${index}`
                        })
                });
            }
        } else if (adminPage == "users") {
            col = [
                {
                    title: "#",
                    dataIndex: "id_number",
                    key: "index",
                    responsive: [
                        "sm"
                    ],
                    width: 10,
                    fixed: "left",
                    render: (text, record, index)=>index + 1
                },
                {
                    title: "First Name",
                    dataIndex: "first_name",
                    fixed: "left",
                    responsive: [
                        "sm"
                    ],
                    width: 30,
                    key: "first_name",
                    ...getColumnSearchProps("first_name"),
                    sorter: (a, b)=>a.first_name.localeCompare(b.first_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ]
                },
                {
                    title: "Last Name",
                    dataIndex: "last_name",
                    responsive: [
                        "sm"
                    ],
                    width: 30,
                    className: "text-sm",
                    fixed: "left",
                    key: "last_name",
                    ...getColumnSearchProps("last_name"),
                    sorter: (a, b)=>a.last_name.localeCompare(b.last_name),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ]
                },
                {
                    title: "Email",
                    dataIndex: "email",
                    responsive: [
                        "sm"
                    ],
                    width: 30,
                    key: "email",
                    ...getColumnSearchProps("email"),
                    sorter: (a, b)=>a.email.localeCompare(b.email),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ]
                },
                {
                    title: "Role(s)",
                    dataIndex: "role",
                    responsive: [
                        "sm"
                    ],
                    width: 30,
                    key: "role",
                    ...getColumnSearchProps("role"),
                    sorter: (a, b)=>a.role.localeCompare(b.role),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ]
                },
                {
                    title: "Permission(s)",
                    dataIndex: "permission",
                    responsive: [
                        "sm"
                    ],
                    width: 30,
                    key: "permission",
                    ...getColumnSearchProps("permission"),
                    sorter: (a, b)=>a.permission.localeCompare(b.permission),
                    sortDirections: [
                        "descend",
                        "ascend"
                    ]
                },
                {
                    title: "Action",
                    dataIndex: [
                        "id",
                        "status",
                        "role"
                    ],
                    align: "center",
                    fixed: "right",
                    responsive: [
                        "sm"
                    ],
                    key: "operation",
                    width: 30,
                    render: (text, row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_GroupButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            handleActivation: handleActivation,
                            getPasswordId: getPasswordId,
                            userPage: true,
                            setShowDeleteModal: setShowDeleteModal,
                            handleCamera: handleCamera,
                            handleSignature: handleSignature,
                            handlePrint: handlePrint,
                            getMemberID: getMemberID,
                            setSelectedItemForDelete: setSelectedItemForDelete,
                            setSelectedItemForEdit: setSelectedItemForEdit,
                            setShowModal: setShowModal,
                            setPage: setPage,
                            role: `${row.role}`,
                            text: `${row.id}`,
                            status: `${row.status}`
                        })
                }
            ];
        }
        setColumns(col);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAllComponents();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                size: "middle",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl",
                        children: `${title}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ReloadOutlined, {
                            onClick: reloadPage,
                            className: "border p-2 text-lg bg-green-400 drop-shadow-lg rounded-full cursor-pointer"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {
                children: [
                    adminPage == "members" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                placeholder: "Select municipality here ...",
                                style: {
                                    width: "270px"
                                },
                                size: "medium",
                                onChange: getBarangay,
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                        value: "all",
                                        children: "ALL"
                                    }),
                                    municipalities && municipalities.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                            value: item.municipality_code_number,
                                            children: item.municipality_name
                                        }, index))
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                placeholder: "Select barangay here ...",
                                style: {
                                    width: "270px"
                                },
                                size: "medium",
                                onChange: getPerBarangay,
                                children: [
                                    " ",
                                    barangay && barangay.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                                            className: "uppercase",
                                            value: item.id,
                                            children: item.barangay_name
                                        }, index))
                                ]
                            }),
                            !isEncoder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                type: "primary",
                                disabled: disableExport,
                                onClick: handleExport,
                                className: "rounded-none",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.DownloadOutlined, {}),
                                size: "default",
                                children: "Export"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        type: "primary",
                        onClick: showFormModal,
                        className: "rounded-none",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusCircleOutlined, {}),
                        size: "default",
                        children: "Add"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Table, {
                    columns: columns,
                    dataSource: memberData,
                    bordered: true,
                    size: "small",
                    pagination: {
                        position: [
                            "bottomLeft"
                        ],
                        defaultCurrent: 1,
                        total: memberData.length
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DeleteModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function DeleteModal({ children , showDeleteModal , setShowDeleteModal , selectedItemForDelete , mtitle , deleteRecord , deleting , page  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showDeleteModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                            children: mtitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                            onClick: ()=>setShowDeleteModal(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                                children: "\xd7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative p-6 flex-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "my-4 text-slate-500 text-lg leading-relaxed",
                                        children: [
                                            "Are you sure you want to delete this ",
                                            `${page}`,
                                            "?"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "button",
                                            onClick: deleteRecord,
                                            children: "Yes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-yellow-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "button",
                                            onClick: ()=>setShowDeleteModal(false),
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

/***/ 6226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const user_id = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user_id");

const GroupButton = ({ handleActivation , text , setSelectedItemForEdit , getPasswordId , setSelectedItemForDelete , setShowDeleteModal , setShowModal , status , role , setPage , getMemberID , handlePrint , handleSignature , handleCamera , userPage , handleVaccination , memberPage  })=>{
    const [showActivateBtn, setShowActivateBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (role == "admin") {
            if (text == user_id) {
                setShowActivateBtn(false);
            }
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "inline-flex rounded-none shadow-md",
        role: "group",
        children: [
            memberPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Print ID",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handlePrint(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PrinterOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Signature",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSignature(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ThunderboltOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Take a photo",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleCamera(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CameraOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Edit",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                setSelectedItemForEdit(text);
                                setPage("edit");
                                setShowModal(true);
                            },
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.EditOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Add vaccination information",
                        placement: "topRight",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleVaccination(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MedicineBoxOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Delete",
                        placement: "topRight",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>getMemberID(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DeleteOutlined, {})
                        })
                    })
                ]
            }),
            userPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    showActivateBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: `${status === "1" ? "De-activate" : "Activate"}`,
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleActivation(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {})
                        })
                    }),
                    !showActivateBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Disabled",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: true,
                            onClick: ()=>handleActivation(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Change Password",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>getPasswordId(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.KeyOutlined, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Edit",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                setSelectedItemForEdit(text);
                                setPage("edit");
                                setShowModal(true);
                            },
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.EditOutlined, {})
                        })
                    }),
                    showActivateBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Delete",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>getMemberID(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DeleteOutlined, {})
                        })
                    }),
                    !showActivateBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        title: "Disabled",
                        placement: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: true,
                            onClick: ()=>getMemberID(text),
                            type: "button",
                            className: "py-1 px-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DeleteOutlined, {})
                        })
                    })
                ]
            })
        ]
    }, `${text}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;