<template>
  <div class="page-wrapper">
    <h1 class="suggestions-page-title">Suggestions</h1>
    <suggestion-list class="suggestion-list"></suggestion-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SuggestionList from '@/components/SuggestionList'

export default {
  components: { SuggestionList },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.suggestions-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.suggestion-list {
  margin: 20px 0;
}
</style>
