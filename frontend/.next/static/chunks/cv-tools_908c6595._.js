(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/cv-tools/components/primitives.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "subtitle": (()=>subtitle),
    "title": (()=>title)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript)");
;
const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "tracking-tight inline font-semibold",
    variants: {
        color: {
            violet: "from-[#FF1CF7] to-[#b249f8]",
            yellow: "from-[#FF705B] to-[#FFB457]",
            blue: "from-[#5EA2EF] to-[#0072F5]",
            cyan: "from-[#00b7fa] to-[#01cfea]",
            green: "from-[#6FEE8D] to-[#17c964]",
            pink: "from-[#FF72E1] to-[#F54C7A]",
            foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]"
        },
        size: {
            sm: "text-3xl lg:text-4xl",
            md: "text-[2.3rem] lg:text-5xl leading-9",
            lg: "text-4xl lg:text-6xl"
        },
        fullWidth: {
            true: "w-full block"
        }
    },
    defaultVariants: {
        size: "md"
    },
    compoundVariants: [
        {
            color: [
                "violet",
                "yellow",
                "blue",
                "cyan",
                "green",
                "pink",
                "foreground"
            ],
            class: "bg-clip-text text-transparent bg-gradient-to-b"
        }
    ]
});
const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
    variants: {
        fullWidth: {
            true: "!w-full"
        }
    },
    defaultVariants: {
        fullWidth: true
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/common-components/CommonDropzone/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
function CommonDropzone() {
    _s();
    const { getRootProps, getInputProps, open, acceptedFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });
    const files = acceptedFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: [
                file.path,
                " - ",
                file.size,
                " bytes"
            ]
        }, file.path, true, {
            fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...getRootProps({
                    className: 'dropzone'
                }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Drag & Drop some files here"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: open,
                        children: "Open File Dialog"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Files"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: files
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/common-components/CommonDropzone/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(CommonDropzone, "6ISqE8Xy+zGaXfPpEJfvJoIPMq0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = CommonDropzone;
const __TURBOPACK__default__export__ = CommonDropzone;
var _c;
__turbopack_context__.k.register(_c, "CommonDropzone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/input/dist/chunk-HJTJQZF3.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonDropzone$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/common-components/CommonDropzone/index.tsx [app-client] (ecmascript)");
;
;
;
function PersonalInformation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "personal-information__comp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                label: "Section Title",
                type: "text"
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonDropzone$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "First Name",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "Last Name",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    label: "Job Title",
                    type: "text"
                }, void 0, false, {
                    fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "Phone",
                        type: "number"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "Email",
                        type: "email"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "Country",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "City",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PersonalInformation;
const __TURBOPACK__default__export__ = PersonalInformation;
var _c;
__turbopack_context__.k.register(_c, "PersonalInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$switch$2f$dist$2f$chunk$2d$ECZ3LCTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/switch/dist/chunk-ECZ3LCTI.mjs [app-client] (ecmascript) <export switch_default as Switch>");
;
;
function CommonSwitcher({ labelText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-switcher__component",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrapper flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-base",
                    children: labelText
                }, void 0, false, {
                    fileName: "[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$switch$2f$dist$2f$chunk$2d$ECZ3LCTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__["Switch"], {
                    defaultSelected: true,
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = CommonSwitcher;
const __TURBOPACK__default__export__ = CommonSwitcher;
var _c;
__turbopack_context__.k.register(_c, "CommonSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/common-components/CommonToolTip/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$CSXHODZI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/tooltip/dist/chunk-CSXHODZI.mjs [app-client] (ecmascript) <export tooltip_default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as CircleHelp>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function isMobile() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return window.matchMedia('(pointer: coarse)').matches;
}
function CommonToolTip({ content }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = ()=>{
        if (isMobile()) setOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-tooltip__component h-auto active:border-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$CSXHODZI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__["Tooltip"], {
            content: content,
            isOpen: isMobile() ? open : undefined,
            radius: "sm",
            showArrow: true,
            shadow: "lg",
            className: " max-w-xs p-4 text-tiny text-center",
            onOpenChange: setOpen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"], {
                className: "w-[16px] cursor-pointer border-transparent",
                onClick: handleClick
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/common-components/CommonToolTip/index.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tools/app/common-components/CommonToolTip/index.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/app/common-components/CommonToolTip/index.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(CommonToolTip, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = CommonToolTip;
const __TURBOPACK__default__export__ = CommonToolTip;
var _c;
__turbopack_context__.k.register(_c, "CommonToolTip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/common-components/CommonTextArea/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/input/dist/chunk-ORPGD37S.mjs [app-client] (ecmascript) <export textarea_default as Textarea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonToolTip$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/common-components/CommonToolTip/index.tsx [app-client] (ecmascript)");
;
;
;
function CommonTextArea({ labelText }) {
    const label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: labelText
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonToolTip$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: "Craft 2–4 punchy sentences that capture attention! Highlight your role, experience, and most importantly — showcase your top achievements, standout qualities, and key skills."
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/common-components/CommonTextArea/index.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-textarea__component",
        children: [
            labelText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                disableAnimation: true,
                disableAutosize: true,
                classNames: {
                    base: 'w-full',
                    input: 'resize-y min-h-[100px]'
                },
                placeholder: "Enter your description"
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/common-components/CommonTextArea/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = CommonTextArea;
const __TURBOPACK__default__export__ = CommonTextArea;
var _c;
__turbopack_context__.k.register(_c, "CommonTextArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/input/dist/chunk-HJTJQZF3.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonTextArea$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/common-components/CommonTextArea/index.tsx [app-client] (ecmascript)");
;
;
;
;
function ProfessionalSummary() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "professional-summary__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                labelText: "Enable section"
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                label: "Section Title",
                type: "text"
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonTextArea$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    labelText: "Description"
                }, void 0, false, {
                    fileName: "[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ProfessionalSummary;
const __TURBOPACK__default__export__ = ProfessionalSummary;
var _c;
__turbopack_context__.k.register(_c, "ProfessionalSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/cv-builder/SocialLinks/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/input/dist/chunk-HJTJQZF3.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/common-components/CommonSwitcher/index.tsx [app-client] (ecmascript)");
;
;
;
function SocialLinks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "social-links__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                labelText: 'Enable section'
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/SocialLinks/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                label: "Section Title",
                type: "text"
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/SocialLinks/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/cv-builder/SocialLinks/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = SocialLinks;
const __TURBOPACK__default__export__ = SocialLinks;
var _c;
__turbopack_context__.k.register(_c, "SocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/cv-builder/SectionsList/sections.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sections": (()=>sections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$PersonalInformation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/cv-builder/PersonalInformation/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$ProfessionalSummary$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/cv-builder/ProfessionalSummary/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SocialLinks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/cv-builder/SocialLinks/index.tsx [app-client] (ecmascript)");
;
;
;
;
const sections = [
    {
        id: 'personal-information',
        key: 1,
        title: 'Personal Information',
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$PersonalInformation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cv-tools/app/cv-builder/SectionsList/sections.tsx",
            lineNumber: 10,
            columnNumber: 16
        }, this),
        defaultExpanded: true
    },
    {
        id: 'professional-summary',
        key: 2,
        title: 'Professional Summary',
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$ProfessionalSummary$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cv-tools/app/cv-builder/SectionsList/sections.tsx",
            lineNumber: 17,
            columnNumber: 16
        }, this),
        defaultExpanded: false
    },
    {
        id: 'websites-social-links',
        title: 'Websites & Social Links',
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SocialLinks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cv-tools/app/cv-builder/SectionsList/sections.tsx",
            lineNumber: 23,
            columnNumber: 16
        }, this),
        defaultExpanded: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/cv-builder/SectionsList/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/accordion/dist/chunk-4IHXPBHH.mjs [app-client] (ecmascript) <export accordion_default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/accordion/dist/chunk-HAJUSXOG.mjs [app-client] (ecmascript) <export accordion_item_base_default as AccordionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$sections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/cv-builder/SectionsList/sections.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function SectionsList() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sections-list__component",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
            selectionMode: "multiple",
            variant: "shadow",
            defaultExpandedKeys: [
                '1'
            ],
            children: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$sections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    "aria-label": section.title,
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-lg font-semibold",
                        children: section.title
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 21,
                        columnNumber: 15
                    }, void 0),
                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 25,
                        columnNumber: 24
                    }, void 0),
                    children: section.component
                }, section.key, false, {
                    fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = SectionsList;
const __TURBOPACK__default__export__ = SectionsList;
var _c;
__turbopack_context__.k.register(_c, "SectionsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/app/cv-builder/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CvBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/components/primitives.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/app/cv-builder/SectionsList/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function CvBuilder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-fill",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["title"])({
                    fullWidth: true,
                    class: 'mb-4'
                }),
                children: "Build Your Resume in Minutes"
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtitle"])({
                    class: 'max-w-xl text-center mx-auto mb-4'
                }),
                children: "Create a professional CV quickly and for free — no signup, no hassle. Just fill in your info and download it instantly."
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CvBuilder;
var _c;
__turbopack_context__.k.register(_c, "CvBuilder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=cv-tools_908c6595._.js.map