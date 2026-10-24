/* =========================================================
   ELIRONFLIX 2.0
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

const CONTENT = [

    /* =====================================================
       STAR WARS 3
       ===================================================== */

    {
        id: "star-wars-3",

        type: "movie",

        title: {
            he: "מלחמת הכוכבים: פרק 3",
            en: "Star Wars: Episode III"
        },

        description: {
            he: "הרפובליקה עומדת בפני שינוי עצום והמלחמה מתקרבת לנקודת הכרעה.",
            en: "The Republic faces a dramatic turning point as the war approaches its climax."
        },

        year: 2005,

        duration: "2h 20m",

        genres: [
            "Action",
            "Sci-Fi",
            "Adventure"
        ],

        poster: "star_wars3.jpg",

        video: "star_wars3.mp4",

        previewStart: 5,

        featured: true
    },


    /* =====================================================
       STAR WARS 6
       ===================================================== */

    {
        id: "star-wars-6",

        type: "movie",

        title: {
            he: "מלחמת הכוכבים: פרק 6",
            en: "Star Wars: Episode VI"
        },

        description: {
            he: "המאבק האחרון מתקרב והגיבורים יוצאים למשימה שתשנה את גורל הגלקסיה.",
            en: "The final struggle approaches as the heroes embark on a mission that could change the galaxy."
        },

        year: 1983,

        duration: "2h 11m",

        genres: [
            "Action",
            "Sci-Fi",
            "Adventure"
        ],

        poster: "star_wars6.jpg",

        video: "star_wars6.mp4",

        previewStart: 5,

        featured: false
    },


    /* =====================================================
       DEXTER
       ===================================================== */

    {
        id: "dexter",

        type: "series",

        title: {
            he: "דקסטר",
            en: "Dexter"
        },

        description: {
            he: "סדרת מתח ופשע העוקבת אחר דמותו של דקסטר וחייו הכפולים.",
            en: "A crime thriller following Dexter and the complicated life he leads."
        },

        year: 2006,

        genres: [
            "Crime",
            "Drama",
            "Thriller"
        ],

        poster: "dexter.jpg",

        seasons: [

            {
                number: 4,

                title: {
                    he: "עונה 4",
                    en: "Season 4"
                },

                episodes: [

                    {
                        number: 8,

                        title: {
                            he: "פרק 8",
                            en: "Episode 8"
                        },

                        video: "dexter_E8_S4.mp4",

                        previewStart: 5
                    },

                    {
                        number: 9,

                        title: {
                            he: "פרק 9",
                            en: "Episode 9"
                        },

                        video: "dexter_E9_S4.mp4",

                        previewStart: 5
                    }

                ]
            }

        ]
    },


    /* =====================================================
       SANJAY AND CRAIG
       ===================================================== */

    {
        id: "sanjay-craig",

        type: "series",

        title: {
            he: "סאנגיי וקרייג",
            en: "Sanjay and Craig"
        },

        description: {
            he: "סאנגיי וחברו קרייג יוצאים להרפתקאות מצחיקות ומטורפות.",
            en: "Sanjay and his best friend Craig go on hilarious and crazy adventures."
        },

        year: 2013,

        genres: [
            "Animation",
            "Comedy",
            "Adventure"
        ],

        poster: "san_cra.jpg",

        seasons: [

            {
                number: 1,

                title: {
                    he: "עונה 1",
                    en: "Season 1"
                },

                episodes: [

                    {
                        number: 1,

                        title: {
                            he: "פרק 1",
                            en: "Episode 1"
                        },

                        video: "san_cra_E1_S1.mp4",

                        previewStart: 5
                    },

                    {
                        number: 3,

                        title: {
                            he: "פרק 3",
                            en: "Episode 3"
                        },

                        video: "san_cra_E3_S1.mp4",

                        previewStart: 5
                    }

                ]
            }

        ]
    }

];


/* =========================================================
   CATEGORIES
   ========================================================= */

const CATEGORIES = [

    {
        id: "Action",
        he: "אקשן",
        en: "Action",
        icon: "💥",
        className: "category-action",
        description: "קרבות, מרדפים והרבה אקשן."
    },

    {
        id: "Sci-Fi",
        he: "מדע בדיוני",
        en: "Sci-Fi",
        icon: "🚀",
        className: "category-sci-fi",
        description: "גלקסיות, חלל, טכנולוגיה ועולמות אחרים."
    },

    {
        id: "Adventure",
        he: "הרפתקאות",
        en: "Adventure",
        icon: "🗺️",
        className: "category-adventure",
        description: "עולמות חדשים, מסעות והרפתקאות."
    },

    {
        id: "Crime",
        he: "פשע",
        en: "Crime",
        icon: "🕵️",
        className: "category-crime",
        description: "חקירות, מסתורין וסיפורי פשע."
    },

    {
        id: "Drama",
        he: "דרמה",
        en: "Drama",
        icon: "🎭",
        className: "category-drama",
        description: "סיפורים דרמטיים ודמויות מורכבות."
    },

    {
        id: "Thriller",
        he: "מתח",
        en: "Thriller",
        icon: "🔪",
        className: "category-thriller",
        description: "סיפורים מותחים שלא נותנים להירגע."
    },

    {
        id: "Animation",
        he: "אנימציה",
        en: "Animation",
        icon: "🎨",
        className: "category-animation",
        description: "סדרות וסרטי אנימציה."
    },

    {
        id: "Comedy",
        he: "קומדיה",
        en: "Comedy",
        icon: "😂",
        className: "category-comedy",
        description: "תוכן מצחיק ומשעשע."
    }

];


