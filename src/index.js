import VueHtmlToPdfLenora from './components/VueHtmlToPdfLenora.vue'

// Vue plugin için install metodu
const install = (app) => {
  app.component('VueHtmlToPdfLenora', VueHtmlToPdfLenora)
}

// ESM, CommonJS ve tarayıcı için uyumlu export
export default {
  install,
}

export { VueHtmlToPdfLenora }
