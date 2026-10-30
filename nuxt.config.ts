// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@comark/nuxt',
    '@nuxthub/core',
    'nuxt-auth-utils',
    'nuxt-csurf'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // 大模型 API 配置，仅服务端访问
    aiProviders: {
      deepseek: {
        apiKey: '',
        baseUrl: 'https://api.deepseek.com'
      },
      qwen: {
        apiKey: '',
        baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
      },
      kimi: {
        apiKey: '',
        baseUrl: 'https://api.moonshot.cn/v1'
      }
    }
  },

  experimental: {
    viewTransition: true
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  hub: {
    db: 'sqlite',
    blob: true
  },

  vite: {
    optimizeDeps: {
      include: ['striptags']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