/* =========================================================
   STATE
   ========================================================= */

let language =
    localStorage.getItem("elironflix_language") || "he";

let myList =
    JSON.parse(
        localStorage.getItem("elironflix_myList") || "[]"
    );

let progress =
    JSON.parse(
        localStorage.getItem("elironflix_progress") || "{}"
    );

let recent =
    JSON.parse(
        localStorage.getItem("elironflix_recent") || "[]"
    );


let currentPage = "home";

let currentContent = null;

let currentEpisode = null;

let currentSeason = null;

let selectedEpisode = null;

let currentPlaybackKey = null;

let currentCategory = null;

let introTimer = null;


/* =========================================================
   DOM
   ========================================================= */

const $ = id =>
    document.getElementById(id);


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);


function initialize() {

    applyLanguage();

    setupSplash();

    setupNavigation();

    setupSearch();

    setupHome();

    setupMovies();

    setupSeries();

    setupCategories();

    setupMyList();

    setupDetailModal();

    setupPlayer();

    setupSettings();

    renderHome();

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function applyLanguage() {

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "he"
            ? "rtl"
            : "ltr";

    const searchInput =
        $("searchInput");

    if (searchInput) {

        searchInput.placeholder =
            language === "he"
                ? "חיפוש סרטים וסדרות..."
                : "Search movies and series...";
    }

}


/* =========================================================
   SPLASH
   ========================================================= */

function setupSplash() {

    const splash =
        $("splashScreen");

    const app =
        $("app");

    const enterButton =
        $("enterButton");


    enterButton.addEventListener(
        "click",
        () => {

            splash.classList.add("hide");

            app.classList.remove("hidden");

            setTimeout(() => {

                splash.style.display =
                    "none";

            }, 700);

        }
    );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    document
        .querySelectorAll("[data-page]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showPage(
                        button.dataset.page
                    );

                }
            );

        });


    $("logoButton")
        .addEventListener(
            "click",
            () => showPage("home")
        );


    $("mobileMenuButton")
        .addEventListener(
            "click",
            () => {

                $("mobileNavigation")
                    .classList
                    .toggle("open");

            }
        );

}


function showPage(page) {

    closeDetail();

    currentPage = page;


    const pages = [

        "homePage",
        "moviesPage",
        "seriesPage",
        "categoriesPage",
        "categoryResultsPage",
        "myListPage",
        "searchPage"

    ];


    pages.forEach(id => {

        const element = $(id);

        if (element) {

            element.classList.add("hidden");

        }

    });


    const target =
        $(
            page === "home"
                ? "homePage"
                : page === "movies"
                    ? "moviesPage"
                    : page === "series"
                        ? "seriesPage"
                        : page === "categories"
                            ? "categoriesPage"
                            : page === "myList"
                                ? "myListPage"
                                : "homePage"
        );


    if (target) {

        target.classList.remove("hidden");

    }


    if (page === "home") {

        renderHome();

    }

    if (page === "movies") {

        renderMovies();

    }

    if (page === "series") {

        renderSeries();

    }

    if (page === "categories") {

        renderCategoryPage();

    }

    if (page === "myList") {

        renderMyList();

    }


    document
        .querySelectorAll(".nav-link")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });


    $("mobileNavigation")
        .classList
        .remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   HOME
   ========================================================= */

function setupHome() {

    document
        .querySelectorAll("[data-home-filter]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            "[data-home-filter]"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );

                    button.classList.add("active");

                    renderHomeGrid(
                        button.dataset.homeFilter
                    );

                }
            );

        });


    $("heroPlay")
        .addEventListener(
            "click",
            () => {

                const hero =
                    getFeatured();

                if (!hero) return;

                if (hero.type === "movie") {

                    playContent(hero);

                } else {

                    openDetails(hero);

                }

            }
        );


    $("heroInfo")
        .addEventListener(
            "click",
            () => {

                const hero =
                    getFeatured();

                if (hero) {

                    openDetails(hero);

                }

            }
        );

}


function getFeatured() {

    return (
        CONTENT.find(
            item => item.featured
        ) ||
        CONTENT[0]
    );

}


function renderHome() {

    renderHero();

    renderContinue();

    renderRecent();

    renderHomeGrid("all");

    renderHomeCategories();

}


function renderHero() {

    const item =
        getFeatured();

    if (!item) return;


    $("heroTitle").textContent =
        getTitle(item);


    $("heroDescription").textContent =
        getDescription(item);


    $("heroBackground").style.backgroundImage =
        `url("${item.poster}")`;


    const meta =
        $("heroMeta");

    meta.innerHTML = "";


    addMeta(meta, item.year);

    addMeta(
        meta,
        item.type === "movie"
            ? "סרט"
            : "סדרה"
    );


    if (item.duration) {

        addMeta(
            meta,
            item.duration
        );

    }

}


function addMeta(container, text) {

    const span =
        document.createElement("span");

    span.textContent =
        text;

    container.appendChild(span);

}


function renderHomeGrid(filter) {

    let items =
        CONTENT;

    if (filter !== "all") {

        items =
            CONTENT.filter(
                item =>
                    item.type === filter
            );

    }


    renderCards(
        $("homeGrid"),
        items
    );

}


/* =========================================================
   CONTINUE
   ========================================================= */

