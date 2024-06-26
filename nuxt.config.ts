// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  content: {
    experimental: {
      clientDB: true
    }
  },
  app: {
    // head
    head: {
      title: "Marco Almeida Github Profile",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Marco Almeida Github Profile",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: 'https://fonts.gstatic.com" crossorigin' },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",
        },
      ],
    },
  },
  nitro: {
    preset: 'github_pages',
    prerender: {
      routes: [
        '/sitemap.xml',
        '/stack/vue',
        '/stack/apacheecharts',
        '/stack/content',
        '/stack/element+',
        '/stack/gh-actions',
        '/stack/iconify',
        '/stack/javascript',
        '/stack/nuxt',
        '/stack/pinia',
        '/stack/tailwindcss',
        '/stack/typescript',
      ],
    }
  },
  // css
  css: ["~/assets/scss/index.scss"],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-monaco-editor",
    "@nuxtjs/sitemap"
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: "",
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
  build: {
    transpile: ["echarts", "rxjs"],
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  extends: '@nuxt-themes/typography',
  monacoEditor: {
    // These are default values:
    locale: 'en',
    componentName: {
      codeEditor: 'MonacoEditor',
      diffEditor: 'MonacoDiffEditor'
    }
  },
  site:{
    url:"https://marcoaalmeida.github.io/"
  }

});