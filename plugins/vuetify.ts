// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: '#807b0e',
            secondary: '#d5d5d5',
            "secondary-darken-1":'#303030'
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
