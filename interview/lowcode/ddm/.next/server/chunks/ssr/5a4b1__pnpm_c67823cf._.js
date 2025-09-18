module.exports = [
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>cc
]);
function cc(names) {
    if (typeof names === "string" || typeof names === "number") return "" + names;
    let out = "";
    if (Array.isArray(names)) {
        for(let i = 0, tmp; i < names.length; i++){
            if ((tmp = cc(names[i])) !== "") {
                out += (out && " ") + tmp;
            }
        }
    } else {
        for(let k in names){
            if (names[k]) out += (out && " ") + k;
        }
    }
    return out;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
    var React = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore,
    "default",
    ()=>vanilla
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/vanilla.mjs")}`;
    }
};
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const destroy = ()=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.");
        }
        listeners.clear();
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe,
        destroy
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.");
    }
    return createStore(createState);
};
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/traditional.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
;
const { useDebugValue } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
    useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/shallow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shallow,
    "shallow",
    ()=>shallow$1
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/shallow.mjs")}`;
    }
};
function shallow$1(objA, objB) {
    if (Object.is(objA, objB)) {
        return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    if (objA instanceof Map && objB instanceof Map) {
        if (objA.size !== objB.size) return false;
        for (const [key, value] of objA){
            if (!Object.is(value, objB.get(key))) {
                return false;
            }
        }
        return true;
    }
    if (objA instanceof Set && objB instanceof Set) {
        if (objA.size !== objB.size) return false;
        for (const value of objA){
            if (!objB.has(value)) {
                return false;
            }
        }
        return true;
    }
    const keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) {
        return false;
    }
    for (const keyA of keysA){
        if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
            return false;
        }
    }
    return true;
}
var shallow = (objA, objB)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`.");
    }
    return shallow$1(objA, objB);
};
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i){
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
const __TURBOPACK__default__export__ = dispatch;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dispatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function none() {}
function __TURBOPACK__default__export__(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(select) {
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i){
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](subgroups, this._parents);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
__turbopack_context__.s([
    "default",
    ()=>array
]);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function empty() {
    return [];
}
function __TURBOPACK__default__export__(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript)");
;
;
;
function arrayAll(select) {
    return function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(select.apply(this, arguments));
    };
}
function __TURBOPACK__default__export__(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](subgroups, parents);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "childMatcher",
    ()=>childMatcher,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(selector) {
    return function() {
        return this.matches(selector);
    };
}
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
;
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
function __TURBOPACK__default__export__(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["childMatcher"])(match)));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
;
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}
function __TURBOPACK__default__export__(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["childMatcher"])(match)));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(match) {
    if (typeof match !== "function") match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i){
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](subgroups, this._parents);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(update) {
    return new Array(update.length);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterNode",
    ()=>EnterNode,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](this._enter || this._groups.map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), this._parents);
}
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return function() {
        return x;
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js [app-ssr] (ecmascript)");
;
;
;
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i){
        if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
        } else {
            enter[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterNode"](parent, data[i]);
        }
    }
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i){
        if (node = group[i]) {
            exit[i] = node;
        }
    }
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i){
        if (node = group[i]) {
            keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
            if (nodeByKeyValue.has(keyValue)) {
                exit[i] = node;
            } else {
                nodeByKeyValue.set(keyValue, node);
            }
        }
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else {
            enter[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterNode"](parent, data[i]);
        }
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i){
        if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
            exit[i] = node;
        }
    }
}
function datum(node) {
    return node.__data__;
}
function __TURBOPACK__default__export__(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0){
            if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
    }
    update = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](this._exit || this._groups.map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), this._parents);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else {
        enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for(; j < m0; ++j){
        merges[j] = groups0[j];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](merges, this._parents);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;){
            if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
    }
    return this;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group[i]) {
                sortgroup[i] = node;
            }
        }
        sortgroup.sort(compareNode);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](sortgroups, this._parents).order();
}
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return Array.from(this);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
    }
    return null;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return !this.node();
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i){
            if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
    }
    return this;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespaces.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "xhtml",
    ()=>xhtml
]);
var xhtml = "http://www.w3.org/1999/xhtml";
const __TURBOPACK__default__export__ = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespaces.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasOwnProperty(prefix) ? {
        space: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)");
;
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function __TURBOPACK__default__export__(name, value) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "styleValue",
    ()=>styleValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js [app-ssr] (ecmascript)");
;
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function __TURBOPACK__default__export__(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function __TURBOPACK__default__export__(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
function __TURBOPACK__default__export__(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function __TURBOPACK__default__export__() {
    return this.each(raise);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function __TURBOPACK__default__export__() {
    return this.each(lower);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespaces.js [app-ssr] (ecmascript)");
;
;
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xhtml"] && document.documentElement.namespaceURI === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xhtml"] ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function __TURBOPACK__default__export__(name) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    var create = typeof name === "function" ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)");
;
;
function constantNull() {
    return null;
}
function __TURBOPACK__default__export__(name, before) {
    var create = typeof name === "function" ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function __TURBOPACK__default__export__() {
    return this.each(remove);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function __TURBOPACK__default__export__(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j){
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
            } else {
                on[++i] = o;
            }
        }
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) for(var j = 0, m = on.length; j < m; ++j){
            if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function __TURBOPACK__default__export__(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j){
            for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) {
                    return o.value;
                }
            }
        }
        return;
    }
    on = value ? onAdd : onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js [app-ssr] (ecmascript)");
;
function dispatchEvent(node, type, params) {
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node), event = window.CustomEvent;
    if (typeof event === "function") {
        event = new event(type, params);
    } else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function __TURBOPACK__default__export__(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function* __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i){
            if (node = group[i]) yield node;
        }
    }
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Selection",
    ()=>Selection,
    "default",
    ()=>__TURBOPACK__default__export__,
    "root",
    ()=>root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChild$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$exit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$join$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$nodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$each$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$classed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$raise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$lower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$append$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$insert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$datum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$iterator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js [app-ssr] (ecmascript)");
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
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectAll: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectChild: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChild$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectChildren: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    enter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    exit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$exit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    join: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$join$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selection: selection_selection,
    order: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    sort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    call: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    nodes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$nodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    node: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    empty: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    each: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$each$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    property: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    classed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$classed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    raise: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$raise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    lower: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$lower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    append: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$append$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    insert: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$insert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    remove: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    clone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    datum: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$datum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    on: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    dispatch: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    [Symbol.iterator]: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$iterator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = selection;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(selector) {
    return typeof selector === "string" ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"]([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"]([
        [
            selector
        ]
    ], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["root"]);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(event, node) {
    event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript) <export default as pointer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript) <export default as namespace>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namespace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript) <export default as matcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript) <export default as selector>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript) <export default as selectorAll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectorAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript) <export styleValue as style>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "style",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nonpassive",
    ()=>nonpassive,
    "nonpassivecapture",
    ()=>nonpassivecapture,
    "nopropagation",
    ()=>nopropagation
]);
const nonpassive = {
    passive: false
};
const nonpassivecapture = {
    capture: true,
    passive: false
};
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "yesdrag",
    ()=>yesdrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(view) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
    } else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", null);
    } else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export default as dragDisable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragDisable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export yesdrag as dragEnable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragEnable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yesdrag"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DragEvent
]);
function DragEvent(type, { sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        subject: {
            value: subject,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        identifier: {
            value: identifier,
            enumerable: true,
            configurable: true
        },
        active: {
            value: active,
            enumerable: true,
            configurable: true
        },
        x: {
            value: x,
            enumerable: true,
            configurable: true
        },
        y: {
            value: y,
            enumerable: true,
            configurable: true
        },
        dx: {
            value: dx,
            enumerable: true,
            configurable: true
        },
        dy: {
            value: dy,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function defaultContainer() {
    return this.parentNode;
}
function defaultSubject(event, d) {
    return d == null ? {
        x: event.x,
        y: event.y
    } : d;
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
        selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassive"]).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
        if (touchending || !filter.call(this, event, d)) return;
        var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
        if (!gesture) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.drag", mousemoved, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]).on("mouseup.drag", mouseupped, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
    }
    function mousemoved(event) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        if (!mousemoving) {
            var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
            mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
    }
    function mouseupped(event) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.drag mouseup.drag", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yesdrag"])(event.view, mousemoving);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
        if (!filter.call(this, event, d)) return;
        var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
        for(i = 0; i < n; ++i){
            if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
                gesture("start", event, touches[i]);
            }
        }
    }
    function touchmoved(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        for(i = 0; i < n; ++i){
            if (gesture = gestures[touches[i].identifier]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
                gesture("drag", event, touches[i]);
            }
        }
    }
    function touchended(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, 500); // Ghost clicks are delayed!
        for(i = 0; i < n; ++i){
            if (gesture = gestures[touches[i].identifier]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
                gesture("end", event, touches[i]);
            }
        }
    }
    function beforestart(that, container, event, d, identifier, touch) {
        var dispatch = listeners.copy(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(touch || event, container), dx, dy, s;
        if ((s = subject.call(that, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]("beforestart", {
            sourceEvent: event,
            target: drag,
            identifier,
            active,
            x: p[0],
            y: p[1],
            dx: 0,
            dy: 0,
            dispatch
        }), d)) == null) return;
        dx = s.x - p[0] || 0;
        dy = s.y - p[1] || 0;
        return function gesture(type, event, touch) {
            var p0 = p, n;
            switch(type){
                case "start":
                    gestures[identifier] = gesture, n = active++;
                    break;
                case "end":
                    delete gestures[identifier], --active; // falls through
                case "drag":
                    p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(touch || event, container), n = active;
                    break;
            }
            dispatch.call(type, that, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: event,
                subject: s,
                target: drag,
                identifier,
                active: n,
                x: p[0] + dx,
                y: p[1] + dy,
                dx: p[0] - p0[0],
                dy: p[1] - p0[1],
                dispatch
            }), d);
        };
    }
    drag.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), drag) : filter;
    };
    drag.container = function(_) {
        return arguments.length ? (container = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_), drag) : container;
    };
    drag.subject = function(_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_), drag) : subject;
    };
    drag.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), drag) : touchable;
    };
    drag.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript) <export default as drag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var epsilon2 = 1e-12;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const __TURBOPACK__default__export__ = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript) <export default as interpolateZoom>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateZoom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "identity",
    ()=>identity
]);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function __TURBOPACK__default__export__(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCss",
    ()=>parseCss,
    "parseSvg",
    ()=>parseSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js [app-ssr] (ecmascript)");
;
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
    value = value.matrix;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateTransformCss",
    ()=>interpolateTransformCss,
    "interpolateTransformSvg",
    ()=>interpolateTransformSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js [app-ssr] (ecmascript)");
;
;
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(xa, xb)
            }, {
                i: i - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ya, yb)
            });
        } else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
        }
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a, b)
            });
        } else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
        }
    }
    function skewX(a, b, s, q) {
        if (a !== b) {
            q.push({
                i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a, b)
            });
        } else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
        }
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(xa, xb)
            }, {
                i: i - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSvg"], ", ", ")", ")");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript) <export default as interpolateNumber>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basis",
    ()=>basis,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function __TURBOPACK__default__export__(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basisClosed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basis.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["basis"])((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nogamma,
    "gamma",
    ()=>gamma,
    "hue",
    ()=>hue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js [app-ssr] (ecmascript)");
;
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "rgbBasis",
    ()=>rgbBasis,
    "rgbBasisClosed",
    ()=>rgbBasisClosed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basisClosed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = function rgbGamma(y) {
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gamma"])(y);
    function rgb(start, end) {
        var r = color((start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgb"])(start)).r, (end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgb"])(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgb"])(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var rgbBasisClosed = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript) <export default as interpolateRgb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateRgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
;
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function __TURBOPACK__default__export__(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript) <export default as interpolateString>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer,
    "now",
    ()=>now,
    "timer",
    ()=>timer,
    "timerFlush",
    ()=>timerFlush
]);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1){
        if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
        } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(callback, delay, time) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timer"];
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript) <export default as timeout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATED",
    ()=>CREATED,
    "ENDED",
    ()=>ENDED,
    "ENDING",
    ()=>ENDING,
    "RUNNING",
    ()=>RUNNING,
    "SCHEDULED",
    ()=>SCHEDULED,
    "STARTED",
    ()=>STARTED,
    "STARTING",
    ()=>STARTING,
    "default",
    ()=>__TURBOPACK__default__export__,
    "get",
    ()=>get,
    "init",
    ()=>init,
    "set",
    ()=>set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript) <export default as timeout>");
;
;
var emptyOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function __TURBOPACK__default__export__(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
}
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timer"])(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__["timeout"])(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__["timeout"])(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i){
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
                tween[++j] = o;
            }
        }
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n){
            tween[i].call(node, t);
        }
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTING"] && schedule.state < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDING"];
        schedule.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDED"];
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    return this.each(function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, name);
    });
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "tweenValue",
    ()=>tweenValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i){
                if (tween1[i].name === name) {
                    tween1 = tween1.slice();
                    tween1.splice(i, 1);
                    break;
                }
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i){
                if (tween1[i].name === name) {
                    tween1[i] = t;
                    break;
                }
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function __TURBOPACK__default__export__(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) {
                return t.value;
            }
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id).value[name];
    };
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js [app-ssr] (ecmascript) <export default as color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript) <export default as interpolateRgb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateString$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript) <export default as interpolateString>");
;
;
function __TURBOPACK__default__export__(a, b) {
    var c;
    return (typeof b === "number" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"] : b instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__["interpolateRgb"] : (c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"])(b)) ? (b = c, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__["interpolateRgb"]) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateString$3e$__["interpolateString"])(a, b);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript) <export default as namespace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js [app-ssr] (ecmascript)");
;
;
;
;
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function __TURBOPACK__default__export__(name, value) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__["namespace"])(name), i = fullname === "transform" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateTransformSvg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tweenValue"])(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript) <export default as namespace>");
;
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__["namespace"])(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function delayFunction(id, value) {
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"])(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"])(this, id).delay = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).delay;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function durationFunction(id, value) {
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).duration = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).duration;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).ease = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).ease;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).ease = v;
    };
}
function __TURBOPACK__default__export__(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__matcher$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript) <export default as matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(match) {
    if (typeof match !== "function") match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__matcher$3e$__["matcher"])(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i){
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](subgroups, this._parents, this._name, this._id);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for(; j < m0; ++j){
        merges[j] = groups0[j];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](merges, this._parents, this._name, this._id);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"];
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function __TURBOPACK__default__export__(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function __TURBOPACK__default__export__() {
    return this.on("end.remove", removeFunction(this._id));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selector$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript) <export default as selector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
;
;
function __TURBOPACK__default__export__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selector$3e$__["selector"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i){
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(subgroup[i], name, id, i, subgroup, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id));
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](subgroups, this._parents, name, id);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selectorAll$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript) <export default as selectorAll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
;
;
function __TURBOPACK__default__export__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selectorAll$3e$__["selectorAll"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id), k = 0, l = children.length; k < l; ++k){
                    if (child = children[k]) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(child, name, id, k, children, inherit);
                    }
                }
                subgroups.push(children);
                parents.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](subgroups, parents, name, id);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>");
;
var Selection = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.constructor;
function __TURBOPACK__default__export__() {
    return new Selection(this._groups, this._parents);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript) <export styleValue as style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js [app-ssr] (ecmascript)");
;
;
;
;
;
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name), string1 = (this.style.removeProperty(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function __TURBOPACK__default__export__(name, value, priority) {
    var i = (name += "") === "transform" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateTransformCss"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tweenValue"])(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
;
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function __TURBOPACK__default__export__(value) {
    return this.tween("text", typeof value === "function" ? textFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tweenValue"])(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    var name = this._name, id0 = this._id, id1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newId"])();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                var inherit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id0);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](groups, this._parents, name, id1);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>Transition,
    "default",
    ()=>transition,
    "newId",
    ()=>newId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attrTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$delay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$duration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$ease$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$easeVarying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$styleTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$textTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js [app-ssr] (ecmascript)");
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
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"])().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectAll: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selection: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    transition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attrTween: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attrTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    styleTween: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$styleTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    textTween: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$textTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    remove: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tween: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    delay: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$delay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$duration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ease: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$ease$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    easeVarying: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$easeVarying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    end: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$ease$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript) <export cubicInOut as easeCubicInOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)");
;
;
;
;
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$ease$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__["easeCubicInOut"]
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) {
            throw new Error(`transition ${id} not found`);
        }
    }
    return timing;
}
function __TURBOPACK__default__export__(name) {
    var id, timing;
    if (name instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"]) {
        id = name._id, name = name._name;
    } else {
        id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newId"])(), (timing = defaultTiming).time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$timer$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(), name = name == null ? null : name + "";
    }
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, name, id, i, group, timing || inherit(node, id));
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](groups, this._parents, name, id);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js [app-ssr] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.interrupt = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.transition = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/index.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript) <export default as interrupt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interrupt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "extend",
    ()=>extend
]);
function __TURBOPACK__default__export__(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Color",
    ()=>Color,
    "Rgb",
    ()=>Rgb,
    "brighter",
    ()=>brighter,
    "darker",
    ()=>darker,
    "default",
    ()=>color,
    "hsl",
    ()=>hsl,
    "hslConvert",
    ()=>hslConvert,
    "rgb",
    ()=>rgb,
    "rgbConvert",
    ()=>rgbConvert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js [app-ssr] (ecmascript)");
;
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null) // invalid hex
     : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Rgb, rgb, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Hsl, hsl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js [app-ssr] (ecmascript) <export default as color>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$color$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicIn",
    ()=>cubicIn,
    "cubicInOut",
    ()=>cubicInOut,
    "cubicOut",
    ()=>cubicOut
]);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript) <export cubicInOut as easeCubicInOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeCubicInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$ease$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicInOut"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$ease$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZoomEvent
]);
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transform",
    ()=>Transform,
    "default",
    ()=>transform,
    "identity",
    ()=>identity
]);
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return identity;
    return node.__zoom;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nopropagation",
    ()=>nopropagation
]);
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export default as dragDisable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export yesdrag as dragEnable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript) <export default as interpolateZoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript) <export default as interrupt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function defaultTransform() {
    return this.__zoom || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__["interpolateZoom"], listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$dispatch$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", defaultTransform);
        if (collection !== selection) {
            schedule(collection, transform, point, event);
        } else {
            selection.interrupt().each(function() {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
        }
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"].translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"](k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"](transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"](k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this.that).datum();
            listeners.call(type, this.that, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
                g.mouse[1] = t.invert(g.mouse[0] = p);
            }
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__["dragDisable"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
        g.start();
        function mousemoved(event) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$drag$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__["dragEnable"])(event.view, g.moved);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        if (duration > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).transition().duration(duration).call(schedule, t1, p0, event);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$transition$40$3$2e$0$2e$1_d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$selection$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript) <export identity as zoomIdentity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoomIdentity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript) <export default as zoom>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$d3$2d$zoom$40$3$2e$0$2e$0$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+background@11.3._c76a4a15777c059e4de0984439ec21e9/node_modules/@reactflow/background/dist/esm/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Background",
    ()=>Background$1,
    "BackgroundVariant",
    ()=>BackgroundVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+core@11.11.4_@ty_ace34f89a0ccc0e23328187f1ccf56d5/node_modules/@reactflow/core/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/shallow.mjs [app-ssr] (ecmascript)");
;
;
;
;
var BackgroundVariant;
(function(BackgroundVariant) {
    BackgroundVariant["Lines"] = "lines";
    BackgroundVariant["Dots"] = "dots";
    BackgroundVariant["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
function LinePattern({ color, dimensions, lineWidth }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        stroke: color,
        strokeWidth: lineWidth,
        d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
    });
}
function DotPattern({ color, radius }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: radius,
        cy: radius,
        r: radius,
        fill: color
    });
}
const defaultColor = {
    [BackgroundVariant.Dots]: '#91919a',
    [BackgroundVariant.Lines]: '#eee',
    [BackgroundVariant.Cross]: '#e2e2e2'
};
const defaultSize = {
    [BackgroundVariant.Dots]: 1,
    [BackgroundVariant.Lines]: 1,
    [BackgroundVariant.Cross]: 6
};
const selector = (s)=>({
        transform: s.transform,
        patternId: `pattern-${s.rfId}`
    });
function Background({ id, variant = BackgroundVariant.Dots, // only used for dots and cross
gap = 20, // only used for lines and cross
size, lineWidth = 1, offset = 2, color, style, className }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { transform, patternId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(selector, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]);
    const patternColor = color || defaultColor[variant];
    const patternSize = size || defaultSize[variant];
    const isDots = variant === BackgroundVariant.Dots;
    const isCross = variant === BackgroundVariant.Cross;
    const gapXY = Array.isArray(gap) ? gap : [
        gap,
        gap
    ];
    const scaledGap = [
        gapXY[0] * transform[2] || 1,
        gapXY[1] * transform[2] || 1
    ];
    const scaledSize = patternSize * transform[2];
    const patternDimensions = isCross ? [
        scaledSize,
        scaledSize
    ] : scaledGap;
    const patternOffset = isDots ? [
        scaledSize / offset,
        scaledSize / offset
    ] : [
        patternDimensions[0] / offset,
        patternDimensions[1] / offset
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__background',
            className
        ]),
        style: {
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
        },
        ref: ref,
        "data-testid": "rf__background"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("pattern", {
        id: patternId + id,
        x: transform[0] % scaledGap[0],
        y: transform[1] % scaledGap[1],
        width: scaledGap[0],
        height: scaledGap[1],
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${patternOffset[0]},-${patternOffset[1]})`
    }, isDots ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(DotPattern, {
        color: patternColor,
        radius: scaledSize / offset
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(LinePattern, {
        dimensions: patternDimensions,
        color: patternColor,
        lineWidth: lineWidth
    })), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: `url(#${patternId + id})`
    }));
}
Background.displayName = 'Background';
var Background$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(Background);
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+controls@11.2.14_f56a2eb8ac5edbf6e68dce1b3a006728/node_modules/@reactflow/controls/dist/esm/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlButton",
    ()=>ControlButton,
    "Controls",
    ()=>Controls$1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/zustand@4.5.7_@types+react@19.1.13_react@19.1.0/node_modules/zustand/esm/shallow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+core@11.11.4_@ty_ace34f89a0ccc0e23328187f1ccf56d5/node_modules/@reactflow/core/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
