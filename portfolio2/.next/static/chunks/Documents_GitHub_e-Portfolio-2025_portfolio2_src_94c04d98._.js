(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/home.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "home-module__I_qDNG__badge",
  "ctaRow": "home-module__I_qDNG__ctaRow",
  "gridBackground": "home-module__I_qDNG__gridBackground",
  "gridFade": "home-module__I_qDNG__gridFade",
  "hero": "home-module__I_qDNG__hero",
  "inner": "home-module__I_qDNG__inner",
  "lead": "home-module__I_qDNG__lead",
  "socialIcon": "home-module__I_qDNG__socialIcon",
  "socialLink": "home-module__I_qDNG__socialLink",
  "socials": "home-module__I_qDNG__socials",
  "tagline": "home-module__I_qDNG__tagline",
  "title": "home-module__I_qDNG__title",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/styles/buttons.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn": "buttons-module__K6Hica__btn",
  "primary": "buttons-module__K6Hica__primary",
  "secondary": "buttons-module__K6Hica__secondary",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/content/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "site",
    ()=>site
]);
const site = {
    name: "Michael Innella",
    tagline: "Full-Stack Developer | Front-end Engineer | UI/UX Designer",
    email: "mainnella@gmail.com",
    socials: [
        {
            name: "GitHub",
            href: "https://github.com/Mike-Innella"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/michael-innella-b5567021b/"
        },
        {
            name: "Email",
            href: "mailto:mainnella@gmail.com"
        }
    ],
    resumeHref: "/resume.pdf",
    get linkedinHref () {
        const li = this.socials.find((x)=>x.name.toLowerCase() === "linkedin");
        var _li_href;
        return (_li_href = li === null || li === void 0 ? void 0 : li.href) !== null && _li_href !== void 0 ? _li_href : "https://www.linkedin.com";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ProximityGrid/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cell": "styles-module__wJjT0W__cell",
  "gridFade": "styles-module__wJjT0W__gridFade",
  "root": "styles-module__wJjT0W__root",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ProximityGrid/ProximityGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProximityGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ProximityGrid$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ProximityGrid/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const clamp = (n, min, max)=>Math.max(min, Math.min(max, n));
const invLerp = (a, b, v)=>(v - a) / (b - a);
const easeOutQuad = (t)=>1 - (1 - t) * (1 - t);
const falloff = (d, r)=>{
    if (r <= 0) return 0;
    const t = clamp(1 - invLerp(0, r, d), 0, 1);
    return easeOutQuad(t);
};
function ProximityGrid(param) {
    let { cellSizePx = 20, gapPx = 8, radiusPx = 220, maxScale = 1.5, maxTranslatePx = 6, baseColorHex = "#0e0e0e", hotColorHex = "#1f9ec1", ariaLabel = "Interactive proximity grid", className } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cellsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [prefersReduced, setPrefersReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // responsive rows/cols computed from container size
    const [dims, setDims] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rows: 12,
        cols: 20
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProximityGrid.useEffect": ()=>{
            var _m_addEventListener;
            const m = window.matchMedia("(prefers-reduced-motion: reduce)");
            const l = {
                "ProximityGrid.useEffect.l": ()=>setPrefersReduced(m.matches)
            }["ProximityGrid.useEffect.l"];
            l();
            (_m_addEventListener = m.addEventListener) === null || _m_addEventListener === void 0 ? void 0 : _m_addEventListener.call(m, "change", l);
            return ({
                "ProximityGrid.useEffect": ()=>{
                    var _m_removeEventListener;
                    return (_m_removeEventListener = m.removeEventListener) === null || _m_removeEventListener === void 0 ? void 0 : _m_removeEventListener.call(m, "change", l);
                }
            })["ProximityGrid.useEffect"];
        }
    }["ProximityGrid.useEffect"], []);
    // ResizeObserver -> compute rows/cols to fill the container
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProximityGrid.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "ProximityGrid.useEffect": ()=>{
                    const r = el.getBoundingClientRect();
                    const step = cellSizePx + gapPx;
                    const cols = Math.max(4, Math.floor((r.width + gapPx) / step));
                    const rows = Math.max(4, Math.floor((r.height + gapPx) / step));
                    setDims({
                        rows,
                        cols
                    });
                    // re-measure cell centers on size change (next effect handles it)
                    queueFrame();
                }
            }["ProximityGrid.useEffect"]);
            ro.observe(el);
            return ({
                "ProximityGrid.useEffect": ()=>ro.disconnect()
            })["ProximityGrid.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ProximityGrid.useEffect"], [
        cellSizePx,
        gapPx
    ]);
    // Build style (grid template) from computed rows/cols
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProximityGrid.useMemo[style]": ()=>({
                gridTemplateColumns: "repeat(".concat(dims.cols, ", ").concat(cellSizePx, "px)"),
                gridTemplateRows: "repeat(".concat(dims.rows, ", ").concat(cellSizePx, "px)"),
                gap: "".concat(gapPx, "px"),
                "--cell-size": "".concat(cellSizePx, "px"),
                "--cell-base": baseColorHex
            })
    }["ProximityGrid.useMemo[style]"], [
        dims,
        cellSizePx,
        gapPx,
        baseColorHex
    ]);
    const count = dims.rows * dims.cols;
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProximityGrid.useMemo[ids]": ()=>Array.from({
                length: count
            }, {
                "ProximityGrid.useMemo[ids]": (_, i)=>i
            }["ProximityGrid.useMemo[ids]"])
    }["ProximityGrid.useMemo[ids]"], [
        count
    ]);
    // After each render that changes cell count/size, measure centers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProximityGrid.useEffect": ()=>{
            const root = ref.current;
            if (!root) return;
            const rect = root.getBoundingClientRect();
            const children = Array.from(root.querySelectorAll("[data-cell='1']"));
            cellsRef.current = children.map({
                "ProximityGrid.useEffect": (el)=>{
                    const r = el.getBoundingClientRect();
                    return {
                        el,
                        cx: r.left - rect.left + r.width / 2,
                        cy: r.top - rect.top + r.height / 2
                    };
                }
            }["ProximityGrid.useEffect"]);
        }
    }["ProximityGrid.useEffect"], [
        count,
        cellSizePx,
        gapPx
    ]);
    // Listen globally so background can be pointer-events:none and still react
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProximityGrid.useEffect": ()=>{
            const onPointerMove = {
                "ProximityGrid.useEffect.onPointerMove": (e)=>{
                    const root = ref.current;
                    if (!root) return;
                    const rect = root.getBoundingClientRect();
                    pointerRef.current = {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    };
                    queueFrame();
                }
            }["ProximityGrid.useEffect.onPointerMove"];
            const onPointerLeave = {
                "ProximityGrid.useEffect.onPointerLeave": ()=>{
                    pointerRef.current = null;
                    queueFrame();
                }
            }["ProximityGrid.useEffect.onPointerLeave"];
            const onTouchMove = {
                "ProximityGrid.useEffect.onTouchMove": (e)=>{
                    const t = e.touches[0];
                    const root = ref.current;
                    if (!t || !root) return;
                    const rect = root.getBoundingClientRect();
                    pointerRef.current = {
                        x: t.clientX - rect.left,
                        y: t.clientY - rect.top
                    };
                    queueFrame();
                }
            }["ProximityGrid.useEffect.onTouchMove"];
            const onTouchEnd = {
                "ProximityGrid.useEffect.onTouchEnd": ()=>{
                    pointerRef.current = null;
                    queueFrame();
                }
            }["ProximityGrid.useEffect.onTouchEnd"];
            window.addEventListener("pointermove", onPointerMove, {
                passive: true
            });
            window.addEventListener("pointerleave", onPointerLeave);
            window.addEventListener("touchmove", onTouchMove, {
                passive: true
            });
            window.addEventListener("touchend", onTouchEnd);
            return ({
                "ProximityGrid.useEffect": ()=>{
                    window.removeEventListener("pointermove", onPointerMove);
                    window.removeEventListener("pointerleave", onPointerLeave);
                    window.removeEventListener("touchmove", onTouchMove);
                    window.removeEventListener("touchend", onTouchEnd);
                }
            })["ProximityGrid.useEffect"];
        }
    }["ProximityGrid.useEffect"], []);
    const queueFrame = ()=>{
        if (rafRef.current != null) return;
        rafRef.current = requestAnimationFrame(()=>{
            rafRef.current = null;
            draw();
        });
    };
    // Map [0..1] proximity intensity -> subtle glow
    const glowShadow = (t)=>{
        if (t <= 0) return "0 0 0rem #1F9EC100";
        const blurRem = 0.5 + 0.5 * t; // 0.5rem → 1rem
        const alpha = Math.round(0x59 * t) // 0x59 ≈ 0.35*255
        .toString(16).padStart(2, "0");
        return "0 0 ".concat(blurRem, "rem #1f9ec1").concat(alpha);
    };
    const mixHex = (a, b, t)=>{
        const p = (h)=>parseInt(h, 16);
        const f = (n)=>clamp(n, 0, 255).toString(16).padStart(2, "0");
        const A = {
            r: p(a.slice(1, 3)),
            g: p(a.slice(3, 5)),
            b: p(a.slice(5, 7))
        };
        const B = {
            r: p(b.slice(1, 3)),
            g: p(b.slice(3, 5)),
            b: p(b.slice(5, 7))
        };
        const m = (x, y)=>Math.round(x + (y - x) * t);
        return "#".concat(f(m(A.r, B.r))).concat(f(m(A.g, B.g))).concat(f(m(A.b, B.b)));
    };
    const draw = ()=>{
        const cells = cellsRef.current;
        const p = pointerRef.current;
        // Convert radius from px to rem for consistent scaling
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const radiusRem = radiusPx / rootFontSize;
        if (prefersReduced || !p) {
            for (const c of cells){
                c.el.style.transform = "translate3d(0px,0px,0px) scale(1)";
                c.el.style.background = baseColorHex;
                c.el.style.boxShadow = "0 0 0rem #1F9EC100";
            }
            return;
        }
        for (const c of cells){
            const dx = c.cx - p.x;
            const dy = c.cy - p.y;
            const dist = Math.hypot(dx, dy);
            const t = falloff(dist, radiusPx);
            const inv = dist ? 1 / dist : 0;
            const tx = -dx * inv * (maxTranslatePx * t);
            const ty = -dy * inv * (maxTranslatePx * t);
            const sc = 1 + (maxScale - 1) * t;
            c.el.style.transform = "translate3d(".concat(tx.toFixed(2), "px, ").concat(ty.toFixed(2), "px, 0) scale(").concat(sc.toFixed(3), ")");
            c.el.style.background = mixHex(baseColorHex, hotColorHex, t);
            c.el.style.boxShadow = glowShadow(t);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ProximityGrid$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root, " ").concat(className !== null && className !== void 0 ? className : ""),
        style: style,
        role: "img",
        "aria-label": ariaLabel,
        children: ids.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-cell": "1",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ProximityGrid$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell,
                "aria-hidden": "true"
            }, i, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ProximityGrid/ProximityGrid.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ProximityGrid/ProximityGrid.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_s(ProximityGrid, "9aodnHZQhKy6fngUe55Wx273BhY=");
