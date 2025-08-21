(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-QX3C5UMF.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "accordion": (()=>accordion),
    "accordionItem": (()=>accordionItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
// src/components/accordion.ts
var accordion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "px-2",
    variants: {
        variant: {
            light: "",
            shadow: "px-4 shadow-medium rounded-medium bg-content1",
            bordered: "px-4 border-medium border-divider rounded-medium",
            splitted: "flex flex-col gap-2"
        },
        fullWidth: {
            true: "w-full"
        }
    },
    defaultVariants: {
        variant: "light",
        fullWidth: true
    }
});
var accordionItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "",
        heading: "",
        trigger: [
            "flex py-4 w-full h-full gap-3 outline-none items-center tap-highlight-transparent",
            // focus ring
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        startContent: "flex-shrink-0",
        indicator: "text-default-400",
        titleWrapper: "flex-1 flex flex-col text-start",
        title: "text-foreground text-medium",
        subtitle: "text-small text-foreground-500 font-normal",
        content: "py-2"
    },
    variants: {
        variant: {
            splitted: {
                base: "px-4 bg-content1 shadow-medium rounded-medium"
            }
        },
        isCompact: {
            true: {
                trigger: "py-2",
                title: "text-medium",
                subtitle: "text-small",
                indicator: "text-medium",
                content: "py-1"
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled pointer-events-none"
            }
        },
        hideIndicator: {
            true: {
                indicator: "hidden"
            }
        },
        disableAnimation: {
            true: {
                content: "hidden data-[open=true]:block"
            },
            false: {
                indicator: "transition-transform",
                trigger: "transition-opacity"
            }
        },
        disableIndicatorAnimation: {
            true: {
                indicator: "transition-none"
            },
            false: {
                indicator: "rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90"
            }
        }
    },
    defaultVariants: {
        size: "md",
        radius: "lg",
        isDisabled: false,
        hideIndicator: false,
        disableIndicatorAnimation: false
    }
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-AXSF7SRE.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "divider": (()=>divider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/divider.ts
var divider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "shrink-0 bg-divider border-none",
    variants: {
        orientation: {
            horizontal: "w-full h-divider",
            vertical: "h-full w-divider"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-YVOWNNAA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "input": (()=>input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
// src/components/input.ts
var input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "group flex flex-col data-[hidden=true]:hidden",
        label: [
            "absolute",
            "z-10",
            "pointer-events-none",
            "origin-top-left",
            "flex-shrink-0",
            // Using RTL here as Tailwind CSS doesn't support `start` and `end` logical properties for transforms yet.
            "rtl:origin-top-right",
            "subpixel-antialiased",
            "block",
            "text-small",
            "text-foreground-500"
        ],
        mainWrapper: "h-full",
        inputWrapper: "relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3",
        innerWrapper: "inline-flex w-full items-center h-full box-border",
        input: [
            "w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none",
            "data-[has-start-content=true]:ps-1.5",
            "data-[has-end-content=true]:pe-1.5",
            "data-[type=color]:rounded-none",
            "file:cursor-pointer file:bg-transparent file:border-0",
            "autofill:bg-transparent bg-clip-text"
        ],
        clearButton: [
            "p-2",
            "-m-2",
            "z-10",
            "absolute",
            "end-3",
            "start-auto",
            "pointer-events-none",
            "appearance-none",
            "outline-none",
            "select-none",
            "opacity-0",
            "hover:!opacity-100",
            "cursor-pointer",
            "active:!opacity-70",
            "rounded-full",
            // focus ring
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        helperWrapper: "hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
        description: "text-tiny text-foreground-400",
        errorMessage: "text-tiny text-danger"
    },
    variants: {
        variant: {
            flat: {
                inputWrapper: [
                    "bg-default-100",
                    "data-[hover=true]:bg-default-200",
                    "group-data-[focus=true]:bg-default-100"
                ]
            },
            faded: {
                inputWrapper: [
                    "bg-default-100",
                    "border-medium",
                    "border-default-200",
                    "data-[hover=true]:border-default-400 focus-within:border-default-400"
                ],
                value: "group-data-[has-value=true]:text-default-foreground"
            },
            bordered: {
                inputWrapper: [
                    "border-medium",
                    "border-default-200",
                    "data-[hover=true]:border-default-400",
                    "group-data-[focus=true]:border-default-foreground"
                ]
            },
            underlined: {
                inputWrapper: [
                    "!px-1",
                    "!pb-0",
                    "!gap-0",
                    "relative",
                    "box-border",
                    "border-b-medium",
                    "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
                    "border-default-200",
                    "!rounded-none",
                    "hover:border-default-300",
                    "after:content-['']",
                    "after:w-0",
                    "after:origin-center",
                    "after:bg-default-foreground",
                    "after:absolute",
                    "after:left-1/2",
                    "after:-translate-x-1/2",
                    "after:-bottom-[2px]",
                    "after:h-[2px]",
                    "group-data-[focus=true]:after:w-full"
                ],
                innerWrapper: "pb-1",
                label: "group-data-[filled-within=true]:text-foreground"
            }
        },
        color: {
            default: {},
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            danger: {}
        },
        size: {
            sm: {
                label: "text-tiny",
                inputWrapper: "h-8 min-h-8 px-2 rounded-small",
                input: "text-small",
                clearButton: "text-medium"
            },
            md: {
                inputWrapper: "h-10 min-h-10 rounded-medium",
                input: "text-small",
                clearButton: "text-large"
            },
            lg: {
                label: "text-medium",
                inputWrapper: "h-12 min-h-12 rounded-large",
                input: "text-medium",
                clearButton: "text-large"
            }
        },
        radius: {
            none: {
                inputWrapper: "rounded-none"
            },
            sm: {
                inputWrapper: "rounded-small"
            },
            md: {
                inputWrapper: "rounded-medium"
            },
            lg: {
                inputWrapper: "rounded-large"
            },
            full: {
                inputWrapper: "rounded-full"
            }
        },
        labelPlacement: {
            outside: {
                mainWrapper: "flex flex-col"
            },
            "outside-left": {
                base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
                inputWrapper: "flex-1",
                mainWrapper: "flex flex-col",
                label: "relative text-foreground pe-2 ps-2 pointer-events-auto"
            },
            inside: {
                label: "cursor-text",
                inputWrapper: "flex-col items-start justify-center gap-0",
                innerWrapper: "group-data-[has-label=true]:items-end"
            }
        },
        fullWidth: {
            true: {
                base: "w-full"
            },
            false: {}
        },
        isClearable: {
            true: {
                input: "peer pe-6 input-search-cancel-button-none",
                clearButton: [
                    "peer-data-[filled=true]:pointer-events-auto",
                    "peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block",
                    "peer-data-[filled=true]:scale-100"
                ]
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled pointer-events-none",
                inputWrapper: "pointer-events-none",
                label: "pointer-events-none"
            }
        },
        isInvalid: {
            true: {
                label: "!text-danger",
                input: "!placeholder:text-danger !text-danger"
            }
        },
        isRequired: {
            true: {
                label: "after:content-['*'] after:text-danger after:ms-0.5"
            }
        },
        isMultiline: {
            true: {
                label: "relative",
                inputWrapper: "!h-auto",
                innerWrapper: "items-start group-data-[has-label=true]:items-start",
                input: "resize-none data-[hide-scroll=true]:scrollbar-hide",
                clearButton: "absolute top-2 right-2 rtl:right-auto rtl:left-2 z-10"
            }
        },
        disableAnimation: {
            true: {
                input: "transition-none",
                inputWrapper: "transition-none",
                label: "transition-none"
            },
            false: {
                inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
                label: [
                    "will-change-auto",
                    "!duration-200",
                    "!ease-out",
                    "motion-reduce:transition-none",
                    "transition-[transform,color,left,opacity]"
                ],
                clearButton: [
                    "scale-90",
                    "ease-out",
                    "duration-150",
                    "transition-[opacity,transform]",
                    "motion-reduce:transition-none",
                    "motion-reduce:scale-100"
                ]
            }
        }
    },
    defaultVariants: {
        variant: "flat",
        color: "default",
        size: "md",
        fullWidth: true,
        isDisabled: false,
        isMultiline: false
    },
    compoundVariants: [
        // flat & color
        {
            variant: "flat",
            color: "default",
            class: {
                input: "group-data-[has-value=true]:text-default-foreground"
            }
        },
        {
            variant: "flat",
            color: "primary",
            class: {
                inputWrapper: [
                    "bg-primary-100",
                    "data-[hover=true]:bg-primary-50",
                    "text-primary",
                    "group-data-[focus=true]:bg-primary-50",
                    "placeholder:text-primary"
                ],
                input: "placeholder:text-primary",
                label: "text-primary"
            }
        },
        {
            variant: "flat",
            color: "secondary",
            class: {
                inputWrapper: [
                    "bg-secondary-100",
                    "text-secondary",
                    "data-[hover=true]:bg-secondary-50",
                    "group-data-[focus=true]:bg-secondary-50",
                    "placeholder:text-secondary"
                ],
                input: "placeholder:text-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "flat",
            color: "success",
            class: {
                inputWrapper: [
                    "bg-success-100",
                    "text-success-600",
                    "dark:text-success",
                    "placeholder:text-success-600",
                    "dark:placeholder:text-success",
                    "data-[hover=true]:bg-success-50",
                    "group-data-[focus=true]:bg-success-50"
                ],
                input: "placeholder:text-success-600 dark:placeholder:text-success",
                label: "text-success-600 dark:text-success"
            }
        },
        {
            variant: "flat",
            color: "warning",
            class: {
                inputWrapper: [
                    "bg-warning-100",
                    "text-warning-600",
                    "dark:text-warning",
                    "placeholder:text-warning-600",
                    "dark:placeholder:text-warning",
                    "data-[hover=true]:bg-warning-50",
                    "group-data-[focus=true]:bg-warning-50"
                ],
                input: "placeholder:text-warning-600 dark:placeholder:text-warning",
                label: "text-warning-600 dark:text-warning"
            }
        },
        {
            variant: "flat",
            color: "danger",
            class: {
                inputWrapper: [
                    "bg-danger-100",
                    "text-danger",
                    "dark:text-danger-500",
                    "placeholder:text-danger",
                    "dark:placeholder:text-danger-500",
                    "data-[hover=true]:bg-danger-50",
                    "group-data-[focus=true]:bg-danger-50"
                ],
                input: "placeholder:text-danger dark:placeholder:text-danger-500",
                label: "text-danger dark:text-danger-500"
            }
        },
        // faded & color
        {
            variant: "faded",
            color: "primary",
            class: {
                label: "text-primary",
                inputWrapper: "data-[hover=true]:border-primary focus-within:border-primary"
            }
        },
        {
            variant: "faded",
            color: "secondary",
            class: {
                label: "text-secondary",
                inputWrapper: "data-[hover=true]:border-secondary focus-within:border-secondary"
            }
        },
        {
            variant: "faded",
            color: "success",
            class: {
                label: "text-success",
                inputWrapper: "data-[hover=true]:border-success focus-within:border-success"
            }
        },
        {
            variant: "faded",
            color: "warning",
            class: {
                label: "text-warning",
                inputWrapper: "data-[hover=true]:border-warning focus-within:border-warning"
            }
        },
        {
            variant: "faded",
            color: "danger",
            class: {
                label: "text-danger",
                inputWrapper: "data-[hover=true]:border-danger focus-within:border-danger"
            }
        },
        // underlined & color
        {
            variant: "underlined",
            color: "default",
            class: {
                input: "group-data-[has-value=true]:text-foreground"
            }
        },
        {
            variant: "underlined",
            color: "primary",
            class: {
                inputWrapper: "after:bg-primary",
                label: "text-primary"
            }
        },
        {
            variant: "underlined",
            color: "secondary",
            class: {
                inputWrapper: "after:bg-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "underlined",
            color: "success",
            class: {
                inputWrapper: "after:bg-success",
                label: "text-success"
            }
        },
        {
            variant: "underlined",
            color: "warning",
            class: {
                inputWrapper: "after:bg-warning",
                label: "text-warning"
            }
        },
        {
            variant: "underlined",
            color: "danger",
            class: {
                inputWrapper: "after:bg-danger",
                label: "text-danger"
            }
        },
        // bordered & color
        {
            variant: "bordered",
            color: "primary",
            class: {
                inputWrapper: "group-data-[focus=true]:border-primary",
                label: "text-primary"
            }
        },
        {
            variant: "bordered",
            color: "secondary",
            class: {
                inputWrapper: "group-data-[focus=true]:border-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "bordered",
            color: "success",
            class: {
                inputWrapper: "group-data-[focus=true]:border-success",
                label: "text-success"
            }
        },
        {
            variant: "bordered",
            color: "warning",
            class: {
                inputWrapper: "group-data-[focus=true]:border-warning",
                label: "text-warning"
            }
        },
        {
            variant: "bordered",
            color: "danger",
            class: {
                inputWrapper: "group-data-[focus=true]:border-danger",
                label: "text-danger"
            }
        },
        // labelPlacement=inside & default
        {
            labelPlacement: "inside",
            color: "default",
            class: {
                label: "group-data-[filled-within=true]:text-default-600"
            }
        },
        // labelPlacement=outside & default
        {
            labelPlacement: "outside",
            color: "default",
            class: {
                label: "group-data-[filled-within=true]:text-foreground"
            }
        },
        // radius-full & size
        {
            radius: "full",
            size: [
                "sm"
            ],
            class: {
                inputWrapper: "px-3"
            }
        },
        {
            radius: "full",
            size: "md",
            class: {
                inputWrapper: "px-4"
            }
        },
        {
            radius: "full",
            size: "lg",
            class: {
                inputWrapper: "px-5"
            }
        },
        // !disableAnimation & variant
        {
            disableAnimation: false,
            variant: [
                "faded",
                "bordered"
            ],
            class: {
                inputWrapper: "transition-colors motion-reduce:transition-none"
            }
        },
        {
            disableAnimation: false,
            variant: "underlined",
            class: {
                inputWrapper: "after:transition-width motion-reduce:after:transition-none"
            }
        },
        // flat & faded
        {
            variant: [
                "flat",
                "faded"
            ],
            class: {
                inputWrapper: [
                    // focus ring
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupDataFocusVisibleClasses"]
                ]
            }
        },
        // isInvalid & variant
        {
            isInvalid: true,
            variant: "flat",
            class: {
                inputWrapper: [
                    "!bg-danger-50",
                    "data-[hover=true]:!bg-danger-100",
                    "group-data-[focus=true]:!bg-danger-50"
                ]
            }
        },
        {
            isInvalid: true,
            variant: "bordered",
            class: {
                inputWrapper: "!border-danger group-data-[focus=true]:!border-danger"
            }
        },
        {
            isInvalid: true,
            variant: "underlined",
            class: {
                inputWrapper: "after:!bg-danger"
            }
        },
        // size & labelPlacement
        {
            labelPlacement: "inside",
            size: "sm",
            class: {
                inputWrapper: "h-12 py-1.5 px-3"
            }
        },
        {
            labelPlacement: "inside",
            size: "md",
            class: {
                inputWrapper: "h-14 py-2"
            }
        },
        {
            labelPlacement: "inside",
            size: "lg",
            class: {
                inputWrapper: "h-16 py-2.5 gap-0"
            }
        },
        // size & labelPlacement & variant=[faded, bordered]
        {
            labelPlacement: "inside",
            size: "sm",
            variant: [
                "bordered",
                "faded"
            ],
            class: {
                inputWrapper: "py-1"
            }
        },
        // labelPlacement=[inside,outside]
        {
            labelPlacement: [
                "inside",
                "outside"
            ],
            class: {
                label: [
                    "group-data-[filled-within=true]:pointer-events-auto"
                ]
            }
        },
        // labelPlacement=[outside] & isMultiline
        {
            labelPlacement: "outside",
            isMultiline: false,
            class: {
                base: "relative justify-end",
                label: [
                    "pb-0",
                    "z-20",
                    "top-1/2",
                    "-translate-y-1/2",
                    "group-data-[filled-within=true]:start-0"
                ]
            }
        },
        // labelPlacement=[inside]
        {
            labelPlacement: [
                "inside"
            ],
            class: {
                label: [
                    "group-data-[filled-within=true]:scale-85"
                ]
            }
        },
        // labelPlacement=[inside] & variant=flat
        {
            labelPlacement: [
                "inside"
            ],
            variant: "flat",
            class: {
                innerWrapper: "pb-0.5"
            }
        },
        // variant=underlined & size
        {
            variant: "underlined",
            size: "sm",
            class: {
                innerWrapper: "pb-1"
            }
        },
        {
            variant: "underlined",
            size: [
                "md",
                "lg"
            ],
            class: {
                innerWrapper: "pb-1.5"
            }
        },
        // inside & size
        {
            labelPlacement: "inside",
            size: [
                "sm",
                "md"
            ],
            class: {
                label: "text-small"
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: false,
            size: "sm",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: false,
            size: "md",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: false,
            size: "lg",
            class: {
                label: [
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]"
                ]
            }
        },
        // inside & size & [faded, bordered]
        {
            labelPlacement: "inside",
            variant: [
                "faded",
                "bordered"
            ],
            isMultiline: false,
            size: "sm",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: [
                "faded",
                "bordered"
            ],
            isMultiline: false,
            size: "md",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: [
                "faded",
                "bordered"
            ],
            isMultiline: false,
            size: "lg",
            class: {
                label: [
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]"
                ]
            }
        },
        // inside & size & underlined
        {
            labelPlacement: "inside",
            variant: "underlined",
            isMultiline: false,
            size: "sm",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: "underlined",
            isMultiline: false,
            size: "md",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: "underlined",
            size: "lg",
            isMultiline: false,
            class: {
                label: [
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]"
                ]
            }
        },
        // outside & size
        {
            labelPlacement: "outside",
            size: "sm",
            isMultiline: false,
            class: {
                label: [
                    "start-2",
                    "text-tiny",
                    "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]"
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]"
            }
        },
        {
            labelPlacement: "outside",
            size: "md",
            isMultiline: false,
            class: {
                label: [
                    "start-3",
                    "end-auto",
                    "text-small",
                    "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]"
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
            }
        },
        {
            labelPlacement: "outside",
            size: "lg",
            isMultiline: false,
            class: {
                label: [
                    "start-3",
                    "end-auto",
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]"
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]"
            }
        },
        // outside-left & size & hasHelper
        {
            labelPlacement: "outside-left",
            size: "sm",
            class: {
                label: "group-data-[has-helper=true]:pt-2"
            }
        },
        {
            labelPlacement: "outside-left",
            size: "md",
            class: {
                label: "group-data-[has-helper=true]:pt-3"
            }
        },
        {
            labelPlacement: "outside-left",
            size: "lg",
            class: {
                label: "group-data-[has-helper=true]:pt-4"
            }
        },
        // labelPlacement=[outside, outside-left] & isMultiline
        {
            labelPlacement: [
                "outside",
                "outside-left"
            ],
            isMultiline: true,
            class: {
                inputWrapper: "py-2"
            }
        },
        // isMultiline & labelPlacement="outside"
        {
            labelPlacement: "outside",
            isMultiline: true,
            class: {
                label: "pb-1.5"
            }
        },
        // isMultiline & labelPlacement="inside"
        {
            labelPlacement: "inside",
            isMultiline: true,
            class: {
                label: "pb-0.5",
                input: "pt-0"
            }
        },
        // isMultiline & !disableAnimation
        {
            isMultiline: true,
            disableAnimation: false,
            class: {
                input: "transition-height !duration-100 motion-reduce:transition-none"
            }
        },
        // text truncate labelPlacement=[inside,outside]
        {
            labelPlacement: [
                "inside",
                "outside"
            ],
            class: {
                label: [
                    "pe-2",
                    "max-w-full",
                    "text-ellipsis",
                    "overflow-hidden"
                ]
            }
        },
        // isMultiline & radius=full
        {
            isMultiline: true,
            radius: "full",
            class: {
                inputWrapper: "data-[has-multiple-rows=true]:rounded-large"
            }
        },
        // isClearable & isMultiline
        {
            isClearable: true,
            isMultiline: true,
            class: {
                clearButton: [
                    "group-data-[has-value=true]:opacity-70 group-data-[has-value=true]:block",
                    "group-data-[has-value=true]:scale-100",
                    "group-data-[has-value=true]:pointer-events-auto"
                ]
            }
        }
    ]
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-E257OVH3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "form": (()=>form)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/form.ts
var form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "flex flex-col gap-2 items-start"
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/variants.ts
__turbopack_context__.s({
    "colorVariants": (()=>colorVariants)
});
var solid = {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    danger: "bg-danger text-danger-foreground",
    foreground: "bg-foreground text-background"
};
var shadow = {
    default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
    primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
    secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
    success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
    warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
    danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
    foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
    default: "bg-transparent border-default text-foreground",
    primary: "bg-transparent border-primary text-primary",
    secondary: "bg-transparent border-secondary text-secondary",
    success: "bg-transparent border-success text-success",
    warning: "bg-transparent border-warning text-warning",
    danger: "bg-transparent border-danger text-danger",
    foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
    default: "bg-default/40 text-default-700",
    primary: "bg-primary/20 text-primary-600",
    secondary: "bg-secondary/20 text-secondary-600",
    success: "bg-success/20 text-success-700 dark:text-success",
    warning: "bg-warning/20 text-warning-700 dark:text-warning",
    danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
    foreground: "bg-foreground/10 text-foreground"
};
var faded = {
    default: "border-default bg-default-100 text-default-foreground",
    primary: "border-default bg-default-100 text-primary",
    secondary: "border-default bg-default-100 text-secondary",
    success: "border-default bg-default-100 text-success",
    warning: "border-default bg-default-100 text-warning",
    danger: "border-default bg-default-100 text-danger",
    foreground: "border-default bg-default-100 text-foreground"
};
var light = {
    default: "bg-transparent text-default-foreground",
    primary: "bg-transparent text-primary",
    secondary: "bg-transparent text-secondary",
    success: "bg-transparent text-success",
    warning: "bg-transparent text-warning",
    danger: "bg-transparent text-danger",
    foreground: "bg-transparent text-foreground"
};
var ghost = {
    default: "border-default text-default-foreground",
    primary: "border-primary text-primary",
    secondary: "border-secondary text-secondary",
    success: "border-success text-success",
    warning: "border-warning text-warning",
    danger: "border-danger text-danger",
    foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
    solid,
    shadow,
    bordered,
    flat,
    faded,
    light,
    ghost
};
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-3CSBIGJH.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "popover": (()=>popover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
;
// src/components/popover.ts
var popover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "z-0",
            "relative",
            "bg-transparent",
            // arrow
            "before:content-['']",
            "before:hidden",
            "before:z-[-1]",
            "before:absolute",
            "before:rotate-45",
            "before:w-2.5",
            "before:h-2.5",
            "before:rounded-sm",
            // visibility
            "data-[arrow=true]:before:block",
            // top
            "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
            "data-[placement=top]:before:left-1/2",
            "data-[placement=top]:before:-translate-x-1/2",
            "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
            "data-[placement=top-start]:before:left-3",
            "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
            "data-[placement=top-end]:before:right-3",
            // bottom
            "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
            "data-[placement=bottom]:before:left-1/2",
            "data-[placement=bottom]:before:-translate-x-1/2",
            "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
            "data-[placement=bottom-start]:before:left-3",
            "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
            "data-[placement=bottom-end]:before:right-3",
            // left
            "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
            "data-[placement=left]:before:top-1/2",
            "data-[placement=left]:before:-translate-y-1/2",
            "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
            "data-[placement=left-start]:before:top-1/4",
            "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
            "data-[placement=left-end]:before:bottom-1/4",
            // right
            "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
            "data-[placement=right]:before:top-1/2",
            "data-[placement=right]:before:-translate-y-1/2",
            "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
            "data-[placement=right-start]:before:top-1/4",
            "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
            "data-[placement=right-end]:before:bottom-1/4",
            // focus ring
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        content: [
            "z-10",
            "px-2.5",
            "py-1",
            "w-full",
            "inline-flex",
            "flex-col",
            "items-center",
            "justify-center",
            "box-border",
            "subpixel-antialiased",
            "outline-none",
            "box-border"
        ],
        trigger: [
            "z-10"
        ],
        backdrop: [
            "hidden"
        ],
        arrow: []
    },
    variants: {
        size: {
            sm: {
                content: "text-tiny"
            },
            md: {
                content: "text-small"
            },
            lg: {
                content: "text-medium"
            }
        },
        color: {
            default: {
                base: "before:bg-content1 before:shadow-small",
                content: "bg-content1"
            },
            foreground: {
                base: "before:bg-foreground",
                content: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.foreground
            },
            primary: {
                base: "before:bg-primary",
                content: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.primary
            },
            secondary: {
                base: "before:bg-secondary",
                content: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.secondary
            },
            success: {
                base: "before:bg-success",
                content: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.success
            },
            warning: {
                base: "before:bg-warning",
                content: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.warning
            },
            danger: {
                base: "before:bg-danger",
                content: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.danger
            }
        },
        radius: {
            none: {
                content: "rounded-none"
            },
            sm: {
                content: "rounded-small"
            },
            md: {
                content: "rounded-medium"
            },
            lg: {
                content: "rounded-large"
            },
            full: {
                content: "rounded-full"
            }
        },
        shadow: {
            none: {
                content: "shadow-none"
            },
            sm: {
                content: "shadow-small"
            },
            md: {
                content: "shadow-medium"
            },
            lg: {
                content: "shadow-large"
            }
        },
        backdrop: {
            transparent: {},
            opaque: {
                backdrop: "bg-overlay/50 backdrop-opacity-disabled"
            },
            blur: {
                backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
            }
        },
        triggerScaleOnOpen: {
            true: {
                trigger: [
                    "aria-expanded:scale-[0.97]",
                    "aria-expanded:opacity-70",
                    "subpixel-antialiased"
                ]
            },
            false: {}
        },
        disableAnimation: {
            true: {
                base: "animate-none"
            }
        },
        isTriggerDisabled: {
            true: {
                trigger: "opacity-disabled pointer-events-none"
            },
            false: {}
        }
    },
    defaultVariants: {
        color: "default",
        radius: "lg",
        size: "md",
        shadow: "md",
        backdrop: "transparent",
        triggerScaleOnOpen: true
    },
    compoundVariants: [
        // backdrop (opaque/blur)
        {
            backdrop: [
                "opaque",
                "blur"
            ],
            class: {
                backdrop: "block w-full h-full fixed inset-0 -z-30"
            }
        }
    ]
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-JZDLJPF2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dateInput": (()=>dateInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/date-input.ts
var dateInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "group flex flex-col",
        label: [
            "block subpixel-antialiased text-small text-default-600",
            // isRequired=true
            "group-data-[required=true]:after:content-['*'] group-data-[required=true]:after:text-danger group-data-[required=true]:after:ml-0.5",
            // isInValid=true
            "group-data-[invalid=true]:text-danger"
        ],
        inputWrapper: [
            "relative px-3 gap-3 w-full inline-flex flex-row items-center",
            "cursor-text tap-highlight-transparent shadow-sm"
        ],
        input: "flex h-full gap-x-0.5 w-full font-normal",
        innerWrapper: [
            "flex items-center text-default-400 w-full gap-x-2 h-6",
            // isInValid=true
            "group-data-[invalid=true]:text-danger"
        ],
        // this wraps the input and the start/end content
        segment: [
            "group first:-ml-0.5 [&:not(:first-child)]:-ml-1 px-0.5 my-auto box-content tabular-nums text-start",
            "inline-block outline-none focus:shadow-sm rounded-md",
            "text-foreground-500 data-[editable=true]:text-foreground",
            "data-[editable=true]:data-[placeholder=true]:text-foreground-500",
            // isInvalid=true
            "data-[invalid=true]:text-danger-300 data-[invalid=true]:data-[editable=true]:text-danger",
            "data-[invalid=true]:focus:bg-danger-400/50 dark:data-[invalid=true]:focus:bg-danger-400/20",
            "data-[invalid=true]:data-[editable=true]:focus:text-danger"
        ],
        helperWrapper: "hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
        description: "text-tiny text-foreground-400",
        errorMessage: "text-tiny text-danger"
    },
    variants: {
        variant: {
            flat: {
                inputWrapper: [
                    "bg-default-100",
                    "hover:bg-default-200",
                    "focus-within:hover:bg-default-100",
                    // isInvalid=true
                    "group-data-[invalid=true]:bg-danger-50",
                    "group-data-[invalid=true]:hover:bg-danger-100",
                    "group-data-[invalid=true]:focus-within:hover:bg-danger-50"
                ]
            },
            faded: {
                inputWrapper: [
                    "bg-default-100",
                    "border-medium",
                    "border-default-200",
                    "hover:border-default-400",
                    // isInvalid=true
                    "group-data-[invalid=true]:bg-danger-50",
                    "group-data-[invalid=true]:hover:bg-danger-100",
                    "group-data-[invalid=true]:focus-within:hover:bg-danger-50"
                ]
            },
            bordered: {
                inputWrapper: [
                    "border-medium",
                    "border-default-200",
                    "hover:border-default-400",
                    "focus-within:border-default-foreground",
                    "focus-within:hover:border-default-foreground",
                    // isInvalid=true
                    "group-data-[invalid=true]:border-danger",
                    "group-data-[invalid=true]:hover:border-danger",
                    "group-data-[invalid=true]:focus-within:hover:border-danger"
                ]
            },
            underlined: {
                inputWrapper: [
                    "px-1",
                    "pb-1",
                    "gap-0",
                    "relative",
                    "box-border",
                    "border-b-medium",
                    "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
                    "border-default-200",
                    "!rounded-none",
                    "hover:border-default-300",
                    "after:content-['']",
                    "after:w-0",
                    "after:origin-center",
                    "after:bg-default-foreground",
                    "after:absolute",
                    "after:left-1/2",
                    "after:-translate-x-1/2",
                    "after:-bottom-[2px]",
                    "after:h-[2px]",
                    "focus-within:after:w-full",
                    // isInvalid=true
                    "group-data-[invalid=true]:after:bg-danger"
                ]
            }
        },
        color: {
            default: {
                segment: "focus:bg-default-400/50 data-[editable=true]:focus:text-default-foreground"
            },
            primary: {
                segment: "focus:bg-primary-400/50 data-[editable=true]:focus:text-primary"
            },
            secondary: {
                segment: "focus:bg-secondary-400/50 data-[editable=true]:focus:text-secondary"
            },
            success: {
                segment: "focus:bg-success-400/50 dark:focus:bg-success-400/20 data-[editable=true]:focus:text-success"
            },
            warning: {
                segment: "focus:bg-warning-400/50 dark:focus:bg-warning-400/20 data-[editable=true]:focus:text-warning"
            },
            danger: {
                segment: "focus:bg-danger-400/50 dark:focus:bg-danger-400/20 data-[editable=true]:focus:text-danger"
            }
        },
        size: {
            sm: {
                label: "text-tiny",
                input: "text-small",
                inputWrapper: "h-8 min-h-8 px-2 rounded-small"
            },
            md: {
                input: "text-small",
                inputWrapper: "h-10 min-h-10 rounded-medium",
                clearButton: "text-large"
            },
            lg: {
                label: "text-medium",
                input: "text-medium",
                inputWrapper: "h-12 min-h-12 rounded-large"
            }
        },
        radius: {
            none: {
                inputWrapper: "rounded-none"
            },
            sm: {
                inputWrapper: "rounded-small"
            },
            md: {
                inputWrapper: "rounded-medium"
            },
            lg: {
                inputWrapper: "rounded-large"
            },
            full: {
                inputWrapper: "rounded-full"
            }
        },
        labelPlacement: {
            outside: {
                base: "flex flex-col data-[has-helper=true]:pb-[calc(theme(fontSize.tiny)_+8px)] gap-y-1.5",
                label: "w-full text-foreground",
                helperWrapper: "absolute top-[calc(100%_+_2px)] start-0"
            },
            "outside-left": {
                base: "flex-row items-center data-[has-helper=true]:pb-[calc(theme(fontSize.tiny)_+_8px)] gap-x-2 flex-nowrap",
                label: "relative text-foreground",
                inputWrapper: "relative flex-1",
                helperWrapper: "absolute top-[calc(100%_+_2px)] start-0"
            },
            inside: {
                label: "w-full text-tiny cursor-text",
                inputWrapper: "flex-col items-start justify-center gap-0"
            }
        },
        fullWidth: {
            true: {
                base: "w-full",
                inputWrapper: "w-full"
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled pointer-events-none",
                inputWrapper: "pointer-events-none",
                label: "pointer-events-none"
            }
        },
        disableAnimation: {
            true: {
                label: "transition-none",
                input: "transition-none",
                inputWrapper: "transition-none"
            },
            false: {
                label: [
                    "!ease-out",
                    "!duration-200",
                    "will-change-auto",
                    "motion-reduce:transition-none",
                    "transition-[color,opacity]"
                ],
                inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
                segment: "transition-colors motion-reduce:transition-none"
            }
        }
    },
    defaultVariants: {
        variant: "flat",
        color: "default",
        size: "md",
        fullWidth: true,
        isDisabled: false
    },
    compoundVariants: [
        // flat & color
        {
            variant: "flat",
            color: "primary",
            class: {
                innerWrapper: "text-primary",
                inputWrapper: [
                    "bg-primary-100",
                    "hover:bg-primary-50",
                    "focus-within:bg-primary-50"
                ],
                segment: "text-primary-300 data-[editable=true]:data-[placeholder=true]:text-primary-300 data-[editable=true]:text-primary",
                label: "text-primary"
            }
        },
        {
            variant: "flat",
            color: "secondary",
            class: {
                innerWrapper: "text-secondary",
                inputWrapper: [
                    "bg-secondary-100",
                    "hover:bg-secondary-50",
                    "focus-within:bg-secondary-50"
                ],
                segment: "text-secondary-300 data-[editable=true]:data-[placeholder=true]:text-secondary-300 data-[editable=true]:text-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "flat",
            color: "success",
            class: {
                innerWrapper: "text-success-600 dark:text-success",
                inputWrapper: [
                    "bg-success-100",
                    "hover:bg-success-50",
                    "focus-within:bg-success-50"
                ],
                segment: "text-success-400 data-[editable=true]:data-[placeholder=true]:text-success-400 data-[editable=true]:text-success-600 data-[editable=true]:focus:text-success-600",
                label: "text-success-600 dark:text-success"
            }
        },
        {
            variant: "flat",
            color: "warning",
            class: {
                innerWrapper: "text-warning-600 dark:text-warning",
                inputWrapper: [
                    "bg-warning-100",
                    "hover:bg-warning-50",
                    "focus-within:bg-warning-50"
                ],
                segment: "text-warning-400 data-[editable=true]:data-[placeholder=true]:text-warning-400 data-[editable=true]:text-warning-600 data-[editable=true]:focus:text-warning-600",
                label: "text-warning-600 dark:text-warning"
            }
        },
        {
            variant: "flat",
            color: "danger",
            class: {
                innerWrapper: "text-danger",
                inputWrapper: [
                    "bg-danger-100",
                    "hover:bg-danger-50",
                    "focus-within:bg-danger-50"
                ],
                segment: "text-danger-300 data-[editable=true]:data-[placeholder=true]:text-danger-300 data-[editable=true]:text-danger",
                label: "text-danger"
            }
        },
        // faded & color
        {
            variant: "faded",
            color: "primary",
            class: {
                innerWrapper: "text-primary",
                inputWrapper: [
                    "hover:border-primary",
                    "focus-within:border-primary",
                    "focus-within:hover:border-primary"
                ],
                label: "text-primary"
            }
        },
        {
            variant: "faded",
            color: "secondary",
            class: {
                innerWrapper: "text-secondary",
                inputWrapper: [
                    "hover:border-secondary",
                    "focus-within:border-secondary",
                    "focus-within:hover:border-secondary"
                ],
                label: "text-secondary"
            }
        },
        {
            variant: "faded",
            color: "success",
            class: {
                innerWrapper: "text-success",
                inputWrapper: [
                    "hover:border-success",
                    "focus-within:border-success",
                    "focus-within:hover:border-success"
                ],
                label: "text-success"
            }
        },
        {
            variant: "faded",
            color: "warning",
            class: {
                innerWrapper: "text-warning",
                inputWrapper: [
                    "hover:border-warning",
                    "focus-within:border-warning",
                    "focus-within:hover:border-warning"
                ],
                label: "text-warning"
            }
        },
        {
            variant: "faded",
            color: "danger",
            class: {
                innerWrapper: "text-danger",
                inputWrapper: [
                    "hover:border-danger",
                    "focus-within:border-danger",
                    "focus-within:hover:border-danger"
                ],
                label: "text-danger"
            }
        },
        // bordered & color
        {
            variant: "bordered",
            color: "primary",
            class: {
                innerWrapper: "text-primary",
                inputWrapper: [
                    "focus-within:border-primary",
                    "focus-within:hover:border-primary"
                ],
                label: "text-primary"
            }
        },
        {
            variant: "bordered",
            color: "secondary",
            class: {
                innerWrapper: "text-secondary",
                inputWrapper: [
                    "focus-within:border-secondary",
                    "focus-within:hover:border-secondary"
                ],
                label: "text-secondary"
            }
        },
        {
            variant: "bordered",
            color: "success",
            class: {
                innerWrapper: "text-success",
                inputWrapper: [
                    "focus-within:border-success",
                    "focus-within:hover:border-success"
                ],
                label: "text-success"
            }
        },
        {
            variant: "bordered",
            color: "warning",
            class: {
                innerWrapper: "text-warning",
                inputWrapper: [
                    "focus-within:border-warning",
                    "focus-within:hover:border-warning"
                ],
                label: "text-warning"
            }
        },
        {
            variant: "bordered",
            color: "danger",
            class: {
                innerWrapper: "text-danger",
                inputWrapper: [
                    "focus-within:border-danger",
                    "focus-within:hover:border-danger"
                ],
                label: "text-danger"
            }
        },
        // underlined & color
        {
            variant: "underlined",
            color: "primary",
            class: {
                innerWrapper: "text-primary",
                inputWrapper: "after:bg-primary",
                label: "text-primary"
            }
        },
        {
            variant: "underlined",
            color: "secondary",
            class: {
                innerWrapper: "text-secondary",
                inputWrapper: "after:bg-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "underlined",
            color: "success",
            class: {
                innerWrapper: "text-success",
                inputWrapper: "after:bg-success",
                label: "text-success"
            }
        },
        {
            variant: "underlined",
            color: "warning",
            class: {
                innerWrapper: "text-warning",
                inputWrapper: "after:bg-warning",
                label: "text-warning"
            }
        },
        {
            variant: "underlined",
            color: "danger",
            class: {
                innerWrapper: "text-danger",
                inputWrapper: "after:bg-danger",
                label: "text-danger"
            }
        },
        // size & labelPlacement
        {
            labelPlacement: "inside",
            size: "sm",
            class: {
                inputWrapper: "h-12 py-1.5 px-3"
            }
        },
        {
            labelPlacement: "inside",
            size: "md",
            class: {
                inputWrapper: "h-14 py-2"
            }
        },
        {
            labelPlacement: "inside",
            size: "lg",
            class: {
                label: "text-medium",
                inputWrapper: "h-16 py-2.5 gap-0"
            }
        },
        // !disableAnimation & variant
        {
            disableAnimation: false,
            variant: [
                "faded",
                "bordered"
            ],
            class: {
                inputWrapper: "transition-colors motion-reduce:transition-none"
            }
        },
        {
            disableAnimation: false,
            variant: "underlined",
            class: {
                inputWrapper: "after:transition-width motion-reduce:after:transition-none"
            }
        }
    ]
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-QFGVVQRM.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "datePicker": (()=>datePicker),
    "dateRangePicker": (()=>dateRangePicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/date-picker.ts
var datePicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "group w-full",
        selectorButton: "-mx-2 text-inherit",
        selectorIcon: "text-lg text-inherit pointer-events-none flex-shrink-0",
        popoverContent: "p-0 w-full",
        calendar: "w-[calc(var(--visible-months)_*_var(--calendar-width))] shadow-none",
        calendarContent: "w-[calc(var(--visible-months)_*_var(--calendar-width))]",
        timeInputLabel: "font-medium",
        timeInput: "px-5 pb-4 flex-wrap gap-x-6"
    }
});
var dateRangePicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    extend: datePicker,
    slots: {
        calendar: "group",
        bottomContent: "flex flex-col gap-y-2",
        timeInputWrapper: "flex flex-col group-data-[has-multiple-months=true]:flex-row",
        separator: "-mx-1 text-inherit"
    }
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNG7ZRCV.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "button": (()=>button),
    "buttonGroup": (()=>buttonGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
;
// src/components/button.ts
var button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: [
        "z-0",
        "group",
        "relative",
        "inline-flex",
        "items-center",
        "justify-center",
        "box-border",
        "appearance-none",
        "outline-none",
        "select-none",
        "whitespace-nowrap",
        "min-w-max",
        "font-normal",
        "subpixel-antialiased",
        "overflow-hidden",
        "tap-highlight-transparent",
        "transform-gpu data-[pressed=true]:scale-[0.97]",
        // focus ring
        ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
    ],
    variants: {
        variant: {
            solid: "",
            bordered: "border-medium bg-transparent",
            light: "bg-transparent",
            flat: "",
            faded: "border-medium",
            shadow: "",
            ghost: "border-medium bg-transparent"
        },
        size: {
            sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
            md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
            lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            success: "",
            warning: "",
            danger: ""
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-small",
            md: "rounded-medium",
            lg: "rounded-large",
            full: "rounded-full"
        },
        fullWidth: {
            true: "w-full"
        },
        isDisabled: {
            true: "opacity-disabled pointer-events-none"
        },
        isInGroup: {
            true: "[&:not(:first-child):not(:last-child)]:rounded-none"
        },
        isIconOnly: {
            true: "px-0 !gap-0",
            false: "[&>svg]:max-w-[theme(spacing.8)]"
        },
        disableAnimation: {
            true: "!transition-none data-[pressed=true]:scale-100",
            false: "transition-transform-colors-opacity motion-reduce:transition-none"
        }
    },
    defaultVariants: {
        size: "md",
        variant: "solid",
        color: "default",
        fullWidth: false,
        isDisabled: false,
        isInGroup: false
    },
    compoundVariants: [
        // solid / color
        {
            variant: "solid",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.default
        },
        {
            variant: "solid",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.primary
        },
        {
            variant: "solid",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.secondary
        },
        {
            variant: "solid",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.success
        },
        {
            variant: "solid",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.warning
        },
        {
            variant: "solid",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.danger
        },
        // shadow / color
        {
            variant: "shadow",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.default
        },
        {
            variant: "shadow",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.primary
        },
        {
            variant: "shadow",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.secondary
        },
        {
            variant: "shadow",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.success
        },
        {
            variant: "shadow",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.warning
        },
        {
            variant: "shadow",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.danger
        },
        // bordered / color
        {
            variant: "bordered",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.default
        },
        {
            variant: "bordered",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.primary
        },
        {
            variant: "bordered",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.secondary
        },
        {
            variant: "bordered",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.success
        },
        {
            variant: "bordered",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.warning
        },
        {
            variant: "bordered",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.danger
        },
        // flat / color
        {
            variant: "flat",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.default
        },
        {
            variant: "flat",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.primary
        },
        {
            variant: "flat",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.secondary
        },
        {
            variant: "flat",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.success
        },
        {
            variant: "flat",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.warning
        },
        {
            variant: "flat",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.danger
        },
        // faded / color
        {
            variant: "faded",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.default
        },
        {
            variant: "faded",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.primary
        },
        {
            variant: "faded",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.secondary
        },
        {
            variant: "faded",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.success
        },
        {
            variant: "faded",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.warning
        },
        {
            variant: "faded",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.danger
        },
        // light / color
        {
            variant: "light",
            color: "default",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.default,
                "data-[hover=true]:bg-default/40"
            ]
        },
        {
            variant: "light",
            color: "primary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.primary,
                "data-[hover=true]:bg-primary/20"
            ]
        },
        {
            variant: "light",
            color: "secondary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.secondary,
                "data-[hover=true]:bg-secondary/20"
            ]
        },
        {
            variant: "light",
            color: "success",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.success,
                "data-[hover=true]:bg-success/20"
            ]
        },
        {
            variant: "light",
            color: "warning",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.warning,
                "data-[hover=true]:bg-warning/20"
            ]
        },
        {
            variant: "light",
            color: "danger",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.danger,
                "data-[hover=true]:bg-danger/20"
            ]
        },
        // ghost / color
        {
            variant: "ghost",
            color: "default",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.default,
                "data-[hover=true]:!bg-default"
            ]
        },
        {
            variant: "ghost",
            color: "primary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.primary,
                "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "secondary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.secondary,
                "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "success",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.success,
                "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "warning",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.warning,
                "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "danger",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.danger,
                "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"
            ]
        },
        // isInGroup / radius / size <-- radius not provided
        {
            isInGroup: true,
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        },
        {
            isInGroup: true,
            size: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small"
        },
        {
            isInGroup: true,
            size: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        },
        {
            isInGroup: true,
            size: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large"
        },
        {
            isInGroup: true,
            isRounded: true,
            class: "rounded-none first:rounded-s-full last:rounded-e-full"
        },
        // isInGroup / radius <-- radius provided
        {
            isInGroup: true,
            radius: "none",
            class: "rounded-none first:rounded-s-none last:rounded-e-none"
        },
        {
            isInGroup: true,
            radius: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small"
        },
        {
            isInGroup: true,
            radius: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        },
        {
            isInGroup: true,
            radius: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large"
        },
        {
            isInGroup: true,
            radius: "full",
            class: "rounded-none first:rounded-s-full last:rounded-e-full"
        },
        // isInGroup / bordered / ghost
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "default",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].default
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "primary",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].primary
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "secondary",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].secondary
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "success",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].success
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "warning",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].warning
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "danger",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].danger
        },
        {
            isIconOnly: true,
            size: "sm",
            class: "min-w-8 w-8 h-8"
        },
        {
            isIconOnly: true,
            size: "md",
            class: "min-w-10 w-10 h-10"
        },
        {
            isIconOnly: true,
            size: "lg",
            class: "min-w-12 w-12 h-12"
        },
        // variant / hover
        {
            variant: [
                "solid",
                "faded",
                "flat",
                "bordered",
                "shadow"
            ],
            class: "data-[hover=true]:opacity-hover"
        }
    ]
});
var buttonGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "inline-flex items-center justify-center h-auto",
    variants: {
        fullWidth: {
            true: "w-full"
        }
    },
    defaultVariants: {
        fullWidth: false
    }
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-LXB7QLNC.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "spinner": (()=>spinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/spinner.ts
var spinner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "relative inline-flex flex-col gap-2 items-center justify-center",
        wrapper: "relative flex",
        label: "text-foreground dark:text-foreground-dark font-regular",
        circle1: "absolute w-full h-full rounded-full",
        circle2: "absolute w-full h-full rounded-full",
        dots: "relative rounded-full mx-auto",
        spinnerBars: [
            "absolute",
            "animate-fade-out",
            "rounded-full",
            "w-[25%]",
            "h-[8%]",
            "left-[calc(37.5%)]",
            "top-[calc(46%)]",
            "spinner-bar-animation"
        ]
    },
    variants: {
        size: {
            sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                dots: "size-1",
                label: "text-small"
            },
            md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                dots: "size-1.5",
                label: "text-medium"
            },
            lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                dots: "size-2",
                label: "text-large"
            }
        },
        color: {
            current: {
                circle1: "border-b-current",
                circle2: "border-b-current",
                dots: "bg-current",
                spinnerBars: "bg-current"
            },
            white: {
                circle1: "border-b-white",
                circle2: "border-b-white",
                dots: "bg-white",
                spinnerBars: "bg-white"
            },
            default: {
                circle1: "border-b-default",
                circle2: "border-b-default",
                dots: "bg-default",
                spinnerBars: "bg-default"
            },
            primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary",
                dots: "bg-primary",
                spinnerBars: "bg-primary"
            },
            secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary",
                dots: "bg-secondary",
                spinnerBars: "bg-secondary"
            },
            success: {
                circle1: "border-b-success",
                circle2: "border-b-success",
                dots: "bg-success",
                spinnerBars: "bg-success"
            },
            warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning",
                dots: "bg-warning",
                spinnerBars: "bg-warning"
            },
            danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger",
                dots: "bg-danger",
                spinnerBars: "bg-danger"
            }
        },
        labelColor: {
            foreground: {
                label: "text-foreground"
            },
            primary: {
                label: "text-primary"
            },
            secondary: {
                label: "text-secondary"
            },
            success: {
                label: "text-success"
            },
            warning: {
                label: "text-warning"
            },
            danger: {
                label: "text-danger"
            }
        },
        variant: {
            default: {
                circle1: [
                    "animate-spinner-ease-spin",
                    "border-solid",
                    "border-t-transparent",
                    "border-l-transparent",
                    "border-r-transparent"
                ],
                circle2: [
                    "opacity-75",
                    "animate-spinner-linear-spin",
                    "border-dotted",
                    "border-t-transparent",
                    "border-l-transparent",
                    "border-r-transparent"
                ]
            },
            gradient: {
                circle1: [
                    "border-0",
                    "bg-gradient-to-b",
                    "from-transparent",
                    "via-transparent",
                    "to-primary",
                    "animate-spinner-linear-spin",
                    "[animation-duration:1s]",
                    "[-webkit-mask:radial-gradient(closest-side,rgba(0,0,0,0.0)calc(100%-3px),rgba(0,0,0,1)calc(100%-3px))]"
                ],
                circle2: [
                    "hidden"
                ]
            },
            wave: {
                wrapper: "translate-y-3/4",
                dots: [
                    "animate-sway",
                    "spinner-dot-animation"
                ]
            },
            dots: {
                wrapper: "translate-y-2/4",
                dots: [
                    "animate-blink",
                    "spinner-dot-blink-animation"
                ]
            },
            spinner: {},
            simple: {
                wrapper: "text-foreground h-5 w-5 animate-spin",
                circle1: "opacity-25",
                circle2: "opacity-75"
            }
        }
    },
    defaultVariants: {
        size: "md",
        color: "primary",
        labelColor: "foreground",
        variant: "default"
    },
    compoundVariants: [
        {
            variant: "gradient",
            color: "current",
            class: {
                circle1: "to-current"
            }
        },
        {
            variant: "gradient",
            color: "white",
            class: {
                circle1: "to-white"
            }
        },
        {
            variant: "gradient",
            color: "default",
            class: {
                circle1: "to-default"
            }
        },
        {
            variant: "gradient",
            color: "primary",
            class: {
                circle1: "to-primary"
            }
        },
        {
            variant: "gradient",
            color: "secondary",
            class: {
                circle1: "to-secondary"
            }
        },
        {
            variant: "gradient",
            color: "success",
            class: {
                circle1: "to-success"
            }
        },
        {
            variant: "gradient",
            color: "warning",
            class: {
                circle1: "to-warning"
            }
        },
        {
            variant: "gradient",
            color: "danger",
            class: {
                circle1: "to-danger"
            }
        },
        {
            variant: "wave",
            size: "sm",
            class: {
                wrapper: "w-5 h-5"
            }
        },
        {
            variant: "wave",
            size: "md",
            class: {
                wrapper: "w-8 h-8"
            }
        },
        {
            variant: "wave",
            size: "lg",
            class: {
                wrapper: "w-12 h-12"
            }
        },
        {
            variant: "dots",
            size: "sm",
            class: {
                wrapper: "w-5 h-5"
            }
        },
        {
            variant: "dots",
            size: "md",
            class: {
                wrapper: "w-8 h-8"
            }
        },
        {
            variant: "dots",
            size: "lg",
            class: {
                wrapper: "w-12 h-12"
            }
        },
        // Simple variants
        // Size
        {
            variant: "simple",
            size: "sm",
            class: {
                wrapper: "w-5 h-5"
            }
        },
        {
            variant: "simple",
            size: "md",
            class: {
                wrapper: "w-8 h-8"
            }
        },
        {
            variant: "simple",
            size: "lg",
            class: {
                wrapper: "w-12 h-12"
            }
        },
        // Color
        {
            variant: "simple",
            color: "current",
            class: {
                wrapper: "text-current"
            }
        },
        {
            variant: "simple",
            color: "white",
            class: {
                wrapper: "text-white"
            }
        },
        {
            variant: "simple",
            color: "default",
            class: {
                wrapper: "text-default"
            }
        },
        {
            variant: "simple",
            color: "primary",
            class: {
                wrapper: "text-primary"
            }
        },
        {
            variant: "simple",
            color: "secondary",
            class: {
                wrapper: "text-secondary"
            }
        },
        {
            variant: "simple",
            color: "success",
            class: {
                wrapper: "text-success"
            }
        },
        {
            variant: "simple",
            color: "warning",
            class: {
                wrapper: "text-warning"
            }
        },
        {
            variant: "simple",
            color: "danger",
            class: {
                wrapper: "text-danger"
            }
        }
    ]
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-46U6G7UJ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GIXI35A3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-GIXI35A3.mjs [app-client] (ecmascript)");
// src/utils/cn.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
var twMerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendTailwindMerge"])({
    extend: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GIXI35A3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMergeConfig"]
});
function cn(...inputs) {
    return twMerge((0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputs));
}
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-HJJPTWXW.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calendar": (()=>calendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
// src/components/calendar.ts
var calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "relative w-fit max-w-full shadow-small inline-block overflow-y-hidden",
            "rounded-large overflow-x-auto bg-default-50 dark:bg-background",
            "w-[calc(var(--visible-months)_*_var(--calendar-width))]"
        ],
        prevButton: [
            "order-1"
        ],
        nextButton: [
            "order-3"
        ],
        headerWrapper: [
            "px-4 py-2 flex items-center justify-between gap-2 bg-content1 overflow-hidden rtl:flex-row-reverse",
            "[&_.chevron-icon]:flex-none",
            // month/year picker wrapper
            "after:content-['']",
            "after:bg-content1 origin-top",
            "after:w-full after:h-0",
            "after:absolute after:top-0 after:left-0"
        ],
        header: "flex w-full items-center justify-center gap-2 z-10 order-2",
        title: "text-default-500 text-small font-medium",
        content: "w-[calc(var(--visible-months)_*_var(--calendar-width))]",
        gridWrapper: "flex max-w-full overflow-hidden pb-2 h-auto relative",
        grid: "w-full border-collapse z-0",
        gridHeader: "bg-content1 shadow-[0px_20px_20px_0px_rgb(0_0_0/0.05)]",
        gridHeaderRow: "px-4 pb-2 flex justify-center text-default-400",
        gridHeaderCell: "flex w-8 justify-center items-center font-medium text-small",
        gridBody: "",
        gridBodyRow: "flex justify-center items-center first:mt-2",
        cell: "py-0.5 px-0",
        cellButton: [
            "w-8 h-8 flex items-center text-foreground justify-center rounded-full",
            "box-border appearance-none select-none whitespace-nowrap font-normal",
            "subpixel-antialiased overflow-hidden tap-highlight-transparent",
            "data-[disabled=true]:text-default-300",
            "data-[disabled=true]:cursor-default",
            "data-[readonly=true]:cursor-default",
            "data-[disabled=true]:transition-none",
            "data-[unavailable=true]:text-default-300",
            "data-[unavailable=true]:cursor-default",
            "data-[unavailable=true]:line-through",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        pickerWrapper: "absolute inset-x-0 top-0 flex w-full h-[var(--picker-height)] justify-center opacity-0 pointer-events-none",
        pickerMonthList: "items-start",
        pickerYearList: "items-center",
        pickerHighlight: "h-8 bg-default-200 absolute w-[calc(100%_-_16px)] rounded-medium z-0 top-1/2 -translate-y-1/2 pointer-events-none",
        pickerItem: [
            "w-full flex text-foreground items-center h-8 leading-[32px] min-h-[32px] snap-center text-large z-20",
            "data-[pressed=true]:opacity-50",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        helperWrapper: "px-4 pb-2 max-w-[270px] flex justify-start flex-wrap items-center",
        errorMessage: "text-small text-danger break-words max-w-full"
    },
    variants: {
        color: {
            foreground: {},
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            danger: {}
        },
        // @internal
        isRange: {
            true: {
                cellButton: [
                    // base
                    "relative",
                    "overflow-visible",
                    // before pseudo element
                    "before:content-[''] before:absolute before:inset-0 before:z-[-1] before:rounded-none",
                    // hide before pseudo element when the selected cell is outside the month
                    "data-[outside-month=true]:before:hidden",
                    "data-[selected=true]:data-[range-selection=true]:data-[outside-month=true]:bg-transparent",
                    "data-[selected=true]:data-[range-selection=true]:data-[outside-month=true]:text-default-300",
                    // middle
                    // "data-[selected=true]:data-[range-selection=true]:bg-transparent",
                    // start (pseudo)
                    "data-[range-start=true]:before:rounded-s-full",
                    "data-[selection-start=true]:before:rounded-s-full",
                    // end (pseudo)
                    "data-[range-end=true]:before:rounded-e-full",
                    "data-[selection-end=true]:before:rounded-e-full",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-full",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-full"
                ]
            },
            false: {}
        },
        hideDisabledDates: {
            true: {
                cellButton: "data-[disabled=true]:data-[outside-month=true]:opacity-0"
            },
            false: {}
        },
        isHeaderWrapperExpanded: {
            true: {
                headerWrapper: [
                    "[&_.chevron-icon]:rotate-180",
                    "after:h-full",
                    "after:z-0"
                ],
                pickerWrapper: "opacity-100 pointer-events-auto z-10",
                gridWrapper: "h-[var(--picker-height)] overflow-y-hidden",
                grid: "opacity-0 pointer-events-none",
                nextButton: "opacity-0 pointer-events-none",
                prevButton: "opacity-0 pointer-events-none"
            },
            false: {}
        },
        showMonthAndYearPickers: {
            true: {
                base: "[--picker-height:224px]",
                header: "h-8 bg-default-100 rounded-full"
            },
            false: {}
        },
        showShadow: {
            true: {
                cellButton: "data-[selected=true]:shadow-md"
            },
            false: {
                cellButton: "shadow-none data-[selected=true]:shadow-none"
            }
        },
        disableAnimation: {
            true: {
                cellButton: "transition-none"
            },
            false: {
                headerWrapper: [
                    "[&_.chevron-icon]:transition-transform",
                    "after:transition-height"
                ],
                grid: "transition-opacity",
                cellButton: [
                    "origin-center transition-[transform,background-color,color] !duration-150"
                ],
                pickerWrapper: "transition-opacity !duration-250",
                pickerItem: "transition-opacity"
            }
        },
        isRTL: {
            true: {
                nextButton: "order-1",
                prevButton: "order-3"
            },
            false: {}
        }
    },
    defaultVariants: {
        color: "primary",
        showShadow: false,
        hideDisabledDates: false,
        showMonthAndYearPickers: false,
        isRTL: false
    },
    compoundVariants: [
        // !isRange & colors --> Calendar
        {
            isRange: false,
            color: "foreground",
            class: {
                cellButton: [
                    "data-[hover=true]:bg-default-200",
                    "data-[selected=true]:bg-foreground",
                    "data-[selected=true]:text-background",
                    "data-[hover=true]:bg-foreground-200",
                    "data-[hover=true]:text-foreground-600",
                    "data-[selected=true]:data-[hover=true]:bg-foreground",
                    "data-[selected=true]:data-[hover=true]:text-background"
                ]
            }
        },
        {
            isRange: false,
            color: "primary",
            class: {
                cellButton: [
                    "data-[selected=true]:bg-primary",
                    "data-[selected=true]:text-primary-foreground",
                    "data-[hover=true]:bg-primary-50",
                    "data-[hover=true]:text-primary-400",
                    "data-[selected=true]:data-[hover=true]:bg-primary",
                    "data-[selected=true]:data-[hover=true]:text-primary-foreground"
                ]
            }
        },
        {
            isRange: false,
            color: "secondary",
            class: {
                cellButton: [
                    "data-[selected=true]:bg-secondary",
                    "data-[selected=true]:text-secondary-foreground",
                    "data-[hover=true]:bg-secondary-50",
                    "data-[hover=true]:text-secondary-400",
                    "data-[selected=true]:data-[hover=true]:bg-secondary",
                    "data-[selected=true]:data-[hover=true]:text-secondary-foreground"
                ]
            }
        },
        {
            isRange: false,
            color: "success",
            class: {
                cellButton: [
                    "data-[selected=true]:bg-success",
                    "data-[selected=true]:text-success-foreground",
                    "data-[hover=true]:bg-success-100",
                    "data-[hover=true]:text-success-600",
                    "dark:data-[hover=true]:bg-success-50",
                    "dark:data-[hover=true]:text-success-500",
                    "data-[selected=true]:data-[hover=true]:bg-success",
                    "dark:data-[selected=true]:data-[hover=true]:bg-success",
                    "dark:data-[selected=true]:data-[hover=true]:text-success-foreground",
                    "data-[selected=true]:data-[hover=true]:text-success-foreground"
                ]
            }
        },
        {
            isRange: false,
            color: "warning",
            class: {
                cellButton: [
                    "data-[selected=true]:bg-warning",
                    "data-[selected=true]:text-warning-foreground",
                    "data-[hover=true]:bg-warning-100",
                    "data-[hover=true]:text-warning-600",
                    "dark:data-[hover=true]:bg-warning-50",
                    "dark:data-[hover=true]:text-warning-500",
                    "data-[selected=true]:data-[hover=true]:bg-warning",
                    "dark:data-[selected=true]:data-[hover=true]:bg-warning",
                    "dark:data-[selected=true]:data-[hover=true]:text-warning-foreground",
                    "data-[selected=true]:data-[hover=true]:text-warning-foreground"
                ]
            }
        },
        {
            isRange: false,
            color: "danger",
            class: {
                cellButton: [
                    "data-[selected=true]:bg-danger",
                    "data-[selected=true]:text-danger-foreground",
                    "data-[hover=true]:bg-danger-100",
                    "data-[hover=true]:text-danger-500",
                    "dark:data-[hover=true]:bg-danger-50",
                    "dark:data-[hover=true]:text-danger-500",
                    "data-[selected=true]:data-[hover=true]:bg-danger",
                    "dark:data-[selected=true]:data-[hover=true]:bg-danger",
                    "dark:data-[selected=true]:data-[hover=true]:text-danger-foreground",
                    "data-[selected=true]:data-[hover=true]:text-danger-foreground"
                ]
            }
        },
        // isRange & colors --> RangeCalendar
        {
            isRange: true,
            color: "foreground",
            class: {
                cellButton: [
                    // middle
                    "data-[selected=true]:data-[range-selection=true]:before:bg-foreground/10",
                    "data-[selected=true]:data-[range-selection=true]:text-foreground",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-foreground",
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-background",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-foreground",
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-background"
                ]
            }
        },
        {
            isRange: true,
            color: "primary",
            class: {
                cellButton: [
                    // middle
                    "data-[selected=true]:data-[range-selection=true]:before:bg-primary-50",
                    "data-[selected=true]:data-[range-selection=true]:text-primary",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-primary",
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-primary-foreground",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-primary",
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-primary-foreground"
                ]
            }
        },
        {
            isRange: true,
            color: "secondary",
            class: {
                cellButton: [
                    // middle
                    "data-[selected=true]:data-[range-selection=true]:before:bg-secondary-50",
                    "data-[selected=true]:data-[range-selection=true]:text-secondary",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-secondary",
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-secondary-foreground",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-secondary",
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-secondary-foreground"
                ]
            }
        },
        {
            isRange: true,
            color: "success",
            class: {
                cellButton: [
                    // middle
                    "data-[selected=true]:data-[range-selection=true]:before:bg-success-100",
                    "data-[selected=true]:data-[range-selection=true]:text-success-600",
                    "dark:data-[selected=true]:data-[range-selection=true]:before:bg-success-50",
                    "dark:data-[selected=true]:data-[range-selection=true]:text-success-500",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-success",
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-success-foreground",
                    "dark:data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-success-foreground",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-success",
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-success-foreground",
                    "dark:data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-success-foreground"
                ]
            }
        },
        {
            isRange: true,
            color: "warning",
            class: {
                cellButton: [
                    // middle
                    "data-[selected=true]:data-[range-selection=true]:before:bg-warning-100",
                    "dark:data-[selected=true]:data-[range-selection=true]:before:bg-warning-50",
                    "data-[selected=true]:data-[range-selection=true]:text-warning-500",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-warning",
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-warning-foreground",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-warning",
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-warning-foreground"
                ]
            }
        },
        {
            isRange: true,
            color: "danger",
            class: {
                cellButton: [
                    // middle
                    "data-[selected=true]:data-[range-selection=true]:before:bg-danger-50",
                    "data-[selected=true]:data-[range-selection=true]:text-danger-500",
                    // start (selected)
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-danger",
                    "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:text-danger-foreground",
                    // end (selected)
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-danger",
                    "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:text-danger-foreground"
                ]
            }
        },
        // showShadow & colors
        {
            showShadow: true,
            color: "foreground",
            class: {
                cellButton: "data-[selected=true]:shadow-foreground/40"
            }
        },
        {
            showShadow: true,
            color: "primary",
            class: {
                cellButton: "data-[selected=true]:shadow-primary/40"
            }
        },
        {
            showShadow: true,
            color: "secondary",
            class: {
                cellButton: "data-[selected=true]:shadow-secondary/40"
            }
        },
        {
            showShadow: true,
            color: "success",
            class: {
                cellButton: "data-[selected=true]:shadow-success/40"
            }
        },
        {
            showShadow: true,
            color: "warning",
            class: {
                cellButton: "data-[selected=true]:shadow-warning/40"
            }
        },
        {
            showShadow: true,
            color: "danger",
            class: {
                cellButton: "data-[selected=true]:shadow-danger/40"
            }
        },
        // showShadow & isRange
        {
            showShadow: true,
            isRange: true,
            class: {
                cellButton: [
                    // remove shadow from middle
                    "data-[selected=true]:shadow-none",
                    // add shadow to start (selected)
                    "data-[selected=true]:data-[selection-start=true]:shadow-md",
                    // add shadow to end (selected)
                    "data-[selected=true]:data-[selection-end=true]:shadow-md"
                ]
            }
        }
    ],
    compoundSlots: [
        {
            slots: [
                "prevButton",
                "nextButton"
            ],
            class: [
                "text-medium",
                "text-default-400"
            ]
        },
        {
            slots: [
                "pickerMonthList",
                "pickerYearList"
            ],
            class: [
                // styles
                "flex flex-col px-4 overflow-y-scroll scrollbar-hide snap-y snap-mandatory",
                // scroll shadow
                "[--scroll-shadow-size:100px]",
                "[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
            ]
        }
    ]
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-YXVO2HGK.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "modal": (()=>modal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
// src/components/modal.ts
var modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        wrapper: [
            "flex",
            "w-screen",
            "h-[100dvh]",
            "fixed",
            "inset-0",
            "z-50",
            "overflow-x-auto",
            "justify-center",
            "h-[--visual-viewport-height]"
        ],
        base: [
            "flex",
            "flex-col",
            "relative",
            "bg-white",
            "z-50",
            "w-full",
            "box-border",
            "bg-content1",
            "outline-none",
            "mx-1",
            "my-1",
            "sm:mx-6",
            "sm:my-16"
        ],
        backdrop: "z-50",
        header: "flex py-4 px-6 flex-initial text-large font-semibold",
        body: "flex flex-1 flex-col gap-3 px-6 py-2",
        footer: "flex flex-row gap-2 px-6 py-4 justify-end",
        closeButton: [
            "absolute",
            "appearance-none",
            "outline-none",
            "select-none",
            "top-1",
            "end-1",
            "p-2",
            "text-foreground-500",
            "rounded-full",
            "hover:bg-default-100",
            "active:bg-default-200",
            "tap-highlight-transparent",
            // focus ring
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ]
    },
    variants: {
        size: {
            xs: {
                base: "max-w-xs"
            },
            sm: {
                base: "max-w-sm"
            },
            md: {
                base: "max-w-md"
            },
            lg: {
                base: "max-w-lg"
            },
            xl: {
                base: "max-w-xl"
            },
            "2xl": {
                base: "max-w-2xl"
            },
            "3xl": {
                base: "max-w-3xl"
            },
            "4xl": {
                base: "max-w-4xl"
            },
            "5xl": {
                base: "max-w-5xl"
            },
            full: {
                base: "my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] min-h-[100dvh] !rounded-none"
            }
        },
        radius: {
            none: {
                base: "rounded-none"
            },
            sm: {
                base: "rounded-small"
            },
            md: {
                base: "rounded-medium"
            },
            lg: {
                base: "rounded-large"
            }
        },
        placement: {
            auto: {
                wrapper: "items-end sm:items-center"
            },
            center: {
                wrapper: "items-center sm:items-center"
            },
            top: {
                wrapper: "items-start sm:items-start"
            },
            "top-center": {
                wrapper: "items-start sm:items-center"
            },
            bottom: {
                wrapper: "items-end sm:items-end"
            },
            "bottom-center": {
                wrapper: "items-end sm:items-center"
            }
        },
        shadow: {
            none: {
                base: "shadow-none"
            },
            sm: {
                base: "shadow-small"
            },
            md: {
                base: "shadow-medium"
            },
            lg: {
                base: "shadow-large"
            }
        },
        backdrop: {
            transparent: {
                backdrop: "hidden"
            },
            opaque: {
                backdrop: "bg-overlay/50 backdrop-opacity-disabled"
            },
            blur: {
                backdrop: "backdrop-blur-md backdrop-saturate-150 bg-overlay/30"
            }
        },
        scrollBehavior: {
            normal: {
                base: "overflow-y-hidden"
            },
            inside: {
                base: "max-h-[calc(100%_-_8rem)]",
                body: "overflow-y-auto"
            },
            outside: {
                wrapper: "items-start sm:items-start overflow-y-auto",
                base: "my-16"
            }
        },
        disableAnimation: {
            false: {
                wrapper: [
                    //  mobile animation vars
                    "[--scale-enter:100%]",
                    "[--scale-exit:100%]",
                    "[--slide-enter:0px]",
                    "[--slide-exit:80px]",
                    // tablet/desktop animation vars
                    "sm:[--scale-enter:100%]",
                    "sm:[--scale-exit:103%]",
                    "sm:[--slide-enter:0px]",
                    "sm:[--slide-exit:0px]"
                ]
            }
        }
    },
    defaultVariants: {
        size: "md",
        radius: "lg",
        shadow: "sm",
        placement: "auto",
        backdrop: "opaque",
        scrollBehavior: "normal"
    },
    compoundVariants: [
        // backdrop (opaque/blur)
        {
            backdrop: [
                "opaque",
                "blur"
            ],
            class: {
                backdrop: "w-screen h-screen fixed inset-0"
            }
        }
    ]
});
;
}}),
"[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-PHJYB7ZO.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "card": (()=>card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tools/node_modules/@heroui/theme/dist/chunk-CNTMWM4F.mjs [app-client] (ecmascript)");
;
;
// src/components/card.ts
var card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "flex",
            "flex-col",
            "relative",
            "overflow-hidden",
            "h-auto",
            "outline-none",
            "text-foreground",
            "box-border",
            "bg-content1",
            // focus ring
            ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tools$2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$CNTMWM4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        header: [
            "flex",
            "p-3",
            "z-10",
            "w-full",
            "justify-start",
            "items-center",
            "shrink-0",
            "overflow-inherit",
            "color-inherit",
            "subpixel-antialiased"
        ],
        body: [
            "relative",
            "flex",
            "flex-1",
            "w-full",
            "p-3",
            "flex-auto",
            "flex-col",
            "place-content-inherit",
            "align-items-inherit",
            "h-auto",
            "break-words",
            "text-left",
            "overflow-y-auto",
            "subpixel-antialiased"
        ],
        footer: [
            "p-3",
            "h-auto",
            "flex",
            "w-full",
            "items-center",
            "overflow-hidden",
            "color-inherit",
            "subpixel-antialiased"
        ]
    },
    variants: {
        shadow: {
            none: {
                base: "shadow-none"
            },
            sm: {
                base: "shadow-small"
            },
            md: {
                base: "shadow-medium"
            },
            lg: {
                base: "shadow-large"
            }
        },
        radius: {
            none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none"
            },
            sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small"
            },
            md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium"
            },
            lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large"
            }
        },
        fullWidth: {
            true: {
                base: "w-full"
            }
        },
        isHoverable: {
            true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"
            }
        },
        isPressable: {
            true: {
                base: "cursor-pointer"
            }
        },
        isBlurred: {
            true: {
                base: [
                    "bg-background/80",
                    "dark:bg-background/20",
                    "backdrop-blur-md",
                    "backdrop-saturate-150"
                ]
            }
        },
        isFooterBlurred: {
            true: {
                footer: [
                    "bg-background/10",
                    "backdrop-blur",
                    "backdrop-saturate-150"
                ]
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled cursor-not-allowed"
            }
        },
        disableAnimation: {
            true: "",
            false: {
                base: "transition-transform-background motion-reduce:transition-none"
            }
        }
    },
    compoundVariants: [
        {
            isPressable: true,
            class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent"
        }
    ],
    defaultVariants: {
        radius: "lg",
        shadow: "md",
        fullWidth: false,
        isHoverable: false,
        isPressable: false,
        isDisabled: false,
        isFooterBlurred: false
    }
});
;
}}),
}]);

//# sourceMappingURL=b0598_%40heroui_theme_dist_bb68e055._.js.map