function PlusIcon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
    }));
}
function MinusIcon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 5"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M0 0h32v4.2H0z"
    }));
}
function FitViewIcon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 30"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
    }));
}
function LockIcon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25 32"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
    }));
}
function UnlockIcon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25 32"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
    }));
}
const ControlButton = ({ children, className, ...rest })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__controls-button',
            className
        ]),
        ...rest
    }, children);
ControlButton.displayName = 'ControlButton';
const selector = (s)=>({
        isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
        minZoomReached: s.transform[2] <= s.minZoom,
        maxZoomReached: s.transform[2] >= s.maxZoom
    });
const Controls = ({ style, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, position = 'bottom-left' })=>{
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreApi"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isInteractive, minZoomReached, maxZoomReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(selector, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]);
    const { zoomIn, zoomOut, fitView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReactFlow"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsVisible(true);
    }, []);
    if (!isVisible) {
        return null;
    }
    const onZoomInHandler = ()=>{
        zoomIn();
        onZoomIn?.();
    };
    const onZoomOutHandler = ()=>{
        zoomOut();
        onZoomOut?.();
    };
    const onFitViewHandler = ()=>{
        fitView(fitViewOptions);
        onFitView?.();
    };
    const onToggleInteractivity = ()=>{
        store.setState({
            nodesDraggable: !isInteractive,
            nodesConnectable: !isInteractive,
            elementsSelectable: !isInteractive
        });
        onInteractiveChange?.(!isInteractive);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Panel"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__controls',
            className
        ]),
        position: position,
        style: style,
        "data-testid": "rf__controls"
    }, showZoom && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ControlButton, {
        onClick: onZoomInHandler,
        className: "react-flow__controls-zoomin",
        title: "zoom in",
        "aria-label": "zoom in",
        disabled: maxZoomReached
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(PlusIcon, null)), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ControlButton, {
        onClick: onZoomOutHandler,
        className: "react-flow__controls-zoomout",
        title: "zoom out",
        "aria-label": "zoom out",
        disabled: minZoomReached
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(MinusIcon, null))), showFitView && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ControlButton, {
        className: "react-flow__controls-fitview",
        onClick: onFitViewHandler,
        title: "fit view",
        "aria-label": "fit view"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(FitViewIcon, null)), showInteractive && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ControlButton, {
        className: "react-flow__controls-interactive",
        onClick: onToggleInteractivity,
        title: "toggle interactivity",
        "aria-label": "toggle interactivity"
    }, isInteractive ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UnlockIcon, null) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(LockIcon, null)), children);
};
Controls.displayName = 'Controls';
var Controls$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(Controls);
;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+functions-js@2.4.6/node_modules/@supabase/functions-js/dist/module/helper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === 'undefined') {
        _fetch = (...args)=>__turbopack_context__.A("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript, async loader)").then(({ default: fetch1 })=>fetch1(...args));
    } else {
        _fetch = fetch;
    }
    return (...args)=>_fetch(...args);
}; //# sourceMappingURL=helper.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+functions-js@2.4.6/node_modules/@supabase/functions-js/dist/module/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+functions-js@2.4.6/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+functions-js@2.4.6/node_modules/@supabase/functions-js/dist/module/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+functions-js@2.4.6/node_modules/@supabase/functions-js/dist/module/types.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionRegion"].Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */ invoke(functionName, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { headers, method, body: functionArgs } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                    region = this.region;
                }
                // Add region as query parameter using URL API
                const url = new URL(`${this.url}/${functionName}`);
                if (region && region !== 'any') {
                    _headers['x-region'] = region;
                    url.searchParams.set('forceFunctionRegion', region);
                }
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                    if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    } else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    } else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                }
                const response = yield this.fetch(url.toString(), {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body
                }).catch((fetchError)=>{
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                } else if (responseType === 'application/octet-stream') {
                    data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                    data = response;
                } else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                } else {
                    // default to text
                    data = yield response.text();
                }
                return {
                    data,
                    error: null,
                    response
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                    response: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsHttpError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsRelayError"] ? error.context : undefined
                };
            }
        });
    }
} //# sourceMappingURL=FunctionsClient.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var conversions = {};
module.exports = conversions;
function sign(x) {
    return x < 0 ? -1 : 1;
}
function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}
function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }
            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
                x += moduloVal;
            } else if (x === -0) {
                return 0;
            }
        }
        return x;
    };
}
conversions["void"] = function() {
    return undefined;
};
conversions["boolean"] = function(val) {
    return !!val;
};
conversions["byte"] = createNumberConversion(8, {
    unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
    unsigned: true
});
conversions["short"] = createNumberConversion(16, {
    unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true
});
conversions["long"] = createNumberConversion(32, {
    unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
    unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
};
conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }
    return x;
};
// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }
    return String(V);
};
conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }
    return x;
};
conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }
    return U.join('');
};
conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }
    return V;
};
conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }
    return V;
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i){
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
};
module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");
module.exports.wrapperForImpl = function(impl) {
    return impl[module.exports.wrapperSymbol];
};
module.exports.implForWrapper = function(wrapper) {
    return wrapper[module.exports.implSymbol];
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const punycode = __turbopack_context__.r("[externals]/punycode [external] (punycode, cjs)");
const tr46 = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/index.js [app-ssr] (ecmascript)");
const specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return punycode.ucs2.decode(str).length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = "0" + hex;
    }
    return "%" + hex;
}
function utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i){
        str += percentEncode(buf[i]);
    }
    return str;
}
function utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) {
            output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else {
            output.push(input[i]);
        }
    }
    return new Buffer(output).toString();
}
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function isPathPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
const extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
function percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
    }
    return cStr;
}
function parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return input;
    }
    const numbers = [];
    for (const part of parts){
        if (part === "") {
            return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
            return input;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = "." + output;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === 58) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const seqResult = findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) {
        return parseOpaqueHost(input);
    }
    const domain = utf8PercentDecode(input);
    const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) {
        return failure;
    }
    if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
    }
    const ipv4Host = parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
    }
    return asciiDomain;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
    }
    let output = "";
    const decoded = punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i){
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
    }
    return output;
}
function findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 0) {
            if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
            }
            currStart = null;
            currLen = 0;
        } else {
            if (currStart === null) {
                currStart = i;
            }
            ++currLen;
        }
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
    }
    return host;
}
function trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function shortenPath(url) {
    const path = url.path;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
    } else if (c === 58) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
            return false;
        }
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
    } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) {
        this.state = "relative slash";
    } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === 47) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
            return false;
        }
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === 91) {
            this.arrFlag = true;
        } else if (c === 93) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
            } else {
                this.parseError = true;
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            } else {
                this.url.host = this.base.host;
            }
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) {
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
            while(this.url.path.length > 1 && this.url.path[0] === ""){
                this.parseError = true;
                this.url.path.shift();
            }
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) {
            this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
            this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i){
            if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) {
                this.url.query += percentEncode(buffer[i]);
            } else {
                this.url.query += String.fromCodePoint(buffer[i]);
            }
        }
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) {} else if (c === 0x0) {
        this.parseError = true;
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += ":" + url.password;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += ":" + url.port;
        }
    } else if (url.host === null && url.scheme === "file") {
        output += "//";
    }
    if (url.cannotBeABaseURL) {
        output += url.path[0];
    } else {
        for (const string of url.path){
            output += "/" + string;
        }
    }
    if (url.query !== null) {
        output += "?" + url.query;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += ":" + tuple.port;
    }
    return result;
}
module.exports.serializeURL = serializeURL;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return "failure";
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = "";
    const decoded = punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i){
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.setThePassword = function(url, password) {
    url.password = "";
    const decoded = punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i){
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)");
exports.implementation = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        usm.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) {
            return this._url.path[0];
        }
        if (this._url.path.length === 0) {
            return "";
        }
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)");
const Impl = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js [app-ssr] (ecmascript)");
const impl = utils.implSymbol;
function URL(url) {
    if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 2; ++i){
        args[i] = arguments[i];
    }
    args[0] = conversions["USVString"](args[0]);
    if (args[1] !== undefined) {
        args[1] = conversions["USVString"](args[1]);
    }
    module.exports.setup(this, args);
}
URL.prototype.toJSON = function toJSON() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 0; ++i){
        args[i] = arguments[i];
    }
    return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
    get () {
        return this[impl].href;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
    },
    enumerable: true,
    configurable: true
});
URL.prototype.toString = function() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    return this.href;
};
Object.defineProperty(URL.prototype, "origin", {
    get () {
        return this[impl].origin;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "protocol", {
    get () {
        return this[impl].protocol;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "username", {
    get () {
        return this[impl].username;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "password", {
    get () {
        return this[impl].password;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "host", {
    get () {
        return this[impl].host;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hostname", {
    get () {
        return this[impl].hostname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "port", {
    get () {
        return this[impl].port;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "pathname", {
    get () {
        return this[impl].pathname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "search", {
    get () {
        return this[impl].search;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hash", {
    get () {
        return this[impl].hash;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
    },
    enumerable: true,
    configurable: true
});
module.exports = {
    is (obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
    },
    create (constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
    },
    setup (obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
    },
    interface: URL,
    expose: {
        Window: {
            URL: URL
        },
        Worker: {
            URL: URL
        }
    }
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.URL = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js [app-ssr] (ecmascript)").interface;
exports.serializeURL = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeURL;
exports.serializeURLOrigin = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeURLOrigin;
exports.basicURLParse = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").basicURLParse;
exports.setTheUsername = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").setTheUsername;
exports.setThePassword = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").setThePassword;
exports.serializeHost = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeHost;
exports.serializeInteger = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeInteger;
exports.parseURL = __turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").parseURL;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var Stream = _interopDefault(__turbopack_context__.r("[externals]/stream [external] (stream, cjs)"));
var http = _interopDefault(__turbopack_context__.r("[externals]/http [external] (http, cjs)"));
var Url = _interopDefault(__turbopack_context__.r("[externals]/url [external] (url, cjs)"));
var whatwgUrl = _interopDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js [app-ssr] (ecmascript)"));
var https = _interopDefault(__turbopack_context__.r("[externals]/https [external] (https, cjs)"));
var zlib = _interopDefault(__turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)"));
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;
const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');
class Blob {
    constructor(){
        this[TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                    buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                    buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                    buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                    buffer = element[BUFFER];
                } else {
                    buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
        }
    }
    get size() {
        return this[BUFFER].length;
    }
    get type() {
        return this[TYPE];
    }
    text() {
        return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new Readable();
        readable._read = function() {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) {
            relativeStart = 0;
        } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        } else {
            relativeStart = Math.min(start, size);
        }
        if (end === undefined) {
            relativeEnd = size;
        } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        } else {
            relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], {
            type: arguments[2]
        });
        blob[BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties(Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) {
        this.code = this.errno = systemError.code;
    }
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;
const INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) {
        // body is undefined or null
        body = null;
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString());
    } else if (isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof Stream) ;
    else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof Stream) {
        body.on('error', function(err) {
            const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
            _this[INTERNALS].error = error;
        });
    }
}
Body.prototype = {
    get body () {
        return this[INTERNALS].body;
    },
    get bodyUsed () {
        return this[INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new Blob([], {
                type: ct.toLowerCase()
            }), {
                [BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
            return convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)){
        // istanbul ignore else: future proof
        if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
        }
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    // body is null
    if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is blob
    if (isBlob(body)) {
        body = body.stream();
    }
    // body is buffer
    if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
    }
    // istanbul ignore if: should never happen
    if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) {
            resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
            }, _this4.timeout);
        }
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else {
                // other errors, such as incorrect content-encoding
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) {
                return;
            }
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) {
                return;
            }
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
    {
        throw new Error('The package `encoding` must be installed to use the textConverted() function');
    }
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
    }
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) {
                res.pop(); // drop last quote
            }
        }
        if (res) {
            res = /charset=(.*)/i.exec(res.pop());
        }
    }
    // xml
    if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
        }
    }
    // turn raw buffers into a single utf-8 buffer
    return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
        return false;
    }
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof Stream && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
    if (body === null) {
        // body is null
        return null;
    } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8';
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isBlob(body)) {
        // body is blob
        return body.type || null;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null;
    } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        return null;
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null;
    } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof Stream) {
        // body is stream
        // can't really do much about this
        return null;
    } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8';
    }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        return 0;
    } else if (isBlob(body)) {
        return body.size;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length;
    } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
            // 2.x
            return body.getLengthSync();
        }
        return null;
    } else {
        // body is stream
        return null;
    }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}
