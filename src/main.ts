import { createApp } from 'vue'
import App from './App.vue'

import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

createApp(App).mount('#app')
