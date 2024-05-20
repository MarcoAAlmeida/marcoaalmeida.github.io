<script setup>

const { setActiveTopMenu } = useNavStore()
onMounted(() => {
  setActiveTopMenu('1')
})


const activeName = ref('stack')

const { data: articles } = await useAsyncData("stack", 
  () => queryContent("/stack").where({ _file: { $not: { $contains: 'index' } }} ).find())

const raw = ref(JSON.stringify(articles.value, null, 2))

const relationships = ref(JSON.stringify(
  articles.value
    .map(el => { return {
      id: el.title,
      slug:el._path,
      isUsedBy: el.isUsedBy, 
      isPluginOf: el.isPluginOf, 
      isFrameworkOf: el.isFrameworkOf, 
      isSupersetOf: el.isSupersetOf, 
    }}), null, 2))

</script>

<template>
  <ClientOnly>
    <el-tabs v-model="activeName" class="mt-15 mr-2 ml-2 demo-tabs">
      <el-tab-pane label="stack" name="stack">
        <TechTree />
      </el-tab-pane>
      <el-tab-pane label="raw" name="raw">
        <MonacoEditor v-model="raw" class="min-h-120" lang="json" />
      </el-tab-pane>
      <el-tab-pane label="relationships" name="relationships">
        <MonacoEditor v-model="relationships" class="min-h-120" lang="json" />
      </el-tab-pane>
    </el-tabs>
  </ClientOnly>
</template>

<style></style>
