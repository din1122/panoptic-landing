export { default as Chart } from '../..\\components\\Chart.vue'
export { default as DataComp } from '../..\\components\\dataComp.vue'
export { default as Dots } from '../..\\components\\dots.vue'
export { default as Earnings } from '../..\\components\\earnings.vue'
export { default as Freehand } from '../..\\components\\Freehand.vue'
export { default as Hero } from '../..\\components\\hero.vue'
export { default as Loader2 } from '../..\\components\\loader2.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Scroll } from '../..\\components\\scroll.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
