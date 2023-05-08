/*
 * @Author: He Peng
 * @Date: 2022-05-12 08:52:52
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 15:43:21
 * @Descripttion:
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const envConfig = loadEnv(mode, './')
  let config = {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: './src/mock/source', // 解析，路径可根据实际变动
        localEnabled: true
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      },
      extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    define: {
      'process.env': envConfig
    },
    server: {
      port: 3000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      // 代理
      proxy: {
        '/api': {
          target: 'https://www.baidu.com',
          changeOrigin: true,
          rewrite: (path) => path.replace('/^/api/', '')
        }
      }
    }
  }

  return defineConfig(config)
}
