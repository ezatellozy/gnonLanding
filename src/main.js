import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import store from './store'
import i18n from './i18n'
import '@/style/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import AOS from 'aos'
import 'aos/dist/aos.css'

axios.defaults.baseURL = ``

library.add(fas)
library.add(fab)
library.add(far)

const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(VueTelInput)
app.use(AOS)
app.use(Router)
app.component('vue-select', VueSelect)
app.AOS = new AOS.init({ once: true })
app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

// createApp(App).use(i18n).use(store).mount("#app");
