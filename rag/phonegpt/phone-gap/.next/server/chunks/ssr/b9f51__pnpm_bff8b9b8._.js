module.exports = [
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+provider@1.1.3/node_modules/@ai-sdk/provider/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/errors/ai-sdk-error.ts
__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError extends Error {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
_a = symbol;
var AISDKError = _AISDKError;
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
_a2 = symbol2;
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
_a3 = symbol3;
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
_a4 = symbol4;
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidPromptError = class extends AISDKError {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
_a5 = symbol5;
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
_a6 = symbol6;
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var JSONParseError = class extends AISDKError {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
_a7 = symbol7;
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var LoadAPIKeyError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
_a8 = symbol8;
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var LoadSettingError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
_a9 = symbol9;
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoContentGeneratedError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
_a10 = symbol10;
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var NoSuchModelError = class extends AISDKError {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
_a11 = symbol11;
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
_a12 = symbol12;
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _TypeValidationError = class _TypeValidationError extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name12,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause }) {
        return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
            value,
            cause
        });
    }
};
_a13 = symbol13;
var TypeValidationError = _TypeValidationError;
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
_a14 = symbol14;
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/nanoid@3.3.11/node_modules/nanoid/non-secure/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customAlphabet",
    ()=>customAlphabet,
    "nanoid",
    ()=>nanoid
]);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        let i = size | 0;
        while(i--){
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    let i = size | 0;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/secure-json-parse@2.7.0/node_modules/secure-json-parse/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const hasBuffer = typeof Buffer !== 'undefined';
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text, reviver, options) {
    // Normalize arguments
    if (options == null) {
        if (reviver !== null && typeof reviver === 'object') {
            options = reviver;
            reviver = undefined;
        }
    }
    if (hasBuffer && Buffer.isBuffer(text)) {
        text = text.toString();
    }
    // BOM checker
    if (text && text.charCodeAt(0) === 0xFEFF) {
        text = text.slice(1);
    }
    // Parse normally, allowing exceptions
    const obj = JSON.parse(text, reviver);
    // Ignore null and non-objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const protoAction = options && options.protoAction || 'error';
    const constructorAction = options && options.constructorAction || 'error';
    // options: 'error' (default) / 'remove' / 'ignore'
    if (protoAction === 'ignore' && constructorAction === 'ignore') {
        return obj;
    }
    if (protoAction !== 'ignore' && constructorAction !== 'ignore') {
        if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
            return obj;
        }
    } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {
        if (suspectProtoRx.test(text) === false) {
            return obj;
        }
    } else {
        if (suspectConstructorRx.test(text) === false) {
            return obj;
        }
    }
    // Scan result for proto keys
    return filter(obj, {
        protoAction,
        constructorAction,
        safe: options && options.safe
    });
}
function filter(obj, { protoAction = 'error', constructorAction = 'error', safe } = {}) {
    let next = [
        obj
    ];
    while(next.length){
        const nodes = next;
        next = [];
        for (const node of nodes){
            if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) {
                if (safe === true) {
                    return null;
                } else if (protoAction === 'error') {
                    throw new SyntaxError('Object contains forbidden prototype property');
                }
                delete node.__proto__; // eslint-disable-line no-proto
            }
            if (constructorAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, 'constructor') && Object.prototype.hasOwnProperty.call(node.constructor, 'prototype')) {
                if (safe === true) {
                    return null;
                } else if (constructorAction === 'error') {
                    throw new SyntaxError('Object contains forbidden prototype property');
                }
                delete node.constructor;
            }
            for(const key in node){
                const value = node[key];
                if (value && typeof value === 'object') {
                    next.push(value);
                }
            }
        }
    }
    return obj;
}
function parse(text, reviver, options) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return _parse(text, reviver, options);
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
function safeParse(text, reviver) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return _parse(text, reviver, {
            safe: true
        });
    } catch (_e) {
        return null;
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
module.exports = parse;
module.exports.default = parse;
module.exports.parse = parse;
module.exports.safeParse = safeParse;
module.exports.scan = filter;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+provider-utils@2.2.8_zod@3.25.76/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/combine-headers.ts
__turbopack_context__.s([
    "asValidator",
    ()=>asValidator,
    "combineHeaders",
    ()=>combineHeaders,
    "convertAsyncIteratorToReadableStream",
    ()=>convertAsyncIteratorToReadableStream,
    "convertBase64ToUint8Array",
    ()=>convertBase64ToUint8Array,
    "convertUint8ArrayToBase64",
    ()=>convertUint8ArrayToBase64,
    "createBinaryResponseHandler",
    ()=>createBinaryResponseHandler,
    "createEventSourceParserStream",
    ()=>createEventSourceParserStream,
    "createEventSourceResponseHandler",
    ()=>createEventSourceResponseHandler,
    "createIdGenerator",
    ()=>createIdGenerator,
    "createJsonErrorResponseHandler",
    ()=>createJsonErrorResponseHandler,
    "createJsonResponseHandler",
    ()=>createJsonResponseHandler,
    "createJsonStreamResponseHandler",
    ()=>createJsonStreamResponseHandler,
    "createStatusCodeErrorResponseHandler",
    ()=>createStatusCodeErrorResponseHandler,
    "delay",
    ()=>delay,
    "extractResponseHeaders",
    ()=>extractResponseHeaders,
    "generateId",
    ()=>generateId,
    "getErrorMessage",
    ()=>getErrorMessage,
    "getFromApi",
    ()=>getFromApi,
    "isAbortError",
    ()=>isAbortError,
    "isParsableJson",
    ()=>isParsableJson,
    "isValidator",
    ()=>isValidator,
    "loadApiKey",
    ()=>loadApiKey,
    "loadOptionalSetting",
    ()=>loadOptionalSetting,
    "loadSetting",
    ()=>loadSetting,
    "parseJSON",
    ()=>parseJSON,
    "parseProviderOptions",
    ()=>parseProviderOptions,
    "postFormDataToApi",
    ()=>postFormDataToApi,
    "postJsonToApi",
    ()=>postJsonToApi,
    "postToApi",
    ()=>postToApi,
    "removeUndefinedEntries",
    ()=>removeUndefinedEntries,
    "resolve",
    ()=>resolve,
    "safeParseJSON",
    ()=>safeParseJSON,
    "safeValidateTypes",
    ()=>safeValidateTypes,
    "validateTypes",
    ()=>validateTypes,
    "validator",
    ()=>validator,
    "validatorSymbol",
    ()=>validatorSymbol,
    "withoutTrailingSlash",
    ()=>withoutTrailingSlash,
    "zodValidator",
    ()=>zodValidator
]);
// src/generate-id.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+provider@1.1.3/node_modules/@ai-sdk/provider/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$nanoid$40$3$2e$3$2e$11$2f$node_modules$2f$nanoid$2f$non$2d$secure$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/nanoid@3.3.11/node_modules/nanoid/non-secure/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$secure$2d$json$2d$parse$40$2$2e$7$2e$0$2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/secure-json-parse@2.7.0/node_modules/secure-json-parse/index.js [app-ssr] (ecmascript)");
function combineHeaders(...headers) {
    return headers.reduce((combinedHeaders, currentHeaders)=>({
            ...combinedHeaders,
            ...currentHeaders != null ? currentHeaders : {}
        }), {});
}
// src/convert-async-iterator-to-readable-stream.ts
function convertAsyncIteratorToReadableStream(iterator) {
    return new ReadableStream({
        /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */ async pull (controller) {
            try {
                const { value, done } = await iterator.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(value);
                }
            } catch (error) {
                controller.error(error);
            }
        },
        /**
     * Called when the consumer cancels the stream.
     */ cancel () {}
    });
}
// src/delay.ts
async function delay(delayInMs) {
    return delayInMs == null ? Promise.resolve() : new Promise((resolve2)=>setTimeout(resolve2, delayInMs));
}
// src/event-source-parser-stream.ts
function createEventSourceParserStream() {
    let buffer = "";
    let event = void 0;
    let data = [];
    let lastEventId = void 0;
    let retry = void 0;
    function parseLine(line, controller) {
        if (line === "") {
            dispatchEvent(controller);
            return;
        }
        if (line.startsWith(":")) {
            return;
        }
        const colonIndex = line.indexOf(":");
        if (colonIndex === -1) {
            handleField(line, "");
            return;
        }
        const field = line.slice(0, colonIndex);
        const valueStart = colonIndex + 1;
        const value = valueStart < line.length && line[valueStart] === " " ? line.slice(valueStart + 1) : line.slice(valueStart);
        handleField(field, value);
    }
    function dispatchEvent(controller) {
        if (data.length > 0) {
            controller.enqueue({
                event,
                data: data.join("\n"),
                id: lastEventId,
                retry
            });
            data = [];
            event = void 0;
            retry = void 0;
        }
    }
    function handleField(field, value) {
        switch(field){
            case "event":
                event = value;
                break;
            case "data":
                data.push(value);
                break;
            case "id":
                lastEventId = value;
                break;
            case "retry":
                const parsedRetry = parseInt(value, 10);
                if (!isNaN(parsedRetry)) {
                    retry = parsedRetry;
                }
                break;
        }
    }
    return new TransformStream({
        transform (chunk, controller) {
            const { lines, incompleteLine } = splitLines(buffer, chunk);
            buffer = incompleteLine;
            for(let i = 0; i < lines.length; i++){
                parseLine(lines[i], controller);
            }
        },
        flush (controller) {
            parseLine(buffer, controller);
            dispatchEvent(controller);
        }
    });
}
function splitLines(buffer, chunk) {
    const lines = [];
    let currentLine = buffer;
    for(let i = 0; i < chunk.length;){
        const char = chunk[i++];
        if (char === "\n") {
            lines.push(currentLine);
            currentLine = "";
        } else if (char === "\r") {
            lines.push(currentLine);
            currentLine = "";
            if (chunk[i] === "\n") {
                i++;
            }
        } else {
            currentLine += char;
        }
    }
    return {
        lines,
        incompleteLine: currentLine
    };
}
// src/extract-response-headers.ts
function extractResponseHeaders(response) {
    const headers = {};
    response.headers.forEach((value, key)=>{
        headers[key] = value;
    });
    return headers;
}
;
;
var createIdGenerator = ({ prefix, size: defaultSize = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {})=>{
    const generator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$nanoid$40$3$2e$3$2e$11$2f$node_modules$2f$nanoid$2f$non$2d$secure$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customAlphabet"])(alphabet, defaultSize);
    if (prefix == null) {
        return generator;
    }
    if (alphabet.includes(separator)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "separator",
            message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
        });
    }
    return (size)=>`${prefix}${separator}${generator(size)}`;
};
var generateId = createIdGenerator();
// src/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
;
// src/remove-undefined-entries.ts
function removeUndefinedEntries(record) {
    return Object.fromEntries(Object.entries(record).filter(([_key, value])=>value != null));
}
// src/is-abort-error.ts
function isAbortError(error) {
    return error instanceof Error && (error.name === "AbortError" || error.name === "TimeoutError");
}
// src/get-from-api.ts
var getOriginalFetch = ()=>globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch() })=>{
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: removeUndefinedEntries(headers),
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: {}
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: {}
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: {}
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: {}
            });
        }
    } catch (error) {
        if (isAbortError(error)) {
            throw error;
        }
        if (error instanceof TypeError && error.message === "fetch failed") {
            const cause = error.cause;
            if (cause != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: `Cannot connect to API: ${cause.message}`,
                    cause,
                    url,
                    isRetryable: true,
                    requestBodyValues: {}
                });
            }
        }
        throw error;
    }
};
;
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
    if (typeof apiKey === "string") {
        return apiKey;
    }
    if (apiKey != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    apiKey = process.env[environmentVariableName];
    if (apiKey == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof apiKey !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return apiKey;
}
// src/load-optional-setting.ts
function loadOptionalSetting({ settingValue, environmentVariableName }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null || typeof process === "undefined") {
        return void 0;
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null || typeof settingValue !== "string") {
        return void 0;
    }
    return settingValue;
}
;
function loadSetting({ settingValue, environmentVariableName, settingName, description }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof settingValue !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return settingValue;
}
;
;
;
// src/validator.ts
var validatorSymbol = Symbol.for("vercel.ai.validator");
function validator(validate) {
    return {
        [validatorSymbol]: true,
        validate
    };
}
function isValidator(value) {
    return typeof value === "object" && value !== null && validatorSymbol in value && value[validatorSymbol] === true && "validate" in value;
}
function asValidator(value) {
    return isValidator(value) ? value : zodValidator(value);
}
function zodValidator(zodSchema) {
    return validator((value)=>{
        const result = zodSchema.safeParse(value);
        return result.success ? {
            success: true,
            value: result.data
        } : {
            success: false,
            error: result.error
        };
    });
}
// src/validate-types.ts
function validateTypes({ value, schema: inputSchema }) {
    const result = safeValidateTypes({
        value,
        schema: inputSchema
    });
    if (!result.success) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
            value,
            cause: result.error
        });
    }
    return result.value;
}
function safeValidateTypes({ value, schema }) {
    const validator2 = asValidator(schema);
    try {
        if (validator2.validate == null) {
            return {
                success: true,
                value
            };
        }
        const result = validator2.validate(value);
        if (result.success) {
            return result;
        }
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: result.error
            })
        };
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: error
            })
        };
    }
}
// src/parse-json.ts
function parseJSON({ text, schema }) {
    try {
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$secure$2d$json$2d$parse$40$2$2e$7$2e$0$2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(text);
        if (schema == null) {
            return value;
        }
        return validateTypes({
            value,
            schema
        });
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"].isInstance(error)) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"]({
            text,
            cause: error
        });
    }
}
function safeParseJSON({ text, schema }) {
    try {
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$secure$2d$json$2d$parse$40$2$2e$7$2e$0$2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(text);
        if (schema == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        const validationResult = safeValidateTypes({
            value,
            schema
        });
        return validationResult.success ? {
            ...validationResult,
            rawValue: value
        } : validationResult;
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONParseError"]({
                text,
                cause: error
            })
        };
    }
}
function isParsableJson(input) {
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$secure$2d$json$2d$parse$40$2$2e$7$2e$0$2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(input);
        return true;
    } catch (e) {
        return false;
    }
}
;
function parseProviderOptions({ provider, providerOptions, schema }) {
    if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) {
        return void 0;
    }
    const parsedProviderOptions = safeValidateTypes({
        value: providerOptions[provider],
        schema
    });
    if (!parsedProviderOptions.success) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "providerOptions",
            message: `invalid ${provider} provider options`,
            cause: parsedProviderOptions.error
        });
    }
    return parsedProviderOptions.value;
}
;
var getOriginalFetch2 = ()=>globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: {
            content: JSON.stringify(body),
            values: body
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postFormDataToApi = async ({ url, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers,
        body: {
            content: formData,
            values: Object.fromEntries(formData.entries())
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch2() })=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: removeUndefinedEntries(headers),
            body: body.content,
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: body.values
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: body.values
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: body.values
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: body.values
            });
        }
    } catch (error) {
        if (isAbortError(error)) {
            throw error;
        }
        if (error instanceof TypeError && error.message === "fetch failed") {
            const cause = error.cause;
            if (cause != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: `Cannot connect to API: ${cause.message}`,
                    cause,
                    url,
                    requestBodyValues: body.values,
                    isRetryable: true
                });
            }
        }
        throw error;
    }
};
// src/resolve.ts
async function resolve(value) {
    if (typeof value === "function") {
        value = value();
    }
    return Promise.resolve(value);
}
;
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable })=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const responseHeaders = extractResponseHeaders(response);
        if (responseBody.trim() === "") {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
        try {
            const parsedError = parseJSON({
                text: responseBody,
                schema: errorSchema
            });
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: errorToMessage(parsedError),
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    data: parsedError,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
                })
            };
        } catch (parseError) {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
    };
var createEventSourceResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(createEventSourceParserStream()).pipeThrough(new TransformStream({
                transform ({ data }, controller) {
                    if (data === "[DONE]") {
                        return;
                    }
                    controller.enqueue(safeParseJSON({
                        text: data,
                        schema: chunkSchema
                    }));
                }
            }))
        };
    };
var createJsonStreamResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        let buffer = "";
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({
                transform (chunkText, controller) {
                    if (chunkText.endsWith("\n")) {
                        controller.enqueue(safeParseJSON({
                            text: buffer + chunkText,
                            schema: chunkSchema
                        }));
                        buffer = "";
                    } else {
                        buffer += chunkText;
                    }
                }
            }))
        };
    };
var createJsonResponseHandler = (responseSchema)=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const parsedResult = safeParseJSON({
            text: responseBody,
            schema: responseSchema
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!parsedResult.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Invalid JSON response",
                cause: parsedResult.error,
                statusCode: response.status,
                responseHeaders,
                responseBody,
                url,
                requestBodyValues
            });
        }
        return {
            responseHeaders,
            value: parsedResult.value,
            rawValue: parsedResult.rawValue
        };
    };
var createBinaryResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (!response.body) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Response body is empty",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0
            });
        }
        try {
            const buffer = await response.arrayBuffer();
            return {
                responseHeaders,
                value: new Uint8Array(buffer)
            };
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to read response as array buffer",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0,
                cause: error
            });
        }
    };
var createStatusCodeErrorResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        const responseBody = await response.text();
        return {
            responseHeaders,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$1$2e$1$2e$3$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APICallError"]({
                message: response.statusText,
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody
            })
        };
    };
// src/uint8-utils.ts
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
    const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
    const latin1string = atob(base64Url);
    return Uint8Array.from(latin1string, (byte)=>byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
    let latin1string = "";
    for(let i = 0; i < array.length; i++){
        latin1string += String.fromCodePoint(array[i]);
    }
    return btoa(latin1string);
}
// src/without-trailing-slash.ts
function withoutTrailingSlash(url) {
    return url == null ? void 0 : url.replace(/\/$/, "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+ui-utils@1.2.11_zod@3.25.76/node_modules/@ai-sdk/ui-utils/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "asSchema",
    ()=>asSchema,
    "callChatApi",
    ()=>callChatApi,
    "callCompletionApi",
    ()=>callCompletionApi,
    "extractMaxToolInvocationStep",
    ()=>extractMaxToolInvocationStep,
    "fillMessageParts",
    ()=>fillMessageParts,
    "formatAssistantStreamPart",
    ()=>formatAssistantStreamPart,
    "formatDataStreamPart",
    ()=>formatDataStreamPart,
    "getMessageParts",
    ()=>getMessageParts,
    "getTextFromDataUrl",
    ()=>getTextFromDataUrl,
    "isAssistantMessageWithCompletedToolCalls",
    ()=>isAssistantMessageWithCompletedToolCalls,
    "isDeepEqualData",
    ()=>isDeepEqualData,
    "jsonSchema",
    ()=>jsonSchema,
    "parseAssistantStreamPart",
    ()=>parseAssistantStreamPart,
    "parseDataStreamPart",
    ()=>parseDataStreamPart,
    "parsePartialJson",
    ()=>parsePartialJson,
    "prepareAttachmentsForRequest",
    ()=>prepareAttachmentsForRequest,
    "processAssistantStream",
    ()=>processAssistantStream,
    "processDataStream",
    ()=>processDataStream,
    "processTextStream",
    ()=>processTextStream,
    "shouldResubmitMessages",
    ()=>shouldResubmitMessages,
    "updateToolCallResult",
    ()=>updateToolCallResult,
    "zodSchema",
    ()=>zodSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+provider-utils@2.2.8_zod@3.25.76/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-ssr] (ecmascript)");
// src/zod-schema.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$24$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/zod-to-json-schema@3.24.6_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
;
// src/assistant-stream-parts.ts
var textStreamPart = {
    code: "0",
    name: "text",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"text" parts expect a string value.');
        }
        return {
            type: "text",
            value
        };
    }
};
var errorStreamPart = {
    code: "3",
    name: "error",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"error" parts expect a string value.');
        }
        return {
            type: "error",
            value
        };
    }
};
var assistantMessageStreamPart = {
    code: "4",
    name: "assistant_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every((item)=>item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string")) {
            throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
        }
        return {
            type: "assistant_message",
            value
        };
    }
};
var assistantControlDataStreamPart = {
    code: "5",
    name: "assistant_control_data",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
            throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
        }
        return {
            type: "assistant_control_data",
            value: {
                threadId: value.threadId,
                messageId: value.messageId
            }
        };
    }
};
var dataMessageStreamPart = {
    code: "6",
    name: "data_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("role" in value) || !("data" in value) || typeof value.role !== "string" || value.role !== "data") {
            throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
        }
        return {
            type: "data_message",
            value
        };
    }
};
var assistantStreamParts = [
    textStreamPart,
    errorStreamPart,
    assistantMessageStreamPart,
    assistantControlDataStreamPart,
    dataMessageStreamPart
];
var assistantStreamPartsByCode = {
    [textStreamPart.code]: textStreamPart,
    [errorStreamPart.code]: errorStreamPart,
    [assistantMessageStreamPart.code]: assistantMessageStreamPart,
    [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
    [dataMessageStreamPart.code]: dataMessageStreamPart
};
var StreamStringPrefixes = {
    [textStreamPart.name]: textStreamPart.code,
    [errorStreamPart.name]: errorStreamPart.code,
    [assistantMessageStreamPart.name]: assistantMessageStreamPart.code,
    [assistantControlDataStreamPart.name]: assistantControlDataStreamPart.code,
    [dataMessageStreamPart.name]: dataMessageStreamPart.code
};
var validCodes = assistantStreamParts.map((part)=>part.code);
var parseAssistantStreamPart = (line)=>{
    const firstSeparatorIndex = line.indexOf(":");
    if (firstSeparatorIndex === -1) {
        throw new Error("Failed to parse stream string. No separator found.");
    }
    const prefix = line.slice(0, firstSeparatorIndex);
    if (!validCodes.includes(prefix)) {
        throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
    }
    const code = prefix;
    const textValue = line.slice(firstSeparatorIndex + 1);
    const jsonValue = JSON.parse(textValue);
    return assistantStreamPartsByCode[code].parse(jsonValue);
};
function formatAssistantStreamPart(type, value) {
    const streamPart = assistantStreamParts.find((part)=>part.name === type);
    if (!streamPart) {
        throw new Error(`Invalid stream part type: ${type}`);
    }
    return `${streamPart.code}:${JSON.stringify(value)}
`;
}
;
// src/duplicated/usage.ts
function calculateLanguageModelUsage({ promptTokens, completionTokens }) {
    return {
        promptTokens,
        completionTokens,
        totalTokens: promptTokens + completionTokens
    };
}
;
// src/fix-json.ts
function fixJson(input) {
    const stack = [
        "ROOT"
    ];
    let lastValidIndex = -1;
    let literalStart = null;
    function processValueStart(char, i, swapState) {
        {
            switch(char){
                case '"':
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_STRING");
                        break;
                    }
                case "f":
                case "t":
                case "n":
                    {
                        lastValidIndex = i;
                        literalStart = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_LITERAL");
                        break;
                    }
                case "-":
                    {
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_NUMBER");
                        break;
                    }
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_NUMBER");
                        break;
                    }
                case "{":
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_OBJECT_START");
                        break;
                    }
                case "[":
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_ARRAY_START");
                        break;
                    }
            }
        }
    }
    function processAfterObjectValue(char, i) {
        switch(char){
            case ",":
                {
                    stack.pop();
                    stack.push("INSIDE_OBJECT_AFTER_COMMA");
                    break;
                }
            case "}":
                {
                    lastValidIndex = i;
                    stack.pop();
                    break;
                }
        }
    }
    function processAfterArrayValue(char, i) {
        switch(char){
            case ",":
                {
                    stack.pop();
                    stack.push("INSIDE_ARRAY_AFTER_COMMA");
                    break;
                }
            case "]":
                {
                    lastValidIndex = i;
                    stack.pop();
                    break;
                }
        }
    }
    for(let i = 0; i < input.length; i++){
        const char = input[i];
        const currentState = stack[stack.length - 1];
        switch(currentState){
            case "ROOT":
                processValueStart(char, i, "FINISH");
                break;
            case "INSIDE_OBJECT_START":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_KEY");
                                break;
                            }
                        case "}":
                            {
                                lastValidIndex = i;
                                stack.pop();
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_AFTER_COMMA":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_KEY");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_KEY":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_AFTER_KEY");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_AFTER_KEY":
                {
                    switch(char){
                        case ":":
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_BEFORE_VALUE");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_BEFORE_VALUE":
                {
                    processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
                    break;
                }
            case "INSIDE_OBJECT_AFTER_VALUE":
                {
                    processAfterObjectValue(char, i);
                    break;
                }
            case "INSIDE_STRING":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                lastValidIndex = i;
                                break;
                            }
                        case "\\":
                            {
                                stack.push("INSIDE_STRING_ESCAPE");
                                break;
                            }
                        default:
                            {
                                lastValidIndex = i;
                            }
                    }
                    break;
                }
            case "INSIDE_ARRAY_START":
                {
                    switch(char){
                        case "]":
                            {
                                lastValidIndex = i;
                                stack.pop();
                                break;
                            }
                        default:
                            {
                                lastValidIndex = i;
                                processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_ARRAY_AFTER_VALUE":
                {
                    switch(char){
                        case ",":
                            {
                                stack.pop();
                                stack.push("INSIDE_ARRAY_AFTER_COMMA");
                                break;
                            }
                        case "]":
                            {
                                lastValidIndex = i;
                                stack.pop();
                                break;
                            }
                        default:
                            {
                                lastValidIndex = i;
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_ARRAY_AFTER_COMMA":
                {
                    processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
                    break;
                }
            case "INSIDE_STRING_ESCAPE":
                {
                    stack.pop();
                    lastValidIndex = i;
                    break;
                }
            case "INSIDE_NUMBER":
                {
                    switch(char){
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            {
                                lastValidIndex = i;
                                break;
                            }
                        case "e":
                        case "E":
                        case "-":
                        case ".":
                            {
                                break;
                            }
                        case ",":
                            {
                                stack.pop();
                                if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
                                    processAfterArrayValue(char, i);
                                }
                                if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
                                    processAfterObjectValue(char, i);
                                }
                                break;
                            }
                        case "}":
                            {
                                stack.pop();
                                if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
                                    processAfterObjectValue(char, i);
                                }
                                break;
                            }
                        case "]":
                            {
                                stack.pop();
                                if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
                                    processAfterArrayValue(char, i);
                                }
                                break;
                            }
                        default:
                            {
                                stack.pop();
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_LITERAL":
                {
                    const partialLiteral = input.substring(literalStart, i + 1);
                    if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
                        stack.pop();
                        if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
                            processAfterObjectValue(char, i);
                        } else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
                            processAfterArrayValue(char, i);
                        }
                    } else {
                        lastValidIndex = i;
                    }
                    break;
                }
        }
    }
    let result = input.slice(0, lastValidIndex + 1);
    for(let i = stack.length - 1; i >= 0; i--){
        const state = stack[i];
        switch(state){
            case "INSIDE_STRING":
                {
                    result += '"';
                    break;
                }
            case "INSIDE_OBJECT_KEY":
            case "INSIDE_OBJECT_AFTER_KEY":
            case "INSIDE_OBJECT_AFTER_COMMA":
            case "INSIDE_OBJECT_START":
            case "INSIDE_OBJECT_BEFORE_VALUE":
            case "INSIDE_OBJECT_AFTER_VALUE":
                {
                    result += "}";
                    break;
                }
            case "INSIDE_ARRAY_START":
            case "INSIDE_ARRAY_AFTER_COMMA":
            case "INSIDE_ARRAY_AFTER_VALUE":
                {
                    result += "]";
                    break;
                }
            case "INSIDE_LITERAL":
                {
                    const partialLiteral = input.substring(literalStart, input.length);
                    if ("true".startsWith(partialLiteral)) {
                        result += "true".slice(partialLiteral.length);
                    } else if ("false".startsWith(partialLiteral)) {
                        result += "false".slice(partialLiteral.length);
                    } else if ("null".startsWith(partialLiteral)) {
                        result += "null".slice(partialLiteral.length);
                    }
                }
        }
    }
    return result;
}
// src/parse-partial-json.ts
function parsePartialJson(jsonText) {
    if (jsonText === void 0) {
        return {
            value: void 0,
            state: "undefined-input"
        };
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeParseJSON"])({
        text: jsonText
    });
    if (result.success) {
        return {
            value: result.value,
            state: "successful-parse"
        };
    }
    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeParseJSON"])({
        text: fixJson(jsonText)
    });
    if (result.success) {
        return {
            value: result.value,
            state: "repaired-parse"
        };
    }
    return {
        value: void 0,
        state: "failed-parse"
    };
}
// src/data-stream-parts.ts
var textStreamPart2 = {
    code: "0",
    name: "text",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"text" parts expect a string value.');
        }
        return {
            type: "text",
            value
        };
    }
};
var dataStreamPart = {
    code: "2",
    name: "data",
    parse: (value)=>{
        if (!Array.isArray(value)) {
            throw new Error('"data" parts expect an array value.');
        }
        return {
            type: "data",
            value
        };
    }
};
var errorStreamPart2 = {
    code: "3",
    name: "error",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"error" parts expect a string value.');
        }
        return {
            type: "error",
            value
        };
    }
};
var messageAnnotationsStreamPart = {
    code: "8",
    name: "message_annotations",
    parse: (value)=>{
        if (!Array.isArray(value)) {
            throw new Error('"message_annotations" parts expect an array value.');
        }
        return {
            type: "message_annotations",
            value
        };
    }
};
var toolCallStreamPart = {
    code: "9",
    name: "tool_call",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("toolName" in value) || typeof value.toolName !== "string" || !("args" in value) || typeof value.args !== "object") {
            throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
        }
        return {
            type: "tool_call",
            value
        };
    }
};
var toolResultStreamPart = {
    code: "a",
    name: "tool_result",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("result" in value)) {
            throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
        }
        return {
            type: "tool_result",
            value
        };
    }
};
var toolCallStreamingStartStreamPart = {
    code: "b",
    name: "tool_call_streaming_start",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("toolName" in value) || typeof value.toolName !== "string") {
            throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
        }
        return {
            type: "tool_call_streaming_start",
            value
        };
    }
};
var toolCallDeltaStreamPart = {
    code: "c",
    name: "tool_call_delta",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("argsTextDelta" in value) || typeof value.argsTextDelta !== "string") {
            throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
        }
        return {
            type: "tool_call_delta",
            value
        };
    }
};
var finishMessageStreamPart = {
    code: "d",
    name: "finish_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("finishReason" in value) || typeof value.finishReason !== "string") {
            throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
        }
        const result = {
            finishReason: value.finishReason
        };
        if ("usage" in value && value.usage != null && typeof value.usage === "object" && "promptTokens" in value.usage && "completionTokens" in value.usage) {
            result.usage = {
                promptTokens: typeof value.usage.promptTokens === "number" ? value.usage.promptTokens : Number.NaN,
                completionTokens: typeof value.usage.completionTokens === "number" ? value.usage.completionTokens : Number.NaN
            };
        }
        return {
            type: "finish_message",
            value: result
        };
    }
};
var finishStepStreamPart = {
    code: "e",
    name: "finish_step",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("finishReason" in value) || typeof value.finishReason !== "string") {
            throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
        }
        const result = {
            finishReason: value.finishReason,
            isContinued: false
        };
        if ("usage" in value && value.usage != null && typeof value.usage === "object" && "promptTokens" in value.usage && "completionTokens" in value.usage) {
            result.usage = {
                promptTokens: typeof value.usage.promptTokens === "number" ? value.usage.promptTokens : Number.NaN,
                completionTokens: typeof value.usage.completionTokens === "number" ? value.usage.completionTokens : Number.NaN
            };
        }
        if ("isContinued" in value && typeof value.isContinued === "boolean") {
            result.isContinued = value.isContinued;
        }
        return {
            type: "finish_step",
            value: result
        };
    }
};
var startStepStreamPart = {
    code: "f",
    name: "start_step",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("messageId" in value) || typeof value.messageId !== "string") {
            throw new Error('"start_step" parts expect an object with an "id" property.');
        }
        return {
            type: "start_step",
            value: {
                messageId: value.messageId
            }
        };
    }
};
var reasoningStreamPart = {
    code: "g",
    name: "reasoning",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"reasoning" parts expect a string value.');
        }
        return {
            type: "reasoning",
            value
        };
    }
};
var sourcePart = {
    code: "h",
    name: "source",
    parse: (value)=>{
        if (value == null || typeof value !== "object") {
            throw new Error('"source" parts expect a Source object.');
        }
        return {
            type: "source",
            value
        };
    }
};
var redactedReasoningStreamPart = {
    code: "i",
    name: "redacted_reasoning",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("data" in value) || typeof value.data !== "string") {
            throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
        }
        return {
            type: "redacted_reasoning",
            value: {
                data: value.data
            }
        };
    }
};
var reasoningSignatureStreamPart = {
    code: "j",
    name: "reasoning_signature",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("signature" in value) || typeof value.signature !== "string") {
            throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
        }
        return {
            type: "reasoning_signature",
            value: {
                signature: value.signature
            }
        };
    }
};
var fileStreamPart = {
    code: "k",
    name: "file",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("data" in value) || typeof value.data !== "string" || !("mimeType" in value) || typeof value.mimeType !== "string") {
            throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
        }
        return {
            type: "file",
            value
        };
    }
};
var dataStreamParts = [
    textStreamPart2,
    dataStreamPart,
    errorStreamPart2,
    messageAnnotationsStreamPart,
    toolCallStreamPart,
    toolResultStreamPart,
    toolCallStreamingStartStreamPart,
    toolCallDeltaStreamPart,
    finishMessageStreamPart,
    finishStepStreamPart,
    startStepStreamPart,
    reasoningStreamPart,
    sourcePart,
    redactedReasoningStreamPart,
    reasoningSignatureStreamPart,
    fileStreamPart
];
var dataStreamPartsByCode = Object.fromEntries(dataStreamParts.map((part)=>[
        part.code,
        part
    ]));
var DataStreamStringPrefixes = Object.fromEntries(dataStreamParts.map((part)=>[
        part.name,
        part.code
    ]));
