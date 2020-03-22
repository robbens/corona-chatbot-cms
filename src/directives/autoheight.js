import Vue from 'vue'

Vue.directive('autoheight', {
  bind(el, binding) {
    el.autoExpand = function() {
      // Reset field height
      this.style.height = 'inherit'

      // Get the computed styles for the element
      const computed = window.getComputedStyle(this)

      // Set a minimum height equal to its original height
      this.style.minHeight = computed.getPropertyValue('height')

      // Calculate the height
      const height =
        parseInt(computed.getPropertyValue('border-top-width'), 10) +
        this.scrollHeight +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10)

      this.style.height = `${height}px`
      return height
    }
    el.addEventListener('input', el.autoExpand)
    el.unbindAutoHeight = () => {
      el.removeEventListener('input', el.autoExpand)
    }

    let options = {
      init: true
    }

    if (binding.value) {
      options = { ...options, ...binding.value }
    }
    el.autoExpandOptions = options
  },
  update(el) {
    if (el.autoExpandOptions && el.autoExpandOptions.init) {
      el.autoExpand([])
    }
  },
  inserted(el) {
    if (el.autoExpandOptions && el.autoExpandOptions.init) {
      el.autoExpand([])
    }
  },
  unbind(el) {
    if (el.unbindAutoHeight) {
      el.unbindAutoHeight()
    }
  }
})
