(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/cv-tools/frontend/components/primitives.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "subtitle": (()=>subtitle),
    "title": (()=>title)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript)");
;
const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
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
const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
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
"[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function CommonDropzone({ onFileSelect }) {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { getRootProps, getInputProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        accept: {
            "image/*": []
        },
        onDrop: {
            "CommonDropzone.useDropzone": (acceptedFiles)=>{
                const filesWithPreview = acceptedFiles.map({
                    "CommonDropzone.useDropzone.filesWithPreview": (file)=>Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        })
                }["CommonDropzone.useDropzone.filesWithPreview"]);
                setFiles(filesWithPreview);
                onFileSelect?.(filesWithPreview);
            }
        }["CommonDropzone.useDropzone"]
    });
    const thumbs = files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[200px] h-[200px] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 100,
                    height: 100,
                    className: "w-full h-full rounded-full object-cover",
                    src: file.preview,
                    alt: file.name,
                    onLoad: ()=>{
                        URL.revokeObjectURL(file.preview);
                    }
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        }, file.name, false, {
            fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, this));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommonDropzone.useEffect": ()=>{
            return ({
                "CommonDropzone.useEffect": ()=>files.forEach({
                        "CommonDropzone.useEffect": (file)=>URL.revokeObjectURL(file.preview)
                    }["CommonDropzone.useEffect"])
            })["CommonDropzone.useEffect"];
        }
    }["CommonDropzone.useEffect"], [
        files
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-full flex flex-wrap justify-center",
                children: thumbs
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...getRootProps({
                    className: "dropzone flex flex-col items-center justify-center"
                }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-2 text-sm text-blue-500 hover:text-blue-600 cursor-pointer flex flex-col items-center gap-2",
                        children: [
                            "Upload Profile Image",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {}, void 0, false, {
                                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(CommonDropzone, "Ee7v0zhGi6g6i2mfjkXvTwu1SJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
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
"[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
;
;
function CommonAddButton(props) {
    const { buttonText, type = "button", onClick } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
        type: type,
        className: "common-add-button__component",
        color: "primary",
        variant: "ghost",
        radius: "full",
        size: "sm",
        onPress: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            buttonText
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CommonAddButton;
const __TURBOPACK__default__export__ = CommonAddButton;
var _c;
__turbopack_context__.k.register(_c, "CommonAddButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCvBuilderStore": (()=>useCvBuilderStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
// Initial values for personal information
const initialPersonalInformation = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    website: "",
    profileImage: null,
    profileImagePreview: null
};
const useCvBuilderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // Initial state
        selectedSections: [
            "personal-information"
        ],
        personalInformation: initialPersonalInformation,
        professionalSummary: [],
        // Method to update selected sections
        setSelectedSections: (sections)=>set({
                selectedSections: sections
            }),
        // Method to save personal information
        setPersonalInformation: (information)=>set((state)=>({
                    personalInformation: {
                        ...state.personalInformation,
                        ...information
                    }
                })),
        // Professional Summary methods
        addProfessionalSummary: (summary)=>set((state)=>({
                    professionalSummary: [
                        ...state.professionalSummary,
                        {
                            ...summary,
                            id: `summary-${Date.now()}`
                        }
                    ]
                })),
        updateProfessionalSummary: (id, summary)=>set((state)=>({
                    professionalSummary: state.professionalSummary.map((item)=>item.id === id ? {
                            ...item,
                            ...summary
                        } : item)
                })),
        deleteProfessionalSummary: (id)=>set((state)=>({
                    professionalSummary: state.professionalSummary.filter((item)=>item.id !== id)
                })),
        reorderProfessionalSummary: (summaries)=>set(()=>({
                    professionalSummary: summaries
                })),
        // Method to clear the form
        clearPersonalInformation: ()=>set({
                personalInformation: initialPersonalInformation
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/input/dist/chunk-HJTJQZF3.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$form$2f$dist$2f$chunk$2d$LAX3QLKM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/form/dist/chunk-LAX3QLKM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$toast$2f$dist$2f$chunk$2d$QACDA32D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/toast/dist/chunk-QACDA32D.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonDropzone$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const PersonalInformation = ()=>{
    _s();
    // 🏪 Connect to the store and get the data and methods
    const { personalInformation: savedPersonalInformation, setPersonalInformation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    // 📝 Local state for the form - initialize with the saved data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: savedPersonalInformation.firstName,
        lastName: savedPersonalInformation.lastName,
        jobTitle: savedPersonalInformation.jobTitle,
        email: savedPersonalInformation.email,
        phone: savedPersonalInformation.phone,
        city: savedPersonalInformation.city,
        country: savedPersonalInformation.country,
        website: savedPersonalInformation.website
    });
    // 🖼️ Local state for the image - initialize with the saved image
    const [localProfileImage, setLocalProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(savedPersonalInformation.profileImage);
    // 📝 Handler for the form fields change (local state)
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    // 📁 Handler for the file selection (temporarily save locally)
    const handleFileSelect = (files)=>{
        if (files.length > 0) {
            const selectedFile = files[0];
            setLocalProfileImage(selectedFile);
        }
    };
    // 💾 Handler for the form submission (save to the global store)
    const handleSubmit = (e)=>{
        e.preventDefault();
        // 📝 Save all data to the global store in one call
        setPersonalInformation({
            ...formData,
            profileImage: localProfileImage,
            profileImagePreview: localProfileImage ? {
                name: localProfileImage.name,
                size: localProfileImage.size,
                type: localProfileImage.type,
                preview: localProfileImage.preview
            } : null
        });
        // show toast success
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$toast$2f$dist$2f$chunk$2d$QACDA32D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToast"])({
            title: "Personal Information Saved Successfully",
            color: "success",
            variant: "bordered"
        });
    };
    // log global state only when it's changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalInformation.useEffect": ()=>{
            // eslint-disable-next-line no-console
            console.log("Global state only when it's changed:", savedPersonalInformation);
        }
    }["PersonalInformation.useEffect"], [
        savedPersonalInformation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalInformation.useEffect": ()=>{
            // eslint-disable-next-line no-console
            console.log("Local form:", formData);
        }
    }["PersonalInformation.useEffect"], [
        formData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "personal-information__component",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$form$2f$dist$2f$chunk$2d$LAX3QLKM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonDropzone$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onFileSelect: handleFileSelect
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                localProfileImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-small text-default-500 mb-4 text-center",
                    children: [
                        "Selected image: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: localProfileImage.name
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 98,
                            columnNumber: 29
                        }, this),
                        "(",
                        (localProfileImage.size / 1024).toFixed(1),
                        " KB)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            label: "First Name",
                            name: "firstName",
                            type: "text",
                            value: formData.firstName,
                            onChange: (e)=>handleInputChange("firstName", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            label: "Last Name",
                            name: "lastName",
                            type: "text",
                            value: formData.lastName,
                            onChange: (e)=>handleInputChange("lastName", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "Job Title",
                        name: "jobTitle",
                        type: "text",
                        value: formData.jobTitle,
                        onChange: (e)=>handleInputChange("jobTitle", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            label: "Phone",
                            name: "phone",
                            type: "tel",
                            value: formData.phone,
                            onChange: (e)=>handleInputChange("phone", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            label: "Email",
                            name: "email",
                            type: "email",
                            value: formData.email,
                            onChange: (e)=>handleInputChange("email", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            label: "Country",
                            name: "country",
                            type: "text",
                            value: formData.country,
                            onChange: (e)=>handleInputChange("country", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            label: "City",
                            name: "city",
                            type: "text",
                            value: formData.city,
                            onChange: (e)=>handleInputChange("city", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full line-wrapper flex flex-col md:flex-row gap-4 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                        label: "Website",
                        name: "website",
                        type: "url",
                        value: formData.website,
                        onChange: (e)=>handleInputChange("website", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-4 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        buttonText: "Save"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s(PersonalInformation, "LyiV+HDgmCEcbs8ru083VqxqFlI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"]
    ];
});
_c = PersonalInformation;
const __TURBOPACK__default__export__ = PersonalInformation;
var _c;
__turbopack_context__.k.register(_c, "PersonalInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$switch$2f$dist$2f$chunk$2d$ECZ3LCTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/switch/dist/chunk-ECZ3LCTI.mjs [app-client] (ecmascript) <export switch_default as Switch>");
;
;
function CommonSwitcher({ labelText, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `common-switcher__component ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrapper flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-base",
                    children: labelText
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$switch$2f$dist$2f$chunk$2d$ECZ3LCTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__["Switch"], {
                    defaultSelected: true,
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx",
        lineNumber: 11,
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
"[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$CSXHODZI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/tooltip/dist/chunk-CSXHODZI.mjs [app-client] (ecmascript) <export tooltip_default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as CircleHelp>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function isMobile() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return window.matchMedia("(pointer: coarse)").matches;
}
function CommonToolTip({ content }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = ()=>{
        if (isMobile()) setOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-tooltip__component h-auto active:border-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$CSXHODZI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__["Tooltip"], {
            content: content,
            isOpen: isMobile() ? open : undefined,
            radius: "sm",
            showArrow: true,
            shadow: "lg",
            className: " max-w-xs p-4 text-tiny text-center",
            onOpenChange: setOpen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"], {
                className: "w-[16px] cursor-pointer border-transparent",
                onClick: handleClick
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx",
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
"[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/input/dist/chunk-ORPGD37S.mjs [app-client] (ecmascript) <export textarea_default as Textarea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonToolTip$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx [app-client] (ecmascript)");
;
;
;
function CommonTextArea({ labelText, tooltipContent, initialValue, onChange, placeholder = "Enter your description" }) {
    const label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: labelText
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            tooltipContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonToolTip$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: tooltipContent
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 24,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-textarea__component",
        children: [
            labelText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 30,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                disableAnimation: true,
                disableAutosize: true,
                classNames: {
                    base: "w-full",
                    input: "resize-y min-h-[100px]"
                },
                placeholder: placeholder,
                value: initialValue,
                onValueChange: onChange
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
        lineNumber: 29,
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
"[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeClosed$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/eye-closed.js [app-client] (ecmascript) <export default as EyeClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grip$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/grip.js [app-client] (ecmascript) <export default as Grip>");
;
var _s = __turbopack_context__.k.signature();
;
;
function CommonInfoDropdownHeader(props) {
    _s();
    const { title, setShowDropdown, dragHandleProps } = props;
    const [visibleInfo, setVisibleInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-info-dropdown-header__component w-full mb-4 flex items-center gap-2 cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "triger-button w-fit flex-shrink-0",
                ...dragHandleProps,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grip$3e$__["Grip"], {}, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                className: "title px-2 text-ellipsis text-left cursor-pointer line-clamp-2 w-full whitespace-pre-wrap leading-[1.2] overflow-hidden text-sm",
                onClick: ()=>setShowDropdown(true),
                onKeyDown: (e)=>e.key === "Enter" && setShowDropdown(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                className: "icon-wrapper flex-shrink-0 ml-auto",
                onClick: ()=>setVisibleInfo(!visibleInfo),
                children: visibleInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {}, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 40,
                    columnNumber: 24
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeClosed$3e$__["EyeClosed"], {}, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 40,
                    columnNumber: 34
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CommonInfoDropdownHeader, "3sdooBitP8W+M7exptQGJPwPtAQ=");
_c = CommonInfoDropdownHeader;
const __TURBOPACK__default__export__ = CommonInfoDropdownHeader;
var _c;
__turbopack_context__.k.register(_c, "CommonInfoDropdownHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownHeader$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CommonInfoDropdownItem({ title, children, dragHandleProps }) {
    _s();
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-info-dropdown-item__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownHeader$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setShowDropdown: ()=>setShowDropdown(!showDropdown),
                title: title,
                dragHandleProps: dragHandleProps
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dropdown-area",
                children: children
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx",
                lineNumber: 22,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(CommonInfoDropdownItem, "/Fk0mfoaTkcfqmlHhjzD5FM1xJk=");
_c = CommonInfoDropdownItem;
const __TURBOPACK__default__export__ = CommonInfoDropdownItem;
var _c;
__turbopack_context__.k.register(_c, "CommonInfoDropdownItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonTextArea$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const SortableItem = ({ id, summary })=>{
    _s();
    const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    const { updateProfessionalSummary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition
    };
    const handleDescriptionChange = (description)=>{
        updateProfessionalSummary(id, {
            description
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...attributes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownItem$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: summary.description || "New Entry",
            dragHandleProps: {
                ref: setActivatorNodeRef,
                ...listeners
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonTextArea$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    labelText: "Description",
                    tooltipContent: "Craft 2–4 punchy sentences that capture attention! Highlight your role, experience, and most importantly — showcase your top achievements, standout qualities, and key skills.",
                    initialValue: summary.description,
                    onChange: handleDescriptionChange
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(SortableItem, "2k/akI4xw0aKMKtWyD04/dScJu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"]
    ];
});
_c = SortableItem;
const ProfessionalSummary = ()=>{
    _s1();
    const { professionalSummary, addProfessionalSummary, reorderProfessionalSummary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = professionalSummary.findIndex((item)=>item.id === active.id);
            const newIndex = professionalSummary.findIndex((item)=>item.id === over?.id);
            reorderProfessionalSummary((0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayMove"])(professionalSummary, oldIndex, newIndex));
        }
    };
    const handleAddSummary = ()=>{
        addProfessionalSummary({
            title: "New Entry",
            description: "",
            isVisible: true
        });
    };
    console.log(professionalSummary);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "professional-summary__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                labelText: "Enable section",
                className: "mb-6"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
                sensors: sensors,
                collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCenter"],
                onDragEnd: handleDragEnd,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                    items: professionalSummary.map((item)=>item.id),
                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                    children: professionalSummary.map((summary)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableItem, {
                            id: summary.id,
                            summary: summary
                        }, summary.id, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                buttonText: "Add new summary",
                onClick: handleAddSummary
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
};
_s1(ProfessionalSummary, "oloFyt58ZsjIPLjdbh0CtUqq/NA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c1 = ProfessionalSummary;
const __TURBOPACK__default__export__ = ProfessionalSummary;
var _c, _c1;
__turbopack_context__.k.register(_c, "SortableItem");
__turbopack_context__.k.register(_c1, "ProfessionalSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperienceList/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ProfExperienceList() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prof-experience-list__component",
        children: "ProfExperienceList"
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperienceList/index.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = ProfExperienceList;
const __TURBOPACK__default__export__ = ProfExperienceList;
var _c;
__turbopack_context__.k.register(_c, "ProfExperienceList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperienceList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperienceList/index.tsx [app-client] (ecmascript)");
;
;
;
;
function ProfExperience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prof-experience__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                labelText: "Enable section"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperienceList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                buttonText: "Add Experience"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ProfExperience;
const __TURBOPACK__default__export__ = ProfExperience;
var _c;
__turbopack_context__.k.register(_c, "ProfExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sections": (()=>sections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$PersonalInformation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$ProfessionalSummary$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx [app-client] (ecmascript)");
// import SocialLinks from '@/app/cv-builder/SocialLinks';
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperience$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx [app-client] (ecmascript)");
;
;
;
;
const sections = [
    {
        id: "personal-information",
        key: 1,
        title: "Personal Information",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$PersonalInformation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx",
            lineNumber: 11,
            columnNumber: 16
        }, this),
        defaultExpanded: true,
        isSectionShown: true
    },
    {
        id: "professional-summary",
        key: 2,
        title: "Professional Summary",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$ProfessionalSummary$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx",
            lineNumber: 19,
            columnNumber: 16
        }, this),
        defaultExpanded: false,
        isSectionShown: true
    },
    {
        id: "prof_experience",
        key: 3,
        title: "Professional Experience",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperience$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx",
            lineNumber: 27,
            columnNumber: 16
        }, this),
        defaultExpanded: false,
        isSectionShown: true
    },
    {
        id: "education",
        key: 4,
        title: "Education",
        component: "Education",
        defaultExpanded: false,
        isSectionShown: true
    },
    {
        id: "technologies",
        key: 5,
        title: "Technologies",
        component: "Technologies",
        defaultExpanded: false,
        isSectionShown: true
    },
    {
        id: "languages",
        key: 6,
        title: "Languages",
        component: "Languages",
        defaultExpanded: false,
        isSectionShown: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/accordion/dist/chunk-4IHXPBHH.mjs [app-client] (ecmascript) <export accordion_default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/accordion/dist/chunk-HAJUSXOG.mjs [app-client] (ecmascript) <export accordion_item_base_default as AccordionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$sections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SectionsList() {
    _s();
    const { selectedSections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    const visibleSections = __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$sections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections"].filter((section)=>selectedSections.includes(section.id));
    // console.log("selectedSections", selectedSections);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sections-list__component",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
            selectionMode: "multiple",
            variant: "shadow",
            defaultExpandedKeys: [
                "1"
            ],
            children: visibleSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    "aria-label": section.title,
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-lg font-semibold",
                        children: section.title
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, void 0),
                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 30,
                        columnNumber: 24
                    }, void 0),
                    children: section.component
                }, section.key, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(SectionsList, "PTI5acby5nyQ1cICC3hjobblgLs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"]
    ];
});
_c = SectionsList;
const __TURBOPACK__default__export__ = SectionsList;
var _c;
__turbopack_context__.k.register(_c, "SectionsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "contentList": (()=>contentList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/briefcase-business.js [app-client] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCog$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/brain-cog.js [app-client] (ecmascript) <export default as BrainCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-client] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/contact.js [app-client] (ecmascript) <export default as Contact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript) <export default as Puzzle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
;
const contentList = [
    {
        key: "education",
        title: "Education",
        description: "Show off your primary education, college degrees & exchange semesters.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, this)
    },
    {
        key: "professional-summary",
        title: "Professional Summary",
        description: "Summarize your key qualifications, experience, and career goals in a few sentences.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 38,
            columnNumber: 11
        }, this)
    },
    {
        key: "prof_experience",
        title: "Professional Experience",
        description: "A place to highlight your professional experience – including internships.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 44,
            columnNumber: 11
        }, this)
    },
    {
        key: "skills",
        title: "Skills",
        description: "List your technical, managerial or soft skills in this section.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCog$3e$__["BrainCog"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 50,
            columnNumber: 11
        }, this)
    },
    {
        key: "languages",
        title: "Languages",
        description: "You speak more than one language? Make sure to list them here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 56,
            columnNumber: 11
        }, this)
    },
    {
        key: "certificates",
        title: "Certificates",
        description: "Drivers licenses and other industry-specific certificates you have belong here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 62,
            columnNumber: 11
        }, this)
    },
    {
        key: "interests",
        title: "Interests",
        description: "Do you have interests that align with your career aspiration?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 68,
            columnNumber: 11
        }, this)
    },
    {
        key: "projects",
        title: "Projects",
        description: "Worked on a particular challenging project in the past? Mention it here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 74,
            columnNumber: 11
        }, this)
    },
    {
        key: "courses",
        title: "Courses",
        description: "Did you complete MOOCs or an evening course? Show them off in this section.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 80,
            columnNumber: 11
        }, this)
    },
    {
        key: "awards",
        title: "Awards",
        description: "Awards like student competitions or industry accolades belong here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this)
    },
    {
        key: "organizations",
        title: "Organizations",
        description: "If you volunteer or participate in a good cause, why not state it?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this)
    },
    {
        key: "publications",
        title: "Publications",
        description: "Academic publications or book releases have a dedicated place here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this)
    },
    {
        key: "references",
        title: "References",
        description: "If you have former colleagues or bosses that vouch for you, list them.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__["Contact"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this)
    },
    {
        key: "declaration",
        title: "Declaration",
        description: "You need a declaration with signature?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this)
    },
    {
        key: "custom",
        title: "Custom",
        description: "You didn't find what you are looking for? Or you want to combine two sections to save space?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__["Puzzle"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this)
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$3BLMMOBU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-3BLMMOBU.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-UKDXCIYN.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-IGSAU2ZA.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-FOPEYBSC.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-O5MCAK4F.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/use-disclosure/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$MW56SEHC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/card/dist/chunk-MW56SEHC.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$divider$2f$dist$2f$chunk$2d$IHO36JMK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/divider/dist/chunk-IHO36JMK.mjs [app-client] (ecmascript) <export divider_default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$contentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AddCvContent() {
    _s();
    const { isOpen, onOpen, onOpenChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const { selectedSections, setSelectedSections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    const handleAddSection = (id)=>{
        if (!selectedSections.includes(id)) {
            setSelectedSections([
                ...selectedSections,
                id
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "add-cv-content_component",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    color: "primary",
                    size: "lg",
                    endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                        lineNumber: 37,
                        columnNumber: 23
                    }, void 0),
                    onPress: onOpen,
                    children: "Add Content"
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$3BLMMOBU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                    size: "5xl",
                    backdrop: "opaque",
                    classNames: {
                        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                    },
                    isOpen: isOpen,
                    onOpenChange: onOpenChange,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                        children: (onClose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                        className: "flex flex-col gap-1 text-2xl font-bold",
                                        children: "Add Content"
                                    }, void 0, false, {
                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[80vh] overflow-y-auto sm:justify-items-center",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$contentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentList"].map((content)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$MW56SEHC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                                isPressable: true,
                                                tabIndex: 0,
                                                "aria-label": `Добавить секцию ${content.title}`,
                                                className: "w-full sm:max-w-[340px] rounded-xl shadow-md p-2 sm:p-4 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer border border-transparent dark:border-white",
                                                onPress: ()=>{
                                                    handleAddSection(content.key);
                                                    onClose();
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-zinc-100 text-zinc-700",
                                                                children: content.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base sm:text-lg font-bold",
                                                                    children: content.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$divider$2f$dist$2f$chunk$2d$IHO36JMK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: content.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, content.key, true, {
                                                fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                            color: "danger",
                                            variant: "light",
                                            onPress: onClose,
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(AddCvContent, "6e5p8U0iXYFDwYrFkg/W9VRpfQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCvBuilderStore"]
    ];
});
_c = AddCvContent;
const __TURBOPACK__default__export__ = AddCvContent;
var _c;
__turbopack_context__.k.register(_c, "AddCvContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$drawer$2f$dist$2f$chunk$2d$3T5MLG3K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__drawer_default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/drawer/dist/chunk-3T5MLG3K.mjs [app-client] (ecmascript) <export drawer_default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__DrawerContent$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-UKDXCIYN.mjs [app-client] (ecmascript) <export modal_content_default as DrawerContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__DrawerHeader$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-IGSAU2ZA.mjs [app-client] (ecmascript) <export modal_header_default as DrawerHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__DrawerBody$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-FOPEYBSC.mjs [app-client] (ecmascript) <export modal_body_default as DrawerBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__DrawerFooter$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-O5MCAK4F.mjs [app-client] (ecmascript) <export modal_footer_default as DrawerFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-client] (ecmascript) <export button_default as Button>");
;
;
function CvSidePreviw({ isOpen, onOpenChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$drawer$2f$dist$2f$chunk$2d$3T5MLG3K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__drawer_default__as__Drawer$3e$__["Drawer"], {
        isOpen: isOpen,
        size: "2xl",
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__DrawerContent$3e$__["DrawerContent"], {
            children: (onClose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__DrawerHeader$3e$__["DrawerHeader"], {
                            className: "flex flex-col gap-1",
                            children: "CV Preview"
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__DrawerBody$3e$__["DrawerBody"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cv-preview-content",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: "Photo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: "Your Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Job Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                            lineNumber: 30,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold mb-2",
                                                            children: "Contact Information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "📧 email@example.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "📱 +1 (555) 123-4567"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "📍 City, Country"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                                    lineNumber: 44,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold mb-2",
                                                            children: "Professional Summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-700",
                                                            children: "Your professional summary will appear here..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold mb-2",
                                                            children: "Experience"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-700",
                                                            children: "Your work experience will be listed here..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__DrawerFooter$3e$__["DrawerFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    color: "danger",
                                    variant: "light",
                                    onPress: onClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    color: "primary",
                                    onPress: onClose,
                                    children: "Download PDF"
                                }, void 0, false, {
                                    fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = CvSidePreviw;
const __TURBOPACK__default__export__ = CvSidePreviw;
var _c;
__turbopack_context__.k.register(_c, "CvSidePreviw");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cv-tools/frontend/app/cv-builder/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CvBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/use-disclosure/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/components/primitives.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$CvSidePreviw$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/CvSidePreviw/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CvBuilder() {
    _s();
    const { isOpen, onOpen, onOpenChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-fill",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["title"])({
                    fullWidth: true,
                    class: "mb-4"
                }),
                children: "Build Your Resume in Minutes"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtitle"])({
                    class: "max-w-xl text-center mx-auto mb-4"
                }),
                children: "Create a professional CV quickly and for free — no signup, no hassle. Just fill in your info and download it instantly."
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                className: "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm",
                color: "primary",
                size: "lg",
                onPress: ()=>onOpen(),
                radius: "full",
                startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                    lineNumber: 33,
                    columnNumber: 23
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "Preview CV"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sm:hidden",
                        children: "Preview"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$CvSidePreviw$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                onOpenChange: onOpenChange
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(CvBuilder, "AdiTISyUkHeljZX/EtAu+ZA8tV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"]
    ];
});
_c = CvBuilder;
var _c;
__turbopack_context__.k.register(_c, "CvBuilder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=cv-tools_frontend_67cac85d._.js.map