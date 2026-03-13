module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/shared/notice-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoticeCard",
    ()=>NoticeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function NoticeCard({ title, text, variant = 'info' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `notice notice-${variant}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display text-3xl tracking-[0.06em]",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/shared/notice-card.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-3xl text-sm leading-7 text-white/80",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/shared/notice-card.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/notice-card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/page-hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function PageHero({ eyebrow, title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel panel-glow p-6 md:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pill",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/shared/page-hero.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-5 font-display text-6xl leading-none tracking-[0.1em] md:text-8xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/shared/page-hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 max-w-3xl text-lg leading-8 text-white/72 md:text-xl",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/shared/page-hero.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/page-hero.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/update-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateCard",
    ()=>UpdateCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function UpdateCard({ item }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/52",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pill",
                        children: item.category ?? item.type ?? 'Update'
                    }, void 0, false, {
                        fileName: "[project]/components/shared/update-card.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    item.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item.meta
                    }, void 0, false, {
                        fileName: "[project]/components/shared/update-card.tsx",
                        lineNumber: 18,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/update-card.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-5 font-display text-4xl leading-none tracking-[0.06em]",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/components/shared/update-card.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm leading-7 text-white/70",
                children: item.excerpt ?? item.text ?? ''
            }, void 0, false, {
                fileName: "[project]/components/shared/update-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-5 inline-flex text-xs uppercase tracking-[0.16em] text-white/60 transition group-hover:text-white",
                children: "Open article →"
            }, void 0, false, {
                fileName: "[project]/components/shared/update-card.tsx",
                lineNumber: 22,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true);
    return item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        className: "group panel block p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20",
        children: content
    }, void 0, false, {
        fileName: "[project]/components/shared/update-card.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "panel p-5",
        children: content
    }, void 0, false, {
        fileName: "[project]/components/shared/update-card.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "artists",
    ()=>artists,
    "eventItems",
    ()=>eventItems,
    "featuredArtworks",
    ()=>featuredArtworks,
    "historyEntries",
    ()=>historyEntries,
    "newsPosts",
    ()=>newsPosts
]);
const featuredArtworks = [
    {
        id: 'mock-1',
        slug: 'night-signal',
        title: 'Night Signal',
        author_name: 'Raze',
        location_name: 'Berlin, Germany',
        created_year: '2024',
        style: 'Wildstyle',
        description: 'Контрастная композиция с индустриальными формами, резким светом и ритмикой ночного города.',
        image_url: '',
        tags: [
            'night',
            'signal',
            'wildstyle'
        ],
        status: 'approved',
        locale: 'ru',
        created_at: new Date().toISOString()
    },
    {
        id: 'mock-2',
        slug: 'concrete-bloom',
        title: 'Concrete Bloom',
        author_name: 'Nila',
        location_name: 'Rotterdam, Netherlands',
        created_year: '2025',
        style: 'Abstract Lettering',
        description: 'Смешение жёсткой типографики и органических форм на серой городской поверхности.',
        image_url: '',
        tags: [
            'abstract',
            'lettering',
            'bloom'
        ],
        status: 'approved',
        locale: 'ru',
        created_at: new Date().toISOString()
    },
    {
        id: 'mock-3',
        slug: 'transit-echo',
        title: 'Transit Echo',
        author_name: 'Mirok',
        location_name: 'Warsaw, Poland',
        created_year: '2023',
        style: 'Character',
        description: 'Работа о движении, памяти маршрутов и визуальном шуме современного мегаполиса.',
        image_url: '',
        tags: [
            'character',
            'transit',
            'echo'
        ],
        status: 'approved',
        locale: 'ru',
        created_at: new Date().toISOString()
    },
    {
        id: 'mock-4',
        slug: 'wall-script',
        title: 'Wall Script',
        author_name: 'Aven',
        location_name: 'Antwerp, Belgium',
        created_year: '2022',
        style: 'Lettering',
        description: 'Выверенная работа с плотной буквой, тенью и спокойным ритмом индустриального фасада.',
        image_url: '',
        tags: [
            'lettering',
            'wall',
            'script'
        ],
        status: 'approved',
        locale: 'en',
        created_at: new Date().toISOString()
    }
];
const artists = [
    {
        id: 'artist-1',
        display_name: 'Raze',
        city: 'Berlin',
        style: 'Wildstyle / Letterform',
        bio: 'Работает с тяжёлой типографикой и архитектурной логикой городских поверхностей.'
    },
    {
        id: 'artist-2',
        display_name: 'Nila',
        city: 'Rotterdam',
        style: 'Abstract / Mural',
        bio: 'Соединяет цвет, форму и ритм стен в масштабных живописных работах.'
    },
    {
        id: 'artist-3',
        display_name: 'Mirok',
        city: 'Warsaw',
        style: 'Character / Narrative',
        bio: 'Фокусируется на персонажах, сюжетных композициях и городской памяти.'
    }
];
const historyEntries = [
    {
        id: 'hist-1',
        locale: 'ru',
        era_label: 'Origins',
        year_label: '1960s',
        title: 'Ранние городские надписи',
        body: 'Появление заметных подписей и первых повторяющихся имён в городской среде. Этот этап важен как визуальная предпосылка культуры tag.',
        accent: 'Street marks',
        sort_order: 1,
        is_published: true
    },
    {
        id: 'hist-2',
        locale: 'ru',
        era_label: 'Tagging',
        year_label: '1970s',
        title: 'Рост tagging culture',
        body: 'Формирование узнаваемой практики tag, распространение имён через транспортную сеть и появление визуальной конкуренции между авторами.',
        accent: 'Transit lines',
        sort_order: 2,
        is_published: true
    },
    {
        id: 'hist-3',
        locale: 'ru',
        era_label: 'Global scene',
        year_label: '1980s',
        title: 'Глобальное внимание',
        body: 'Граффити становится заметной частью уличной культуры, попадает в медиа, музыкальную среду и выставочные пространства.',
        accent: 'Media shift',
        sort_order: 3,
        is_published: true
    },
    {
        id: 'hist-4',
        locale: 'ru',
        era_label: 'Archive age',
        year_label: '2000s+',
        title: 'Архивирование и фестивали',
        body: 'Появляются фестивали, кураторские площадки, цифровые коллекции и исследовательские проекты, фиксирующие граффити как культурное наследие.',
        accent: 'Digital archive',
        sort_order: 4,
        is_published: true
    },
    {
        id: 'hist-en-1',
        locale: 'en',
        era_label: 'Origins',
        year_label: '1960s',
        title: 'Early urban markings',
        body: 'Visible signatures and recurring names begin to appear in the city, laying the groundwork for later tagging culture.',
        accent: 'Street marks',
        sort_order: 1,
        is_published: true
    },
    {
        id: 'hist-en-2',
        locale: 'en',
        era_label: 'Tagging',
        year_label: '1970s',
        title: 'The rise of tagging culture',
        body: 'Tags spread through transit lines and the city becomes a surface for competition, rhythm, and visibility.',
        accent: 'Transit lines',
        sort_order: 2,
        is_published: true
    },
    {
        id: 'hist-en-3',
        locale: 'en',
        era_label: 'Global scene',
        year_label: '1980s',
        title: 'Global attention',
        body: 'Graffiti enters media, music, and exhibition spaces, becoming a visible branch of contemporary street culture.',
        accent: 'Media shift',
        sort_order: 3,
        is_published: true
    },
    {
        id: 'hist-en-4',
        locale: 'en',
        era_label: 'Archive age',
        year_label: '2000s+',
        title: 'Archives and festivals',
        body: 'Festivals, curated spaces, and digital collections begin documenting graffiti as both a living scene and cultural memory.',
        accent: 'Digital archive',
        sort_order: 4,
        is_published: true
    }
];
const newsPosts = [
    {
        id: 'news-1',
        locale: 'ru',
        slug: 'why-archive-matters',
        category: 'Editorial',
        title: 'Почему архивные платформы важны для граффити-культуры',
        excerpt: 'Цифровой архив сохраняет не только изображение, но и контекст: автора, место, время и культурную связь между поколениями.',
        body: 'Архивная платформа помогает удерживать граффити вне логики случайного исчезновения. Когда работа получает карточку, описание, автора и место, она превращается из разовой городской поверхности в часть культурной памяти. Для WALLTRACE это ключевая идея: не просто показывать работы, а выстраивать связи между авторами, эпохами и городами.',
        cover_image_url: '',
        is_published: true,
        published_at: '2026-02-15T10:00:00.000Z'
    },
    {
        id: 'news-2',
        locale: 'ru',
        slug: 'festival-format-europe',
        category: 'News',
        title: 'Фестивальный формат и новая публичность граффити в Европе',
        excerpt: 'Легальные стены, кураторские подборки и открытые сессии меняют способ взаимодействия зрителя с уличным искусством.',
        body: 'Современные фестивали превращают граффити в публичный диалог между художником, городом и аудиторией. Для архивной платформы это особенно важно: событие не заканчивается стеной, а продолжается в документации, интервью, карточках работ и медиаматериалах.',
        cover_image_url: '',
        is_published: true,
        published_at: '2026-03-01T10:00:00.000Z'
    },
    {
        id: 'news-en-1',
        locale: 'en',
        slug: 'why-archive-platforms-matter',
        category: 'Editorial',
        title: 'Why archival platforms matter for graffiti culture',
        excerpt: 'A digital archive preserves more than the image itself: it preserves authorship, location, timing, and continuity.',
        body: 'An archival platform keeps graffiti from disappearing into pure ephemerality. Once a work has a record, metadata, and context, it becomes part of cultural memory rather than only a fleeting urban surface. WALLTRACE is built around that logic.',
        cover_image_url: '',
        is_published: true,
        published_at: '2026-02-15T10:00:00.000Z'
    },
    {
        id: 'news-en-2',
        locale: 'en',
        slug: 'festival-format-europe-en',
        category: 'News',
        title: 'Festival formats and the new public visibility of graffiti in Europe',
        excerpt: 'Legal walls, curated sessions, and open calls are changing how audiences encounter urban art.',
        body: 'Contemporary festivals turn graffiti into a public conversation between artist, city, and audience. For an archive platform, this matters because the event can continue through documentation, artist pages, artwork records, and editorial context.',
        cover_image_url: '',
        is_published: true,
        published_at: '2026-03-01T10:00:00.000Z'
    }
];
const eventItems = [
    {
        id: 'event-1',
        locale: 'ru',
        slug: 'open-wall-session-rotterdam',
        title: 'Open Wall Session',
        city: 'Rotterdam',
        venue: 'Open Yard',
        summary: 'Открытая сессия для художников и зрителей с кураторским обсуждением работ и их документацией.',
        body: 'Формат открытой стены важен не только как практика создания, но и как точка встречи сообщества. Для WALLTRACE такие события — естественный мост между архивом и живой сценой.',
        starts_at: '2026-04-14T17:00:00.000Z',
        ends_at: '2026-04-14T21:00:00.000Z',
        is_published: true
    },
    {
        id: 'event-2',
        locale: 'ru',
        slug: 'archive-talk-amsterdam',
        title: 'Archive Talk',
        city: 'Amsterdam',
        venue: 'City Lab',
        summary: 'Публичная дискуссия о документировании граффити и роли цифровых архивов.',
        body: 'Разговор о том, как переводить уличные работы в цифровой формат без потери контекста: места, автора, времени и городской среды.',
        starts_at: '2026-05-28T18:30:00.000Z',
        ends_at: '2026-05-28T20:00:00.000Z',
        is_published: true
    },
    {
        id: 'event-en-1',
        locale: 'en',
        slug: 'open-wall-session-rotterdam-en',
        title: 'Open Wall Session',
        city: 'Rotterdam',
        venue: 'Open Yard',
        summary: 'An open session for artists and visitors with a curatorial discussion and live documentation.',
        body: 'Open wall formats matter not only as acts of creation, but also as meeting points for scene-building, public dialogue, and future archiving.',
        starts_at: '2026-04-14T17:00:00.000Z',
        ends_at: '2026-04-14T21:00:00.000Z',
        is_published: true
    },
    {
        id: 'event-en-2',
        locale: 'en',
        slug: 'archive-talk-amsterdam-en',
        title: 'Archive Talk',
        city: 'Amsterdam',
        venue: 'City Lab',
        summary: 'A public talk on documenting graffiti and the role of digital archives.',
        body: 'A conversation on how street works can be translated into digital records without losing the context of place, authorship, time, and urban surface.',
        starts_at: '2026-05-28T18:30:00.000Z',
        ends_at: '2026-05-28T20:00:00.000Z',
        is_published: true
    }
];
}),
"[project]/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArtistById",
    ()=>getArtistById,
    "getArtistFollowState",
    ()=>getArtistFollowState,
    "getArtworkBySlug",
    ()=>getArtworkBySlug,
    "getArtworkEngagement",
    ()=>getArtworkEngagement,
    "getEventBySlug",
    ()=>getEventBySlug,
    "getNewsPostBySlug",
    ()=>getNewsPostBySlug,
    "listAdminEventItems",
    ()=>listAdminEventItems,
    "listAdminHistoryEntries",
    ()=>listAdminHistoryEntries,
    "listAdminNewsPosts",
    ()=>listAdminNewsPosts,
    "listApprovedArtworks",
    ()=>listApprovedArtworks,
    "listArchiveStyles",
    ()=>listArchiveStyles,
    "listArtistArtworks",
    ()=>listArtistArtworks,
    "listArtists",
    ()=>listArtists,
    "listArtworkComments",
    ()=>listArtworkComments,
    "listEventItems",
    ()=>listEventItems,
    "listFavoriteArtworks",
    ()=>listFavoriteArtworks,
    "listHistoryEntries",
    ()=>listHistoryEntries,
    "listNewsPosts",
    ()=>listNewsPosts,
    "listRelatedArtworks",
    ()=>listRelatedArtworks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
;
;
async function listApprovedArtworks(options) {
    const { style, query, limit = 12 } = options ?? {};
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return filterMockArtworks({
            style,
            query
        }).slice(0, limit);
    }
    let request = supabase.from('artworks').select('*').eq('status', 'approved').order('created_at', {
        ascending: false
    }).limit(limit);
    if (style) {
        request = request.ilike('style', `%${style}%`);
    }
    if (query) {
        const safe = escapeLike(query);
        request = request.or(`title.ilike.%${safe}%,author_name.ilike.%${safe}%,location_name.ilike.%${safe}%,description.ilike.%${safe}%`);
    }
    const { data, error } = await request;
    if (error || !data) {
        return filterMockArtworks({
            style,
            query
        }).slice(0, limit);
    }
    if (data.length === 0) {
        return [];
    }
    return data;
}
async function getArtworkBySlug(slug) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].find((item)=>item.slug === slug) ?? null;
    }
    const { data, error } = await supabase.from('artworks').select('*').eq('slug', slug).eq('status', 'approved').maybeSingle();
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].find((item)=>item.slug === slug) ?? null;
    }
    return data ?? null;
}
async function listRelatedArtworks(current, limit = 3) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].filter((item)=>item.slug !== current.slug).slice(0, limit);
    }
    let request = supabase.from('artworks').select('*').eq('status', 'approved').neq('slug', current.slug).order('created_at', {
        ascending: false
    }).limit(limit);
    if (current.style) {
        request = request.ilike('style', `%${current.style}%`);
    }
    const { data, error } = await request;
    if (error || !data || data.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].filter((item)=>item.slug !== current.slug).slice(0, limit);
    }
    return data;
}
async function listArchiveStyles() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return uniqueStyles(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"]);
    }
    const { data, error } = await supabase.from('artworks').select('style').eq('status', 'approved').order('created_at', {
        ascending: false
    }).limit(100);
    if (error || !data || data.length === 0) {
        return uniqueStyles(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"]);
    }
    return Array.from(new Set(data.map((item)=>item.style).filter((item)=>Boolean(item)).map((item)=>item.trim()))).slice(0, 10);
}
async function listArtists() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["artists"].map((artist, index)=>({
                id: artist.id,
                display_name: artist.display_name ?? null,
                city: artist.city ?? null,
                country: null,
                style: artist.style ?? null,
                bio: artist.bio ?? null,
                avatar_url: null,
                approved_count: [
                    2,
                    1,
                    1
                ][index] ?? 0,
                followers_count: [
                    18,
                    12,
                    9
                ][index] ?? 0,
                pending_count: 0
            }));
    }
    const { data: profiles, error } = await supabase.from('profiles').select('id, display_name, username, city, country, style, bio, avatar_url, role, created_at').order('created_at', {
        ascending: false
    }).limit(24);
    if (error || !profiles || profiles.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["artists"].map((artist, index)=>({
                id: artist.id,
                display_name: artist.display_name ?? null,
                city: artist.city ?? null,
                country: null,
                style: artist.style ?? null,
                bio: artist.bio ?? null,
                avatar_url: null,
                approved_count: [
                    2,
                    1,
                    1
                ][index] ?? 0,
                followers_count: [
                    18,
                    12,
                    9
                ][index] ?? 0,
                pending_count: 0
            }));
    }
    const userIds = profiles.map((item)=>item.id);
    const [artworksRes, followsRes] = await Promise.all([
        supabase.from('artworks').select('user_id, status').in('user_id', userIds),
        supabase.from('follows').select('following_id').in('following_id', userIds)
    ]);
    const approvedMap = new Map();
    const pendingMap = new Map();
    const followersMap = new Map();
    (artworksRes.data ?? []).forEach((row)=>{
        if (row.status === 'approved') {
            approvedMap.set(row.user_id, (approvedMap.get(row.user_id) ?? 0) + 1);
        }
        if (row.status === 'pending') {
            pendingMap.set(row.user_id, (pendingMap.get(row.user_id) ?? 0) + 1);
        }
    });
    (followsRes.data ?? []).forEach((row)=>{
        followersMap.set(row.following_id, (followersMap.get(row.following_id) ?? 0) + 1);
    });
    return profiles.map((profile)=>({
            ...profile,
            approved_count: approvedMap.get(profile.id) ?? 0,
            pending_count: pendingMap.get(profile.id) ?? 0,
            followers_count: followersMap.get(profile.id) ?? 0
        }));
}
async function getArtistById(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        const fallback = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["artists"].find((item)=>item.id === id);
        if (!fallback) return null;
        return {
            id: fallback.id,
            display_name: fallback.display_name ?? null,
            city: fallback.city ?? null,
            country: null,
            style: fallback.style ?? null,
            bio: fallback.bio ?? null,
            avatar_url: null,
            approved_count: 0,
            pending_count: 0,
            followers_count: 0
        };
    }
    const { data: profile, error } = await supabase.from('profiles').select('id, display_name, username, city, country, style, bio, avatar_url, role, created_at').eq('id', id).maybeSingle();
    if (error || !profile) {
        return null;
    }
    const [artworksRes, followsRes] = await Promise.all([
        supabase.from('artworks').select('user_id, status').eq('user_id', id),
        supabase.from('follows').select('following_id').eq('following_id', id)
    ]);
    const approved_count = (artworksRes.data ?? []).filter((item)=>item.status === 'approved').length;
    const pending_count = (artworksRes.data ?? []).filter((item)=>item.status === 'pending').length;
    const followers_count = (followsRes.data ?? []).length;
    return {
        ...profile,
        approved_count,
        pending_count,
        followers_count
    };
}
async function listArtistArtworks(userId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].slice(0, 3);
    }
    const { data, error } = await supabase.from('artworks').select('*').eq('user_id', userId).eq('status', 'approved').order('created_at', {
        ascending: false
    });
    if (error || !data) {
        return [];
    }
    return data;
}
async function getArtworkEngagement(artworkId, viewerId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return {
            likesCount: 12,
            favoritesCount: 7,
            commentsCount: 2,
            viewerHasLiked: false,
            viewerHasFavorited: false
        };
    }
    const [likesRes, favoritesRes, commentsRes, viewerLikeRes, viewerFavRes] = await Promise.all([
        supabase.from('likes').select('artwork_id', {
            count: 'exact',
            head: true
        }).eq('artwork_id', artworkId),
        supabase.from('favorites').select('artwork_id', {
            count: 'exact',
            head: true
        }).eq('artwork_id', artworkId),
        supabase.from('comments').select('artwork_id', {
            count: 'exact',
            head: true
        }).eq('artwork_id', artworkId),
        viewerId ? supabase.from('likes').select('artwork_id').eq('artwork_id', artworkId).eq('user_id', viewerId).maybeSingle() : Promise.resolve({
            data: null
        }),
        viewerId ? supabase.from('favorites').select('artwork_id').eq('artwork_id', artworkId).eq('user_id', viewerId).maybeSingle() : Promise.resolve({
            data: null
        })
    ]);
    return {
        likesCount: likesRes.count ?? 0,
        favoritesCount: favoritesRes.count ?? 0,
        commentsCount: commentsRes.count ?? 0,
        viewerHasLiked: Boolean(viewerLikeRes.data),
        viewerHasFavorited: Boolean(viewerFavRes.data)
    };
}
async function listArtworkComments(artworkId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return [
            {
                id: 'comment-1',
                artwork_id: artworkId,
                user_id: 'mock-user',
                body: 'Сильная работа и хорошая подача контекста.',
                created_at: new Date().toISOString(),
                author_name: 'Archive Visitor'
            }
        ];
    }
    const { data, error } = await supabase.from('comments').select('id, artwork_id, user_id, body, created_at, profiles(display_name)').eq('artwork_id', artworkId).order('created_at', {
        ascending: false
    });
    if (error || !data) {
        return [];
    }
    return (data ?? []).map((item)=>{
        const profileValue = item.profiles;
        const authorName = Array.isArray(profileValue) ? profileValue[0]?.display_name ?? 'User' : profileValue?.display_name ?? 'User';
        return {
            ...item,
            author_name: authorName
        };
    });
}
async function getArtistFollowState(artistId, viewerId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return {
            followersCount: 12,
            viewerFollows: false
        };
    }
    const [followersRes, viewerRes] = await Promise.all([
        supabase.from('follows').select('following_id', {
            count: 'exact',
            head: true
        }).eq('following_id', artistId),
        viewerId ? supabase.from('follows').select('following_id').eq('following_id', artistId).eq('follower_id', viewerId).maybeSingle() : Promise.resolve({
            data: null
        })
    ]);
    return {
        followersCount: followersRes.count ?? 0,
        viewerFollows: Boolean(viewerRes.data)
    };
}
async function listFavoriteArtworks(userId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].slice(0, 2);
    }
    const { data: favorites, error } = await supabase.from('favorites').select('artworks(*)').eq('user_id', userId).order('created_at', {
        ascending: false
    });
    if (error || !favorites) {
        return [];
    }
    return favorites.map((item)=>Array.isArray(item.artworks) ? item.artworks[0] : item.artworks).filter(Boolean);
}
async function listHistoryEntries(locale) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["historyEntries"], locale);
    }
    const { data, error } = await supabase.from('history_entries').select('*').eq('locale', locale).eq('is_published', true).order('sort_order', {
        ascending: true
    }).order('created_at', {
        ascending: true
    });
    if (error || !data || data.length === 0) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["historyEntries"], locale);
    }
    return data;
}
async function listAdminHistoryEntries() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["historyEntries"];
    }
    const { data, error } = await supabase.from('history_entries').select('*').order('sort_order', {
        ascending: true
    }).order('created_at', {
        ascending: false
    });
    if (error || !data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["historyEntries"];
    }
    return data;
}
async function listNewsPosts(locale, limit = 8) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPosts"], locale).slice(0, limit);
    }
    const { data, error } = await supabase.from('news_posts').select('*').eq('locale', locale).eq('is_published', true).order('published_at', {
        ascending: false
    }).limit(limit);
    if (error || !data || data.length === 0) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPosts"], locale).slice(0, limit);
    }
    return data;
}
async function listAdminNewsPosts() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPosts"];
    }
    const { data, error } = await supabase.from('news_posts').select('*').order('published_at', {
        ascending: false
    });
    if (error || !data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPosts"];
    }
    return data;
}
async function getNewsPostBySlug(locale, slug) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPosts"], locale).find((item)=>item.slug === slug) ?? null;
    }
    const { data, error } = await supabase.from('news_posts').select('*').eq('locale', locale).eq('slug', slug).eq('is_published', true).maybeSingle();
    if (error || !data) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newsPosts"], locale).find((item)=>item.slug === slug) ?? null;
    }
    return data;
}
async function listEventItems(locale, limit = 8) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventItems"], locale).slice(0, limit);
    }
    const { data, error } = await supabase.from('events').select('*').eq('locale', locale).eq('is_published', true).order('starts_at', {
        ascending: true
    }).limit(limit);
    if (error || !data || data.length === 0) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventItems"], locale).slice(0, limit);
    }
    return data;
}
async function listAdminEventItems() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventItems"];
    }
    const { data, error } = await supabase.from('events').select('*').order('starts_at', {
        ascending: true
    });
    if (error || !data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventItems"];
    }
    return data;
}
async function getEventBySlug(locale, slug) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSupabaseClient"])();
    if (!supabase) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventItems"], locale).find((item)=>item.slug === slug) ?? null;
    }
    const { data, error } = await supabase.from('events').select('*').eq('locale', locale).eq('slug', slug).eq('is_published', true).maybeSingle();
    if (error || !data) {
        return filterByLocale(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventItems"], locale).find((item)=>item.slug === slug) ?? null;
    }
    return data;
}
function uniqueStyles(items) {
    return Array.from(new Set(items.map((item)=>item.style).filter((item)=>Boolean(item)))).slice(0, 10);
}
function escapeLike(value) {
    return value.replace(/[%_]/g, '').trim();
}
function filterMockArtworks({ style, query }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredArtworks"].filter((item)=>{
        const styleMatch = style ? item.style?.toLowerCase().includes(style.toLowerCase()) : true;
        const queryMatch = query ? [
            item.title,
            item.author_name,
            item.location_name,
            item.description
        ].some((field)=>field?.toLowerCase().includes(query.toLowerCase())) : true;
        return styleMatch && queryMatch;
    });
}
function filterByLocale(items, locale) {
    const exact = items.filter((item)=>item.locale === locale);
    return exact.length > 0 ? exact : items;
}
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "getSingleSearchParam",
    ()=>getSingleSearchParam,
    "slugify",
    ()=>slugify
]);
function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9а-яё\s-]/gi, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}
function getSingleSearchParam(value) {
    if (Array.isArray(value)) return value[0];
    return value;
}
function formatDate(value, locale = 'ru') {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}
function formatDateTime(value, locale = 'ru') {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}
}),
"[project]/app/[locale]/news/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$notice$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/notice-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/page-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$update$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/update-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function NewsPage({ params }) {
    const { locale } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(locale)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const dictionary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(locale);
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listNewsPosts"])(locale, 12);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-shell py-8 md:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Editorial",
                title: dictionary.news.title,
                subtitle: dictionary.news.subtitle
            }, void 0, false, {
                fileName: "[project]/app/[locale]/news/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-8 grid-shell md:grid-cols-2 xl:grid-cols-3",
                children: posts.length > 0 ? posts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$update$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UpdateCard"], {
                        item: {
                            category: item.category,
                            title: item.title,
                            excerpt: item.excerpt,
                            href: `/${locale}/news/${item.slug}`,
                            meta: item.published_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(item.published_at, locale) : undefined
                        }
                    }, item.id, false, {
                        fileName: "[project]/app/[locale]/news/page.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2 xl:col-span-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$notice$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoticeCard"], {
                        title: locale === 'ru' ? 'Новости пока не добавлены' : 'No news posts yet',
                        text: locale === 'ru' ? 'Создай первую публикацию через админку.' : 'Create the first post through the admin panel.',
                        variant: "info"
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/news/page.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/news/page.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/news/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/news/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[locale]/news/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/news/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__39368cc2._.js.map