var validCodes2 = dataStreamParts.map((part)=>part.code);
var parseDataStreamPart = (line)=>{
    const firstSeparatorIndex = line.indexOf(":");
    if (firstSeparatorIndex === -1) {
        throw new Error("Failed to parse stream string. No separator found.");
    }
    const prefix = line.slice(0, firstSeparatorIndex);
    if (!validCodes2.includes(prefix)) {
        throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
    }
    const code = prefix;
    const textValue = line.slice(firstSeparatorIndex + 1);
    const jsonValue = JSON.parse(textValue);
    return dataStreamPartsByCode[code].parse(jsonValue);
};
function formatDataStreamPart(type, value) {
    const streamPart = dataStreamParts.find((part)=>part.name === type);
    if (!streamPart) {
        throw new Error(`Invalid stream part type: ${type}`);
    }
    return `${streamPart.code}:${JSON.stringify(value)}
`;
}
// src/process-data-stream.ts
var NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
    const concatenatedChunks = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks){
        concatenatedChunks.set(chunk, offset);
        offset += chunk.length;
    }
    chunks.length = 0;
    return concatenatedChunks;
}
async function processDataStream({ stream, onTextPart, onReasoningPart, onReasoningSignaturePart, onRedactedReasoningPart, onSourcePart, onFilePart, onDataPart, onErrorPart, onToolCallStreamingStartPart, onToolCallDeltaPart, onToolCallPart, onToolResultPart, onMessageAnnotationsPart, onFinishMessagePart, onFinishStepPart, onStartStepPart }) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    const chunks = [];
    let totalLength = 0;
    while(true){
        const { value } = await reader.read();
        if (value) {
            chunks.push(value);
            totalLength += value.length;
            if (value[value.length - 1] !== NEWLINE) {
                continue;
            }
        }
        if (chunks.length === 0) {
            break;
        }
        const concatenatedChunks = concatChunks(chunks, totalLength);
        totalLength = 0;
        const streamParts = decoder.decode(concatenatedChunks, {
            stream: true
        }).split("\n").filter((line)=>line !== "").map(parseDataStreamPart);
        for (const { type, value: value2 } of streamParts){
            switch(type){
                case "text":
                    await (onTextPart == null ? void 0 : onTextPart(value2));
                    break;
                case "reasoning":
                    await (onReasoningPart == null ? void 0 : onReasoningPart(value2));
                    break;
                case "reasoning_signature":
                    await (onReasoningSignaturePart == null ? void 0 : onReasoningSignaturePart(value2));
                    break;
                case "redacted_reasoning":
                    await (onRedactedReasoningPart == null ? void 0 : onRedactedReasoningPart(value2));
                    break;
                case "file":
                    await (onFilePart == null ? void 0 : onFilePart(value2));
                    break;
                case "source":
                    await (onSourcePart == null ? void 0 : onSourcePart(value2));
                    break;
                case "data":
                    await (onDataPart == null ? void 0 : onDataPart(value2));
                    break;
                case "error":
                    await (onErrorPart == null ? void 0 : onErrorPart(value2));
                    break;
                case "message_annotations":
                    await (onMessageAnnotationsPart == null ? void 0 : onMessageAnnotationsPart(value2));
                    break;
                case "tool_call_streaming_start":
                    await (onToolCallStreamingStartPart == null ? void 0 : onToolCallStreamingStartPart(value2));
                    break;
                case "tool_call_delta":
                    await (onToolCallDeltaPart == null ? void 0 : onToolCallDeltaPart(value2));
                    break;
                case "tool_call":
                    await (onToolCallPart == null ? void 0 : onToolCallPart(value2));
                    break;
                case "tool_result":
                    await (onToolResultPart == null ? void 0 : onToolResultPart(value2));
                    break;
                case "finish_message":
                    await (onFinishMessagePart == null ? void 0 : onFinishMessagePart(value2));
                    break;
                case "finish_step":
                    await (onFinishStepPart == null ? void 0 : onFinishStepPart(value2));
                    break;
                case "start_step":
                    await (onStartStepPart == null ? void 0 : onStartStepPart(value2));
                    break;
                default:
                    {
                        const exhaustiveCheck = type;
                        throw new Error(`Unknown stream part type: ${exhaustiveCheck}`);
                    }
            }
        }
    }
}
// src/process-chat-response.ts
async function processChatResponse({ stream, update, onToolCall, onFinish, generateId: generateId2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"], getCurrentDate = ()=>/* @__PURE__ */ new Date(), lastMessage }) {
    var _a, _b;
    const replaceLastMessage = (lastMessage == null ? void 0 : lastMessage.role) === "assistant";
    let step = replaceLastMessage ? 1 + // find max step in existing tool invocations:
    ((_b = (_a = lastMessage.toolInvocations) == null ? void 0 : _a.reduce((max, toolInvocation)=>{
        var _a2;
        return Math.max(max, (_a2 = toolInvocation.step) != null ? _a2 : 0);
    }, 0)) != null ? _b : 0) : 0;
    const message = replaceLastMessage ? structuredClone(lastMessage) : {
        id: generateId2(),
        createdAt: getCurrentDate(),
        role: "assistant",
        content: "",
        parts: []
    };
    let currentTextPart = void 0;
    let currentReasoningPart = void 0;
    let currentReasoningTextDetail = void 0;
    function updateToolInvocationPart(toolCallId, invocation) {
        const part = message.parts.find((part2)=>part2.type === "tool-invocation" && part2.toolInvocation.toolCallId === toolCallId);
        if (part != null) {
            part.toolInvocation = invocation;
        } else {
            message.parts.push({
                type: "tool-invocation",
                toolInvocation: invocation
            });
        }
    }
    const data = [];
    let messageAnnotations = replaceLastMessage ? lastMessage == null ? void 0 : lastMessage.annotations : void 0;
    const partialToolCalls = {};
    let usage = {
        completionTokens: NaN,
        promptTokens: NaN,
        totalTokens: NaN
    };
    let finishReason = "unknown";
    function execUpdate() {
        const copiedData = [
            ...data
        ];
        if (messageAnnotations == null ? void 0 : messageAnnotations.length) {
            message.annotations = messageAnnotations;
        }
        const copiedMessage = {
            // deep copy the message to ensure that deep changes (msg attachments) are updated
            // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
            ...structuredClone(message),
            // add a revision id to ensure that the message is updated with SWR. SWR uses a
            // hashing approach by default to detect changes, but it only works for shallow
            // changes. This is why we need to add a revision id to ensure that the message
            // is updated with SWR (without it, the changes get stuck in SWR and are not
            // forwarded to rendering):
            revisionId: generateId2()
        };
        update({
            message: copiedMessage,
            data: copiedData,
            replaceLastMessage
        });
    }
    await processDataStream({
        stream,
        onTextPart (value) {
            if (currentTextPart == null) {
                currentTextPart = {
                    type: "text",
                    text: value
                };
                message.parts.push(currentTextPart);
            } else {
                currentTextPart.text += value;
            }
            message.content += value;
            execUpdate();
        },
        onReasoningPart (value) {
            var _a2;
            if (currentReasoningTextDetail == null) {
                currentReasoningTextDetail = {
                    type: "text",
                    text: value
                };
                if (currentReasoningPart != null) {
                    currentReasoningPart.details.push(currentReasoningTextDetail);
                }
            } else {
                currentReasoningTextDetail.text += value;
            }
            if (currentReasoningPart == null) {
                currentReasoningPart = {
                    type: "reasoning",
                    reasoning: value,
                    details: [
                        currentReasoningTextDetail
                    ]
                };
                message.parts.push(currentReasoningPart);
            } else {
                currentReasoningPart.reasoning += value;
            }
            message.reasoning = ((_a2 = message.reasoning) != null ? _a2 : "") + value;
            execUpdate();
        },
        onReasoningSignaturePart (value) {
            if (currentReasoningTextDetail != null) {
                currentReasoningTextDetail.signature = value.signature;
            }
        },
        onRedactedReasoningPart (value) {
            if (currentReasoningPart == null) {
                currentReasoningPart = {
                    type: "reasoning",
                    reasoning: "",
                    details: []
                };
                message.parts.push(currentReasoningPart);
            }
            currentReasoningPart.details.push({
                type: "redacted",
                data: value.data
            });
            currentReasoningTextDetail = void 0;
            execUpdate();
        },
        onFilePart (value) {
            message.parts.push({
                type: "file",
                mimeType: value.mimeType,
                data: value.data
            });
            execUpdate();
        },
        onSourcePart (value) {
            message.parts.push({
                type: "source",
                source: value
            });
            execUpdate();
        },
        onToolCallStreamingStartPart (value) {
            if (message.toolInvocations == null) {
                message.toolInvocations = [];
            }
            partialToolCalls[value.toolCallId] = {
                text: "",
                step,
                toolName: value.toolName,
                index: message.toolInvocations.length
            };
            const invocation = {
                state: "partial-call",
                step,
                toolCallId: value.toolCallId,
                toolName: value.toolName,
                args: void 0
            };
            message.toolInvocations.push(invocation);
            updateToolInvocationPart(value.toolCallId, invocation);
            execUpdate();
        },
        onToolCallDeltaPart (value) {
            const partialToolCall = partialToolCalls[value.toolCallId];
            partialToolCall.text += value.argsTextDelta;
            const { value: partialArgs } = parsePartialJson(partialToolCall.text);
            const invocation = {
                state: "partial-call",
                step: partialToolCall.step,
                toolCallId: value.toolCallId,
                toolName: partialToolCall.toolName,
                args: partialArgs
            };
            message.toolInvocations[partialToolCall.index] = invocation;
            updateToolInvocationPart(value.toolCallId, invocation);
            execUpdate();
        },
        async onToolCallPart (value) {
            const invocation = {
                state: "call",
                step,
                ...value
            };
            if (partialToolCalls[value.toolCallId] != null) {
                message.toolInvocations[partialToolCalls[value.toolCallId].index] = invocation;
            } else {
                if (message.toolInvocations == null) {
                    message.toolInvocations = [];
                }
                message.toolInvocations.push(invocation);
            }
            updateToolInvocationPart(value.toolCallId, invocation);
            execUpdate();
            if (onToolCall) {
                const result = await onToolCall({
                    toolCall: value
                });
                if (result != null) {
                    const invocation2 = {
                        state: "result",
                        step,
                        ...value,
                        result
                    };
                    message.toolInvocations[message.toolInvocations.length - 1] = invocation2;
                    updateToolInvocationPart(value.toolCallId, invocation2);
                    execUpdate();
                }
            }
        },
        onToolResultPart (value) {
            const toolInvocations = message.toolInvocations;
            if (toolInvocations == null) {
                throw new Error("tool_result must be preceded by a tool_call");
            }
            const toolInvocationIndex = toolInvocations.findIndex((invocation2)=>invocation2.toolCallId === value.toolCallId);
            if (toolInvocationIndex === -1) {
                throw new Error("tool_result must be preceded by a tool_call with the same toolCallId");
            }
            const invocation = {
                ...toolInvocations[toolInvocationIndex],
                state: "result",
                ...value
            };
            toolInvocations[toolInvocationIndex] = invocation;
            updateToolInvocationPart(value.toolCallId, invocation);
            execUpdate();
        },
        onDataPart (value) {
            data.push(...value);
            execUpdate();
        },
        onMessageAnnotationsPart (value) {
            if (messageAnnotations == null) {
                messageAnnotations = [
                    ...value
                ];
            } else {
                messageAnnotations.push(...value);
            }
            execUpdate();
        },
        onFinishStepPart (value) {
            step += 1;
            currentTextPart = value.isContinued ? currentTextPart : void 0;
            currentReasoningPart = void 0;
            currentReasoningTextDetail = void 0;
        },
        onStartStepPart (value) {
            if (!replaceLastMessage) {
                message.id = value.messageId;
            }
            message.parts.push({
                type: "step-start"
            });
            execUpdate();
        },
        onFinishMessagePart (value) {
            finishReason = value.finishReason;
            if (value.usage != null) {
                usage = calculateLanguageModelUsage(value.usage);
            }
        },
        onErrorPart (error) {
            throw new Error(error);
        }
    });
    onFinish == null ? void 0 : onFinish({
        message,
        finishReason,
        usage
    });
}
;
// src/process-text-stream.ts
async function processTextStream({ stream, onTextPart }) {
    const reader = stream.pipeThrough(new TextDecoderStream()).getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        await onTextPart(value);
    }
}
// src/process-chat-text-response.ts
async function processChatTextResponse({ stream, update, onFinish, getCurrentDate = ()=>/* @__PURE__ */ new Date(), generateId: generateId2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"] }) {
    const textPart = {
        type: "text",
        text: ""
    };
    const resultMessage = {
        id: generateId2(),
        createdAt: getCurrentDate(),
        role: "assistant",
        content: "",
        parts: [
            textPart
        ]
    };
    await processTextStream({
        stream,
        onTextPart: (chunk)=>{
            resultMessage.content += chunk;
            textPart.text += chunk;
            update({
                message: {
                    ...resultMessage
                },
                data: [],
                replaceLastMessage: false
            });
        }
    });
    onFinish == null ? void 0 : onFinish(resultMessage, {
        usage: {
            completionTokens: NaN,
            promptTokens: NaN,
            totalTokens: NaN
        },
        finishReason: "unknown"
    });
}
// src/call-chat-api.ts
var getOriginalFetch = ()=>fetch;
async function callChatApi({ api, body, streamProtocol = "data", credentials, headers, abortController, restoreMessagesOnFailure, onResponse, onUpdate, onFinish, onToolCall, generateId: generateId2, fetch: fetch2 = getOriginalFetch(), lastMessage, requestType = "generate" }) {
    var _a, _b, _c;
    const request = requestType === "resume" ? fetch2(`${api}?chatId=${body.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        signal: (_a = abortController == null ? void 0 : abortController()) == null ? void 0 : _a.signal,
        credentials
    }) : fetch2(api, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        signal: (_b = abortController == null ? void 0 : abortController()) == null ? void 0 : _b.signal,
        credentials
    });
    const response = await request.catch((err)=>{
        restoreMessagesOnFailure();
        throw err;
    });
    if (onResponse) {
        try {
            await onResponse(response);
        } catch (err) {
            throw err;
        }
    }
    if (!response.ok) {
        restoreMessagesOnFailure();
        throw new Error((_c = await response.text()) != null ? _c : "Failed to fetch the chat response.");
    }
    if (!response.body) {
        throw new Error("The response body is empty.");
    }
    switch(streamProtocol){
        case "text":
            {
                await processChatTextResponse({
                    stream: response.body,
                    update: onUpdate,
                    onFinish,
                    generateId: generateId2
                });
                return;
            }
        case "data":
            {
                await processChatResponse({
                    stream: response.body,
                    update: onUpdate,
                    lastMessage,
                    onToolCall,
                    onFinish ({ message, finishReason, usage }) {
                        if (onFinish && message != null) {
                            onFinish(message, {
                                usage,
                                finishReason
                            });
                        }
                    },
                    generateId: generateId2
                });
                return;
            }
        default:
            {
                const exhaustiveCheck = streamProtocol;
                throw new Error(`Unknown stream protocol: ${exhaustiveCheck}`);
            }
    }
}
// src/call-completion-api.ts
var getOriginalFetch2 = ()=>fetch;
async function callCompletionApi({ api, prompt, credentials, headers, body, streamProtocol = "data", setCompletion, setLoading, setError, setAbortController, onResponse, onFinish, onError, onData, fetch: fetch2 = getOriginalFetch2() }) {
    var _a;
    try {
        setLoading(true);
        setError(void 0);
        const abortController = new AbortController();
        setAbortController(abortController);
        setCompletion("");
        const response = await fetch2(api, {
            method: "POST",
            body: JSON.stringify({
                prompt,
                ...body
            }),
            credentials,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            signal: abortController.signal
        }).catch((err)=>{
            throw err;
        });
        if (onResponse) {
            try {
                await onResponse(response);
            } catch (err) {
                throw err;
            }
        }
        if (!response.ok) {
            throw new Error((_a = await response.text()) != null ? _a : "Failed to fetch the chat response.");
        }
        if (!response.body) {
            throw new Error("The response body is empty.");
        }
        let result = "";
        switch(streamProtocol){
            case "text":
                {
                    await processTextStream({
                        stream: response.body,
                        onTextPart: (chunk)=>{
                            result += chunk;
                            setCompletion(result);
                        }
                    });
                    break;
                }
            case "data":
                {
                    await processDataStream({
                        stream: response.body,
                        onTextPart (value) {
                            result += value;
                            setCompletion(result);
                        },
                        onDataPart (value) {
                            onData == null ? void 0 : onData(value);
                        },
                        onErrorPart (value) {
                            throw new Error(value);
                        }
                    });
                    break;
                }
            default:
                {
                    const exhaustiveCheck = streamProtocol;
                    throw new Error(`Unknown stream protocol: ${exhaustiveCheck}`);
                }
        }
        if (onFinish) {
            onFinish(prompt, result);
        }
        setAbortController(null);
        return result;
    } catch (err) {
        if (err.name === "AbortError") {
            setAbortController(null);
            return null;
        }
        if (err instanceof Error) {
            if (onError) {
                onError(err);
            }
        }
        setError(err);
    } finally{
        setLoading(false);
    }
}
// src/data-url.ts
function getTextFromDataUrl(dataUrl) {
    const [header, base64Content] = dataUrl.split(",");
    const mimeType = header.split(";")[0].split(":")[1];
    if (mimeType == null || base64Content == null) {
        throw new Error("Invalid data URL format");
    }
    try {
        return window.atob(base64Content);
    } catch (error) {
        throw new Error(`Error decoding data URL`);
    }
}
// src/extract-max-tool-invocation-step.ts
function extractMaxToolInvocationStep(toolInvocations) {
    return toolInvocations == null ? void 0 : toolInvocations.reduce((max, toolInvocation)=>{
        var _a;
        return Math.max(max, (_a = toolInvocation.step) != null ? _a : 0);
    }, 0);
}
// src/get-message-parts.ts
function getMessageParts(message) {
    var _a;
    return (_a = message.parts) != null ? _a : [
        ...message.toolInvocations ? message.toolInvocations.map((toolInvocation)=>({
                type: "tool-invocation",
                toolInvocation
            })) : [],
        ...message.reasoning ? [
            {
                type: "reasoning",
                reasoning: message.reasoning,
                details: [
                    {
                        type: "text",
                        text: message.reasoning
                    }
                ]
            }
        ] : [],
        ...message.content ? [
            {
                type: "text",
                text: message.content
            }
        ] : []
    ];
}
// src/fill-message-parts.ts
function fillMessageParts(messages) {
    return messages.map((message)=>({
            ...message,
            parts: getMessageParts(message)
        }));
}
// src/is-deep-equal-data.ts
function isDeepEqualData(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== "object" && typeof obj2 !== "object") return obj1 === obj2;
    if (obj1.constructor !== obj2.constructor) return false;
    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime();
    }
    if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) return false;
        for(let i = 0; i < obj1.length; i++){
            if (!isDeepEqualData(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        if (!keys2.includes(key)) return false;
        if (!isDeepEqualData(obj1[key], obj2[key])) return false;
    }
    return true;
}
// src/prepare-attachments-for-request.ts
async function prepareAttachmentsForRequest(attachmentsFromOptions) {
    if (!attachmentsFromOptions) {
        return [];
    }
    if (globalThis.FileList && attachmentsFromOptions instanceof globalThis.FileList) {
        return Promise.all(Array.from(attachmentsFromOptions).map(async (attachment)=>{
            const { name, type } = attachment;
            const dataUrl = await new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.onload = (readerEvent)=>{
                    var _a;
                    resolve((_a = readerEvent.target) == null ? void 0 : _a.result);
                };
                reader.onerror = (error)=>reject(error);
                reader.readAsDataURL(attachment);
            });
            return {
                name,
                contentType: type,
                url: dataUrl
            };
        }));
    }
    if (Array.isArray(attachmentsFromOptions)) {
        return attachmentsFromOptions;
    }
    throw new Error("Invalid attachments type");
}
// src/process-assistant-stream.ts
var NEWLINE2 = "\n".charCodeAt(0);
function concatChunks2(chunks, totalLength) {
    const concatenatedChunks = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks){
        concatenatedChunks.set(chunk, offset);
        offset += chunk.length;
    }
    chunks.length = 0;
    return concatenatedChunks;
}
async function processAssistantStream({ stream, onTextPart, onErrorPart, onAssistantMessagePart, onAssistantControlDataPart, onDataMessagePart }) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    const chunks = [];
    let totalLength = 0;
    while(true){
        const { value } = await reader.read();
        if (value) {
            chunks.push(value);
            totalLength += value.length;
            if (value[value.length - 1] !== NEWLINE2) {
                continue;
            }
        }
        if (chunks.length === 0) {
            break;
        }
        const concatenatedChunks = concatChunks2(chunks, totalLength);
        totalLength = 0;
        const streamParts = decoder.decode(concatenatedChunks, {
            stream: true
        }).split("\n").filter((line)=>line !== "").map(parseAssistantStreamPart);
        for (const { type, value: value2 } of streamParts){
            switch(type){
                case "text":
                    await (onTextPart == null ? void 0 : onTextPart(value2));
                    break;
                case "error":
                    await (onErrorPart == null ? void 0 : onErrorPart(value2));
                    break;
                case "assistant_message":
                    await (onAssistantMessagePart == null ? void 0 : onAssistantMessagePart(value2));
                    break;
                case "assistant_control_data":
                    await (onAssistantControlDataPart == null ? void 0 : onAssistantControlDataPart(value2));
                    break;
                case "data_message":
                    await (onDataMessagePart == null ? void 0 : onDataMessagePart(value2));
                    break;
                default:
                    {
                        const exhaustiveCheck = type;
                        throw new Error(`Unknown stream part type: ${exhaustiveCheck}`);
                    }
            }
        }
    }
}
;
;
function zodSchema(zodSchema2, options) {
    var _a;
    const useReferences = (_a = options == null ? void 0 : options.useReferences) != null ? _a : false;
    return jsonSchema((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$24$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(zodSchema2, {
        $refStrategy: useReferences ? "root" : "none",
        target: "jsonSchema7"
    }), {
        validate: (value)=>{
            const result = zodSchema2.safeParse(value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
// src/schema.ts
var schemaSymbol = Symbol.for("vercel.ai.schema");
function jsonSchema(jsonSchema2, { validate } = {}) {
    return {
        [schemaSymbol]: true,
        _type: void 0,
        // should never be used directly
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatorSymbol"]]: true,
        jsonSchema: jsonSchema2,
        validate
    };
}
function isSchema(value) {
    return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
    return isSchema(schema) ? schema : zodSchema(schema);
}
// src/should-resubmit-messages.ts
function shouldResubmitMessages({ originalMaxToolInvocationStep, originalMessageCount, maxSteps, messages }) {
    var _a;
    const lastMessage = messages[messages.length - 1];
    return(// check if the feature is enabled:
    maxSteps > 1 && // ensure there is a last message:
    lastMessage != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (messages.length > originalMessageCount || extractMaxToolInvocationStep(lastMessage.toolInvocations) !== originalMaxToolInvocationStep) && // check that next step is possible:
    isAssistantMessageWithCompletedToolCalls(lastMessage) && // limit the number of automatic steps:
    ((_a = extractMaxToolInvocationStep(lastMessage.toolInvocations)) != null ? _a : 0) < maxSteps);
}
function isAssistantMessageWithCompletedToolCalls(message) {
    if (message.role !== "assistant") {
        return false;
    }
    const lastStepStartIndex = message.parts.reduce((lastIndex, part, index)=>{
        return part.type === "step-start" ? index : lastIndex;
    }, -1);
    const lastStepToolInvocations = message.parts.slice(lastStepStartIndex + 1).filter((part)=>part.type === "tool-invocation");
    return lastStepToolInvocations.length > 0 && lastStepToolInvocations.every((part)=>"result" in part.toolInvocation);
}
// src/update-tool-call-result.ts
function updateToolCallResult({ messages, toolCallId, toolResult: result }) {
    var _a;
    const lastMessage = messages[messages.length - 1];
    const invocationPart = lastMessage.parts.find((part)=>part.type === "tool-invocation" && part.toolInvocation.toolCallId === toolCallId);
    if (invocationPart == null) {
        return;
    }
    const toolResult = {
        ...invocationPart.toolInvocation,
        state: "result",
        result
    };
    invocationPart.toolInvocation = toolResult;
    lastMessage.toolInvocations = (_a = lastMessage.toolInvocations) == null ? void 0 : _a.map((toolInvocation)=>toolInvocation.toolCallId === toolCallId ? toolResult : toolInvocation);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_REVALIDATE_EVENT",
    ()=>ERROR_REVALIDATE_EVENT,
    "FOCUS_EVENT",
    ()=>FOCUS_EVENT,
    "MUTATE_EVENT",
    ()=>MUTATE_EVENT,
    "RECONNECT_EVENT",
    ()=>RECONNECT_EVENT
]);
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>noop,
    "B",
    ()=>isPromiseLike,
    "I",
    ()=>IS_REACT_LEGACY,
    "O",
    ()=>OBJECT,
    "S",
    ()=>SWRConfigContext,
    "U",
    ()=>UNDEFINED,
    "a",
    ()=>isFunction,
    "b",
    ()=>SWRGlobalState,
    "c",
    ()=>cache,
    "d",
    ()=>defaultConfig,
    "e",
    ()=>isUndefined,
    "f",
    ()=>mergeConfigs,
    "g",
    ()=>SWRConfig,
    "h",
    ()=>initCache,
    "i",
    ()=>isWindowDefined,
    "j",
    ()=>mutate,
    "k",
    ()=>compare,
    "l",
    ()=>stableHash,
    "m",
    ()=>mergeObjects,
    "n",
    ()=>internalMutate,
    "o",
    ()=>getTimestamp,
    "p",
    ()=>preset,
    "q",
    ()=>defaultConfigOptions,
    "r",
    ()=>IS_SERVER,
    "s",
    ()=>serialize,
    "t",
    ()=>rAF,
    "u",
    ()=>useIsomorphicLayoutEffect,
    "v",
    ()=>slowConnection,
    "w",
    ()=>isDocumentDefined,
    "x",
    ()=>isLegacyDeno,
    "y",
    ()=>hasRequestAnimationFrame,
    "z",
    ()=>createCacheHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = "undefined" != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const isLegacyDeno = isWindowDefined && 'Deno' in window;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        // Getter
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        // Setter
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                // Before writing to the store, we keep the value in the initial cache
                // if it's not there yet.
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        ()=>{
            if (!isUndefined(key)) {
                // If the cache was updated on the client, we return the stored initial value.
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            // If we haven't done any client-side updates, we return the current value.
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;
/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */ let online = true;
const isOnline = ()=>online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    // focus revalidate
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    // revalidate on reconnected
    const onOnline = ()=>{
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};
const IS_REACT_LEGACY = !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId;
const IS_SERVER = !isWindowDefined || isLegacyDeno;
// Polyfill requestAnimationFrame
const rAF = (f)=>hasRequestAnimationFrame() ? "TURBOPACK unreachable" : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"] : "TURBOPACK unreachable";
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const getTypeName = (value)=>OBJECT.prototype.toString.call(value);
const isObjectTypeName = (typeName, type)=>typeName === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const typeName = getTypeName(arg);
    const isDate = isObjectTypeName(typeName, 'Date');
    const isRegex = isObjectTypeName(typeName, 'RegExp');
    const isPlainObject = isObjectTypeName(typeName, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
// Global timestamp.
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;
async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    // When passing as a boolean, it's explicitly used to disable/enable
    // revalidation.
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    // If the second argument is a key filter, return the mutation results for all
    // filtered keys.
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (!/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    //TURBOPACK unreachable
    ;
    async function mutateByKey(_k) {
        // Serialize key
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const startRevalidate = ()=>{
            const revalidators = EVENT_REVALIDATORS[key];
            const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
            if (revalidate) {
                // Invalidate the key by deleting the concurrent request markers so new
                // requests will not be deduped.
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MUTATE_EVENT"]).then(()=>get().data);
                }
            }
            return get().data;
        };
        // If there is no new data provided, revalidate the key with current state.
        if (args.length < 3) {
            // Revalidate and broadcast state.
            return startRevalidate();
        }
        let data = _data;
        let error;
        let isError = false;
        // Update global timestamps.
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        // `displayedData` is the current value on screen. It could be the optimistic value
        // that is going to be overridden by a `committedData`, or get reverted back.
        // `committedData` is the validated value that comes from a fetch or mutation.
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        // Do optimistic data update.
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            // When we set optimistic data, backup the current committedData data in `_c`.
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
                data = data(committedData);
            } catch (err) {
                // If it throws an error synchronously, we shouldn't update the cache.
                error = err;
                isError = true;
            }
        }
        // `data` is a promise/thenable, resolve the final data first.
        if (data && isPromiseLike(data)) {
            // This means that the mutation is async, we need to check timestamps to
            // avoid race conditions.
            data = await data.catch((err)=>{
                error = err;
                isError = true;
            });
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (isError) throw error;
                return data;
            } else if (isError && hasOptimisticData && rollbackOnError(error)) {
                // Rollback. Always populate the cache in this case but without
                // transforming the data.
                populateCache = true;
                // Reset data to be the latest committed data, and clear the `_c` value.
                set({
                    data: committedData,
                    _c: UNDEFINED
                });
            }
        }
        // If we should write back the cache after request.
        if (populateCache) {
            if (!isError) {
                // Transform the result into data.
                if (isFunction(populateCache)) {
                    const populateCachedData = populateCache(data, committedData);
                    set({
                        data: populateCachedData,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                } else {
                    // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
                    set({
                        data,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                }
            }
        }
        // Reset the timestamp to mark the mutation has ended.
        MUTATION[key][1] = getTimestamp();
        // Update existing SWR Hooks' internal states:
        Promise.resolve(startRevalidate()).then(()=>{
            // The mutation and revalidation are ended, we can clear it since the data is
            // not an optimistic value anymore.
            set({
                _c: UNDEFINED
            });
        });
        // Throw error or return data
        if (isError) {
            if (throwOnError) throw error;
            return;
        }
        return data;
    }
}
const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that is bound to
    // the cache.
    // The provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        const EVENT_REVALIDATORS = Object.create(null);
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = Object.create(null);
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                // Update the state if it's new, or if the provider has been extended.
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    mutate,
                    setter,
                    subscribe
                ]);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        };
        initProvider();
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};
// error retry
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    // Exponential backoff
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"];
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 3000,
    // providers
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, preset);
const mergeConfigs = (a, b)=>{
    // Need to create a new object to avoid mutating the original here.
    const v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};
const SWRConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isFunctionalConfig ? value(parentConfig) : value, [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    // Extend parent context values and middleware.
    const extendedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    // Should not use the inherited provider.
    const provider = config && config.provider;
    // initialize the cache only on first access.
    const cacheContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(()=>{
        if (cacheContext) {
            cacheContext[2] && cacheContext[2]();
            return cacheContext[3];
        }
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export U as UNDEFINED>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNDEFINED",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["U"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export O as OBJECT>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OBJECT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export g as SWRConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export d as defaultConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/constants.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INFINITE_PREFIX",
    ()=>INFINITE_PREFIX
]);
const INFINITE_PREFIX = '$inf$';
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize,
    "preload",
    ()=>preload,
    "subscribeCallback",
    ()=>subscribeCallback,
    "useSWRConfig",
    ()=>useSWRConfig,
    "withArgs",
    ()=>withArgs,
    "withMiddleware",
    ()=>withMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/constants.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// @ts-expect-error
const enableDevtools = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"] && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    }
};
const normalize = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};
const useSWRConfig = ()=>{
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"]);
    const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"], parentConfig), [
        parentConfig
    ]);
    return mergedConfig;
};
const preload = (key_, fetcher)=>{
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(key_);
    const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]);
    // Prevent preload to be called multiple times before used.
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        // fetcher might be a sync function, so this should not be an async function
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(key_);
            const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]);
            if (key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"])) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };
const BUILT_IN_MIDDLEWARE = use.concat(middleware);
// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        // Get the default and inherited configuration.
        const fallbackConfig = useSWRConfig();
        // Normalize arguments.
        const [key, fn, _config] = normalize(args);
        // Merge configurations.
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(fallbackConfig, _config);
        // Apply middleware
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};
// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};
// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};
setupDevTools();
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export b as SWRGlobalState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRGlobalState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export s as serialize>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export z as createCacheHelper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCacheHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export e as isUndefined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export B as isPromiseLike>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPromiseLike",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export o as getTimestamp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimestamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export a as isFunction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript) <export * as revalidateEvents>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revalidateEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export n as internalMutate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "internalMutate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export u as useIsomorphicLayoutEffect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export r as IS_SERVER>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_SERVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export t as rAF>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rAF",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export I as IS_REACT_LEGACY>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_REACT_LEGACY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export m as mergeObjects>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeObjects",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/index/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWRConfig",
    ()=>SWRConfig,
    "default",
    ()=>useSWR,
    "unstable_serialize",
    ()=>unstable_serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export U as UNDEFINED>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export O as OBJECT>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export g as SWRConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export d as defaultConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export b as SWRGlobalState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export s as serialize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export z as createCacheHelper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export e as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export B as isPromiseLike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export o as getTimestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export a as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/events.mjs [app-ssr] (ecmascript) <export * as revalidateEvents>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export n as internalMutate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export u as useIsomorphicLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export r as IS_SERVER>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export t as rAF>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export I as IS_REACT_LEGACY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs [app-ssr] (ecmascript) <export m as mergeObjects>");
;
;
;
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const getTypeName = (value)=>OBJECT.prototype.toString.call(value);
const isObjectTypeName = (typeName, type)=>typeName === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const typeName = getTypeName(arg);
    const isDate = isObjectTypeName(typeName, 'Date');
    const isRegex = isObjectTypeName(typeName, 'RegExp');
    const isPlainObject = isObjectTypeName(typeName, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const unstable_serialize = (key)=>serialize(key)[0];
/// <reference types="react/experimental" />
const use = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((thenable)=>{
    switch(thenable.status){
        case 'pending':
            throw thenable;
        case 'fulfilled':
            return thenable.value;
        case 'rejected':
            throw thenable.reason;
        default:
            thenable.status = 'pending';
            thenable.then((v)=>{
                thenable.status = 'fulfilled';
                thenable.value = v;
            }, (e)=>{
                thenable.status = 'rejected';
                thenable.reason = e;
            });
            throw thenable;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const resolvedUndef = Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"]);
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__["SWRGlobalState"].get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__["serialize"])(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Refs to keep the key and config.
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(key);
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache, key);
    const stateDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({}).current;
    // Resolve the fallback data from either the inline option, or the global provider.
    // If it's a promise, we simply let React suspend and resolve it for us.
    const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(fallbackData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(config.fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"] : config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const shouldStartRequest = (()=>{
            if (!key) return false;
            if (!fetcher) return false;
            // If `revalidateOnMount` is set, we take the value directly.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
            // If it's paused, we skip revalidation.
            if (getConfig().isPaused()) return false;
            if (suspense) return false;
            return revalidateIfStale !== false;
        })();
        // Get the cache and merge it with expected states.
        const getSelectedCache = (state)=>{
            // We only select the needed fields from the state.
            const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__["mergeObjects"])(state);
            delete snapshot._k;
            if (!shouldStartRequest) {
                return snapshot;
            }
            return {
                isValidating: true,
                isLoading: true,
                ...snapshot
            };
        };
        const cachedData = getCache();
        const initialData = getInitialCache();
        const clientSnapshot = getSelectedCache(cachedData);
        const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
        // To make sure that we are returning the same object reference to avoid
        // unnecessary re-renders, we keep the previous snapshot and use deep
        // comparison to check if we need to return a new one.
        let memorizedSnapshot = clientSnapshot;
        return [
            ()=>{
                const newSnapshot = getSelectedCache(getCache());
                const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                if (compareResult) {
                    // Mentally, we should always return the `memorizedSnapshot` here
                    // as there's no change between the new and old snapshots.
                    // However, since the `isEqual` function only compares selected fields,
                    // the values of the unselected fields might be changed. That's
                    // simply because we didn't track them.
                    // To support the case in https://github.com/vercel/swr/pull/2576,
                    // we need to update these fields in the `memorizedSnapshot` too
                    // with direct mutations to ensure the snapshot is always up-to-date
                    // even for the unselected fields, but only trigger re-renders when
                    // the selected fields are changed.
                    memorizedSnapshot.data = newSnapshot.data;
                    memorizedSnapshot.isLoading = newSnapshot.isLoading;
                    memorizedSnapshot.isValidating = newSnapshot.isValidating;
                    memorizedSnapshot.error = newSnapshot.error;
                    return memorizedSnapshot;
                } else {
                    memorizedSnapshot = newSnapshot;
                    return newSnapshot;
                }
            },
            ()=>serverSnapshot
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cache,
        key
    ]);
    // Get the current state that SWR should return.
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>subscribeCache(key, (current, prev)=>{
            if (!isEqual(prev, current)) callback();
        }), [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? fallback && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__["isPromiseLike"])(fallback) ? use(fallback) : fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(data);
    const returnedData = keepPreviousData ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || revalidateIfStale;
    })();
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (revalidateOpts)=>{
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        // If there is no ongoing concurrent request, or `dedupe` is not set, a
        // new request should be initiated.
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        /*
         For React 17
         Do unmount check for calls:
         If key has changed during the revalidation, or the component has been
         unmounted, old dispatch and old event callbacks should not take any
         effect

        For React 18
        only check if key has changed
        https://github.com/reactwg/react-18/discussions/82
      */ const callbackSafeguard = ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"]) {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
        };
        // The final state object when the request finishes.
        const finalState = {
            isValidating: false,
            isLoading: false
        };
        const finishRequestAndUpdateState = ()=>{
            setCache(finalState);
        };
        const cleanupState = ()=>{
            // Check if it's still the same request before deleting it.
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
            }
        };
        // Start fetching. Change the `isValidating` state, update the cache.
        const initialState = {
            isValidating: true
        };
        // It is in the `isLoading` state, if and only if there is no cached data.
        // This bypasses fallback data and laggy data.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
            initialState.isLoading = true;
        }
        try {
            if (shouldStartNewRequest) {
                setCache(initialState);
                // If no cache is being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
                    setTimeout(()=>{
                        if (loading && callbackSafeguard()) {
                            getConfig().onLoadingSlow(key, config);
                        }
                    }, config.loadingTimeout);
                }
                // Start the request and save the timestamp.
                // Key must be truthy if entering here.
                FETCH[key] = [
                    currentFetcher(fnArg),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__["getTimestamp"])()
                ];
            }
            // Wait until the ongoing request is done. Deduplication is also
            // considered here.
            ;
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
                // If the request isn't interrupted, clean it up after the
                // deduplication interval.
                setTimeout(cleanupState, config.dedupingInterval);
            }
            // If there're other ongoing request(s), started after the current one,
            // we need to ignore the current one to avoid possible race conditions:
            //   req1------------------>res1        (current one)
            //        req2---------------->res2
            // the request that fired later will always be kept.
            // The timestamp maybe be `undefined` or a number
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Clear error.
            finalState.error = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"];
            // If there're other mutations(s), that overlapped with the current revalidation:
            // case 1:
            //   req------------------>res
            //       mutate------>end
            // case 2:
            //         req------------>res
            //   mutate------>end
            // case 3:
            //   req------------------>res
            //       mutate-------...---------->
            // we have to ignore the revalidation result (res) because it's no longer fresh.
            // meanwhile, a new revalidation should be triggered when the mutation ends.
            const mutationInfo = MUTATION[key];
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(mutationInfo) && // case 1
            (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Deep compare with the latest state to avoid extra re-renders.
            // For local state, compare and assign.
            const cacheData = getCache().data;
            // Since the compare fn could be custom fn
            // cacheData might be different from newData even when compare fn returns True
            finalState.data = compare(cacheData, newData) ? cacheData : newData;
            // Trigger the successful callback if it's the original request.
            if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                    getConfig().onSuccess(newData, key, config);
                }
            }
        } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            // Not paused, we continue handling the error. Otherwise, discard it.
            if (!currentConfig.isPaused()) {
                // Get a new error, don't use deep comparison for errors.
                finalState.error = err;
                // Error event and retry logic. Only for the actual request, not
                // deduped ones.
                if (shouldStartNewRequest && callbackSafeguard()) {
                    currentConfig.onError(err, key, currentConfig);
                    if (shouldRetryOnError === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(shouldRetryOnError) && shouldRetryOnError(err)) {
                        if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                            // If it's inactive, stop. It will auto-revalidate when
                            // refocusing or reconnecting.
                            // When retrying, deduplication is always enabled.
                            currentConfig.onErrorRetry(err, key, currentConfig, (_opts)=>{
                                const revalidators = EVENT_REVALIDATORS[key];
                                if (revalidators && revalidators[0]) {
                                    revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT, _opts);
                                }
                            }, {
                                retryCount: (opts.retryCount || 0) + 1,
                                dedupe: true
                            });
                        }
                    }
                }
            }
        }
        // Mark loading as stopped.
        loading = false;
        // Update the current hook's state.
        finishRequestAndUpdateState();
        return true;
    }, // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key,
        cache
    ]);
    // Similar to the global mutate but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    const boundMutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__["internalMutate"])(cache, keyRef.current, ...args);
    }, []);
    // The logic for updating refs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])(()=>{
        fetcherRef.current = fetcher;
        configRef.current = config;
        // Handle laggy data updates. If there's cached data of the current key,
        // it'll be the correct reference.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData)) {
            laggyDataRef.current = cachedData;
        }
    });
    // After mounted or key changed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])(()=>{
        if (!key) return;
        const softRevalidate = revalidate.bind(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"], WITH_DEDUPE);
        let nextFocusRevalidatedAt = 0;
        if (getConfig().revalidateOnFocus) {
            const initNow = Date.now();
            nextFocusRevalidatedAt = initNow + getConfig().focusThrottleInterval;
        }
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        const onRevalidate = (type, opts = {})=>{
            if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].FOCUS_EVENT) {
                const now = Date.now();
                if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].MUTATE_EVENT) {
                return revalidate();
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT) {
                return revalidate(opts);
            }
            return;
        };
        const unsubEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeCallback"])(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // Keep the original key in the cache.
        setCache({
            _k: fnArg
        });
        // Trigger a revalidation
        if (shouldDoInitialRevalidation) {
            // Performance optimization: if a request is already in progress for this key,
            // skip the revalidation to avoid redundant work
            if (!FETCH[key]) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__["IS_SERVER"]) {
                    // Revalidate immediately.
                    softRevalidate();
                } else {
                    // Delay the revalidate if we have data to return so we won't block
                    // rendering.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__["rAF"])(softRevalidate);
                }
            }
        }
        return ()=>{
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubEvents();
        };
    }, [
        key
    ]);
    // Polling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])(()=>{
        let timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
            // We only start the next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online, and not errored.
            if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            } else {
                // Schedule the next interval to check again.
                next();
            }
        }
        next();
        return ()=>{
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    // Display debug info in React DevTools.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense) {
        const hasKeyButNoData = key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data);
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any fallback data. This causes hydration errors. See:
        // https://github.com/vercel/swr/issues/1832
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__["IS_SERVER"] && hasKeyButNoData) {
            throw new Error('Fallback data is required when using Suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        if (hasKeyButNoData) {
            fetcherRef.current = fetcher;
            configRef.current = config;
            unmountedRef.current = false;
        }
        const req = PRELOAD[key];
        const mutateReq = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(req) && hasKeyButNoData ? boundMutate(req) : resolvedUndef;
        use(mutateReq);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error) && hasKeyButNoData) {
            throw error;
        }
        const revalidation = hasKeyButNoData ? revalidate(WITH_DEDUPE) : resolvedUndef;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(returnedData) && hasKeyButNoData) {
            // @ts-ignore modify react promise status
            revalidation.status = 'fulfilled';
            // @ts-ignore modify react promise value
            revalidation.value = true;
        }
        use(revalidation);
    }
    const swrResponse = {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
    return swrResponse;
};
const SWRConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__["OBJECT"].defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__["SWRConfig"], 'defaultValue', {
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$BoS53ST9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__["defaultConfig"]
});
/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */ const useSWR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withArgs"])(useSWRHandler);
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/throttleit@2.1.0/node_modules/throttleit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function throttle(function_, wait) {
    if (typeof function_ !== 'function') {
        throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
    }
    // TODO: Add `wait` validation too in the next major version.
    let timeoutId;
    let lastCallTime = 0;
    return function throttled(...arguments_) {
        clearTimeout(timeoutId);
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        const delayForNextCall = wait - timeSinceLastCall;
        if (delayForNextCall <= 0) {
            lastCallTime = now;
            function_.apply(this, arguments_);
        } else {
            timeoutId = setTimeout(()=>{
                lastCallTime = Date.now();
                function_.apply(this, arguments_);
            }, delayForNextCall);
        }
    };
}
module.exports = throttle;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+react@1.2.12_react@19.1.0_zod@3.25.76/node_modules/@ai-sdk/react/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/use-assistant.ts
__turbopack_context__.s([
    "experimental_useObject",
    ()=>experimental_useObject,
    "useAssistant",
    ()=>useAssistant,
    "useChat",
    ()=>useChat,
    "useCompletion",
    ()=>useCompletion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+provider-utils@2.2.8_zod@3.25.76/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ai-sdk+ui-utils@1.2.11_zod@3.25.76/node_modules/@ai-sdk/ui-utils/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/swr@2.3.6_react@19.1.0/node_modules/swr/dist/index/index.mjs [app-ssr] (ecmascript) <locals>");
// src/throttle.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$throttleit$40$2$2e$1$2e$0$2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/throttleit@2.1.0/node_modules/throttleit/index.js [app-ssr] (ecmascript)");
;
;
;
var getOriginalFetch = ()=>fetch;
function useAssistant({ api, threadId: threadIdParam, credentials, headers, body, onError, fetch: fetch2 }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentThreadId, setCurrentThreadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("awaiting_message");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const handleInputChange = (event)=>{
        setInput(event.target.value);
    };
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    }, []);
    const append = async (message, requestOptions)=>{
        var _a, _b;
        setStatus("in_progress");
        setMessages((messages2)=>{
            var _a2;
            return [
                ...messages2,
                {
                    ...message,
                    id: (_a2 = message.id) != null ? _a2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])()
                }
            ];
        });
        setInput("");
        const abortController = new AbortController();
        try {
            abortControllerRef.current = abortController;
            const actualFetch = fetch2 != null ? fetch2 : getOriginalFetch();
            const response = await actualFetch(api, {
                method: "POST",
                credentials,
                signal: abortController.signal,
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify({
                    ...body,
                    // always use user-provided threadId when available:
                    threadId: (_a = threadIdParam != null ? threadIdParam : currentThreadId) != null ? _a : null,
                    message: message.content,
                    // optional request data:
                    data: requestOptions == null ? void 0 : requestOptions.data
                })
            });
            if (!response.ok) {
                throw new Error((_b = await response.text()) != null ? _b : "Failed to fetch the assistant response.");
            }
            if (response.body == null) {
                throw new Error("The response body is empty.");
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["processAssistantStream"])({
                stream: response.body,
                onAssistantMessagePart (value) {
                    setMessages((messages2)=>[
                            ...messages2,
                            {
                                id: value.id,
                                role: value.role,
                                content: value.content[0].text.value,
                                parts: []
                            }
                        ]);
                },
                onTextPart (value) {
                    setMessages((messages2)=>{
                        const lastMessage = messages2[messages2.length - 1];
                        return [
                            ...messages2.slice(0, messages2.length - 1),
                            {
                                id: lastMessage.id,
                                role: lastMessage.role,
                                content: lastMessage.content + value,
                                parts: lastMessage.parts
                            }
                        ];
                    });
                },
                onAssistantControlDataPart (value) {
                    setCurrentThreadId(value.threadId);
                    setMessages((messages2)=>{
                        const lastMessage = messages2[messages2.length - 1];
                        lastMessage.id = value.messageId;
                        return [
                            ...messages2.slice(0, messages2.length - 1),
                            lastMessage
                        ];
                    });
                },
                onDataMessagePart (value) {
                    setMessages((messages2)=>{
                        var _a2;
                        return [
                            ...messages2,
                            {
                                id: (_a2 = value.id) != null ? _a2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
                                role: "data",
                                content: "",
                                data: value.data,
                                parts: []
                            }
                        ];
                    });
                },
                onErrorPart (value) {
                    setError(new Error(value));
                }
            });
        } catch (error2) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(error2) && abortController.signal.aborted) {
                abortControllerRef.current = null;
                return;
            }
            if (onError && error2 instanceof Error) {
                onError(error2);
            }
            setError(error2);
        } finally{
            abortControllerRef.current = null;
            setStatus("awaiting_message");
        }
    };
    const submitMessage = async (event, requestOptions)=>{
        var _a;
        (_a = event == null ? void 0 : event.preventDefault) == null ? void 0 : _a.call(event);
        if (input === "") {
            return;
        }
        append({
            role: "user",
            content: input,
            parts: []
        }, requestOptions);
    };
    const setThreadId = (threadId)=>{
        setCurrentThreadId(threadId);
        setMessages([]);
    };
    return {
        append,
        messages,
        setMessages,
        threadId: currentThreadId,
        setThreadId,
        input,
        setInput,
        handleInputChange,
        submitMessage,
        status,
        error,
        stop
    };
}
;
;
;
;
function throttle(fn, waitMs) {
    return waitMs != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$throttleit$40$2$2e$1$2e$0$2f$node_modules$2f$throttleit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fn, waitMs) : fn;
}
;
;
function useStableValue(latestValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(latestValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isDeepEqualData"])(latestValue, value)) {
            setValue(latestValue);
        }
    }, [
        latestValue,
        value
    ]);
    return value;
}
// src/use-chat.ts
function useChat({ api = "/api/chat", id, initialMessages, initialInput = "", sendExtraMessageFields, onToolCall, experimental_prepareRequestBody, maxSteps = 1, streamProtocol = "data", onResponse, onFinish, onError, credentials, headers, body, generateId: generateId2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"], fetch: fetch2, keepLastMessageOnError = true, experimental_throttle: throttleWaitMs } = {}) {
    const [hookId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(generateId2);
    const chatId = id != null ? id : hookId;
    const chatKey = typeof api === "string" ? [
        api,
        chatId
    ] : chatId;
    const stableInitialMessages = useStableValue(initialMessages != null ? initialMessages : []);
    const processedInitialMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fillMessageParts"])(stableInitialMessages), [
        stableInitialMessages
    ]);
    const { data: messages, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        chatKey,
        "messages"
    ], null, {
        fallbackData: processedInitialMessages
    });
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(messages || []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesRef.current = messages || [];
    }, [
        messages
    ]);
    const { data: streamData, mutate: mutateStreamData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        chatKey,
        "streamData"
    ], null);
    const streamDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(streamData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        streamDataRef.current = streamData;
    }, [
        streamData
    ]);
    const { data: status = "ready", mutate: mutateStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        chatKey,
        "status"
    ], null);
    const { data: error = void 0, mutate: setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        chatKey,
        "error"
    ], null);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extraMetadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        credentials,
        headers,
        body
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        extraMetadataRef.current = {
            credentials,
            headers,
            body
        };
    }, [
        credentials,
        headers,
        body
    ]);
    const triggerRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (chatRequest, requestType = "generate")=>{
        var _a, _b;
        mutateStatus("submitted");
        setError(void 0);
        const chatMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fillMessageParts"])(chatRequest.messages);
        const messageCount = chatMessages.length;
        const maxStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["extractMaxToolInvocationStep"])((_a = chatMessages[chatMessages.length - 1]) == null ? void 0 : _a.toolInvocations);
        try {
            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            const throttledMutate = throttle(mutate, throttleWaitMs);
            const throttledMutateStreamData = throttle(mutateStreamData, throttleWaitMs);
            const previousMessages = messagesRef.current;
            throttledMutate(chatMessages, false);
            const constructedMessagesPayload = sendExtraMessageFields ? chatMessages : chatMessages.map(({ role, content, experimental_attachments, data, annotations, toolInvocations, parts })=>({
                    role,
                    content,
                    ...experimental_attachments !== void 0 && {
                        experimental_attachments
                    },
                    ...data !== void 0 && {
                        data
                    },
                    ...annotations !== void 0 && {
                        annotations
                    },
                    ...toolInvocations !== void 0 && {
                        toolInvocations
                    },
                    ...parts !== void 0 && {
                        parts
                    }
                }));
            const existingData = streamDataRef.current;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callChatApi"])({
                api,
                body: (_b = experimental_prepareRequestBody == null ? void 0 : experimental_prepareRequestBody({
                    id: chatId,
                    messages: chatMessages,
                    requestData: chatRequest.data,
                    requestBody: chatRequest.body
                })) != null ? _b : {
                    id: chatId,
                    messages: constructedMessagesPayload,
                    data: chatRequest.data,
                    ...extraMetadataRef.current.body,
                    ...chatRequest.body
                },
                streamProtocol,
                credentials: extraMetadataRef.current.credentials,
                headers: {
                    ...extraMetadataRef.current.headers,
                    ...chatRequest.headers
                },
                abortController: ()=>abortControllerRef.current,
                restoreMessagesOnFailure () {
                    if (!keepLastMessageOnError) {
                        throttledMutate(previousMessages, false);
                    }
                },
                onResponse,
                onUpdate ({ message, data, replaceLastMessage }) {
                    mutateStatus("streaming");
                    throttledMutate([
                        ...replaceLastMessage ? chatMessages.slice(0, chatMessages.length - 1) : chatMessages,
                        message
                    ], false);
                    if (data == null ? void 0 : data.length) {
                        throttledMutateStreamData([
                            ...existingData != null ? existingData : [],
                            ...data
                        ], false);
                    }
                },
                onToolCall,
                onFinish,
                generateId: generateId2,
                fetch: fetch2,
                lastMessage: chatMessages[chatMessages.length - 1],
                requestType
            });
            abortControllerRef.current = null;
            mutateStatus("ready");
        } catch (err) {
            if (err.name === "AbortError") {
                abortControllerRef.current = null;
                mutateStatus("ready");
                return null;
            }
            if (onError && err instanceof Error) {
                onError(err);
            }
            setError(err);
            mutateStatus("error");
        }
        const messages2 = messagesRef.current;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shouldResubmitMessages"])({
            originalMaxToolInvocationStep: maxStep,
            originalMessageCount: messageCount,
            maxSteps,
            messages: messages2
        })) {
            await triggerRequest({
                messages: messages2
            });
        }
    }, [
        mutate,
        mutateStatus,
        api,
        extraMetadataRef,
        onResponse,
        onFinish,
        onError,
        setError,
        mutateStreamData,
        streamDataRef,
        streamProtocol,
        sendExtraMessageFields,
        experimental_prepareRequestBody,
        onToolCall,
        maxSteps,
        messagesRef,
        abortControllerRef,
        generateId2,
        fetch2,
        keepLastMessageOnError,
        throttleWaitMs,
        chatId
    ]);
    const append = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (message, { data, headers: headers2, body: body2, experimental_attachments = message.experimental_attachments } = {})=>{
        var _a, _b;
        const attachmentsForRequest = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAttachmentsForRequest"])(experimental_attachments);
        const messages2 = messagesRef.current.concat({
            ...message,
            id: (_a = message.id) != null ? _a : generateId2(),
            createdAt: (_b = message.createdAt) != null ? _b : /* @__PURE__ */ new Date(),
            experimental_attachments: attachmentsForRequest.length > 0 ? attachmentsForRequest : void 0,
            parts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMessageParts"])(message)
        });
        return triggerRequest({
            messages: messages2,
            headers: headers2,
            body: body2,
            data
        });
    }, [
        triggerRequest,
        generateId2
    ]);
    const reload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ({ data, headers: headers2, body: body2 } = {})=>{
        const messages2 = messagesRef.current;
        if (messages2.length === 0) {
            return null;
        }
        const lastMessage = messages2[messages2.length - 1];
        return triggerRequest({
            messages: lastMessage.role === "assistant" ? messages2.slice(0, -1) : messages2,
            headers: headers2,
            body: body2,
            data
        });
    }, [
        triggerRequest
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    }, []);
    const experimental_resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const messages2 = messagesRef.current;
        triggerRequest({
            messages: messages2
        }, "resume");
    }, [
        triggerRequest
    ]);
    const setMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((messages2)=>{
        if (typeof messages2 === "function") {
            messages2 = messages2(messagesRef.current);
        }
        const messagesWithParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fillMessageParts"])(messages2);
        mutate(messagesWithParts, false);
        messagesRef.current = messagesWithParts;
    }, [
        mutate
    ]);
    const setData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        if (typeof data === "function") {
            data = data(streamDataRef.current);
        }
        mutateStreamData(data, false);
        streamDataRef.current = data;
    }, [
        mutateStreamData
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialInput);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (event, options = {}, metadata)=>{
        var _a;
        (_a = event == null ? void 0 : event.preventDefault) == null ? void 0 : _a.call(event);
        if (!input && !options.allowEmptySubmit) return;
        if (metadata) {
            extraMetadataRef.current = {
                ...extraMetadataRef.current,
                ...metadata
            };
        }
        const attachmentsForRequest = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAttachmentsForRequest"])(options.experimental_attachments);
        const messages2 = messagesRef.current.concat({
            id: generateId2(),
            createdAt: /* @__PURE__ */ new Date(),
            role: "user",
            content: input,
            experimental_attachments: attachmentsForRequest.length > 0 ? attachmentsForRequest : void 0,
            parts: [
                {
                    type: "text",
                    text: input
                }
            ]
        });
        const chatRequest = {
            messages: messages2,
            headers: options.headers,
            body: options.body,
            data: options.data
        };
        triggerRequest(chatRequest);
        setInput("");
    }, [
        input,
        generateId2,
        triggerRequest
    ]);
    const handleInputChange = (e)=>{
        setInput(e.target.value);
    };
    const addToolResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ toolCallId, result })=>{
        const currentMessages = messagesRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateToolCallResult"])({
            messages: currentMessages,
            toolCallId,
            toolResult: result
        });
        mutate([
            ...currentMessages.slice(0, currentMessages.length - 1),
            {
                ...currentMessages[currentMessages.length - 1]
            }
        ], false);
        if (status === "submitted" || status === "streaming") {
            return;
        }
        const lastMessage = currentMessages[currentMessages.length - 1];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAssistantMessageWithCompletedToolCalls"])(lastMessage)) {
            triggerRequest({
                messages: currentMessages
            });
        }
    }, [
        mutate,
        status,
        triggerRequest
    ]);
    return {
        messages: messages != null ? messages : [],
        id: chatId,
        setMessages,
        data: streamData,
        setData,
        error,
        append,
        reload,
        stop,
        experimental_resume,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        isLoading: status === "submitted" || status === "streaming",
        status,
        addToolResult
    };
}
;
;
;
function useCompletion({ api = "/api/completion", id, initialCompletion = "", initialInput = "", credentials, headers, body, streamProtocol = "data", fetch: fetch2, onResponse, onFinish, onError, experimental_throttle: throttleWaitMs } = {}) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id || hookId;
    const { data, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        api,
        completionId
    ], null, {
        fallbackData: initialCompletion
    });
    const { data: isLoading = false, mutate: mutateLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        completionId,
        "loading"
    ], null);
    const { data: streamData, mutate: mutateStreamData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        completionId,
        "streamData"
    ], null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const completion = data;
    const [abortController, setAbortController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const extraMetadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        credentials,
        headers,
        body
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        extraMetadataRef.current = {
            credentials,
            headers,
            body
        };
    }, [
        credentials,
        headers,
        body
    ]);
    const triggerRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (prompt, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callCompletionApi"])({
            api,
            prompt,
            credentials: extraMetadataRef.current.credentials,
            headers: {
                ...extraMetadataRef.current.headers,
                ...options == null ? void 0 : options.headers
            },
            body: {
                ...extraMetadataRef.current.body,
                ...options == null ? void 0 : options.body
            },
            streamProtocol,
            fetch: fetch2,
            // throttle streamed ui updates:
            setCompletion: throttle((completion2)=>mutate(completion2, false), throttleWaitMs),
            onData: throttle((data2)=>mutateStreamData([
                    ...streamData != null ? streamData : [],
                    ...data2 != null ? data2 : []
                ], false), throttleWaitMs),
            setLoading: mutateLoading,
            setError,
            setAbortController,
            onResponse,
            onFinish,
            onError
        }), [
        mutate,
        mutateLoading,
        api,
        extraMetadataRef,
        setAbortController,
        onResponse,
        onFinish,
        onError,
        setError,
        streamData,
        streamProtocol,
        fetch2,
        mutateStreamData,
        throttleWaitMs
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (abortController) {
            abortController.abort();
            setAbortController(null);
        }
    }, [
        abortController
    ]);
    const setCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((completion2)=>{
        mutate(completion2, false);
    }, [
        mutate
    ]);
    const complete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (prompt, options)=>{
        return triggerRequest(prompt, options);
    }, [
        triggerRequest
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialInput);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        var _a;
        (_a = event == null ? void 0 : event.preventDefault) == null ? void 0 : _a.call(event);
        return input ? complete(input) : void 0;
    }, [
        input,
        complete
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        setInput(e.target.value);
    }, [
        setInput
    ]);
    return {
        completion,
        complete,
        error,
        setCompletion,
        stop,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        isLoading,
        data: streamData
    };
}
;
;
;
;
var getOriginalFetch2 = ()=>fetch;
function useObject({ api, id, schema, // required, in the future we will use it for validation
initialValue, fetch: fetch2, onError, onFinish, headers, credentials }) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const completionId = id != null ? id : hookId;
    const { data, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$6_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        api,
        completionId
    ], null, {
        fallbackData: initialValue
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        var _a;
        try {
            (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
        } catch (ignored) {} finally{
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    }, []);
    const submit = async (input)=>{
        var _a;
        try {
            mutate(void 0);
            setIsLoading(true);
            setError(void 0);
            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            const actualFetch = fetch2 != null ? fetch2 : getOriginalFetch2();
            const response = await actualFetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                credentials,
                signal: abortController.signal,
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                throw new Error((_a = await response.text()) != null ? _a : "Failed to fetch the response.");
            }
            if (response.body == null) {
                throw new Error("The response body is empty.");
            }
            let accumulatedText = "";
            let latestObject = void 0;
            await response.body.pipeThrough(new TextDecoderStream()).pipeTo(new WritableStream({
                write (chunk) {
                    accumulatedText += chunk;
                    const { value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parsePartialJson"])(accumulatedText);
                    const currentObject = value;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isDeepEqualData"])(latestObject, currentObject)) {
                        latestObject = currentObject;
                        mutate(currentObject);
                    }
                },
                close () {
                    setIsLoading(false);
                    abortControllerRef.current = null;
                    if (onFinish != null) {
                        const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeValidateTypes"])({
                            value: latestObject,
                            schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$ui$2d$utils$40$1$2e$2$2e$11_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["asSchema"])(schema)
                        });
                        onFinish(validationResult.success ? {
                            object: validationResult.value,
                            error: void 0
                        } : {
                            object: void 0,
                            error: validationResult.error
                        });
                    }
                }
            }));
        } catch (error2) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$2$2e$2$2e$8_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(error2)) {
                return;
            }
            if (onError && error2 instanceof Error) {
                onError(error2);
            }
            setIsLoading(false);
            setError(error2 instanceof Error ? error2 : new Error(String(error2)));
        }
    };
    return {
        submit,
        object: data,
        error,
        isLoading,
        stop
    };
}
var experimental_useObject = useObject;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@radix-ui+react-compose-ref_005132e7ef17cb0434236024e125c239/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.12_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_005132e7ef17cb0434236024e125c239$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@radix-ui+react-compose-ref_005132e7ef17cb0434236024e125c239/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_005132e7ef17cb0434236024e125c239$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }
    ],
    [
        "path",
        {
            d: "M12 19V5",
            key: "x0mq9r"
        }
    ]
];
const ArrowUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-up", __iconNode);
;
 //# sourceMappingURL=arrow-up.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$513$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/lucide-react@0.513.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecate",
    ()=>deprecate,
    "equal",
    ()=>equal,
    "ok",
    ()=>ok,
    "unreachable",
    ()=>unreachable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)");
;
/**
 * @type {Set<string>}
 */ const codesWarned = new Set();
class AssertionError extends Error {
    name = 'Assertion';
    code = 'ERR_ASSERTION';
    /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */ // eslint-disable-next-line max-params
    constructor(message, actual, expected, operator, generated){
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        /**
     * @type {unknown}
     */ this.actual = actual;
        /**
     * @type {unknown}
     */ this.expected = expected;
        /**
     * @type {boolean}
     */ this.generated = generated;
        /**
     * @type {string}
     */ this.operator = operator;
    }
}
class DeprecationError extends Error {
    name = 'DeprecationWarning';
    /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */ constructor(message, code){
        super(message);
        /**
     * @type {string | undefined}
     */ this.code = code;
    }
}
function deprecate(fn, message, code) {
    let warned = false;
    // The wrapper will keep the same prototype as fn to maintain prototype chain
    Object.setPrototypeOf(deprecated, fn);
    // @ts-expect-error: it’s perfect, typescript…
    return deprecated;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */ function deprecated(...args) {
        if (!warned) {
            warned = true;
            if (typeof code === 'string' && codesWarned.has(code)) {
            // Empty.
            } else {
                console.error(new DeprecationError(message, code || undefined));
                if (typeof code === 'string') codesWarned.add(code);
            }
        }
        return new.target ? Reflect.construct(fn, args, new.target) : Reflect.apply(fn, this, args);
    }
}
function equal(actual, expected, message) {
    assert((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"])(actual, expected), actual, expected, 'equal', 'Expected values to be deeply equal', message);
}
function ok(value, message) {
    assert(Boolean(value), false, true, 'ok', 'Expected value to be truthy', message);
}
function unreachable(message) {
    assert(false, false, true, 'ok', 'Unreachable', message);
}
/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */ // eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
    if (!bool) {
        throw userMessage instanceof Error ? userMessage : new AssertionError(userMessage || defaultMessage, actual, expected, operator, !userMessage);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */ /**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */ /**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    /** @type {Array<string>} */ const tokens = [];
    const input = String(value || '');
    let index = input.indexOf(',');
    let start = 0;
    /** @type {boolean} */ let end = false;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        const token = input.slice(start, index).trim();
        if (token || !end) {
            tokens.push(token);
        }
        start = index + 1;
        index = input.indexOf(',', start);
    }
    return tokens;
}
function stringify(values, options) {
    const settings = options || {};
    // Ensure the last empty entry is seen.
    const input = values[values.length - 1] === '' ? [
        ...values,
        ''
    ] : values;
    return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/estree-util-is-identifier-name@3.0.0/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [jsx=false]
 *   Support JSX identifiers (default: `false`).
 */ __turbopack_context__.s([
    "cont",
    ()=>cont,
    "name",
    ()=>name,
    "start",
    ()=>start
]);
const startRe = /[$_\p{ID_Start}]/u;
const contRe = /[$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const contReJsx = /[-$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
/** @type {Options} */ const emptyOptions = {};
function start(code) {
    return code ? startRe.test(String.fromCodePoint(code)) : false;
}
function cont(code, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? contReJsx : contRe;
    return code ? re.test(String.fromCodePoint(code)) : false;
}
function name(name, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? nameReJsx : nameRe;
    return re.test(name);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} Nodes
 */ // HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
__turbopack_context__.s([
    "whitespace",
    ()=>whitespace
]);
const re = /[ \t\n\f\r]/g;
function whitespace(thing) {
    return typeof thing === 'object' ? thing.type === 'text' ? empty(thing.value) : false : empty(thing);
}
/**
 * @param {string} value
 * @returns {boolean}
 */ function empty(value) {
    return value.replace(re, '') === '';
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    const input = String(value || '').trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(' ').trim();
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/inline-style-parser@0.2.4/node_modules/inline-style-parser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;
// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */ module.exports = function(style, options) {
    if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!style) return [];
    options = options || {};
    /**
   * Positional.
   */ var lineno = 1;
    var column = 1;
    /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */ function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
    }
    /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */ function position() {
        var start = {
            line: lineno,
            column: column
        };
        return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */ function Position(start) {
        this.start = start;
        this.end = {
            line: lineno,
            column: column
        };
        this.source = options.source;
    }
    /**
   * Non-enumerable source string.
   */ Position.prototype.content = style;
    var errorsList = [];
    /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */ function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) {
            errorsList.push(err);
        } else {
            throw err;
        }
    }
    /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */ function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
    }
    /**
   * Parse whitespace.
   */ function whitespace() {
        match(WHITESPACE_REGEX);
    }
    /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */ function comments(rules) {
        var c;
        rules = rules || [];
        while(c = comment()){
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */ function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){
            ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
            type: TYPE_COMMENT,
            comment: str
        });
    }
    /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */ function declaration() {
        var pos = position();
        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");
        // val
        var val = match(VALUE_REGEX);
        var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        // ;
        match(SEMICOLON_REGEX);
        return ret;
    }
    /**
   * Parse declarations.
   *
   * @return {Object[]}
   */ function declarations() {
        var decls = [];
        comments(decls);
        // declarations
        var decl;
        while(decl = declaration()){
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        return decls;
    }
    whitespace();
    return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */ function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/style-to-object@1.0.9/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StyleToObject;
var inline_style_parser_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/inline-style-parser@0.2.4/node_modules/inline-style-parser/index.js [app-ssr] (ecmascript)"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */ function StyleToObject(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === 'function';
    declarations.forEach(function(declaration) {
        if (declaration.type !== 'declaration') {
            return;
        }
        var property = declaration.property, value = declaration.value;
        if (hasIterator) {
            iterator(property, value, declaration);
        } else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/style-to-js@1.1.17/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */ var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */ var capitalize = function(match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */ var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
};
/**
 * CamelCases a CSS property.
 */ var camelCase = function(property, options) {
    if (options === void 0) {
        options = {};
    }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase; //# sourceMappingURL=utilities.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/style-to-js@1.1.17/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var style_to_object_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/style-to-object@1.0.9/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)"));
var utilities_1 = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/style-to-js@1.1.17/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */ function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function(property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */ /**
 * Get the ending point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */ __turbopack_context__.s([
    "pointEnd",
    ()=>pointEnd,
    "pointStart",
    ()=>pointStart,
    "position",
    ()=>position
]);
const pointEnd = point('end');
const pointStart = point('start');
/**
 * Get the positional info of `node`.
 *
 * @param {'end' | 'start'} type
 *   Side.
 * @returns
 *   Getter.
 */ function point(type) {
    return point;
    //TURBOPACK unreachable
    ;
    /**
   * Get the point info of `node` at a bound side.
   *
   * @param {Node | NodeLike | null | undefined} [node]
   * @returns {Point | undefined}
   */ function point(node) {
        const point = node && node.position && node.position[type] || {};
        if (typeof point.line === 'number' && point.line > 0 && typeof point.column === 'number' && point.column > 0) {
            return {
                line: point.line,
                column: point.column,
                offset: typeof point.offset === 'number' && point.offset > -1 ? point.offset : undefined
            };
        }
    }
}
function position(node) {
    const start = pointStart(node);
    const end = pointEnd(node);
    if (start && end) {
        return {
            start,
            end
        };
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */ /**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */ __turbopack_context__.s([
    "stringifyPosition",
    ()=>stringifyPosition
]);
function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== 'object') {
        return '';
    }
    // Node.
    if ('position' in value || 'type' in value) {
        return position(value.position);
    }
    // Position.
    if ('start' in value || 'end' in value) {
        return position(value);
    }
    // Point.
    if ('line' in value || 'column' in value) {
        return point(value);
    }
    // ?
    return '';
}
/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */ function point(point) {
    return index(point && point.line) + ':' + index(point && point.column);
}
/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */ function position(pos) {
    return point(pos && pos.start) + '-' + point(pos && pos.end);
}
/**
 * @param {number | null | undefined} value
 * @returns {number}
 */ function index(value) {
    return value && typeof value === 'number' ? value : 1;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node, Point, Position} from 'unist'
 */ /**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef Options
 *   Configuration.
 * @property {Array<Node> | null | undefined} [ancestors]
 *   Stack of (inclusive) ancestor nodes surrounding the message (optional).
 * @property {Error | null | undefined} [cause]
 *   Original error cause of the message (optional).
 * @property {Point | Position | null | undefined} [place]
 *   Place of message (optional).
 * @property {string | null | undefined} [ruleId]
 *   Category of message (optional, example: `'my-rule'`).
 * @property {string | null | undefined} [source]
 *   Namespace of who sent the message (optional, example: `'my-package'`).
 */ __turbopack_context__.s([
    "VFileMessage",
    ()=>VFileMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
class VFileMessage extends Error {
    /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */ // eslint-disable-next-line complexity
    constructor(causeOrReason, optionsOrParentOrPlace, origin){
        super();
        if (typeof optionsOrParentOrPlace === 'string') {
            origin = optionsOrParentOrPlace;
            optionsOrParentOrPlace = undefined;
        }
        /** @type {string} */ let reason = '';
        /** @type {Options} */ let options = {};
        let legacyCause = false;
        if (optionsOrParentOrPlace) {
            // Point.
            if ('line' in optionsOrParentOrPlace && 'column' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('start' in optionsOrParentOrPlace && 'end' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('type' in optionsOrParentOrPlace) {
                options = {
                    ancestors: [
                        optionsOrParentOrPlace
                    ],
                    place: optionsOrParentOrPlace.position
                };
            } else {
                options = {
                    ...optionsOrParentOrPlace
                };
            }
        }
        if (typeof causeOrReason === 'string') {
            reason = causeOrReason;
        } else if (!options.cause && causeOrReason) {
            legacyCause = true;
            reason = causeOrReason.message;
            options.cause = causeOrReason;
        }
        if (!options.ruleId && !options.source && typeof origin === 'string') {
            const index = origin.indexOf(':');
            if (index === -1) {
                options.ruleId = origin;
            } else {
                options.source = origin.slice(0, index);
                options.ruleId = origin.slice(index + 1);
            }
        }
        if (!options.place && options.ancestors && options.ancestors) {
            const parent = options.ancestors[options.ancestors.length - 1];
            if (parent) {
                options.place = parent.position;
            }
        }
        const start = options.place && 'start' in options.place ? options.place.start : options.place;
        /**
     * Stack of ancestor nodes surrounding the message.
     *
     * @type {Array<Node> | undefined}
     */ this.ancestors = options.ancestors || undefined;
        /**
     * Original error cause of the message.
     *
     * @type {Error | undefined}
     */ this.cause = options.cause || undefined;
        /**
     * Starting column of message.
     *
     * @type {number | undefined}
     */ this.column = start ? start.column : undefined;
        /**
     * State of problem.
     *
     * * `true` — error, file not usable
     * * `false` — warning, change may be needed
     * * `undefined` — change likely not needed
     *
     * @type {boolean | null | undefined}
     */ this.fatal = undefined;
        /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | undefined}
     */ this.file = '';
        // Field from `Error`.
        /**
     * Reason for message.
     *
     * @type {string}
     */ this.message = reason;
        /**
     * Starting line of error.
     *
     * @type {number | undefined}
     */ this.line = start ? start.line : undefined;
        // Field from `Error`.
        /**
     * Serialized positional info of message.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */ this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])(options.place) || '1:1';
        /**
     * Place of message.
     *
     * @type {Point | Position | undefined}
     */ this.place = options.place || undefined;
        /**
     * Reason for message, should use markdown.
     *
     * @type {string}
     */ this.reason = this.message;
        /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | undefined}
     */ this.ruleId = options.ruleId || undefined;
        /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | undefined}
     */ this.source = options.source || undefined;
        // Field from `Error`.
        /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */ this.stack = legacyCause && options.cause && typeof options.cause.stack === 'string' ? options.cause.stack : '';
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | undefined}
     */ this.actual = undefined;
        /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | undefined}
     */ this.expected = undefined;
        /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | undefined}
     */ this.note = undefined;
        /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | undefined}
     */ this.url = undefined;
    }
}
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.column = undefined;
VFileMessage.prototype.line = undefined;
VFileMessage.prototype.ancestors = undefined;
VFileMessage.prototype.cause = undefined;
VFileMessage.prototype.fatal = undefined;
VFileMessage.prototype.place = undefined;
VFileMessage.prototype.ruleId = undefined;
VFileMessage.prototype.source = undefined;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Identifier, Literal, MemberExpression} from 'estree'
 * @import {Jsx, JsxDev, Options, Props} from 'hast-util-to-jsx-runtime'
 * @import {Element, Nodes, Parents, Root, Text} from 'hast'
 * @import {MdxFlowExpressionHast, MdxTextExpressionHast} from 'mdast-util-mdx-expression'
 * @import {MdxJsxFlowElementHast, MdxJsxTextElementHast} from 'mdast-util-mdx-jsx'
 * @import {MdxjsEsmHast} from 'mdast-util-mdxjs-esm'
 * @import {Position} from 'unist'
 * @import {Child, Create, Field, JsxElement, State, Style} from './types.js'
 */ __turbopack_context__.s([
    "toJsxRuntime",
    ()=>toJsxRuntime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$comma$2d$separated$2d$tokens$40$2$2e$0$2e$3$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/estree-util-is-identifier-name@3.0.0/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$whitespace$40$3$2e$0$2e$0$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$space$2d$separated$2d$tokens$40$2$2e$0$2e$2$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$style$2d$to$2d$js$40$1$2e$1$2e$17$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/style-to-js@1.1.17/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// To do: next major: `Object.hasOwn`.
const own = {}.hasOwnProperty;
/** @type {Map<string, number>} */ const emptyMap = new Map();
const cap = /[A-Z]/g;
// `react-dom` triggers a warning for *any* white space in tables.
// To follow GFM, `mdast-util-to-hast` injects line endings between elements.
// Other tools might do so too, but they don’t do here, so we remove all of
// that.
// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/rehypejs/rehype-react/pull/29>.
// See: <https://github.com/rehypejs/rehype-react/pull/32>.
// See: <https://github.com/rehypejs/rehype-react/pull/45>.
const tableElements = new Set([
    'table',
    'tbody',
    'thead',
    'tfoot',
    'tr'
]);
const tableCellElement = new Set([
    'td',
    'th'
]);
const docs = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function toJsxRuntime(tree, options) {
    if (!options || options.Fragment === undefined) {
        throw new TypeError('Expected `Fragment` in options');
    }
    const filePath = options.filePath || undefined;
    /** @type {Create} */ let create;
    if (options.development) {
        if (typeof options.jsxDEV !== 'function') {
            throw new TypeError('Expected `jsxDEV` in options when `development: true`');
        }
        create = developmentCreate(filePath, options.jsxDEV);
    } else {
        if (typeof options.jsx !== 'function') {
            throw new TypeError('Expected `jsx` in production options');
        }
        if (typeof options.jsxs !== 'function') {
            throw new TypeError('Expected `jsxs` in production options');
        }
        create = productionCreate(filePath, options.jsx, options.jsxs);
    }
    /** @type {State} */ const state = {
        Fragment: options.Fragment,
        ancestors: [],
        components: options.components || {},
        create,
        elementAttributeNameCase: options.elementAttributeNameCase || 'react',
        evaluater: options.createEvaluater ? options.createEvaluater() : undefined,
        filePath,
        ignoreInvalidStyle: options.ignoreInvalidStyle || false,
        passKeys: options.passKeys !== false,
        passNode: options.passNode || false,
        schema: options.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        stylePropertyNameCase: options.stylePropertyNameCase || 'dom',
        tableCellAlignToStyle: options.tableCellAlignToStyle !== false
    };
    const result = one(state, tree, undefined);
    // JSX element.
    if (result && typeof result !== 'string') {
        return result;
    }
    // Text node or something that turned into nothing.
    return state.create(tree, state.Fragment, {
        children: result || undefined
    }, undefined);
}
/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Nodes} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function one(state, node, key) {
    if (node.type === 'element') {
        return element(state, node, key);
    }
    if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
        return mdxExpression(state, node);
    }
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        return mdxJsxElement(state, node, key);
    }
    if (node.type === 'mdxjsEsm') {
        return mdxEsm(state, node);
    }
    if (node.type === 'root') {
        return root(state, node, key);
    }
    if (node.type === 'text') {
        return text(state, node);
    }
}
/**
 * Handle element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function element(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.tagName.toLowerCase() === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = findComponentFromName(state, node.tagName, false);
    const props = createElementProps(state, node);
    let children = createChildren(state, node);
    if (tableElements.has(node.tagName)) {
        children = children.filter(function(child) {
            return typeof child === 'string' ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$whitespace$40$3$2e$0$2e$0$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whitespace"])(child) : true;
        });
    }
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle MDX expression.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxFlowExpressionHast | MdxTextExpressionHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxExpression(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        const program = node.data.estree;
        const expression = program.body[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
        // Assume result is a child.
        return state.evaluater.evaluateExpression(expression.expression);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX ESM.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxjsEsmHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxEsm(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        // Assume result is a child.
        return state.evaluater.evaluateProgram(node.data.estree);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX JSX.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxJsxElement(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.name === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = node.name === null ? state.Fragment : findComponentFromName(state, node.name, true);
    const props = createJsxElementProps(state, node);
    const children = createChildren(state, node);
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle root.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Root} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function root(state, node, key) {
    /** @type {Props} */ const props = {};
    addChildren(props, createChildren(state, node));
    return state.create(node, state.Fragment, props, key);
}
/**
 * Handle text.
 *
 * @param {State} _
 *   Info passed around.
 * @param {Text} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function text(_, node) {
    return node.value;
}
/**
 * Add `node` to props.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Props} props
 *   Props.
 * @param {unknown} type
 *   Type.
 * @param {Element | MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Node.
 * @returns {undefined}
 *   Nothing.
 */ function addNode(state, props, type, node) {
    // If this is swapped out for a component:
    if (typeof type !== 'string' && type !== state.Fragment && state.passNode) {
        props.node = node;
    }
}
/**
 * Add children to props.
 *
 * @param {Props} props
 *   Props.
 * @param {Array<Child>} children
 *   Children.
 * @returns {undefined}
 *   Nothing.
 */ function addChildren(props, children) {
    if (children.length > 0) {
        const value = children.length > 1 ? children : children[0];
        if (value) {
            props.children = value;
        }
    }
}
/**
 * @param {string | undefined} _
 *   Path to file.
 * @param {Jsx} jsx
 *   Dynamic.
 * @param {Jsx} jsxs
 *   Static.
 * @returns {Create}
 *   Create a production element.
 */ function productionCreate(_, jsx, jsxs) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(_, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const fn = isStaticChildren ? jsxs : jsx;
        return key ? fn(type, props, key) : fn(type, props);
    }
}
/**
 * @param {string | undefined} filePath
 *   Path to file.
 * @param {JsxDev} jsxDEV
 *   Development.
 * @returns {Create}
 *   Create a development element.
 */ function developmentCreate(filePath, jsxDEV) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(node, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node);
        return jsxDEV(type, props, key, isStaticChildren, {
            columnNumber: point ? point.column - 1 : undefined,
            fileName: filePath,
            lineNumber: point ? point.line : undefined
        }, undefined);
    }
}
/**
 * Create props from an element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current element.
 * @returns {Props}
 *   Props.
 */ function createElementProps(state, node) {
    /** @type {Props} */ const props = {};
    /** @type {string | undefined} */ let alignValue;
    /** @type {string} */ let prop;
    for(prop in node.properties){
        if (prop !== 'children' && own.call(node.properties, prop)) {
            const result = createProperty(state, prop, node.properties[prop]);
            if (result) {
                const [key, value] = result;
                if (state.tableCellAlignToStyle && key === 'align' && typeof value === 'string' && tableCellElement.has(node.tagName)) {
                    alignValue = value;
                } else {
                    props[key] = value;
                }
            }
        }
    }
    if (alignValue) {
        // Assume style is an object.
        const style = props.style || (props.style = {});
        style[state.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = alignValue;
    }
    return props;
}
/**
 * Create props from a JSX element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current JSX element.
 * @returns {Props}
 *   Props.
 */ function createJsxElementProps(state, node) {
    /** @type {Props} */ const props = {};
    for (const attribute of node.attributes){
        if (attribute.type === 'mdxJsxExpressionAttribute') {
            if (attribute.data && attribute.data.estree && state.evaluater) {
                const program = attribute.data.estree;
                const expression = program.body[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                const objectExpression = expression.expression;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(objectExpression.type === 'ObjectExpression');
                const property = objectExpression.properties[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(property.type === 'SpreadElement');
                Object.assign(props, state.evaluater.evaluateExpression(property.argument));
            } else {
                crashEstree(state, node.position);
            }
        } else {
            // For JSX, the author is responsible of passing in the correct values.
            const name = attribute.name;
            /** @type {unknown} */ let value;
            if (attribute.value && typeof attribute.value === 'object') {
                if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
                    const program = attribute.value.data.estree;
                    const expression = program.body[0];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                    value = state.evaluater.evaluateExpression(expression.expression);
                } else {
                    crashEstree(state, node.position);
                }
            } else {
                value = attribute.value === null ? true : attribute.value;
            }
            // Assume a prop.
            props[name] = value;
        }
    }
    return props;
}
/**
 * Create children.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Parents} node
 *   Current element.
 * @returns {Array<Child>}
 *   Children.
 */ function createChildren(state, node) {
    /** @type {Array<Child>} */ const children = [];
    let index = -1;
    /** @type {Map<string, number>} */ // Note: test this when Solid doesn’t want to merge my upcoming PR.
    /* c8 ignore next */ const countsByName = state.passKeys ? new Map() : emptyMap;
    while(++index < node.children.length){
        const child = node.children[index];
        /** @type {string | undefined} */ let key;
        if (state.passKeys) {
            const name = child.type === 'element' ? child.tagName : child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement' ? child.name : undefined;
            if (name) {
                const count = countsByName.get(name) || 0;
                key = name + '-' + count;
                countsByName.set(name, count + 1);
            }
        }
        const result = one(state, child, key);
        if (result !== undefined) children.push(result);
    }
    return children;
}
/**
 * Handle a property.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Field | undefined}
 *   Field for runtime, optional.
 */ function createProperty(state, prop, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(state.schema, prop);
    // Ignore nullish and `NaN` values.
    if (value === null || value === undefined || typeof value === 'number' && Number.isNaN(value)) {
        return;
    }
    if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$comma$2d$separated$2d$tokens$40$2$2e$0$2e$3$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$space$2d$separated$2d$tokens$40$2$2e$0$2e$2$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value);
    }
    // React only accepts `style` as object.
    if (info.property === 'style') {
        let styleObject = typeof value === 'object' ? value : parseStyle(state, String(value));
        if (state.stylePropertyNameCase === 'css') {
            styleObject = transformStylesToCssCasing(styleObject);
        }
        return [
            'style',
            styleObject
        ];
    }
    return [
        state.elementAttributeNameCase === 'react' && info.space ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$property$2d$information$40$7$2e$1$2e$0$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hastToReact"][info.property] || info.property : info.attribute,
        value
    ];
}
/**
 * Parse a CSS declaration to an object.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} value
 *   CSS declarations.
 * @returns {Style}
 *   Properties.
 * @throws
 *   Throws `VFileMessage` when CSS cannot be parsed.
 */ function parseStyle(state, value) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$style$2d$to$2d$js$40$1$2e$1$2e$17$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value, {
            reactCompat: true
        });
    } catch (error) {
        if (state.ignoreInvalidStyle) {
            return {};
        }
        const cause = error;
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot parse `style` attribute', {
            ancestors: state.ancestors,
            cause,
            ruleId: 'style',
            source: 'hast-util-to-jsx-runtime'
        });
        message.file = state.filePath || undefined;
        message.url = docs + '#cannot-parse-style-attribute';
        throw message;
    }
}
/**
 * Create a JSX name from a string.
 *
 * @param {State} state
 *   To do.
 * @param {string} name
 *   Name.
 * @param {boolean} allowExpression
 *   Allow member expressions and identifiers.
 * @returns {unknown}
 *   To do.
 */ function findComponentFromName(state, name, allowExpression) {
    /** @type {Identifier | Literal | MemberExpression} */ let result;
    if (!allowExpression) {
        result = {
            type: 'Literal',
            value: name
        };
    } else if (name.includes('.')) {
        const identifiers = name.split('.');
        let index = -1;
        /** @type {Identifier | Literal | MemberExpression | undefined} */ let node;
        while(++index < identifiers.length){
            /** @type {Identifier | Literal} */ const prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(identifiers[index]) ? {
                type: 'Identifier',
                name: identifiers[index]
            } : {
                type: 'Literal',
                value: identifiers[index]
            };
            node = node ? {
                type: 'MemberExpression',
                object: node,
                property: prop,
                computed: Boolean(index && prop.type === 'Literal'),
                optional: false
            } : prop;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'always a result');
        result = node;
    } else {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$estree$2d$util$2d$is$2d$identifier$2d$name$40$3$2e$0$2e$0$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(name) && !/^[a-z]/.test(name) ? {
            type: 'Identifier',
            name
        } : {
            type: 'Literal',
            value: name
        };
    }
    // Only literals can be passed in `components` currently.
    // No identifiers / member expressions.
    if (result.type === 'Literal') {
        const name = result.value;
        return own.call(state.components, name) ? state.components[name] : name;
    }
    // Assume component.
    if (state.evaluater) {
        return state.evaluater.evaluateExpression(result);
    }
    crashEstree(state);
}
/**
 * @param {State} state
 * @param {Position | undefined} [place]
 * @returns {never}
 */ function crashEstree(state, place) {
    const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot handle MDX estrees without `createEvaluater`', {
        ancestors: state.ancestors,
        place,
        ruleId: 'mdx-estree',
        source: 'hast-util-to-jsx-runtime'
    });
    message.file = state.filePath || undefined;
    message.url = docs + '#cannot-handle-mdx-estrees-without-createevaluater';
    throw message;
}
/**
 * Transform a DOM casing style object to a CSS casing style object.
 *
 * @param {Style} domCasing
 * @returns {Style}
 */ function transformStylesToCssCasing(domCasing) {
    /** @type {Style} */ const cssCasing = {};
    /** @type {string} */ let from;
    for(from in domCasing){
        if (own.call(domCasing, from)) {
            cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
        }
    }
    return cssCasing;
}
/**
 * Transform a DOM casing style field to a CSS casing style field.
 *
 * @param {string} from
 * @returns {string}
 */ function transformStyleToCssCasing(from) {
    let to = from.replace(cap, toDash);
    // Handle `ms-xxx` -> `-ms-xxx`.
    if (to.slice(0, 3) === 'ms-') to = '-' + to;
    return to;
}
/**
 * Make `$0` dash cased.
 *
 * @param {string} $0
 *   Capitalized ASCII leter.
 * @returns {string}
 *   Dash and lower letter.
 */ function toDash($0) {
    return '-' + $0.toLowerCase();
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/html-url-attributes@3.0.1/node_modules/html-url-attributes/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HTML URL properties.
 *
 * Each key is a property name and each value is a list of tag names it applies
 * to or `null` if it applies to all elements.
 *
 * @type {Record<string, Array<string> | null>}
 */ __turbopack_context__.s([
    "urlAttributes",
    ()=>urlAttributes
]);
const urlAttributes = {
    action: [
        'form'
    ],
    cite: [
        'blockquote',
        'del',
        'ins',
        'q'
    ],
    data: [
        'object'
    ],
    formAction: [
        'button',
        'input'
    ],
    href: [
        'a',
        'area',
        'base',
        'link'
    ],
    icon: [
        'menuitem'
    ],
    itemId: null,
    manifest: [
        'html'
    ],
    ping: [
        'a',
        'area'
    ],
    poster: [
        'video'
    ],
    src: [
        'audio',
        'embed',
        'iframe',
        'img',
        'input',
        'script',
        'source',
        'track',
        'video'
    ]
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('mdast').Nodes} Nodes
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s (default: `true`).
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML (default: `true`).
 */ /** @type {Options} */ __turbopack_context__.s([
    "toString",
    ()=>toString
]);
const emptyOptions = {};
function toString(value, options) {
    const settings = options || emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === 'boolean' ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;
    return one(value, includeImageAlt, includeHtml);
}
/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */ function one(value, includeImageAlt, includeHtml) {
    if (node(value)) {
        if ('value' in value) {
            return value.type === 'html' && !includeHtml ? '' : value.value;
        }
        if (includeImageAlt && 'alt' in value && value.alt) {
            return value.alt;
        }
        if ('children' in value) {
            return all(value.children, includeImageAlt, includeHtml);
        }
    }
    if (Array.isArray(value)) {
        return all(value, includeImageAlt, includeHtml);
    }
    return '';
}
/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */ function all(values, includeImageAlt, includeHtml) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    while(++index < values.length){
        result[index] = one(values[index], includeImageAlt, includeHtml);
    }
    return result.join('');
}
/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   Whether `value` is a node.
 */ function node(value) {
    return Boolean(value && typeof value === 'object');
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Parsing markdown comes with a couple of constants, such as minimum or maximum
 * sizes of certain sequences.
 * Additionally, there are a couple symbols used inside micromark.
 * These are all defined here, but compiled away by scripts.
 */ __turbopack_context__.s([
    "constants",
    ()=>constants
]);
const constants = {
    attentionSideAfter: 2,
    attentionSideBefore: 1,
    atxHeadingOpeningFenceSizeMax: 6,
    autolinkDomainSizeMax: 63,
    autolinkSchemeSizeMax: 32,
    cdataOpeningString: 'CDATA[',
    characterGroupPunctuation: 2,
    characterGroupWhitespace: 1,
    characterReferenceDecimalSizeMax: 7,
    characterReferenceHexadecimalSizeMax: 6,
    characterReferenceNamedSizeMax: 31,
    codeFencedSequenceSizeMin: 3,
    contentTypeContent: 'content',
    contentTypeDocument: 'document',
    contentTypeFlow: 'flow',
    contentTypeString: 'string',
    contentTypeText: 'text',
    hardBreakPrefixSizeMin: 2,
    htmlBasic: 6,
    htmlCdata: 5,
    htmlComment: 2,
    htmlComplete: 7,
    htmlDeclaration: 4,
    htmlInstruction: 3,
    htmlRawSizeMax: 8,
    htmlRaw: 1,
    linkResourceDestinationBalanceMax: 32,
    linkReferenceSizeMax: 999,
    listItemValueSizeMax: 10,
    numericBaseDecimal: 10,
    numericBaseHexadecimal: 0x10,
    tabSize: 4,
    thematicBreakMarkerCountMin: 3,
    v8MaxSafeChunkSize: 10_000 // V8 (and potentially others) have problems injecting giant arrays into other arrays, hence we operate in chunks.
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Character codes.
 *
 * This module is compiled away!
 *
 * micromark works based on character codes.
 * This module contains constants for the ASCII block and the replacement
 * character.
 * A couple of them are handled in a special way, such as the line endings
 * (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
 * tab) and its expansion based on what column it’s at (virtual space),
 * and the end-of-file (eof) character.
 * As values are preprocessed before handling them, the actual characters LF,
 * CR, HT, and NUL (which is present as the replacement character), are
 * guaranteed to not exist.
 *
 * Unicode basic latin block.
 */ __turbopack_context__.s([
    "codes",
    ()=>codes
]);
const codes = {
    carriageReturn: -5,
    lineFeed: -4,
    carriageReturnLineFeed: -3,
    horizontalTab: -2,
    virtualSpace: -1,
    eof: null,
    nul: 0,
    soh: 1,
    stx: 2,
    etx: 3,
    eot: 4,
    enq: 5,
    ack: 6,
    bel: 7,
    bs: 8,
    ht: 9,
    lf: 10,
    vt: 11,
    ff: 12,
    cr: 13,
    so: 14,
    si: 15,
    dle: 16,
    dc1: 17,
    dc2: 18,
    dc3: 19,
    dc4: 20,
    nak: 21,
    syn: 22,
    etb: 23,
    can: 24,
    em: 25,
    sub: 26,
    esc: 27,
    fs: 28,
    gs: 29,
    rs: 30,
    us: 31,
    space: 32,
    exclamationMark: 33,
    quotationMark: 34,
    numberSign: 35,
    dollarSign: 36,
    percentSign: 37,
    ampersand: 38,
    apostrophe: 39,
    leftParenthesis: 40,
    rightParenthesis: 41,
    asterisk: 42,
    plusSign: 43,
    comma: 44,
    dash: 45,
    dot: 46,
    slash: 47,
    digit0: 48,
    digit1: 49,
    digit2: 50,
    digit3: 51,
    digit4: 52,
    digit5: 53,
    digit6: 54,
    digit7: 55,
    digit8: 56,
    digit9: 57,
    colon: 58,
    semicolon: 59,
    lessThan: 60,
    equalsTo: 61,
    greaterThan: 62,
    questionMark: 63,
    atSign: 64,
    uppercaseA: 65,
    uppercaseB: 66,
    uppercaseC: 67,
    uppercaseD: 68,
    uppercaseE: 69,
    uppercaseF: 70,
    uppercaseG: 71,
    uppercaseH: 72,
    uppercaseI: 73,
    uppercaseJ: 74,
    uppercaseK: 75,
    uppercaseL: 76,
    uppercaseM: 77,
    uppercaseN: 78,
    uppercaseO: 79,
    uppercaseP: 80,
    uppercaseQ: 81,
    uppercaseR: 82,
    uppercaseS: 83,
    uppercaseT: 84,
    uppercaseU: 85,
    uppercaseV: 86,
    uppercaseW: 87,
    uppercaseX: 88,
    uppercaseY: 89,
    uppercaseZ: 90,
    leftSquareBracket: 91,
    backslash: 92,
    rightSquareBracket: 93,
    caret: 94,
    underscore: 95,
    graveAccent: 96,
    lowercaseA: 97,
    lowercaseB: 98,
    lowercaseC: 99,
    lowercaseD: 100,
    lowercaseE: 101,
    lowercaseF: 102,
    lowercaseG: 103,
    lowercaseH: 104,
    lowercaseI: 105,
    lowercaseJ: 106,
    lowercaseK: 107,
    lowercaseL: 108,
    lowercaseM: 109,
    lowercaseN: 110,
    lowercaseO: 111,
    lowercaseP: 112,
    lowercaseQ: 113,
    lowercaseR: 114,
    lowercaseS: 115,
    lowercaseT: 116,
    lowercaseU: 117,
    lowercaseV: 118,
    lowercaseW: 119,
    lowercaseX: 120,
    lowercaseY: 121,
    lowercaseZ: 122,
    leftCurlyBrace: 123,
    verticalBar: 124,
    rightCurlyBrace: 125,
    tilde: 126,
    del: 127,
    // Unicode Specials block.
    byteOrderMarker: 65_279,
    // Unicode Specials block.
    replacementCharacter: 65_533 // `�`
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Here is the list of all types of tokens exposed by micromark, with a short
 * explanation of what they include and where they are found.
 * In picking names, generally, the rule is to be as explicit as possible
 * instead of reusing names.
 * For example, there is a `definitionDestination` and a `resourceDestination`,
 * instead of one shared name.
 */ // Note: when changing the next record, you must also change `TokenTypeMap`
// in `micromark-util-types/index.d.ts`.
__turbopack_context__.s([
    "types",
    ()=>types
]);
const types = {
    // Generic type for data, such as in a title, a destination, etc.
    data: 'data',
    // Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
    // Such as, between a fenced code fence and an info string.
    whitespace: 'whitespace',
    // Generic type for line endings (line feed, carriage return, carriage return +
    // line feed).
    lineEnding: 'lineEnding',
    // A line ending, but ending a blank line.
    lineEndingBlank: 'lineEndingBlank',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
    // line.
    linePrefix: 'linePrefix',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
    // line.
    lineSuffix: 'lineSuffix',
    // Whole ATX heading:
    //
    // ```markdown
    // #
    // ## Alpha
    // ### Bravo ###
    // ```
    //
    // Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
    atxHeading: 'atxHeading',
    // Sequence of number signs in an ATX heading (`###`).
    atxHeadingSequence: 'atxHeadingSequence',
    // Content in an ATX heading (`alpha`).
    // Includes text.
    atxHeadingText: 'atxHeadingText',
    // Whole autolink (`<https://example.com>` or `<admin@example.com>`)
    // Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
    autolink: 'autolink',
    // Email autolink w/o markers (`admin@example.com`)
    autolinkEmail: 'autolinkEmail',
    // Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
    autolinkMarker: 'autolinkMarker',
    // Protocol autolink w/o markers (`https://example.com`)
    autolinkProtocol: 'autolinkProtocol',
    // A whole character escape (`\-`).
    // Includes `escapeMarker` and `characterEscapeValue`.
    characterEscape: 'characterEscape',
    // The escaped character (`-`).
    characterEscapeValue: 'characterEscapeValue',
    // A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
    // Includes `characterReferenceMarker`, an optional
    // `characterReferenceMarkerNumeric`, in which case an optional
    // `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
    characterReference: 'characterReference',
    // The start or end marker (`&` or `;`).
    characterReferenceMarker: 'characterReferenceMarker',
    // Mark reference as numeric (`#`).
    characterReferenceMarkerNumeric: 'characterReferenceMarkerNumeric',
    // Mark reference as numeric (`x` or `X`).
    characterReferenceMarkerHexadecimal: 'characterReferenceMarkerHexadecimal',
    // Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
    characterReferenceValue: 'characterReferenceValue',
    // Whole fenced code:
    //
    // ````markdown
    // ```js
    // alert(1)
    // ```
    // ````
    codeFenced: 'codeFenced',
    // A fenced code fence, including whitespace, sequence, info, and meta
    // (` ```js `).
    codeFencedFence: 'codeFencedFence',
    // Sequence of grave accent or tilde characters (` ``` `) in a fence.
    codeFencedFenceSequence: 'codeFencedFenceSequence',
    // Info word (`js`) in a fence.
    // Includes string.
    codeFencedFenceInfo: 'codeFencedFenceInfo',
    // Meta words (`highlight="1"`) in a fence.
    // Includes string.
    codeFencedFenceMeta: 'codeFencedFenceMeta',
    // A line of code.
    codeFlowValue: 'codeFlowValue',
    // Whole indented code:
    //
    // ```markdown
    //     alert(1)
    // ```
    //
    // Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
    codeIndented: 'codeIndented',
    // A text code (``` `alpha` ```).
    // Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
    // `codeTextPadding`.
    codeText: 'codeText',
    codeTextData: 'codeTextData',
    // A space or line ending right after or before a tick.
    codeTextPadding: 'codeTextPadding',
    // A text code fence (` `` `).
    codeTextSequence: 'codeTextSequence',
    // Whole content:
    //
    // ```markdown
    // [a]: b
    // c
    // =
    // d
    // ```
    //
    // Includes `paragraph` and `definition`.
    content: 'content',
    // Whole definition:
    //
    // ```markdown
    // [micromark]: https://github.com/micromark/micromark
    // ```
    //
    // Includes `definitionLabel`, `definitionMarker`, `whitespace`,
    // `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
    definition: 'definition',
    // Destination of a definition (`https://github.com/micromark/micromark` or
    // `<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
    definitionDestination: 'definitionDestination',
    // Enclosed destination of a definition
    // (`<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteralMarker` and optionally
    // `definitionDestinationString`.
    definitionDestinationLiteral: 'definitionDestinationLiteral',
    // Markers of an enclosed definition destination (`<` or `>`).
    definitionDestinationLiteralMarker: 'definitionDestinationLiteralMarker',
    // Unenclosed destination of a definition
    // (`https://github.com/micromark/micromark`).
    // Includes `definitionDestinationString`.
    definitionDestinationRaw: 'definitionDestinationRaw',
    // Text in an destination (`https://github.com/micromark/micromark`).
    // Includes string.
    definitionDestinationString: 'definitionDestinationString',
    // Label of a definition (`[micromark]`).
    // Includes `definitionLabelMarker` and `definitionLabelString`.
    definitionLabel: 'definitionLabel',
    // Markers of a definition label (`[` or `]`).
    definitionLabelMarker: 'definitionLabelMarker',
    // Value of a definition label (`micromark`).
    // Includes string.
    definitionLabelString: 'definitionLabelString',
    // Marker between a label and a destination (`:`).
    definitionMarker: 'definitionMarker',
    // Title of a definition (`"x"`, `'y'`, or `(z)`).
    // Includes `definitionTitleMarker` and optionally `definitionTitleString`.
    definitionTitle: 'definitionTitle',
    // Marker around a title of a definition (`"`, `'`, `(`, or `)`).
    definitionTitleMarker: 'definitionTitleMarker',
    // Data without markers in a title (`z`).
    // Includes string.
    definitionTitleString: 'definitionTitleString',
    // Emphasis (`*alpha*`).
    // Includes `emphasisSequence` and `emphasisText`.
    emphasis: 'emphasis',
    // Sequence of emphasis markers (`*` or `_`).
    emphasisSequence: 'emphasisSequence',
    // Emphasis text (`alpha`).
    // Includes text.
    emphasisText: 'emphasisText',
    // The character escape marker (`\`).
    escapeMarker: 'escapeMarker',
    // A hard break created with a backslash (`\\n`).
    // Note: does not include the line ending.
    hardBreakEscape: 'hardBreakEscape',
    // A hard break created with trailing spaces (`  \n`).
    // Does not include the line ending.
    hardBreakTrailing: 'hardBreakTrailing',
    // Flow HTML:
    //
    // ```markdown
    // <div
    // ```
    //
    // Inlcudes `lineEnding`, `htmlFlowData`.
    htmlFlow: 'htmlFlow',
    htmlFlowData: 'htmlFlowData',
    // HTML in text (the tag in `a <i> b`).
    // Includes `lineEnding`, `htmlTextData`.
    htmlText: 'htmlText',
    htmlTextData: 'htmlTextData',
    // Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
    // `![alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    image: 'image',
    // Whole link label (`[*alpha*]`).
    // Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
    label: 'label',
    // Text in an label (`*alpha*`).
    // Includes text.
    labelText: 'labelText',
    // Start a link label (`[`).
    // Includes a `labelMarker`.
    labelLink: 'labelLink',
    // Start an image label (`![`).
    // Includes `labelImageMarker` and `labelMarker`.
    labelImage: 'labelImage',
    // Marker of a label (`[` or `]`).
    labelMarker: 'labelMarker',
    // Marker to start an image (`!`).
    labelImageMarker: 'labelImageMarker',
    // End a label (`]`).
    // Includes `labelMarker`.
    labelEnd: 'labelEnd',
    // Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    link: 'link',
    // Whole paragraph:
    //
    // ```markdown
    // alpha
    // bravo.
    // ```
    //
    // Includes text.
    paragraph: 'paragraph',
    // A reference (`[alpha]` or `[]`).
    // Includes `referenceMarker` and an optional `referenceString`.
    reference: 'reference',
    // A reference marker (`[` or `]`).
    referenceMarker: 'referenceMarker',
    // Reference text (`alpha`).
    // Includes string.
    referenceString: 'referenceString',
    // A resource (`(https://example.com "alpha")`).
    // Includes `resourceMarker`, an optional `resourceDestination` with an optional
    // `whitespace` and `resourceTitle`.
    resource: 'resource',
    // A resource destination (`https://example.com`).
    // Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
    resourceDestination: 'resourceDestination',
    // A literal resource destination (`<https://example.com>`).
    // Includes `resourceDestinationLiteralMarker` and optionally
    // `resourceDestinationString`.
    resourceDestinationLiteral: 'resourceDestinationLiteral',
    // A resource destination marker (`<` or `>`).
    resourceDestinationLiteralMarker: 'resourceDestinationLiteralMarker',
    // A raw resource destination (`https://example.com`).
    // Includes `resourceDestinationString`.
    resourceDestinationRaw: 'resourceDestinationRaw',
    // Resource destination text (`https://example.com`).
    // Includes string.
    resourceDestinationString: 'resourceDestinationString',
    // A resource marker (`(` or `)`).
    resourceMarker: 'resourceMarker',
    // A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
    // Includes `resourceTitleMarker` and optionally `resourceTitleString`.
    resourceTitle: 'resourceTitle',
    // A resource title marker (`"`, `'`, `(`, or `)`).
    resourceTitleMarker: 'resourceTitleMarker',
    // Resource destination title (`alpha`).
    // Includes string.
    resourceTitleString: 'resourceTitleString',
    // Whole setext heading:
    //
    // ```markdown
    // alpha
    // bravo
    // =====
    // ```
    //
    // Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
    // `setextHeadingLine`.
    setextHeading: 'setextHeading',
    // Content in a setext heading (`alpha\nbravo`).
    // Includes text.
    setextHeadingText: 'setextHeadingText',
    // Underline in a setext heading, including whitespace suffix (`==`).
    // Includes `setextHeadingLineSequence`.
    setextHeadingLine: 'setextHeadingLine',
    // Sequence of equals or dash characters in underline in a setext heading (`-`).
    setextHeadingLineSequence: 'setextHeadingLineSequence',
    // Strong (`**alpha**`).
    // Includes `strongSequence` and `strongText`.
    strong: 'strong',
    // Sequence of strong markers (`**` or `__`).
    strongSequence: 'strongSequence',
    // Strong text (`alpha`).
    // Includes text.
    strongText: 'strongText',
    // Whole thematic break:
    //
    // ```markdown
    // * * *
    // ```
    //
    // Includes `thematicBreakSequence` and `whitespace`.
    thematicBreak: 'thematicBreak',
    // A sequence of one or more thematic break markers (`***`).
    thematicBreakSequence: 'thematicBreakSequence',
    // Whole block quote:
    //
    // ```markdown
    // > a
    // >
    // > b
    // ```
    //
    // Includes `blockQuotePrefix` and flow.
    blockQuote: 'blockQuote',
    // The `>` or `> ` of a block quote.
    blockQuotePrefix: 'blockQuotePrefix',
    // The `>` of a block quote prefix.
    blockQuoteMarker: 'blockQuoteMarker',
    // The optional ` ` of a block quote prefix.
    blockQuotePrefixWhitespace: 'blockQuotePrefixWhitespace',
    // Whole ordered list:
    //
    // ```markdown
    // 1. a
    //    b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listOrdered: 'listOrdered',
    // Whole unordered list:
    //
    // ```markdown
    // - a
    //   b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listUnordered: 'listUnordered',
    // The indent of further list item lines.
    listItemIndent: 'listItemIndent',
    // A marker, as in, `*`, `+`, `-`, `.`, or `)`.
    listItemMarker: 'listItemMarker',
    // The thing that starts a list item, such as `1. `.
    // Includes `listItemValue` if ordered, `listItemMarker`, and
    // `listItemPrefixWhitespace` (unless followed by a line ending).
    listItemPrefix: 'listItemPrefix',
    // The whitespace after a marker.
    listItemPrefixWhitespace: 'listItemPrefixWhitespace',
    // The numerical value of an ordered item.
    listItemValue: 'listItemValue',
    // Internal types used for subtokenizers, compiled away
    chunkDocument: 'chunkDocument',
    chunkContent: 'chunkContent',
    chunkFlow: 'chunkFlow',
    chunkText: 'chunkText',
    chunkString: 'chunkString'
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * While micromark works based on character codes, this module includes the
 * string versions of ’em.
 * The C0 block, except for LF, CR, HT, and w/ the replacement character added,
 * are available here.
 */ __turbopack_context__.s([
    "values",
    ()=>values
]);
const values = {
    ht: '\t',
    lf: '\n',
    cr: '\r',
    space: ' ',
    exclamationMark: '!',
    quotationMark: '"',
    numberSign: '#',
    dollarSign: '$',
    percentSign: '%',
    ampersand: '&',
    apostrophe: "'",
    leftParenthesis: '(',
    rightParenthesis: ')',
    asterisk: '*',
    plusSign: '+',
    comma: ',',
    dash: '-',
    dot: '.',
    slash: '/',
    digit0: '0',
    digit1: '1',
    digit2: '2',
    digit3: '3',
    digit4: '4',
    digit5: '5',
    digit6: '6',
    digit7: '7',
    digit8: '8',
    digit9: '9',
    colon: ':',
    semicolon: ';',
    lessThan: '<',
    equalsTo: '=',
    greaterThan: '>',
    questionMark: '?',
    atSign: '@',
    uppercaseA: 'A',
    uppercaseB: 'B',
    uppercaseC: 'C',
    uppercaseD: 'D',
    uppercaseE: 'E',
    uppercaseF: 'F',
    uppercaseG: 'G',
    uppercaseH: 'H',
    uppercaseI: 'I',
    uppercaseJ: 'J',
    uppercaseK: 'K',
    uppercaseL: 'L',
    uppercaseM: 'M',
    uppercaseN: 'N',
    uppercaseO: 'O',
    uppercaseP: 'P',
    uppercaseQ: 'Q',
    uppercaseR: 'R',
    uppercaseS: 'S',
    uppercaseT: 'T',
    uppercaseU: 'U',
    uppercaseV: 'V',
    uppercaseW: 'W',
    uppercaseX: 'X',
    uppercaseY: 'Y',
    uppercaseZ: 'Z',
    leftSquareBracket: '[',
    backslash: '\\',
    rightSquareBracket: ']',
    caret: '^',
    underscore: '_',
    graveAccent: '`',
    lowercaseA: 'a',
    lowercaseB: 'b',
    lowercaseC: 'c',
    lowercaseD: 'd',
    lowercaseE: 'e',
    lowercaseF: 'f',
    lowercaseG: 'g',
    lowercaseH: 'h',
    lowercaseI: 'i',
    lowercaseJ: 'j',
    lowercaseK: 'k',
    lowercaseL: 'l',
    lowercaseM: 'm',
    lowercaseN: 'n',
    lowercaseO: 'o',
    lowercaseP: 'p',
    lowercaseQ: 'q',
    lowercaseR: 'r',
    lowercaseS: 's',
    lowercaseT: 't',
    lowercaseU: 'u',
    lowercaseV: 'v',
    lowercaseW: 'w',
    lowercaseX: 'x',
    lowercaseY: 'y',
    lowercaseZ: 'z',
    leftCurlyBrace: '{',
    verticalBar: '|',
    rightCurlyBrace: '}',
    tilde: '~',
    replacementCharacter: '�'
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "push",
    ()=>push,
    "splice",
    ()=>splice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {Array<unknown>} */ let parameters;
    // Make start between zero and `end` (included).
    if (start < 0) {
        start = -start > end ? 0 : end + start;
    } else {
        start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    // No need to chunk the items if there’s only a couple (10k) items.
    if (items.length < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        // @ts-expect-error Hush, it’s fine.
        list.splice(...parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) list.splice(start, remove);
        // Insert the items in chunks to not cause stack overflows.
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize);
            parameters.unshift(start, 0);
            // @ts-expect-error Hush, it’s fine.
            list.splice(...parameters);
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
            start += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
function push(list, items) {
    if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list;
    }
    return items;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Extension,
 *   Handles,
 *   HtmlExtension,
 *   NormalizedExtension
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "combineExtensions",
    ()=>combineExtensions,
    "combineHtmlExtensions",
    ()=>combineHtmlExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
;
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length){
        syntaxExtension(all, extensions[index]);
    }
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function syntaxExtension(all, extension) {
    /** @type {keyof Extension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});
        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];
        /** @type {string} */ let code;
        if (right) {
            for(code in right){
                if (!hasOwnProperty.call(left, code)) left[code] = [];
                const value = right[code];
                constructs(// @ts-expect-error Looks like a list.
                left[code], Array.isArray(value) ? value : value ? [
                    value
                ] : []);
            }
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 *   List of constructs to merge into.
 * @param {Array<unknown>} list
 *   List of constructs to merge.
 * @returns {undefined}
 *   Nothing.
 */ function constructs(existing, list) {
    let index = -1;
    /** @type {Array<unknown>} */ const before = [];
    while(++index < list.length){
        // @ts-expect-error Looks like an object.
        ;
        (list[index].add === 'after' ? existing : before).push(list[index]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(existing, 0, 0, before);
}
function combineHtmlExtensions(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length){
        htmlExtension(handlers, htmlExtensions[index]);
    }
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function htmlExtension(all, extension) {
    /** @type {keyof HtmlExtension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {keyof Handles} */ let type;
        if (right) {
            for(type in right){
                // @ts-expect-error assume document vs regular handler are managed correctly.
                left[type] = right[type];
            }
        }
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Code} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "asciiAlpha",
    ()=>asciiAlpha,
    "asciiAlphanumeric",
    ()=>asciiAlphanumeric,
    "asciiAtext",
    ()=>asciiAtext,
    "asciiControl",
    ()=>asciiControl,
    "asciiDigit",
    ()=>asciiDigit,
    "asciiHexDigit",
    ()=>asciiHexDigit,
    "asciiPunctuation",
    ()=>asciiPunctuation,
    "markdownLineEnding",
    ()=>markdownLineEnding,
    "markdownLineEndingOrSpace",
    ()=>markdownLineEndingOrSpace,
    "markdownSpace",
    ()=>markdownSpace,
    "unicodePunctuation",
    ()=>unicodePunctuation,
    "unicodeWhitespace",
    ()=>unicodeWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
;
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].del));
}
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code) {
    return code !== null && code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab;
}
function markdownLineEndingOrSpace(code) {
    return code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].nul || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space);
}
function markdownSpace(code) {
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space;
}
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
const unicodeWhitespace = regexCheck(/\s/);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 *   Expression.
 * @returns {(code: Code) => boolean}
 *   Check.
 */ function regexCheck(regex) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */ function check(code) {
        return code !== null && code > -1 && regex.test(String.fromCharCode(code));
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factorySpace",
    ()=>factorySpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
;
function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/dev/lib/splice-buffer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpliceBuffer",
    ()=>SpliceBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
class SpliceBuffer {
    /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */ constructor(initial){
        /** @type {Array<T>} */ this.left = initial ? [
            ...initial
        ] : [];
        /** @type {Array<T>} */ this.right = [];
    }
    /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */ get(index) {
        if (index < 0 || index >= this.left.length + this.right.length) {
            throw new RangeError('Cannot access index `' + index + '` in a splice buffer of size `' + (this.left.length + this.right.length) + '`');
        }
        if (index < this.left.length) return this.left[index];
        return this.right[this.right.length - index + this.left.length - 1];
    }
    /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */ get length() {
        return this.left.length + this.right.length;
    }
    /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */ shift() {
        this.setCursor(0);
        return this.right.pop();
    }
    /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */ slice(start, end) {
        /** @type {number} */ const stop = end === null || end === undefined ? Number.POSITIVE_INFINITY : end;
        if (stop < this.left.length) {
            return this.left.slice(start, stop);
        }
        if (start > this.left.length) {
            return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
        }
        return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
    }
    /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */ splice(start, deleteCount, items) {
        /** @type {number} */ const count = deleteCount || 0;
        this.setCursor(Math.trunc(start));
        const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
        if (items) chunkedPush(this.left, items);
        return removed.reverse();
    }
    /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */ pop() {
        this.setCursor(Number.POSITIVE_INFINITY);
        return this.left.pop();
    }
    /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */ push(item) {
        this.setCursor(Number.POSITIVE_INFINITY);
        this.left.push(item);
    }
    /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */ pushMany(items) {
        this.setCursor(Number.POSITIVE_INFINITY);
        chunkedPush(this.left, items);
    }
    /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */ unshift(item) {
        this.setCursor(0);
        this.right.push(item);
    }
    /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */ unshiftMany(items) {
        this.setCursor(0);
        chunkedPush(this.right, items.reverse());
    }
    /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */ setCursor(n) {
        if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
        if (n < this.left.length) {
            // Move cursor to the this.left
            const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
            chunkedPush(this.right, removed.reverse());
        } else {
            // Move cursor to the this.right
            const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
            chunkedPush(this.left, removed.reverse());
        }
    }
}
/**
 * Avoid stack overflow by pushing items onto the stack in segments
 *
 * @template T
 *   Item type.
 * @param {Array<T>} list
 *   List to inject into.
 * @param {ReadonlyArray<T>} right
 *   Items to inject.
 * @return {undefined}
 *   Nothing.
 */ function chunkedPush(list, right) {
    /** @type {number} */ let chunkStart = 0;
    if (right.length < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        list.push(...right);
    } else {
        while(chunkStart < right.length){
            list.push(...right.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize));
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/dev/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Chunk, Event, Token} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "subtokenize",
    ()=>subtokenize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$subtokenize$40$2$2e$1$2e$0$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$lib$2f$splice$2d$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/dev/lib/splice-buffer.js [app-ssr] (ecmascript)");
;
;
;
;
;
function subtokenize(eventsArray) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number | undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Array<Event>} */ let parameters;
    /** @type {Array<Event>} */ let subevents;
    /** @type {boolean | undefined} */ let more;
    const events = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$subtokenize$40$2$2e$1$2e$0$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$lib$2f$splice$2d$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpliceBuffer"](eventsArray);
    while(++index < events.length){
        while(index in jumps){
            index = jumps[index];
        }
        event = events.get(index);
        // Add a hook for the GFM tasklist extension, which needs to know if text
        // is in the first content of a list item.
        if (index && event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow && events.get(index - 1)[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(event[1]._tokenizer, 'expected `_tokenizer` on subtokens');
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                otherIndex += 2;
            }
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].content) {
                while(++otherIndex < subevents.length){
                    if (subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].content) {
                        break;
                    }
                    if (subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkText) {
                        subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                        otherIndex++;
                    }
                }
            }
        }
        // Enter.
        if (event[0] === 'enter') {
            if (event[1].contentType) {
                Object.assign(jumps, subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events.get(otherIndex);
                if (otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding || otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                    if (otherEvent[0] === 'enter') {
                        if (lineIndex) {
                            events.get(lineIndex)[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank;
                        }
                        otherEvent[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding;
                        lineIndex = otherIndex;
                    }
                } else if (otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix || otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemIndent) {
                // Move past.
                } else {
                    break;
                }
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = {
                    ...events.get(lineIndex)[1].start
                };
                // Switch container exit w/ line endings.
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                events.splice(lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    // The changes to the `events` buffer must be copied back into the eventsArray
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$chunked$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {SpliceBuffer<Event>} events
 *   Events.
 * @param {number} eventIndex
 *   Index.
 * @returns {Record<string, number>}
 *   Gaps.
 */ function subcontent(events, eventIndex) {
    const token = events.get(eventIndex)[1];
    const context = events.get(eventIndex)[2];
    let startPosition = eventIndex - 1;
    /** @type {Array<number>} */ const startPositions = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token.contentType, 'expected `contentType` on subtokens');
    let tokenizer = token._tokenizer;
    if (!tokenizer) {
        tokenizer = context.parser[token.contentType](token.start);
        if (token._contentTypeTextTrailing) {
            tokenizer._contentTypeTextTrailing = true;
        }
    }
    const childEvents = tokenizer.events;
    /** @type {Array<[number, number]>} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Array<Chunk>} */ let stream;
    /** @type {Token | undefined} */ let previous;
    let index = -1;
    /** @type {Token | undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ];
    // Loop forward through the linked tokens to pass them in order to the
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events.get(++startPosition)[1] !== current){
        // Empty.
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!previous || current.previous === previous, 'expected previous to match');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!previous || previous.next === current, 'expected next to match');
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) {
                stream.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof);
            }
            if (previous) {
                tokenizer.defineSkip(current.start);
            }
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = true;
            }
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = undefined;
            }
        }
        // Unravel the next token.
        previous = current;
        current = current.next;
    }
    // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length){
        if (// Find a void token that includes a break.
        childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(current, 'expected a current token');
            start = index + 1;
            breaks.push(start);
            // Help GC.
            current._tokenizer = undefined;
            current.previous = undefined;
            current = current.next;
        }
    }
    // Help GC.
    tokenizer.events = [];
    // If there’s one more token (which is the cases for lines that end in an
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!current.next, 'expected no next token');
    } else {
        breaks.pop();
    }
    // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(start !== undefined, 'expected a start position when splicing');
        jumps.push([
            start,
            start + slice.length - 1
        ]);
        events.splice(start, 2, slice);
    }
    jumps.reverse();
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Code} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "classifyCharacter",
    ()=>classifyCharacter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
;
function classifyCharacter(code) {
    if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].characterGroupWhitespace;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].characterGroupPunctuation;
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Event, Resolver, TokenizeContext} from 'micromark-util-types'
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {ReadonlyArray<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */ __turbopack_context__.s([
    "resolveAll",
    ()=>resolveAll
]);
function resolveAll(constructs, events, context) {
    /** @type {Array<Resolver>} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "characterEntities",
    ()=>characterEntities
]);
const characterEntities = {
    AElig: 'Æ',
    AMP: '&',
    Aacute: 'Á',
    Abreve: 'Ă',
    Acirc: 'Â',
    Acy: 'А',
    Afr: '𝔄',
    Agrave: 'À',
    Alpha: 'Α',
    Amacr: 'Ā',
    And: '⩓',
    Aogon: 'Ą',
    Aopf: '𝔸',
    ApplyFunction: '⁡',
    Aring: 'Å',
    Ascr: '𝒜',
    Assign: '≔',
    Atilde: 'Ã',
    Auml: 'Ä',
    Backslash: '∖',
    Barv: '⫧',
    Barwed: '⌆',
    Bcy: 'Б',
    Because: '∵',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    Bfr: '𝔅',
    Bopf: '𝔹',
    Breve: '˘',
    Bscr: 'ℬ',
    Bumpeq: '≎',
    CHcy: 'Ч',
    COPY: '©',
    Cacute: 'Ć',
    Cap: '⋒',
    CapitalDifferentialD: 'ⅅ',
    Cayleys: 'ℭ',
    Ccaron: 'Č',
    Ccedil: 'Ç',
    Ccirc: 'Ĉ',
    Cconint: '∰',
    Cdot: 'Ċ',
    Cedilla: '¸',
    CenterDot: '·',
    Cfr: 'ℭ',
    Chi: 'Χ',
    CircleDot: '⊙',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    Colon: '∷',
    Colone: '⩴',
    Congruent: '≡',
    Conint: '∯',
    ContourIntegral: '∮',
    Copf: 'ℂ',
    Coproduct: '∐',
    CounterClockwiseContourIntegral: '∳',
    Cross: '⨯',
    Cscr: '𝒞',
    Cup: '⋓',
    CupCap: '≍',
    DD: 'ⅅ',
    DDotrahd: '⤑',
    DJcy: 'Ђ',
    DScy: 'Ѕ',
    DZcy: 'Џ',
    Dagger: '‡',
    Darr: '↡',
    Dashv: '⫤',
    Dcaron: 'Ď',
    Dcy: 'Д',
    Del: '∇',
    Delta: 'Δ',
    Dfr: '𝔇',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    Diamond: '⋄',
    DifferentialD: 'ⅆ',
    Dopf: '𝔻',
    Dot: '¨',
    DotDot: '⃜',
    DotEqual: '≐',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrow: '↓',
    DownArrowBar: '⤓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVector: '↽',
    DownLeftVectorBar: '⥖',
    DownRightTeeVector: '⥟',
    DownRightVector: '⇁',
    DownRightVectorBar: '⥗',
    DownTee: '⊤',
    DownTeeArrow: '↧',
    Downarrow: '⇓',
    Dscr: '𝒟',
    Dstrok: 'Đ',
    ENG: 'Ŋ',
    ETH: 'Ð',
    Eacute: 'É',
    Ecaron: 'Ě',
    Ecirc: 'Ê',
    Ecy: 'Э',
    Edot: 'Ė',
    Efr: '𝔈',
    Egrave: 'È',
    Element: '∈',
    Emacr: 'Ē',
    EmptySmallSquare: '◻',
    EmptyVerySmallSquare: '▫',
    Eogon: 'Ę',
    Eopf: '𝔼',
    Epsilon: 'Ε',
    Equal: '⩵',
    EqualTilde: '≂',
    Equilibrium: '⇌',
    Escr: 'ℰ',
    Esim: '⩳',
    Eta: 'Η',
    Euml: 'Ë',
    Exists: '∃',
    ExponentialE: 'ⅇ',
    Fcy: 'Ф',
    Ffr: '𝔉',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    Fopf: '𝔽',
    ForAll: '∀',
    Fouriertrf: 'ℱ',
    Fscr: 'ℱ',
    GJcy: 'Ѓ',
    GT: '>',
    Gamma: 'Γ',
    Gammad: 'Ϝ',
    Gbreve: 'Ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    Gcy: 'Г',
    Gdot: 'Ġ',
    Gfr: '𝔊',
    Gg: '⋙',
    Gopf: '𝔾',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    Gt: '≫',
    HARDcy: 'Ъ',
    Hacek: 'ˇ',
    Hat: '^',
    Hcirc: 'Ĥ',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    Hopf: 'ℍ',
    HorizontalLine: '─',
    Hscr: 'ℋ',
    Hstrok: 'Ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    IEcy: 'Е',
    IJlig: 'Ĳ',
    IOcy: 'Ё',
    Iacute: 'Í',
    Icirc: 'Î',
    Icy: 'И',
    Idot: 'İ',
    Ifr: 'ℑ',
    Igrave: 'Ì',
    Im: 'ℑ',
    Imacr: 'Ī',
    ImaginaryI: 'ⅈ',
    Implies: '⇒',
    Int: '∬',
    Integral: '∫',
    Intersection: '⋂',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    Iogon: 'Į',
    Iopf: '𝕀',
    Iota: 'Ι',
    Iscr: 'ℐ',
    Itilde: 'Ĩ',
    Iukcy: 'І',
    Iuml: 'Ï',
    Jcirc: 'Ĵ',
    Jcy: 'Й',
    Jfr: '𝔍',
    Jopf: '𝕁',
    Jscr: '𝒥',
    Jsercy: 'Ј',
    Jukcy: 'Є',
    KHcy: 'Х',
    KJcy: 'Ќ',
    Kappa: 'Κ',
    Kcedil: 'Ķ',
    Kcy: 'К',
    Kfr: '𝔎',
    Kopf: '𝕂',
    Kscr: '𝒦',
    LJcy: 'Љ',
    LT: '<',
    Lacute: 'Ĺ',
    Lambda: 'Λ',
    Lang: '⟪',
    Laplacetrf: 'ℒ',
    Larr: '↞',
    Lcaron: 'Ľ',
    Lcedil: 'Ļ',
    Lcy: 'Л',
    LeftAngleBracket: '⟨',
    LeftArrow: '←',
    LeftArrowBar: '⇤',
    LeftArrowRightArrow: '⇆',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVector: '⇃',
    LeftDownVectorBar: '⥙',
    LeftFloor: '⌊',
    LeftRightArrow: '↔',
    LeftRightVector: '⥎',
    LeftTee: '⊣',
    LeftTeeArrow: '↤',
    LeftTeeVector: '⥚',
    LeftTriangle: '⊲',
    LeftTriangleBar: '⧏',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVector: '↿',
    LeftUpVectorBar: '⥘',
    LeftVector: '↼',
    LeftVectorBar: '⥒',
    Leftarrow: '⇐',
    Leftrightarrow: '⇔',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    LessLess: '⪡',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    Lfr: '𝔏',
    Ll: '⋘',
    Lleftarrow: '⇚',
    Lmidot: 'Ŀ',
    LongLeftArrow: '⟵',
    LongLeftRightArrow: '⟷',
    LongRightArrow: '⟶',
    Longleftarrow: '⟸',
    Longleftrightarrow: '⟺',
    Longrightarrow: '⟹',
    Lopf: '𝕃',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    Lscr: 'ℒ',
    Lsh: '↰',
    Lstrok: 'Ł',
    Lt: '≪',
    Map: '⤅',
    Mcy: 'М',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    MinusPlus: '∓',
    Mopf: '𝕄',
    Mscr: 'ℳ',
    Mu: 'Μ',
    NJcy: 'Њ',
    Nacute: 'Ń',
    Ncaron: 'Ň',
    Ncedil: 'Ņ',
    Ncy: 'Н',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    Nfr: '𝔑',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    Nopf: 'ℕ',
    Not: '⫬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangle: '⋫',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    Nscr: '𝒩',
    Ntilde: 'Ñ',
    Nu: 'Ν',
    OElig: 'Œ',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Ocy: 'О',
    Odblac: 'Ő',
    Ofr: '𝔒',
    Ograve: 'Ò',
    Omacr: 'Ō',
    Omega: 'Ω',
    Omicron: 'Ο',
    Oopf: '𝕆',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    Or: '⩔',
    Oscr: '𝒪',
    Oslash: 'Ø',
    Otilde: 'Õ',
    Otimes: '⨷',
    Ouml: 'Ö',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    PartialD: '∂',
    Pcy: 'П',
    Pfr: '𝔓',
    Phi: 'Φ',
    Pi: 'Π',
    PlusMinus: '±',
    Poincareplane: 'ℌ',
    Popf: 'ℙ',
    Pr: '⪻',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    Prime: '″',
    Product: '∏',
    Proportion: '∷',
    Proportional: '∝',
    Pscr: '𝒫',
    Psi: 'Ψ',
    QUOT: '"',
    Qfr: '𝔔',
    Qopf: 'ℚ',
    Qscr: '𝒬',
    RBarr: '⤐',
    REG: '®',
    Racute: 'Ŕ',
    Rang: '⟫',
    Rarr: '↠',
    Rarrtl: '⤖',
    Rcaron: 'Ř',
    Rcedil: 'Ŗ',
    Rcy: 'Р',
    Re: 'ℜ',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    Rfr: 'ℜ',
    Rho: 'Ρ',
    RightAngleBracket: '⟩',
    RightArrow: '→',
    RightArrowBar: '⇥',
    RightArrowLeftArrow: '⇄',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVector: '⇂',
    RightDownVectorBar: '⥕',
    RightFloor: '⌋',
    RightTee: '⊢',
    RightTeeArrow: '↦',
    RightTeeVector: '⥛',
    RightTriangle: '⊳',
    RightTriangleBar: '⧐',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVector: '↾',
    RightUpVectorBar: '⥔',
    RightVector: '⇀',
    RightVectorBar: '⥓',
    Rightarrow: '⇒',
    Ropf: 'ℝ',
    RoundImplies: '⥰',
    Rrightarrow: '⇛',
    Rscr: 'ℛ',
    Rsh: '↱',
    RuleDelayed: '⧴',
    SHCHcy: 'Щ',
    SHcy: 'Ш',
    SOFTcy: 'Ь',
    Sacute: 'Ś',
    Sc: '⪼',
    Scaron: 'Š',
    Scedil: 'Ş',
    Scirc: 'Ŝ',
    Scy: 'С',
    Sfr: '𝔖',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    Sigma: 'Σ',
    SmallCircle: '∘',
    Sopf: '𝕊',
    Sqrt: '√',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    Sscr: '𝒮',
    Star: '⋆',
    Sub: '⋐',
    Subset: '⋐',
    SubsetEqual: '⊆',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    SuchThat: '∋',
    Sum: '∑',
    Sup: '⋑',
    Superset: '⊃',
    SupersetEqual: '⊇',
    Supset: '⋑',
    THORN: 'Þ',
    TRADE: '™',
    TSHcy: 'Ћ',
    TScy: 'Ц',
    Tab: '\t',
    Tau: 'Τ',
    Tcaron: 'Ť',
    Tcedil: 'Ţ',
    Tcy: 'Т',
    Tfr: '𝔗',
    Therefore: '∴',
    Theta: 'Θ',
    ThickSpace: '  ',
    ThinSpace: ' ',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    Topf: '𝕋',
    TripleDot: '⃛',
    Tscr: '𝒯',
    Tstrok: 'Ŧ',
    Uacute: 'Ú',
    Uarr: '↟',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    Ubreve: 'Ŭ',
    Ucirc: 'Û',
    Ucy: 'У',
    Udblac: 'Ű',
    Ufr: '𝔘',
    Ugrave: 'Ù',
    Umacr: 'Ū',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    Uopf: '𝕌',
    UpArrow: '↑',
    UpArrowBar: '⤒',
    UpArrowDownArrow: '⇅',
    UpDownArrow: '↕',
    UpEquilibrium: '⥮',
    UpTee: '⊥',
    UpTeeArrow: '↥',
    Uparrow: '⇑',
    Updownarrow: '⇕',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    Upsi: 'ϒ',
    Upsilon: 'Υ',
    Uring: 'Ů',
    Uscr: '𝒰',
    Utilde: 'Ũ',
    Uuml: 'Ü',
    VDash: '⊫',
    Vbar: '⫫',
    Vcy: 'В',
    Vdash: '⊩',
    Vdashl: '⫦',
    Vee: '⋁',
    Verbar: '‖',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    Vopf: '𝕍',
    Vscr: '𝒱',
    Vvdash: '⊪',
    Wcirc: 'Ŵ',
    Wedge: '⋀',
    Wfr: '𝔚',
    Wopf: '𝕎',
    Wscr: '𝒲',
    Xfr: '𝔛',
    Xi: 'Ξ',
    Xopf: '𝕏',
    Xscr: '𝒳',
    YAcy: 'Я',
    YIcy: 'Ї',
    YUcy: 'Ю',
    Yacute: 'Ý',
    Ycirc: 'Ŷ',
    Ycy: 'Ы',
    Yfr: '𝔜',
    Yopf: '𝕐',
    Yscr: '𝒴',
    Yuml: 'Ÿ',
    ZHcy: 'Ж',
    Zacute: 'Ź',
    Zcaron: 'Ž',
    Zcy: 'З',
    Zdot: 'Ż',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    Zfr: 'ℨ',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    aacute: 'á',
    abreve: 'ă',
    ac: '∾',
    acE: '∾̳',
    acd: '∿',
    acirc: 'â',
    acute: '´',
    acy: 'а',
    aelig: 'æ',
    af: '⁡',
    afr: '𝔞',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    alpha: 'α',
    amacr: 'ā',
    amalg: '⨿',
    amp: '&',
    and: '∧',
    andand: '⩕',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsd: '∡',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    aogon: 'ą',
    aopf: '𝕒',
    ap: '≈',
    apE: '⩰',
    apacir: '⩯',
    ape: '≊',
    apid: '≋',
    apos: "'",
    approx: '≈',
    approxeq: '≊',
    aring: 'å',
    ascr: '𝒶',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    atilde: 'ã',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    bNot: '⫭',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    barvee: '⊽',
    barwed: '⌅',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bnot: '⌐',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxDL: '╗',
    boxDR: '╔',
    boxDl: '╖',
    boxDr: '╓',
    boxH: '═',
    boxHD: '╦',
    boxHU: '╩',
    boxHd: '╤',
    boxHu: '╧',
    boxUL: '╝',
    boxUR: '╚',
    boxUl: '╜',
    boxUr: '╙',
    boxV: '║',
    boxVH: '╬',
    boxVL: '╣',
    boxVR: '╠',
    boxVh: '╫',
    boxVl: '╢',
    boxVr: '╟',
    boxbox: '⧉',
    boxdL: '╕',
    boxdR: '╒',
    boxdl: '┐',
    boxdr: '┌',
    boxh: '─',
    boxhD: '╥',
    boxhU: '╨',
    boxhd: '┬',
    boxhu: '┴',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxuL: '╛',
    boxuR: '╘',
    boxul: '┘',
    boxur: '└',
    boxv: '│',
    boxvH: '╪',
    boxvL: '╡',
    boxvR: '╞',
    boxvh: '┼',
    boxvl: '┤',
    boxvr: '├',
    bprime: '‵',
    breve: '˘',
    brvbar: '¦',
    bscr: '𝒷',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsol: '\\',
    bsolb: '⧅',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    bumpeq: '≏',
    cacute: 'ć',
    cap: '∩',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    capcup: '⩇',
    capdot: '⩀',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    ccaps: '⩍',
    ccaron: 'č',
    ccedil: 'ç',
    ccirc: 'ĉ',
    ccups: '⩌',
    ccupssm: '⩐',
    cdot: 'ċ',
    cedil: '¸',
    cemptyv: '⦲',
    cent: '¢',
    centerdot: '·',
    cfr: '𝔠',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    chi: 'χ',
    cir: '○',
    cirE: '⧃',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledR: '®',
    circledS: 'Ⓢ',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    conint: '∮',
    copf: '𝕔',
    coprod: '∐',
    copy: '©',
    copysr: '℗',
    crarr: '↵',
    cross: '✗',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cup: '∪',
    cupbrcap: '⩈',
    cupcap: '⩆',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dArr: '⇓',
    dHar: '⥥',
    dagger: '†',
    daleth: 'ℸ',
    darr: '↓',
    dash: '‐',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    dcaron: 'ď',
    dcy: 'д',
    dd: 'ⅆ',
    ddagger: '‡',
    ddarr: '⇊',
    ddotseq: '⩷',
    deg: '°',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    dfr: '𝔡',
    dharl: '⇃',
    dharr: '⇂',
    diam: '⋄',
    diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    dopf: '𝕕',
    dot: '˙',
    doteq: '≐',
    doteqdot: '≑',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    downarrow: '↓',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    dscr: '𝒹',
    dscy: 'ѕ',
    dsol: '⧶',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    dzcy: 'џ',
    dzigrarr: '⟿',
    eDDot: '⩷',
    eDot: '≑',
    eacute: 'é',
    easter: '⩮',
    ecaron: 'ě',
    ecir: '≖',
    ecirc: 'ê',
    ecolon: '≕',
    ecy: 'э',
    edot: 'ė',
    ee: 'ⅇ',
    efDot: '≒',
    efr: '𝔢',
    eg: '⪚',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    eng: 'ŋ',
    ensp: ' ',
    eogon: 'ę',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    equals: '=',
    equest: '≟',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erDot: '≓',
    erarr: '⥱',
    escr: 'ℯ',
    esdot: '≐',
    esim: '≂',
    eta: 'η',
    eth: 'ð',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    fallingdotseq: '≒',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    ffr: '𝔣',
    filig: 'ﬁ',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    fopf: '𝕗',
    forall: '∀',
    fork: '⋔',
    forkv: '⫙',
    fpartint: '⨍',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    gE: '≧',
    gEl: '⪌',
    gacute: 'ǵ',
    gamma: 'γ',
    gammad: 'ϝ',
    gap: '⪆',
    gbreve: 'ğ',
    gcirc: 'ĝ',
    gcy: 'г',
    gdot: 'ġ',
    ge: '≥',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    ges: '⩾',
    gescc: '⪩',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    gfr: '𝔤',
    gg: '≫',
    ggg: '⋙',
    gimel: 'ℷ',
    gjcy: 'ѓ',
    gl: '≷',
    glE: '⪒',
    gla: '⪥',
    glj: '⪤',
    gnE: '≩',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    gopf: '𝕘',
    grave: '`',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    gt: '>',
    gtcc: '⪧',
    gtcir: '⩺',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    hArr: '⇔',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    hardcy: 'ъ',
    harr: '↔',
    harrcir: '⥈',
    harrw: '↭',
    hbar: 'ℏ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    horbar: '―',
    hscr: '𝒽',
    hslash: 'ℏ',
    hstrok: 'ħ',
    hybull: '⁃',
    hyphen: '‐',
    iacute: 'í',
    ic: '⁣',
    icirc: 'î',
    icy: 'и',
    iecy: 'е',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    ijlig: 'ĳ',
    imacr: 'ī',
    image: 'ℑ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    imof: '⊷',
    imped: 'Ƶ',
    in: '∈',
    incare: '℅',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    int: '∫',
    intcal: '⊺',
    integers: 'ℤ',
    intercal: '⊺',
    intlarhk: '⨗',
    intprod: '⨼',
    iocy: 'ё',
    iogon: 'į',
    iopf: '𝕚',
    iota: 'ι',
    iprod: '⨼',
    iquest: '¿',
    iscr: '𝒾',
    isin: '∈',
    isinE: '⋹',
    isindot: '⋵',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    itilde: 'ĩ',
    iukcy: 'і',
    iuml: 'ï',
    jcirc: 'ĵ',
    jcy: 'й',
    jfr: '𝔧',
    jmath: 'ȷ',
    jopf: '𝕛',
    jscr: '𝒿',
    jsercy: 'ј',
    jukcy: 'є',
    kappa: 'κ',
    kappav: 'ϰ',
    kcedil: 'ķ',
    kcy: 'к',
    kfr: '𝔨',
    kgreen: 'ĸ',
    khcy: 'х',
    kjcy: 'ќ',
    kopf: '𝕜',
    kscr: '𝓀',
    lAarr: '⇚',
    lArr: '⇐',
    lAtail: '⤛',
    lBarr: '⤎',
    lE: '≦',
    lEg: '⪋',
    lHar: '⥢',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    lambda: 'λ',
    lang: '⟨',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    laquo: '«',
    larr: '←',
    larrb: '⇤',
    larrbfs: '⤟',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    lat: '⪫',
    latail: '⤙',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    lcaron: 'ľ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    leftarrow: '←',
    leftarrowtail: '↢',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    leftthreetimes: '⋋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    les: '⩽',
    lescc: '⪨',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    lessgtr: '≶',
    lesssim: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    ljcy: 'љ',
    ll: '≪',
    llarr: '⇇',
    llcorner: '⌞',
    llhard: '⥫',
    lltri: '◺',
    lmidot: 'ŀ',
    lmoust: '⎰',
    lmoustache: '⎰',
    lnE: '≨',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    longleftrightarrow: '⟷',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    lstrok: 'ł',
    lt: '<',
    ltcc: '⪦',
    ltcir: '⩹',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltrPar: '⦖',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    mDDot: '∺',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    mcy: 'м',
    mdash: '—',
    measuredangle: '∡',
    mfr: '𝔪',
    mho: '℧',
    micro: 'µ',
    mid: '∣',
    midast: '*',
    midcir: '⫰',
    middot: '·',
    minus: '−',
    minusb: '⊟',
    minusd: '∸',
    minusdu: '⨪',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    mstpos: '∾',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nGg: '⋙̸',
    nGt: '≫⃒',
    nGtv: '≫̸',
    nLeftarrow: '⇍',
    nLeftrightarrow: '⇎',
    nLl: '⋘̸',
    nLt: '≪⃒',
    nLtv: '≪̸',
    nRightarrow: '⇏',
    nVDash: '⊯',
    nVdash: '⊮',
    nabla: '∇',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natur: '♮',
    natural: '♮',
    naturals: 'ℕ',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    ncaron: 'ň',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    ncy: 'н',
    ndash: '–',
    ne: '≠',
    neArr: '⇗',
    nearhk: '⤤',
    nearr: '↗',
    nearrow: '↗',
    nedot: '≐̸',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    nexist: '∄',
    nexists: '∄',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    ngsim: '≵',
    ngt: '≯',
    ngtr: '≯',
    nhArr: '⇎',
    nharr: '↮',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    njcy: 'њ',
    nlArr: '⇍',
    nlE: '≦̸',
    nlarr: '↚',
    nldr: '‥',
    nle: '≰',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nlsim: '≴',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nmid: '∤',
    nopf: '𝕟',
    not: '¬',
    notin: '∉',
    notinE: '⋹̸',
    notindot: '⋵̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    npar: '∦',
    nparallel: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    npre: '⪯̸',
    nprec: '⊀',
    npreceq: '⪯̸',
    nrArr: '⇏',
    nrarr: '↛',
    nrarrc: '⤳̸',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvDash: '⊭',
    nvHarr: '⤄',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwArr: '⇖',
    nwarhk: '⤣',
    nwarr: '↖',
    nwarrow: '↖',
    nwnear: '⤧',
    oS: 'Ⓢ',
    oacute: 'ó',
    oast: '⊛',
    ocir: '⊚',
    ocirc: 'ô',
    ocy: 'о',
    odash: '⊝',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    oelig: 'œ',
    ofcir: '⦿',
    ofr: '𝔬',
    ogon: '˛',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    omacr: 'ō',
    omega: 'ω',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    oopf: '𝕠',
    opar: '⦷',
    operp: '⦹',
    oplus: '⊕',
    or: '∨',
    orarr: '↻',
    ord: '⩝',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oscr: 'ℴ',
    oslash: 'ø',
    osol: '⊘',
    otilde: 'õ',
    otimes: '⊗',
    otimesas: '⨶',
    ouml: 'ö',
    ovbar: '⌽',
    par: '∥',
    para: '¶',
    parallel: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    pfr: '𝔭',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plus: '+',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    pointint: '⨕',
    popf: '𝕡',
    pound: '£',
    pr: '≺',
    prE: '⪳',
    prap: '⪷',
    prcue: '≼',
    pre: '⪯',
    prec: '≺',
    precapprox: '⪷',
    preccurlyeq: '≼',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    precsim: '≾',
    prime: '′',
    primes: 'ℙ',
    prnE: '⪵',
    prnap: '⪹',
    prnsim: '⋨',
    prod: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    pscr: '𝓅',
    psi: 'ψ',
    puncsp: ' ',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    qprime: '⁗',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quot: '"',
    rAarr: '⇛',
    rArr: '⇒',
    rAtail: '⤜',
    rBarr: '⤏',
    rHar: '⥤',
    race: '∽̱',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raquo: '»',
    rarr: '→',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    rcaron: 'ř',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    rect: '▭',
    reg: '®',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    rho: 'ρ',
    rhov: 'ϱ',
    rightarrow: '→',
    rightarrowtail: '↣',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    rightthreetimes: '⋌',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoust: '⎱',
    rmoustache: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    roplus: '⨮',
    rotimes: '⨵',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    rsaquo: '›',
    rscr: '𝓇',
    rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    ruluhar: '⥨',
    rx: '℞',
    sacute: 'ś',
    sbquo: '‚',
    sc: '≻',
    scE: '⪴',
    scap: '⪸',
    scaron: 'š',
    sccue: '≽',
    sce: '⪰',
    scedil: 'ş',
    scirc: 'ŝ',
    scnE: '⪶',
    scnap: '⪺',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    scy: 'с',
    sdot: '⋅',
    sdotb: '⊡',
    sdote: '⩦',
    seArr: '⇘',
    searhk: '⤥',
    searr: '↘',
    searrow: '↘',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    shchcy: 'щ',
    shcy: 'ш',
    shortmid: '∣',
    shortparallel: '∥',
    shy: '­',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    softcy: 'ь',
    sol: '/',
    solb: '⧄',
    solbar: '⌿',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    squ: '□',
    square: '□',
    squarf: '▪',
    squf: '▪',
    srarr: '→',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    subE: '⫅',
    subdot: '⪽',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    subseteq: '⊆',
    subseteqq: '⫅',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succ: '≻',
    succapprox: '⪸',
    succcurlyeq: '≽',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    sum: '∑',
    sung: '♪',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    sup: '⊃',
    supE: '⫆',
    supdot: '⪾',
    supdsub: '⫘',
    supe: '⊇',
    supedot: '⫄',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swArr: '⇙',
    swarhk: '⤦',
    swarr: '↙',
    swarrow: '↙',
    swnwar: '⤪',
    szlig: 'ß',
    target: '⌖',
    tau: 'τ',
    tbrk: '⎴',
    tcaron: 'ť',
    tcedil: 'ţ',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    thorn: 'þ',
    tilde: '˜',
    times: '×',
    timesb: '⊠',
    timesbar: '⨱',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    top: '⊤',
    topbot: '⌶',
    topcir: '⫱',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    tscr: '𝓉',
    tscy: 'ц',
    tshcy: 'ћ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    uArr: '⇑',
    uHar: '⥣',
    uacute: 'ú',
    uarr: '↑',
    ubrcy: 'ў',
    ubreve: 'ŭ',
    ucirc: 'û',
    ucy: 'у',
    udarr: '⇅',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    ufr: '𝔲',
    ugrave: 'ù',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    umacr: 'ū',
    uml: '¨',
    uogon: 'ų',
    uopf: '𝕦',
    uparrow: '↑',
    updownarrow: '↕',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    upsi: 'υ',
    upsih: 'ϒ',
    upsilon: 'υ',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    uring: 'ů',
    urtri: '◹',
    uscr: '𝓊',
    utdot: '⋰',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    uuml: 'ü',
    uwangle: '⦧',
    vArr: '⇕',
    vBar: '⫨',
    vBarv: '⫩',
    vDash: '⊨',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vcy: 'в',
    vdash: '⊢',
    vee: '∨',
    veebar: '⊻',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    vert: '|',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    vzigzag: '⦚',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    wedgeq: '≙',
    weierp: '℘',
    wfr: '𝔴',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    xfr: '𝔵',
    xhArr: '⟺',
    xharr: '⟷',
    xi: 'ξ',
    xlArr: '⟸',
    xlarr: '⟵',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrArr: '⟹',
    xrarr: '⟶',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    yacute: 'ý',
    yacy: 'я',
    ycirc: 'ŷ',
    ycy: 'ы',
    yen: '¥',
    yfr: '𝔶',
    yicy: 'ї',
    yopf: '𝕪',
    yscr: '𝓎',
    yucy: 'ю',
    yuml: 'ÿ',
    zacute: 'ź',
    zcaron: 'ž',
    zcy: 'з',
    zdot: 'ż',
    zeetrf: 'ℨ',
    zeta: 'ζ',
    zfr: '𝔷',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌'
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/decode-named-character-reference@1.2.0/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNamedCharacterReference",
    ()=>decodeNamedCharacterReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$character$2d$entities$40$2$2e$0$2e$2$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js [app-ssr] (ecmascript)");
;
// To do: next major: use `Object.hasOwn`.
const own = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
    return own.call(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$character$2d$entities$40$2$2e$0$2e$2$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEntities"], value) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$character$2d$entities$40$2$2e$0$2e$2$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEntities"][value] : false;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryDestination",
    ()=>factoryDestination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return enclosedBefore;
        }
        // ASCII control, space, closing paren.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiControl"])(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return raw(code);
    }
    /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosedBefore(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return enclosed(code);
    }
    /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosed(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            effects.exit(stringType);
            return enclosedBefore(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? enclosedEscape : enclosed;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */ function enclosedEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return enclosed;
        }
        return enclosed(code);
    }
    /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function raw(code) {
        if (!balance && (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code))) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if (balance < limit && code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            effects.consume(code);
            balance++;
            return raw;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis) {
            effects.consume(code);
            balance--;
            return raw;
        }
        // ASCII control (but *not* `\0`) and space and `(`.
        // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
        // doesn’t.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiControl"])(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? rawEscape : raw;
    }
    /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */ function rawEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return raw;
        }
        return raw(code);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Effects,
 *   State,
 *   TokenizeContext,
 *   TokenType
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryLabel",
    ()=>factoryLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket, 'expected `[`');
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (size > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket && !seen || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].caret && !size && '_hiddenFootnoteSupport' in self.parser.constructs) {
            return nok(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        // To do: indent? Link chunks and EOLs together?
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            return atBreak;
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return labelInside(code);
    }
    /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function labelInside(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code) || size++ > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            return atBreak(code);
        }
        effects.consume(code);
        if (!seen) seen = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? labelEscape : labelInside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */ function labelEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.consume(code);
            size++;
            return labelInside;
        }
        return labelInside(code);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Code,
 *   Effects,
 *   State,
 *   TokenType
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryTitle",
    ()=>factoryTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].quotationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].apostrophe || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            effects.enter(type);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            marker = code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis : code;
            return begin;
        }
        return nok(code);
    }
    /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function begin(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atBreak(code);
    }
    /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return begin(marker);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            return nok(code);
        }
        // Note: blank lines can’t exist in content.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            // To do: use `space_or_tab_eol_with_options`, connect.
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, atBreak, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix);
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return inside(code);
    }
    /**
   *
   *
   * @type {State}
   */ function inside(code) {
        if (code === marker || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            return atBreak(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? escape : inside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */ function escape(code) {
        if (code === marker || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return inside;
        }
        return inside(code);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryWhitespace",
    ()=>factoryWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryWhitespace(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            seen = true;
            return start;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$factory$2d$space$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, start, seen ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineSuffix)(code);
        }
        return ok(code);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeIdentifier",
    ()=>normalizeIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
function normalizeIdentifier(value) {
    return value// Collapse markdown whitespace.
    .replace(/[\t\n\r ]+/g, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].space)// Trim.
    .replace(/^ | $/g, '')// Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */ __turbopack_context__.s([
    "htmlBlockNames",
    ()=>htmlBlockNames,
    "htmlRawNames",
    ()=>htmlRawNames
]);
const htmlBlockNames = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul'
];
const htmlRawNames = [
    'pre',
    'script',
    'style',
    'textarea'
];
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNumericCharacterReference",
    ()=>decodeNumericCharacterReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
