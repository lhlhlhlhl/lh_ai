module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// hooks 
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$12_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+react@1.2.12_react@19.1.0_zod@3.25.76/node_modules/@ai-sdk/react/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
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
"use client";
;
;
;
;
;
function Home() {
    // chat llm 业务 抽离
    const { input, messages, status, handleInputChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$react$40$1$2e$2$2e$12_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-3xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold mb-4",
                children: "phoneGPT"
            }, void 0, false, {
                fileName: "[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mb-4 max-h-[80vh] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatOutput, {
                    messages: messages,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["stat"]
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatInput, {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7db0c12._.js.map