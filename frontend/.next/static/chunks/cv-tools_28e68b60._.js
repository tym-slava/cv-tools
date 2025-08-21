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
'use client';
;
;
;
// import PersonalInformation from '@/app/cv-builder/PersonalInformation';
// import ProfessionalSummary from '@/app/cv-builder/ProfessionalSummary';
function SectionsList() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sections-list__component",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$4IHXPBHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
            selectionMode: "multiple",
            variant: "shadow",
            defaultExpandedKeys: [
                '1'
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    "aria-label": "Personal Information",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-lg font-semibold",
                        children: "Personal Information"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, void 0),
                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 27,
                        columnNumber: 22
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonalInformation, {}, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, "1", false, {
                    fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    "aria-label": "Professional Summary",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-lg font-semibold",
                        children: "Professional Summary"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, void 0),
                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 39,
                        columnNumber: 22
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfessionalSummary, {}, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, "2", false, {
                    fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                    "aria-label": "Websites & Social Links",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-lg font-semibold",
                        children: "Websites & Social Links"
                    }, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, void 0),
                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                        lineNumber: 51,
                        columnNumber: 22
                    }, void 0),
                    children: "some content"
                }, "3", false, {
                    fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cv-tools/app/cv-builder/SectionsList/index.tsx",
        lineNumber: 13,
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
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtitle"])({
                    class: 'max-w-xl text-center mx-auto mb-4'
                }),
                children: "Create a professional CV quickly and for free — no signup, no hassle. Just fill in your info and download it instantly."
            }, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$app$2f$cv$2d$builder$2f$SectionsList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cv-tools/app/cv-builder/page.tsx",
        lineNumber: 10,
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

//# sourceMappingURL=cv-tools_28e68b60._.js.map