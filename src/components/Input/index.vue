<template>
  <label>
    <div class='label'>{{ label }}</div>
    <var-input v-model='modelValue' :hint='false' :line='false' :type='type' :placeholder='placeholder' />
  </label>
</template>

<script setup lang='ts'>
import { computed, ComputedRef } from 'vue';
import type { InputType } from '@varlet/ui/types/input';

const props = withDefaults(
  defineProps<{
    label?: string;
    type?: InputType;
    placeholder?: string;
    modelValue?: string;
  }>(),
  {
    label: '',
    type: 'text',
    placeholder: '',
    modelValue: ''
  }
);

const emit = defineEmits(['update:modelValue']);

const label: ComputedRef<string> = computed(() => props.label);
const type: ComputedRef<InputType> = computed(() => props.type);
const placeholder: ComputedRef<string> = computed(() => props.placeholder);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
});
</script>

<style scoped>
label {
  display: block;
  font-weight: lighter;
}

label .label {
  margin-bottom: 16px;
  color: black;
}

label input {
  width: 100%;
  padding: 0 15px;
  outline: none;
  line-height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>