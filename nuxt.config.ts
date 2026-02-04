// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        'data-theme': 'apptime',
      },
      title: 'André | Links & Projects',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Meus links, projetos e um pouco do que eu ando criando entre engenharia e dados. 🚀',
        },
        {
          name: 'keywords',
          content:
            'André, Engenharia Mecatrônica, Data Analytics, Portfólio, Nuxt.js, Vue.js',
        },
        { property: 'og:title', content: 'André | Links & Projects' },
        {
          property: 'og:description',
          content:
            'Meus links, projetos e um pouco do que eu ando criando entre engenharia e dados. 🚀',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'André | Links & Projects' },
        {
          name: 'twitter:description',
          content:
            'Meus links, projetos e um pouco do que eu ando criando entre engenharia e dados. 🚀',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
        },
        // { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXX', async: true },
        // {
        //   innerHTML: `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag() { dataLayer.push(arguments); }
        //     gtag('js', new Date());
        //     gtag('config', 'G-XXXXXX');
        //   `,
        //   type: 'text/javascript'
        // }
      ],
    },
  },
});
