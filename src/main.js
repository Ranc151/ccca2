import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import JsonViewer from 'vue3-json-viewer' // for show json object

const app=createApp(App)
app.use(JsonViewer)
app.mount('#app')
