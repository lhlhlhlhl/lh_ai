(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/lesson_si/interview/lowcode/ddm/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@supabase+supabase-js@2.57.4/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$57$2e$4$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://tjohdeqkyualzbwsnljl.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqb2hkZXFreXVhbHpid3NubGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMDgzNTgsImV4cCI6MjA3MzU4NDM1OH0.UpB6VxrDQiDNAV_TPB-wpxqTzlaHI_SkJdTOgJfrxCg"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlowEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+core@11.11.4_@ty_ace34f89a0ccc0e23328187f1ccf56d5/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript) <export ReactFlow as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$background$40$11$2e$3$2e$_c76a4a15777c059e4de0984439ec21e9$2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+background@11.3._c76a4a15777c059e4de0984439ec21e9/node_modules/@reactflow/background/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$controls$40$11$2e$2$2e$14_f56a2eb8ac5edbf6e68dce1b3a006728$2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/node_modules/.pnpm/@reactflow+controls@11.2.14_f56a2eb8ac5edbf6e68dce1b3a006728/node_modules/@reactflow/controls/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lesson_si/interview/lowcode/ddm/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FlowEditor() {
    _s();
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            position: {
                x: 100,
                y: 100
            },
            data: {
                label: '起点'
            }
        }
    ]);
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nodeId, setNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const addNode = ()=>{
        const newId = String(nodeId);
        const newNode = {
            id: newId,
            position: {
                x: 100 + nodeId * 50,
                y: 100
            },
            data: {
                label: "节点 ".concat(newId)
            }
        };
        setNodes((nds)=>[
                ...nds,
                newNode
            ]);
        setEdges((edgs)=>[
                ...edgs,
                {
                    id: "e".concat(nodeId - 1, "-").concat(newId),
                    source: String(nodeId - 1),
                    target: newId
                }
            ]);
        setNodeId((id)=>id + 1);
    };
    const removeNode = ()=>{
        if (nodes.length <= 1) return;
        const lastNode = nodes[nodes.length - 1];
        setNodes((nds)=>nds.slice(0, -1));
        setEdges((edgs)=>edgs.filter((e)=>e.source !== lastNode.id && e.target !== lastNode.id));
        setNodeId((id)=>id - 1);
    };
    const saveFlow = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('flows').insert({
            name: "demo flow",
            nodes,
            edges
        });
        if (error) console.error(error);
        else alert("保存成功");
    };
    const onNodeDoubleClick = (_, node)=>{
        // console.log(node);
        const newLabel = prompt("请输入新的节点内容", node.data.label);
        if (newLabel !== null && newLabel.trim() !== '') {
            setNodes((nds)=>nds.map((n)=>n.id === node.id ? {
                        ...n,
                        data: {
                            ...n.data,
                            label: newLabel
                        }
                    } : n));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlowEditor.useEffect": ()=>{
            const loadFlow = {
                "FlowEditor.useEffect.loadFlow": async ()=>{
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('flows').select('*').order('created_at', {
                        ascending: false
                    }).limit(1).single();
                    console.log(data);
                    if (data) {
                        var _data_node;
                        setNodes(data.nodes || []);
                        setEdges(data.edges || []);
                        const maxId = (_data_node = data.node) === null || _data_node === void 0 ? void 0 : _data_node.map({
                            "FlowEditor.useEffect.loadFlow": (n)=>Number(n.id)
                        }["FlowEditor.useEffect.loadFlow"]).reduce({
                            "FlowEditor.useEffect.loadFlow": (a, b)=>Math.max(a, b)
                        }["FlowEditor.useEffect.loadFlow"], 1);
                    }
                }
            }["FlowEditor.useEffect.loadFlow"];
            loadFlow();
        }
    }["FlowEditor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addNode,
                        style: {
                            marginRight: 10
                        },
                        children: "添加节点"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: removeNode,
                        style: {
                            marginRight: 10
                        },
                        children: "移除节点"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: saveFlow,
                        style: {
                            marginRight: 10
                        },
                        children: "保存到supabase"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$core$40$11$2e$11$2e$4_$40$ty_ace34f89a0ccc0e23328187f1ccf56d5$2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__["default"], {
                nodes: nodes,
                onNodeDoubleClick: onNodeDoubleClick,
                edges: edges,
                fitView: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$background$40$11$2e$3$2e$_c76a4a15777c059e4de0984439ec21e9$2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {}, void 0, false, {
                        fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lesson_si$2f$interview$2f$lowcode$2f$ddm$2f$node_modules$2f2e$pnpm$2f40$reactflow$2b$controls$40$11$2e$2$2e$14_f56a2eb8ac5edbf6e68dce1b3a006728$2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {}, void 0, false, {
                        fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lesson_si/interview/lowcode/ddm/app/FlowEditor.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(FlowEditor, "jvMgyb7LQ0F4GmBK/a+Zxsx3nwc=");
_c = FlowEditor;
var _c;
__turbopack_context__.k.register(_c, "FlowEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_lesson_si_interview_lowcode_ddm_c7429049._.js.map