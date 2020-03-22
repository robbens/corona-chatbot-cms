<template>
  <div class="page-wrapper">
    <suggestion-detail
      v-if="currentSuggestion"
      :suggestion="currentSuggestion"
    ></suggestion-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SuggestionDetail from '@/components/SuggestionDetail'

export default {
  components: { SuggestionDetail },
  props: {
    id: String
  },
  computed: {
    ...mapGetters('suggestions', ['getSuggestionById']),
    currentSuggestion() {
      return this.getSuggestionById(this.id)
    }
  }
}
</script>
