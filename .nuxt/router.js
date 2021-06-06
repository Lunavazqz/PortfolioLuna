import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74ce89ae = () => interopDefault(import('../pages/pag2.vue' /* webpackChunkName: "pages/pag2" */))
const _74b25aac = () => interopDefault(import('../pages/pag3.vue' /* webpackChunkName: "pages/pag3" */))
const _74962baa = () => interopDefault(import('../pages/pag4.vue' /* webpackChunkName: "pages/pag4" */))
const _7479fca8 = () => interopDefault(import('../pages/pag5.vue' /* webpackChunkName: "pages/pag5" */))
const _3b551656 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/pag2",
    component: _74ce89ae,
    name: "pag2"
  }, {
    path: "/pag3",
    component: _74b25aac,
    name: "pag3"
  }, {
    path: "/pag4",
    component: _74962baa,
    name: "pag4"
  }, {
    path: "/pag5",
    component: _7479fca8,
    name: "pag5"
  }, {
    path: "/",
    component: _3b551656,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