// expose Promise
Body.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`);
    }
}
function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
    }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) {
            return key;
        }
    }
    return undefined;
}
const MAP = Symbol('map');
class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[MAP] = Object.create(null);
        if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames){
                for (const value of rawHeaders[headerName]){
                    this.append(headerName, value);
                }
            }
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                        throw new TypeError('Each header pair must be iterable');
                    }
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    this.append(pair[0], pair[1]);
                }
            } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)){
                    const value = init[key];
                    this.append(key, value);
                }
            }
        } else {
            throw new TypeError('Provided initializer must be an object');
        }
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === undefined) {
            return null;
        }
        return this[MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            this[MAP][key].push(value);
        } else {
            this[MAP][name] = [
                value
            ];
        }
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            delete this[MAP][key];
        }
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
    }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Headers.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[MAP][k].join(', ')
        ];
    });
}
const INTERNAL = Symbol('internal');
function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
        target,
        kind,
        index: 0
    };
    return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
            return {
                value: undefined,
                done: true
            };
        }
        this[INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = find(headers[MAP], 'Host');
    if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)){
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]){
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers[MAP][name] === undefined) {
                    headers[MAP][name] = [
                        val
                    ];
                } else {
                    headers[MAP][name].push(val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [
                obj[name]
            ];
        }
    }
    return headers;
}
const INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[INTERNALS$1].url || '';
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const INTERNALS$2 = Symbol('Request internals');
const URL = Url.URL || whatwgUrl.URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
    }
    // Fallback to old implementation for arbitrary URLs
    return parse_url(urlStr);
}
const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
    return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}
function isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!isRequest(input)) {
            if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
            } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
            }
            input = {};
        } else {
            parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[INTERNALS$2].method;
    }
    get url() {
        return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[INTERNALS$2].headers;
    }
    get redirect() {
        return this[INTERNALS$2].redirect;
    }
    get signal() {
        return this[INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new Request(this);
    }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported');
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
    }
    if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
        throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate');
    }
    let agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close');
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
const URL$1 = Url.URL || whatwgUrl.URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new URL$1(original).hostname;
    const dest = new URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new URL$1(original).protocol;
    const dest = new URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
    // allow custom promise
    if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    }
    Body.Promise = fetch.Promise;
    // wrap http.request into fetch
    return new fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? https : http).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof Stream.Readable) {
                destroyStream(request.body, error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) {
            req.once('socket', function(socket) {
                reqTimeout = setTimeout(function() {
                    reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                    finalize();
                }, request.timeout);
            });
        }
        req.on('error', function(err) {
            reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) {
                destroyStream(response.body, err);
            }
            finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) {
                return;
            }
            if (response && response.body) {
                destroyStream(response.body, err);
            }
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            req.on('socket', function(s) {
                s.addListener('close', function(hadError) {
                    // if a data listener is still present we didn't end cleanly
                    const hasDataListener = s.listenerCount('data') > 0;
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                        const err = new Error('Premature close');
                        err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', err);
                    }
                });
            });
        }
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) {
                            // handle corrupted header
                            try {
                                headers.set('Location', locationURL);
                            } catch (err) {
                                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                reject(err);
                            }
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) {
                            break;
                        }
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new Headers(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                            for (const name of [
                                'authorization',
                                'www-authenticate',
                                'cookie',
                                'cookie2'
                            ]){
                                requestOpts.headers.delete(name);
                            }
                        }
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                            reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve(fetch(new Request(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: zlib.Z_SYNC_FLUSH,
                finishFlush: zlib.Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(zlib.createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = body.pipe(zlib.createInflate());
                    } else {
                        body = body.pipe(zlib.createInflateRaw());
                    }
                    response = new Response(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new Response(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
                body = body.pipe(zlib.createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new Response(body, response_options);
            resolve(response);
        });
        writeToStream(req, request);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
            response.once('close', function(hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    errorCallback(err);
                }
            });
        }
    });
}
function destroyStream(stream, err) {
    if (stream.destroy) {
        stream.destroy(err);
    } else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
fetch.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */ class PostgrestError extends Error {
    constructor(context){
        super(context.message);
        this.name = 'PostgrestError';
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError; //# sourceMappingURL=PostgrestError.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// @ts-ignore
const node_fetch_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript)"));
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-ssr] (ecmascript)"));
class PostgrestBuilder {
    constructor(builder){
        var _a, _b;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        } else if (typeof fetch === 'undefined') {
            this.fetch = node_fetch_1.default;
        } else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Set an HTTP header for the request.
     */ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) {
        // skip
        } else if ([
            'GET',
            'HEAD'
        ].includes(this.method)) {
            this.headers.set('Accept-Profile', this.schema);
        } else {
            this.headers.set('Content-Profile', this.schema);
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers.set('Content-Type', 'application/json');
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c, _d;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') {
                    // Prefer: return=minimal
                    } else if (this.headers.get('Accept') === 'text/csv') {
                        data = body;
                    } else if (this.headers.get('Accept') && ((_a = this.headers.get('Accept')) === null || _a === void 0 ? void 0 : _a.includes('application/vnd.pgrst.plan+text'))) {
                        data = body;
                    } else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_b = this.headers.get('Prefer')) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned'
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    } else if (data.length === 1) {
                        data = data[0];
                    } else {
                        data = null;
                    }
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                } catch (_e) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    } else {
                        error = {
                            message: body
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw new PostgrestError_1.default(error);
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError)=>{
                var _a, _b, _c;
                return {
                    error: {
                        message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ''}`,
                        hint: '',
                        code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ''}`
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ''
                };
            });
        }
        return res.then(onfulfilled, onrejected);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */ overrideTypes() {
        return this;
    }
}
exports.default = PostgrestBuilder; //# sourceMappingURL=PostgrestBuilder.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-ssr] (ecmascript)"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        this.headers.append('Prefer', 'return=representation');
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers.set('Accept', 'application/json');
        } else {
            this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers.set('Accept', 'text/csv');
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers.set('Accept', 'application/geo+json');
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text' } = {}) {
        var _a;
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null
        ].filter(Boolean).join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers.get('Accept')) !== null && _a !== void 0 ? _a : 'application/json';
        this.headers.set('Accept', `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === 'json') {
            return this;
        } else {
            return this;
        }
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        this.headers.append('Prefer', 'tx=rollback');
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */ maxAffected(value) {
        this.headers.append('Prefer', 'handling=strict');
        this.headers.append('Prefer', `max-affected=${value}`);
        return this;
    }
}
exports.default = PostgrestTransformBuilder; //# sourceMappingURL=PostgrestTransformBuilder.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-ssr] (ecmascript)"));
class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && new RegExp('[,()]').test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        } else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        } else if (type === 'phrase') {
            typePart = 'ph';
        } else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder; //# sourceMappingURL=PostgrestFilterBuilder.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)"));