_c = ProximityGrid;
var _c;
__turbopack_context__.k.register(_c, "ProximityGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__8LRkIW__backdrop",
  "backdropFadeIn": "Modal-module__8LRkIW__backdropFadeIn",
  "dialog": "Modal-module__8LRkIW__dialog",
  "dialogSlideIn": "Modal-module__8LRkIW__dialogSlideIn",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/Modal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Modal(param) {
    let { open, onClose, labelledBy, describedBy, children } = param;
    _s();
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Restore focus to the last focused element when closing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (open) {
                lastFocused.current = document.activeElement;
                // Only set initial focus if no element is already focused
                const focusTimer = setTimeout({
                    "Modal.useEffect.focusTimer": ()=>{
                        if (document.activeElement === document.body) {
                            var _dialogRef_current;
                            const first = (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.querySelector("input, textarea, select, button, [href], [tabindex]:not([tabindex='-1'])");
                            first === null || first === void 0 ? void 0 : first.focus();
                        }
                    }
                }["Modal.useEffect.focusTimer"], 150);
                const onKey = {
                    "Modal.useEffect.onKey": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                            return;
                        }
                        // Very conservative focus trap - only activate when actually leaving modal
                        if (e.key === "Tab") {
                            var _dialogRef_current;
                            const focusables = Array.from(((_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.querySelectorAll("input, textarea, select, button, [href], [tabindex]:not([tabindex='-1'])")) || []).filter({
                                "Modal.useEffect.onKey.focusables": (el)=>{
                                    // Check if element is disabled (for form elements) and visible
                                    const isDisabled = 'disabled' in el && el.disabled;
                                    const isVisible = el.offsetParent !== null;
                                    return !isDisabled && isVisible;
                                }
                            }["Modal.useEffect.onKey.focusables"]);
                            if (focusables.length === 0) return;
                            const firstEl = focusables[0];
                            const lastEl = focusables[focusables.length - 1];
                            const activeEl = document.activeElement;
                            // Only prevent default if we're actually at the boundaries trying to leave
                            if (e.shiftKey && activeEl === firstEl) {
                                e.preventDefault();
                                lastEl.focus();
                            } else if (!e.shiftKey && activeEl === lastEl) {
                                e.preventDefault();
                                firstEl.focus();
                            }
                        // Otherwise, let natural Tab behavior work completely normally
                        }
                    }
                }["Modal.useEffect.onKey"];
                document.addEventListener("keydown", onKey);
                document.body.style.overflow = "hidden";
                return ({
                    "Modal.useEffect": ()=>{
                        clearTimeout(focusTimer);
                        document.removeEventListener("keydown", onKey);
                        document.body.style.overflow = "";
                        // Restore focus
                        if (lastFocused.current) {
                            setTimeout({
                                "Modal.useEffect": ()=>{
                                    var _lastFocused_current_focus, _lastFocused_current;
                                    (_lastFocused_current = lastFocused.current) === null || _lastFocused_current === void 0 ? void 0 : (_lastFocused_current_focus = _lastFocused_current.focus) === null || _lastFocused_current_focus === void 0 ? void 0 : _lastFocused_current_focus.call(_lastFocused_current);
                                }
                            }["Modal.useEffect"], 0);
                        }
                    }
                })["Modal.useEffect"];
            }
        }
    }["Modal.useEffect"], [
        open,
        onClose
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
        "aria-hidden": false,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialog,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": labelledBy,
            "aria-describedby": describedBy,
            ref: dialogRef,
            onClick: (e)=>e.stopPropagation(),
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/Modal.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/Modal.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this), document.body);
}
_s(Modal, "geY0lTi7oMJ9sr01ek3++gbkeW8=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/lib/email/emailjs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$emailjs$2b$browser$40$4$2e$4$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@emailjs+browser@4.4.1/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
"use client";
;
var _process_env_NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const SERVICE_ID = (_process_env_NEXT_PUBLIC_EMAILJS_SERVICE_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) !== null && _process_env_NEXT_PUBLIC_EMAILJS_SERVICE_ID !== void 0 ? _process_env_NEXT_PUBLIC_EMAILJS_SERVICE_ID : "service_mygmail";
var _process_env_NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const TEMPLATE_ID = (_process_env_NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) !== null && _process_env_NEXT_PUBLIC_EMAILJS_TEMPLATE_ID !== void 0 ? _process_env_NEXT_PUBLIC_EMAILJS_TEMPLATE_ID : "template_hsjxk1d";
var _process_env_NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const PUBLIC_KEY = (_process_env_NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) !== null && _process_env_NEXT_PUBLIC_EMAILJS_PUBLIC_KEY !== void 0 ? _process_env_NEXT_PUBLIC_EMAILJS_PUBLIC_KEY : "cePFoU8dvsaDAlAyz";
async function sendContactEmail(payload) {
    // Map to your EmailJS template variable names
    const templateParams = {
        from_name: payload.name,
        reply_to: payload.email,
        message: payload.message
    };
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$emailjs$2b$browser$40$4$2e$4$2e$1$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY
    });
    return res; // { status, text }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "ContactModal-module__CikeZa__actions",
  "btn": "ContactModal-module__CikeZa__btn",
  "error": "ContactModal-module__CikeZa__error",
  "form": "ContactModal-module__CikeZa__form",
  "help": "ContactModal-module__CikeZa__help",
  "input": "ContactModal-module__CikeZa__input",
  "label": "ContactModal-module__CikeZa__label",
  "lead": "ContactModal-module__CikeZa__lead",
  "secondary": "ContactModal-module__CikeZa__secondary",
  "stateWrap": "ContactModal-module__CikeZa__stateWrap",
  "success": "ContactModal-module__CikeZa__success",
  "textarea": "ContactModal-module__CikeZa__textarea",
  "title": "ContactModal-module__CikeZa__title",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$lib$2f$email$2f$emailjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/lib/email/emailjs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ContactModal(param) {
    let { open, onClose } = param;
    _s();
    const [ui, setUi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const validEmail = (v)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isValid = form.name.trim().length >= 1 && validEmail(form.email.trim()) && form.message.trim().length >= 5;
    async function onSubmit(e) {
        e.preventDefault();
        if (!isValid) return;
        setUi("loading");
        setError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$lib$2f$email$2f$emailjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendContactEmail"])(form);
            setUi("success");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
            setUi("error");
        }
    }
    function resetAndClose() {
        setUi("idle");
        setError(null);
        setForm({
            name: "",
            email: "",
            message: ""
        });
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: resetAndClose,
        labelledBy: "contactTitle",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "contactTitle",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Let's connect"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lead,
                children: "Fill this out and I'll get back to you shortly."
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            ui === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateWrap,
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success,
                        children: "✅ Message sent. Thanks for reaching out!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                        onClick: resetAndClose,
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                onSubmit: onSubmit,
                "aria-describedby": "contactHelp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                type: "text",
                                name: "name",
                                autoComplete: "name",
                                required: true,
                                value: form.name,
                                onChange: (e)=>setForm({
                                        ...form,
                                        name: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                type: "email",
                                name: "email",
                                autoComplete: "email",
                                required: true,
                                value: form.email,
                                onChange: (e)=>setForm({
                                        ...form,
                                        email: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                name: "message",
                                rows: 6,
                                required: true,
                                value: form.message,
                                onChange: (e)=>setForm({
                                        ...form,
                                        message: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "contactHelp",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].help,
                        children: "Please include any relevant links or timelines."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    ui === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                        children: [
                            "❌ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 110,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary),
                                onClick: resetAndClose,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                                disabled: !isValid || ui === "loading",
                                "aria-busy": ui === "loading",
                                children: ui === "loading" ? "Sending…" : "Send message"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ContactModal, "KpeLgfWyNoxZSIBmxkLXp74o2Tw=");
_c = ContactModal;
var _c;
__turbopack_context__.k.register(_c, "ContactModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/styles/buttons.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ProximityGrid$2f$ProximityGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ProximityGrid/ProximityGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.5.0_react@19.1.0/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.5.0_react@19.1.0/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridBackground,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ProximityGrid$2f$ProximityGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        /* rows/cols removed for responsive fit */ cellSizePx: 8,
                        gapPx: 48,
                        radiusPx: 120,
                        maxScale: 1.5,
                        maxTranslatePx: 6,
                        baseColorHex: "#0e0e0e",
                        hotColorHex: "#3f8cff"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridFade,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].name
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].tagline
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lead,
                                children: "I design and build fast, accessible web apps with a clean UI and a pragmatic, ship-first mindset."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/projects",
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary),
                                        children: "View Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary),
                                        children: "Contact Me"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials,
                                "aria-label": "Social links",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].socials.map((soc)=>{
                                    const isEmail = soc.name.toLowerCase() === "email";
                                    const isGithub = soc.name.toLowerCase() === "github";
                                    const isLinkedin = soc.name.toLowerCase() === "linkedin";
                                    let IconComponent = null;
                                    if (isGithub) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"];
                                    else if (isLinkedin) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"];
                                    else if (isEmail) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMail"];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: isEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setContactOpen(true),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon,
                                            "aria-label": "".concat(soc.name, " - Open contact modal"),
                                            "aria-haspopup": "dialog",
                                            "aria-controls": "contactTitle",
                                            children: IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: soc.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon,
                                            "aria-label": "".concat(soc.name, " - Open in new tab"),
                                            children: IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 23
                                        }, this)
                                    }, soc.name, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: contactOpen,
                onClose: ()=>setContactOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "/ec7FjeaIwRh7sqB8/tYI4NzeSI=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_e-Portfolio-2025_portfolio2_src_94c04d98._.js.map