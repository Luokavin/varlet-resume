import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const baseInformation = reactive({
    name: '1',
    phone: '2',
    email: '3',
    city: '4'
  });
  
  return { baseInformation };
});