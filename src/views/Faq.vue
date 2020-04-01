<template>
  <div class="page-wrapper">
    <faq-detail v-if="currentFaq" :faq="currentFaq"></faq-detail>

    <ssml text="Hej jag heter Robin" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FaqDetail from '@/components/FaqDetail'
import Ssml from '@/components/Ssml.vue'

export default {
  components: { Ssml, FaqDetail },
  props: {
    id: String
  },
  computed: {
    ...mapGetters('faqs', ['getFaqById']),
    currentFaq() {
      return this.getFaqById(this.id)
    }
  }
}
</script>
