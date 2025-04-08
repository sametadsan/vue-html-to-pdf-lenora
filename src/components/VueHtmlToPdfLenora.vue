<template>
  <vue3-html2pdf
    ref="html2Pdf"
    :show-layout="showLayout"
    :float-layout="floatLayout"
    :enable-download="enableDownload"
    :preview-modal="previewModal"
    :filename="filename"
    :pdf-quality="pdfQuality"
    :manual-pagination="manualPagination"
    :paginate-elements-by-height="paginateElementsByHeight"
    :pdf-format="pdfFormat"
    :pdf-orientation="pdfOrientation"
    :pdf-content-width="pdfContentWidth"
    @progress="onProgress"
    @startPagination="startPagination"
    @hasPaginated="hasPaginated"
    @beforeDownload="beforeDownload"
    @hasDownloaded="hasDownloaded"
    @hasStartedGeneration="hasStartedGeneration"
    @hasGenerated="hasGenerated"
  >
    <template #pdf-content>
      <slot></slot>
    </template>
  </vue3-html2pdf>

  <slot name="button">
    <button
      v-if="showDefaultButton"
      @click="generatePdf"
      class="generate-pdf-button"
    >
      PDF Oluştur
    </button>
  </slot>
</template>

<script setup>
import { ref, defineProps, defineExpose } from 'vue'
import Vue3Html2pdf from 'vue3-html2pdf'
import '../styles/styles.css'

const props = defineProps({
  filename: {
    type: String,
    default: 'document',
  },
  showLayout: {
    type: Boolean,
    default: false,
  },
  floatLayout: {
    type: Boolean,
    default: true,
  },
  enableDownload: {
    type: Boolean,
    default: true,
  },
  previewModal: {
    type: Boolean,
    default: false,
  },
  pdfQuality: {
    type: Number,
    default: 2,
  },
  manualPagination: {
    type: Boolean,
    default: false,
  },
  paginateElementsByHeight: {
    type: Number,
    default: 1100,
  },
  pdfFormat: {
    type: String,
    default: 'a4',
  },
  pdfOrientation: {
    type: String,
    default: 'portrait',
  },
  pdfContentWidth: {
    type: String,
    default: '800px',
  },
  showDefaultButton: {
    type: Boolean,
    default: true,
  },
  onProgress: {
    type: Function,
    default: () => () => {},
  },
  startPagination: {
    type: Function,
    default: () => () => {},
  },
  hasPaginated: {
    type: Function,
    default: () => () => {},
  },
  beforeDownload: {
    type: Function,
    default: () => () => {},
  },
  hasDownloaded: {
    type: Function,
    default: () => () => {},
  },
  hasStartedGeneration: {
    type: Function,
    default: () => () => {},
  },
  hasGenerated: {
    type: Function,
    default: () => () => {},
  },
})

const html2Pdf = ref(null)

const generatePdf = async () => {
  if (html2Pdf.value) {
    await html2Pdf.value.generatePdf()
  }
}
defineExpose({
  generatePdf,
})
</script>
