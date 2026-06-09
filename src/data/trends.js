// 六大趨勢（UNFURL）內容，從 wireframe 搬入。
// articleHref / listHref 先用 placeholder（list／article 頁之後再 port）。
export const trends = [
  {
    id: 'unfiltered',
    image: '/bubbles/bubble-unfiltered.png',
    letter: 'U',
    key: 'Unfiltered',
    zhName: '健康保養',
    en: 'Feel-good Wellness',
    body:
      '美麗從「由外而內」轉向「由內而外」。膠原蛋白飲、玻尿酸飲品、美肌機能食品，成為新世代保養桌上的日常——口服保養與美妝的邊界正在消失。',
    products: [
      { name: '膠原蛋白胜肽飲', desc: '小分子高吸收配方，由內補回流失的彈潤。' },
      { name: '玻尿酸保濕飲', desc: '從體內鎖水，肌膚整天不緊繃。' },
      { name: '美肌機能軟糖', desc: '把保養變成每天一顆的小習慣。' },
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
    en: 'Lifestyle Shift · Climate',
    body:
      '永續不再只是公關話術，而是消費者的主動選擇。她們選擇可補充包裝、關注成分來源的碳足跡——「正確消費」成為一種身份認同。',
    products: [
      { name: '可補充包裝精華', desc: '一次購入瓶身，之後只換內芯。' },
      { name: '零碳足跡保濕霜', desc: '從成分到運輸，全程碳中和。' },
      { name: '海洋友善防曬', desc: '不含珊瑚礁殺手成分的物理配方。' },
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
    en: 'Medical-home Loop',
    body:
      '診間療程與居家保養之間的循環正在形成——做完雷射回家用修復精華，術後護理成為日常保養的延伸。消費者開始自己設計「醫療＋保養」的混合療程。',
    products: [
      { name: '術後修復精華', desc: '雷射、微針後的居家加強護理。' },
      { name: '屏障強化乳液', desc: '重建受損肌膚的保護層。' },
      { name: '醫美級舒緩面膜', desc: '鎮定泛紅、加速修復。' },
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
    en: 'One Bite Luxury',
    body:
      '珍稀成分為頂級美妝的新語言——諾貝爾獎研究成果的成分、瀕危植物萃取、限量海洋原料，正在重新定義「值得」的標準。',
    products: [
      { name: '諾貝爾成分抗老精華', desc: '得獎研究轉化的賦活配方。' },
      { name: '瀕危植萃緊緻霜', desc: '限量稀有植物的奢華護理。' },
      { name: '深海原料修護油', desc: '微量限量的頂級海洋萃取。' },
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
    en: 'Unwind to Win',
    body:
      '睡眠、放鬆、夜間修復成為新的美容核心議題。消費者把保養儀式視為一天中難得的「給自己的時間」——香氛、質地、使用步驟的儀式感成為選品標準。',
    products: [
      { name: '夜間修護精華', desc: '睡眠時段啟動的密集修護。' },
      { name: '枕邊助眠噴霧', desc: '香氣成為入睡的開關。' },
      { name: '居家 SPA 身體乳', desc: '替自己蓋上被善待的觸感。' },
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
    en: 'Next-gen Beauty Concierge',
    body:
      '醫美療程已經成為日常——不再是特殊場合前才做的事，而是和護膚保養一樣被納入固定行程。打肉毒、做光療、微針，成為新的美妝消費決策。',
    products: [
      { name: '居家光療面膜', desc: '把診間的光療帶回家。' },
      { name: '微針導入修護液', desc: '強化療程後的吸收與修復。' },
      { name: '長效抗老安瓶', desc: '對接醫美療程的日常保養。' },
    ],
    articleHref: '#',
    listHref: '#',
  },
];
