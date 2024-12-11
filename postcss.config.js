import process from "eslint-plugin-vue/lib/configs/base.js";

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
  },
}
