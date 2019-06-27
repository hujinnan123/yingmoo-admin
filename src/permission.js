import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    NProgress.start()
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        }else {
            next()
        }
    }else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: `/login?redirect=${to.path}` })
        }
    }
})
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
