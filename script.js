// 多语言支持
const translations = {
    en: {
        tagline: "Free Online Games",
        search_placeholder: "Search games...",
        nav_all: "All",
        nav_action: "Action",
        nav_adventure: "Adventure",
        nav_strategy: "Strategy",
        nav_puzzle: "Puzzle",
        nav_racing: "Racing",
        nav_sports: "Sports",
        nav_casual: "Casual",
        featured_title: "🌟 Featured Games",
        featured_subtitle: "Discover the most popular online games, no download required, play instantly!",
        about_title: "🎮 About GameWEB",
        about_content: "GameWEB is your dedicated online gaming platform, offering a rich variety of free web games. We are committed to bringing you the best gaming experience with carefully selected games that support multiple devices, allowing you to enjoy gaming anytime, anywhere!",
        footer_text: "&copy; 2025 GameWEB - Free Online Games Platform | Enjoy games, have fun every day!",
        coming_soon: "This game is coming soon, stay tuned!",
        category_names: {
            action: "Action",
            adventure: "Adventure",
            strategy: "Strategy",
            puzzle: "Puzzle",
            racing: "Racing",
            sports: "Sports",
            casual: "Casual"
        }
    },
    zh: {
        tagline: "免费在线游戏",
        search_placeholder: "搜索游戏...",
        nav_all: "全部",
        nav_action: "动作",
        nav_adventure: "冒险",
        nav_strategy: "策略",
        nav_puzzle: "益智",
        nav_racing: "竞速",
        nav_sports: "体育",
        nav_casual: "休闲",
        featured_title: "🌟 精选游戏",
        featured_subtitle: "发现最受欢迎的在线游戏，无需下载，即点即玩！",
        about_title: "🎮 关于 GameWEB",
        about_content: "GameWEB 是您的专属在线游戏平台，提供丰富多样的免费网页游戏。我们致力于为玩家带来最佳的游戏体验，所有游戏都经过精心挑选，支持多种设备，让您随时随地享受游戏的乐趣！",
        footer_text: "&copy; 2025 GameWEB - 免费在线游戏平台 | 享受游戏，快乐每一天！",
        coming_soon: "该游戏即将上线，敬请期待！",
        category_names: {
            action: "动作",
            adventure: "冒险",
            strategy: "策略",
            puzzle: "益智",
            racing: "竞速",
            sports: "体育",
            casual: "休闲"
        }
    },
    ja: {
        tagline: "無料オンラインゲーム",
        search_placeholder: "ゲームを検索...",
        nav_all: "すべて",
        nav_action: "アクション",
        nav_adventure: "アドベンチャー",
        nav_strategy: "ストラテジー",
        nav_puzzle: "パズル",
        nav_racing: "レーシング",
        nav_sports: "スポーツ",
        nav_casual: "カジュアル",
        featured_title: "🌟 おすすめゲーム",
        featured_subtitle: "最も人気のあるオンラインゲームを発見しよう。ダウンロード不要、すぐにプレイ！",
        about_title: "🎮 GameWEBについて",
        about_content: "GameWEBは、豊富な無料ウェブゲームを提供する専用オンラインゲームプラットフォームです。厳選されたゲームで最高のゲーム体験をお届けし、複数のデバイスに対応しているため、いつでもどこでもゲームをお楽しみいただけます！",
        footer_text: "&copy; 2025 GameWEB - 無料オンラインゲームプラットフォーム | ゲームを楽しんで、毎日を楽しく！",
        coming_soon: "このゲームは近日公開予定です。お楽しみに！",
        category_names: {
            action: "アクション",
            adventure: "アドベンチャー",
            strategy: "ストラテジー",
            puzzle: "パズル",
            racing: "レーシング",
            sports: "スポーツ",
            casual: "カジュアル"
        }
    }
};

