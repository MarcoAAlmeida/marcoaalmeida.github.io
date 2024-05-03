<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
import StackRibbon from './components/StackRibbon.vue';

const onBack = () => {
  notify('Back')
}
</script>

<template>
  <TopMenu/>
  <NuxtPage />
  <StackRibbon class="mt-18"/>


</template>
