module.exports = {

"[project]/cv-tools/frontend/components/primitives.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "subtitle": (()=>subtitle),
    "title": (()=>title)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript)");
;
const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"])({
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
const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"])({
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
}}),
"[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/react-dropzone/dist/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/react-dropzone/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
function CommonDropzone() {
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { getRootProps, getInputProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        accept: {
            "image/*": []
        },
        onDrop: (acceptedFiles)=>{
            setFiles(acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
        }
    });
    const thumbs = files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[200px] h-[200px] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        }, file.name, false, {
            fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, this));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return ()=>files.forEach((file)=>URL.revokeObjectURL(file.preview));
    }, [
        files
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-full flex flex-wrap justify-center",
                children: thumbs
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...getRootProps({
                    className: "dropzone"
                }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Drag 'n' drop some files here, or click to select files"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonDropzone/index.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CommonDropzone;
}}),
"[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$switch$2f$dist$2f$chunk$2d$ECZ3LCTI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/switch/dist/chunk-ECZ3LCTI.mjs [app-ssr] (ecmascript) <export switch_default as Switch>");
;
;
function CommonSwitcher({ labelText, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `common-switcher__component ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrapper flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-base",
                    children: labelText
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$switch$2f$dist$2f$chunk$2d$ECZ3LCTI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__["Switch"], {
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
const __TURBOPACK__default__export__ = CommonSwitcher;
}}),
"[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$CSXHODZI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/tooltip/dist/chunk-CSXHODZI.mjs [app-ssr] (ecmascript) <export tooltip_default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as CircleHelp>");
;
;
;
;
function isMobile() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    "TURBOPACK unreachable";
}
function CommonToolTip({ content }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = ()=>{
        if (isMobile()) setOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-tooltip__component h-auto active:border-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$tooltip$2f$dist$2f$chunk$2d$CSXHODZI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__["Tooltip"], {
            content: content,
            isOpen: isMobile() ? open : undefined,
            radius: "sm",
            showArrow: true,
            shadow: "lg",
            className: " max-w-xs p-4 text-tiny text-center",
            onOpenChange: setOpen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"], {
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
const __TURBOPACK__default__export__ = CommonToolTip;
}}),
"[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/input/dist/chunk-ORPGD37S.mjs [app-ssr] (ecmascript) <export textarea_default as Textarea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonToolTip$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonToolTip/index.tsx [app-ssr] (ecmascript)");
;
;
;
function CommonTextArea({ labelText }) {
    const label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: labelText
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonToolTip$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                content: "Craft 2–4 punchy sentences that capture attention! Highlight your role, experience, and most importantly — showcase your top achievements, standout qualities, and key skills."
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-textarea__component",
        children: [
            labelText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 20,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                disableAnimation: true,
                disableAutosize: true,
                classNames: {
                    base: "w-full",
                    input: "resize-y min-h-[100px]"
                },
                placeholder: "Enter your description"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CommonTextArea;
}}),
"[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$closed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeClosed$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/eye-closed.js [app-ssr] (ecmascript) <export default as EyeClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grip$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/grip.js [app-ssr] (ecmascript) <export default as Grip>");
;
;
;
function CommonInfoDropdownHeader(props) {
    const { title, setShowDropdown } = props;
    const [visibleInfo, setVisibleInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-info-dropdown-header__component mb-4 flex items-center justify-between cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "triger-button w-fit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grip$3e$__["Grip"], {}, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                className: "title cursor-pointer",
                onClick: ()=>setShowDropdown(true),
                onKeyDown: (e)=>e.key === "Enter" && setShowDropdown(true),
                children: title
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                className: "icon-wrapper",
                onClick: ()=>setVisibleInfo(!visibleInfo),
                children: visibleInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {}, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 36,
                    columnNumber: 24
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$closed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeClosed$3e$__["EyeClosed"], {}, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                    lineNumber: 36,
                    columnNumber: 34
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CommonInfoDropdownHeader;
}}),
"[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownHeader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownHeader/index.tsx [app-ssr] (ecmascript)");
;
;
;
function CommonInfoDropdownItem({ title, children }) {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-info-dropdown-item__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownHeader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                setShowDropdown: ()=>setShowDropdown(!showDropdown),
                title: title
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dropdown-area",
                children: children
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx",
                lineNumber: 21,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CommonInfoDropdownItem;
}}),
"[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
;
;
;
function CommonAddButton(props) {
    const { buttonText } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
        className: "common-add-button__component",
        color: "primary",
        variant: "ghost",
        radius: "full",
        size: "sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            buttonText
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CommonAddButton;
}}),
"[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonTextArea$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonTextArea/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownItem$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonInfoDropdownItem/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function ProfessionalSummary() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "professional-summary__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                labelText: "Enable section",
                className: "mb-6"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonInfoDropdownItem$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "New Entry",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonTextArea$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        labelText: "Description"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                buttonText: "Add new summary"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ProfessionalSummary;
}}),
"[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperienceList/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProfExperienceList() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prof-experience-list__component",
        children: "ProfExperienceList"
    }, void 0, false, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperienceList/index.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = ProfExperienceList;
}}),
"[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/CommonSwitcher/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/common-components/buttons/CommonAddButton/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperienceList$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperienceList/index.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ProfExperience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prof-experience__component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$CommonSwitcher$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                labelText: "Enable section"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperienceList$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$common$2d$components$2f$buttons$2f$CommonAddButton$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = ProfExperience;
}}),
"[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sections": (()=>sections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$PersonalInformation$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/PersonalInformation/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$ProfessionalSummary$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/ProfessionalSummary/index.tsx [app-ssr] (ecmascript)");
// import SocialLinks from '@/app/cv-builder/SocialLinks';
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperience$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/prof-experience-section/ProfExperience/index.tsx [app-ssr] (ecmascript)");
;
;
;
;
const sections = [
    {
        id: "personal-information",
        key: 1,
        title: "Personal Information",
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$PersonalInformation$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$ProfessionalSummary$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$prof$2d$experience$2d$section$2f$ProfExperience$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}}),
"[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCvBuilderStore": (()=>useCvBuilderStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useCvBuilderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        selectedSections: [
            "personal-information"
        ],
        setSelectedSections: (sections)=>set({
                selectedSections: sections
            })
    }));
}}),
"[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/accordion/dist/chunk-4IHXPBHH.mjs [app-ssr] (ecmascript) <export accordion_default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/accordion/dist/chunk-HAJUSXOG.mjs [app-ssr] (ecmascript) <export accordion_item_base_default as AccordionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$sections$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/SectionsList/sections.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SectionsList() {
    const { selectedSections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    const visibleSections = __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$sections$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sections"].filter((section)=>selectedSections.includes(section.id));
    console.log("selectedSections", selectedSections);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sections-list__component",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
            selectionMode: "multiple",
            variant: "shadow",
            defaultExpandedKeys: [
                "1"
            ],
            children: visibleSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    "aria-label": section.title,
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-lg font-semibold",
                        children: section.title
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, void 0),
                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
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
const __TURBOPACK__default__export__ = SectionsList;
}}),
"[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "contentList": (()=>contentList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/briefcase-business.js [app-ssr] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCog$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/brain-cog.js [app-ssr] (ecmascript) <export default as BrainCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-ssr] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-ssr] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-ssr] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/contact.js [app-ssr] (ecmascript) <export default as Contact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-ssr] (ecmascript) <export default as Puzzle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
;
;
const contentList = [
    {
        key: "education",
        title: "Education",
        description: "Show off your primary education, college degrees & exchange semesters.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, this)
    },
    {
        key: "professional-summary",
        title: "Professional Summary",
        description: "Summarize your key qualifications, experience, and career goals in a few sentences.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 38,
            columnNumber: 11
        }, this)
    },
    {
        key: "prof_experience",
        title: "Professional Experience",
        description: "A place to highlight your professional experience – including internships.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 44,
            columnNumber: 11
        }, this)
    },
    {
        key: "skills",
        title: "Skills",
        description: "List your technical, managerial or soft skills in this section.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCog$3e$__["BrainCog"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 50,
            columnNumber: 11
        }, this)
    },
    {
        key: "languages",
        title: "Languages",
        description: "You speak more than one language? Make sure to list them here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 56,
            columnNumber: 11
        }, this)
    },
    {
        key: "certificates",
        title: "Certificates",
        description: "Drivers licenses and other industry-specific certificates you have belong here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 62,
            columnNumber: 11
        }, this)
    },
    {
        key: "interests",
        title: "Interests",
        description: "Do you have interests that align with your career aspiration?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 68,
            columnNumber: 11
        }, this)
    },
    {
        key: "projects",
        title: "Projects",
        description: "Worked on a particular challenging project in the past? Mention it here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 74,
            columnNumber: 11
        }, this)
    },
    {
        key: "courses",
        title: "Courses",
        description: "Did you complete MOOCs or an evening course? Show them off in this section.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 80,
            columnNumber: 11
        }, this)
    },
    {
        key: "awards",
        title: "Awards",
        description: "Awards like student competitions or industry accolades belong here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this)
    },
    {
        key: "organizations",
        title: "Organizations",
        description: "If you volunteer or participate in a good cause, why not state it?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this)
    },
    {
        key: "publications",
        title: "Publications",
        description: "Academic publications or book releases have a dedicated place here.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this)
    },
    {
        key: "references",
        title: "References",
        description: "If you have former colleagues or bosses that vouch for you, list them.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$contact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Contact$3e$__["Contact"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this)
    },
    {
        key: "declaration",
        title: "Declaration",
        description: "You need a declaration with signature?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this)
    },
    {
        key: "custom",
        title: "Custom",
        description: "You didn't find what you are looking for? Or you want to combine two sections to save space?",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__["Puzzle"], {}, void 0, false, {
            fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this)
    }
];
}}),
"[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$3BLMMOBU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-3BLMMOBU.mjs [app-ssr] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-UKDXCIYN.mjs [app-ssr] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-IGSAU2ZA.mjs [app-ssr] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-FOPEYBSC.mjs [app-ssr] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/modal/dist/chunk-O5MCAK4F.mjs [app-ssr] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/use-disclosure/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$MW56SEHC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/card/dist/chunk-MW56SEHC.mjs [app-ssr] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [app-ssr] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-ssr] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$divider$2f$dist$2f$chunk$2d$IHO36JMK$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/@heroui/divider/dist/chunk-IHO36JMK.mjs [app-ssr] (ecmascript) <export divider_default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$contentList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/AddCvContent/contentList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/store/useCvBuilderStore.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function AddCvContent() {
    const { isOpen, onOpen, onOpenChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const { selectedSections, setSelectedSections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$store$2f$useCvBuilderStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCvBuilderStore"])();
    const handleAddSection = (id)=>{
        if (!selectedSections.includes(id)) {
            setSelectedSections([
                ...selectedSections,
                id
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "add-cv-content_component",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    color: "primary",
                    size: "lg",
                    endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$3BLMMOBU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                    size: "5xl",
                    backdrop: "opaque",
                    classNames: {
                        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                    },
                    isOpen: isOpen,
                    onOpenChange: onOpenChange,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                        children: (onClose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                        className: "flex flex-col gap-1 text-2xl font-bold",
                                        children: "Add Content"
                                    }, void 0, false, {
                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[80vh] overflow-y-auto sm:justify-items-center",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$contentList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contentList"].map((content)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$MW56SEHC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                                isPressable: true,
                                                tabIndex: 0,
                                                "aria-label": `Добавить секцию ${content.title}`,
                                                className: "w-full sm:max-w-[340px] rounded-xl shadow-md p-2 sm:p-4 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer border border-transparent dark:border-white",
                                                onPress: ()=>{
                                                    handleAddSection(content.key);
                                                    onClose();
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-zinc-100 text-zinc-700",
                                                                children: content.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$divider$2f$dist$2f$chunk$2d$IHO36JMK$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                                                        fileName: "[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
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
const __TURBOPACK__default__export__ = AddCvContent;
}}),
"[project]/cv-tools/frontend/app/cv-builder/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CvBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$components$2f$primitives$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/components/primitives.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/SectionsList/index.tsx [app-ssr] (ecmascript)");
// import AddContentButton from '@/app/common-components/buttons/add-content';
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/frontend/app/cv-builder/AddCvContent/index.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CvBuilder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-fill",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$components$2f$primitives$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["title"])({
                    fullWidth: true,
                    class: "mb-4"
                }),
                children: "Build Your Resume in Minutes"
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$components$2f$primitives$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subtitle"])({
                    class: "max-w-xl text-center mx-auto mb-4"
                }),
                children: "Create a professional CV quickly and for free — no signup, no hassle. Just fill in your info and download it instantly."
            }, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$frontend$2f$app$2f$cv$2d$builder$2f$AddCvContent$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/frontend/app/cv-builder/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=cv-tools_frontend_73bb4391._.js.map