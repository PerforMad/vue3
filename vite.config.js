import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Inspect from 'vite-plugin-inspect'
import { visualizer } from "rollup-plugin-visualizer";
import removeConsole from "vite-plugin-remove-console";
import * as fs from 'node:fs'
import * as dotenv from 'dotenv'
import path from 'path'

// eslint-disable-next-line no-undef
const lifecycle = process.env.npm_lifecycle_event;

console.log("npm_lifecycle_event:",lifecycle)
// eslint-disable-next-line no-undef
console.log("NODE_ENV:",process.env.NODE_ENV)
// eslint-disable-next-line no-undef
// console.log("VITE_BASE_PATH:",process.env)

console.log("import.meta.url:",import.meta.url)

// const rootDir = process.cwd()
// console.log("rootDir:",rootDir)

const myRootDir = fileURLToPath(new URL('./', import.meta.url))
console.log("myRootDir:",myRootDir)

// https://vitejs.dev/config/
export default defineConfig(()=>{
  //判断是否有定义环境变量 NODE_ENV ，没有的话 NODE_ENV = development 表示开发环境
  // eslint-disable-next-line no-undef
  const NODE_ENV = process.env.NODE_ENV || 'development'
  const envFiles = [
    `.env.${NODE_ENV}` //.env_development
  ]
  for (const file of envFiles) {
    const envConfig = dotenv.parse(fs.readFileSync(file))
    for (const k in envConfig) {
      // eslint-disable-next-line no-undef
      process.env[k] = envConfig[k]
    }
  }

  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    },
    plugins: [
      removeConsole(),
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(myRootDir, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })],

        dts: path.resolve(myRootDir, 'components.d.ts'),
      }),
      Inspect(),
      // 打包分析
      lifecycle === "report"
        ? visualizer({ open: true, brotliSize: true, filename: "report.html" })
        : null
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
