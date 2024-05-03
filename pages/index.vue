<script setup>
import StackGallery from '~/components/StackGallery.vue';
import TechTree from '~/components/TechTree.vue';

const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});
</script>

<template>

  <div class="page-index">
    <TechTree />
    <StackGallery />
    <Icon name="openmoji:construction" size="10em" />
    <p>under construction, sorry for the inconvenience</p>
    <ClientOnly>
      <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"></el-switch>
    </ClientOnly>
  </div>

</template>

<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
