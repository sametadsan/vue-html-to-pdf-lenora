/*import VueHtmlToPdfLenora from './components/VueHtmlToPdfLenora.vue'

// Vue plugin için install metodu
const install = (app) => {
  app.component('VueHtmlToPdfLenora', VueHtmlToPdfLenora)
}

// ESM, CommonJS ve tarayıcı için uyumlu export
export default {
  install,
}

export { VueHtmlToPdfLenora }*/

import { createApp } from 'vue'
import App from './App.vue'
import VueHtmlToPdfLenora from './components/VueHtmlToPdfLenora.vue'

const app = createApp(App)

// Register the component globally if needed
app.component('VueHtmlToPdfLenora', VueHtmlToPdfLenora)

app.mount('#app')
