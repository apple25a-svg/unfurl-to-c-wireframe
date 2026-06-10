// 六大趨勢（UNFURL）內容。body 採用報名網站官方說明（woman.tvbs.com.tw/beautyawards/registration）。
// articleHref / listHref 先用 placeholder（list／article 頁之後再 port）。
// 產品 img：白底去背圖，放 public/products/，缺檔自動 fallback 回佔位（見 ProductCard）。
export const trends = [
  {
    id: 'unfiltered',
    image: '/bubbles/bubble-unfiltered.png',
    letter: 'U',
    key: 'Unfiltered',
    zhName: '健康保養',
    vibes: ['由內而外', '口服保養', '機能食品'],
    body:
      '美麗正從由外而內，轉向由內而外。膠原蛋白飲、玻尿酸飲品與機能食品，逐漸成為日常保養的一部分，口服與外用的界線也正在消失。',
    products: [
      { name: '膠原蛋白胜肽飲', desc: '小分子高吸收配方，由內補回流失的彈潤。', img: '/products/unfiltered-1.png' },
      { name: '玻尿酸保濕飲', desc: '從體內鎖水，肌膚整天不緊繃。', img: '/products/unfiltered-2.png' },
      { name: '美肌機能軟糖', desc: '把保養變成每天一顆的小習慣。', img: '/products/unfiltered-3.png' },
    ],
    articleHref: '#',
    listHref: '#',
  },
  {
    id: 'noble',
    image: '/bubbles/bubble-noble.png',
    letter: 'N',
    key: 'Noble',
    zhName: '永續信念',
    vibes: ['可補充', '透明溯源', '正確消費'],
    body:
      '永續不只是理念，而是一種被選擇的生活方式。可補充包裝與透明機制，逐漸成為品牌核心，也讓正確消費轉化為一種身份表達。',
    products: [
      { name: '可補充包裝精華', desc: '一次購入瓶身，之後只換內芯。', img: '/products/noble-1.png' },
      { name: '零碳足跡保濕霜', desc: '從成分到運輸，全程碳中和。', img: '/products/noble-2.png' },
      { name: '海洋友善防曬', desc: '不含珊瑚礁殺手成分的物理配方。', img: '/products/noble-3.png' },
    ],
    articleHref: '#',
    listHref: '#',
  },
  {
    id: 'fortify',
    image: '/bubbles/bubble-fortify.png',
    letter: 'F',
    key: 'Fortify',
    zhName: '防禦修護',
    vibes: ['術後修護', '居家循環', '屏障強化'],
    body:
      '診間療程與居家保養之間，正逐步形成穩定循環。術後保養不僅著重於防禦與修護，更強調延續醫美療程效果，成為當前保養趨勢主流。',
    products: [
      { name: '術後修復精華', desc: '雷射、微針後的居家加強護理。', img: '/products/fortify-1.png' },
      { name: '屏障強化乳液', desc: '重建受損肌膚的保護層。', img: '/products/fortify-2.png' },
      { name: '醫美級舒緩面膜', desc: '鎮定泛紅、加速修復。', img: '/products/fortify-3.png' },
    ],
    articleHref: '#',
    listHref: '#',
  },
  {
    id: 'unique',
    image: '/bubbles/bubble-unique.png',
    letter: 'U',
    key: 'Unique',
    zhName: '頂級珍稀',
    vibes: ['珍稀成分', '有感奢華', '科研萃取'],
    body:
      '從科研成分到稀有植物與海洋原料，珍稀與有感並存，讓「有感的奢華」成為願意投入的價值，也定義了新的奢華態度。',
    products: [
      { name: '諾貝爾成分抗老精華', desc: '得獎研究轉化的賦活配方。', img: '/products/unique-1.png' },
      { name: '瀕危植萃緊緻霜', desc: '限量稀有植物的奢華護理。', img: '/products/unique-2.png' },
      { name: '深海原料修護油', desc: '微量限量的頂級海洋萃取。', img: '/products/unique-3.png' },
    ],
    articleHref: '#',
    listHref: '#',
  },
  {
    id: 'ritual',
    image: '/bubbles/bubble-ritual.png',
    letter: 'R',
    key: 'Ritual',
    zhName: '療癒儀式',
    vibes: ['夜間修復', '助眠放鬆', '儀式感'],
    body:
      '睡眠、放鬆與夜間修復，成為新的美容核心。保養不只是步驟，而是一段留給自己的時間，香氣與質地共同堆疊出日常儀式感。',
    products: [
      { name: '夜間修護精華', desc: '睡眠時段啟動的密集修護。', img: '/products/ritual-1.png' },
      { name: '枕邊助眠噴霧', desc: '香氣成為入睡的開關。', img: '/products/ritual-2.png' },
      { name: '居家 SPA 身體乳', desc: '替自己蓋上被善待的觸感。', img: '/products/ritual-3.png' },
    ],
    articleHref: '#',
    listHref: '#',
  },
  {
    id: 'longevity',
    image: '/bubbles/bubble-longevity.png',
    letter: 'L',
    key: 'Longevity',
    zhName: '醫美共生',
    vibes: ['醫美日常', '療程護理', '日常抗老'],
    body:
      '醫美逐漸日常化，與護膚保養並行存在。療程選擇與診所判斷，也成為新的美麗決策方式，映照出更真實的當代美感。',
    products: [
      { name: '居家光療面膜', desc: '把診間的光療帶回家。', img: '/products/longevity-1.png' },
      { name: '微針導入修護液', desc: '強化療程後的吸收與修復。', img: '/products/longevity-2.png' },
      { name: '長效抗老安瓶', desc: '對接醫美療程的日常保養。', img: '/products/longevity-3.png' },
    ],
    articleHref: '#',
    listHref: '#',
  },
];
