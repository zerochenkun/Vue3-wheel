import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Chenuvi from './components/Chenuvi.vue'
import Chenuvi2 from './components/Chenuvi2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Chenuvi },
        { path: '/xxx', component: Chenuvi2 }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')