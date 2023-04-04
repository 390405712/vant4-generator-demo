import { createPinia } from 'pinia'
import router from './router'
import './styles/index.scss'
import App from './App.vue'
// import './components/lib/index.scss'
import 'vant/lib/index.css';
import '@vant/touch-emulator';
import "vue3-json-viewer/dist/index.css";
import { JsonViewer } from "vue3-json-viewer"

const app = createApp(App)
app.component('JsonViewer', JsonViewer)
app
  .use(createPinia())
  .use(router)
  .mount('#app')