class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch: fetch1 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, { head = false, count } = {}) {
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', `missing=default`);
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        this.headers.append('Prefer', `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`);
        if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', 'missing=default');
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        var _a;
        const method = 'PATCH';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        var _a;
        const method = 'DELETE';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestQueryBuilder; //# sourceMappingURL=PostgrestQueryBuilder.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-ssr] (ecmascript)"));
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)"));
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */ class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers = {}, schema, fetch: fetch1 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder_1.default(url, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _a;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? 'HEAD' : 'GET';
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(',')}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = 'POST';
            body = args;
        }
        const headers = new Headers(this.headers);
        if (count) {
            headers.set('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestClient; //# sourceMappingURL=PostgrestClient.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
// Always update wrapper.mjs when updating this file.
const PostgrestClient_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-ssr] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-ssr] (ecmascript)"));
exports.PostgrestError = PostgrestError_1.default;
exports.default = {
    PostgrestClient: PostgrestClient_1.default,
    PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
    PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
    PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
    PostgrestBuilder: PostgrestBuilder_1.default,
    PostgrestError: PostgrestError_1.default
}; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-ssr] (ecmascript)");
;
const { PostgrestClient, PostgrestQueryBuilder, PostgrestFilterBuilder, PostgrestTransformBuilder, PostgrestBuilder, PostgrestError } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
;
const __TURBOPACK__default__export__ = {
    PostgrestClient,
    PostgrestQueryBuilder,
    PostgrestFilterBuilder,
    PostgrestTransformBuilder,
    PostgrestBuilder,
    PostgrestError
};
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocketFactory",
    ()=>WebSocketFactory,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class WebSocketFactory {
    static detectEnvironment() {
        var _a;
        if (typeof WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: WebSocket
            };
        }
        if (typeof globalThis !== 'undefined' && typeof globalThis.WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: globalThis.WebSocket
            };
        }
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket
            };
        }
        if (typeof globalThis !== 'undefined' && typeof globalThis.WebSocketPair !== 'undefined' && typeof globalThis.WebSocket === 'undefined') {
            return {
                type: 'cloudflare',
                error: 'Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.',
                workaround: 'Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.'
            };
        }
        if (typeof globalThis !== 'undefined' && globalThis.EdgeRuntime || typeof navigator !== 'undefined' && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes('Vercel-Edge'))) {
            return {
                type: 'unsupported',
                error: 'Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.',
                workaround: 'Use serverless functions or a different deployment target for WebSocket functionality.'
            };
        }
        if (typeof process !== 'undefined') {
            // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
            const processVersions = process['versions'];
            if (processVersions && processVersions['node']) {
                // Remove 'v' prefix if present and parse the major version
                const versionString = processVersions['node'];
                const nodeVersion = parseInt(versionString.replace(/^v/, '').split('.')[0]);
                // Node.js 22+ should have native WebSocket
                if (nodeVersion >= 22) {
                    // Check if native WebSocket is available (should be in Node.js 22+)
                    if (typeof globalThis.WebSocket !== 'undefined') {
                        return {
                            type: 'native',
                            constructor: globalThis.WebSocket
                        };
                    }
                    // If not available, user needs to provide it
                    return {
                        type: 'unsupported',
                        error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
                        workaround: 'Provide a WebSocket implementation via the transport option.'
                    };
                }
                // Node.js < 22 doesn't have native WebSocket
                return {
                    type: 'unsupported',
                    error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
                    workaround: 'For Node.js < 22, install "ws" package and provide it via the transport option:\n' + 'import ws from "ws"\n' + 'new RealtimeClient(url, { transport: ws })'
                };
            }
        }
        return {
            type: 'unsupported',
            error: 'Unknown JavaScript runtime without WebSocket support.',
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        };
    }
    static getWebSocketConstructor() {
        const env = this.detectEnvironment();
        if (env.constructor) {
            return env.constructor;
        }
        let errorMessage = env.error || 'WebSocket not supported in this environment.';
        if (env.workaround) {
            errorMessage += `\n\nSuggested solution: ${env.workaround}`;
        }
        throw new Error(errorMessage);
    }
    static createWebSocket(url, protocols) {
        const WS = this.getWebSocketConstructor();
        return new WS(url, protocols);
    }
    static isWebSocketSupported() {
        try {
            const env = this.detectEnvironment();
            return env.type === 'native' || env.type === 'ws';
        } catch (_a) {
            return false;
        }
    }
}
const __TURBOPACK__default__export__ = WebSocketFactory;
 //# sourceMappingURL=websocket-factory.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.15.5'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHANNEL_EVENTS",
    ()=>CHANNEL_EVENTS,
    "CHANNEL_STATES",
    ()=>CHANNEL_STATES,
    "CONNECTION_STATE",
    ()=>CONNECTION_STATE,
    "DEFAULT_TIMEOUT",
    ()=>DEFAULT_TIMEOUT,
    "DEFAULT_VERSION",
    ()=>DEFAULT_VERSION,
    "MAX_PUSH_BUFFER_SIZE",
    ()=>MAX_PUSH_BUFFER_SIZE,
    "SOCKET_STATES",
    ()=>SOCKET_STATES,
    "TRANSPORTS",
    ()=>TRANSPORTS,
    "VERSION",
    ()=>VERSION,
    "VSN",
    ()=>VSN,
    "WS_CLOSE_NORMAL",
    ()=>WS_CLOSE_NORMAL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-ssr] (ecmascript)");
