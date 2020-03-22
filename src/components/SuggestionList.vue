<template>
  <div>
    <p v-if="suggestions === null" class="infos-label">Loading...</p>
    <p v-if="suggestions && !suggestions.length" class="infos-label">
      You don't have any suggestion yet
    </p>
    <suggestion-item
      v-for="(suggestion, index) in suggestions"
      :key="suggestion.id"
      class="suggestion-row"
      :index="index"
      :disable-actions="!networkOnLine"
      :data="suggestion"
    ></suggestion-item>
  </div>
</template>

<script>
import SuggestionItem from '@/components/SuggestionItem'
import { mapState } from 'vuex'

export default {
  components: { SuggestionItem },
  computed: {
    ...mapState('suggestions', ['suggestions']),
    ...mapState('app', ['networkOnLine'])
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.suggestion-row {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 40px auto;
  justify-content: space-between;
}
</style>
