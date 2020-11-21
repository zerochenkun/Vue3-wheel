import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Doc from './pages/Doc.vue'
import SwitchDemo from './components/docChildren/SwitchDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc ,children:[
            {path:'switch',component:SwitchDemo}
        ]}
    ]
})
router.afterEach(() => {
    console.log('路由切换了,');
})
