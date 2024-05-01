<template>
  <div class="page-index">
    <el-row>
      <el-col :span="2">
        <el-card class="w-full max-w-24 h-full max-h-80 m-2">
          <template #header>
            <span class="text-xs">NUXT</span>
          </template>
          <nuxt-link class="no-underline text-black" to="https://nuxt.com/docs/getting-started/configuration"
            target="_blank">
            <Icon name="logos:nuxt-icon" size="3em" />
          </nuxt-link>
        </el-card>
      </el-col>
      <el-col :span="2">
        <el-card class="w-full max-w-24 h-full max-h-80 m-2">
          <template #header>
            <span class="text-xs">Element+</span>
          </template>
          <nuxt-link class="no-underline text-black" to="https://element-plus.org/en-US/component/overview.html" target="_blank">
            <Icon name="logos:element" size="3em" />
          </nuxt-link>
        </el-card>
      </el-col>
      <el-col :span="2">
        <el-card class="w-full max-w-24 h-full max-h-80 m-2">
          <template #header>
            <span class="text-xs">Iconify</span>
          </template>
          <nuxt-link class="no-underline text-black" to="https://icon-sets.iconify.design/" target="_blank">
            <Icon name="simple-icons:iconify" size="3em" />
          </nuxt-link>
        </el-card>
      </el-col>
      <el-col :span="2">
        <el-card class="w-full max-w-24 h-full max-h-80 m-2">
          <template #header>
            <span class="text-xs">TailwindCSS</span>
          </template>
          <nuxt-link class="no-underline text-black" to="https://tailwindcss.com/docs/flex-basis" target="_blank">
            <Icon name="logos:tailwindcss-icon" size="3em" />
          </nuxt-link>
        </el-card>
      </el-col>
    </el-row>
    <Logos />
    <Examples />
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
    <p>AAA</p>
  </div>
</template>

<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
