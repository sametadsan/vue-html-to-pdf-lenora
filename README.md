# Vue HTML to PDF Lenora

Vue 3 HTML to PDF converter component with customizable templates.

## Installation

To install the package, use npm:

```bash
npm install vue-html-to-pdf-lenora
```

## Usage

### Global Registration

To use the component globally in your Vue application:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueHtmlToPdfLenora from 'vue-html-to-pdf-lenora'

const app = createApp(App)
app.use(VueHtmlToPdfLenora)
app.mount('#app')
```

### Local Registration

To use the component locally within a single component:

```js
import { VueHtmlToPdfLenora } from 'vue-html-to-pdf-lenora'

export default {
  components: {
    VueHtmlToPdfLenora,
  },
}
```

### Basic Example

```vue
<template>
  <div>
    <vue-html-to-pdf-lenora filename="my-document">
      <div class="pdf-content">
        <h1>Hello World</h1>
        <p>This is a PDF document created with Vue HTML to PDF Lenora</p>
      </div>
    </vue-html-to-pdf-lenora>
  </div>
</template>
```

### Custom Button Example

This example demonstrates how to use a custom button to generate a PDF.

```vue
<template>
  <vue-html-to-pdf-lenora
    :showDefaultButton="false"
    filename="custom-button-example"
    ref="html2pdf"
  >
    <div class="pdf-content">
      <h1>Custom Button Example</h1>
      <p>This example uses a custom button to generate PDF.</p>
    </div>
    <template #button>
      <button @click="generatePdfExpose" class="generate-pdf-button">
        PDF Generator Custtom Button
      </button>
    </template>
  </vue-html-to-pdf-lenora>
</template>

<script setup>
import { VueHtmlToPdfLenora } from 'vue-html-to-pdf-lenora'
import { ref } from 'vue'
const html2pdf = ref(null)

const generatePdfExpose = async () => {
  await html2pdf.value.generatePdf()
}
</script>
```

## Props

| Prop                     | Type     | Default    | Description                                                  |
| ------------------------ | -------- | ---------- | ------------------------------------------------------------ |
| filename                 | String   | "document" | Name of the generated PDF file.                              |
| showLayout               | Boolean  | false      | Shows the PDF content layout.                                |
| floatLayout              | Boolean  | true       | Enables floating layout.                                     |
| enableDownload           | Boolean  | true       | Enables the download of the PDF.                             |
| previewModal             | Boolean  | false      | Shows a preview modal of the PDF instead of downloading.     |
| pdfQuality               | Number   | 2          | Quality of the generated PDF, ranging from 0 to 2.           |
| manualPagination         | Boolean  | false      | Disables automatic pagination, allowing manual page breaks.  |
| paginateElementsByHeight | Number   | 1100       | Height in pixels to paginate elements.                       |
| pdfFormat                | String   | "a4"       | Format of the PDF, such as a4, letter, etc.                  |
| pdfOrientation           | String   | "portrait" | Orientation of the PDF, either portrait or landscape.        |
| pdfContentWidth          | String   | "800px"    | Width of the PDF content.                                    |
| showDefaultButton        | Boolean  | true       | Shows the default PDF generation button.                     |
| onProgress               | Function | () => {}   | Callback function for progress events during PDF generation. |
| startPagination          | Function | () => {}   | Callback function triggered at the start of pagination.      |
| hasPaginated             | Function | () => {}   | Callback function triggered after pagination is complete.    |
| beforeDownload           | Function | () => {}   | Callback function triggered before the PDF is downloaded.    |
| hasDownloaded            | Function | () => {}   | Callback function triggered after the PDF is downloaded.     |
| hasStartedGeneration     | Function | () => {}   | Callback function triggered when PDF generation starts.      |
| hasGenerated             | Function | () => {}   | Callback function triggered when PDF generation is complete. |

## Events

The component emits several events during the PDF generation process:

- `@progress`: Emitted to indicate the progress of the PDF generation.
- `@startPagination`: Emitted when pagination starts.
- `@hasPaginated`: Emitted after pagination is complete.
- `@beforeDownload`: Emitted before the PDF is downloaded.
- `@hasDownloaded`: Emitted after the PDF is downloaded.
- `@hasStartedGeneration`: Emitted when PDF generation starts.
- `@hasGenerated`: Emitted when PDF generation is complete.

## License

MIT
