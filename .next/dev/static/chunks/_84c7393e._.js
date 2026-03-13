(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/history-museum.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "museumHistory",
    ()=>museumHistory
]);
const museumHistory = {
    ru: {
        hero: {
            eyebrow: 'Museum Mode',
            title: 'История граффити как живая выставка',
            subtitle: 'Не лента из пары карточек, а насыщенный маршрут через подпись, поезд, стиль, медиа, музей и цифровой архив.',
            lead: 'Этот раздел собран как музейная экспозиция: с эпохами, ключевыми фигурами, визуальными акцентами и пояснениями о том, как граффити прошло путь от городской метки до глобальной культурной системы.',
            stats: [
                {
                    value: '5',
                    label: 'Ключевых эпох'
                },
                {
                    value: '8',
                    label: 'Пионеров и медиаторов'
                },
                {
                    value: '20+',
                    label: 'Исторических поворотных точек'
                }
            ]
        },
        navTitle: 'Переходы по эпохам',
        museumLabel: 'Читальный зал / зал истории',
        pillars: [
            {
                title: 'Город как поверхность',
                text: 'Граффити рождается не в студии, а внутри городской логистики: район, транспорт, школа, двор, маршрут и видимость.'
            },
            {
                title: 'Стиль как язык',
                text: 'От простого тега сцена приходит к bubble letters, wildstyle, whole cars, персонажам и сложной цветовой драматургии.'
            },
            {
                title: 'Архив как память',
                text: 'Фотография, книги, фильмы, фестивали и музеи удерживают граффити от исчезновения и превращают его в исследуемую культуру.'
            }
        ],
        eras: [
            {
                id: 'origins',
                range: '1960s → early 1970s',
                navLabel: 'Истоки',
                title: 'От подписи к городскому присутствию',
                kicker: 'Philadelphia / New York / existence politics',
                summary: 'Ранние подписи появляются как способ заявить о себе и занять место в городской ткани. Важна не только форма, но и сам факт повторения имени на маршрутах, стенах и транспорте.',
                whyItMatters: 'Именно здесь появляется логика “быть увиденным”: имя становится медиа, а город — первой распределённой сетью распространения граффити.',
                milestones: [
                    'Cornbread в Филадельфии часто называют одной из первых фигур современного граффити; его имя стало городской новостью.',
                    'В Нью-Йорке подписи вроде Julio 204 и позже TAKI 183 показали, как быстро имя может циркулировать по району и по линии транспорта.',
                    'Писать имя — значит конструировать идентичность в среде, где у подростка почти нет других способов заявить о себе.'
                ],
                galleryNotes: [
                    {
                        title: 'Name as signal',
                        caption: 'Тег — это не просто слово, а акт присутствия: короткий, быстрый, повторяемый.',
                        word: 'TAG'
                    },
                    {
                        title: 'Route logic',
                        caption: 'Чем шире маршрут, тем дальше распространяется имя. Город начинает работать как сеть.',
                        word: 'ROUTE'
                    }
                ],
                figures: [
                    {
                        id: 'cornbread',
                        name: 'Cornbread',
                        years: 'late 1960s / Philadelphia',
                        role: 'Ранняя фигура современного граффити',
                        summary: 'Имя Darryl McCray стало одним из символов того момента, когда городская подпись превратилась в историю, легенду и модель для подражания.',
                        contributions: [
                            'связал подпись с городской славой и личной мифологией',
                            'показал, что имя может стать новостью',
                            'закрепил идею повторяемого тега как практики'
                        ],
                        posterWord: 'EXIST'
                    },
                    {
                        id: 'taki183',
                        name: 'TAKI 183',
                        years: '1969–1971 / New York',
                        role: 'Фигура, сделавшая тег “всеродовым” явлением',
                        summary: 'Известность TAKI 183 резко выросла после статьи в The New York Times в 1971 году. Его пример сделал tagging видимым для всего города.',
                        contributions: [
                            'закрепил городской формат тега с номером улицы',
                            'ускорил подражание и рост сцены в Нью-Йорке',
                            'сделал имя и маршрут частью культурного кода граффити'
                        ],
                        posterWord: 'ALLCITY'
                    }
                ]
            },
            {
                id: 'subway',
                range: '1971 → 1976',
                navLabel: 'Поезда',
                title: 'Субвей как движущаяся галерея',
                kicker: 'Tagging / throw-up / whole car',
                summary: 'Когда райтеры массово выходят на поезда, граффити меняет масштаб. Вагон превращается в передвижную стену, а стиль — в соревнование видимости и сложности.',
                whyItMatters: 'Субвей делает граффити публичным в масштабе всего города. Работа больше не привязана к одному углу — она движется и становится коллективным визуальным опытом.',
                milestones: [
                    'К 1973 году райтеры начинают делать whole cars и уделять внимание не только имени, но и композиции, персонажам и фону.',
                    'Phase 2 систематизирует bubble letters, а Tracy 168 помогает сформировать wildstyle как сложный, почти шифрованный язык.',
                    'Стена и вагон становятся местом художественной эволюции: от простого присутствия к формальному эксперименту.'
                ],
                galleryNotes: [
                    {
                        title: 'Whole car',
                        caption: 'Поезд — это масштаб, риск, координация и новый уровень авторского амбициозного жеста.',
                        word: 'TRAIN'
                    },
                    {
                        title: 'Style writing',
                        caption: 'Буква становится полем для ритма, давления, связок и визуального шума.',
                        word: 'STYLE'
                    },
                    {
                        title: 'Battle for visibility',
                        caption: 'Граффити становится соревнованием памяти: чей стиль узнают быстрее всего.',
                        word: 'UP'
                    }
                ],
                figures: [
                    {
                        id: 'phase2',
                        name: 'PHASE 2',
                        years: 'early 1970s / New York',
                        role: 'Пионер style writing',
                        summary: 'Одна из ключевых фигур ранней сцены, связанная с развитием bubble letters, организацией сцены и переводом граффити в культурное самосознание хип-хопа.',
                        contributions: [
                            'развил bubble letters как узнаваемую форму',
                            'соединил граффити с ранней культурой хип-хопа',
                            'повлиял на понимание стиля как автономного языка'
                        ],
                        posterWord: 'BUBBLE'
                    },
                    {
                        id: 'tracy168',
                        name: 'Tracy 168',
                        years: '1970s / Bronx',
                        role: 'Фигура wildstyle',
                        summary: 'Творческая логика Tracy 168 связана с рождением wildstyle — сложного письма, где буква превращается в лабиринт ритмов и направлений.',
                        contributions: [
                            'сформировал сложную многосвязную букву',
                            'сделал чтение стиля частью статуса внутри сцены',
                            'задал высокую планку технической изобретательности'
                        ],
                        posterWord: 'WILD'
                    }
                ]
            },
            {
                id: 'golden-age',
                range: 'late 1970s → 1980s',
                navLabel: 'Золотой век',
                title: 'От поезда к мифу: цвет, персонажи, медиа',
                kicker: 'Wild Style / Style Wars / global recognition',
                summary: 'В конце 1970-х и в 1980-е граффити достигает визуальной зрелости. Whole cars, сложные композиции, персонажи и коллаборации выводят сцену в поп-культуру и арт-медиа.',
                whyItMatters: 'Именно этот период сделал граффити мировым образом города. Книги, кино и фотография закрепили сцену в коллективной памяти далеко за пределами Нью-Йорка.',
                milestones: [
                    'Lee Quiñones и другие мастера масштаба превращают вагоны в полноценные нарративные полотна.',
                    'Lady Pink становится одной из важнейших фигур сцены, пробивая гендерный барьер внутри мужского поля.',
                    'Фильм Wild Style и книга Subway Art делают язык граффити международно узнаваемым.'
                ],
                galleryNotes: [
                    {
                        title: 'Moving masterpieces',
                        caption: 'Вагон становится кинематографическим объектом: цвет, сюжет, персонажи и узнаваемый жест.',
                        word: 'COLOR'
                    },
                    {
                        title: 'Media transmission',
                        caption: 'Фотография и фильм переводят локальную сцену в глобальный визуальный архив.',
                        word: 'MEDIA'
                    }
                ],
                figures: [
                    {
                        id: 'lee',
                        name: 'Lee Quiñones',
                        years: '1970s–1980s',
                        role: 'Мастер масштаба и whole-car narrative',
                        summary: 'Lee Quiñones помог превратить вагон в сложное художественное поле, где граффити, персонажи и сообщение работают как единая драматургия.',
                        contributions: [
                            'расширил масштаб и амбицию whole-car pieces',
                            'сделал композицию и нарратив частью субвей-письма',
                            'стал мостом между улицей, кино и художественной сценой'
                        ],
                        posterWord: 'WHOLE'
                    },
                    {
                        id: 'lady-pink',
                        name: 'Lady Pink',
                        years: 'from 1979',
                        role: 'Одна из ключевых женщин ранней сцены',
                        summary: 'Lady Pink показала, что граффити — это не закрытый мужской клуб, а поле, где можно добиться авторитетного места через стиль, дерзость и устойчивость.',
                        contributions: [
                            'стала важной фигурой раннего subway graffiti',
                            'закрепила присутствие женщин в истории сцены',
                            'позже перевела граффити в murals и studio practice'
                        ],
                        posterWord: 'PINK'
                    },
                    {
                        id: 'futura',
                        name: 'Futura 2000',
                        years: 'late 1970s–1980s',
                        role: 'Связь граффити с абстракцией и арт-миром',
                        summary: 'Futura 2000 важен как фигура, которая радикально расширила язык граффити в сторону абстракции, живописи и межсценового диалога.',
                        contributions: [
                            'расширил поле граффити за пределы буквенной логики',
                            'соединил улицу, музыку и галерейную культуру',
                            'помог перевести граффити в глобальный визуальный бренд'
                        ],
                        posterWord: 'ATOM'
                    }
                ]
            },
            {
                id: 'global',
                range: '1990s → 2000s',
                navLabel: 'Глобализация',
                title: 'Глобальная сцена, легальные стены и новые медиа',
                kicker: 'Europe / festivals / internet / legal walls',
                summary: 'После зачистки субвея граффити не исчезает. Оно меняет инфраструктуру: переходит на стены, в международные поездки, фестивали, фотоархивы, журналы и ранний интернет.',
                whyItMatters: 'Сцена становится глобальной не только эстетически, но и организационно: стили циркулируют быстрее, а локальные школы начинают влиять друг на друга.',
                milestones: [
                    'Европейские и латиноамериканские сцены создают собственные традиции style writing и mural culture.',
                    'Легальные стены и фестивали меняют отношения между райтером, городом и аудиторией.',
                    'Документация переходит в журналы, сайты, форумы и архивные фото-базы.'
                ],
                galleryNotes: [
                    {
                        title: 'From subway to wall',
                        caption: 'Смена поверхности не убивает культуру, а делает её разнообразнее и международнее.',
                        word: 'WALL'
                    },
                    {
                        title: 'Scene exchange',
                        caption: 'Фотографии, скетчи и поездки превращают граффити в транснациональный язык.',
                        word: 'GLOBAL'
                    }
                ],
                figures: [
                    {
                        id: 'seen',
                        name: 'SEEN',
                        years: '1970s → onward',
                        role: 'Икона перехода от trains к мировому recognition',
                        summary: 'SEEN стал одной из самых узнаваемых фигур graffiti-writing, символом того, как локальная subway fame может превратиться в глобальное имя.',
                        contributions: [
                            'олицетворил continuity между ранней сценой и глобальным рынком',
                            'сохранил узнаваемый буквенный драйв в новых форматах',
                            'стал референсом для нескольких поколений райтеров'
                        ],
                        posterWord: 'KING'
                    },
                    {
                        id: 'martha-henry',
                        name: 'Martha Cooper & Henry Chalfant',
                        years: 'documentation era',
                        role: 'Документаторы, превратившие сцену в память',
                        summary: 'Без фотографии и книги Subway Art большая часть раннего граффити осталась бы лишь городской легендой. Они сделали сцену видимой для мира и для будущего.',
                        contributions: [
                            'создали один из главных визуальных архивов граффити',
                            'связали документацию и культурную легитимацию',
                            'превратили эфемерную сцену в предмет исследования'
                        ],
                        posterWord: 'ARCHIVE'
                    }
                ]
            },
            {
                id: 'museum-age',
                range: '2010s → today',
                navLabel: 'Архив / музей',
                title: 'Музей, библиотека, цифровой след',
                kicker: 'archives / preservation / platform logic',
                summary: 'Сегодня граффити живёт сразу в нескольких режимах: как улица, как mural practice, как часть музеев и как цифровой архив. Сцена документирует сама себя быстрее и точнее, чем когда-либо.',
                whyItMatters: 'Без архивной инфраструктуры граффити теряет контекст. Платформы, музеи и базы данных помогают сохранить не только изображение, но и автора, место, время, стиль и связи между поколениями.',
                milestones: [
                    'Музеи граффити и крупные выставки делают сцену предметом публичной институциональной памяти.',
                    'Цифровые платформы хранят метаданные, интервью, карты, скетчи и фотоархивы.',
                    'Граффити теперь существует не только как действие на стене, но и как исследуемая культура с собственной библиотекой.'
                ],
                galleryNotes: [
                    {
                        title: 'Preserve the context',
                        caption: 'Архив хранит не только картинку, но и историю автора, места, даты и сцены.',
                        word: 'DATA'
                    },
                    {
                        title: 'Museum feeling',
                        caption: 'Зритель входит не в блог, а в пространство культурной памяти и визуальных связей.',
                        word: 'MUSEUM'
                    }
                ],
                figures: [
                    {
                        id: 'daze',
                        name: 'Daze',
                        years: 'from 1976 / museums onward',
                        role: 'Пример перехода от subway writer к studio artist',
                        summary: 'Daze важен как пример того, как райтер может сохранить связь со сценой и одновременно развить музейную и галерейную карьеру.',
                        contributions: [
                            'прошёл путь от поездов к музеям и студийной практике',
                            'сохранил живую связь с историей нью-йоркского граффити',
                            'показывает, что граффити не сводится к одной поверхности'
                        ],
                        posterWord: 'SHIFT'
                    },
                    {
                        id: 'platforms',
                        name: 'Archivists / Curators / Platforms',
                        years: 'contemporary era',
                        role: 'Новая инфраструктура памяти',
                        summary: 'Современную историю граффити формируют не только райтеры, но и те, кто создаёт музеи, архивы, каталоги, интервью и цифровые платформы вроде WALLTRACE.',
                        contributions: [
                            'сохраняют эфемерные работы и контекст',
                            'переводят сцену в формат библиотеки и исследования',
                            'делают видимыми связи между эпохами и регионами'
                        ],
                        posterWord: 'TRACE'
                    }
                ]
            }
        ],
        figureSection: {
            eyebrow: 'Key figures',
            title: 'Личности, которые сдвинули культуру',
            subtitle: 'От первичных тегов до медиа, книг и музейных пространств — история граффити строится не одной звездой, а целой цепью фигур, каждая из которых меняла масштаб, стиль или инфраструктуру сцены.'
        },
        readingRoom: {
            eyebrow: 'Reading room',
            title: 'Книги, фильмы и документы, без которых история читается хуже',
            items: [
                {
                    title: 'The New York Times / 1971 / “Taki 183 Spawns Pen Pals”',
                    text: 'Момент, когда local tag превращается в общегородскую и медийную историю.',
                    word: 'PRESS'
                },
                {
                    title: 'Wild Style / 1983',
                    text: 'Фильм, который перенёс граффити и хип-хоп в международное культурное воображение.',
                    word: 'FILM'
                },
                {
                    title: 'Subway Art / 1984',
                    text: 'Книга Мартa Купер и Генри Чалфанта, ставшая визуальной библиотекой ранней сцены.',
                    word: 'BOOK'
                },
                {
                    title: 'Museums / archives / platforms',
                    text: 'Современный слой памяти, в котором граффити сохраняется как культура, а не только как исчезающая поверхность.',
                    word: 'INDEX'
                }
            ]
        },
        curatorSection: {
            eyebrow: 'Platform annotations',
            title: 'Кураторские заметки WALLTRACE',
            emptyTitle: 'Дополнительные записи пока не добавлены',
            emptyText: 'Через админку сюда можно добавлять собственные заметки, локальные кейсы и расширения музейного маршрута.'
        }
    },
    en: {
        hero: {
            eyebrow: 'Museum Mode',
            title: 'Graffiti history as a living exhibition',
            subtitle: 'Not a thin list of cards, but a dense route through the tag, the train, style writing, media, museums, and the digital archive.',
            lead: 'This section is built like a museum exhibition with eras, pivotal figures, visual anchors, and explanations of how graffiti moved from urban mark-making to a global cultural system.',
            stats: [
                {
                    value: '5',
                    label: 'Major eras'
                },
                {
                    value: '8',
                    label: 'Pioneers and mediators'
                },
                {
                    value: '20+',
                    label: 'Turning points'
                }
            ]
        },
        navTitle: 'Navigate the eras',
        museumLabel: 'Reading room / history wing',
        pillars: [
            {
                title: 'The city as surface',
                text: 'Graffiti begins inside urban logistics: the block, the train line, the schoolyard, the route, and the urgency of visibility.'
            },
            {
                title: 'Style as language',
                text: 'The scene moves from the quick tag to bubble letters, wildstyle, whole cars, characters, and highly developed color systems.'
            },
            {
                title: 'Archive as memory',
                text: 'Photography, books, films, festivals, and museums keep graffiti from disappearing and make it legible as culture.'
            }
        ],
        eras: [
            {
                id: 'origins',
                range: '1960s → early 1970s',
                navLabel: 'Origins',
                title: 'From the signature to urban presence',
                kicker: 'Philadelphia / New York / existence politics',
                summary: 'Early signatures emerge as a way to claim visibility and occupy space in the city. The key issue is not only form, but repetition: the same name returning across walls, routes, and transit.',
                whyItMatters: 'This is where the logic of “being seen” begins: the name becomes media, and the city becomes the first distributed network for graffiti.',
                milestones: [
                    'Cornbread in Philadelphia is widely cited as one of the earliest figures of modern graffiti, making his name a citywide story.',
                    'In New York, signatures such as Julio 204 and later TAKI 183 showed how quickly a name could travel through neighborhoods and transit lines.',
                    'Writing a name became a way to construct identity in environments where young people had few other ways to be publicly visible.'
                ],
                galleryNotes: [
                    {
                        title: 'Name as signal',
                        caption: 'The tag is not just a word, but a repeatable act of presence.',
                        word: 'TAG'
                    },
                    {
                        title: 'Route logic',
                        caption: 'The wider the route, the wider the spread of the name. The city starts acting like a network.',
                        word: 'ROUTE'
                    }
                ],
                figures: [
                    {
                        id: 'cornbread',
                        name: 'Cornbread',
                        years: 'late 1960s / Philadelphia',
                        role: 'Early modern graffiti figure',
                        summary: 'Darryl McCray became a symbol of the moment when the urban signature turned into legend, story, and a model for others.',
                        contributions: [
                            'linked tagging with myth, fame, and urban visibility',
                            'showed that a name could become news',
                            'helped establish repetition as a core principle of the tag'
                        ],
                        posterWord: 'EXIST'
                    },
                    {
                        id: 'taki183',
                        name: 'TAKI 183',
                        years: '1969–1971 / New York',
                        role: 'A figure who turned the tag into a citywide phenomenon',
                        summary: 'TAKI 183 became widely known after the 1971 New York Times article, accelerating imitation and making tagging legible to the whole city.',
                        contributions: [
                            'solidified the tag-plus-street-number format',
                            'accelerated the growth of the New York scene',
                            'made route and name part of graffiti’s cultural code'
                        ],
                        posterWord: 'ALLCITY'
                    }
                ]
            },
            {
                id: 'subway',
                range: '1971 → 1976',
                navLabel: 'Subway',
                title: 'The subway as a moving gallery',
                kicker: 'Tagging / throw-up / whole car',
                summary: 'Once writers move massively onto trains, graffiti changes scale. The subway car becomes a mobile wall, and style becomes a competition of visibility, complexity, and rhythm.',
                whyItMatters: 'The subway turns graffiti into a citywide public image system. The work is no longer tied to one corner—it moves and becomes a collective visual experience.',
                milestones: [
                    'By 1973, writers begin painting whole cars and focusing on composition, characters, and background as well as the name itself.',
                    'Phase 2 develops bubble letters while Tracy 168 helps shape wildstyle as a dense, almost encrypted visual language.',
                    'Walls and trains become sites of formal experimentation rather than only signatures.'
                ],
                galleryNotes: [
                    {
                        title: 'Whole car',
                        caption: 'The train introduces scale, risk, coordination, and a new level of ambition.',
                        word: 'TRAIN'
                    },
                    {
                        title: 'Style writing',
                        caption: 'The letter becomes a field of rhythm, pressure, links, and visual noise.',
                        word: 'STYLE'
                    },
                    {
                        title: 'Battle for visibility',
                        caption: 'Graffiti turns into a battle of memory: whose style is recognizable fastest.',
                        word: 'UP'
                    }
                ],
                figures: [
                    {
                        id: 'phase2',
                        name: 'PHASE 2',
                        years: 'early 1970s / New York',
                        role: 'Style-writing pioneer',
                        summary: 'A central figure of the early scene, Phase 2 is closely tied to the development of bubble letters and the self-conscious cultural identity of hip-hop graffiti.',
                        contributions: [
                            'developed the bubble letter as a key form',
                            'connected graffiti with early hip-hop culture',
                            'helped define style as a language in its own right'
                        ],
                        posterWord: 'BUBBLE'
                    },
                    {
                        id: 'tracy168',
                        name: 'Tracy 168',
                        years: '1970s / Bronx',
                        role: 'Wildstyle figure',
                        summary: 'Tracy 168 is linked to the birth of wildstyle, where the letter becomes a maze of motion, compression, and coded rhythm.',
                        contributions: [
                            'shaped complex linked letter structures',
                            'made reading style part of internal scene prestige',
                            'raised the bar for technical inventiveness'
                        ],
                        posterWord: 'WILD'
                    }
                ]
            },
            {
                id: 'golden-age',
                range: 'late 1970s → 1980s',
                navLabel: 'Golden age',
                title: 'From the train to the myth: color, characters, media',
                kicker: 'Wild Style / Style Wars / global recognition',
                summary: 'By the late 1970s and 1980s graffiti reaches visual maturity. Whole cars, dense color, characters, and collaboration push the scene into pop culture and art media.',
                whyItMatters: 'This is the period that made graffiti a global image of the city. Books, film, and photography turned a local scene into international cultural memory.',
                milestones: [
                    'Lee Quiñones and other masters of scale transform train cars into narrative surfaces.',
                    'Lady Pink becomes one of the scene’s defining figures, breaking through a heavily male environment.',
                    'Wild Style and Subway Art make the visual language of graffiti internationally legible.'
                ],
                galleryNotes: [
                    {
                        title: 'Moving masterpieces',
                        caption: 'The train becomes a cinematic object of color, narrative, characters, and gesture.',
                        word: 'COLOR'
                    },
                    {
                        title: 'Media transmission',
                        caption: 'Photography and film translate the local scene into a global archive.',
                        word: 'MEDIA'
                    }
                ],
                figures: [
                    {
                        id: 'lee',
                        name: 'Lee Quiñones',
                        years: '1970s–1980s',
                        role: 'Master of scale and whole-car narrative',
                        summary: 'Lee Quiñones helped turn the train car into a complex pictorial field where graffiti, character work, and social messaging could operate together.',
                        contributions: [
                            'expanded the scale and ambition of the whole car',
                            'made narrative and composition central to train painting',
                            'bridged the street, cinema, and exhibition culture'
                        ],
                        posterWord: 'WHOLE'
                    },
                    {
                        id: 'lady-pink',
                        name: 'Lady Pink',
                        years: 'from 1979',
                        role: 'One of the key women of early subway graffiti',
                        summary: 'Lady Pink showed that graffiti was not a closed male arena. She carved out a respected position through style, nerve, and long-term artistic persistence.',
                        contributions: [
                            'became a major figure of early subway graffiti',
                            'made women’s presence undeniable in the scene’s history',
                            'later translated graffiti into murals and studio practice'
                        ],
                        posterWord: 'PINK'
                    },
                    {
                        id: 'futura',
                        name: 'Futura 2000',
                        years: 'late 1970s–1980s',
                        role: 'A bridge between graffiti, abstraction, and the art world',
                        summary: 'Futura 2000 is important for radically widening graffiti’s language toward abstraction, painting, music, and broader cultural crossover.',
                        contributions: [
                            'extended graffiti beyond strict letter structure',
                            'connected the street, music, and gallery culture',
                            'helped translate graffiti into a global visual brand'
                        ],
                        posterWord: 'ATOM'
                    }
                ]
            },
            {
                id: 'global',
                range: '1990s → 2000s',
                navLabel: 'Global scene',
                title: 'Global spread, legal walls, and new media',
                kicker: 'Europe / festivals / internet / legal walls',
                summary: 'After the subway crackdown, graffiti does not disappear. It changes infrastructure: moving to walls, international travel, festivals, photo archives, magazines, and the early web.',
                whyItMatters: 'The scene becomes global not only aesthetically but organizationally. Styles circulate faster, and local schools begin influencing each other across borders.',
                milestones: [
                    'European and Latin American scenes build strong local traditions in style writing and mural culture.',
                    'Legal walls and festivals shift the relationship between writer, city, and audience.',
                    'Documentation moves into magazines, websites, forums, and photo archives.'
                ],
                galleryNotes: [
                    {
                        title: 'From subway to wall',
                        caption: 'A new surface does not kill the culture; it makes it more diverse and more international.',
                        word: 'WALL'
                    },
                    {
                        title: 'Scene exchange',
                        caption: 'Photos, sketchbooks, and travel turn graffiti into a transnational language.',
                        word: 'GLOBAL'
                    }
                ],
                figures: [
                    {
                        id: 'seen',
                        name: 'SEEN',
                        years: '1970s → onward',
                        role: 'Icon of the shift from trains to worldwide recognition',
                        summary: 'SEEN became one of the most recognizable names in writing culture, symbolizing how local subway fame could become global presence.',
                        contributions: [
                            'embodied continuity between the early scene and the global market',
                            'kept the energy of style writing visible in new formats',
                            'became a reference point for several generations of writers'
                        ],
                        posterWord: 'KING'
                    },
                    {
                        id: 'martha-henry',
                        name: 'Martha Cooper & Henry Chalfant',
                        years: 'documentation era',
                        role: 'Documentarians who turned the scene into memory',
                        summary: 'Without photography and Subway Art, much of early graffiti would remain legend. Their work made the scene visible to the world and to the future.',
                        contributions: [
                            'created one of the central visual archives of graffiti',
                            'linked documentation with cultural legitimacy',
                            'turned an ephemeral scene into a field of study'
                        ],
                        posterWord: 'ARCHIVE'
                    }
                ]
            },
            {
                id: 'museum-age',
                range: '2010s → today',
                navLabel: 'Archive / museum',
                title: 'Museum, library, digital trace',
                kicker: 'archives / preservation / platform logic',
                summary: 'Today graffiti exists in several modes at once: as street practice, mural culture, museum subject, and digital archive. The scene now documents itself faster and more thoroughly than ever.',
                whyItMatters: 'Without archival infrastructure, graffiti loses context. Platforms, museums, and databases preserve not just the image, but the author, place, date, style, and links across generations.',
                milestones: [
                    'Museums of graffiti and major exhibitions turn the scene into institutional public memory.',
                    'Digital platforms preserve metadata, interviews, maps, sketches, and photo archives.',
                    'Graffiti now exists not only as action on the wall, but as a culture with its own library and research infrastructure.'
                ],
                galleryNotes: [
                    {
                        title: 'Preserve the context',
                        caption: 'An archive stores not only the image, but the author, place, date, and scene around it.',
                        word: 'DATA'
                    },
                    {
                        title: 'Museum feeling',
                        caption: 'The viewer enters not a blog, but a space of cultural memory and visual linkage.',
                        word: 'MUSEUM'
                    }
                ],
                figures: [
                    {
                        id: 'daze',
                        name: 'Daze',
                        years: 'from 1976 / museums onward',
                        role: 'A model of transition from subway writer to studio artist',
                        summary: 'Daze matters because he shows how a writer can retain a deep link to the scene while also developing a museum and studio practice.',
                        contributions: [
                            'moved from trains to museums and studio work',
                            'maintained a living link to New York graffiti history',
                            'shows that graffiti is not limited to one surface'
                        ],
                        posterWord: 'SHIFT'
                    },
                    {
                        id: 'platforms',
                        name: 'Archivists / Curators / Platforms',
                        years: 'contemporary era',
                        role: 'A new memory infrastructure',
                        summary: 'Contemporary graffiti history is shaped not only by writers, but also by those building museums, archives, catalogs, interviews, and digital platforms such as WALLTRACE.',
                        contributions: [
                            'preserve ephemeral works and context',
                            'translate the scene into a library and research format',
                            'make links between eras and regions visible'
                        ],
                        posterWord: 'TRACE'
                    }
                ]
            }
        ],
        figureSection: {
            eyebrow: 'Key figures',
            title: 'People who shifted the culture',
            subtitle: 'From the earliest tags to books, film, and museums, graffiti history is built by a chain of people—each changing scale, style, visibility, or the memory infrastructure around the scene.'
        },
        readingRoom: {
            eyebrow: 'Reading room',
            title: 'Books, films, and documents that make the history legible',
            items: [
                {
                    title: 'The New York Times / 1971 / “Taki 183 Spawns Pen Pals”',
                    text: 'A moment when a local tag turns into a citywide and media story.',
                    word: 'PRESS'
                },
                {
                    title: 'Wild Style / 1983',
                    text: 'A film that carried graffiti and hip-hop into international cultural imagination.',
                    word: 'FILM'
                },
                {
                    title: 'Subway Art / 1984',
                    text: 'Martha Cooper and Henry Chalfant’s book became the visual library of the early scene.',
                    word: 'BOOK'
                },
                {
                    title: 'Museums / archives / platforms',
                    text: 'The contemporary memory layer where graffiti is preserved as culture rather than only a disappearing surface.',
                    word: 'INDEX'
                }
            ]
        },
        curatorSection: {
            eyebrow: 'Platform annotations',
            title: 'WALLTRACE curator notes',
            emptyTitle: 'No extra notes yet',
            emptyText: 'You can use the admin panel to add local cases, regional history, and extra annotations to the museum route.'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/timeline-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineItem",
    ()=>TimelineItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TimelineItem({ year, title, text, accent, era }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "panel relative p-5 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:bg-[var(--accent)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: year
                    }, void 0, false, {
                        fileName: "[project]/components/shared/timeline-item.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    era ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "• ",
                            era
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/timeline-item.tsx",
                        lineNumber: 14,
                        columnNumber: 16
                    }, this) : null,
                    accent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "• ",
                            accent
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/timeline-item.tsx",
                        lineNumber: 15,
                        columnNumber: 19
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/timeline-item.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-3 font-display text-4xl leading-none tracking-[0.06em]",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/shared/timeline-item.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm leading-7 text-white/70",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/shared/timeline-item.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/timeline-item.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = TimelineItem;
var _c;
__turbopack_context__.k.register(_c, "TimelineItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/history/museum-history.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuseumHistory",
    ()=>MuseumHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$history$2d$museum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/history-museum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$timeline$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/timeline-item.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function posterDataUrl(word, accent) {
    const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" fill="none">
    <rect width="900" height="700" rx="48" fill="#0F0F0F"/>
    <rect x="28" y="28" width="844" height="644" rx="34" stroke="rgba(255,255,255,0.14)"/>
    <circle cx="735" cy="145" r="130" fill="rgba(255,90,54,0.20)"/>
    <circle cx="178" cy="560" r="160" fill="rgba(255,255,255,0.05)"/>
    <path d="M92 448C208 366 330 330 494 342C631 352 735 327 812 268" stroke="rgba(255,255,255,0.16)" stroke-width="12" stroke-linecap="round"/>
    <text x="72" y="118" fill="#F3EFE7" font-size="44" font-family="Arial, sans-serif" letter-spacing="10">WALLTRACE</text>
    <text x="72" y="246" fill="#F3EFE7" font-size="148" font-weight="700" font-family="Arial, sans-serif" letter-spacing="6">${word}</text>
    <text x="76" y="314" fill="#FF5A36" font-size="30" font-family="Arial, sans-serif" letter-spacing="8">${accent}</text>
    <text x="72" y="560" fill="rgba(255,255,255,0.74)" font-size="28" font-family="Arial, sans-serif" letter-spacing="4">DIGITAL GRAFFITI MUSEUM SECTION</text>
  </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
function MuseumHistory({ locale, entries }) {
    _s();
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$history$2d$museum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["museumHistory"][locale];
    const [activeEra, setActiveEra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(content.eras[0]?.id ?? '');
    const allFigures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MuseumHistory.useMemo[allFigures]": ()=>content.eras.flatMap({
                "MuseumHistory.useMemo[allFigures]": (era)=>era.figures.map({
                        "MuseumHistory.useMemo[allFigures]": (figure)=>({
                                ...figure,
                                eraTitle: era.title
                            })
                    }["MuseumHistory.useMemo[allFigures]"])
            }["MuseumHistory.useMemo[allFigures]"])
    }["MuseumHistory.useMemo[allFigures]"], [
        content.eras
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MuseumHistory.useEffect": ()=>{
            const sections = content.eras.map({
                "MuseumHistory.useEffect.sections": (era)=>document.getElementById(`history-era-${era.id}`)
            }["MuseumHistory.useEffect.sections"]).filter({
                "MuseumHistory.useEffect.sections": (node)=>Boolean(node)
            }["MuseumHistory.useEffect.sections"]);
            if (!sections.length) return;
            const observer = new IntersectionObserver({
                "MuseumHistory.useEffect": (items)=>{
                    const visible = items.filter({
                        "MuseumHistory.useEffect": (item)=>item.isIntersecting
                    }["MuseumHistory.useEffect"]).sort({
                        "MuseumHistory.useEffect": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["MuseumHistory.useEffect"])[0];
                    if (visible?.target?.id) {
                        setActiveEra(visible.target.id.replace('history-era-', ''));
                    }
                }
            }["MuseumHistory.useEffect"], {
                rootMargin: '-20% 0px -55% 0px',
                threshold: [
                    0.2,
                    0.35,
                    0.5
                ]
            });
            sections.forEach({
                "MuseumHistory.useEffect": (section)=>observer.observe(section)
            }["MuseumHistory.useEffect"]);
            return ({
                "MuseumHistory.useEffect": ()=>observer.disconnect()
            })["MuseumHistory.useEffect"];
        }
    }["MuseumHistory.useEffect"], [
        content.eras
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "history-museum-hero panel panel-glow overflow-hidden p-6 md:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill",
                                        children: content.hero.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-5 max-w-5xl font-display text-6xl leading-none tracking-[0.08em] md:text-8xl",
                                        children: content.hero.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-3xl text-xl leading-8 text-white/82 md:text-2xl",
                                        children: content.hero.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg",
                                        children: content.hero.lead
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-3 lg:grid-cols-1",
                                children: content.hero.stats.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "history-stat-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-5xl tracking-[0.08em] md:text-6xl",
                                                children: item.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-xs uppercase tracking-[0.18em] text-white/58",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/history/museum-history.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-4 lg:grid-cols-3",
                        children: content.pillars.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "history-glass-card p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-3xl tracking-[0.08em] md:text-4xl",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-7 text-white/72",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.title, true, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/history/museum-history.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/history/museum-history.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "history-side-nav panel p-4 md:p-5 lg:sticky lg:top-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.18em] text-white/46",
                                children: content.navTitle
                            }, void 0, false, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-2 lg:grid",
                                children: content.eras.map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setActiveEra(era.id);
                                            document.getElementById(`history-era-${era.id}`)?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        },
                                        className: `history-nav-button ${activeEra === era.id ? 'history-nav-button-active' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: era.range
                                            }, void 0, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: era.navLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, era.id, true, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "history-reading-room mt-5 rounded-3xl border border-white/10 bg-white/4 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.16em] text-white/50",
                                        children: content.museumLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-7 text-white/74",
                                        children: locale === 'ru' ? 'Переходи по эпохам, раскрывай фигуры и читай маршрут как музейный сценарий: сначала поверхность, потом стиль, затем медиа, архив и институции.' : 'Jump between eras, open the figure cards, and read the route like a museum script: first the surface, then style, then media, archives, and institutions.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/history/museum-history.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            content.eras.map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: `history-era-${era.id}`,
                                    className: "history-era panel overflow-hidden p-5 md:p-7",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-6 xl:grid-cols-[0.86fr_1.14fr] xl:items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pill",
                                                        children: era.range
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-display text-5xl leading-none tracking-[0.08em] md:text-7xl",
                                                        children: era.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.18em] text-white/50",
                                                        children: era.kicker
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "max-w-2xl text-base leading-8 text-white/76",
                                                        children: era.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-3xl border border-white/10 bg-white/4 p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-[0.16em] text-white/52",
                                                                children: locale === 'ru' ? 'Почему это важно' : 'Why it matters'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-sm leading-7 text-white/75",
                                                                children: era.whyItMatters
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-4 md:grid-cols-3",
                                                        children: era.galleryNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                                className: "history-poster-card overflow-hidden rounded-3xl border border-white/10 bg-white/3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        className: "h-48 w-full object-cover",
                                                                        src: posterDataUrl(note.word, note.title.toUpperCase()),
                                                                        alt: note.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs uppercase tracking-[0.16em] text-white/45",
                                                                                children: note.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                                lineNumber: 153,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-2 text-sm leading-6 text-white/74",
                                                                                children: note.caption
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                                lineNumber: 154,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, note.title, true, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "history-list-card rounded-3xl border border-white/10 bg-white/4 p-5 md:p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-[0.16em] text-white/50",
                                                                children: locale === 'ru' ? 'Ключевые сдвиги' : 'Key shifts'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-4 grid gap-3",
                                                                children: era.milestones.map((milestone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "history-list-row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "history-list-dot"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: milestone
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                                lineNumber: 168,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, milestone, true, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                }, era.id, false, {
                                    fileName: "[project]/components/history/museum-history.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "panel p-6 md:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill",
                                        children: content.figureSection.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-5 font-display text-5xl tracking-[0.08em] md:text-7xl",
                                        children: content.figureSection.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-4xl text-base leading-8 text-white/72 md:text-lg",
                                        children: content.figureSection.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-4 xl:grid-cols-2",
                                        children: allFigures.map((figure)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                className: "history-figure-card rounded-3xl border border-white/10 bg-white/4 p-5 open:border-white/20 open:bg-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                        className: "grid cursor-pointer gap-4 list-none md:grid-cols-[190px_1fr] md:items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: posterDataUrl(figure.posterWord, figure.name.toUpperCase()),
                                                                alt: figure.name,
                                                                className: "h-44 w-full rounded-[24px] border border-white/10 object-cover md:h-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs uppercase tracking-[0.16em] text-white/48",
                                                                        children: figure.eraTitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "mt-2 font-display text-4xl leading-none tracking-[0.08em]",
                                                                        children: figure.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-xs uppercase tracking-[0.16em] text-white/55",
                                                                        children: [
                                                                            figure.years,
                                                                            " / ",
                                                                            figure.role
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-4 text-sm leading-7 text-white/72",
                                                                        children: figure.summary
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 border-t border-white/10 pt-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-[0.16em] text-white/48",
                                                                children: locale === 'ru' ? 'Главный вклад' : 'Why this figure matters'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-4 grid gap-3",
                                                                children: figure.contributions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "history-list-row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "history-list-dot"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                                lineNumber: 206,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: item
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                                lineNumber: 207,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, item, true, {
                                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, figure.id, true, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "panel p-6 md:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill",
                                        children: content.readingRoom.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-5 font-display text-5xl tracking-[0.08em] md:text-7xl",
                                        children: content.readingRoom.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-4 lg:grid-cols-2",
                                        children: content.readingRoom.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "history-reading-card rounded-3xl border border-white/10 bg-white/4 p-5 md:grid md:grid-cols-[160px_1fr] md:items-center md:gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: posterDataUrl(item.word, item.word),
                                                        alt: item.title,
                                                        className: "h-36 w-full rounded-[22px] border border-white/10 object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-display text-3xl tracking-[0.08em] md:text-4xl",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-sm leading-7 text-white/72",
                                                                children: item.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/history/museum-history.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/history/museum-history.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.title, true, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "panel p-6 md:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill",
                                        children: content.curatorSection.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-5 font-display text-5xl tracking-[0.08em] md:text-7xl",
                                        children: content.curatorSection.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    entries.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-4",
                                        children: entries.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$timeline$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineItem"], {
                                                year: item.year_label,
                                                title: item.title,
                                                text: item.body,
                                                accent: item.accent,
                                                era: item.era_label
                                            }, item.id, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "notice notice-info mt-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-3xl tracking-[0.08em]",
                                                children: content.curatorSection.emptyTitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 max-w-3xl text-sm leading-7 text-white/72",
                                                children: content.curatorSection.emptyText
                                            }, void 0, false, {
                                                fileName: "[project]/components/history/museum-history.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/history/museum-history.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/history/museum-history.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/history/museum-history.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/history/museum-history.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/history/museum-history.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(MuseumHistory, "65oPmI0msTebAZpzvyRoMJEtfHk=");
_c = MuseumHistory;
var _c;
__turbopack_context__.k.register(_c, "MuseumHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_84c7393e._.js.map