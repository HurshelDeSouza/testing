import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import ChangeIcon from './views/ChangeIcon.vue'
import QRCode from './views/QRCode.vue'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/changeicon',
        component: ChangeIcon
    },
    {
        path:'/qrcode',
        component: QRCode
    }
]
export default createRouter({
    history: createWebHistory(),
    routes
})