function decodeNumericCharacterReference(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space.
    code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].ht || code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].vt || code > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].cr && code < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].tilde && code < 160 || code > 55_295 && code < 57_344 || code > 64_975 && code < 65_008 || /* eslint-disable no-bitwise */ (code & 65_535) === 65_535 || (code & 65_535) === 65_534 || /* eslint-enable no-bitwise */ // Out of range
    code > 1_114_111) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
    }
    return String.fromCodePoint(code);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeString",
    ()=>decodeString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/decode-named-character-reference@1.2.0/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
;
;
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
}
/**
 * @param {string} $0
 *   Match.
 * @param {string} $1
 *   Character escape.
 * @param {string} $2
 *   Character reference.
 * @returns {string}
 *   Decoded value
 */ function decode($0, $1, $2) {
    if ($1) {
        // Escape.
        return $1;
    }
    // Reference.
    const head = $2.charCodeAt(0);
    if (head === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].numberSign) {
        const head = $2.charCodeAt(1);
        const hex = head === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lowercaseX || head === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].uppercaseX;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumericCharacterReference"])($2.slice(hex ? 2 : 1), hex ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseHexadecimal : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])($2) || $0;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/dev/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Break,
 *   Blockquote,
 *   Code,
 *   Definition,
 *   Emphasis,
 *   Heading,
 *   Html,
 *   Image,
 *   InlineCode,
 *   Link,
 *   ListItem,
 *   List,
 *   Nodes,
 *   Paragraph,
 *   PhrasingContent,
 *   ReferenceType,
 *   Root,
 *   Strong,
 *   Text,
 *   ThematicBreak
 * } from 'mdast'
 * @import {
 *   Encoding,
 *   Event,
 *   Token,
 *   Value
 * } from 'micromark-util-types'
 * @import {Point} from 'unist'
 * @import {
 *   CompileContext,
 *   CompileData,
 *   Config,
 *   Extension,
 *   Handle,
 *   OnEnterError,
 *   Options
 * } from './types.js'
 */ __turbopack_context__.s([
    "fromMarkdown",
    ()=>fromMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$string$40$4$2e$0$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/lib/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$postprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/lib/postprocess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$preprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/dev/lib/preprocess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$string$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$string$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/decode-named-character-reference@1.2.0/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const own = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
    if (typeof encoding !== 'string') {
        options = encoding;
        encoding = undefined;
    }
    return compiler(options)((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$postprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postprocess"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(options).document().write((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$40$4$2e$0$2e$2$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$preprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preprocess"])()(value, encoding, true))));
}
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */ function compiler(options) {
    /** @type {Config} */ const config = {
        transforms: [],
        canContainEols: [
            'emphasis',
            'fragment',
            'heading',
            'paragraph',
            'strong'
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            characterReference: onexitcharacterreference,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    };
    configure(config, (options || {}).mdastExtensions || []);
    /** @type {CompileData} */ const data = {};
    return compile;
    //TURBOPACK unreachable
    ;
    /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: 'root',
            children: []
        };
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack: [
                tree
            ],
            tokenStack: [],
            config,
            enter,
            exit,
            buffer,
            resume,
            data
        };
        /** @type {Array<number>} */ const listStack = [];
        let index = -1;
        while(++index < events.length){
            // We preprocess lists to add `listItem` tokens, and to infer whether
            // items the list itself are spread out.
            if (events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered || events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered) {
                if (events[index][0] === 'enter') {
                    listStack.push(index);
                } else {
                    const tail = listStack.pop();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof tail === 'number', 'expected list ot be open');
                    index = prepareList(events, tail, index);
                }
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if (own.call(handler, events[index][1].type)) {
                handler[events[index][1].type].call(Object.assign({
                    sliceSerialize: events[index][2].sliceSerialize
                }, context), events[index][1]);
            }
        }
        // Handle tokens still being open.
        if (context.tokenStack.length > 0) {
            const tail = context.tokenStack[context.tokenStack.length - 1];
            const handler = tail[1] || defaultOnError;
            handler.call(context, undefined, tail[0]);
        }
        // Figure out `root` position.
        tree.position = {
            start: point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        // Call transforms.
        index = -1;
        while(++index < config.transforms.length){
            tree = config.transforms[index](tree) || tree;
        }
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token | undefined} */ let listItem;
        /** @type {number | undefined} */ let lineIndex;
        /** @type {number | undefined} */ let firstBlankLineIndex;
        /** @type {boolean | undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            switch(event[1].type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuote:
                    {
                        if (event[0] === 'enter') {
                            containerBalance++;
                        } else {
                            containerBalance--;
                        }
                        atMarker = undefined;
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank:
                    {
                        if (event[0] === 'enter') {
                            if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                                firstBlankLineIndex = index;
                            }
                            atMarker = undefined;
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemValue:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemMarker:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix:
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefixWhitespace:
                    {
                        break;
                    }
                default:
                    {
                        atMarker = undefined;
                    }
            }
            if (!containerBalance && event[0] === 'enter' && event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix || containerBalance === -1 && event[0] === 'exit' && (event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered || event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered)) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                            if (tailEvent[0] === 'exit') continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank;
                                listSpread = true;
                            }
                            tailEvent[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding;
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuotePrefix || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuotePrefixWhitespace || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuoteMarker || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemIndent) {
                        // Empty
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        listItem._spread = true;
                    }
                    // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        'exit',
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                }
                // Create a new list item.
                if (event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix) {
                    /** @type {Token} */ const item = {
                        type: 'listItem',
                        _spread: false,
                        start: Object.assign({}, event[1].start),
                        // @ts-expect-error: we’ll add `end` in a second.
                        end: undefined
                    };
                    listItem = item;
                    events.splice(index, 0, [
                        'enter',
                        item,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        }
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Nodes} create
   *   Create a node.
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function opener(create, and) {
        return open;
        //TURBOPACK unreachable
        ;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /**
   * @type {CompileContext['buffer']}
   */ function buffer() {
        this.stack.push({
            type: 'fragment',
            children: []
        });
    }
    /**
   * @type {CompileContext['enter']}
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(parent, 'expected `parent`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in parent, 'expected `parent`');
        /** @type {Array<Nodes>} */ const siblings = parent.children;
        siblings.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler || undefined
        ]);
        node.position = {
            start: point(token.start),
            // @ts-expect-error: `end` will be patched later.
            end: undefined
        };
    }
    /**
   * Create a closer handle.
   *
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function closer(and) {
        return close;
        //TURBOPACK unreachable
        ;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @type {CompileContext['exit']}
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected `node`');
        const open = this.tokenStack.pop();
        if (!open) {
            throw new Error('Cannot close `' + token.type + '` (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
                start: token.start,
                end: token.end
            }) + '): it’s not open');
        } else if (open[0].type !== token.type) {
            if (onExitError) {
                onExitError.call(this, token, open[0]);
            } else {
                const handler = open[1] || defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type !== 'fragment', 'unexpected fragment `exit`ed');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.position, 'expected `position` to be defined');
        node.position.end = point(token.end);
    }
    /**
   * @type {CompileContext['resume']}
   */ function resume() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$string$40$4$2e$0$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(this.stack.pop());
    }
    //
    // Handlers.
    //
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistordered() {
        this.data.expectingFirstListItemValue = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistitemvalue(token) {
        if (this.data.expectingFirstListItemValue) {
            const ancestor = this.stack[this.stack.length - 2];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor, 'expected nodes on stack');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor.type === 'list', 'expected list on stack');
            ancestor.start = Number.parseInt(this.sliceSerialize(token), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal);
            this.data.expectingFirstListItemValue = undefined;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.lang = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.meta = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (this.data.flowCodeInside) return;
        this.buffer();
        this.data.flowCodeInside = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefenced() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
        this.data.flowCodeInside = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodeindented() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.value = data.replace(/(\r?\n|\r)$/g, '');
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitionlabelstring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.label = label;
        node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitatxheadingsequence(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'heading', 'expected heading on stack');
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(depth === 1 || depth === 2 || depth === 3 || depth === 4 || depth === 5 || depth === 6, 'expected `depth` between `1` and `6`');
            node.depth = depth;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadingtext() {
        this.data.setextHeadingSlurpLineEnding = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadinglinesequence(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'heading', 'expected heading on stack');
        node.depth = this.sliceSerialize(token).codePointAt(0) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].equalsTo ? 1 : 2;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheading() {
        this.data.setextHeadingSlurpLineEnding = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterdata(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in node, 'expected parent on stack');
        /** @type {Array<Nodes>} */ const siblings = node.children;
        let tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== 'text') {
            // Add a new text node.
            tail = text();
            tail.position = {
                start: point(token.start),
                // @ts-expect-error: we’ll add `end` later.
                end: undefined
            };
            siblings.push(tail);
        }
        this.stack.push(tail);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdata(token) {
        const tail = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected a `node` to be on the stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('value' in tail, 'expected a `literal` to be on the stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected `node` to have an open position');
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(context, 'expected `node`');
        // If we’re at a hard break, include the line ending in there.
        if (this.data.atHardBreak) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in context, 'expected `parent`');
            const tail = context.children[context.children.length - 1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected tail to have a starting position');
            tail.position.end = point(token.end);
            this.data.atHardBreak = undefined;
            return;
        }
        if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithardbreak() {
        this.data.atHardBreak = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmlflow() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'html', 'expected html on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmltext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'html', 'expected html on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodetext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'inlineCode', 'expected inline code on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlink() {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (this.data.inReference) {
            /** @type {ReferenceType} */ const referenceType = this.data.referenceType || 'shortcut';
            node.type += 'Reference';
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        this.data.referenceType = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitimage() {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image', 'expected image on stack');
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (this.data.inReference) {
            /** @type {ReferenceType} */ const referenceType = this.data.referenceType || 'shortcut';
            node.type += 'Reference';
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        this.data.referenceType = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabeltext(token) {
        const string = this.sliceSerialize(token);
        const ancestor = this.stack[this.stack.length - 2];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor, 'expected ancestor on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor.type === 'image' || ancestor.type === 'link', 'expected image or link on stack');
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        ancestor.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$string$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$string$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString"])(string);
        // @ts-expect-error: same as above.
        ancestor.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(string).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(fragment, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(fragment.type === 'fragment', 'expected fragment on stack');
        const value = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        // Assume a reference.
        this.data.inReference = true;
        if (node.type === 'link') {
            /** @type {Array<PhrasingContent>} */ const children = fragment.children;
            node.children = children;
        } else {
            node.alt = value;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresource() {
        this.data.inReference = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterreference() {
        this.data.referenceType = 'collapsed';
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image reference or link reference on stack');
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        node.label = label;
        // @ts-expect-error: same as above.
        node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$normalize$2d$identifier$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
        this.data.referenceType = 'full';
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencemarker(token) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token.type === 'characterReferenceMarkerNumeric' || token.type === 'characterReferenceMarkerHexadecimal');
        this.data.characterReferenceType = token.type;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = this.data.characterReferenceType;
        /** @type {string} */ let value;
        if (type) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$40$2$2e$0$2e$2$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumericCharacterReference"])(data, type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].characterReferenceMarkerNumeric ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseHexadecimal);
            this.data.characterReferenceType = undefined;
        } else {
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$decode$2d$named$2d$character$2d$reference$40$1$2e$2$2e$0$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(data);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result !== false, 'expected reference to decode');
            value = result;
        }
        const tail = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected `node`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('value' in tail, 'expected `node.value`');
        tail.value += value;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreference(token) {
        const tail = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected `node`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected `node.position`');
        tail.position.end = point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        node.url = this.sliceSerialize(token);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        node.url = 'mailto:' + this.sliceSerialize(token);
    }
    //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: 'blockquote',
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: 'code',
            lang: null,
            meta: null,
            value: ''
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: 'inlineCode',
            value: ''
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: 'definition',
            identifier: '',
            label: null,
            title: null,
            url: ''
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: 'emphasis',
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        return {
            type: 'heading',
            // @ts-expect-error `depth` will be set later.
            depth: 0,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: 'break'
        };
    }
    /** @returns {Html} */ function html() {
        return {
            type: 'html',
            value: ''
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: 'image',
            title: null,
            url: '',
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: 'link',
            title: null,
            url: '',
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: 'list',
            ordered: token.type === 'listOrdered',
            start: null,
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem(token) {
        return {
            type: 'listItem',
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: 'paragraph',
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: 'strong',
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: 'text',
            value: ''
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: 'thematicBreak'
        };
    }
}
/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */ function point(d) {
    return {
        line: d.line,
        column: d.column,
        offset: d.offset
    };
}
/**
 * @param {Config} combined
 * @param {Array<Array<Extension> | Extension>} extensions
 * @returns {undefined}
 */ function configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) {
            configure(combined, value);
        } else {
            extension(combined, value);
        }
    }
}
/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {undefined}
 */ function extension(combined, extension) {
    /** @type {keyof Extension} */ let key;
    for(key in extension){
        if (own.call(extension, key)) {
            switch(key){
                case 'canContainEols':
                    {
                        const right = extension[key];
                        if (right) {
                            combined[key].push(...right);
                        }
                        break;
                    }
                case 'transforms':
                    {
                        const right = extension[key];
                        if (right) {
                            combined[key].push(...right);
                        }
                        break;
                    }
                case 'enter':
                case 'exit':
                    {
                        const right = extension[key];
                        if (right) {
                            Object.assign(combined[key], right);
                        }
                        break;
                    }
            }
        }
    }
}
/** @type {OnEnterError} */ function defaultOnError(left, right) {
    if (left) {
        throw new Error('Cannot close `' + left.type + '` (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: left.start,
            end: left.end
        }) + '): a different token (`' + right.type + '`, ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: right.start,
            end: right.end
        }) + ') is open');
    } else {
        throw new Error('Cannot close document, a token (`' + right.type + '`, ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$stringify$2d$position$40$4$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: right.start,
            end: right.end
        }) + ') is still open');
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} FromMarkdownOptions
 * @typedef {import('unified').Parser<Root>} Parser
 * @typedef {import('unified').Processor<Root>} Processor
 */ /**
 * @typedef {Omit<FromMarkdownOptions, 'extensions' | 'mdastExtensions'>} Options
 */ __turbopack_context__.s([
    "default",
    ()=>remarkParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$from$2d$markdown$40$2$2e$0$2e$2$2f$node_modules$2f$mdast$2d$util$2d$from$2d$markdown$2f$dev$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/dev/lib/index.js [app-ssr] (ecmascript)");
;
function remarkParse(options) {
    /** @type {Processor} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    self.parser = parser;
    /**
   * @type {Parser}
   */ function parser(doc) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$from$2d$markdown$40$2$2e$0$2e$2$2f$node_modules$2f$mdast$2d$util$2d$from$2d$markdown$2f$dev$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMarkdown"])(doc, {
            ...self.data('settings'),
            ...options,
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: self.data('micromarkExtensions') || [],
            mdastExtensions: self.data('fromMarkdownExtensions') || []
        });
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARRAY",
    ()=>ARRAY,
    "BIGINT",
    ()=>BIGINT,
    "DATE",
    ()=>DATE,
    "ERROR",
    ()=>ERROR,
    "MAP",
    ()=>MAP,
    "OBJECT",
    ()=>OBJECT,
    "PRIMITIVE",
    ()=>PRIMITIVE,
    "REGEXP",
    ()=>REGEXP,
    "SET",
    ()=>SET,
    "VOID",
    ()=>VOID
]);
const VOID = -1;
const PRIMITIVE = 0;
const ARRAY = 1;
const OBJECT = 2;
const DATE = 3;
const REGEXP = 4;
const MAP = 5;
const SET = 6;
const ERROR = 7;
const BIGINT = 8; // export const SYMBOL = 9;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/deserialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserialize",
    ()=>deserialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)");
