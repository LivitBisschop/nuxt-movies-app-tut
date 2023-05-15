// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
        apiBaseUrl: process.env.NUXT_API_BASE_URL,
        public: {
            imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL
        }
    }
})
