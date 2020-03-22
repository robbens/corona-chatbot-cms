<template>
  <div>
    <p v-if="faqs === null" class="infos-label">Loading...</p>
    <p v-if="faqs && !faqs.length" class="infos-label">
      You don't have any faq yet
    </p>
    <faq-item
      v-for="(faq, index) in faqs"
      :key="faq.id"
      class="faq-row"
      :index="index"
      :is-faq-deletion-pending="isFaqDeletionPending(faq.id)"
      :disable-actions="!networkOnLine"
      :data="faq"
      @deleteFaq="deleteUserFaq"
    ></faq-item>
  </div>
</template>

<script>
import FaqItem from '@/components/FaqItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { FaqItem },
  computed: {
    ...mapGetters('faqs', ['isFaqDeletionPending']),
    ...mapState('faqs', ['faqs']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: mapActions('faqs', ['deleteUserFaq'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.faq-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
