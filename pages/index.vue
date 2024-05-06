<script setup>

const { setActiveTopMenu } = useNavStore()
onMounted(() => {
  setActiveTopMenu('1')
})


const activeName = ref('stack')

const value = ref('type SomeType= {}')

</script>

<template>
    <el-tabs v-model="activeName" class="mt-15 mr-2 ml-2 demo-tabs">
      <el-tab-pane label="stack" name="stack">
        <ClientOnly>
          <TechTree />
        </ClientOnly>
      </el-tab-pane>
      <el-tab-pane label="raw" name="raw">
        <MonacoEditor v-model="value" class="min-h-80" lang="typescript" />
      </el-tab-pane>
    </el-tabs>
</template>

<style></style>
