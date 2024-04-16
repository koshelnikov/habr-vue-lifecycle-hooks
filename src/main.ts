import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.config.errorHandler = (err, instance, info) => {
    console.log(err, info)
}
app.mount('#app')