;
const env = typeof self === 'object' ? self : globalThis;
const deserializer = ($, _)=>{
    const as = (out, index)=>{
        $.set(index, out);
        return out;
    };
    const unpair = (index)=>{
        if ($.has(index)) return $.get(index);
        const [type, value] = _[index];
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"]:
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOID"]:
                return as(value, index);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"]:
                {
                    const arr = as([], index);
                    for (const index of value)arr.push(unpair(index));
                    return arr;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"]:
                {
                    const object = as({}, index);
                    for (const [key, index] of value)object[unpair(key)] = unpair(index);
                    return object;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"]:
                return as(new Date(value), index);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"]:
                {
                    const { source, flags } = value;
                    return as(new RegExp(source, flags), index);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"]:
                {
                    const map = as(new Map, index);
                    for (const [key, index] of value)map.set(unpair(key), unpair(index));
                    return map;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"]:
                {
                    const set = as(new Set, index);
                    for (const index of value)set.add(unpair(index));
                    return set;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR"]:
                {
                    const { name, message } = value;
                    return as(new env[name](message), index);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIGINT"]:
                return as(BigInt(value), index);
            case 'BigInt':
                return as(Object(BigInt(value)), index);
            case 'ArrayBuffer':
                return as(new Uint8Array(value).buffer, value);
            case 'DataView':
                {
                    const { buffer } = new Uint8Array(value);
                    return as(new DataView(buffer), value);
                }
        }
        return as(new env[type](value), index);
    };
    return unpair;
};
const deserialize = (serialized)=>deserializer(new Map, serialized)(0);
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/serialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)");
;
const EMPTY = '';
const { toString } = {};
const { keys } = Object;
const typeOf = (value)=>{
    const type = typeof value;
    if (type !== 'object' || !value) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"],
        type
    ];
    const asString = toString.call(value).slice(8, -1);
    switch(asString){
        case 'Array':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
                EMPTY
            ];
        case 'Object':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"],
                EMPTY
            ];
        case 'Date':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"],
                EMPTY
            ];
        case 'RegExp':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"],
                EMPTY
            ];
        case 'Map':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"],
                EMPTY
            ];
        case 'Set':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"],
                EMPTY
            ];
        case 'DataView':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
                asString
            ];
    }
    if (asString.includes('Array')) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
        asString
    ];
    if (asString.includes('Error')) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR"],
        asString
    ];
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"],
        asString
    ];
};
const shouldSkip = ([TYPE, type])=>TYPE === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"] && (type === 'function' || type === 'symbol');
const serializer = (strict, json, $, _)=>{
    const as = (out, value)=>{
        const index = _.push(out) - 1;
        $.set(value, index);
        return index;
    };
    const pair = (value)=>{
        if ($.has(value)) return $.get(value);
        let [TYPE, type] = typeOf(value);
        switch(TYPE){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"]:
                {
                    let entry = value;
                    switch(type){
                        case 'bigint':
                            TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIGINT"];
                            entry = value.toString();
                            break;
                        case 'function':
                        case 'symbol':
                            if (strict) throw new TypeError('unable to serialize ' + type);
                            entry = null;
                            break;
                        case 'undefined':
                            return as([
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOID"]
                            ], value);
                    }
                    return as([
                        TYPE,
                        entry
                    ], value);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"]:
                {
                    if (type) {
                        let spread = value;
                        if (type === 'DataView') {
                            spread = new Uint8Array(value.buffer);
                        } else if (type === 'ArrayBuffer') {
                            spread = new Uint8Array(value);
                        }
                        return as([
                            type,
                            [
                                ...spread
                            ]
                        ], value);
                    }
                    const arr = [];
                    const index = as([
                        TYPE,
                        arr
                    ], value);
                    for (const entry of value)arr.push(pair(entry));
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"]:
                {
                    if (type) {
                        switch(type){
                            case 'BigInt':
                                return as([
                                    type,
                                    value.toString()
                                ], value);
                            case 'Boolean':
                            case 'Number':
                            case 'String':
                                return as([
                                    type,
                                    value.valueOf()
                                ], value);
                        }
                    }
                    if (json && 'toJSON' in value) return pair(value.toJSON());
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const key of keys(value)){
                        if (strict || !shouldSkip(typeOf(value[key]))) entries.push([
                            pair(key),
                            pair(value[key])
                        ]);
                    }
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"]:
                return as([
                    TYPE,
                    value.toISOString()
                ], value);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"]:
                {
                    const { source, flags } = value;
                    return as([
                        TYPE,
                        {
                            source,
                            flags
                        }
                    ], value);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"]:
                {
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const [key, entry] of value){
                        if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry)))) entries.push([
                            pair(key),
                            pair(entry)
                        ]);
                    }
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"]:
                {
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const entry of value){
                        if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
                    }
                    return index;
                }
        }
        const { message } = value;
        return as([
            TYPE,
            {
                name: type,
                message
            }
        ], value);
    };
    return pair;
};
const serialize = (value, { json, lossy } = {})=>{
    const _ = [];
    return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/deserialize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/serialize.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = typeof structuredClone === "function" ? /* c8 ignore start */ (any, options)=>options && ('json' in options || 'lossy' in options) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(any, options)) : structuredClone(any) : (any, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(any, options));