// 增强的游戏数据
const gamesData = {
    en: [
        {
            id: 1,
            title: "Monster Survivors",
            category: "action",
            icon: "👹",
            description: "Battle through endless waves of monsters in this thrilling survival action game! Use weapons and skills to defeat enemies and survive as long as possible.",
            url: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
            difficulty: "Medium",
            duration: "30 mins",
            ageRating: "12+",
            tags: ["survival", "action", "monsters", "weapons"],
            isNew: true,
            isTop: true,
            popularity: 95
        },
        {
            id: 2,
            title: "Space Adventure",
            category: "adventure",
            icon: "🚀",
            description: "Explore mysterious space worlds and discover unknown planets and civilizations. Navigate through asteroid fields and alien territories.",
            url: "#",
            difficulty: "Easy",
            duration: "45 mins",
            ageRating: "8+",
            tags: ["space", "exploration", "planets", "sci-fi"],
            isNew: false,
            isTop: true,
            popularity: 88
        },
        {
            id: 3,
            title: "Chess Master",
            category: "strategy",
            icon: "♟️",
            description: "Classic chess game that challenges your strategic thinking. Play against AI opponents of different difficulty levels.",
            url: "#",
            difficulty: "Hard",
            duration: "60 mins",
            ageRating: "6+",
            tags: ["chess", "strategy", "classic", "thinking"],
            isNew: false,
            isTop: true,
            popularity: 82
        },
        {
            id: 4,
            title: "Puzzle Quest",
            category: "puzzle",
            icon: "🧩",
            description: "Solve various interesting puzzles and exercise your logical thinking. From simple patterns to complex brain teasers.",
            url: "#",
            difficulty: "Medium",
            duration: "25 mins",
            ageRating: "All",
            tags: ["puzzle", "logic", "brain", "thinking"],
            isNew: true,
            isTop: true,
            popularity: 79
        },
        {
            id: 5,
            title: "Speed Racer",
            category: "racing",
            icon: "🏎️",
            description: "Show your driving skills on high-speed tracks. Race against time and other players in exciting competitions.",
            url: "#",
            difficulty: "Medium",
            duration: "20 mins",
            ageRating: "10+",
            tags: ["racing", "cars", "speed", "competition"],
            isNew: false,
            isTop: true,
            popularity: 85
        },
        {
            id: 6,
            title: "Football Pro",
            category: "sports",
            icon: "⚽",
            description: "Experience real football matches and become a star on the field. Control your team and win championships.",
            url: "#",
            difficulty: "Medium",
            duration: "35 mins",
            ageRating: "All",
            tags: ["football", "sports", "team", "championship"],
            isNew: false,
            isTop: true,
            popularity: 77
        },
        {
            id: 7,
            title: "Bubble Pop",
            category: "casual",
            icon: "🫧",
            description: "Relaxing and fun bubble elimination game suitable for all ages. Match colors and create amazing combos.",
            url: "#",
            difficulty: "Easy",
            duration: "15 mins",
            ageRating: "All",
            tags: ["bubbles", "casual", "relaxing", "match"],
            isNew: false,
            isTop: true,
            popularity: 73
        },
        {
            id: 8,
            title: "Ninja Warrior",
            category: "action",
            icon: "🥷",
            description: "Become a ninja warrior and survive in a dangerous world. Use stealth and combat skills to overcome challenges.",
            url: "#",
            difficulty: "Hard",
            duration: "40 mins",
            ageRating: "13+",
            tags: ["ninja", "stealth", "combat", "warrior"],
            isNew: true,
            isTop: true,
            popularity: 91
        },
        {
            id: 9,
            title: "Magic Castle",
            category: "adventure",
            icon: "🏰",
            description: "Explore a magical castle full of secrets and treasures. Solve puzzles and defeat magical creatures.",
            url: "#",
            difficulty: "Medium",
            duration: "50 mins",
            ageRating: "8+",
            tags: ["magic", "castle", "treasure", "fantasy"],
            isNew: true,
            isTop: false,
            popularity: 68
        },
        {
            id: 10,
            title: "City Builder",
            category: "strategy",
            icon: "🏗️",
            description: "Build and manage your own city. Plan infrastructure, manage resources, and keep citizens happy.",
            url: "#",
            difficulty: "Hard",
            duration: "90 mins",
            ageRating: "10+",
            tags: ["building", "management", "city", "strategy"],
            isNew: true,
            isTop: true,
            popularity: 86
        }
    ],
    zh: [
        {
            id: 1,
            title: "怪物生存者",
            category: "action",
            icon: "👹",
            description: "在这款激动人心的生存动作游戏中与成群的怪物战斗！使用武器和技能击败敌人，尽可能长时间生存。",
            url: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
            difficulty: "中等",
            duration: "30分钟",
            ageRating: "12+",
            tags: ["生存", "动作", "怪物", "武器"],
            isNew: true,
            isTop: true,
            popularity: 95
        },
        {
            id: 2,
            title: "太空冒险",
            category: "adventure",
            icon: "🚀",
            description: "探索神秘的太空世界，发现未知的星球和文明。穿越小行星带和外星领域。",
            url: "#",
            difficulty: "简单",
            duration: "45分钟",
            ageRating: "8+",
            tags: ["太空", "探索", "星球", "科幻"],
            isNew: false,
            isTop: true,
            popularity: 88
        },
        {
            id: 3,
            title: "国际象棋大师",
            category: "strategy",
            icon: "♟️",
            description: "经典国际象棋游戏，挑战你的策略思维。与不同难度的AI对手对战。",
            url: "#",
            difficulty: "困难",
            duration: "60分钟",
            ageRating: "6+",
            tags: ["象棋", "策略", "经典", "思考"],
            isNew: false,
            isTop: true,
            popularity: 82
        },
        {
            id: 4,
            title: "益智探索",
            category: "puzzle",
            icon: "🧩",
            description: "解决各种有趣的谜题，锻炼你的逻辑思维。从简单的图案到复杂的脑筋急转弯。",
            url: "#",
            difficulty: "中等",
            duration: "25分钟",
            ageRating: "全年龄",
            tags: ["益智", "逻辑", "大脑", "思考"],
            isNew: true,
            isTop: true,
            popularity: 79
        },
        {
            id: 5,
            title: "极速赛车",
            category: "racing",
            icon: "🏎️",
            description: "在高速赛道上展现你的驾驶技巧。与时间和其他玩家在激动人心的比赛中竞速。",
            url: "#",
            difficulty: "中等",
            duration: "20分钟",
            ageRating: "10+",
            tags: ["赛车", "汽车", "速度", "竞赛"],
            isNew: false,
            isTop: true,
            popularity: 85
        },
        {
            id: 6,
            title: "足球专业版",
            category: "sports",
            icon: "⚽",
            description: "体验真实的足球比赛，成为球场上的明星。控制你的团队，赢得冠军。",
            url: "#",
            difficulty: "中等",
            duration: "35分钟",
            ageRating: "全年龄",
            tags: ["足球", "体育", "团队", "冠军"],
            isNew: false,
            isTop: true,
            popularity: 77
        },
        {
            id: 7,
            title: "泡泡消除",
            category: "casual",
            icon: "🫧",
            description: "轻松有趣的泡泡消除游戏，适合所有年龄。匹配颜色，创造惊人的连击。",
            url: "#",
            difficulty: "简单",
            duration: "15分钟",
            ageRating: "全年龄",
            tags: ["泡泡", "休闲", "放松", "匹配"],
            isNew: false,
            isTop: true,
            popularity: 73
        },
        {
            id: 8,
            title: "忍者战士",
            category: "action",
            icon: "🥷",
            description: "成为忍者战士，在危险的世界中生存。使用隐身和战斗技巧克服挑战。",
            url: "#",
            difficulty: "困难",
            duration: "40分钟",
            ageRating: "13+",
            tags: ["忍者", "隐身", "战斗", "武士"],
            isNew: true,
            isTop: true,
            popularity: 91
        },
        {
            id: 9,
            title: "魔法城堡",
            category: "adventure",
            icon: "🏰",
            description: "探索充满秘密和宝藏的魔法城堡。解决谜题，击败魔法生物。",
            url: "#",
            difficulty: "中等",
            duration: "50分钟",
            ageRating: "8+",
            tags: ["魔法", "城堡", "宝藏", "幻想"],
            isNew: true,
            isTop: false,
            popularity: 68
        },
        {
            id: 10,
            title: "城市建设者",
            category: "strategy",
            icon: "🏗️",
            description: "建设和管理你自己的城市。规划基础设施，管理资源，保持居民满意。",
            url: "#",
            difficulty: "困难",
            duration: "90分钟",
            ageRating: "10+",
            tags: ["建设", "管理", "城市", "策略"],
            isNew: true,
            isTop: true,
            popularity: 86
        }
    ],
    ja: [
        {
            id: 1,
            title: "モンスターサバイバー",
            category: "action",
            icon: "👹",
            description: "このスリリングなサバイバルアクションゲームで、無限のモンスターの波と戦おう！武器とスキルを使って敵を倒し、できるだけ長く生き残ろう。",
            url: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
            difficulty: "普通",
            duration: "30分",
            ageRating: "12+",
            tags: ["サバイバル", "アクション", "モンスター", "武器"],
            isNew: true,
            isTop: true,
            popularity: 95
        },
        {
            id: 2,
            title: "スペースアドベンチャー",
            category: "adventure",
            icon: "🚀",
            description: "神秘の宇宙世界を探索し、未知の惑星と文明を発見しよう。小惑星帯とエイリアンの領域を航行。",
            url: "#",
            difficulty: "簡単",
            duration: "45分",
            ageRating: "8+",
            tags: ["宇宙", "探索", "惑星", "SF"],
            isNew: false,
            isTop: true,
            popularity: 88
        },
        {
            id: 3,
            title: "チェスマスター",
            category: "strategy",
            icon: "♟️",
            description: "戦略的思考に挑戦するクラシックチェスゲーム。異なる難易度のAI対戦相手と対戦。",
            url: "#",
            difficulty: "難しい",
            duration: "60分",
            ageRating: "6+",
            tags: ["チェス", "戦略", "クラシック", "思考"],
            isNew: false,
            isTop: true,
            popularity: 82
        },
        {
            id: 4,
            title: "パズルクエスト",
            category: "puzzle",
            icon: "🧩",
            description: "様々な興味深いパズルを解いて、論理的思考を鍛えよう。単純なパターンから複雑な頭の体操まで。",
            url: "#",
            difficulty: "普通",
            duration: "25分",
            ageRating: "全年齢",
            tags: ["パズル", "論理", "脳", "思考"],
            isNew: true,
            isTop: true,
            popularity: 79
        },
        {
            id: 5,
            title: "スピードレーサー",
            category: "racing",
            icon: "🏎️",
            description: "高速トラックで運転技術を披露しよう。時間と他のプレイヤーとエキサイティングな競争で競う。",
            url: "#",
            difficulty: "普通",
            duration: "20分",
            ageRating: "10+",
            tags: ["レース", "車", "スピード", "競争"],
            isNew: false,
            isTop: true,
            popularity: 85
        },
        {
            id: 6,
            title: "フットボールプロ",
            category: "sports",
            icon: "⚽",
            description: "リアルなサッカーマッチを体験し、フィールドのスターになろう。チームをコントロールし、チャンピオンシップを勝ち取ろう。",
            url: "#",
            difficulty: "普通",
            duration: "35分",
            ageRating: "全年齢",
            tags: ["サッカー", "スポーツ", "チーム", "チャンピオンシップ"],
            isNew: false,
            isTop: true,
            popularity: 77
        },
        {
            id: 7,
            title: "バブルポップ",
            category: "casual",
            icon: "🫧",
            description: "全年齢向けのリラックスできる楽しいバブル消去ゲーム。色をマッチして素晴らしいコンボを作ろう。",
            url: "#",
            difficulty: "簡単",
            duration: "15分",
            ageRating: "全年齢",
            tags: ["バブル", "カジュアル", "リラックス", "マッチ"],
            isNew: false,
            isTop: true,
            popularity: 73
        },
        {
            id: 8,
            title: "ニンジャウォリアー",
            category: "action",
            icon: "🥷",
            description: "忍者戦士となり、危険な世界で生き残ろう。ステルスと戦闘スキルを使って挑戦を克服。",
            url: "#",
            difficulty: "難しい",
            duration: "40分",
            ageRating: "13+",
            tags: ["忍者", "ステルス", "戦闘", "戦士"],
            isNew: true,
            isTop: true,
            popularity: 91
        },
        {
            id: 9,
            title: "マジックキャッスル",
            category: "adventure",
            icon: "🏰",
            description: "秘密と宝物に満ちた魔法の城を探索しよう。パズルを解き、魔法の生物を倒そう。",
            url: "#",
            difficulty: "普通",
            duration: "50分",
            ageRating: "8+",
            tags: ["魔法", "城", "宝物", "ファンタジー"],
            isNew: true,
            isTop: false,
            popularity: 68
        },
        {
            id: 10,
            title: "シティビルダー",
            category: "strategy",
            icon: "🏗️",
            description: "あなた自身の都市を建設し管理しよう。インフラを計画し、資源を管理し、市民を幸せに保とう。",
            url: "#",
            difficulty: "難しい",
            duration: "90分",
            ageRating: "10+",
            tags: ["建設", "管理", "都市", "戦略"],
            isNew: true,
            isTop: true,
            popularity: 86
        }
    ]
};

