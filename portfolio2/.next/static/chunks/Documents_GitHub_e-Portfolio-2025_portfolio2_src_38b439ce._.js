(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/contact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionCard": "contact-module__IIHU4a__actionCard",
  "cardDescription": "contact-module__IIHU4a__cardDescription",
  "cardIcon": "contact-module__IIHU4a__cardIcon",
  "cardTitle": "contact-module__IIHU4a__cardTitle",
  "contactHero": "contact-module__IIHU4a__contactHero",
  "lead": "contact-module__IIHU4a__lead",
  "primaryCard": "contact-module__IIHU4a__primaryCard",
  "secondaryGrid": "contact-module__IIHU4a__secondaryGrid",
  "title": "contact-module__IIHU4a__title",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/styles/buttons.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn": "buttons-module__K6Hica__btn",
  "primary": "buttons-module__K6Hica__primary",
  "secondary": "buttons-module__K6Hica__secondary",
});
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
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/contact.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/styles/buttons.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/components/ContactModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.5.0_react@19.1.0/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ContactPage() {
    _s();
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactHero,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lead,
                                children: "Have a project or want to chat? I'm all ears."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: "Let's Work Together"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDescription,
                                        children: "Ready to bring your ideas to life? Send me a message and let's discuss your project."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary),
                                        onClick: ()=>setContactOpen(true),
                                        children: "Send a Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Connect on LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDescription,
                                                children: "Let's connect professionally and expand our networks."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary),
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].linkedinHref,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Connect"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Download Resume"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$contact$2f$contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDescription,
                                                children: "Take a detailed look at my experience and qualifications."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$styles$2f$buttons$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary),
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].resumeHref,
                                                download: true,
                                                children: "Download PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: contactOpen,
                onClose: ()=>setContactOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/contact/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ContactPage, "/ec7FjeaIwRh7sqB8/tYI4NzeSI=");
_c = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_e-Portfolio-2025_portfolio2_src_38b439ce._.js.map