;
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-encode@2.0.1/node_modules/micromark-util-encode/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode
]);
const characterReferences = {
    '"': 'quot',
    '&': 'amp',
    '<': 'lt',
    '>': 'gt'
};
function encode(value) {
    return value.replace(/["&<>]/g, replace);
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} value
   *   Value to replace.
   * @returns {string}
   *   Encoded value.
   */ function replace(value) {
        return '&' + characterReferences[value] + ';';
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeUri",
    ()=>normalizeUri,
    "sanitizeUri",
    ()=>sanitizeUri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$encode$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-encode@2.0.1/node_modules/micromark-util-encode/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-symbol@2.0.1/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
;
;
function sanitizeUri(url, protocol) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$encode$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(normalizeUri(url || ''));
    if (!protocol) {
        return value;
    }
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
function normalizeUri(value) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = '';
        // A correct percent encoded value.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].percentSign && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 1)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$character$40$2$2e$1$2e$1$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 2))) {
            skip = 2;
        } else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
                replace = String.fromCharCode(code);
            }
        } else if (code > 55_295 && code < 57_344) {
            const next = value.charCodeAt(index + 1);
            // A correct surrogate pair.
            if (code < 56_320 && next > 56_319 && next < 57_344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else {
                replace = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$symbol$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
            }
        } else {
            replace = String.fromCharCode(code);
        }
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = '';
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join('') + value.slice(start);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('./state.js').State} State
 */ /**
 * @callback FootnoteBackContentTemplate
 *   Generate content for the backreference dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {Array<ElementContent> | ElementContent | string}
 *   Content for the backreference when linking back from definitions to their
 *   reference.
 *
 * @callback FootnoteBackLabelTemplate
 *   Generate a back label dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Back label to use when linking back from definitions to their reference.
 */ __turbopack_context__.s([
    "defaultFootnoteBackContent",
    ()=>defaultFootnoteBackContent,
    "defaultFootnoteBackLabel",
    ()=>defaultFootnoteBackLabel,
    "footer",
    ()=>footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
;
function defaultFootnoteBackContent(_, rereferenceIndex) {
    /** @type {Array<ElementContent>} */ const result = [
        {
            type: 'text',
            value: '↩'
        }
    ];
    if (rereferenceIndex > 1) {
        result.push({
            type: 'element',
            tagName: 'sup',
            properties: {},
            children: [
                {
                    type: 'text',
                    value: String(rereferenceIndex)
                }
            ]
        });
    }
    return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
    return 'Back to reference ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '');
}
function footer(state) {
    const clobberPrefix = typeof state.options.clobberPrefix === 'string' ? state.options.clobberPrefix : 'user-content-';
    const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
    const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
    const footnoteLabel = state.options.footnoteLabel || 'Footnotes';
    const footnoteLabelTagName = state.options.footnoteLabelTagName || 'h2';
    const footnoteLabelProperties = state.options.footnoteLabelProperties || {
        className: [
            'sr-only'
        ]
    };
    /** @type {Array<ElementContent>} */ const listItems = [];
    let referenceIndex = -1;
    while(++referenceIndex < state.footnoteOrder.length){
        const definition = state.footnoteById.get(state.footnoteOrder[referenceIndex]);
        if (!definition) {
            continue;
        }
        const content = state.all(definition);
        const id = String(definition.identifier).toUpperCase();
        const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(id.toLowerCase());
        let rereferenceIndex = 0;
        /** @type {Array<ElementContent>} */ const backReferences = [];
        const counts = state.footnoteCounts.get(id);
        // eslint-disable-next-line no-unmodified-loop-condition
        while(counts !== undefined && ++rereferenceIndex <= counts){
            if (backReferences.length > 0) {
                backReferences.push({
                    type: 'text',
                    value: ' '
                });
            }
            let children = typeof footnoteBackContent === 'string' ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
            if (typeof children === 'string') {
                children = {
                    type: 'text',
                    value: children
                };
            }
            backReferences.push({
                type: 'element',
                tagName: 'a',
                properties: {
                    href: '#' + clobberPrefix + 'fnref-' + safeId + (rereferenceIndex > 1 ? '-' + rereferenceIndex : ''),
                    dataFootnoteBackref: '',
                    ariaLabel: typeof footnoteBackLabel === 'string' ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
                    className: [
                        'data-footnote-backref'
                    ]
                },
                children: Array.isArray(children) ? children : [
                    children
                ]
            });
        }
        const tail = content[content.length - 1];
        if (tail && tail.type === 'element' && tail.tagName === 'p') {
            const tailTail = tail.children[tail.children.length - 1];
            if (tailTail && tailTail.type === 'text') {
                tailTail.value += ' ';
            } else {
                tail.children.push({
                    type: 'text',
                    value: ' '
                });
            }
            tail.children.push(...backReferences);
        } else {
            content.push(...backReferences);
        }
        /** @type {Element} */ const listItem = {
            type: 'element',
            tagName: 'li',
            properties: {
                id: clobberPrefix + 'fn-' + safeId
            },
            children: state.wrap(content, true)
        };
        state.patch(definition, listItem);
        listItems.push(listItem);
    }
    if (listItems.length === 0) {
        return;
    }
    return {
        type: 'element',
        tagName: 'section',
        properties: {
            dataFootnotes: true,
            className: [
                'footnotes'
            ]
        },
        children: [
            {
                type: 'element',
                tagName: footnoteLabelTagName,
                properties: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(footnoteLabelProperties),
                    id: 'footnote-label'
                },
                children: [
                    {
                        type: 'text',
                        value: footnoteLabel
                    }
                ]
            },
            {
                type: 'text',
                value: '\n'
            },
            {
                type: 'element',
                tagName: 'ol',
                properties: {},
                children: state.wrap(listItems, true)
            },
            {
                type: 'text',
                value: '\n'
            }
        ]
    };
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "blockquote",
    ()=>blockquote
]);
'';
function blockquote(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'blockquote',
        properties: {},
        children: state.wrap(state.all(node), true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "hardBreak",
    ()=>hardBreak
]);
'';
function hardBreak(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'br',
        properties: {},
        children: []
    };
    state.patch(node, result);
    return [
        state.applyData(node, result),
        {
            type: 'text',
            value: '\n'
        }
    ];
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/code.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "code",
    ()=>code
]);
'';
function code(state, node) {
    const value = node.value ? node.value + '\n' : '';
    /** @type {Properties} */ const properties = {};
    if (node.lang) {
        properties.className = [
            'language-' + node.lang
        ];
    }
    // Create `<code>`.
    /** @type {Element} */ let result = {
        type: 'element',
        tagName: 'code',
        properties,
        children: [
            {
                type: 'text',
                value
            }
        ]
    };
    if (node.meta) {
        result.data = {
            meta: node.meta
        };
    }
    state.patch(node, result);
    result = state.applyData(node, result);
    // Create `<pre>`.
    result = {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [
            result
        ]
    };
    state.patch(node, result);
    return result;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/delete.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "strikethrough",
    ()=>strikethrough
]);
'';
function strikethrough(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'del',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "emphasis",
    ()=>emphasis
]);
'';
function emphasis(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'em',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "footnoteReference",
    ()=>footnoteReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function footnoteReference(state, node) {
    const clobberPrefix = typeof state.options.clobberPrefix === 'string' ? state.options.clobberPrefix : 'user-content-';
    const id = String(node.identifier).toUpperCase();
    const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(id.toLowerCase());
    const index = state.footnoteOrder.indexOf(id);
    /** @type {number} */ let counter;
    let reuseCounter = state.footnoteCounts.get(id);
    if (reuseCounter === undefined) {
        reuseCounter = 0;
        state.footnoteOrder.push(id);
        counter = state.footnoteOrder.length;
    } else {
        counter = index + 1;
    }
    reuseCounter += 1;
    state.footnoteCounts.set(id, reuseCounter);
    /** @type {Element} */ const link = {
        type: 'element',
        tagName: 'a',
        properties: {
            href: '#' + clobberPrefix + 'fn-' + safeId,
            id: clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : ''),
            dataFootnoteRef: true,
            ariaDescribedBy: [
                'footnote-label'
            ]
        },
        children: [
            {
                type: 'text',
                value: String(counter)
            }
        ]
    };
    state.patch(node, link);
    /** @type {Element} */ const sup = {
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [
            link
        ]
    };
    state.patch(node, sup);
    return state.applyData(node, sup);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/heading.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "heading",
    ()=>heading
]);
'';
function heading(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'h' + node.depth,
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Html} Html
 * @typedef {import('../state.js').State} State
 * @typedef {import('../../index.js').Raw} Raw
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "html",
    ()=>html
]);
'';
function html(state, node) {
    if (state.options.allowDangerousHtml) {
        /** @type {Raw} */ const result = {
            type: 'raw',
            value: node.value
        };
        state.patch(node, result);
        return state.applyData(node, result);
    }
    return undefined;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').Reference} Reference
 *
 * @typedef {import('./state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "revert",
    ()=>revert
]);
'';
function revert(state, node) {
    const subtype = node.referenceType;
    let suffix = ']';
    if (subtype === 'collapsed') {
        suffix += '[]';
    } else if (subtype === 'full') {
        suffix += '[' + (node.label || node.identifier) + ']';
    }
    if (node.type === 'imageReference') {
        return [
            {
                type: 'text',
                value: '![' + node.alt + suffix
            }
        ];
    }
    const contents = state.all(node);
    const head = contents[0];
    if (head && head.type === 'text') {
        head.value = '[' + head.value;
    } else {
        contents.unshift({
            type: 'text',
            value: '['
        });
    }
    const tail = contents[contents.length - 1];
    if (tail && tail.type === 'text') {
        tail.value += suffix;
    } else {
        contents.push({
            type: 'text',
            value: suffix
        });
    }
    return contents;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "imageReference",
    ()=>imageReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)");
;
;
function imageReference(state, node) {
    const id = String(node.identifier).toUpperCase();
    const definition = state.definitionById.get(id);
    if (!definition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revert"])(state, node);
    }
    /** @type {Properties} */ const properties = {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(definition.url || ''),
        alt: node.alt
    };
    if (definition.title !== null && definition.title !== undefined) {
        properties.title = definition.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'img',
        properties,
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Image} Image
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "image",
    ()=>image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function image(state, node) {
    /** @type {Properties} */ const properties = {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(node.url)
    };
    if (node.alt !== null && node.alt !== undefined) {
        properties.alt = node.alt;
    }
    if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'img',
        properties,
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "inlineCode",
    ()=>inlineCode
]);
'';
function inlineCode(state, node) {
    /** @type {Text} */ const text = {
        type: 'text',
        value: node.value.replace(/\r?\n|\r/g, ' ')
    };
    state.patch(node, text);
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: [
            text
        ]
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "linkReference",
    ()=>linkReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)");
;
;
function linkReference(state, node) {
    const id = String(node.identifier).toUpperCase();
    const definition = state.definitionById.get(id);
    if (!definition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revert"])(state, node);
    }
    /** @type {Properties} */ const properties = {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(definition.url || '')
    };
    if (definition.title !== null && definition.title !== undefined) {
        properties.title = definition.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "link",
    ()=>link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function link(state, node) {
    /** @type {Properties} */ const properties = {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$micromark$2d$util$2d$sanitize$2d$uri$40$2$2e$0$2e$1$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(node.url)
    };
    if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list-item.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "listItem",
    ()=>listItem
]);
'';
function listItem(state, node, parent) {
    const results = state.all(node);
    const loose = parent ? listLoose(parent) : listItemLoose(node);
    /** @type {Properties} */ const properties = {};
    /** @type {Array<ElementContent>} */ const children = [];
    if (typeof node.checked === 'boolean') {
        const head = results[0];
        /** @type {Element} */ let paragraph;
        if (head && head.type === 'element' && head.tagName === 'p') {
            paragraph = head;
        } else {
            paragraph = {
                type: 'element',
                tagName: 'p',
                properties: {},
                children: []
            };
            results.unshift(paragraph);
        }
        if (paragraph.children.length > 0) {
            paragraph.children.unshift({
                type: 'text',
                value: ' '
            });
        }
        paragraph.children.unshift({
            type: 'element',
            tagName: 'input',
            properties: {
                type: 'checkbox',
                checked: node.checked,
                disabled: true
            },
            children: []
        });
        // According to github-markdown-css, this class hides bullet.
        // See: <https://github.com/sindresorhus/github-markdown-css>.
        properties.className = [
            'task-list-item'
        ];
    }
    let index = -1;
    while(++index < results.length){
        const child = results[index];
        // Add eols before nodes, except if this is a loose, first paragraph.
        if (loose || index !== 0 || child.type !== 'element' || child.tagName !== 'p') {
            children.push({
                type: 'text',
                value: '\n'
            });
        }
        if (child.type === 'element' && child.tagName === 'p' && !loose) {
            children.push(...child.children);
        } else {
            children.push(child);
        }
    }
    const tail = results[results.length - 1];
    // Add a final eol.
    if (tail && (loose || tail.type !== 'element' || tail.tagName !== 'p')) {
        children.push({
            type: 'text',
            value: '\n'
        });
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'li',
        properties,
        children
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
/**
 * @param {Parents} node
 * @return {Boolean}
 */ function listLoose(node) {
    let loose = false;
    if (node.type === 'list') {
        loose = node.spread || false;
        const children = node.children;
        let index = -1;
        while(!loose && ++index < children.length){
            loose = listItemLoose(children[index]);
        }
    }
    return loose;
}
/**
 * @param {ListItem} node
 * @return {Boolean}
 */ function listItemLoose(node) {
    const spread = node.spread;
    return spread === null || spread === undefined ? node.children.length > 1 : spread;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').List} List
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "list",
    ()=>list
]);
'';
function list(state, node) {
    /** @type {Properties} */ const properties = {};
    const results = state.all(node);
    let index = -1;
    if (typeof node.start === 'number' && node.start !== 1) {
        properties.start = node.start;
    }
    // Like GitHub, add a class for custom styling.
    while(++index < results.length){
        const child = results[index];
        if (child.type === 'element' && child.tagName === 'li' && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes('task-list-item')) {
            properties.className = [
                'contains-task-list'
            ];
            break;
        }
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: node.ordered ? 'ol' : 'ul',
        properties,
        children: state.wrap(results, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "paragraph",
    ()=>paragraph
]);
'';
function paragraph(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'p',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/root.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Parents} HastParents
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "root",
    ()=>root
]);
'';
function root(state, node) {
    /** @type {HastRoot} */ const result = {
        type: 'root',
        children: state.wrap(state.all(node))
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/strong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "strong",
    ()=>strong
]);
'';
function strong(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'strong',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Table} Table
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "table",
    ()=>table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
;
function table(state, node) {
    const rows = state.all(node);
    const firstRow = rows.shift();
    /** @type {Array<Element>} */ const tableContent = [];
    if (firstRow) {
        /** @type {Element} */ const head = {
            type: 'element',
            tagName: 'thead',
            properties: {},
            children: state.wrap([
                firstRow
            ], true)
        };
        state.patch(node.children[0], head);
        tableContent.push(head);
    }
    if (rows.length > 0) {
        /** @type {Element} */ const body = {
            type: 'element',
            tagName: 'tbody',
            properties: {},
            children: state.wrap(rows, true)
        };
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node.children[1]);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointEnd"])(node.children[node.children.length - 1]);
        if (start && end) body.position = {
            start,
            end
        };
        tableContent.push(body);
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'table',
        properties: {},
        children: state.wrap(tableContent, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-row.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('mdast').TableRow} TableRow
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "tableRow",
    ()=>tableRow
]);
'';
function tableRow(state, node, parent) {
    const siblings = parent ? parent.children : undefined;
    // Generate a body row when without parent.
    const rowIndex = siblings ? siblings.indexOf(node) : 1;
    const tagName = rowIndex === 0 ? 'th' : 'td';
    // To do: option to use `style`?
    const align = parent && parent.type === 'table' ? parent.align : undefined;
    const length = align ? align.length : node.children.length;
    let cellIndex = -1;
    /** @type {Array<ElementContent>} */ const cells = [];
    while(++cellIndex < length){
        // Note: can also be undefined.
        const cell = node.children[cellIndex];
        /** @type {Properties} */ const properties = {};
        const alignValue = align ? align[cellIndex] : undefined;
        if (alignValue) {
            properties.align = alignValue;
        }
        /** @type {Element} */ let result = {
            type: 'element',
            tagName,
            properties,
            children: []
        };
        if (cell) {
            result.children = state.all(cell);
            state.patch(cell, result);
            result = state.applyData(cell, result);
        }
        cells.push(result);
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'tr',
        properties: {},
        children: state.wrap(cells, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "tableCell",
    ()=>tableCell
]);
'';
function tableCell(state, node) {
    // Note: this function is normally not called: see `table-row` for how rows
    // and their cells are compiled.
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'td',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Text} HastText
 * @typedef {import('mdast').Text} MdastText
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$trim$2d$lines$40$3$2e$0$2e$1$2f$node_modules$2f$trim$2d$lines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js [app-ssr] (ecmascript)");
;
function text(state, node) {
    /** @type {HastText} */ const result = {
        type: 'text',
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$trim$2d$lines$40$3$2e$0$2e$1$2f$node_modules$2f$trim$2d$lines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimLines"])(String(node.value))
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "thematicBreak",
    ()=>thematicBreak
]);
'';
function thematicBreak(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'hr',
        properties: {},
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handlers",
    ()=>handlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$blockquote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/delete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$emphasis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$footnote$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$heading$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/heading.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$inline$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list-item.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$root$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/root.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/strong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const handlers = {
    blockquote: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$blockquote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockquote"],
    break: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hardBreak"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code"],
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strikethrough"],
    emphasis: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$emphasis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emphasis"],
    footnoteReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$footnote$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footnoteReference"],
    heading: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$heading$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heading"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"],
    imageReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageReference"],
    image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["image"],
    inlineCode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$inline$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineCode"],
    linkReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linkReference"],
    link: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["link"],
    listItem: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listItem"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paragraph"],
    // @ts-expect-error: root is different, but hard to type.
    root: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$root$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["root"],
    strong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strong"],
    table: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["table"],
    tableCell: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableCell"],
    tableRow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableRow"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"],
    thematicBreak: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thematicBreak"],
    toml: ignore,
    yaml: ignore,
    definition: ignore,
    footnoteDefinition: ignore
};
// Return nothing for nodes that are ignored.
function ignore() {
    return undefined;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').ElementContent} HastElementContent
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('hast').Properties} HastProperties
 * @typedef {import('hast').RootContent} HastRootContent
 * @typedef {import('hast').Text} HastText
 *
 * @typedef {import('mdast').Definition} MdastDefinition
 * @typedef {import('mdast').FootnoteDefinition} MdastFootnoteDefinition
 * @typedef {import('mdast').Nodes} MdastNodes
 * @typedef {import('mdast').Parents} MdastParents
 *
 * @typedef {import('vfile').VFile} VFile
 *
 * @typedef {import('./footer.js').FootnoteBackContentTemplate} FootnoteBackContentTemplate
 * @typedef {import('./footer.js').FootnoteBackLabelTemplate} FootnoteBackLabelTemplate
 */ /**
 * @callback Handler
 *   Handle a node.
 * @param {State} state
 *   Info passed around.
 * @param {any} node
 *   mdast node to handle.
 * @param {MdastParents | undefined} parent
 *   Parent of `node`.
 * @returns {Array<HastElementContent> | HastElementContent | undefined}
 *   hast node.
 *
 * @typedef {Partial<Record<MdastNodes['type'], Handler>>} Handlers
 *   Handle nodes.
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Whether to persist raw HTML in markdown in the hast tree (default:
 *   `false`).
 * @property {string | null | undefined} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` property on footnotes to prevent them from
 *   *clobbering* (default: `'user-content-'`).
 *
 *   Pass `''` for trusted markdown and when you are careful with
 *   polyfilling.
 *   You could pass a different prefix.
 *
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id="x"></p>
 *   <script>alert(x) // `x` now refers to the `p#x` DOM element</script>
 *   ```
 *
 *   The above example shows that elements are made available by browsers, by
 *   their ID, on the `window` object.
 *   This is a security risk because you might be expecting some other variable
 *   at that place.
 *   It can also break polyfills.
 *   Using a prefix solves these problems.
 * @property {VFile | null | undefined} [file]
 *   Corresponding virtual file representing the input document (optional).
 * @property {FootnoteBackContentTemplate | string | null | undefined} [footnoteBackContent]
 *   Content of the backreference back to references (default: `defaultFootnoteBackContent`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackContent(_, rereferenceIndex) {
 *     const result = [{type: 'text', value: '↩'}]
 *
 *     if (rereferenceIndex > 1) {
 *       result.push({
 *         type: 'element',
 *         tagName: 'sup',
 *         properties: {},
 *         children: [{type: 'text', value: String(rereferenceIndex)}]
 *       })
 *     }
 *
 *     return result
 *   }
 *   ```
 *
 *   This content is used in the `a` element of each backreference (the `↩`
 *   links).
 * @property {FootnoteBackLabelTemplate | string | null | undefined} [footnoteBackLabel]
 *   Label to describe the backreference back to references (default:
 *   `defaultFootnoteBackLabel`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
 *    return (
 *      'Back to reference ' +
 *      (referenceIndex + 1) +
 *      (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
 *    )
 *   }
 *   ```
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is used in the `ariaLabel` property on each backreference
 *   (the `↩` links).
 *   It affects users of assistive technology.
 * @property {string | null | undefined} [footnoteLabel='Footnotes']
 *   Textual label to use for the footnotes section (default: `'Footnotes'`).
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {HastProperties | null | undefined} [footnoteLabelProperties={className: ['sr-only']}]
 *   Properties to use on the footnote label (default: `{className:
 *   ['sr-only']}`).
 *
 *   Change it to show the label and add other properties.
 *
 *   This label is typically hidden visually (assuming an `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass an empty string.
 *   You can also add different properties.
 *
 *   > **Note**: `id: 'footnote-label'` is always added, because footnote
 *   > calls use it with `aria-describedby` to provide an accessible label.
 * @property {string | null | undefined} [footnoteLabelTagName='h2']
 *   HTML tag name to use for the footnote label element (default: `'h2'`).
 *
 *   Change it to match your document structure.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {Handlers | null | undefined} [handlers]
 *   Extra handlers for nodes (optional).
 * @property {Array<MdastNodes['type']> | null | undefined} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast (note that
 *   the node itself is passed, but eventual children are transformed)
 *   (optional).
 * @property {Handler | null | undefined} [unknownHandler]
 *   Handler for all unknown nodes (optional).
 *
 * @typedef State
 *   Info passed around.
 * @property {(node: MdastNodes) => Array<HastElementContent>} all
 *   Transform the children of an mdast parent to hast.
 * @property {<Type extends HastNodes>(from: MdastNodes, to: Type) => HastElement | Type} applyData
 *   Honor the `data` of `from`, and generate an element instead of `node`.
 * @property {Map<string, MdastDefinition>} definitionById
 *   Definitions by their identifier.
 * @property {Map<string, MdastFootnoteDefinition>} footnoteById
 *   Footnote definitions by their identifier.
 * @property {Map<string, number>} footnoteCounts
 *   Counts for how often the same footnote was called.
 * @property {Array<string>} footnoteOrder
 *   Identifiers of order when footnote calls first appear in tree order.
 * @property {Handlers} handlers
 *   Applied handlers.
 * @property {(node: MdastNodes, parent: MdastParents | undefined) => Array<HastElementContent> | HastElementContent | undefined} one
 *   Transform an mdast node to hast.
 * @property {Options} options
 *   Configuration.
 * @property {(from: MdastNodes, node: HastNodes) => undefined} patch
 *   Copy a node’s positional info.
 * @property {<Type extends HastRootContent>(nodes: Array<Type>, loose?: boolean | undefined) => Array<HastText | Type>} wrap
 *   Wrap `nodes` with line endings between each node, adds initial/final line endings when `loose`.
 */ __turbopack_context__.s([
    "createState",
    ()=>createState,
    "wrap",
    ()=>wrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/index.js [app-ssr] (ecmascript)");
;
;
;
;
const own = {}.hasOwnProperty;
/** @type {Options} */ const emptyOptions = {};
function createState(tree, options) {
    const settings = options || emptyOptions;
    /** @type {Map<string, MdastDefinition>} */ const definitionById = new Map();
    /** @type {Map<string, MdastFootnoteDefinition>} */ const footnoteById = new Map();
    /** @type {Map<string, number>} */ const footnoteCounts = new Map();
    /** @type {Handlers} */ // @ts-expect-error: the root handler returns a root.
    // Hard to type.
    const handlers = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlers"],
        ...settings.handlers
    };
    /** @type {State} */ const state = {
        all,
        applyData,
        definitionById,
        footnoteById,
        footnoteCounts,
        footnoteOrder: [],
        handlers,
        one,
        options: settings,
        patch,
        wrap
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, function(node) {
        if (node.type === 'definition' || node.type === 'footnoteDefinition') {
            const map = node.type === 'definition' ? definitionById : footnoteById;
            const id = String(node.identifier).toUpperCase();
            // Mimick CM behavior of link definitions.
            // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/9032189/lib/index.js#L20-L21>.
            if (!map.has(id)) {
                // @ts-expect-error: node type matches map.
                map.set(id, node);
            }
        }
    });
    return state;
    //TURBOPACK unreachable
    ;
    /**
   * Transform an mdast node into a hast node.
   *
   * @param {MdastNodes} node
   *   mdast node.
   * @param {MdastParents | undefined} [parent]
   *   Parent of `node`.
   * @returns {Array<HastElementContent> | HastElementContent | undefined}
   *   Resulting hast node.
   */ function one(node, parent) {
        const type = node.type;
        const handle = state.handlers[type];
        if (own.call(state.handlers, type) && handle) {
            return handle(state, node, parent);
        }
        if (state.options.passThrough && state.options.passThrough.includes(type)) {
            if ('children' in node) {
                const { children, ...shallow } = node;
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(shallow);
                // @ts-expect-error: TS doesn’t understand…
                result.children = state.all(node);
                // @ts-expect-error: TS doesn’t understand…
                return result;
            }
            // @ts-expect-error: it’s custom.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(node);
        }
        const unknown = state.options.unknownHandler || defaultUnknownHandler;
        return unknown(state, node, parent);
    }
    /**
   * Transform the children of an mdast node into hast nodes.
   *
   * @param {MdastNodes} parent
   *   mdast node to compile
   * @returns {Array<HastElementContent>}
   *   Resulting hast nodes.
   */ function all(parent) {
        /** @type {Array<HastElementContent>} */ const values = [];
        if ('children' in parent) {
            const nodes = parent.children;
            let index = -1;
            while(++index < nodes.length){
                const result = state.one(nodes[index], parent);
                // To do: see if we van clean this? Can we merge texts?
                if (result) {
                    if (index && nodes[index - 1].type === 'break') {
                        if (!Array.isArray(result) && result.type === 'text') {
                            result.value = trimMarkdownSpaceStart(result.value);
                        }
                        if (!Array.isArray(result) && result.type === 'element') {
                            const head = result.children[0];
                            if (head && head.type === 'text') {
                                head.value = trimMarkdownSpaceStart(head.value);
                            }
                        }
                    }
                    if (Array.isArray(result)) {
                        values.push(...result);
                    } else {
                        values.push(result);
                    }
                }
            }
        }
        return values;
    }
}
/**
 * Copy a node’s positional info.
 *
 * @param {MdastNodes} from
 *   mdast node to copy from.
 * @param {HastNodes} to
 *   hast node to copy into.
 * @returns {undefined}
 *   Nothing.
 */ function patch(from, to) {
    if (from.position) to.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$position$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["position"])(from);
}
/**
 * Honor the `data` of `from` and maybe generate an element instead of `to`.
 *
 * @template {HastNodes} Type
 *   Node type.
 * @param {MdastNodes} from
 *   mdast node to use data from.
 * @param {Type} to
 *   hast node to change.
 * @returns {HastElement | Type}
 *   Nothing.
 */ function applyData(from, to) {
    /** @type {HastElement | Type} */ let result = to;
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (from && from.data) {
        const hName = from.data.hName;
        const hChildren = from.data.hChildren;
        const hProperties = from.data.hProperties;
        if (typeof hName === 'string') {
            // Transforming the node resulted in an element with a different name
            // than wanted:
            if (result.type === 'element') {
                result.tagName = hName;
            } else {
                /** @type {Array<HastElementContent>} */ // @ts-expect-error: assume no doctypes in `root`.
                const children = 'children' in result ? result.children : [
                    result
                ];
                result = {
                    type: 'element',
                    tagName: hName,
                    properties: {},
                    children
                };
            }
        }
        if (result.type === 'element' && hProperties) {
            Object.assign(result.properties, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f40$ungap$2b$structured$2d$clone$40$1$2e$3$2e$0$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(hProperties));
        }
        if ('children' in result && result.children && hChildren !== null && hChildren !== undefined) {
            result.children = hChildren;
        }
    }
    return result;
}
/**
 * Transform an unknown node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastNodes} node
 *   Unknown mdast node.
 * @returns {HastElement | HastText}
 *   Resulting hast node.
 */ function defaultUnknownHandler(state, node) {
    const data = node.data || {};
    /** @type {HastElement | HastText} */ const result = 'value' in node && !(own.call(data, 'hProperties') || own.call(data, 'hChildren')) ? {
        type: 'text',
        value: node.value
    } : {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
function wrap(nodes, loose) {
    /** @type {Array<HastText | Type>} */ const result = [];
    let index = -1;
    if (loose) {
        result.push({
            type: 'text',
            value: '\n'
        });
    }
    while(++index < nodes.length){
        if (index) result.push({
            type: 'text',
            value: '\n'
        });
        result.push(nodes[index]);
    }
    if (loose && nodes.length > 0) {
        result.push({
            type: 'text',
            value: '\n'
        });
    }
    return result;
}
/**
 * Trim spaces and tabs at the start of `value`.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Result.
 */ function trimMarkdownSpaceStart(value) {
    let index = 0;
    let code = value.charCodeAt(index);
    while(code === 9 || code === 32){
        index++;
        code = value.charCodeAt(index);
    }
    return value.slice(index);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('mdast').Nodes} MdastNodes
 * @typedef {import('./state.js').Options} Options
 */ __turbopack_context__.s([
    "toHast",
    ()=>toHast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/state.js [app-ssr] (ecmascript)");
;
;
;
function toHast(tree, options) {
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createState"])(tree, options);
    const node = state.one(tree, undefined);
    const foot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footer"])(state);
    /** @type {HastNodes} */ const result = Array.isArray(node) ? {
        type: 'root',
        children: node
    } : node || {
        type: 'root',
        children: []
    };
    if (foot) {
        // If there’s a footer, there were definitions, meaning block
        // content.
        // So `result` is a parent node.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in result);
        result.children.push({
            type: 'text',
            value: '\n'
        }, foot);
    }
    return result;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */ /**
 * @template Fn
 * @template Fallback
 * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate
 */ /**
 * @callback Check
 *   Check that an arbitrary value is a node.
 * @param {unknown} this
 *   The given context.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 *
 * @typedef {Record<string, unknown> | Node} Props
 *   Object to check for equivalence.
 *
 *   Note: `Node` is included as it is common but is not indexable.
 *
 * @typedef {Array<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test
 *   Check for an arbitrary node.
 *
 * @callback TestFunction
 *   Check if a node passes a test.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | undefined | void}
 *   Whether this node passes the test.
 *
 *   Note: `void` is included until TS sees no return as `undefined`.
 */ /**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param {unknown} node
 *   Thing to check, typically `Node`.
 * @param {Test} test
 *   A check for a specific node.
 * @param {number | null | undefined} index
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} parent
 *   The node’s parent.
 * @param {unknown} context
 *   Context object (`this`) to pass to `test` functions.
 * @returns {boolean}
 *   Whether `node` is a node and passes a test.
 */ __turbopack_context__.s([
    "convert",
    ()=>convert,
    "is",
    ()=>is
]);
const is = /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error('Expected positive finite index');
    }
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
        throw new Error('Expected parent node');
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error('Expected both parent and index');
    }
    return looksLikeANode(node) ? check.call(context, node, index, parent) : false;
};
const convert = /**
     * @param {Test} [test]
     * @returns {Check}
     */ function(test) {
    if (test === null || test === undefined) {
        return ok;
    }
    if (typeof test === 'function') {
        return castFactory(test);
    }
    if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === 'string') {
        return typeFactory(test);
    }
    throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */ function anyFactory(tests) {
    /** @type {Array<Check>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convert(tests[index]);
    }
    return castFactory(any);
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {TestFunction}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].apply(this, parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */ function propsFactory(check) {
    const checkAsRecord = check;
    return castFactory(all);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        const nodeAsRecord = node;
        /** @type {string} */ let key;
        for(key in check){
            if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
        }
        return true;
    }
}
/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */ function typeFactory(check) {
    return castFactory(type);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */ function castFactory(testFunction) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {Check}
   */ function check(value, index, parent) {
        return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === 'number' ? index : undefined, parent || undefined));
    }
}
function ok() {
    return true;
}
/**
 * @param {unknown} value
 * @returns {value is Node}
 */ function looksLikeANode(value) {
    return value !== null && typeof value === 'object' && 'type' in value;
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {string} d
 * @returns {string}
 */ __turbopack_context__.s([
    "color",
    ()=>color
]);
function color(d) {
    return '\u001B[33m' + d + '\u001B[39m';
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ /**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {'skip' | boolean} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<VisitedParents>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [VisitedParents=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Tree type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ __turbopack_context__.s([
    "CONTINUE",
    ()=>CONTINUE,
    "EXIT",
    ()=>EXIT,
    "SKIP",
    ()=>SKIP,
    "visitParents",
    ()=>visitParents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$is$40$6$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$1$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js [app-ssr] (ecmascript)");
;
;
/** @type {Readonly<ActionTuple>} */ const empty = [];
const CONTINUE = true;
const EXIT = false;
const SKIP = 'skip';
function visitParents(tree, test, visitor, reverse) {
    /** @type {Test} */ let check;
    if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
    } else {
        // @ts-expect-error visitor given, so `test` isn’t a visitor.
        check = test;
    }
    const is = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$is$40$6$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert"])(check);
    const step = reverse ? -1 : 1;
    factory(tree, undefined, [])();
    /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */ function factory(node, index, parents) {
        const value = node && typeof node === 'object' ? node : {};
        if (typeof value.type === 'string') {
            const name = // `hast`
            typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
            Object.defineProperty(visit, 'name', {
                value: 'node (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$1$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"])(node.type + (name ? '<' + name + '>' : '')) + ')'
            });
        }
        return visit;
        //TURBOPACK unreachable
        ;
        function visit() {
            /** @type {Readonly<ActionTuple>} */ let result = empty;
            /** @type {Readonly<ActionTuple>} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<UnistParent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
                // @ts-expect-error: `visitor` is now a visitor.
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            if ('children' in node && node.children) {
                const nodeAsParent = node;
                if (nodeAsParent.children && result[0] !== SKIP) {
                    offset = (reverse ? nodeAsParent.children.length : -1) + step;
                    grandparents = parents.concat(nodeAsParent);
                    while(offset > -1 && offset < nodeAsParent.children.length){
                        const child = nodeAsParent.children[offset];
                        subresult = factory(child, offset, grandparents)();
                        if (subresult[0] === EXIT) {
                            return subresult;
                        }
                        offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
                    }
                }
            }
            return result;
        }
    }
}
/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'number') {
        return [
            CONTINUE,
            value
        ];
    }
    return value === null || value === undefined ? empty : [
        value
    ];
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ // To do: use types from `unist-util-visit-parents` when it’s released.
/**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends UnistNode ? number | undefined : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [Ancestor=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch
 *   Build a typed `Visitor` function from a node and all possible parents.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Visited
 *   Node type.
 * @template {UnistParent} Ancestor
 *   Parent type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     Matches<Descendant, Check>,
 *     Extract<Descendant, UnistParent>
 *   >
 * )} BuildVisitorFromDescendants
 *   Build a typed `Visitor` function from a list of descendants and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Node type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ __turbopack_context__.s([
    "visit",
    ()=>visit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$1$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js [app-ssr] (ecmascript)");
;
;
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
    /** @type {boolean | null | undefined} */ let reverse;
    /** @type {Test} */ let test;
    /** @type {Visitor} */ let visitor;
    if (typeof testOrVisitor === 'function' && typeof visitorOrReverse !== 'function') {
        test = undefined;
        visitor = testOrVisitor;
        reverse = visitorOrReverse;
    } else {
        // @ts-expect-error: assume the overload with test was given.
        test = testOrVisitor;
        // @ts-expect-error: assume the overload with test was given.
        visitor = visitorOrReverse;
        reverse = maybeReverse;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$2d$parents$40$6$2e$0$2e$1$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visitParents"])(tree, test, overload, reverse);
    /**
   * @param {UnistNode} node
   * @param {Array<UnistParent>} parents
   */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        const index = parent ? parent.children.indexOf(node) : undefined;
        return visitor(node, index, parent);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trimLines",
    ()=>trimLines
]);
const tab = 9 /* `\t` */ ;
const space = 32 /* ` ` */ ;
function trimLines(value) {
    const source = String(value);
    const search = /\r?\n|\r/g;
    let match = search.exec(source);
    let last = 0;
    /** @type {Array<string>} */ const lines = [];
    while(match){
        lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);
        last = match.index + match[0].length;
        match = search.exec(source);
    }
    lines.push(trimLine(source.slice(last), last > 0, false));
    return lines.join('');
}
/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */ function trimLine(value, start, end) {
    let startIndex = 0;
    let endIndex = value.length;
    if (start) {
        let code = value.codePointAt(startIndex);
        while(code === tab || code === space){
            startIndex++;
            code = value.codePointAt(startIndex);
        }
    }
    if (end) {
        let code = value.codePointAt(endIndex - 1);
        while(code === tab || code === space){
            endIndex--;
            code = value.codePointAt(endIndex - 1);
        }
    }
    return endIndex > startIndex ? value.slice(startIndex, endIndex) : '';
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Root as HastRoot} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {Options as ToHastOptions} from 'mdast-util-to-hast'
 * @import {Processor} from 'unified'
 * @import {VFile} from 'vfile'
 */ /**
 * @typedef {Omit<ToHastOptions, 'file'>} Options
 *
 * @callback TransformBridge
 *   Bridge-mode.
 *
 *   Runs the destination with the new hast tree.
 *   Discards result.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {Promise<undefined>}
 *   Nothing.
 *
 * @callback TransformMutate
 *  Mutate-mode.
 *
 *  Further transformers run on the hast tree.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {HastRoot}
 *   Tree (hast).
 */ __turbopack_context__.s([
    "default",
    ()=>remarkRehype
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/index.js [app-ssr] (ecmascript)");
;
function remarkRehype(destination, options) {
    if (destination && 'run' in destination) {
        /**
     * @type {TransformBridge}
     */ return async function(tree, file) {
            // Cast because root in -> root out.
            const hastTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHast"])(tree, {
                file,
                ...options
            });
            await destination.run(hastTree, file);
        };
    }
    /**
   * @type {TransformMutate}
   */ return function(tree, file) {
        // Cast because root in -> root out.
        // To do: in the future, disallow ` || options` fallback.
        // With `unified-engine`, `destination` can be `undefined` but
        // `options` will be the file set.
        // We should not pass that as `options`.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$mdast$2d$util$2d$to$2d$hast$40$13$2e$2$2e$0$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHast"])(tree, {
            file,
            ...destination || options
        });
    };
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */ __turbopack_context__.s([
    "bail",
    ()=>bail
]);
function bail(error) {
    if (error) {
        throw error;
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    }
    return toStr.call(arr) === '[object Array]';
};
var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== '[object Object]') {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj){}
    return typeof key === 'undefined' || hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
    if (defineProperty && options.name === '__proto__') {
        defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
        });
    } else {
        target[options.name] = options.newValue;
    }
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!hasOwn.call(obj, name)) {
            return void 0;
        } else if (gOPD) {
            // In early versions of node, obj['__proto__'] is buggy when obj has
            // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
            return gOPD(obj, name).value;
        }
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for(name in options){
                src = getProperty(target, name);
                copy = getProperty(options, name);
                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        setProperty(target, {
                            name: name,
                            newValue: extend(deep, clone, copy)
                        });
                    // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                        setProperty(target, {
                            name: name,
                            newValue: copy
                        });
                    }
                }
            }
        }
    }
    // Return the modified object
    return target;
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPlainObject
]);
function isPlainObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/trough@2.2.0/node_modules/trough/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// To do: remove `void`s
// To do: remove `null` from output of our APIs, allow it as user APIs.
/**
 * @typedef {(error?: Error | null | undefined, ...output: Array<any>) => void} Callback
 *   Callback.
 *
 * @typedef {(...input: Array<any>) => any} Middleware
 *   Ware.
 *
 * @typedef Pipeline
 *   Pipeline.
 * @property {Run} run
 *   Run the pipeline.
 * @property {Use} use
 *   Add middleware.
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 *
 *   Calls `done` on completion with either an error or the output of the
 *   last middleware.
 *
 *   > 👉 **Note**: as the length of input defines whether async functions get a
 *   > `next` function,
 *   > it’s recommended to keep `input` at one value normally.

 *
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add middleware.
 */ /**
 * Create new middleware.
 *
 * @returns {Pipeline}
 *   Pipeline.
 */ __turbopack_context__.s([
    "trough",
    ()=>trough,
    "wrap",
    ()=>wrap
]);
function trough() {
    /** @type {Array<Middleware>} */ const fns = [];
    /** @type {Pipeline} */ const pipeline = {
        run,
        use
    };
    return pipeline;
    //TURBOPACK unreachable
    ;
    /** @type {Run} */ function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */ const callback = values.pop();
        if (typeof callback !== 'function') {
            throw new TypeError('Expected function as last argument, not ' + callback);
        }
        next(null, ...values);
        /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error | null | undefined} error
     * @param {Array<any>} output
     */ function next(error, ...output) {
            const fn = fns[++middlewareIndex];
            let index = -1;
            if (error) {
                callback(error);
                return;
            }
            // Copy non-nullish input into values.
            while(++index < values.length){
                if (output[index] === null || output[index] === undefined) {
                    output[index] = values[index];
                }
            }
            // Save the newly created `output` for the next call.
            values = output;
            // Next or done.
            if (fn) {
                wrap(fn, next)(...output);
            } else {
                callback(null, ...output);
            }
        }
    }
    /** @type {Use} */ function use(middelware) {
        if (typeof middelware !== 'function') {
            throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
        }
        fns.push(middelware);
        return pipeline;
    }
}
function wrap(middleware, callback) {
    /** @type {boolean} */ let called;
    return wrapped;
    //TURBOPACK unreachable
    ;
    /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */ function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */ let result;
        if (fnExpectsCallback) {
            parameters.push(done);
        }
        try {
            result = middleware.apply(this, parameters);
        } catch (error) {
            const exception = error;
            // Well, this is quite the pickle.
            // `middleware` received a callback and called it synchronously, but that
            // threw an error.
            // The only thing left to do is to throw the thing instead.
            if (fnExpectsCallback && called) {
                throw exception;
            }
            return done(exception);
        }
        if (!fnExpectsCallback) {
            if (result && result.then && typeof result.then === 'function') {
                result.then(then, done);
            } else if (result instanceof Error) {
                done(result);
            } else {
                then(result);
            }
        }
    }
    /**
   * Call `callback`, only once.
   *
   * @type {Callback}
   */ function done(error, ...output) {
        if (!called) {
            called = true;
            callback(error, ...output);
        }
    }
    /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */ function then(value) {
        done(null, value);
    }
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.shared.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a value has the shape of a WHATWG URL object.
 *
 * Using a symbol or instanceof would not be able to recognize URL objects
 * coming from other implementations (e.g. in Electron), so instead we are
 * checking some well known properties for a lack of a better test.
 *
 * We use `href` and `protocol` as they are the only properties that are
 * easy to retrieve and calculate due to the lazy nature of the getters.
 *
 * We check for auth attribute to distinguish legacy url instance with
 * WHATWG URL instance.
 *
 * @param {unknown} fileUrlOrPath
 *   File path or URL.
 * @returns {fileUrlOrPath is URL}
 *   Whether it’s a URL.
 */ // From: <https://github.com/nodejs/node/blob/6a3403c/lib/internal/url.js#L720>
