<template>
  <form class="faq-action-bar" @submit.prevent="triggerAddFaqAction">
    <h1>Create new FAQ</h1>

    <BaseField>
      <BaseInput
        placeholder="Question"
        :value="faqToCreate.question"
        @input="setFaqToCreate({ question: $event.target.value })"
      />
    </BaseField>

    <BaseField>
      <BaseTextarea
        v-autoheight
        placeholder="Answer"
        rows="4"
        :value="faqToCreate.answer"
        @input="setFaqToCreate({ answer: $event.target.value })"
      />
    </BaseField>

    <BaseField>
      <BaseSelect
        label="Status"
        :transparent="false"
        :expanded="true"
        :border="true"
        :value="faqToCreate.status"
        required
        @input="setFaqToCreate({ status: $event.target.value })"
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </BaseSelect>
    </BaseField>

    <BaseField>
      <BaseButton
        expanded
        type="primary"
        :disabled="faqCreationPending"
        @click="triggerAddFaqAction"
      >
        Add faq
      </BaseButton>
    </BaseField>
  </form>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import BaseButton from '../components/Core/Button.vue'
import BaseSelect from '../components/Core/Select.vue'
import BaseField from '../components/Core/Field.vue'
import BaseTextarea from '../components/Core/Textarea.vue'
import BaseInput from "../components/Core/Input.vue";

export default {
  components: {BaseInput, BaseTextarea, BaseField, BaseSelect, BaseButton },
  computed: mapState('faqs', ['faqToCreate', 'faqCreationPending']),
  methods: {
    ...mapMutations('faqs', ['setFaqToCreate']),
    ...mapActions('faqs', ['triggerAddFaqAction'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.faq-action-bar {
  .faq-name-input {
    height: 42px;
    padding: 11px 15px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
    width: 100%;
    display: block;
  }

  .create-faq-btn {
    cursor: pointer;
    padding: 11px 20px;
    border: 1px solid;
    display: inline-block;
    border-radius: 5px;
    background: $vue-color;
    color: #fff;
    font-weight: 600;
    width: 100%;
    text-align: center;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: #fff;
      background-color: lighten($vue-color, 5%);
    }
  }
}
</style>
