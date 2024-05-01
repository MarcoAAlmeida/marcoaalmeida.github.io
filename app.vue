<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'

const onBack = () => {
  notify('Back')
}
</script>

<template>
  <nav class="z-40 bg-green-100 text-black fixed w-full top-0 left-0 m-0 p-0 text-center">
    <p>marcoalmeida.github.io</p>
  </nav>
  <NuxtPage />
</template>