__turbopack_context__.s([
    "isUrl",
    ()=>isUrl
]);
function isUrl(fileUrlOrPath) {
    return Boolean(fileUrlOrPath !== null && typeof fileUrlOrPath === 'object' && 'href' in fileUrlOrPath && fileUrlOrPath.href && 'protocol' in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === undefined);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node, Point, Position} from 'unist'
 * @import {Options as MessageOptions} from 'vfile-message'
 * @import {Compatible, Data, Map, Options, Value} from 'vfile'
 */ /**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 */ __turbopack_context__.s([
    "VFile",
    ()=>VFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs) <export default as minpath>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__$3c$export__default__as__minproc$3e$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs) <export default as minproc>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__$3c$export__fileURLToPath__as__urlToPath$3e$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$minurl$2e$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.shared.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Order of setting (least specific to most), we need this because otherwise
 * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
 * stem can be set.
 */ const order = [
    'history',
    'path',
    'basename',
    'stem',
    'extname',
    'dirname'
];
class VFile {
    /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */ constructor(value){
        /** @type {Options | VFile} */ let options;
        if (!value) {
            options = {};
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$minurl$2e$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUrl"])(value)) {
            options = {
                path: value
            };
        } else if (typeof value === 'string' || isUint8Array(value)) {
            options = {
                value
            };
        } else {
            options = value;
        }
        /* eslint-disable no-unused-expressions */ /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     *
     * @type {string}
     */ // Prevent calling `cwd` (which could be expensive) if it’s not needed;
        // the empty string will be overridden in the next block.
        this.cwd = 'cwd' in options ? '' : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__$3c$export__default__as__minproc$3e$__["minproc"].cwd();
        /**
     * Place to store custom info (default: `{}`).
     *
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     *
     * @type {Data}
     */ this.data = {};
        /**
     * List of file paths the file moved between.
     *
     * The first is the original path and the last is the current path.
     *
     * @type {Array<string>}
     */ this.history = [];
        /**
     * List of messages associated with the file.
     *
     * @type {Array<VFileMessage>}
     */ this.messages = [];
        /**
     * Raw value.
     *
     * @type {Value}
     */ this.value;
        // The below are non-standard, they are “well-known”.
        // As in, used in several tools.
        /**
     * Source map.
     *
     * This type is equivalent to the `RawSourceMap` type from the `source-map`
     * module.
     *
     * @type {Map | null | undefined}
     */ this.map;
        /**
     * Custom, non-string, compiled, representation.
     *
     * This is used by unified to store non-string results.
     * One example is when turning markdown into React nodes.
     *
     * @type {unknown}
     */ this.result;
        /**
     * Whether a file was saved to disk.
     *
     * This is used by vfile reporters.
     *
     * @type {boolean}
     */ this.stored;
        /* eslint-enable no-unused-expressions */ // Set path related properties in the correct order.
        let index = -1;
        while(++index < order.length){
            const field = order[index];
            // Note: we specifically use `in` instead of `hasOwnProperty` to accept
            // `vfile`s too.
            if (field in options && options[field] !== undefined && options[field] !== null) {
                // @ts-expect-error: TS doesn’t understand basic reality.
                this[field] = field === 'history' ? [
                    ...options[field]
                ] : options[field];
            }
        }
        /** @type {string} */ let field;
        // Set non-path related properties.
        for(field in options){
            // @ts-expect-error: fine to set other things.
            if (!order.includes(field)) {
                // @ts-expect-error: fine to set other things.
                this[field] = options[field];
            }
        }
    }
    /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */ get basename() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].basename(this.path) : undefined;
    }
    /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */ set basename(basename) {
        assertNonEmpty(basename, 'basename');
        assertPart(basename, 'basename');
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(this.dirname || '', basename);
    }
    /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */ get dirname() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].dirname(this.path) : undefined;
    }
    /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */ set dirname(dirname) {
        assertPath(this.basename, 'dirname');
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(dirname || '', this.basename);
    }
    /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */ get extname() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].extname(this.path) : undefined;
    }
    /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */ set extname(extname) {
        assertPart(extname, 'extname');
        assertPath(this.dirname, 'extname');
        if (extname) {
            if (extname.codePointAt(0) !== 46 /* `.` */ ) {
                throw new Error('`extname` must start with `.`');
            }
            if (extname.includes('.', 1)) {
                throw new Error('`extname` cannot contain multiple dots');
            }
        }
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(this.dirname, this.stem + (extname || ''));
    }
    /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */ get path() {
        return this.history[this.history.length - 1];
    }
    /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */ set path(path) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$minurl$2e$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUrl"])(path)) {
            path = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__$3c$export__fileURLToPath__as__urlToPath$3e$__["urlToPath"])(path);
        }
        assertNonEmpty(path, 'path');
        if (this.path !== path) {
            this.history.push(path);
        }
    }
    /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */ get stem() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].basename(this.path, this.extname) : undefined;
    }
    /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */ set stem(stem) {
        assertNonEmpty(stem, 'stem');
        assertPart(stem, 'stem');
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(this.dirname || '', stem + (this.extname || ''));
    }
    // Normal prototypal methods.
    /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */ fail(causeOrReason, optionsOrParentOrPlace, origin) {
        // @ts-expect-error: the overloads are fine.
        const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
        message.fatal = true;
        throw message;
    }
    /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */ info(causeOrReason, optionsOrParentOrPlace, origin) {
        // @ts-expect-error: the overloads are fine.
        const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
        message.fatal = undefined;
        return message;
    }
    /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */ message(causeOrReason, optionsOrParentOrPlace, origin) {
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$2d$message$40$4$2e$0$2e$3$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"](// @ts-expect-error: the overloads are fine.
        causeOrReason, optionsOrParentOrPlace, origin);
        if (this.path) {
            message.name = this.path + ':' + message.name;
            message.file = this.path;
        }
        message.fatal = false;
        this.messages.push(message);
        return message;
    }
    /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */ toString(encoding) {
        if (this.value === undefined) {
            return '';
        }
        if (typeof this.value === 'string') {
            return this.value;
        }
        const decoder = new TextDecoder(encoding || undefined);
        return decoder.decode(this.value);
    }
}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string | null | undefined} part
 *   File path part.
 * @param {string} name
 *   Part name.
 * @returns {undefined}
 *   Nothing.
 */ function assertPart(part, name) {
    if (part && part.includes(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].sep)) {
        throw new Error('`' + name + '` cannot be a path: did not expect `' + __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].sep + '`');
    }
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string | undefined} part
 *   Thing.
 * @param {string} name
 *   Part name.
 * @returns {asserts part is string}
 *   Nothing.
 */ function assertNonEmpty(part, name) {
    if (!part) {
        throw new Error('`' + name + '` cannot be empty');
    }
}
/**
 * Assert `path` exists.
 *
 * @param {string | undefined} path
 *   Path.
 * @param {string} name
 *   Dependency name.
 * @returns {asserts path is string}
 *   Nothing.
 */ function assertPath(path, name) {
    if (!path) {
        throw new Error('Setting `' + name + '` requires `path` to be set too');
    }
}
/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */ function isUint8Array(value) {
    return Boolean(value && typeof value === 'object' && 'byteLength' in value && 'byteOffset' in value);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/callable-instance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallableInstance",
    ()=>CallableInstance
]);
const CallableInstance = /**
       * @this {Function}
       * @param {string | symbol} property
       * @returns {(...parameters: Array<unknown>) => unknown}
       */ function(property) {
    const self = this;
    const constr = self.constructor;
    const proto = // Prototypes do exist.
    // type-coverage:ignore-next-line
    constr.prototype;
    const value = proto[property];
    /** @type {(...parameters: Array<unknown>) => unknown} */ const apply = function() {
        return value.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto);
    // Not needed for us in `unified`: we only call this on the `copy`
    // function,
    // and we don't need to add its fields (`length`, `name`)
    // over.
    // See also: GH-246.
    // const names = Object.getOwnPropertyNames(value)
    //
    // for (const p of names) {
    //   const descriptor = Object.getOwnPropertyDescriptor(value, p)
    //   if (descriptor) Object.defineProperty(apply, p, descriptor)
    // }
    return apply;
};
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('trough').Pipeline} Pipeline
 *
 * @typedef {import('unist').Node} Node
 *
 * @typedef {import('vfile').Compatible} Compatible
 * @typedef {import('vfile').Value} Value
 *
 * @typedef {import('../index.js').CompileResultMap} CompileResultMap
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Settings} Settings
 */ /**
 * @typedef {CompileResultMap[keyof CompileResultMap]} CompileResults
 *   Acceptable results from compilers.
 *
 *   To register custom results, add them to
 *   {@linkcode CompileResultMap}.
 */ /**
 * @template {Node} [Tree=Node]
 *   The node that the compiler receives (default: `Node`).
 * @template {CompileResults} [Result=CompileResults]
 *   The thing that the compiler yields (default: `CompileResults`).
 * @callback Compiler
 *   A **compiler** handles the compiling of a syntax tree to something else
 *   (in most cases, text) (TypeScript type).
 *
 *   It is used in the stringify phase and called with a {@linkcode Node}
 *   and {@linkcode VFile} representation of the document to compile.
 *   It should return the textual representation of the given tree (typically
 *   `string`).
 *
 *   > **Note**: unified typically compiles by serializing: most compilers
 *   > return `string` (or `Uint8Array`).
 *   > Some compilers, such as the one configured with
 *   > [`rehype-react`][rehype-react], return other values (in this case, a
 *   > React tree).
 *   > If you’re using a compiler that doesn’t serialize, expect different
 *   > result values.
 *   >
 *   > To register custom results in TypeScript, add them to
 *   > {@linkcode CompileResultMap}.
 *
 *   [rehype-react]: https://github.com/rehypejs/rehype-react
 * @param {Tree} tree
 *   Tree to compile.
 * @param {VFile} file
 *   File associated with `tree`.
 * @returns {Result}
 *   New content: compiled text (`string` or `Uint8Array`, for `file.value`) or
 *   something else (for `file.result`).
 */ /**
 * @template {Node} [Tree=Node]
 *   The node that the parser yields (default: `Node`)
 * @callback Parser
 *   A **parser** handles the parsing of text to a syntax tree.
 *
 *   It is used in the parse phase and is called with a `string` and
 *   {@linkcode VFile} of the document to parse.
 *   It must return the syntax tree representation of the given file
 *   ({@linkcode Node}).
 * @param {string} document
 *   Document to parse.
 * @param {VFile} file
 *   File associated with `document`.
 * @returns {Tree}
 *   Node representing the given file.
 */ /**
 * @typedef {(
 *   Plugin<Array<any>, any, any> |
 *   PluginTuple<Array<any>, any, any> |
 *   Preset
 * )} Pluggable
 *   Union of the different ways to add plugins and settings.
 */ /**
 * @typedef {Array<Pluggable>} PluggableList
 *   List of plugins and presets.
 */ // Note: we can’t use `callback` yet as it messes up `this`:
