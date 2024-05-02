<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useStackStore()
const { stackItems } = storeToRefs(store)

function mapTypeToStyle(type: string): string {
  return type === 'framework' ? 'success' :
    type === 'library' ? 'info' : type === 'plugin' ? 'warning' : 'primary'
}

</script>

<template>
  <div class="flex justify-center">
    <div v-for="item in stackItems" :key="item.name" class="m-1">
      <el-tooltip class="box-item" effect="dark" placement="bottom-start">
        <template #content>
          <p>{{ `${item.name} : ${item.tooltip}` }}</p>
          <p><nuxt-link class="text-gray-500" :to="item.link" target="_blank"> check it out</nuxt-link></p>
        </template>
        <Icon :name="item.icon_name" size="1em" />
      </el-tooltip>
    </div>
  </div>
</template>

<style></style>