function renderContinue() {

    const section =
        $("continueSection");

    const grid =
        $("continueGrid");


    const items = [];


    CONTENT.forEach(content => {

        if (content.type === "movie") {

            const key =
                playbackKey(content);

            if (
                progress[key] &&
                progress[key].current > 5
            ) {

                items.push({
                    content,
                    episode: null
                });

            }

        } else {

            const episode =
                findLatestEpisodeProgress(
                    content
                );

            if (episode) {

                items.push({
                    content,
                    episode
                });

            }

        }

    });


    if (!items.length) {

        section.classList.add("hidden");

        return;

    }


    section.classList.remove("hidden");


    grid.innerHTML = "";


    items.forEach(entry => {

        grid.appendChild(
            createCard(
                entry.content,
                entry.episode
            )
        );

    });

}


/* =========================================================
   RECENT
   ========================================================= */

function renderRecent() {

    const section =
        $("recentSection");

    const grid =
        $("recentGrid");


    const items =
        recent
            .map(id =>
                CONTENT.find(
                    item => item.id === id
                )
            )
            .filter(Boolean);


    if (!items.length) {

        section.classList.add("hidden");

        return;

    }


    section.classList.remove("hidden");


    renderCards(
        grid,
        items.slice(0, 5)
    );

}


/* =========================================================
   MOVIES
   ========================================================= */

function setupMovies() {

    $("movieSort")
        .addEventListener(
            "change",
            renderMovies
        );

}


function renderMovies() {

    let movies =
        CONTENT.filter(
            item =>
                item.type === "movie"
        );


    const sort =
        $("movieSort").value;


    if (sort === "newest") {

        movies.sort(
            (a,b) =>
                b.year - a.year
        );

    }

    if (sort === "oldest") {

        movies.sort(
            (a,b) =>
                a.year - b.year
        );

    }

    if (sort === "az") {

        movies.sort(
            (a,b) =>
                getTitle(a)
                    .localeCompare(
                        getTitle(b),
                        "he"
                    )
        );

    }

    if (sort === "za") {

        movies.sort(
            (a,b) =>
                getTitle(b)
                    .localeCompare(
                        getTitle(a),
                        "he"
                    )
        );

    }


    $("moviesCount").textContent =
        `${movies.length} סרטים`;


    renderCards(
        $("moviesGrid"),
        movies
    );

}


/* =========================================================
   SERIES
   ========================================================= */

function setupSeries() {

    renderSeries();

}


function renderSeries() {

    const series =
        CONTENT.filter(
            item =>
                item.type === "series"
        );


    renderCards(
        $("seriesGrid"),
        series
    );

}


/* =========================================================
   CATEGORIES
   ========================================================= */

function setupCategories() {

    $("backHomeButton")
        .addEventListener(
            "click",
            () => {

                showPage("home");

            }
        );

}


function renderHomeCategories() {

    renderCategoryButtons(
        $("homeCategoryGrid")
    );

}


function renderCategoryPage() {

    renderCategoryButtons(
        $("categoryPageGrid")
    );

}


function renderCategoryButtons(container) {

    container.innerHTML = "";


    CATEGORIES.forEach(category => {

        const button =
            document.createElement("button");


        button.className =
            `category-card ${category.className}`;


        button.innerHTML = `

            <div class="category-icon">
                ${category.icon}
            </div>

            <h3>
                ${escapeHTML(
                    language === "he"
                        ? category.he
                        : category.en
                )}
            </h3>

            <p>
                ${escapeHTML(
                    category.description
                )}
            </p>

        `;


        button.addEventListener(
            "click",
            () =>
                openCategory(
                    category.id
                )
        );


        container.appendChild(button);

    });

}


/* =========================================================
   OPEN CATEGORY
   ========================================================= */