//  <https://github.com/microsoft/TypeScript/issues/55197>.
/**
 * @template {Array<unknown>} [PluginParameters=[]]
 *   Arguments passed to the plugin (default: `[]`, the empty tuple).
 * @template {Node | string | undefined} [Input=Node]
 *   Value that is expected as input (default: `Node`).
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node it expects.
 *   *   If the plugin sets a {@linkcode Parser}, this should be
 *       `string`.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be the
 *       node it expects.
 * @template [Output=Input]
 *   Value that is yielded as output (default: `Input`).
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node that that yields.
 *   *   If the plugin sets a {@linkcode Parser}, this should be the
 *       node that it yields.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be
 *       result it yields.
 * @typedef {(
 *   (this: Processor, ...parameters: PluginParameters) =>
 *     Input extends string ? // Parser.
 *        Output extends Node | undefined ? undefined | void : never :
 *     Output extends CompileResults ? // Compiler.
 *        Input extends Node | undefined ? undefined | void : never :
 *     Transformer<
 *       Input extends Node ? Input : Node,
 *       Output extends Node ? Output : Node
 *     > | undefined | void
 * )} Plugin
 *   Single plugin.
 *
 *   Plugins configure the processors they are applied on in the following
 *   ways:
 *
 *   *   they change the processor, such as the parser, the compiler, or by
 *       configuring data
 *   *   they specify how to handle trees and files
 *
 *   In practice, they are functions that can receive options and configure the
 *   processor (`this`).
 *
 *   > **Note**: plugins are called when the processor is *frozen*, not when
 *   > they are applied.
 */ /**
 * Tuple of a plugin and its configuration.
 *
 * The first item is a plugin, the rest are its parameters.
 *
 * @template {Array<unknown>} [TupleParameters=[]]
 *   Arguments passed to the plugin (default: `[]`, the empty tuple).
 * @template {Node | string | undefined} [Input=undefined]
 *   Value that is expected as input (optional).
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node it expects.
 *   *   If the plugin sets a {@linkcode Parser}, this should be
 *       `string`.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be the
 *       node it expects.
 * @template [Output=undefined] (optional).
 *   Value that is yielded as output.
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node that that yields.
 *   *   If the plugin sets a {@linkcode Parser}, this should be the
 *       node that it yields.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be
 *       result it yields.
 * @typedef {(
 *   [
 *     plugin: Plugin<TupleParameters, Input, Output>,
 *     ...parameters: TupleParameters
 *   ]
 * )} PluginTuple
 */ /**
 * @typedef Preset
 *   Sharable configuration.
 *
 *   They can contain plugins and settings.
 * @property {PluggableList | undefined} [plugins]
 *   List of plugins and presets (optional).
 * @property {Settings | undefined} [settings]
 *   Shared settings for parsers and compilers (optional).
 */ /**
 * @template {VFile} [File=VFile]
 *   The file that the callback receives (default: `VFile`).
 * @callback ProcessCallback
 *   Callback called when the process is done.
 *
 *   Called with either an error or a result.
 * @param {Error | undefined} [error]
 *   Fatal error (optional).
 * @param {File | undefined} [file]
 *   Processed file (optional).
 * @returns {undefined}
 *   Nothing.
 */ /**
 * @template {Node} [Tree=Node]
 *   The tree that the callback receives (default: `Node`).
 * @callback RunCallback
 *   Callback called when transformers are done.
 *
 *   Called with either an error or results.
 * @param {Error | undefined} [error]
 *   Fatal error (optional).
 * @param {Tree | undefined} [tree]
 *   Transformed tree (optional).
 * @param {VFile | undefined} [file]
 *   File (optional).
 * @returns {undefined}
 *   Nothing.
 */ /**
 * @template {Node} [Output=Node]
 *   Node type that the transformer yields (default: `Node`).
 * @callback TransformCallback
 *   Callback passed to transforms.
 *
 *   If the signature of a `transformer` accepts a third argument, the
 *   transformer may perform asynchronous operations, and must call it.
 * @param {Error | undefined} [error]
 *   Fatal error to stop the process (optional).
 * @param {Output | undefined} [tree]
 *   New, changed, tree (optional).
 * @param {VFile | undefined} [file]
 *   New, changed, file (optional).
 * @returns {undefined}
 *   Nothing.
 */ /**
 * @template {Node} [Input=Node]
 *   Node type that the transformer expects (default: `Node`).
 * @template {Node} [Output=Input]
 *   Node type that the transformer yields (default: `Input`).
 * @callback Transformer
 *   Transformers handle syntax trees and files.
 *
 *   They are functions that are called each time a syntax tree and file are
 *   passed through the run phase.
 *   When an error occurs in them (either because it’s thrown, returned,
 *   rejected, or passed to `next`), the process stops.
 *
 *   The run phase is handled by [`trough`][trough], see its documentation for
 *   the exact semantics of these functions.
 *
 *   > **Note**: you should likely ignore `next`: don’t accept it.
 *   > it supports callback-style async work.
 *   > But promises are likely easier to reason about.
 *
 *   [trough]: https://github.com/wooorm/trough#function-fninput-next
 * @param {Input} tree
 *   Tree to handle.
 * @param {VFile} file
 *   File to handle.
 * @param {TransformCallback<Output>} next
 *   Callback.
 * @returns {(
 *   Promise<Output | undefined | void> |
 *   Promise<never> | // For some reason this is needed separately.
 *   Output |
 *   Error |
 *   undefined |
 *   void
 * )}
 *   If you accept `next`, nothing.
 *   Otherwise:
 *
 *   *   `Error` — fatal error to stop the process
 *   *   `Promise<undefined>` or `undefined` — the next transformer keeps using
 *       same tree
 *   *   `Promise<Node>` or `Node` — new, changed, tree
 */ /**
 * @template {Node | undefined} ParseTree
 *   Output of `parse`.
 * @template {Node | undefined} HeadTree
 *   Input for `run`.
 * @template {Node | undefined} TailTree
 *   Output for `run`.
 * @template {Node | undefined} CompileTree
 *   Input of `stringify`.
 * @template {CompileResults | undefined} CompileResult
 *   Output of `stringify`.
 * @template {Node | string | undefined} Input
 *   Input of plugin.
 * @template Output
 *   Output of plugin (optional).
 * @typedef {(
 *   Input extends string
 *     ? Output extends Node | undefined
 *       ? // Parser.
 *         Processor<
 *           Output extends undefined ? ParseTree : Output,
 *           HeadTree,
 *           TailTree,
 *           CompileTree,
 *           CompileResult
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : Output extends CompileResults
 *     ? Input extends Node | undefined
 *       ? // Compiler.
 *         Processor<
 *           ParseTree,
 *           HeadTree,
 *           TailTree,
 *           Input extends undefined ? CompileTree : Input,
 *           Output extends undefined ? CompileResult : Output
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : Input extends Node | undefined
 *     ? Output extends Node | undefined
 *       ? // Transform.
 *         Processor<
 *           ParseTree,
 *           HeadTree extends undefined ? Input : HeadTree,
 *           Output extends undefined ? TailTree : Output,
 *           CompileTree,
 *           CompileResult
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : // Unknown.
 *       Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 * )} UsePlugin
 *   Create a processor based on the input/output of a {@link Plugin plugin}.
 */ /**
 * @template {CompileResults | undefined} Result
 *   Node type that the transformer yields.
 * @typedef {(
 *   Result extends Value | undefined ?
 *     VFile :
 *     VFile & {result: Result}
 *   )} VFileWithOutput
 *   Type to generate a {@linkcode VFile} corresponding to a compiler result.
 *
 *   If a result that is not acceptable on a `VFile` is used, that will
 *   be stored on the `result` field of {@linkcode VFile}.
 */ __turbopack_context__.s([
    "Processor",
    ()=>Processor,
    "unified",
    ()=>unified
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$bail$40$2$2e$0$2e$2$2f$node_modules$2f$bail$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$extend$40$3$2e$0$2e$2$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$is$2d$plain$2d$obj$40$4$2e$1$2e$0$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$trough$40$2$2e$2$2e$0$2f$node_modules$2f$trough$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/trough@2.2.0/node_modules/trough/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unified$40$11$2e$0$2e$5$2f$node_modules$2f$unified$2f$lib$2f$callable$2d$instance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/callable-instance.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// To do: next major: drop `Compiler`, `Parser`: prefer lowercase.
// To do: we could start yielding `never` in TS when a parser is missing and
// `parse` is called.
// Currently, we allow directly setting `processor.parser`, which is untyped.
const own = {}.hasOwnProperty;
class Processor extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unified$40$11$2e$0$2e$5$2f$node_modules$2f$unified$2f$lib$2f$callable$2d$instance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallableInstance"] {
    /**
   * Create a processor.
   */ constructor(){
        // If `Processor()` is called (w/o new), `copy` is called instead.
        super('copy');
        /**
     * Compiler to use (deprecated).
     *
     * @deprecated
     *   Use `compiler` instead.
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */ this.Compiler = undefined;
        /**
     * Parser to use (deprecated).
     *
     * @deprecated
     *   Use `parser` instead.
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */ this.Parser = undefined;
        // Note: the following fields are considered private.
        // However, they are needed for tests, and TSC generates an untyped
        // `private freezeIndex` field for, which trips `type-coverage` up.
        // Instead, we use `@deprecated` to visualize that they shouldn’t be used.
        /**
     * Internal list of configured plugins.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Array<PluginTuple<Array<unknown>>>}
     */ this.attachers = [];
        /**
     * Compiler to use.
     *
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */ this.compiler = undefined;
        /**
     * Internal state to track where we are while freezing.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {number}
     */ this.freezeIndex = -1;
        /**
     * Internal state to track whether we’re frozen.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {boolean | undefined}
     */ this.frozen = undefined;
        /**
     * Internal state.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Data}
     */ this.namespace = {};
        /**
     * Parser to use.
     *
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */ this.parser = undefined;
        /**
     * Internal list of configured transformers.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Pipeline}
     */ this.transformers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$trough$40$2$2e$2$2e$0$2f$node_modules$2f$trough$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trough"])();
    }
    /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */ copy() {
        // Cast as the type parameters will be the same after attaching.
        const destination = new Processor();
        let index = -1;
        while(++index < this.attachers.length){
            const attacher = this.attachers[index];
            destination.use(...attacher);
        }
        destination.data((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$extend$40$3$2e$0$2e$2$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(true, {}, this.namespace));
        return destination;
    }
    /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */ data(key, value) {
        if (typeof key === 'string') {
            // Set `key`.
            if (arguments.length === 2) {
                assertUnfrozen('data', this.frozen);
                this.namespace[key] = value;
                return this;
            }
            // Get `key`.
            return own.call(this.namespace, key) && this.namespace[key] || undefined;
        }
        // Set space.
        if (key) {
            assertUnfrozen('data', this.frozen);
            this.namespace = key;
            return this;
        }
        // Get space.
        return this.namespace;
    }
    /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */ freeze() {
        if (this.frozen) {
            return this;
        }
        // Cast so that we can type plugins easier.
        // Plugins are supposed to be usable on different processors, not just on
        // this exact processor.
        const self = this;
        while(++this.freezeIndex < this.attachers.length){
            const [attacher, ...options] = this.attachers[this.freezeIndex];
            if (options[0] === false) {
                continue;
            }
            if (options[0] === true) {
                options[0] = undefined;
            }
            const transformer = attacher.call(self, ...options);
            if (typeof transformer === 'function') {
                this.transformers.use(transformer);
            }
        }
        this.frozen = true;
        this.freezeIndex = Number.POSITIVE_INFINITY;
        return this;
    }
    /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */ parse(file) {
        this.freeze();
        const realFile = vfile(file);
        const parser = this.parser || this.Parser;
        assertParser('parse', parser);
        return parser(String(realFile), realFile);
    }
    /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */ process(file, done) {
        const self = this;
        this.freeze();
        assertParser('process', this.parser || this.Parser);
        assertCompiler('process', this.compiler || this.Compiler);
        return done ? executor(undefined, done) : new Promise(executor);
        //TURBOPACK unreachable
        ;
        // Note: `void`s needed for TS.
        /**
     * @param {((file: VFileWithOutput<CompileResult>) => undefined | void) | undefined} resolve
     * @param {(error: Error | undefined) => undefined | void} reject
     * @returns {undefined}
     */ function executor(resolve, reject) {
            const realFile = vfile(file);
            // Assume `ParseTree` (the result of the parser) matches `HeadTree` (the
            // input of the first transform).
            const parseTree = self.parse(realFile);
            self.run(parseTree, realFile, function(error, tree, file) {
                if (error || !tree || !file) {
                    return realDone(error);
                }
                // Assume `TailTree` (the output of the last transform) matches
                // `CompileTree` (the input of the compiler).
                const compileTree = tree;
                const compileResult = self.stringify(compileTree, file);
                if (looksLikeAValue(compileResult)) {
                    file.value = compileResult;
                } else {
                    file.result = compileResult;
                }
                realDone(error, file);
            });
            /**
       * @param {Error | undefined} error
       * @param {VFileWithOutput<CompileResult> | undefined} [file]
       * @returns {undefined}
       */ function realDone(error, file) {
                if (error || !file) {
                    reject(error);
                } else if (resolve) {
                    resolve(file);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(done, '`done` is defined if `resolve` is not');
                    done(undefined, file);
                }
            }
        }
    }
    /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */ processSync(file) {
        /** @type {boolean} */ let complete = false;
        /** @type {VFileWithOutput<CompileResult> | undefined} */ let result;
        this.freeze();
        assertParser('processSync', this.parser || this.Parser);
        assertCompiler('processSync', this.compiler || this.Compiler);
        this.process(file, realDone);
        assertDone('processSync', 'process', complete);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result, 'we either bailed on an error or have a tree');
        return result;
        //TURBOPACK unreachable
        ;
        /**
     * @type {ProcessCallback<VFileWithOutput<CompileResult>>}
     */ function realDone(error, file) {
            complete = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$bail$40$2$2e$0$2e$2$2f$node_modules$2f$bail$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bail"])(error);
            result = file;
        }
    }
    /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */ run(tree, file, done) {
        assertNode(tree);
        this.freeze();
        const transformers = this.transformers;
        if (!done && typeof file === 'function') {
            done = file;
            file = undefined;
        }
        return done ? executor(undefined, done) : new Promise(executor);
        //TURBOPACK unreachable
        ;
        // Note: `void`s needed for TS.
        /**
     * @param {(
     *   ((tree: TailTree extends undefined ? Node : TailTree) => undefined | void) |
     *   undefined
     * )} resolve
     * @param {(error: Error) => undefined | void} reject
     * @returns {undefined}
     */ function executor(resolve, reject) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof file !== 'function', '`file` can’t be a `done` anymore, we checked');
            const realFile = vfile(file);
            transformers.run(tree, realFile, realDone);
            /**
       * @param {Error | undefined} error
       * @param {Node} outputTree
       * @param {VFile} file
       * @returns {undefined}
       */ function realDone(error, outputTree, file) {
                const resultingTree = outputTree || tree;
                if (error) {
                    reject(error);
                } else if (resolve) {
                    resolve(resultingTree);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(done, '`done` is defined if `resolve` is not');
                    done(undefined, resultingTree, file);
                }
            }
        }
    }
    /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */ runSync(tree, file) {
        /** @type {boolean} */ let complete = false;
        /** @type {(TailTree extends undefined ? Node : TailTree) | undefined} */ let result;
        this.run(tree, file, realDone);
        assertDone('runSync', 'run', complete);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result, 'we either bailed on an error or have a tree');
        return result;
        //TURBOPACK unreachable
        ;
        /**
     * @type {RunCallback<TailTree extends undefined ? Node : TailTree>}
     */ function realDone(error, tree) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$bail$40$2$2e$0$2e$2$2f$node_modules$2f$bail$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bail"])(error);
            result = tree;
            complete = true;
        }
    }
    /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */ stringify(tree, file) {
        this.freeze();
        const realFile = vfile(file);
        const compiler = this.compiler || this.Compiler;
        assertCompiler('stringify', compiler);
        assertNode(tree);
        return compiler(tree, realFile);
    }
    /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */ use(value, ...parameters) {
        const attachers = this.attachers;
        const namespace = this.namespace;
        assertUnfrozen('use', this.frozen);
        if (value === null || value === undefined) {
        // Empty.
        } else if (typeof value === 'function') {
            addPlugin(value, parameters);
        } else if (typeof value === 'object') {
            if (Array.isArray(value)) {
                addList(value);
            } else {
                addPreset(value);
            }
        } else {
            throw new TypeError('Expected usable value, not `' + value + '`');
        }
        return this;
        //TURBOPACK unreachable
        ;
        /**
     * @param {Pluggable} value
     * @returns {undefined}
     */ function add(value) {
            if (typeof value === 'function') {
                addPlugin(value, []);
            } else if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    const [plugin, ...parameters] = value;
                    addPlugin(plugin, parameters);
                } else {
                    addPreset(value);
                }
            } else {
                throw new TypeError('Expected usable value, not `' + value + '`');
            }
        }
        /**
     * @param {Preset} result
     * @returns {undefined}
     */ function addPreset(result) {
            if (!('plugins' in result) && !('settings' in result)) {
                throw new Error('Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither');
            }
            addList(result.plugins);
            if (result.settings) {
                namespace.settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$extend$40$3$2e$0$2e$2$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(true, namespace.settings, result.settings);
            }
        }
        /**
     * @param {PluggableList | null | undefined} plugins
     * @returns {undefined}
     */ function addList(plugins) {
            let index = -1;
            if (plugins === null || plugins === undefined) {
            // Empty.
            } else if (Array.isArray(plugins)) {
                while(++index < plugins.length){
                    const thing = plugins[index];
                    add(thing);
                }
            } else {
                throw new TypeError('Expected a list of plugins, not `' + plugins + '`');
            }
        }
        /**
     * @param {Plugin} plugin
     * @param {Array<unknown>} parameters
     * @returns {undefined}
     */ function addPlugin(plugin, parameters) {
            let index = -1;
            let entryIndex = -1;
            while(++index < attachers.length){
                if (attachers[index][0] === plugin) {
                    entryIndex = index;
                    break;
                }
            }
            if (entryIndex === -1) {
                attachers.push([
                    plugin,
                    ...parameters
                ]);
            } else if (parameters.length > 0) {
                let [primary, ...rest] = parameters;
                const currentPrimary = attachers[entryIndex][1];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$is$2d$plain$2d$obj$40$4$2e$1$2e$0$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentPrimary) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$is$2d$plain$2d$obj$40$4$2e$1$2e$0$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(primary)) {
                    primary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$extend$40$3$2e$0$2e$2$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(true, currentPrimary, primary);
                }
                attachers[entryIndex] = [
                    plugin,
                    primary,
                    ...rest
                ];
            }
        }
    }
}
const unified = new Processor().freeze();
/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */ function assertParser(name, value) {
    if (typeof value !== 'function') {
        throw new TypeError('Cannot `' + name + '` without `parser`');
    }
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */ function assertCompiler(name, value) {
    if (typeof value !== 'function') {
        throw new TypeError('Cannot `' + name + '` without `compiler`');
    }
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */ function assertUnfrozen(name, frozen) {
    if (frozen) {
        throw new Error('Cannot call `' + name + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
    }
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */ function assertNode(node) {
    // `isPlainObj` unfortunately uses `any` instead of `unknown`.
    // type-coverage:ignore-next-line
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$is$2d$plain$2d$obj$40$4$2e$1$2e$0$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node) || typeof node.type !== 'string') {
        throw new TypeError('Expected node, got `' + node + '`');
    // Fine.
    }
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */ function assertDone(name, asyncName, complete) {
    if (!complete) {
        throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
    }
}
/**
 * @param {Compatible | undefined} [value]
 * @returns {VFile}
 */ function vfile(value) {
    return looksLikeAVFile(value) ? value : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFile"](value);
}
/**
 * @param {Compatible | undefined} [value]
 * @returns {value is VFile}
 */ function looksLikeAVFile(value) {
    return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is Value}
 */ function looksLikeAValue(value) {
    return typeof value === 'string' || isUint8Array(value);
}
/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */ function isUint8Array(value) {
    return Boolean(value && typeof value === 'object' && 'byteLength' in value && 'byteOffset' in value);
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.1.12_react@19.1.0/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Nodes, Parents, Root} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {ComponentType, JSX, ReactElement, ReactNode} from 'react'
 * @import {Options as RemarkRehypeOptions} from 'remark-rehype'
 * @import {BuildVisitor} from 'unist-util-visit'
 * @import {PluggableList, Processor} from 'unified'
 */ /**
 * @callback AllowElement
 *   Filter elements.
 * @param {Readonly<Element>} element
 *   Element to check.
 * @param {number} index
 *   Index of `element` in `parent`.
 * @param {Readonly<Parents> | undefined} parent
 *   Parent of `element`.
 * @returns {boolean | null | undefined}
 *   Whether to allow `element` (default: `false`).
 */ /**
 * @typedef ExtraProps
 *   Extra fields we pass.
 * @property {Element | undefined} [node]
 *   passed when `passNode` is on.
 */ /**
 * @typedef {{
 *   [Key in keyof JSX.IntrinsicElements]?: ComponentType<JSX.IntrinsicElements[Key] & ExtraProps> | keyof JSX.IntrinsicElements
 * }} Components
 *   Map tag names to components.
 */ /**
 * @typedef Deprecation
 *   Deprecation.
 * @property {string} from
 *   Old field.
 * @property {string} id
 *   ID in readme.
 * @property {keyof Options} [to]
 *   New field.
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {AllowElement | null | undefined} [allowElement]
 *   Filter elements (optional);
 *   `allowedElements` / `disallowedElements` is used first.
 * @property {ReadonlyArray<string> | null | undefined} [allowedElements]
 *   Tag names to allow (default: all tag names);
 *   cannot combine w/ `disallowedElements`.
 * @property {string | null | undefined} [children]
 *   Markdown.
 * @property {Components | null | undefined} [components]
 *   Map tag names to components.
 * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]
 *   Tag names to disallow (default: `[]`);
 *   cannot combine w/ `allowedElements`.
 * @property {PluggableList | null | undefined} [rehypePlugins]
 *   List of rehype plugins to use.
 * @property {PluggableList | null | undefined} [remarkPlugins]
 *   List of remark plugins to use.
 * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]
 *   Options to pass through to `remark-rehype`.
 * @property {boolean | null | undefined} [skipHtml=false]
 *   Ignore HTML in markdown completely (default: `false`).
 * @property {boolean | null | undefined} [unwrapDisallowed=false]
 *   Extract (unwrap) what’s in disallowed elements (default: `false`);
 *   normally when say `strong` is not allowed, it and it’s children are dropped,
 *   with `unwrapDisallowed` the element itself is replaced by its children.
 * @property {UrlTransform | null | undefined} [urlTransform]
 *   Change URLs (default: `defaultUrlTransform`)
 */ /**
 * @typedef HooksOptionsOnly
 *   Configuration specifically for {@linkcode MarkdownHooks}.
 * @property {ReactNode | null | undefined} [fallback]
 *   Content to render while the processor processing the markdown (optional).
 */ /**
 * @typedef {Options & HooksOptionsOnly} HooksOptions
 *   Configuration for {@linkcode MarkdownHooks};
 *   extends the regular {@linkcode Options} with a `fallback` prop.
 */ /**
 * @callback UrlTransform
 *   Transform all URLs.
 * @param {string} url
 *   URL.
 * @param {string} key
 *   Property name (example: `'href'`).
 * @param {Readonly<Element>} node
 *   Node.
 * @returns {string | null | undefined}
 *   Transformed URL (optional).
 */ __turbopack_context__.s([
    "Markdown",
    ()=>Markdown,
    "MarkdownAsync",
    ()=>MarkdownAsync,
    "MarkdownHooks",
    ()=>MarkdownHooks,
    "defaultUrlTransform",
    ()=>defaultUrlTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$40$2$2e$3$2e$6$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$html$2d$url$2d$attributes$40$3$2e$0$2e$1$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/html-url-attributes@3.0.1/node_modules/html-url-attributes/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/next@15.5.3_@opentelemetry+_30ada625c4446e2a8240f82d673bcbc4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$remark$2d$parse$40$11$2e$0$2e$0$2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$remark$2d$rehype$40$11$2e$1$2e$2$2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unified$40$11$2e$0$2e$5$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const changelog = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';
/** @type {PluggableList} */ const emptyPlugins = [];
/** @type {Readonly<RemarkRehypeOptions>} */ const emptyRemarkRehypeOptions = {
    allowDangerousHtml: true
};
const safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;
// Mutable because we `delete` any time it’s used and a message is sent.
/** @type {ReadonlyArray<Readonly<Deprecation>>} */ const deprecations = [
    {
        from: 'astPlugins',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'allowDangerousHtml',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'allowNode',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'allowElement'
    },
    {
        from: 'allowedTypes',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'allowedElements'
    },
    {
        from: 'className',
        id: 'remove-classname'
    },
    {
        from: 'disallowedTypes',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'disallowedElements'
    },
    {
        from: 'escapeHtml',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'includeElementIndex',
        id: '#remove-includeelementindex'
    },
    {
        from: 'includeNodeIndex',
        id: 'change-includenodeindex-to-includeelementindex'
    },
    {
        from: 'linkTarget',
        id: 'remove-linktarget'
    },
    {
        from: 'plugins',
        id: 'change-plugins-to-remarkplugins',
        to: 'remarkPlugins'
    },
    {
        from: 'rawSourcePos',
        id: '#remove-rawsourcepos'
    },
    {
        from: 'renderers',
        id: 'change-renderers-to-components',
        to: 'components'
    },
    {
        from: 'source',
        id: 'change-source-to-children',
        to: 'children'
    },
    {
        from: 'sourcePos',
        id: '#remove-sourcepos'
    },
    {
        from: 'transformImageUri',
        id: '#add-urltransform',
        to: 'urlTransform'
    },
    {
        from: 'transformLinkUri',
        id: '#add-urltransform',
        to: 'urlTransform'
    }
];
function Markdown(options) {
    const processor = createProcessor(options);
    const file = createFile(options);
    return post(processor.runSync(processor.parse(file), file), options);
}
async function MarkdownAsync(options) {
    const processor = createProcessor(options);
    const file = createFile(options);
    const tree = await processor.run(processor.parse(file), file);
    return post(tree, options);
}
function MarkdownHooks(options) {
    const processor = createProcessor(options);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [tree, setTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        let cancelled = false;
        const file = createFile(options);
        processor.run(processor.parse(file), file, function(error, tree) {
            if (!cancelled) {
                setError(error);
                setTree(tree);
            }
        });
        /**
       * @returns {undefined}
       *   Nothing.
       */ return function() {
            cancelled = true;
        };
    }, [
        options.children,
        options.rehypePlugins,
        options.remarkPlugins,
        options.remarkRehypeOptions
    ]);
    if (error) throw error;
    return tree ? post(tree, options) : options.fallback;
}
/**
 * Set up the `unified` processor.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {Processor<MdastRoot, MdastRoot, Root, undefined, undefined>}
 *   Result.
 */ function createProcessor(options) {
    const rehypePlugins = options.rehypePlugins || emptyPlugins;
    const remarkPlugins = options.remarkPlugins || emptyPlugins;
    const remarkRehypeOptions = options.remarkRehypeOptions ? {
        ...options.remarkRehypeOptions,
        ...emptyRemarkRehypeOptions
    } : emptyRemarkRehypeOptions;
    const processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unified$40$11$2e$0$2e$5$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unified"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$remark$2d$parse$40$11$2e$0$2e$0$2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).use(remarkPlugins).use(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$remark$2d$rehype$40$11$2e$1$2e$2$2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], remarkRehypeOptions).use(rehypePlugins);
    return processor;
}
/**
 * Set up the virtual file.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {VFile}
 *   Result.
 */ function createFile(options) {
    const children = options.children || '';
    const file = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$vfile$40$6$2e$0$2e$3$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFile"]();
    if (typeof children === 'string') {
        file.value = children;
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected value `' + children + '` for `children` prop, expected `string`');
    }
    return file;
}
/**
 * Process the result from unified some more.
 *
 * @param {Nodes} tree
 *   Tree.
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {ReactElement}
 *   React element.
 */ function post(tree, options) {
    const allowedElements = options.allowedElements;
    const allowElement = options.allowElement;
    const components = options.components;
    const disallowedElements = options.disallowedElements;
    const skipHtml = options.skipHtml;
    const unwrapDisallowed = options.unwrapDisallowed;
    const urlTransform = options.urlTransform || defaultUrlTransform;
    for (const deprecation of deprecations){
        if (Object.hasOwn(options, deprecation.from)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected `' + deprecation.from + '` prop, ' + (deprecation.to ? 'use `' + deprecation.to + '` instead' : 'remove it') + ' (see <' + changelog + '#' + deprecation.id + '> for more info)');
        }
    }
    if (allowedElements && disallowedElements) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$devlop$40$1$2e$1$2e$0$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, transform);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$40$2$2e$3$2e$6$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJsxRuntime"])(tree, {
        Fragment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
        components,
        ignoreInvalidStyle: true,
        jsx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"],
        jsxs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_$40$opentelemetry$2b$_30ada625c4446e2a8240f82d673bcbc4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"],
        passKeys: true,
        passNode: true
    });
    //TURBOPACK unreachable
    ;
    /** @type {BuildVisitor<Root>} */ function transform(node, index, parent) {
        if (node.type === 'raw' && parent && typeof index === 'number') {
            if (skipHtml) {
                parent.children.splice(index, 1);
            } else {
                parent.children[index] = {
                    type: 'text',
                    value: node.value
                };
            }
            return index;
        }
        if (node.type === 'element') {
            /** @type {string} */ let key;
            for(key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$html$2d$url$2d$attributes$40$3$2e$0$2e$1$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAttributes"]){
                if (Object.hasOwn(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$html$2d$url$2d$attributes$40$3$2e$0$2e$1$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAttributes"], key) && Object.hasOwn(node.properties, key)) {
                    const value = node.properties[key];
                    const test = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$html$2d$url$2d$attributes$40$3$2e$0$2e$1$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAttributes"][key];
                    if (test === null || test.includes(node.tagName)) {
                        node.properties[key] = urlTransform(String(value || ''), key, node);
                    }
                }
            }
        }
        if (node.type === 'element') {
            let remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;
            if (!remove && allowElement && typeof index === 'number') {
                remove = !allowElement(node, index, parent);
            }
            if (remove && parent && typeof index === 'number') {
                if (unwrapDisallowed && node.children) {
                    parent.children.splice(index, 1, ...node.children);
                } else {
                    parent.children.splice(index, 1);
                }
                return index;
            }
        }
    }
}
function defaultUrlTransform(value) {
    // Same as:
    // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>
    // But without the `encode` part.
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon === -1 || slash !== -1 && colon > slash || questionMark !== -1 && colon > questionMark || numberSign !== -1 && colon > numberSign || // It is a protocol, it should be allowed.
    safeProtocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
}),
"[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.1.12_react@19.1.0/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$12_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Markdown"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$rag$2f$phonegpt$2f$phone$2d$gap$2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$12_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/rag/phonegpt/phone-gap/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.1.12_react@19.1.0/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=b9f51__pnpm_bff8b9b8._.js.map