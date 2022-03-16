import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import "./mock/index"

const app = createApp(App)

app.use(ElementPlus,{locale})
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app')