function openCategory(categoryId) {

    currentCategory =
        CATEGORIES.find(
            category =>
                category.id === categoryId
        );


    if (!currentCategory) return;


    [
        "homePage",
        "moviesPage",
        "seriesPage",
        "categoriesPage",
        "myListPage",
        "searchPage"
    ].forEach(id =>
        $(id).classList.add("hidden")
    );


    $("categoryResultsPage")
        .classList
        .remove("hidden");


    $("categoryResultIcon").textContent =
        currentCategory.icon;


    $("categoryResultTitle").textContent =
        language === "he"
            ? currentCategory.he
            : currentCategory.en;


    $("categoryResultDescription").textContent =
        currentCategory.description;


    const results =
        CONTENT.filter(
            item =>
                item.genres.includes(
                    categoryId
                )
        );


    renderCards(
        $("categoryResultGrid"),
        results
    );


    currentPage =
        "categoryResults";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CARDS
   ========================================================= */

function renderCards(container, items) {

    container.innerHTML = "";


    if (!items.length) {

        container.innerHTML = `

            <div class="empty-state"
                 style="grid-column:1/-1">

                <div class="empty-icon">
                    🎬
                </div>

                <h2>
                    אין תוכן להצגה
                </h2>

                <p>
                    לא נמצא תוכן מתאים.
                </p>

            </div>

        `;

        return;

    }


    items.forEach(entry => {

        const content =
            entry.content || entry;

        const episode =
            entry.episode || null;


        container.appendChild(
            createCard(
                content,
                episode
            )
        );

    });

}


function createCard(content, episode = null) {

    const card =
        document.createElement("article");


    card.className =
        "content-card";


    const saved =
        myList.includes(
            content.id
        );


    const percent =
        getProgressPercent(
            content,
            episode
        );


    const typeText =
        content.type === "movie"
            ? "סרט"
            : "סדרה";


    const episodeText =
        episode
            ? ` • ${getSeasonText(content, episode.season)} ${getEpisodeText(episode.episode.number)}`
            : "";


    card.innerHTML = `

        <div class="card-poster">

            <img
                src="${escapeAttribute(content.poster)}"
                alt="${escapeAttribute(
                    getTitle(content)
                )}"
                loading="lazy"
            >

            <div class="card-gradient"></div>

            <button
                class="card-play"
                aria-label="צפייה"
            >
                ▶
            </button>


            <div class="card-top">

                <span class="type-badge">
                    ${typeText}
                </span>

                <button
                    class="list-toggle
                    ${saved ? "saved" : ""}"
                    aria-label="הרשימה שלי"
                >
                    ${saved ? "★" : "☆"}
                </button>

            </div>


            <div class="card-bottom">

                <div class="card-title">
                    ${escapeHTML(
                        getTitle(content)
                    )}
                </div>

                <div class="card-meta">

                    <span>
                        ${content.year}
                    </span>

                    ${
                        content.type === "series"
                            ? `<span>• סדרה</span>`
                            : `<span>• ${content.duration || ""}</span>`
                    }

                    ${
                        episodeText
                            ? `<span>${escapeHTML(
                                episodeText
                              )}</span>`
                            : ""
                    }

                </div>

            </div>


            ${
                percent > 0
                    ? `
                        <div class="progress-track">

                            <div
                                class="progress-value"
                                style="width:${percent}%"
                            ></div>

                        </div>
                    `
                    : ""
            }

        </div>

    `;


    card.addEventListener(
        "click",
        event => {

            if (
                event.target.closest(
                    ".list-toggle"
                )
            ) {

                return;

            }


            if (
                event.target.closest(
                    ".card-play"
                )
            ) {

                if (episode) {

                    playContent(
                        content,
                        episode
                    );

                } else if (
                    content.type === "movie"
                ) {

                    playContent(content);

                } else {

                    openDetails(content);

                }

                return;

            }


            openDetails(
                content,
                episode
            );

        }
    );


    const listButton =
        card.querySelector(
            ".list-toggle"
        );


    listButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleMyList(
                content.id
            );

            listButton.classList.toggle(
                "saved"
            );

            listButton.textContent =
                myList.includes(
                    content.id
                )
                    ? "★"
                    : "☆";

        }
    );


    return card;

}


/* =========================================================
   DETAILS
   ========================================================= */

function setupDetailModal() {

    $("detailClose")
        .addEventListener(
            "click",
            closeDetail
        );


    $("detailModal")
        .querySelector(".modal-backdrop")
        .addEventListener(
            "click",
            closeDetail
        );


    $("detailPlay")
        .addEventListener(
            "click",
            () => {

                if (!currentContent) return;


                if (
                    currentContent.type ===
                    "movie"
                ) {

                    playContent(
                        currentContent
                    );

                } else {

                    if (
                        !selectedEpisode
                    ) {

                        showToast(
                            "בחר פרק לפני הצפייה",
                            "error"
                        );

                        return;

                    }


                    playContent(
                        currentContent,
                        selectedEpisode
                    );

                }

            }
        );


    $("detailListButton")
        .addEventListener(
            "click",
            () => {

                if (!currentContent) return;

                toggleMyList(
                    currentContent.id
                );

                updateDetailListButton();

            }
        );

}


function openDetails(
    content,
    episode = null
) {

    currentContent =
        content;


    selectedEpisode =
        episode;


    $("detailPoster").src =
        content.poster;


    $("detailPoster").alt =
        getTitle(content);


    $("detailTitle").textContent =
        getTitle(content);


    $("detailDescription").textContent =
        getDescription(content);


    $("detailKicker").textContent =
        content.type === "movie"
            ? "MOVIE"
            : "SERIES";


    $("detailPosterType").textContent =
        content.type === "movie"
            ? "סרט"
            : "סדרה";


    const meta =
        $("detailMeta");

    meta.innerHTML = "";


    addMeta(
        meta,
        content.year
    );


    addMeta(
        meta,
        content.type === "movie"
            ? "סרט"
            : "סדרה"
    );


    if (content.duration) {

        addMeta(
            meta,
            content.duration
        );

    }


    renderGenres(
        content
    );


    updateDetailListButton();


    if (
        content.type ===
        "series"
    ) {

        $("seriesSelector")
            .classList
            .remove("hidden");


        renderSeasons(
            content
        );

    } else {

        $("seriesSelector")
            .classList
            .add("hidden");

    }


    $("detailModal")
        .classList
        .remove("hidden");


    document.body.style.overflow =
        "hidden";

}


function closeDetail() {

    $("detailModal")
        .classList
        .add("hidden");


    document.body.style.overflow =
        "";

}


function renderGenres(content) {

    const container =
        $("detailGenres");


    container.innerHTML = "";


    content.genres.forEach(
        genre => {

            const tag =
                document.createElement(
                    "span"
                );

            tag.className =
                "genre-tag";

            const category =
                CATEGORIES.find(
                    item =>
                        item.id === genre
                );


            tag.textContent =
                category
                    ? (
                        language === "he"
                            ? category.he
                            : category.en
                    )
                    : genre;


            container.appendChild(tag);

        }
    );

}


function updateDetailListButton() {

    if (!currentContent)
        return;


    const saved =
        myList.includes(
            currentContent.id
        );


    $("detailListButton")
        .textContent =
        saved
            ? "★ ברשימה שלי"
            : "☆ הרשימה שלי";

}


/* =========================================================
   SEASONS
   ========================================================= */

