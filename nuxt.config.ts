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
      title: 'André | Plataformas de IA para negócios',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Criamos plataformas de inteligência artificial com a sua marca, pensadas para aproximar negócios de seus clientes e crescer.',
        },
        {
          name: 'keywords',
          content:
            'André, Engenharia Mecatrônica, Data Analytics, plataformas de IA, Apptime',
        },
        { property: 'og:title', content: 'André | Plataformas de IA para negócios' },
        {
          property: 'og:description',
          content:
            'Criamos plataformas de inteligência artificial com a sua marca, pensadas para aproximar negócios de seus clientes e crescer.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'André | Plataformas de IA para negócios' },
        {
          name: 'twitter:description',
          content:
            'Criamos plataformas de inteligência artificial com a sua marca, pensadas para aproximar negócios de seus clientes e crescer.',
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
