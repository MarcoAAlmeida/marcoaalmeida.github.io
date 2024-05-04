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

  <div class="mt-20 text-center">
    <ClientOnly>
      <TechTree />
      <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"></el-switch>
    </ClientOnly>
    <Icon name="openmoji:construction" size="10em" />
    <p>under construction, sorry for the inconvenience</p>
    {{ config.public.content.wsUrl }}
  </div>

</template>

<style></style>