function renderSeasons(content) {

    const seasonButtons =
        $("seasonButtons");


    seasonButtons.innerHTML = "";


    content.seasons.forEach(
        (season, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "season-button";


            button.textContent =
                getSeasonText(
                    content,
                    season.number
                );


            button.addEventListener(
                "click",
                () => {

                    selectSeason(
                        content,
                        season
                    );

                }
            );


            seasonButtons.appendChild(
                button
            );


            if (
                (
                    selectedEpisode &&
                    selectedEpisode.season ===
                        season.number
                ) ||
                (
                    !selectedEpisode &&
                    index === 0
                )
            ) {

                selectSeason(
                    content,
                    season
                );

            }

        }
    );

}


function selectSeason(
    content,
    season
) {

    currentSeason =
        season;


    document
        .querySelectorAll(
            ".season-button"
        )
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "active",
                    content.seasons[index]
                        .number ===
                    season.number
                );

            }
        );


    renderEpisodes(
        content,
        season
    );

}


function renderEpisodes(
    content,
    season
) {

    const list =
        $("episodeList");


    list.innerHTML = "";


    season.episodes.forEach(
        episode => {

            const item =
                document.createElement(
                    "button"
                );


            item.className =
                "episode-item";


            if (
                selectedEpisode &&
                selectedEpisode.episode.number ===
                    episode.number &&
                selectedEpisode.season ===
                    season.number
            ) {

                item.classList.add(
                    "selected"
                );

            }


            item.innerHTML = `

                <span class="episode-number">
                    ${episode.number}
                </span>

                <span class="episode-details">

                    <span class="episode-title">
                        ${escapeHTML(
                            getEpisodeText(
                                episode
                            )
                        )}
                    </span>

                    <span class="episode-subtitle">
                        ${escapeHTML(
                            getSeasonText(
                                content,
                                season.number
                            )
                        )}
                    </span>

                </span>

                <span class="episode-play-icon">
                    ▶
                </span>

            `;


            item.addEventListener(
                "click",
                () => {

                    selectedEpisode = {

                        contentId:
                            content.id,

                        season:
                            season.number,

                        episode:
                            episode

                    };


                    renderEpisodes(
                        content,
                        season
                    );


                    playContent(
                        content,
                        selectedEpisode
                    );

                }
            );


            list.appendChild(item);

        }
    );

}


/* =========================================================
   PLAY CONTENT
   ========================================================= */

function playContent(
    content,
    episode = null
) {

    currentContent =
        content;


    currentEpisode =
        episode;


    const video =
        $("mainVideo");


    if (!video) return;


    let videoFile = null;


    if (
        content.type ===
        "movie"
    ) {

        videoFile =
            content.video;

    } else {

        if (!episode) {

            openDetails(content);

            return;

        }


        const season =
            content.seasons.find(
                s =>
                    s.number ===
                    episode.season
            );


        if (!season) return;


        const ep =
            season.episodes.find(
                e =>
                    e.number ===
                    episode.episode.number
            );


        if (!ep) return;


        videoFile =
            ep.video;

    }


    if (!videoFile) {

        showToast(
            "לא נמצא קובץ וידאו",
            "error"
        );

        return;

    }


    currentPlaybackKey =
        playbackKey(
            content,
            episode
        );


    video.pause();

    video.src =
        videoFile;

    video.load();


    $("playerTitle").textContent =
        getTitle(content);


    $("playerSubtitle").textContent =
        getPlaybackSubtitle(
            content,
            episode
        );


    $("introSubtitle").textContent =
        getPlaybackSubtitle(
            content,
            episode
        );


    $("endTitle").textContent =
        getPlaybackSubtitle(
            content,
            episode
        );


    $("playerModal")
        .classList
        .remove("hidden");


    $("endScreen")
        .classList
        .add("hidden");


    $("resumePrompt")
        .classList
        .add("hidden");


    document.body.style.overflow =
        "hidden";


    addRecent(
        content.id
    );


    video.onloadedmetadata =
        () => {

            $("duration").textContent =
                formatTime(
                    video.duration
                );


            const saved =
                progress[
                    currentPlaybackKey
                ];


            if (
                saved &&
                saved.current > 5 &&
                saved.current <
                    video.duration - 5
            ) {

                $("resumeTime")
                    .textContent =
                    formatTime(
                        saved.current
                    );


                $("resumePrompt")
                    .classList
                    .remove("hidden");

            } else {

                startVideoFrom(
                    0
                );

            }

        };


    playIntro();

}


/* =========================================================
   INTRO
   ========================================================= */

function playIntro() {

    const intro =
        $("cinematicIntro");


    intro.classList.add(
        "show"
    );


    clearTimeout(
        introTimer
    );


    introTimer =
        setTimeout(
            () => {

                intro.classList.remove(
                    "show"
                );


                const video =
                    $("mainVideo");


                video.play()
                    .catch(
                        () => {}
                    );

            },
            1500
        );

}


/* =========================================================
   PLAYER
   ========================================================= */