;
const DEFAULT_VERSION = `realtime-js/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`;
const VSN = '1.0.0';
const VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"];
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
const MAX_PUSH_BUFFER_SIZE = 100;
var SOCKET_STATES;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {})); //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
__turbopack_context__.s([
    "default",
    ()=>Serializer
]);
class Serializer {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) {
            return callback(this._binaryDecode(rawPayload));
        }
        if (typeof rawPayload === 'string') {
            return callback(JSON.parse(rawPayload));
        }
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return {
            ref: null,
            topic: topic,
            event: event,
            payload: data
        };
    }
} //# sourceMappingURL=serializer.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ __turbopack_context__.s([
    "default",
    ()=>Timer
]);
class Timer {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
        this.timer = undefined;
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
} //# sourceMappingURL=timer.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
__turbopack_context__.s([
    "PostgresTypes",
    ()=>PostgresTypes,
    "convertCell",
    ()=>convertCell,
    "convertChangeData",
    ()=>convertChangeData,
    "convertColumn",
    ()=>convertColumn,
    "httpEndpointURL",
    ()=>httpEndpointURL,
    "toArray",
    ()=>toArray,
    "toBoolean",
    ()=>toBoolean,
    "toJson",
    ()=>toJson,
    "toNumber",
    ()=>toNumber,
    "toTimestampString",
    ()=>toTimestampString
]);
var PostgresTypes;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const convertColumn = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
    }
    return noop(value);
};
const convertCell = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === '_') {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value)=>{
    return value;
};
const toBoolean = (value)=>{
    switch(value){
        case 't':
            return true;
        case 'f':
            return false;
        default:
            return value;
    }
};
const toNumber = (value)=>{
    if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }
    return value;
};
const toJson = (value)=>{
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        } catch (error) {
            console.log(`JSON parse error: ${error}`);
            return value;
        }
    }
    return value;
};
const toArray = (value, type)=>{
    if (typeof value !== 'string') {
        return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === '{' && closeBrace === '}') {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse('[' + valTrim + ']');
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(',') : [];
        }
        return arr.map((val)=>convertCell(type, val));
    }
    return value;
};
const toTimestampString = (value)=>{
    if (typeof value === 'string') {
        return value.replace(' ', 'T');
    }
    return value;
};
const httpEndpointURL = (socketUrl)=>{
    let url = socketUrl;
    url = url.replace(/^ws/i, 'http');
    url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '');
    return url.replace(/\/+$/, '') + '/api/broadcast';
}; //# sourceMappingURL=transformers.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Push
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-ssr] (ecmascript)");
;
class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"]){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = '';
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = '';
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived('timeout')) {
            return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
            callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({
            status,
            callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) {
            return;
        }
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger('timeout', {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel._trigger(this.refEvent, {
            status,
            response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) {
            return;
        }
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
} //# sourceMappingURL=push.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ __turbopack_context__.s([
    "REALTIME_PRESENCE_LISTEN_EVENTS",
    ()=>REALTIME_PRESENCE_LISTEN_EVENTS,
    "default",
    ()=>RealtimePresence
]);
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */ constructor(channel, opts){
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.enabled = false;
        this.caller = {
            onJoin: ()=>{},
            onLeave: ()=>{},
            onSync: ()=>{}
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: 'presence_state',
            diff: 'presence_diff'
        };
        this.channel._on(events.state, {}, (newState)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff)=>{
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) {
                this.pendingDiffs.push(diff);
            } else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences)=>{
            this.channel._trigger('presence', {
                event: 'join',
                key,
                currentPresences,
                newPresences
            });
        });
        this.onLeave((key, currentPresences, leftPresences)=>{
            this.channel._trigger('presence', {
                event: 'leave',
                key,
                currentPresences,
                leftPresences
            });
        });
        this.onSync(()=>{
            this.channel._trigger('presence', {
                event: 'sync'
            });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */ static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences)=>{
            if (!transformedState[key]) {
                leaves[key] = presences;
            }
        });
        this.map(transformedState, (key, newPresences)=>{
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m)=>m.presence_ref);
                const curPresenceRefs = currentPresences.map((m)=>m.presence_ref);
                const joinedPresences = newPresences.filter((m)=>curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m)=>newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) {
                    joins[key] = joinedPresences;
                }
                if (leftPresences.length > 0) {
                    leaves[key] = leftPresences;
                }
            } else {
                joins[key] = newPresences;
            }
        });
        return this.syncDiff(state, {
            joins,
            leaves
        }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */ static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves)
        };
        if (!onJoin) {
            onJoin = ()=>{};
        }
        if (!onLeave) {
            onLeave = ()=>{};
        }
        this.map(joins, (key, newPresences)=>{
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m)=>m.presence_ref);
                const curPresences = currentPresences.filter((m)=>joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences)=>{
            let currentPresences = state[key];
            if (!currentPresences) return;
            const presenceRefsToRemove = leftPresences.map((m)=>m.presence_ref);
            currentPresences = currentPresences.filter((m)=>presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0) delete state[key];
        });
        return state;
    }
    /** @internal */ static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key)=>func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */ static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key)=>{
            const presences = state[key];
            if ('metas' in presences) {
                newState[key] = presences.metas.map((presence)=>{
                    presence['presence_ref'] = presence['phx_ref'];
                    delete presence['phx_ref'];
                    delete presence['phx_ref_prev'];
                    return presence;
                });
            } else {
                newState[key] = presences;
            }
            return newState;
        }, {});
    }
    /** @internal */ static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */ onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */ onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */ onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */ inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
} //# sourceMappingURL=RealtimePresence.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REALTIME_CHANNEL_STATES",
    ()=>REALTIME_CHANNEL_STATES,
    "REALTIME_LISTEN_TYPES",
    ()=>REALTIME_LISTEN_TYPES,
    "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
    ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
    "REALTIME_SUBSCRIBE_STATES",
    ()=>REALTIME_SUBSCRIBE_STATES,
    "default",
    ()=>RealtimeChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES["SYSTEM"] = "system";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
