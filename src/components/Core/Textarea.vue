<template>
  <textarea
    class="input"
    :class="{
      'is-loading': loading,
      'has-error': hasError,
      'full-width': expanded,
      transparent: $attrs.hasOwnProperty('transparent')
    }"
    :type="$attrs.type || 'text'"
    :value="value"
    v-bind="$attrs"
    rows="1"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'BaseTextarea',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    loading: Boolean,
    expanded: Boolean
  },
  data() {
    return {
      hasError: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          let { value } = event.target

          if (this.$attrs.type === 'number') {
            value = parseInt(value, 10)
          }

          this.$emit('input', value)
        }
      }
    }
  }
}
</script>

<style scoped>
textarea {
  max-width: 100%;
  min-width: 100%;

  border: 1px solid transparent;
  border-radius: 3px;
  color: var(--gray-900);
  box-shadow: none;
  display: inline-flex;
  font-size: 18px;
  font-family: inherit;
  line-height: 1.5;
  padding: 8px 15px;
  position: relative;
}

textarea:placeholder {
  color: var(--gray-600);
}
</style>
