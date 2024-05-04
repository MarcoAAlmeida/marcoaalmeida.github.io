<script setup>
const color = useColorMode()
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
})

const { setActiveTopMenu } = useNavStore()
onMounted(() => {
  setActiveTopMenu('1')
})

const config = useRuntimeConfig()
</script>

<template>

  <div class="mt-15 text-center">
    <ClientOnly>
      <TechTree />
      <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"/>
    </ClientOnly>
  </div>

</template>

<style></style>