function setupPlayer() {

    const video =
        $("mainVideo");


    $("playerClose")
        .addEventListener(
            "click",
            closePlayer
        );


    $("playPause")
        .addEventListener(
            "click",
            togglePlay
        );


    $("muteButton")
        .addEventListener(
            "click",
            toggleMute
        );


    $("volumeBar")
        .addEventListener(
            "input",
            () => {

                video.volume =
                    Number(
                        $("volumeBar").value
                    );

                video.muted =
                    video.volume === 0;

                updateMuteButton();

            }
        );


    $("seekBar")
        .addEventListener(
            "input",
            () => {

                if (
                    !video.duration
                )
                    return;


                video.currentTime =
                    (
                        Number(
                            $("seekBar").value
                        ) / 100
                    ) *
                    video.duration;

            }
        );


    $("speedSelect")
        .addEventListener(
            "change",
            () => {

                video.playbackRate =
                    Number(
                        $("speedSelect").value
                    );

            }
        );


    $("fullscreenButton")
        .addEventListener(
            "click",
            toggleFullscreen
        );


    $("resumeButton")
        .addEventListener(
            "click",
            () => {

                const saved =
                    progress[
                        currentPlaybackKey
                    ];


                $("resumePrompt")
                    .classList
                    .add("hidden");


                startVideoFrom(
                    saved
                        ? saved.current
                        : 0
                );

            }
        );


    $("startOverButton")
        .addEventListener(
            "click",
            () => {

                $("resumePrompt")
                    .classList
                    .add("hidden");


                startVideoFrom(
                    0
                );

            }
        );


    $("replayButton")
        .addEventListener(
            "click",
            () => {

                $("endScreen")
                    .classList
                    .add("hidden");


                startVideoFrom(
                    0
                );

            }
        );


    video.addEventListener(
        "timeupdate",
        () => {
            updateProgress();
            checkEpisodeTransitionFeatures();
        }
    );


    video.addEventListener(
        "play",
        updatePlayButton
    );


    video.addEventListener(
        "pause",
        updatePlayButton
    );


    video.addEventListener(
        "ended",
        handleEpisodeEnded
    );


    video.addEventListener(
        "error",
        () => {

            showToast(
                "לא ניתן לנגן את קובץ הווידאו. בדוק שהקובץ נמצא באותה תיקייה.",
                "error"
            );

        }
    );


    $("videoControls")
        .addEventListener(
            "dblclick",
            toggleFullscreen
        );

}


function startVideoFrom(seconds) {

    const video =
        $("mainVideo");


    try {

        video.currentTime =
            seconds || 0;

    } catch(error) {}


    video.play()
        .catch(
            () => {

                showToast(
                    "לחץ על ▶ כדי להתחיל את הסרטון",
                    "error"
                );

            }
        );

}


function togglePlay() {

    const video =
        $("mainVideo");


    if (video.paused) {

        video.play()
            .catch(
                () => {}
            );

    } else {

        video.pause();

    }

}


function updatePlayButton() {

    $("playPause").textContent =
        $("mainVideo").paused
            ? "▶"
            : "Ⅱ";

}


function toggleMute() {

    const video =
        $("mainVideo");


    video.muted =
        !video.muted;


    updateMuteButton();

}


function updateMuteButton() {

    const video =
        $("mainVideo");


    $("muteButton").textContent =
        video.muted ||
        video.volume === 0
            ? "🔇"
            : "🔊";

}


function updateProgress() {

    const video =
        $("mainVideo");


    if (
        !video.duration
    )
        return;


    const current =
        video.currentTime;

    const duration =
        video.duration;


    $("currentTime").textContent =
        formatTime(
            current
        );


    $("seekBar").value =
        (
            current /
            duration
        ) * 100;


    saveProgress(
        current,
        duration
    );

}


function formatTime(seconds) {

    if (
        isNaN(seconds)
    )
        return "00:00";


    const mins =
        Math.floor(
            seconds / 60
        );

    const secs =
        Math.floor(
            seconds % 60
        );


    return `${
        mins < 10
            ? "0" + mins
            : mins
    }:${
        secs < 10
            ? "0" + secs
            : secs
    }`;

}


function toggleFullscreen() {

    const container =
        document.querySelector(
            ".video-container"
        );


    if (
        !document.fullscreenElement
    ) {

        container.requestFullscreen()
            .catch(
                () => {}
            );

    } else {

        document.exitFullscreen()
            .catch(
                () => {}
            );

    }

}


function closePlayer() {

    const video =
        $("mainVideo");


    video.pause();

    video.src = "";


    $("playerModal")
        .classList
        .add("hidden");


    document.body.style.overflow =
        "";


    renderHome();

    if (
        currentPage === "movies"
    ) {

        renderMovies();

    }

    if (
        currentPage === "series"
    ) {

        renderSeries();

    }

}


/* =========================================================
   EPISODE TRANSITION & RATING FEATURES (ADDED)
   ========================================================= */

let nextEpPromptShown = false;

function checkEpisodeTransitionFeatures() {
    if (!currentContent || currentContent.type !== "series" || !currentEpisode) return;

    const video = $("mainVideo");
    if (!video || !video.duration) return;

    let container = $("nextEpisodeButtonFloating");
    if (!container) {
        container = document.createElement("button");
        container.id = "nextEpisodeButtonFloating";
        container.style.position = "absolute";
        container.style.bottom = "90px";
        container.style.left = "30px";
        container.style.zIndex = "100";
        container.style.padding = "12px 20px";
        container.style.borderRadius = "8px";
        container.style.background = "var(--blue)";
        container.style.color = "white";
        container.style.fontWeight = "800";
        container.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        container.style.cursor = "pointer";
        container.textContent = "להמשיך לפרק הבא";
        container.classList.add("hidden");

        container.addEventListener("click", () => {
            container.classList.add("hidden");
            goToNextEpisodeOrRating();
        });

        document.querySelector(".video-container").appendChild(container);
    }

    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= 5 && timeLeft > 0) {
        if (!nextEpPromptShown) {
            container.classList.remove("hidden");
            nextEpPromptShown = true;
        }
    } else if (video.currentTime < video.duration - 6) {
        container.classList.add("hidden");
        nextEpPromptShown = false;
    }
}

