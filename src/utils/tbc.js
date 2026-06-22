// 趨勢列表／文章頁文案統一標記 TBC（待確認）：這些頁面內容皆為 placeholder，非定稿。
// 首頁文案已定，不套此標記（且 trends.js 為首頁共用資料，故 TBC 只加在非首頁渲染層）。
export const tbc = (s) => (s == null || s === '' ? s : `【TBC】${s}`);
