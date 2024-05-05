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

const treeTech = useTechTreeStore()
const { layout } = storeToRefs(treeTech)

const circularLayout = ref(layout.value === 'circular')
watch(circularLayout, (enableCircular) => layout.value = enableCircular ? 'circular' : 'force')

</script>

<template>
  <div class="mt-15 text-center">
    <ClientOnly>
      <TechTree />
    </ClientOnly>
  </div>
</template>

<style></style>
