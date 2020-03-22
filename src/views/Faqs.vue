<template>
  <div class="page-wrapper">
    <h1 class="faqs-page-title">FAQ's <a class="faq-create" href="#" @click.prevent="$router.push({ name: 'faqs.create' })">Create FAQ</a></h1>
    <faq-list class="faq-list"></faq-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FaqList from '@/components/FaqList'

export default {
  components: { FaqList },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.faqs-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.faq-list {
  margin: 20px 0;
}

.faq-create {
  font-size: 12px;
}
</style>
