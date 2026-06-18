// 階段上線開關（feature flags）。
// 要讓某功能上線：把對應值改成 true → commit → 重新部署即生效（靜態站需 rebuild）。
// 之後要加新開關，照下方格式往下加一行即可。

export const features = {
  // 產品露出：首頁趨勢卡的選品橫列＋「看選品」按鈕、盤點頁內穿插的產品卡。
  // Phase 1/1.5 無產品授權 → 先關。拿到品牌名單後改 true。
  showProducts: true,

  // ── 之後階段的開關（先註解佔位，需要時解開並接到對應區塊）──
  // showQuiz: true,     // 心理測驗入口
  // showLottery: true,  // 抽獎活動
  // showVideo: true,    // 趨勢影音
};
