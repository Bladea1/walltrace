module.exports = [
"[project]/lib/supabase/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "siteUrl",
    ()=>siteUrl,
    "supabaseAnonKey",
    ()=>supabaseAnonKey,
    "supabaseUrl",
    ()=>supabaseUrl
]);
const supabaseUrl = ("TURBOPACK compile-time value", "https://golevvipnvrltrjcbjrq.supabase.co") ?? '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_4BPGe9R55728oU0D8JzbNw_7Kt0xbgV") ?? '';
const siteUrl = ("TURBOPACK compile-time value", "http://localhost:3000") ?? 'http://localhost:3000';
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
}),
"[project]/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerSupabaseClient",
    ()=>createServerSupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/config.ts [app-rsc] (ecmascript)");
;
;
;
async function createServerSupabaseClient() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
        return null;
    }
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseUrl"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAnonKey"], {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>{
                        cookieStore.set(name, value, options);
                    });
                } catch  {
                // Ignored in Server Components.
                }
            }
        }
    });
}
}),
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthState",
    ()=>getAuthState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/config.ts [app-rsc] (ecmascript)");
;
;
async function getAuthState() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
        return {
            configured: false,
            user: null,
            profile: null
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return {
            configured: false,
            user: null,
            profile: null
        };
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            configured: true,
            user: null,
            profile: null
        };
    }
    const { data: profile } = await supabase.from('profiles').select('display_name, role, avatar_url, username').eq('id', user.id).maybeSingle();
    return {
        configured: true,
        user,
        profile: profile ?? null
    };
}
}),
"[project]/components/layout/site-footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SiteFooter({ locale, dictionary }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-white/10 bg-black/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-4xl tracking-[0.14em] text-white",
                            children: "WALLTRACE"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/site-footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 max-w-xl text-sm leading-6 text-white/65",
                            children: dictionary.footer.label
                        }, void 0, false, {
                            fileName: "[project]/components/layout/site-footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/site-footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-6 text-white/65",
                            children: dictionary.footer.rights
                        }, void 0, false, {
                            fileName: "[project]/components/layout/site-footer.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xs uppercase tracking-[0.18em] text-white/52",
                            children: [
                                locale.toUpperCase(),
                                " / 2026"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/site-footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/site-footer.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/site-footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/site-footer.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/site-header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SiteHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SiteHeader() from the server but SiteHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/site-header.tsx <module evaluation>", "SiteHeader");
}),
"[project]/components/layout/site-header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SiteHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SiteHeader() from the server but SiteHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/site-header.tsx", "SiteHeader");
}),
"[project]/components/layout/site-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/layout/site-header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/layout/site-header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/layout/site-shell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/site-footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/site-header.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function SiteShell({ locale, dictionary, children }) {
    const authState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteHeader"], {
                locale: locale,
                dictionary: dictionary,
                isAuthenticated: Boolean(authState.user),
                isAdmin: authState.profile?.role === 'admin',
                profileName: authState.profile?.display_name ?? authState.profile?.username ?? null,
                profileAvatarUrl: authState.profile?.avatar_url ?? null
            }, void 0, false, {
                fileName: "[project]/components/layout/site-shell.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/layout/site-shell.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteFooter"], {
                locale: locale,
                dictionary: dictionary
            }, void 0, false, {
                fileName: "[project]/components/layout/site-shell.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/i18n/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "isValidLocale",
    ()=>isValidLocale,
    "locales",
    ()=>locales
]);
const locales = [
    'ru',
    'en'
];
const defaultLocale = 'ru';
function isValidLocale(value) {
    return locales.includes(value);
}
}),
"[project]/i18n/dictionaries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDictionary",
    ()=>getDictionary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
