import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Doc from './pages/Doc.vue'
import SwitchDemo from './components/docChildren/SwitchDemo.vue'
import ButtonDemo from "./components/docChildren/ButtonDemo.vue";
import DialogDemo from "./components/docChildren/DialogDemo.vue";
import TabsDemo from "./components/docChildren/TabsDemo.vue";
import DocDemo from "./components/docChildren/DocDemo.vue";

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: "", component: DocDemo },
                { path: 'switch', component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ]
        }
    ]
})
router.afterEach(() => {
    console.log('路由切换了,');
})
