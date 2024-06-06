import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from 'vue-i18n'
//import messages from '@intlify/vite-plugin-vue-i18n/messages'

loadFonts()

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        dashboard: 'Dashboard',
        programming: 'Programming',
        settings: 'Settings',
        setup: 'Setup',
        modules: 'Modules',
        documentation: 'Documentation',
        hello: 'hello-world'
      }
    },
    da: {
      message: {
        dashboard: 'Instrumentbræt',
        programming: 'Programmering',
        settings: 'Indstillinger',
        setup: 'Setup',
        modules: 'Moduler',
        documentation: 'Dokumentation',
        hello: 'hej verden'
      }
    },
    de: {
      message: {
        dashboard: 'Armaturenbrett',
        programming: 'Programmierung',
        hello: 'hallo werd'

      }
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')

