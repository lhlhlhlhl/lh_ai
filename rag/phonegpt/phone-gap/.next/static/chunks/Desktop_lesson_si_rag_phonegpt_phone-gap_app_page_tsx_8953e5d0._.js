(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// hooks 
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$12_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+react@1.2.12_react@19.1.0_zod@3.25.76/node_modules/@ai-sdk/react/dist/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ChatInput'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ChatOutput'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    // chat llm 业务 抽离
    const { input, messages, status, handleInputChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$12_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-3xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold mb-4",
                children: "phoneGPT"
            }, void 0, false, {
                fileName: "[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mb-4 max-h-[80vh] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatOutput, {
                    messages: messages,
                    status: stat
                }, void 0, false, {
                    fileName: "[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatInput, {
                input: input,
                handleInputChange: handleInputChange,
                handleSubmit: handleSubmit
            }, void 0, false, {
                fileName: "[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Home, "95P+wbOKu9CCgIs7BnMLhLTCq0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$12_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_lesson_si_rag_phonegpt_phone-gap_app_page_tsx_8953e5d0._.js.map