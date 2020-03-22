<template>
  <div class="suggestion-item">
    <h3 class="question">
      <router-link :to="{ name: 'suggestion', params: { id: data.id } }">
        {{ data.question }}
      </router-link>
    </h3>
    <div class="answer">
      {{ data.answer }}
    </div>
    <router-link
      class="suggestion-link"
      :to="{ name: 'suggestion', params: { id: data.id } }"
    >
      View
    </router-link>
    <a class="suggestion-link" href="#" @click.prevent="triggerFaqToCreate">
      Create FAQ
    </a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    data: Object,
    index: Number,
    disableActions: Boolean
  },
  methods: {
    ...mapMutations('faqs', ['setFaqToCreate']),
    triggerFaqToCreate() {
      this.setFaqToCreate(this.data)
      this.data.suggestionId = this.data.id
      this.$router.push({ name: 'faqs.create' })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.suggestion-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .suggestion-link {
    color: $vue-color;
  }

  .delete-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: $danger-color;
    border-color: $danger-color;
  }
}

.question {
  flex: 0 0 200px;
  max-width: 200px;
  padding-right: 20px;
}

.answer {
  flex: 1;
  padding-right: 20px;
}
</style>
