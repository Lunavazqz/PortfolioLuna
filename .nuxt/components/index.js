import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Menu } from '../../components/Menu.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
