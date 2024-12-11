//响应式设计
//https://tailwindcss.com/docs/responsive-design

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  corePlugins: {
    preflight: true, // false 禁用 Tailwind 的基础样式重置
  },
  content: [
    './index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