const REALTIME_CHANNEL_STATES = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"];
class RealtimeChannel {
    constructor(/** Topic name can be any string. */ topic, params = {
        config: {}
    }, socket){
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, '');
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: '',
                enabled: false
            },
            private: false
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].join, this.params, this.timeout);
        this.rejoinTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](()=>this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive('ok', ()=>{
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
            this.socket._remove(this);
        });
        this._onError((reason)=>{
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('timeout', ()=>{
            if (!this._isJoining()) {
                return;
            }
            this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('error', (reason)=>{
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].reply, {}, (payload, ref)=>{
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.broadcastEndpointURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpEndpointURL"])(this.socket.endPoint);
        this.private = this.params.config.private || false;
    }
    /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
        var _a, _b, _c;
        if (!this.socket.isConnected()) {
            this.socket.connect();
        }
        if (this.state == __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed) {
            const { config: { broadcast, presence, private: isPrivate } } = this.params;
            const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r)=>r.filter)) !== null && _b !== void 0 ? _b : [];
            const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === void 0 ? void 0 : _c.enabled) === true;
            const accessTokenPayload = {};
            const config = {
                broadcast,
                presence: Object.assign(Object.assign({}, presence), {
                    enabled: presence_enabled
                }),
                postgres_changes,
                private: isPrivate
            };
            if (this.socket.accessTokenValue) {
                accessTokenPayload.access_token = this.socket.accessTokenValue;
            }
            this._onError((e)=>callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e));
            this._onClose(()=>callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
            this.updateJoinPayload(Object.assign({
                config
            }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush.receive('ok', async ({ postgres_changes })=>{
                var _a;
                this.socket.setAuth();
                if (postgres_changes === undefined) {
                    callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for(let i = 0; i < bindingsLen; i++){
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event, schema, table, filter } } = clientPostgresBinding;
                        const serverPostgresFilter = postgres_changes && postgres_changes[i];
                        if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) {
                            newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                                id: serverPostgresFilter.id
                            }));
                        } else {
                            this.unsubscribe();
                            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
                            callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error('mismatch between server and client bindings for postgres changes'));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                }
            }).receive('error', (error)=>{
                this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(error).join(', ') || 'error')));
                return;
            }).receive('timeout', ()=>{
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
                return;
            });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(payload, opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'track',
            payload
        }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'untrack'
        }, opts);
    }
    on(type, filter, callback) {
        if (this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined && type === REALTIME_LISTEN_TYPES.PRESENCE) {
            this.socket.log('channel', `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
            this.unsubscribe().then(()=>this.subscribe());
        }
        return this._on(type, filter, callback);
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */ async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === 'broadcast') {
            const { event, payload: endpoint_payload } = args;
            const authorization = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : '';
            const options = {
                method: 'POST',
                headers: {
                    Authorization: authorization,
                    apikey: this.socket.apiKey ? this.socket.apiKey : '',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event,
                            payload: endpoint_payload,
                            private: this.private
                        }
                    ]
                })
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
                await ((_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel());
                return response.ok ? 'ok' : 'error';
            } catch (error) {
                if (error.name === 'AbortError') {
                    return 'timed out';
                } else {
                    return 'error';
                }
            }
        } else {
            return new Promise((resolve)=>{
                var _a, _b, _c;
                const push = this._push(args.type, args, opts.timeout || this.timeout);
                if (args.type === 'broadcast' && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
                    resolve('ok');
                }
                push.receive('ok', ()=>resolve('ok'));
                push.receive('error', ()=>resolve('error'));
                push.receive('timeout', ()=>resolve('timed out'));
            });
        }
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].leaving;
        const onClose = ()=>{
            this.socket.log('channel', `leave ${this.topic}`);
            this._trigger(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].close, 'leave', this._joinRef());
        };
        this.joinPush.destroy();
        let leavePush = null;
        return new Promise((resolve)=>{
            leavePush = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].leave, {}, timeout);
            leavePush.receive('ok', ()=>{
                onClose();
                resolve('ok');
            }).receive('timeout', ()=>{
                onClose();
                resolve('timed out');
            }).receive('error', ()=>{
                resolve('error');
            });
            leavePush.send();
            if (!this._canPush()) {
                leavePush.trigger('ok', {});
            }
        }).finally(()=>{
            leavePush === null || leavePush === void 0 ? void 0 : leavePush.destroy();
        });
    }
    /**
     * Teardown the channel.
     *
     * Destroys and stops related timers.
     */ teardown() {
        this.pushBuffer.forEach((push)=>push.destroy());
        this.pushBuffer = [];
        this.rejoinTimer.reset();
        this.joinPush.destroy();
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
        this.bindings = {};
    }
    /** @internal */ async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), {
            signal: controller.signal
        }));
        clearTimeout(id);
        return response;
    }
    /** @internal */ _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
            throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this, event, payload, timeout);
        if (this._canPush()) {
            pushEvent.send();
        } else {
            this._addToPushBuffer(pushEvent);
        }
        return pushEvent;
    }
    /** @internal */ _addToPushBuffer(pushEvent) {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
        // Enforce buffer size limit
        if (this.pushBuffer.length > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PUSH_BUFFER_SIZE"]) {
            const removedPush = this.pushBuffer.shift();
            if (removedPush) {
                removedPush.destroy();
                this.socket.log('channel', `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload);
            }
        }
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */ _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */ _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */ _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */ _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close, error, leave, join } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"];
        const events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
            return;
        }
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) {
            throw 'channel onMessage callbacks must return the payload, modified or unmodified';
        }
        if ([
            'insert',
            'update',
            'delete'
        ].includes(typeLower)) {
            (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind)=>{
                var _a, _b, _c;
                return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === '*' || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
            }).map((bind)=>bind.callback(handledPayload, ref));
        } else {
            (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind)=>{
                var _a, _b, _c, _d, _e, _f;
                if ([
                    'broadcast',
                    'presence',
                    'postgres_changes'
                ].includes(typeLower)) {
                    if ('id' in bind) {
                        const bindId = bind.id;
                        const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                        return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === '*' || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                    } else {
                        const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                        return bindEvent === '*' || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                    }
                } else {
                    return bind.type.toLocaleLowerCase() === typeLower;
                }
            }).map((bind)=>{
                if (typeof handledPayload === 'object' && 'ids' in handledPayload) {
                    const postgresChanges = handledPayload.data;
                    const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                    const enrichedPayload = {
                        schema: schema,
                        table: table,
                        commit_timestamp: commit_timestamp,
                        eventType: type,
                        new: {},
                        old: {},
                        errors: errors
                    };
                    handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
                }
                bind.callback(handledPayload, ref);
            });
        }
    }
    /** @internal */ _isClosed() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
    }
    /** @internal */ _isJoined() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined;
    }
    /** @internal */ _isJoining() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joining;
    }
    /** @internal */ _isLeaving() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].leaving;
    }
    /** @internal */ _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */ _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback
        };
        if (this.bindings[typeLower]) {
            this.bindings[typeLower].push(binding);
        } else {
            this.bindings[typeLower] = [
                binding
            ];
        }
        return this;
    }
    /** @internal */ _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        if (this.bindings[typeLower]) {
            this.bindings[typeLower] = this.bindings[typeLower].filter((bind)=>{
                var _a;
                return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
            });
        }
        return this;
    }
    /** @internal */ static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for(const k in obj1){
            if (obj1[k] !== obj2[k]) {
                return false;
            }
        }
        return true;
    }
    /** @internal */ _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
            this._rejoin();
        }
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */ _onClose(callback) {
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */ _onError(callback) {
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].error, {}, (reason)=>callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */ _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */ _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) {
            return;
        }
        this.socket._leaveOpenTopic(this.topic);
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */ _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
            records.new = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertChangeData"](payload.columns, payload.record);
        }
        if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
            records.old = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertChangeData"](payload.columns, payload.old_record);
        }
        return records;
    }
} //# sourceMappingURL=RealtimeChannel.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RealtimeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const noop = ()=>{};
// Connection-related constants
const CONNECTION_TIMEOUTS = {
    HEARTBEAT_INTERVAL: 25000,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
};
const RECONNECT_INTERVALS = [
    1000,
    2000,
    5000,
    10000
];
const DEFAULT_RECONNECT_FALLBACK = 10000;
const WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.heartbeatCallback The optional function to handle heartbeat status.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.logLevel Sets the log level for Realtime
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     * @param options.worker Use Web Worker to set a side flow. Defaults to false.
     * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
     */ constructor(endPoint, options){
        var _a;
        this.accessTokenValue = null;
        this.apiKey = null;
        this.channels = new Array();
        this.endPoint = '';
        this.httpEndpoint = '';
        /** @deprecated headers cannot be set on websocket connections */ this.headers = {};
        this.params = {};
        this.timeout = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"];
        this.transport = null;
        this.heartbeatIntervalMs = CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.heartbeatCallback = noop;
        this.ref = 0;
        this.reconnectTimer = null;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        this.accessToken = null;
        this._connectionState = 'disconnected';
        this._wasManualDisconnect = false;
        this._authPromise = null;
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */ this._resolveFetch = (customFetch)=>{
            let _fetch;
            if (customFetch) {
                _fetch = customFetch;
            } else if (typeof fetch === 'undefined') {
                // Node.js environment without native fetch
                _fetch = (...args)=>__turbopack_context__.A("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript, async loader)").then(({ default: fetch1 })=>fetch1(...args)).catch((error)=>{
                        throw new Error(`Failed to load @supabase/node-fetch: ${error.message}. ` + `This is required for HTTP requests in Node.js environments without native fetch.`);
                    });
            } else {
                _fetch = fetch;
            }
            return (...args)=>_fetch(...args);
        };
        // Validate required parameters
        if (!((_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey)) {
            throw new Error('API key is required to connect to Realtime');
        }
        this.apiKey = options.params.apikey;
        // Initialize endpoint URLs
        this.endPoint = `${endPoint}/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSPORTS"].websocket}`;
        this.httpEndpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpEndpointURL"])(endPoint);
        this._initializeOptions(options);
        this._setupReconnectionTimer();
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        // Skip if already connecting, disconnecting, or connected
        if (this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected()) {
            return;
        }
        this._setConnectionState('connecting');
        this._setAuthSafely('connect');
        // Establish WebSocket connection
        if (this.transport) {
            // Use custom transport if provided
            this.conn = new this.transport(this.endpointURL());
        } else {
            // Try to use native WebSocket
            try {
                this.conn = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createWebSocket(this.endpointURL());
            } catch (error) {
                this._setConnectionState('disconnected');
                const errorMessage = error.message;
                // Provide helpful error message based on environment
                if (errorMessage.includes('Node.js')) {
                    throw new Error(`${errorMessage}\n\n` + 'To use Realtime in Node.js, you need to provide a WebSocket implementation:\n\n' + 'Option 1: Use Node.js 22+ which has native WebSocket support\n' + 'Option 2: Install and provide the "ws" package:\n\n' + '  npm install ws\n\n' + '  import ws from "ws"\n' + '  const client = new RealtimeClient(url, {\n' + '    ...options,\n' + '    transport: ws\n' + '  })');
                }
                throw new Error(`WebSocket not available: ${errorMessage}`);
            }
        }
        this._setupConnectionHandlers();
    }
    /**
     * Returns the URL of the websocket.
     * @returns string The URL of the websocket.
     */ endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VSN"]
        }));
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        if (this.isDisconnecting()) {
            return;
        }
        this._setConnectionState('disconnecting', true);
        if (this.conn) {
            // Setup fallback timer to prevent hanging in disconnecting state
            const fallbackTimer = setTimeout(()=>{
                this._setConnectionState('disconnected');
            }, 100);
            this.conn.onclose = ()=>{
                clearTimeout(fallbackTimer);
                this._setConnectionState('disconnected');
            };
            // Close the WebSocket connection
            if (code) {
                this.conn.close(code, reason !== null && reason !== void 0 ? reason : '');
            } else {
                this.conn.close();
            }
            this._teardownConnection();
        } else {
            this._setConnectionState('disconnected');
        }
    }
    /**
     * Returns all created channels
     */ getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */ async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) {
            this.disconnect();
        }
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */ async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel)=>channel.unsubscribe()));
        this.channels = [];
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCKET_STATES"].connecting:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Connecting;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCKET_STATES"].open:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Open;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCKET_STATES"].closing:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Closing;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Open;
    }
    /**
     * Returns `true` if the connection is currently connecting.
     */ isConnecting() {
        return this._connectionState === 'connecting';
    }
    /**
     * Returns `true` if the connection is currently disconnecting.
     */ isDisconnecting() {
        return this._connectionState === 'disconnecting';
    }
    channel(topic, params = {
        config: {}
    }) {
        const realtimeTopic = `realtime:${topic}`;
        const exists = this.getChannels().find((c)=>c.topic === realtimeTopic);
        if (!exists) {
            const chan = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](`realtime:${topic}`, params, this);
            this.channels.push(chan);
            return chan;
        } else {
            return exists;
        }
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic, event, payload, ref } = data;
        const callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
            });
        };
        this.log('push', `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
            callback();
        } else {
            this.sendBuffer.push(callback);
        }
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * If param is null it will use the `accessToken` callback function or the token set on the client.
     *
     * On callback used, it will set the value of the token internal to the client.
     *
     * @param token A JWT string to override the token set on the client.
     */ async setAuth(token = null) {
        this._authPromise = this._performAuth(token);
        try {
            await this._authPromise;
        } finally{
            this._authPromise = null;
        }
    }
    /**
     * Sends a heartbeat message if the socket is connected.
     */ async sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback('disconnected');
            } catch (e) {
                this.log('error', 'error in heartbeat callback', e);
            }
            return;
        }
        // Handle heartbeat timeout and force reconnection if needed
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
            try {
                this.heartbeatCallback('timeout');
            } catch (e) {
                this.log('error', 'error in heartbeat callback', e);
            }
            // Force reconnection after heartbeat timeout
            this._wasManualDisconnect = false;
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WS_CLOSE_NORMAL"], 'heartbeat timeout');
            setTimeout(()=>{
                var _a;
                if (!this.isConnected()) {
                    (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
                }
            }, CONNECTION_TIMEOUTS.HEARTBEAT_TIMEOUT_FALLBACK);
            return;
        }
        // Send heartbeat message to server
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: 'phoenix',
            event: 'heartbeat',
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback('sent');
        } catch (e) {
            this.log('error', 'error in heartbeat callback', e);
        }
        this._setAuthSafely('heartbeat');
    }
    onHeartbeat(callback) {
        this.heartbeatCallback = callback;
    }
    /**
     * Flushes send buffer
     */ flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */ _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
            this.ref = 0;
        } else {
            this.ref = newRef;
        }
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */ _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log('transport', `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */ _remove(channel) {
        this.channels = this.channels.filter((c)=>c.topic !== channel.topic);
    }
    /** @internal */ _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            // Handle heartbeat responses
            if (msg.topic === 'phoenix' && msg.event === 'phx_reply') {
                try {
                    this.heartbeatCallback(msg.payload.status === 'ok' ? 'ok' : 'error');
                } catch (e) {
                    this.log('error', 'error in heartbeat callback', e);
                }
            }
            // Handle pending heartbeat reference cleanup
            if (msg.ref && msg.ref === this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null;
            }
            // Log incoming message
            const { topic, event, payload, ref } = msg;
            const refString = ref ? `(${ref})` : '';
            const status = payload.status || '';
            this.log('receive', `${status} ${topic} ${event} ${refString}`.trim(), payload);
            // Route message to appropriate channels
            this.channels.filter((channel)=>channel._isMember(topic)).forEach((channel)=>channel._trigger(event, payload, ref));
            this._triggerStateCallbacks('message', msg);
        });
    }
    /**
     * Clear specific timer
     * @internal
     */ _clearTimer(timer) {
        var _a;
        if (timer === 'heartbeat' && this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = undefined;
        } else if (timer === 'reconnect') {
            (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.reset();
        }
    }
    /**
     * Clear all timers
     * @internal
     */ _clearAllTimers() {
        this._clearTimer('heartbeat');
        this._clearTimer('reconnect');
    }
    /**
     * Setup connection handlers for WebSocket events
     * @internal
     */ _setupConnectionHandlers() {
        if (!this.conn) return;
        // Set binary type if supported (browsers and most WebSocket implementations)
        if ('binaryType' in this.conn) {
            ;
            this.conn.binaryType = 'arraybuffer';
        }
        this.conn.onopen = ()=>this._onConnOpen();
        this.conn.onerror = (error)=>this._onConnError(error);
        this.conn.onmessage = (event)=>this._onConnMessage(event);
        this.conn.onclose = (event)=>this._onConnClose(event);
    }
    /**
     * Teardown connection and cleanup resources
     * @internal
     */ _teardownConnection() {
        if (this.conn) {
            this.conn.onopen = null;
            this.conn.onerror = null;
            this.conn.onmessage = null;
            this.conn.onclose = null;
            this.conn = null;
        }
        this._clearAllTimers();
        this.channels.forEach((channel)=>channel.teardown());
    }
    /** @internal */ _onConnOpen() {
        this._setConnectionState('connected');
        this.log('transport', `connected to ${this.endpointURL()}`);
        this.flushSendBuffer();
        this._clearTimer('reconnect');
        if (!this.worker) {
            this._startHeartbeat();
        } else {
            if (!this.workerRef) {
                this._startWorkerHeartbeat();
            }
        }
        this._triggerStateCallbacks('open');
    }
    /** @internal */ _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    /** @internal */ _startWorkerHeartbeat() {
        if (this.workerUrl) {
            this.log('worker', `starting worker for from ${this.workerUrl}`);
        } else {
            this.log('worker', `starting default worker`);
        }
        const objectUrl = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(objectUrl);
        this.workerRef.onerror = (error)=>{
            this.log('worker', 'worker error', error.message);
            this.workerRef.terminate();
        };
        this.workerRef.onmessage = (event)=>{
            if (event.data.event === 'keepAlive') {
                this.sendHeartbeat();
            }
        };
        this.workerRef.postMessage({
            event: 'start',
            interval: this.heartbeatIntervalMs
        });
    }
    /** @internal */ _onConnClose(event) {
        var _a;
        this._setConnectionState('disconnected');
        this.log('transport', 'close', event);
        this._triggerChanError();
        this._clearTimer('heartbeat');
        // Only schedule reconnection if it wasn't a manual disconnect
        if (!this._wasManualDisconnect) {
            (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
        }
        this._triggerStateCallbacks('close', event);
    }
    /** @internal */ _onConnError(error) {
        this._setConnectionState('disconnected');
        this.log('transport', `${error}`);
        this._triggerChanError();
        this._triggerStateCallbacks('error', error);
    }
    /** @internal */ _triggerChanError() {
        this.channels.forEach((channel)=>channel._trigger(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].error));
    }
    /** @internal */ _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
            return url;
        }
        const prefix = url.match(/\?/) ? '&' : '?';
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    _workerObjectUrl(url) {
        let result_url;
        if (url) {
            result_url = url;
        } else {
            const blob = new Blob([
                WORKER_SCRIPT
            ], {
                type: 'application/javascript'
            });
            result_url = URL.createObjectURL(blob);
        }
        return result_url;
    }
    /**
     * Set connection state with proper state management
     * @internal
     */ _setConnectionState(state, manual = false) {
        this._connectionState = state;
        if (state === 'connecting') {
            this._wasManualDisconnect = false;
        } else if (state === 'disconnecting') {
            this._wasManualDisconnect = manual;
        }
    }
    /**
     * Perform the actual auth operation
     * @internal
     */ async _performAuth(token = null) {
        let tokenToSend;
        if (token) {
            tokenToSend = token;
        } else if (this.accessToken) {
            // Always call the accessToken callback to get fresh token
            tokenToSend = await this.accessToken();
        } else {
            tokenToSend = this.accessTokenValue;
        }
        if (this.accessTokenValue != tokenToSend) {
            this.accessTokenValue = tokenToSend;
            this.channels.forEach((channel)=>{
                const payload = {
                    access_token: tokenToSend,
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_VERSION"]
                };
                tokenToSend && channel.updateJoinPayload(payload);
                if (channel.joinedOnce && channel._isJoined()) {
                    channel._push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].access_token, {
                        access_token: tokenToSend
                    });
                }
            });
        }
    }
    /**
     * Wait for any in-flight auth operations to complete
     * @internal
     */ async _waitForAuthIfNeeded() {
        if (this._authPromise) {
            await this._authPromise;
        }
    }
    /**
     * Safely call setAuth with standardized error handling
     * @internal
     */ _setAuthSafely(context = 'general') {
        this.setAuth().catch((e)=>{
            this.log('error', `error setting auth in ${context}`, e);
        });
    }
    /**
     * Trigger state change callbacks with proper error handling
     * @internal
     */ _triggerStateCallbacks(event, data) {
        try {
            this.stateChangeCallbacks[event].forEach((callback)=>{
                try {
                    callback(data);
                } catch (e) {
                    this.log('error', `error in ${event} callback`, e);
                }
            });
        } catch (e) {
            this.log('error', `error triggering ${event} callbacks`, e);
        }
    }
    /**
     * Setup reconnection timer with proper configuration
     * @internal
     */ _setupReconnectionTimer() {
        this.reconnectTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](async ()=>{
            setTimeout(async ()=>{
                await this._waitForAuthIfNeeded();
                if (!this.isConnected()) {
                    this.connect();
                }
            }, CONNECTION_TIMEOUTS.RECONNECT_DELAY);
        }, this.reconnectAfterMs);
    }
    /**
     * Initialize client options with defaults
     * @internal
     */ _initializeOptions(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // Set defaults
        this.transport = (_a = options === null || options === void 0 ? void 0 : options.transport) !== null && _a !== void 0 ? _a : null;
        this.timeout = (_b = options === null || options === void 0 ? void 0 : options.timeout) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"];
        this.heartbeatIntervalMs = (_c = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _c !== void 0 ? _c : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
        this.worker = (_d = options === null || options === void 0 ? void 0 : options.worker) !== null && _d !== void 0 ? _d : false;
        this.accessToken = (_e = options === null || options === void 0 ? void 0 : options.accessToken) !== null && _e !== void 0 ? _e : null;
        this.heartbeatCallback = (_f = options === null || options === void 0 ? void 0 : options.heartbeatCallback) !== null && _f !== void 0 ? _f : noop;
        // Handle special cases
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if ((options === null || options === void 0 ? void 0 : options.logLevel) || (options === null || options === void 0 ? void 0 : options.log_level)) {
            this.logLevel = options.logLevel || options.log_level;
            this.params = Object.assign(Object.assign({}, this.params), {
                log_level: this.logLevel
            });
        }
        // Set up functions with defaults
        this.reconnectAfterMs = (_g = options === null || options === void 0 ? void 0 : options.reconnectAfterMs) !== null && _g !== void 0 ? _g : (tries)=>{
            return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
        };
        this.encode = (_h = options === null || options === void 0 ? void 0 : options.encode) !== null && _h !== void 0 ? _h : (payload, callback)=>{
            return callback(JSON.stringify(payload));
        };
        this.decode = (_j = options === null || options === void 0 ? void 0 : options.decode) !== null && _j !== void 0 ? _j : this.serializer.decode.bind(this.serializer);
        // Handle worker setup
        if (this.worker) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
        }
    }
} //# sourceMappingURL=RealtimeClient.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-ssr] (ecmascript)");
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-ssr] (ecmascript) <export default as RealtimeClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RealtimeClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageApiError",
    ()=>StorageApiError,
    "StorageError",
    ()=>StorageError,
    "StorageUnknownError",
    ()=>StorageUnknownError,
    "isStorageError",
    ()=>isStorageError
]);
class StorageError extends Error {
    constructor(message){
        super(message);
        this.__isStorageError = true;
        this.name = 'StorageError';
    }
}
function isStorageError(error) {
    return typeof error === 'object' && error !== null && '__isStorageError' in error;
}
class StorageApiError extends StorageError {
    constructor(message, status, statusCode){
        super(message);
        this.name = 'StorageApiError';
        this.status = status;
        this.statusCode = statusCode;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        };
    }
}
class StorageUnknownError extends StorageError {
    constructor(message, originalError){
        super(message);
        this.name = 'StorageUnknownError';
        this.originalError = originalError;
    }
} //# sourceMappingURL=errors.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject,
    "recursiveToCamel",
    ()=>recursiveToCamel,
    "resolveFetch",
    ()=>resolveFetch,
    "resolveResponse",
    ()=>resolveResponse
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === 'undefined') {
        _fetch = (...args)=>__turbopack_context__.A("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript, async loader)").then(({ default: fetch1 })=>fetch1(...args));
    } else {
        _fetch = fetch;
    }
    return (...args)=>_fetch(...args);
};
const resolveResponse = ()=>__awaiter(void 0, void 0, void 0, function*() {
        if (typeof Response === 'undefined') {
            // @ts-ignore
            return (yield __turbopack_context__.A("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript, async loader)")).Response;
        }
        return Response;
    });
