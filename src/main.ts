import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Chenuvi from './components/Chenuvi.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Chenuvi}
    ]
})

const app = createApp(App).mount('#app')
