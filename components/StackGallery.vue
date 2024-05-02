<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useStackStore()
const { stackItems } = storeToRefs(store)

function mapTypeToStyle(type:string) :string{
  return type === 'framework' ? 'success' : 
  type === 'library' ? 'info' :
  type === 'plugin' ? 'warning' :
  type === 'platform' ? 'danger' :'primary'
}

</script>

<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="item in stackItems" :key="item.name" class="m-1">
      <el-card class="text-center w-full max-w-28 max-h-64">
          <el-tooltip class="box-item" effect="dark" placement="bottom-start">
            <template #content>
              {{ item.tooltip }}
            </template>
            <nuxt-link class="no-underline text-black" :to="item.link"
              target="_blank">
              <Icon :name="item.icon_name" size="3em" />
            </nuxt-link>
          </el-tooltip>
          <p class="text-sm">{{ item.name }}</p>
          <el-tag :type="mapTypeToStyle(item.type)">{{item.type}}</el-tag>
        </el-card>
    </div>
  </div> 
</template>

<style>
</style>
