<template>
  <div class="faq-item">
    <router-link
      class="faq-link"
      :to="{ name: 'faq', params: { id: data.id } }"
    >
      #{{ index }} {{ data.question }}
    </router-link>
    <div
      v-if="!disableActions"
      class="edit-btn"
      style="margin-left: auto;"
      @click="$router.push({ name: 'faq.edit', params: { id: data.id } })"
    >
      Edit
    </div>
    <div
      v-if="!disableActions"
      class="delete-btn"
      @click="$emit('deleteFaq', data.id)"
    >
      {{ isFaqDeletionPending ? 'delete in progress...' : 'delete' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    isFaqDeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.faq-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .faq-link {
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
</style>