const recursiveToCamel = (item)=>{
    if (Array.isArray(item)) {
        return item.map((el)=>recursiveToCamel(el));
    } else if (typeof item === 'function' || item !== Object(item)) {
        return item;
    }
    const result = {};
    Object.entries(item).forEach(([key, value])=>{
        const newKey = key.replace(/([-_][a-z])/gi, (c)=>c.toUpperCase().replace(/[-_]/g, ''));
        result[newKey] = recursiveToCamel(value);
    });
    return result;
};
const isPlainObject = (value)=>{
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}; //# sourceMappingURL=helpers.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "head",
    ()=>head,
    "post",
    ()=>post,
    "put",
    ()=>put,
    "remove",
    ()=>remove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject, options)=>__awaiter(void 0, void 0, void 0, function*() {
        const Res = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveResponse"])();
        if (error instanceof Res && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
            error.json().then((err)=>{
                const status = error.status || 500;
                const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || status + '';
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageApiError"](_getErrorMessage(err), status, statusCode));
            }).catch((err)=>{
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUnknownError"](_getErrorMessage(err), err));
            });
        } else {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUnknownError"](_getErrorMessage(error), error));
        }
    });
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === 'GET' || !body) {
        return params;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(body)) {
        params.headers = Object.assign({
            'Content-Type': 'application/json'
        }, options === null || options === void 0 ? void 0 : options.headers);
        params.body = JSON.stringify(body);
    } else {
        params.body = body;
    }
    if (options === null || options === void 0 ? void 0 : options.duplex) {
        params.duplex = options.duplex;
    }
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, _getRequestParams(method, options, parameters, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject, options));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'GET', url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'POST', url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'PUT', url, options, parameters, body);
    });
}
function head(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'HEAD', url, Object.assign(Object.assign({}, options), {
            noResolveJson: true
        }), parameters);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'DELETE', url, options, parameters, body);
    });
} //# sourceMappingURL=fetch.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StorageFileApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: 'name',
        order: 'asc'
    }
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: '3600',
    contentType: 'text/plain;charset=UTF-8',
    upsert: false
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch){
        this.shouldThrowOnError = false;
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveFetch"])(fetch);
    }
    /**
     * Enable throwing errors instead of returning them.
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                let headers = Object.assign(Object.assign({}, this.headers), method === 'POST' && {
                    'x-upsert': String(options.upsert)
                });
                const metadata = options.metadata;
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    if (metadata) {
                        body.append('metadata', this.encodeMetadata(metadata));
                    }
                    body.append('', fileBody);
                } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                    if (metadata) {
                        body.append('metadata', this.encodeMetadata(metadata));
                    }
                } else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                    if (metadata) {
                        headers['x-metadata'] = this.toBase64(this.encodeMetadata(metadata));
                    }
                }
                if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) {
                    headers = Object.assign(Object.assign({}, headers), fileOptions.headers);
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const data = yield (method == 'PUT' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/${_path}`, body, Object.assign({
                    headers
                }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                    duplex: options.duplex
                } : {}));
                return {
                    data: {
                        path: cleanPath,
                        id: data.Id,
                        fullPath: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate('POST', path, fileBody, fileOptions);
        });
    }
    /**
     * Upload a file with a token generated from `createSignedUploadUrl`.
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param token The token generated from `createSignedUploadUrl`
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadToSignedUrl(path, token, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const url = new URL(this.url + `/object/upload/sign/${_path}`);
            url.searchParams.set('token', token);
            try {
                let body;
                const options = Object.assign({
                    upsert: DEFAULT_FILE_OPTIONS.upsert
                }, fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), {
                    'x-upsert': String(options.upsert)
                });
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    body.append('', fileBody);
                } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                } else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                }
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])(this.fetch, url.toString(), body, {
                    headers
                });
                return {
                    data: {
                        path: cleanPath,
                        fullPath: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a signed upload URL.
     * Signed upload URLs can be used to upload files to the bucket without further authentication.
     * They are valid for 2 hours.
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
     */ createSignedUploadUrl(path, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                const headers = Object.assign({}, this.headers);
                if (options === null || options === void 0 ? void 0 : options.upsert) {
                    headers['x-upsert'] = 'true';
                }
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, {
                    headers
                });
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get('token');
                if (!token) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageError"]('No token returned by API');
                }
                return {
                    data: {
                        signedUrl: url.toString(),
                        path,
                        token
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */ update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate('PUT', path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     * @param options The destination options.
     */ move(fromPath, toPath, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/move`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     * @param options The destination options.
     */ copy(fromPath, toPath, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/copy`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: this.headers
                });
                return {
                    data: {
                        path: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ createSignedUrl(path, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                let data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({
                    expiresIn
                }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                    transform: options.transform
                } : {}), {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? '' : options.download}` : '';
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = {
                    signedUrl
                };
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */ createSignedUrls(paths, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn,
                    paths
                }, {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? '' : options.download}` : '';
                return {
                    data: data.map((datum)=>Object.assign(Object.assign({}, datum), {
                            signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null
                        })),
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */ download(path, options) {
        return __awaiter(this, void 0, void 0, function*() {
            const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
            const renderPath = wantsTransformation ? 'render/image/authenticated' : 'object';
            const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
            const queryString = transformationQuery ? `?${transformationQuery}` : '';
            try {
                const _path = this._getFinalPath(path);
                const res = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                    headers: this.headers,
                    noResolveJson: true
                });
                const data = yield res.blob();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing file.
     * @param path
     */ info(path) {
        return __awaiter(this, void 0, void 0, function*() {
            const _path = this._getFinalPath(path);
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/object/info/${_path}`, {
                    headers: this.headers
                });
                return {
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recursiveToCamel"])(data),
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Checks the existence of a file.
     * @param path
     */ exists(path) {
        return __awaiter(this, void 0, void 0, function*() {
            const _path = this._getFinalPath(path);
            try {
                yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["head"])(this.fetch, `${this.url}/object/${_path}`, {
                    headers: this.headers
                });
                return {
                    data: true,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error) && error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUnknownError"]) {
                    const originalError = error.originalError;
                    if ([
                        400,
                        404
                    ].includes(originalError === null || originalError === void 0 ? void 0 : originalError.status)) {
                        return {
                            data: false,
                            error
                        };
                    }
                }
                throw error;
            }
        });
    }
    /**
     * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? '' : options.download}` : '';
        if (downloadQueryParam !== '') {
            _queryString.push(downloadQueryParam);
        }
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
        const renderPath = wantsTransformation ? 'render/image' : 'object';
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== '') {
            _queryString.push(transformationQuery);
        }
        let queryString = _queryString.join('&');
        if (queryString !== '') {
            queryString = `?${queryString}`;
        }
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`)
            }
        };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */ remove(paths) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remove"])(this.fetch, `${this.url}/object/${this.bucketId}`, {
                    prefixes: paths
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */ // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */ // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files and folders within a path of the bucket.
     * @param path The folder path.
     * @param options Search options including limit (defaults to 100), offset, sortBy, and search
     */ list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                    prefix: path || ''
                });
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * @experimental this method signature might change in the future
     * @param options search options
     * @param parameters
     */ listV2(options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign({}, options);
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    encodeMetadata(metadata) {
        return JSON.stringify(metadata);
    }
    toBase64(data) {
        if (typeof Buffer !== 'undefined') {
            return Buffer.from(data).toString('base64');
        }
        return btoa(data);
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path.replace(/^\/+/, '')}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) {
            params.push(`width=${transform.width}`);
        }
        if (transform.height) {
            params.push(`height=${transform.height}`);
        }
        if (transform.resize) {
            params.push(`resize=${transform.resize}`);
        }
        if (transform.format) {
            params.push(`format=${transform.format}`);
        }
        if (transform.quality) {
            params.push(`quality=${transform.quality}`);
        }
        return params.join('&');
    }
} //# sourceMappingURL=StorageFileApi.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// generated by genversion
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.12.1'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_HEADERS",
    ()=>DEFAULT_HEADERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/version.js [app-ssr] (ecmascript)");
;
const DEFAULT_HEADERS = {
    'X-Client-Info': `storage-js/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StorageBucketApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
class StorageBucketApi {
    constructor(url, headers = {}, fetch, opts){
        this.shouldThrowOnError = false;
        const baseUrl = new URL(url);
        // if legacy uri is used, replace with new storage host (disables request buffering to allow > 50GB uploads)
        // "project-ref.supabase.co" becomes "project-ref.storage.supabase.co"
        if (opts === null || opts === void 0 ? void 0 : opts.useNewHostname) {
            const isSupabaseHost = /supabase\.(co|in|red)$/.test(baseUrl.hostname);
            if (isSupabaseHost && !baseUrl.hostname.includes('storage.supabase.')) {
                baseUrl.hostname = baseUrl.hostname.replace('supabase.', 'storage.supabase.');
            }
        }
        this.url = baseUrl.href;
        this.headers = Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_HEADERS"]), headers);
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveFetch"])(fetch);
    }
    /**
     * Enable throwing errors instead of returning them.
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */ listBuckets() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */ getBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/bucket/${id}`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     * @returns newly created bucket id
     * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
     *   - default bucket type is `STANDARD`
     */ createBucket(id, options = {
        public: false
    }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/bucket`, {
                    id,
                    name: id,
                    type: options.type,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     */ updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])(this.fetch, `${this.url}/bucket/${id}`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */ emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/bucket/${id}/empty`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */ deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["remove"])(this.fetch, `${this.url}/bucket/${id}`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
} //# sourceMappingURL=StorageBucketApi.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageClient",
    ()=>StorageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageFileApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageBucketApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js [app-ssr] (ecmascript)");
;
;
class StorageClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageBucketApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(url, headers = {}, fetch, opts){
        super(url, headers, fetch, opts);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */ from(id) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageFileApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.url, this.headers, id, this.fetch);
    }
} //# sourceMappingURL=StorageClient.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.57.4'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AUTH_OPTIONS",
    ()=>DEFAULT_AUTH_OPTIONS,
    "DEFAULT_DB_OPTIONS",
    ()=>DEFAULT_DB_OPTIONS,
    "DEFAULT_GLOBAL_OPTIONS",
    ()=>DEFAULT_GLOBAL_OPTIONS,
    "DEFAULT_HEADERS",
    ()=>DEFAULT_HEADERS,
    "DEFAULT_REALTIME_OPTIONS",
    ()=>DEFAULT_REALTIME_OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-ssr] (ecmascript)");
;
let JS_ENV = '';
// @ts-ignore
if (typeof Deno !== 'undefined') {
    JS_ENV = 'deno';
} else if (typeof document !== 'undefined') {
    JS_ENV = 'web';
} else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    JS_ENV = 'react-native';
} else {
    JS_ENV = 'node';
}
const DEFAULT_HEADERS = {
    'X-Client-Info': `supabase-js-${JS_ENV}/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: 'public'
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
};
const DEFAULT_REALTIME_OPTIONS = {}; //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "resolveFetch",
    ()=>resolveFetch,
    "resolveHeadersConstructor",
    ()=>resolveHeadersConstructor
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === 'undefined') {
        _fetch = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    } else {
        _fetch = fetch;
    }
    return (...args)=>_fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    if (typeof Headers === 'undefined') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headers"];
    }
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return (input, init)=>__awaiter(void 0, void 0, void 0, function*() {
            var _a;
            const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
            let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
            if (!headers.has('apikey')) {
                headers.set('apikey', supabaseKey);
            }
            if (!headers.has('Authorization')) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }
            return fetch1(input, Object.assign(Object.assign({}, init), {
                headers
            }));
        });
}; //# sourceMappingURL=fetch.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySettingDefaults",
    ()=>applySettingDefaults,
    "ensureTrailingSlash",
    ()=>ensureTrailingSlash,
    "isBrowser",
    ()=>isBrowser,
    "uuid",
    ()=>uuid,
    "validateSupabaseUrl",
    ()=>validateSupabaseUrl
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : url + '/';
}
const isBrowser = ()=>"undefined" !== 'undefined';
function applySettingDefaults(options, defaults) {
    var _a, _b;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    const result = {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions), {
            headers: Object.assign(Object.assign({}, (_a = DEFAULT_GLOBAL_OPTIONS === null || DEFAULT_GLOBAL_OPTIONS === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS.headers) !== null && _a !== void 0 ? _a : {}), (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _b !== void 0 ? _b : {})
        }),
        accessToken: ()=>__awaiter(this, void 0, void 0, function*() {
                return '';
            })
    };
    if (options.accessToken) {
        result.accessToken = options.accessToken;
    } else {
        // hack around Required<>
        delete result.accessToken;
    }
    return result;
}
function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) {
        throw new Error('supabaseUrl is required.');
    }
    if (!trimmedUrl.match(/^https?:\/\//i)) {
        throw new Error('Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.');
    }
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_a) {
        throw Error('Invalid supabaseUrl: Provided URL is malformed.');
    }
} //# sourceMappingURL=helpers.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseAuthClient",
    ()=>SupabaseAuthClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$71$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+auth-js@2.71.1/node_modules/@supabase/auth-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$71$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+auth-js@2.71.1/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-ssr] (ecmascript) <export default as AuthClient>");
