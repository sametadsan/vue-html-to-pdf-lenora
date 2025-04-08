<template>
  <vue-html-to-pdf-lenora
    :showDefaultButton="true"
    filename="custom-button-example"
    ref="html2pdf"
  >
    <div class="pdf-content">
      <h1>Custom Button Example</h1>
      <p>This example uses a custom button to generate PDF.</p>
    </div>
    <template #button>
      <button @click="generatePdfExpose" class="generate-pdf-button">
        PDF gen
      </button>
    </template>
  </vue-html-to-pdf-lenora>
</template>

<script setup>
import VueHtmlToPdfLenora from './components/VueHtmlToPdfLenora.vue'
import { ref } from 'vue'
const html2pdf = ref(null)

const generatePdfExpose = async () => {
  await html2pdf.value.generatePdf()
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
