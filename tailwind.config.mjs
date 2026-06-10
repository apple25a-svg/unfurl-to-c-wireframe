/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,vue,svelte}'],
  theme: {
    // 字級 scale：一律 4 的倍數、最小 12px、級數收斂（直接覆寫 fontSize＝全站只能用這幾級）
    fontSize: {
      xs: ['12px', { lineHeight: '1.5' }], // meta / eyebrow / 標籤
      base: ['16px', { lineHeight: '1.9' }], // 內文預設
      lg: ['20px', { lineHeight: '1.6' }], // 大內文 / 小標題
      xl: ['24px', { lineHeight: '1.35' }], // 區塊標題
      '2xl': ['32px', { lineHeight: '1.25' }], // 頁面 / 手機主標
      '3xl': ['48px', { lineHeight: '1.1' }], // 桌機 hero 主標
      'display-1': ['56px', { lineHeight: '1' }], // 襯線裝飾（UNFURL）
      'display-2': ['96px', { lineHeight: '1' }], // 大字母（96＝4×24）
    },
    extend: {
      // 配色：綻放花園（工作中方向，微調＝改這裡即可）
      colors: {
        bg: { DEFAULT: '#FBF6F3', surface: '#F8ECE6', card: '#FFFFFF' },
        ink: { DEFAULT: '#3A2A2E', body: '#624C4E', secondary: '#8A6E6E', tertiary: '#A89598' },
        heading: '#3E312C',
        primary: { DEFAULT: '#C2746B', deep: '#A65A52' },
        accent: '#7E9070',
        line: '#EBDCD6',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '-apple-system', 'BlinkMacSystemFont', '"PingFang TC"', '"Microsoft JhengHei"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Noto Serif TC"', '"Times New Roman"', 'serif'],
      },
      borderRadius: { md: '8px', lg: '12px' },
      maxWidth: { frame: '1200px', readable: '520px' },
    },
  },
  plugins: [],
};