let currentLanguage = 'en';
let currentCategory = 'all';
let filteredGames = gamesData[currentLanguage];

// 语言切换功能
function switchLanguage(lang) {
    currentLanguage = lang;
    filteredGames = gamesData[lang];
    
    // 更新页面文本
    updatePageText();
    
    // 重新渲染游戏
    if (currentCategory === 'all') {
        filteredGames = gamesData[lang];
    } else {
        filteredGames = gamesData[lang].filter(game => game.category === currentCategory);
    }
    renderGames();
    
    // 更新语言按钮
    updateLanguageButton(lang);
    
    // 更新HTML lang属性
    document.documentElement.lang = lang;
    
    // 保存语言设置
    localStorage.setItem('gamewebLanguage', lang);
}

function updatePageText() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    // 更新placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

function updateLanguageButton(lang) {
    const flags = { en: '🇺🇸', zh: '🇨🇳', ja: '🇯🇵' };
    const codes = { en: 'EN', zh: '中', ja: '日' };
    
    document.getElementById('currentLangFlag').textContent = flags[lang];
    document.getElementById('currentLangText').textContent = codes[lang];
    
    // 更新下拉菜单选中状态
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
}

// 渲染游戏网格
function renderGames(gamesToRender = filteredGames) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => openGame(game);
        
        gameCard.innerHTML = `
            <div class="game-thumbnail">
                ${game.icon}
            </div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-category">${getCategoryName(game.category)}</div>
                <div class="game-description">${game.description}</div>
            </div>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// 获取分类中文名称
function getCategoryName(category) {
    return translations[currentLanguage].category_names[category] || category;
}

// 过滤游戏
function filterGames(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredGames = gamesData[currentLanguage];
    } else if (category === 'new') {
        // 过滤最新游戏
        filteredGames = gamesData[currentLanguage].filter(game => game.isNew);
    } else if (category === 'top') {
        // 过滤TOP10游戏
        filteredGames = gamesData[currentLanguage]
            .filter(game => game.isTop)
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
            .slice(0, 10);
    } else {
        filteredGames = gamesData[currentLanguage].filter(game => game.category === category);
    }
    
    renderGames();
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });
    
    // 更新分类卡片高亮状态
    updateCategoryHighlight(category);
}

// 更新分类卡片高亮状态
function updateCategoryHighlight(category) {
    // 移除所有分类卡片的高亮状态
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.border = '';
        card.style.transform = '';
        card.style.boxShadow = '';
    });
    
    // 高亮当前选中的分类
    let targetCard = null;
    if (category === 'new') {
        targetCard = document.querySelector('.special-category-new');
    } else if (category === 'top') {
        targetCard = document.querySelector('.special-category-top');
    } else if (category === 'action') {
        targetCard = document.getElementById('action-games');
    } else if (category === 'puzzle') {
        targetCard = document.getElementById('puzzle-games');
    } else if (category === 'strategy') {
        targetCard = document.getElementById('strategy-games');
    } else if (category === 'adventure') {
        targetCard = document.getElementById('adventure-games');
    }
    
    if (targetCard) {
        targetCard.style.border = '3px solid #667eea';
        targetCard.style.transform = 'translateY(-8px)';
        targetCard.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.3)';
    }
}

// 搜索游戏
function searchGames(query) {
    const searchResults = filteredGames.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase())
    );
    renderGames(searchResults);
}

// 打开游戏
function openGame(game) {
    if (game.url === '#') {
        alert(translations[getCurrentLanguage()].coming_soon);
        return;
    }
    
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    const modalTitle = document.getElementById('modalGameTitle');
    
    // 设置游戏基本信息
    modalTitle.textContent = game.title;
    gameFrame.src = game.url;
    
    // 设置游戏详情
    setGameDetails(game);
    
    // 生成推荐游戏
    generateRecommendations(game);
    
    modal.style.display = 'block';
}

// 设置游戏详情信息
function setGameDetails(game) {
    const currentLang = getCurrentLanguage();
    
    // 设置游戏信息
    const categoryElement = document.getElementById('modalGameCategory');
    const descriptionElement = document.getElementById('modalGameDescription');
    const typeElement = document.getElementById('modalGameType');
    const difficultyElement = document.getElementById('modalGameDifficulty');
    const durationElement = document.getElementById('modalGameDuration');
    const ageElement = document.getElementById('modalGameAge');
    
    if (categoryElement) categoryElement.textContent = getCategoryName(game.category);
    if (descriptionElement) descriptionElement.textContent = game.description;
    if (typeElement) typeElement.textContent = getCategoryName(game.category);
    if (difficultyElement) difficultyElement.textContent = game.difficulty || '中等';
    if (durationElement) durationElement.textContent = game.duration || '30分钟';
    if (ageElement) ageElement.textContent = game.ageRating || '全年龄';
    
    // 设置游戏标签
    const tagsContainer = document.getElementById('modalGameTags');
    if (tagsContainer && game.tags && game.tags.length > 0) {
        tagsContainer.innerHTML = game.tags.map(tag => 
            `<span class="game-tag">${tag}</span>`
        ).join('');
    } else if (tagsContainer) {
        tagsContainer.innerHTML = '';
    }
}

// 生成推荐游戏
function generateRecommendations(currentGame) {
    const currentLang = getCurrentLanguage();
    const games = gamesData[currentLang];
    
    // 获取同类型游戏作为推荐
    const recommendations = games
        .filter(game => 
            game.id !== currentGame.id && 
            game.category === currentGame.category
        )
        .slice(0, 4);
    
    // 如果同类型游戏不足4个，添加其他热门游戏
    if (recommendations.length < 4) {
        const additionalGames = games
            .filter(game => 
                game.id !== currentGame.id && 
                game.category !== currentGame.category &&
                game.isTop
            )
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
            .slice(0, 4 - recommendations.length);
        
        recommendations.push(...additionalGames);
    }
    
    const recommendationsContainer = document.getElementById('recommendedGames');
    if (recommendationsContainer) {
        recommendationsContainer.innerHTML = recommendations.map(game => `
            <div class="recommended-game-item" onclick="openGame(${JSON.stringify(game).replace(/"/g, '&quot;')})">
                <div class="recommended-game-icon">${game.icon}</div>
                <div class="recommended-game-info">
                    <div class="recommended-game-title">${game.title}</div>
                    <div class="recommended-game-category">${getCategoryName(game.category)}</div>
                </div>
            </div>
        `).join('');
    }
}

// 关闭游戏模态框
function closeGameModal() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    
    modal.style.display = 'none';
    gameFrame.src = '';
    
    // 清理详情信息
    const tagsElement = document.getElementById('modalGameTags');
    const recommendationsElement = document.getElementById('recommendedGames');
    
    if (tagsElement) tagsElement.innerHTML = '';
    if (recommendationsElement) recommendationsElement.innerHTML = '';
}

// 后台管理系统
let isAdminLoggedIn = false;
let currentEditingGameId = null;
let adminGamesData = null;

// 初始化管理员数据
function initAdminData() {
    // 如果localStorage中没有游戏数据，使用默认数据
    const storedGames = localStorage.getItem('adminGamesData');
    if (!storedGames) {
        adminGamesData = JSON.parse(JSON.stringify(gamesData)); // 深拷贝
        localStorage.setItem('adminGamesData', JSON.stringify(adminGamesData));
    } else {
        adminGamesData = JSON.parse(storedGames);
        // 更新前端显示的游戏数据
        Object.assign(gamesData, adminGamesData);
        filteredGames = gamesData[currentLanguage];
        renderGames();
    }
}

// 显示管理面板
function showAdminPanel() {
    document.getElementById('adminPanel').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 隐藏管理面板
function hideAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 管理员登录
function adminLogin() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'admin123') {
        isAdminLoggedIn = true;
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
        initAdminData();
        showAdminTab('games');
        document.getElementById('adminPassword').value = '';
    } else {
        alert('密码错误！');
    }
}

// 管理员登出
function adminLogout() {
    isAdminLoggedIn = false;
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminDashboard').style.display = 'none';
    hideAdminPanel();
}

// 显示管理标签
function showAdminTab(tabName) {
    // 隐藏所有内容
    document.querySelectorAll('.admin-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // 移除所有活动标签
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的内容和标签
    document.getElementById('admin' + tabName.charAt(0).toUpperCase() + tabName.slice(1)).style.display = 'block';
    event.target.classList.add('active');
    
    // 根据标签加载相应内容
    switch(tabName) {
        case 'games':
            loadGamesList();
            break;
        case 'stats':
            loadStatistics();
            break;
        case 'data':
            loadStorageInfo();
            break;
    }
}

// 加载游戏列表
function loadGamesList() {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = '';
    
    const currentLangGames = adminGamesData[currentLanguage] || [];
    const filterCategory = document.getElementById('filterCategory').value;
    
    const filteredGames = filterCategory === 'all' 
        ? currentLangGames 
        : currentLangGames.filter(game => game.category === filterCategory);
    
    filteredGames.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'admin-game-item';
        gameItem.innerHTML = `
            <div class="game-item-info">
                <div class="game-item-title">${game.icon} ${game.title}</div>
                <div class="game-item-meta">分类：${game.category} | 链接：${game.url}</div>
            </div>
            <div class="game-item-actions">
                <button onclick="editGame(${game.id})" class="admin-btn admin-btn-secondary">编辑</button>
                <button onclick="deleteGame(${game.id})" class="admin-btn admin-btn-danger">删除</button>
            </div>
        `;
        gamesList.appendChild(gameItem);
    });
}

// 过滤管理游戏
function filterAdminGames() {
    loadGamesList();
}

// 显示添加游戏表单
function showAddGameForm() {
    currentEditingGameId = null;
    document.getElementById('formTitle').textContent = '添加新游戏';
    clearGameForm();
    document.getElementById('gameForm').style.display = 'block';
}

// 编辑游戏
function editGame(gameId) {
    currentEditingGameId = gameId;
    document.getElementById('formTitle').textContent = '编辑游戏';
    
    // 查找游戏数据
    const gameEn = adminGamesData.en.find(g => g.id === gameId);
    const gameZh = adminGamesData.zh.find(g => g.id === gameId);
    const gameJa = adminGamesData.ja.find(g => g.id === gameId);
    
    if (gameEn) {
        document.getElementById('gameTitle_en').value = gameEn.title;
        document.getElementById('gameTitle_zh').value = gameZh ? gameZh.title : '';
        document.getElementById('gameTitle_ja').value = gameJa ? gameJa.title : '';
        document.getElementById('gameCategory').value = gameEn.category;
        document.getElementById('gameIcon').value = gameEn.icon;
        document.getElementById('gameUrl').value = gameEn.url;
        document.getElementById('gameDesc_en').value = gameEn.description;
        document.getElementById('gameDesc_zh').value = gameZh ? gameZh.description : '';
        document.getElementById('gameDesc_ja').value = gameJa ? gameJa.description : '';
    }
    
    document.getElementById('gameForm').style.display = 'block';
}

// 删除游戏
function deleteGame(gameId) {
    if (confirm('确定要删除这个游戏吗？')) {
        // 从所有语言中删除
        ['en', 'zh', 'ja'].forEach(lang => {
            adminGamesData[lang] = adminGamesData[lang].filter(game => game.id !== gameId);
        });
        
        saveAdminData();
        loadGamesList();
    }
}

// 保存游戏
function saveGame() {
    const gameData = {
        id: currentEditingGameId || Date.now(),
        title: document.getElementById('gameTitle_en').value,
        category: document.getElementById('gameCategory').value,
        icon: document.getElementById('gameIcon').value || '🎮',
        url: document.getElementById('gameUrl').value,
        description: document.getElementById('gameDesc_en').value
    };
    
    // 验证必填字段
    if (!gameData.title || !gameData.url) {
        alert('请填写所有必填字段（标题和链接）');
        return;
    }
    
    // 保存到所有语言
    const languages = [
        { code: 'en', title: 'gameTitle_en', desc: 'gameDesc_en' },
        { code: 'zh', title: 'gameTitle_zh', desc: 'gameDesc_zh' },
        { code: 'ja', title: 'gameTitle_ja', desc: 'gameDesc_ja' }
    ];
    
    languages.forEach(lang => {
        const langGameData = {
            ...gameData,
            title: document.getElementById(lang.title).value || gameData.title,
            description: document.getElementById(lang.desc).value || gameData.description
        };
        
        if (currentEditingGameId) {
            // 编辑现有游戏
            const index = adminGamesData[lang.code].findIndex(g => g.id === currentEditingGameId);
            if (index !== -1) {
                adminGamesData[lang.code][index] = langGameData;
            }
        } else {
            // 添加新游戏
            adminGamesData[lang.code].push(langGameData);
        }
    });
    
    saveAdminData();
    cancelGameForm();
    loadGamesList();
}

// 取消游戏表单
function cancelGameForm() {
    document.getElementById('gameForm').style.display = 'none';
    clearGameForm();
    currentEditingGameId = null;
}

// 清空游戏表单
function clearGameForm() {
    document.getElementById('gameTitle_en').value = '';
    document.getElementById('gameTitle_zh').value = '';
    document.getElementById('gameTitle_ja').value = '';
    document.getElementById('gameCategory').value = 'action';
    document.getElementById('gameIcon').value = '';
    document.getElementById('gameUrl').value = '';
    document.getElementById('gameDesc_en').value = '';
    document.getElementById('gameDesc_zh').value = '';
    document.getElementById('gameDesc_ja').value = '';
}

// 保存管理员数据
function saveAdminData() {
    localStorage.setItem('adminGamesData', JSON.stringify(adminGamesData));
    // 更新前端显示
    Object.assign(gamesData, adminGamesData);
    filteredGames = gamesData[currentLanguage];
    if (currentCategory === 'all') {
        filteredGames = gamesData[currentLanguage];
    } else {
        filteredGames = gamesData[currentLanguage].filter(game => game.category === currentCategory);
    }
    renderGames();
}

// 导出游戏数据
function exportGames() {
    const dataStr = JSON.stringify(adminGamesData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gameweb_games_' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
    URL.revokeObjectURL(url);
}

// 批量导入功能
function importFromJSON() {
    const jsonInput = document.getElementById('jsonInput').value.trim();
    if (!jsonInput) {
        alert('请输入 JSON 数据');
        return;
    }
    
    try {
        const importData = JSON.parse(jsonInput);
        if (!Array.isArray(importData)) {
            alert('JSON 数据应该是游戏数组格式');
            return;
        }
        
        // 验证数据格式
        const requiredFields = ['title_en', 'category', 'url'];
        for (let game of importData) {
            for (let field of requiredFields) {
                if (!game[field]) {
                    alert(`缺少必填字段：${field}`);
                    return;
                }
            }
        }
        
        // 转换并添加游戏
        importData.forEach(gameData => {
            const newId = Date.now() + Math.random();
            
            const languages = [
                { code: 'en', title: 'title_en', desc: 'description_en' },
                { code: 'zh', title: 'title_zh', desc: 'description_zh' },
                { code: 'ja', title: 'title_ja', desc: 'description_ja' }
            ];
            
            languages.forEach(lang => {
                const newGame = {
                    id: newId,
                    title: gameData[lang.title] || gameData.title_en,
                    category: gameData.category,
                    icon: gameData.icon || '🎮',
                    url: gameData.url,
                    description: gameData[lang.desc] || gameData.description_en || ''
                };
                adminGamesData[lang.code].push(newGame);
            });
        });
        
        saveAdminData();
        loadGamesList();
        document.getElementById('jsonInput').value = '';
        alert(`成功导入 ${importData.length} 个游戏！`);
        
    } catch (error) {
        alert('JSON 格式错误：' + error.message);
    }
}

// CSV导入功能
function importFromCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('请选择 CSV 文件');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const csv = e.target.result;
        const lines = csv.split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        // 验证CSV格式
        const requiredHeaders = ['title_en', 'category', 'url'];
        for (let header of requiredHeaders) {
            if (!headers.includes(header)) {
                alert(`缺少必填列：${header}`);
                return;
            }
        }
        
        const importedGames = [];
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            
            const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
            const gameData = {};
            
            headers.forEach((header, index) => {
                gameData[header] = values[index] || '';
            });
            
            if (gameData.title_en && gameData.url) {
                importedGames.push(gameData);
            }
        }
        
        // 添加游戏
        importedGames.forEach(gameData => {
            const newId = Date.now() + Math.random();
            
            const languages = [
                { code: 'en', title: 'title_en', desc: 'description_en' },
                { code: 'zh', title: 'title_zh', desc: 'description_zh' },
                { code: 'ja', title: 'title_ja', desc: 'description_ja' }
            ];
            
            languages.forEach(lang => {
                const newGame = {
                    id: newId,
                    title: gameData[lang.title] || gameData.title_en,
                    category: gameData.category || 'casual',
                    icon: gameData.icon || '🎮',
                    url: gameData.url,
                    description: gameData[lang.desc] || gameData.description_en || ''
                };
                adminGamesData[lang.code].push(newGame);
            });
        });
        
        saveAdminData();
        loadGamesList();
        fileInput.value = '';
        alert(`成功从 CSV 导入 ${importedGames.length} 个游戏！`);
    };
    
    reader.readAsText(file);
}

// 生成模板
function generateTemplate() {
    const template = [
        {
            title_en: "示例游戏",
            title_zh: "示例游戏",
            title_ja: "サンプルゲーム",
            category: "action",
            icon: "🎮",
            url: "https://example.com/game",
            description_en: "这是一个示例游戏描述",
            description_zh: "这是一个示例游戏描述",
            description_ja: "これはサンプルゲームの説明です"
        }
    ];
    
    document.getElementById('jsonInput').value = JSON.stringify(template, null, 2);
}

// 下载CSV模板
function downloadTemplate() {
    const csvContent = 'title_en,title_zh,title_ja,category,icon,url,description_en,description_zh,description_ja\n' +
                      '示例游戏,示例游戏,サンプルゲーム,action,🎮,https://example.com/game,这是一个示例游戏,这是一个示例游戏,これはサンプルゲームです';
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gameweb_template.csv';
    link.click();
    URL.revokeObjectURL(url);
}

// iframe检测功能
function detectIframes() {
    const url = document.getElementById('websiteUrl').value.trim();
    if (!url) {
        alert('请输入网站链接');
        return;
    }
    
    // 由于CORS限制，我们无法直接获取其他网站的内容
    // 这里提供一个模拟的检测结果和使用说明
    const resultsDiv = document.getElementById('iframeResults');
    resultsDiv.innerHTML = `
        <div class="iframe-item">
            <h4>⚠️ CORS 限制说明</h4>
            <p>由于浏览器安全限制（CORS），我们无法直接获取外部网站的内容。</p>
            <p><strong>替代方法：</strong></p>
            <ul>
                <li>1. 复制网站的 HTML 源代码并粘贴到下方文本框中</li>
                <li>2. 使用浏览器开发者工具（F12）检查页面并查找 iframe 元素</li>
                <li>3. 在页面源码中查找 &lt;iframe&gt; 标签</li>
            </ul>
            <p><strong>常见的 iframe 格式：</strong></p>
            <code>&lt;iframe src="https://example.com/game"&gt;&lt;/iframe&gt;</code>
        </div>
    `;
}

// 从HTML内容提取iframe
function extractIframes() {
    const htmlContent = document.getElementById('htmlContent').value.trim();
    if (!htmlContent) {
        alert('请粘贴 HTML 内容');
        return;
    }
    
    // 创建临时DOM元素来解析HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    const iframes = tempDiv.querySelectorAll('iframe');
    const resultsDiv = document.getElementById('iframeResults');
    
    if (iframes.length === 0) {
        resultsDiv.innerHTML = '<div class="iframe-item"><p>在提供的 HTML 中未找到 iframe 元素。</p></div>';
        return;
    }
    
    resultsDiv.innerHTML = '<h4>找到的 iframe 元素：</h4>';
    
    iframes.forEach((iframe, index) => {
        const src = iframe.getAttribute('src') || '无 src 属性';
        const width = iframe.getAttribute('width') || '未指定';
        const height = iframe.getAttribute('height') || '未指定';
        
        const iframeItem = document.createElement('div');
        iframeItem.className = 'iframe-item';
        iframeItem.innerHTML = `
            <h5>iframe #${index + 1}</h5>
            <p><strong>源链接：</strong> ${src}</p>
            <p><strong>尺寸：</strong> ${width} x ${height}</p>
            <button onclick="addIframeAsGame('${src}')" class="admin-btn admin-btn-secondary">添加为游戏</button>
        `;
        resultsDiv.appendChild(iframeItem);
    });
}

// 将iframe添加为游戏
function addIframeAsGame(iframeSrc) {
    if (iframeSrc === '无 src 属性' || !iframeSrc.startsWith('http')) {
        alert('无效的 iframe 源链接');
        return;
    }
    
    // 切换到游戏管理标签并填充表单
    showAdminTab('games');
    showAddGameForm();
    
    // 自动填充URL
    document.getElementById('gameUrl').value = iframeSrc;
    
    // 尝试从URL推断游戏名称
    try {
        const url = new URL(iframeSrc);
        const pathParts = url.pathname.split('/').filter(part => part);
        const gameName = pathParts[pathParts.length - 1] || url.hostname;
        document.getElementById('gameTitle_en').value = gameName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    } catch (e) {
        document.getElementById('gameTitle_en').value = '新游戏';
    }
}

// 数据管理功能
function backupData() {
    const backupData = {
        games: adminGamesData,
        settings: {
            language: currentLanguage,
            category: currentCategory
        },
        timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(backupData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gameweb_backup_' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
    URL.revokeObjectURL(url);
}

function restoreData() {
    const fileInput = document.getElementById('restoreFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('请选择备份文件');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backupData = JSON.parse(e.target.result);
            
            if (backupData.games) {
                adminGamesData = backupData.games;
                saveAdminData();
                loadGamesList();
                alert('数据恢复成功！');
            } else {
                alert('无效的备份文件格式');
            }
        } catch (error) {
            alert('读取备份文件错误：' + error.message);
        }
    };
    
    reader.readAsText(file);
}

function resetToDefault() {
    if (confirm('这将重置所有游戏为默认状态。确定继续吗？')) {
        adminGamesData = JSON.parse(JSON.stringify(gamesData));
        saveAdminData();
        loadGamesList();
        alert('成功重置为默认游戏！');
    }
}

function clearAllData() {
    if (confirm('这将删除所有游戏数据。确定继续吗？')) {
        adminGamesData = { en: [], zh: [], ja: [] };
        saveAdminData();
        loadGamesList();
        alert('所有数据已清空！');
    }
}

function loadStorageInfo() {
    const storageInfo = document.getElementById('storageInfo');
    const dataSize = JSON.stringify(adminGamesData).length;
    const totalGames = adminGamesData.en.length;
    
    storageInfo.innerHTML = `
        <p><strong>游戏总数：</strong> ${totalGames}</p>
        <p><strong>数据大小：</strong> ${(dataSize / 1024).toFixed(2)} KB</p>
        <p><strong>存储使用：</strong> ${((dataSize / (5 * 1024 * 1024)) * 100).toFixed(2)}% / 5MB 限制</p>
        <p><strong>最后更新：</strong> ${new Date().toLocaleString()}</p>
    `;
}

// 统计功能
function loadStatistics() {
    const statsContent = document.getElementById('statsContent');
    
    if (!adminGamesData) {
        statsContent.innerHTML = '<p>暂无数据</p>';
        return;
    }
    
    const totalGames = adminGamesData.en.length;
    const categories = {};
    
    adminGamesData.en.forEach(game => {
        categories[game.category] = (categories[game.category] || 0) + 1;
    });
    
    let statsHTML = `
        <div class="stat-card">
            <div class="stat-number">${totalGames}</div>
            <div class="stat-label">游戏总数</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${Object.keys(categories).length}</div>
            <div class="stat-label">游戏分类</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">3</div>
            <div class="stat-label">支持语言</div>
        </div>
    `;
    
    // 添加分类统计
    const categoryNames = {
        action: '动作游戏',
        adventure: '冒险游戏',
        strategy: '策略游戏',
        puzzle: '益智游戏',
        racing: '竞速游戏',
        sports: '体育游戏',
        casual: '休闲游戏'
    };
    
    Object.entries(categories).forEach(([category, count]) => {
        statsHTML += `
            <div class="stat-card">
                <div class="stat-number">${count}</div>
                <div class="stat-label">${categoryNames[category] || category}</div>
            </div>
        `;
    });
    
    statsContent.innerHTML = statsHTML;
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 加载保存的语言设置
    const savedLanguage = localStorage.getItem('gamewebLanguage') || 'en';
    if (savedLanguage !== 'en') {
        switchLanguage(savedLanguage);
    }

    // 渲染初始游戏
    renderGames();

    // 初始化管理员数据
    initAdminData();

    // 语言切换事件
    document.getElementById('languageBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('languageDropdown');
        dropdown.classList.toggle('show');
    });

    // 语言选项点击事件
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            document.getElementById('languageDropdown').classList.remove('show');
        });
    });

    // 点击外部关闭语言下拉菜单
    document.addEventListener('click', function() {
        document.getElementById('languageDropdown').classList.remove('show');
    });

    // 导航点击事件
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            filterGames(this.dataset.category);
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        searchGames(this.value);
    });

    // 模态框点击外部关闭
    document.getElementById('gameModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeGameModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGameModal();
        }
    });

    // 支持回车键登录
    document.getElementById('adminPassword').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adminLogin();
        }
    });
});

// 获取当前语言
function getCurrentLanguage() {
    return localStorage.getItem('gamewebLanguage') || 'en';
} 