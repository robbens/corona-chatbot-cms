<template>
  <div class="faq-detail">
    <h1>{{ faq.question }}</h1>

    <p>{{ faq.answer }}</p>
  </div>
</template>

<script>
export default {
  props: {
    faq: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.faq-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