function handleEpisodeEnded() {
    const floatingBtn = $("nextEpisodeButtonFloating");
    if (floatingBtn) floatingBtn.classList.add("hidden");
    nextEpPromptShown = false;
    goToNextEpisodeOrRating();
}

function getNextEpisodeObject() {
    if (!currentContent || currentContent.type !== "series" || !currentEpisode) return null;

    const seasonObj = currentContent.seasons.find(s => s.number === currentEpisode.season);
    if (!seasonObj) return null;

    const epIndex = seasonObj.episodes.findIndex(e => e.number === currentEpisode.episode.number);
    if (epIndex !== -1 && epIndex < seasonObj.episodes.length - 1) {
        return {
            contentId: currentContent.id,
            season: seasonObj.number,
            episode: seasonObj.episodes[epIndex + 1]
        };
    }

    const seasonIndex = currentContent.seasons.findIndex(s => s.number === currentEpisode.season);
    if (seasonIndex !== -1 && seasonIndex < currentContent.seasons.length - 1) {
        const nextSeasonObj = currentContent.seasons[seasonIndex + 1];
        if (nextSeasonObj.episodes.length > 0) {
            return {
                contentId: currentContent.id,
                season: nextSeasonObj.number,
                episode: nextSeasonObj.episodes[0]
            };
        }
    }

    return null;
}

function goToNextEpisodeOrRating() {
    const nextEp = getNextEpisodeObject();
    if (nextEp) {
        playContent(currentContent, nextEp);
    } else {
        showRatingInterface();
    }
}

function showRatingInterface() {
    const endScreen = $("endScreen");
    const endContent = endScreen.querySelector(".end-content");
    
    endContent.innerHTML = `
        <div class="end-check">★</div>
        <span class="section-kicker">SERIES FINISHED</span>
        <h2>הסדרה הסתיימה!</h2>
        <p>הגעת לפרק האחרון בסדרה. נשמח אם תדרג אותה:</p>
        <div id="starRatingContainer" style="display:flex; justify-content:center; gap:10px; font-size:35px; margin:20px 0; cursor:pointer;">
            <span data-rating="1">☆</span>
            <span data-rating="2">☆</span>
            <span data-rating="3">☆</span>
            <span data-rating="4">☆</span>
            <span data-rating="5">☆</span>
        </div>
        <p id="ratingThanks" class="hidden" style="color:var(--blue); font-weight:bold; margin-top:10px;">תודה על הדירוג!</p>
        <button id="closeRatingScreen" class="button secondary-button" style="margin-top:20px;">סגור</button>
    `;

    const stars = endContent.querySelectorAll("#starRatingContainer span");
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const val = Number(star.dataset.rating);
            stars.forEach((s, idx) => {
                s.textContent = idx < val ? "★" : "☆";
                s.style.color = idx < val ? "#f59e0b" : "white";
            });
            $("ratingThanks").classList.remove("hidden");
            setTimeout(() => {
                closePlayer();
            }, 1500);
        });
    });

    $("closeRatingScreen").addEventListener("click", () => {
        closePlayer();
    });

    endScreen.classList.remove("hidden");
}


/* =========================================================
   PROGRESS & STORAGE
   ========================================================= */

function saveProgress(current, duration) {

    if (
        !currentPlaybackKey
    )
        return;


    progress[
        currentPlaybackKey
    ] = {

        current,

        duration,

        timestamp:
            Date.now()

    };


    localStorage.setItem(
        "elironflix_progress",
        JSON.stringify(
            progress
        )
    );

}


function getProgressPercent(
    content,
    episode = null
) {

    const key =
        playbackKey(
            content,
            episode
        );


    const item =
        progress[key];


    if (
        !item ||
        !item.duration
    )
        return 0;


    const percent =
        (
            item.current /
            item.duration
        ) * 100;


    return Math.min(
        Math.max(
            percent,
            0
        ),
        100
    );

}


function playbackKey(
    content,
    episode = null
) {

    if (
        content.type ===
        "movie"
    ) {

        return `movie_${content.id}`;

    }


    if (!episode) {

        return `series_${content.id}`;

    }


    return `series_${content.id}_s${episode.season}_e${episode.episode.number}`;

}


function findLatestEpisodeProgress(
    content
) {

    if (
        !content.seasons
    )
        return null;


    let latest = null;


    content.seasons.forEach(
        season => {

            season.episodes.forEach(
                episode => {

                    const entry = {

                        season:
                            season.number,

                        episode

                    };


                    const key =
                        playbackKey(
                            content,
                            entry
                        );


                    const item =
                        progress[key];


                    if (
                        item &&
                        item.current > 5 &&
                        item.current <
                            item.duration - 5
                    ) {

                        if (
                            !latest ||
                            item.timestamp >
                                latest.timestamp
                        ) {

                            latest = {

                                episode:
                                    entry,

                                timestamp:
                                    item.timestamp

                            };

                        }

                    }

                }
            );

        }
    );


    return latest
        ? latest.episode
        : null;

}


/* =========================================================
   RECENT
   ========================================================= */

function addRecent(id) {

    recent =
        recent.filter(
            item =>
                item !== id
        );


    recent.unshift(id);


    if (
        recent.length > 10
    ) {

        recent.pop();

    }


    localStorage.setItem(
        "elironflix_recent",
        JSON.stringify(
            recent
        )
    );

}


/* =========================================================
   MY LIST
   ========================================================= */

function setupMyList() {

    // Setup handled globally
}


