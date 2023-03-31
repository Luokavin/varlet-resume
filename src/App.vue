<template>
  <div class='h-screen flex justify-center bg-[var(--color-text-disabled)]'>
    <div v-if='true' class='w-[720px] p-[1rem] flex-shrink-0'>
      <SetBaseInformation />
    </div>
    
    <div class='w-[720px] flex flex-col flex-shrink-0'>
      <div class='m-[1rem] mb-0 p-[1rem] flex justify-between bg-white rounded-[.2rem]'>
        <!-- 智能一页 -->
        <var-button type='primary'>智能一页</var-button>
        
        <!-- 智能排序 -->
        <var-button type='primary'>智能排序</var-button>
        
        <!-- 字体 -->
        <var-select class='max-w-[5rem]' v-model='fontFamily.select.value' :hint='false' :line='false'>
          <var-option v-for='(item, index) in fontFamily.options' :key='index' :label='item.label' :value='item.value' />
        </var-select>
        
        <!-- 字体大小 -->
        <var-select class='max-w-[5rem]' v-model='fontSize.select' :hint='false' :line='false'>
          <var-option v-for='(item, index) in fontSize.options' :key='index' :label='item' :value='item' />
        </var-select>
        
        <!-- 行高 -->
        <var-select class='max-w-[5rem]' v-model='lineHeight.select' :hint='false' :line='false'>
          <var-option v-for='(item, index) in lineHeight.options' :key='index' :label='item' :value='item' />
        </var-select>
        
        <!-- 页边距 -->
        <var-select class='max-w-[5rem]' v-model='pagePadding.select' :hint='false' :line='false'>
          <var-option v-for='(item, index) in pagePadding.options' :key='index' :label='item' :value='item' />
        </var-select>
        
        <!-- 主题色 -->
        <var-menu placement='bottom'>
          <var-button class='w-[36px]' :style='{ backgroundColor: themeColor.select }' />
          
          <template #menu>
            <var-button v-for='(item, index) in themeColor.options' :key='index' class='w-[36px] m-[.5rem]' :style='{ backgroundColor: item }' @click='themeColor.change(item)' />
          </template>
        </var-menu>
      </div>
      
      <!-- 简历 -->
      <div class='m-[1rem] flex-1 bg-white rounded-[.2rem]' :style='resumeStyle'>
        <!-- 头部居左 -->
        <div class='flex justify-between'>
          <!-- 基本信息 -->
          <div v-if='!baseInformation.name' class='cursor-pointer'>
            <div class='text-[1.2rem]'>姓名</div>
            <div class='mt-[10px] text-[darkgray]'>请填写你的基本信息</div>
          </div>
          
          <div v-else class='cursor-pointer'>
            <div class='text-[1.2rem]'>{{ baseInformation.name }}</div>
            <div class='mt-[10px] text-[darkgray]'>请填写你的基本信息</div>
          </div>
          
          <!-- 头像 -->
          <img class='w-[80px] h-[96px]' src='https://files.wondercv.com/cvs/default-avatar.png' />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, reactive } from 'vue';
import { useCounterStore } from '@/stores';

import SetBaseInformation from '@/components/SetBaseInformation/index.vue';

const { baseInformation } = useCounterStore();

const fontFamily = reactive({
  select: { label: '黑体', value: 'Heiti SC' },
  options: [{ label: '黑体', value: 'Heiti SC' }]
});

const fontSize = reactive({
  select: '10px',
  options: ['10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px']
});

const lineHeight = reactive({
  select: '1.2',
  options: ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0']
});

const pagePadding = reactive({
  select: '20px',
  options: ['20px', '30px', '40px', '50px']
});

const themeColor = reactive({
  select: 'var(--color-primary)',
  options: [
    'var(--color-primary)',
    'var(--color-danger)',
    'var(--color-success)',
    'var(--color-warning)',
    'var(--color-info)'
  ],
  change(color: string) {
    this.select = color;
  }
});

const resumeStyle = computed(() => ({
  fontFamily: fontFamily.select.value,
  fontSize: fontSize.select,
  lineHeight: lineHeight.select,
  padding: pagePadding.select
}));
</script>