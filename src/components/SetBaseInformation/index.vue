<template>
  <div class='h-full p-[28px] bg-white'>
    <!-- 姓名 -->
    <Input v-model='baseInformation.name' class='mb-[24px]' label='姓名' placeholder='如: 吴彦祖 Daniel Wu' />
    
    <div class='mb-[24px] flex justify-between'>
      <!-- 电话 -->
      <Input v-model='baseInformation.phone' class='w-[48%]' label='电话' placeholder='如: 155-5555-5555' />
      <!-- 邮箱 -->
      <Input v-model='baseInformation.email' class='w-[48%]' label='邮箱' placeholder='如: daniel@varlet.com' />
    </div>
    
    <!-- 现居城市 -->
    <Input v-model='baseInformation.city' class='mb-[24px]' label='现居城市' placeholder='如: 无锡' />
  </div>
</template>

<script setup lang='ts'>
import { useCounterStore } from '@/stores';

import Input from '../Input/index.vue';

const { baseInformation } = useCounterStore();

console.log(baseInformation);
</script>