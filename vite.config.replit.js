/**
 * @fileoverview Vite config for Replit 
 */

import { defineConfig } from 'vite'
import baseConfig from './vite.config.js'


export default defineConfig((env) => {
  
  const config = typeof baseConfig === 'function'
    ? baseConfig(env) 
    : baseConfig     

  return {
    // 繼承原本的設定
    ...config,

    // replit 特有的 server 設定
    server: {
      // 保留原來 server 設定（如果原本有）
      ...(config?.server || {}),

      host: '0.0.0.0',
      port: 5000,
      strictPort: true,
      allowedHosts: [
        '0287d794-6c6f-45fd-99d4-d0d106a417c5-00-2q32gz1lxbgol.pike.replit.dev',
        '*.pike.replit.dev',
      ],
      hmr: {
        ...(config.server?.hmr ?? {}),
        clientPort: 443,
        protocol: 'wss',
      },
    },
  }
})