import { SITE_TITLE, SITE_DESCRIPTION, LOCALE } from './seo';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@nuxtjs/seo', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-link-checker'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    githubApiKey: process.env.NUXT_GITHUB_API_KEY,
    public: {
      githubOrg: process.env.NUXT_GITHUB_ORG,
      githubUser: process.env.NUXT_GITHUB_USERNAME,
    }
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  site: {
    url: 'https://comet.thavarshan.com',
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    defaultLocale: LOCALE,
    trailingSlash: true
  },
  robots: {
    blockNonSeoBots: true
  },
  sitemap: {
    cacheMaxAgeSeconds: 3600,
    urls: [
      {
        loc: '/',
        images: [
          {
            loc: 'https://comet.thavarshan.com/images/screenshot_1.png',
            caption: 'Comet Media Converter',
            geoLocation: 'United Kingdom',
            title: 'Comet Media Converter',
            license: 'https://creativecommons.org/licenses/by/4.0/'
          }
        ]
      }
    ]
  }
});
