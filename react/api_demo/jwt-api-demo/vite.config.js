import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//服务器端 mock 模拟下
//前端模拟服务器 准备好了插件
//不能等后端接口写好了，再调用接口，要前端先写起来，要先模拟一下
import path from 'path'
import {
  viteMockServe,
} from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    viteMockServe({
      mockPath:'mock',
      enable:true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
