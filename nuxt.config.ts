// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development'
const apiBaseUrl = 'https://movies-proxy.vercel.app'

export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      bodyAttrs: { class: isDev ? 'debug-screens' : '' },
      charset: 'utf-8',
      title: 'Nuxt Movies',
      titleTemplate: title => title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title,
      meta: [
        { name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
        { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:creator', content: '@nuxt_js' },
      ],
      link: [
        {
          rel: 'icon', type: 'image/webp', href: '/favicon.webp',
        },
      ],

    }

  },

  experimental: {
    inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true,
  },

  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    },
  }

})