;
class SupabaseAuthClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$71$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__["AuthClient"] {
    constructor(options){
        super(options);
    }
} //# sourceMappingURL=SupabaseAuthClient.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+functions-js@2.4.6/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-ssr] (ecmascript) <export default as RealtimeClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+storage-js@2.12.1/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
;
;
;
;
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.storage Options passed along to the storage-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSupabaseUrl"])(supabaseUrl);
        if (!supabaseKey) throw new Error('supabaseKey is required.');
        this.realtimeUrl = new URL('realtime/v1', baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace('http', 'ws');
        this.authUrl = new URL('auth/v1', baseUrl);
        this.storageUrl = new URL('storage/v1', baseUrl);
        this.functionsUrl = new URL('functions/v1', baseUrl);
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${baseUrl.hostname.split('.')[0]}-auth-token`;
        const DEFAULTS = {
            db: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DB_OPTIONS"],
            realtime: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_REALTIME_OPTIONS"],
            auth: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_OPTIONS"]), {
                storageKey: defaultStorageKey
            }),
            global: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_GLOBAL_OPTIONS"]
        };
        const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applySettingDefaults"])(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : '';
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        if (!settings.accessToken) {
            this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: (_, prop)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
                }
            });
        }
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWithAuth"])(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        this.rest = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PostgrestClient"](new URL('rest/v1', baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        this.storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageClient"](this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) {
            this._listenForAuthEvents();
        }
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$6$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsClient"](this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {}) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            if (this.accessToken) {
                return yield this.accessToken();
            }
            const { data } = yield this.auth.getSession();
            return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
        });
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupabaseAuthClient"]({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            userStorage,
            flowType,
            lock,
            debug,
            fetch,
            // auth checks if there is a custom authorizaiton header using this flag
            // so it knows whether to return an error when getUser is called with no session
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((key)=>key.toLowerCase() === 'authorization')
        });
    }
    _initRealtimeClient(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__["RealtimeClient"](this.realtimeUrl.href, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        let data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, 'CLIENT', session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
            this.changedAccessToken = token;
        } else if (event === 'SIGNED_OUT') {
            this.realtime.setAuth();
            if (source == 'STORAGE') this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
} //# sourceMappingURL=SupabaseClient.js.map
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$71$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+auth-js@2.71.1/node_modules/@supabase/auth-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](supabaseUrl, supabaseKey, options);
};
// Check for Node.js <= 18 deprecation
function shouldShowDeprecationWarning() {
    // Skip in browser environments
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Skip if process is not available (e.g., Edge Runtime)
    if (typeof process === 'undefined') {
        return false;
    }
    // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
    const processVersion = process['version'];
    if (processVersion === undefined || processVersion === null) {
        return false;
    }
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) {
        return false;
    }
    const majorVersion = parseInt(versionMatch[1], 10);
    return majorVersion <= 18;
}
if (shouldShowDeprecationWarning()) {
    console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. ` + `Please upgrade to Node.js 20 or later. ` + `For more information, visit: https://github.com/orgs/supabase/discussions/37217`);
} //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=5a4b1__pnpm_c67823cf._.js.map