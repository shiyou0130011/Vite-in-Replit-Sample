/**
 * @fileoverview Sample Vite config file.
 * 
 * Copied from https://vite.dev/config/#using-environment-variables-in-config
 */
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})