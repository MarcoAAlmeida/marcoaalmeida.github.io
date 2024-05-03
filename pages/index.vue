<script setup>
const { setActiveTopMenu } = useNavStore()
onMounted(() => {
  setActiveTopMenu('1')
})
</script>

<template>

  <div class="mt-20 text-center">
    <ClientOnly>
      <TechTree />
    </ClientOnly>
    <Icon name="openmoji:construction" size="10em" />
    <p>under construction, sorry for the inconvenience</p>
  </div>

</template>

<style></style>