const dictionaries = {
    ru: {
        meta: {
            title: 'WALLTRACE',
            description: 'Цифровой архив граффити и социальная платформа.'
        },
        nav: {
            home: 'Главная',
            archive: 'Архив',
            artists: 'Художники',
            history: 'История',
            news: 'Новости',
            events: 'События',
            profile: 'Профиль',
            submit: 'Добавить работу',
            login: 'Войти',
            register: 'Регистрация',
            admin: 'Админ'
        },
        common: {
            readMore: 'Подробнее',
            learnMore: 'Узнать больше',
            viewAll: 'Смотреть всё',
            explore: 'Открыть архив',
            join: 'Создать профиль',
            language: 'Язык',
            liveMode: 'Режим Supabase',
            demoMode: 'Демо-режим',
            save: 'Сохранить',
            cancel: 'Отмена',
            back: 'Назад'
        },
        system: {
            supabaseMissingTitle: 'Supabase пока не подключён',
            supabaseMissingText: 'Проект работает в демо-режиме. Публичные страницы уже доступны, а формы авторизации и отправки работ начнут работать после добавления ключей в .env.local и выполнения SQL из папки supabase.',
            needLoginTitle: 'Нужно войти в аккаунт',
            needLoginText: 'Эта часть платформы доступна только после входа в учётную запись.',
            adminOnlyTitle: 'Раздел только для администратора',
            adminOnlyText: 'После регистрации выдай своей почте роль admin в Supabase, и эта панель откроется.',
            emptyState: 'Пока здесь пусто. После подключения базы данных здесь появится реальный контент.'
        },
        home: {
            eyebrow: 'Цифровой архив граффити-культуры',
            title: 'WALLTRACE',
            subtitle: 'Серьёзная платформа, где арт-архив, культурное медиа и сообщество работают вместе.',
            description: 'WALLTRACE объединяет каталог работ, профили художников, интерактивную историю граффити, новости, события и модерируемую пользовательскую публикацию.',
            cards: [
                {
                    title: 'Архив работ',
                    text: 'Кураторский каталог граффити с авторством, контекстом, метаданными и выставочной подачей.'
                },
                {
                    title: 'Художники',
                    text: 'Профили авторов, стиль, активность и связь между признанными художниками и новичками.'
                },
                {
                    title: 'История граффити',
                    text: 'Интерактивная хроника развития граффити — от раннего tagging до фестивалей и цифровых архивов.'
                }
            ],
            ctaPrimary: 'Открыть архив',
            ctaSecondary: 'Создать профиль',
            sections: {
                featured: 'Избранные работы',
                artists: 'Художники',
                timeline: 'История внутри продукта',
                updates: 'Новости и события'
            }
        },
        archive: {
            title: 'Архив работ',
            subtitle: 'Каталог граффити-работ с кураторской подачей, фильтрацией и авторскими карточками.'
        },
        artists: {
            title: 'Художники',
            subtitle: 'Каталог авторов, работающих в разных визуальных направлениях уличного искусства.'
        },
        history: {
            title: 'История граффити',
            subtitle: 'Интерактивный маршрут от первых городских надписей до современной арт-сцены.'
        },
        news: {
            title: 'Новости',
            subtitle: 'Редакционные публикации о событиях, выставках, фестивалях и явлениях граффити-культуры.'
        },
        events: {
            title: 'События',
            subtitle: 'Календарь ключевых активностей: фестивали, джемы, встречи, выставки и городские инициативы.'
        },
        profile: {
            title: 'Профиль художника',
            subtitle: 'Личный кабинет пользователя с редактированием профиля, работами и статусами модерации.',
            fields: {
                displayName: 'Имя / никнейм',
                username: 'Username',
                city: 'Город',
                country: 'Страна',
                style: 'Стиль / направление',
                bio: 'О себе'
            },
            actions: {
                save: 'Сохранить профиль',
                logout: 'Выйти',
                admin: 'Открыть админку'
            },
            stats: {
                total: 'Всего работ',
                approved: 'Опубликовано',
                pending: 'На модерации'
            },
            sections: {
                myWorks: 'Мои работы',
                edit: 'Редактирование профиля'
            }
        },
        auth: {
            loginTitle: 'Вход в WALLTRACE',
            registerTitle: 'Регистрация',
            loginHint: 'После входа откроется профиль, отправка работ и их статусы модерации.',
            registerHint: 'После регистрации создаётся профиль, а почту можно подтвердить через Supabase callback.',
            email: 'Email',
            password: 'Пароль',
            name: 'Имя / никнейм',
            buttonLogin: 'Войти',
            buttonRegister: 'Создать аккаунт',
            goToRegister: 'Нет аккаунта? Зарегистрироваться',
            goToLogin: 'Уже есть аккаунт? Войти'
        },
        submit: {
            title: 'Добавить работу',
            subtitle: 'Пользователь отправляет работу на проверку, администратор решает вопрос публикации.',
            fields: {
                title: 'Название работы',
                author: 'Автор',
                location: 'Место создания',
                year: 'Год',
                style: 'Стиль',
                tags: 'Теги через запятую',
                description: 'Описание',
                image: 'Изображение'
            },
            note: 'Работа сохраняется со статусом pending и не попадает в публичный архив до решения администратора.',
            button: 'Отправить на модерацию'
        },
        admin: {
            title: 'Панель модерации',
            subtitle: 'Базовая админская зона: список pending-работ и действия approve / reject.',
            table: {
                artwork: 'Работа',
                author: 'Автор',
                created: 'Добавлено',
                status: 'Статус',
                actions: 'Действия'
            },
            actions: {
                approve: 'Одобрить',
                reject: 'Отклонить'
            }
        },
        footer: {
            label: 'Digital Graffiti Archive & Social Platform',
            rights: 'Учебный проект WALLTRACE. Пользовательские права на работы сохраняются за авторами.'
        }
    },
    en: {
        meta: {
            title: 'WALLTRACE',
            description: 'Digital graffiti archive and social platform.'
        },
        nav: {
            home: 'Home',
            archive: 'Archive',
            artists: 'Artists',
            history: 'History',
            news: 'News',
            events: 'Events',
            profile: 'Profile',
            submit: 'Submit artwork',
            login: 'Log in',
            register: 'Register',
            admin: 'Admin'
        },
        common: {
            readMore: 'Read more',
            learnMore: 'Learn more',
            viewAll: 'View all',
            explore: 'Explore archive',
            join: 'Create profile',
            language: 'Language',
            liveMode: 'Supabase mode',
            demoMode: 'Demo mode',
            save: 'Save',
            cancel: 'Cancel',
            back: 'Back'
        },
        system: {
            supabaseMissingTitle: 'Supabase is not connected yet',
            supabaseMissingText: 'The project is running in demo mode. Public pages are already available, while auth and submissions will start working after you add keys to .env.local and run the SQL files from the supabase folder.',
            needLoginTitle: 'You need to log in',
            needLoginText: 'This part of the platform is only available after authentication.',
            adminOnlyTitle: 'Administrator access only',
            adminOnlyText: 'After registering, assign the role admin to your email in Supabase and this panel will open.',
            emptyState: 'Nothing is here yet. Once the database is connected, real content will appear here.'
        },
        home: {
            eyebrow: 'Digital archive of graffiti culture',
            title: 'WALLTRACE',
            subtitle: 'A serious platform where art archive, cultural media, and community overlap.',
            description: 'WALLTRACE brings together an artwork catalog, artist profiles, an interactive graffiti history, news, events, and moderated user submissions.',
            cards: [
                {
                    title: 'Artwork archive',
                    text: 'A curated catalog of graffiti works with context, authorship, metadata, and exhibition-style presentation.'
                },
                {
                    title: 'Artists',
                    text: 'Profiles, styles, visible activity, and a bridge between established writers and newcomers.'
                },
                {
                    title: 'Graffiti history',
                    text: 'An interactive timeline following graffiti from early tagging to modern festivals and digital archives.'
                }
            ],
            ctaPrimary: 'Explore archive',
            ctaSecondary: 'Create profile',
            sections: {
                featured: 'Featured works',
                artists: 'Artists',
                timeline: 'History built into the product',
                updates: 'News & events'
            }
        },
        archive: {
            title: 'Archive',
            subtitle: 'A catalog of graffiti works with curated presentation, filtering, and artist-linked records.'
        },
        artists: {
            title: 'Artists',
            subtitle: 'A catalog of authors working across multiple branches of urban visual culture.'
        },
        history: {
            title: 'Graffiti history',
            subtitle: 'An interactive route from the earliest city markings to the contemporary art scene.'
        },
        news: {
            title: 'News',
            subtitle: 'Editorial posts about events, exhibitions, festivals, and movements within graffiti culture.'
        },
        events: {
            title: 'Events',
            subtitle: 'A calendar of key activities: festivals, jams, meetups, exhibitions, and city initiatives.'
        },
        profile: {
            title: 'Artist profile',
            subtitle: 'User dashboard with profile editing, artworks, and moderation statuses.',
            fields: {
                displayName: 'Display name',
                username: 'Username',
                city: 'City',
                country: 'Country',
                style: 'Style / discipline',
                bio: 'About'
            },
            actions: {
                save: 'Save profile',
                logout: 'Log out',
                admin: 'Open admin panel'
            },
            stats: {
                total: 'Total works',
                approved: 'Published',
                pending: 'Pending'
            },
            sections: {
                myWorks: 'My artworks',
                edit: 'Edit profile'
            }
        },
        auth: {
            loginTitle: 'Log in to WALLTRACE',
            registerTitle: 'Create account',
            loginHint: 'After logging in, you will unlock the profile, artwork submissions, and moderation statuses.',
            registerHint: 'After registration, a profile is created and email confirmation can go through the Supabase callback.',
            email: 'Email',
            password: 'Password',
            name: 'Name / nickname',
            buttonLogin: 'Log in',
            buttonRegister: 'Create account',
            goToRegister: 'No account yet? Register',
            goToLogin: 'Already have an account? Log in'
        },
        submit: {
            title: 'Submit artwork',
            subtitle: 'Users submit work for review, while administrators decide whether it goes public.',
            fields: {
                title: 'Artwork title',
                author: 'Author',
                location: 'Location',
                year: 'Year',
                style: 'Style',
                tags: 'Tags separated by comma',
                description: 'Description',
                image: 'Image'
            },
            note: 'The artwork is stored with pending status and does not appear in the public archive until an administrator approves it.',
            button: 'Send for moderation'
        },
        admin: {
            title: 'Moderation panel',
            subtitle: 'Basic admin zone: pending artworks and approve / reject actions.',
            table: {
                artwork: 'Artwork',
                author: 'Author',
                created: 'Created',
                status: 'Status',
                actions: 'Actions'
            },
            actions: {
                approve: 'Approve',
                reject: 'Reject'
            }
        },
        footer: {
            label: 'Digital Graffiti Archive & Social Platform',
            rights: 'WALLTRACE academic project. User rights to artworks remain with their authors.'
        }
    }
};
async function getDictionary(locale) {
    return dictionaries[locale] ?? dictionaries.ru;
}
}),
"[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleLayout,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/site-shell.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/dictionaries.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"].map((locale)=>({
            locale
        }));
}
async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(locale)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteShell"], {
        locale: locale,
        dictionary: dictionary,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/[locale]/layout.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_de90b86d._.js.map