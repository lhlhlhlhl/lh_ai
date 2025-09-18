module.exports = [
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 流式输出
// AI SDK 中用于生成流式文本响应的核心函数，支持逐字输出，工具调用和异步处理
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$19_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/ai@4.3.19_react@19.1.0_zod@3.25.76/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
// ai-sdk openai调用方式
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$24_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+openai@1.3.24_zod@3.25.76/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
;
;
const openai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$1$2e$3$2e$24_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE_URL
});
async function POST() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$ai$40$4$2e$3$2e$19_react$40$19$2e$1$2e$0_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: openai('gpt-3.5-turbo'),
        prompt: '你好，请简单介绍一下你自己。'
    });
    return result.toDataStreamResponse();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__82312081._.js.map