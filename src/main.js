import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from "./plugins/axios"

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(http)

app.mount('#app')
