import { createApp } from 'vue'
import { i18n } from './i18n'
import './style.css'
import './css/card.css'
import './css/navbar.css'
import './css/projects.css'
import './css/searchbar.css'
import App from './App.vue'

createApp(App)
.use(i18n)
.mount('#app');