function toggleMyList(id) {

    const index =
        myList.indexOf(id);


    if (index === -1) {

        myList.push(id);

        showToast(
            "נוסף לרשימה שלי",
            "success"
        );

    } else {

        myList.splice(
            index,
            1
        );

        showToast(
            "הוסר מהרשימה שלי",
            "success"
        );

    }


    localStorage.setItem(
        "elironflix_myList",
        JSON.stringify(
            myList
        )
    );

}


function renderMyList() {

    const grid =
        $("myListGrid");

    const empty =
        $("myListEmpty");


    const items =
        myList
            .map(id =>
                CONTENT.find(
                    item =>
                        item.id === id
                )
            )
            .filter(Boolean);


    if (!items.length) {

        grid.classList.add(
            "hidden"
        );

        empty.classList.remove(
            "hidden"
        );

        return;

    }


    empty.classList.add(
        "hidden");

    grid.classList.remove(
        "hidden"
    );


    renderCards(
        grid,
        items
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const input =
        $("searchInput");

    const clear =
        $("clearSearch");


    input.addEventListener(
        "input",
        () => {

            const query =
                input.value.trim();


            clear.classList.toggle(
                "hidden",
                !query
            );


            if (query) {

                performSearch(
                    query
                );

            } else {

                if (
                    currentPage ===
                    "search"
                ) {

                    showPage("home");

                }

            }

        }
    );


    clear.addEventListener(
        "click",
        () => {

            input.value = "";

            clear.classList.add(
                "hidden"
            );


            if (
                currentPage ===
                "search"
            ) {

                showPage("home");

            }

        }
    );

}


function performSearch(query) {

    const q =
        query.toLowerCase();


    const results =
        CONTENT.filter(
            item =>
                getTitle(item)
                    .toLowerCase()
                    .includes(q) ||
                getDescription(item)
                    .toLowerCase()
                    .includes(q)
        );


    if (
        currentPage !== "search"
    ) {

        [
            "homePage",
            "moviesPage",
            "seriesPage",
            "categoriesPage",
            "categoryResultsPage",
            "myListPage"
        ].forEach(id =>
            $(id).classList.add(
                "hidden"
            )
        );


        $("searchPage")
            .classList
            .remove("hidden");


        currentPage = "search";

    }


    $("searchDescription")
        .textContent =
        `תוצאות עבור "${query}"`;


    renderCards(
        $("searchGrid"),
        results
    );


    $("searchEmpty")
        .classList.toggle(
            "hidden",
            results.length > 0
        );

}


/* =========================================================
   SETTINGS
   ========================================================= */

function setupSettings() {

    $("settingsButton")
        .addEventListener(
            "click",
            () => {

                $("settingsModal")
                    .classList
                    .remove("hidden");

            }
        );


    $("settingsClose")
        .addEventListener(
            "click",
            () => {

                $("settingsModal")
                    .classList
                    .add("hidden");

            }
        );


    $("settingsModal")
        .querySelector(".modal-backdrop")
        .addEventListener(
            "click",
            () => {

                $("settingsModal")
                    .classList
                    .add("hidden");

            }
        );


    $("heLanguage")
        .addEventListener(
            "click",
            () =>
                setLanguage("he")
        );


    $("enLanguage")
        .addEventListener(
            "click",
            () =>
                setLanguage("en")
        );


    $("clearListButton")
        .addEventListener(
            "click",
            () => {

                myList = [];

                localStorage.removeItem(
                    "elironflix_myList"
                );

                showToast(
                    "הרשימה שלי נמחקה",
                    "success"
                );

                renderMyList();

            }
        );


    $("clearHistoryButton")
        .addEventListener(
            "click",
            () => {

                progress = {};

                recent = [];

                localStorage.removeItem(
                    "elironflix_progress"
                );

                localStorage.removeItem(
                    "elironflix_recent"
                );

                showToast(
                    "היסטוריית הצפייה נמחקה",
                    "success"
                );

                renderHome();

            }
        );

}


function setLanguage(lang) {

    language = lang;

    localStorage.setItem(
        "elironflix_language",
        lang
    );


    $("heLanguage")
        .classList.toggle(
            "active",
            lang === "he"
        );


    $("enLanguage")
        .classList.toggle(
            "active",
            lang === "en"
        );


    applyLanguage();

    showPage(currentPage);

}


/* =========================================================
   HELPERS
   ========================================================= */

function getTitle(item) {

    return (
        item.title[language] ||
        item.title.he
    );

}


function getDescription(item) {

    return (
        item.description[
            language
        ] ||
        item.description.he
    );

}


function getSeasonText(
    content,
    seasonNumber
) {

    const season =
        content.seasons.find(
            s =>
                s.number ===
                seasonNumber
        );


    if (!season)
        return `עונה ${seasonNumber}`;


    return (
        season.title[language] ||
        season.title.he
    );

}


function getEpisodeText(
    episode
) {

    return (
        episode.title[language] ||
        episode.title.he
    );

}


function getPlaybackSubtitle(
    content,
    episode = null
) {

    if (
        content.type ===
        "movie"
    ) {

        return getTitle(content);

    }


    if (!episode) {

        return getTitle(content);

    }


    return `${getTitle(
        content
    )} • ${getSeasonText(
        content,
        episode.season
    )} • ${getEpisodeText(
        episode.episode
    )}`;

}


function showToast(
    message,
    type = "success"
) {

    const container =
        $("toastContainer");


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        `toast ${type}`;


    toast.textContent =
        message;


    container.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.style.opacity =
                "0";

            setTimeout(
                () =>
                    toast.remove(),
                300
            );

        },
        3000
    );

}


function escapeHTML(str) {

    return String(str)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeAttribute(
    str
) {

    return escapeHTML(str);

}