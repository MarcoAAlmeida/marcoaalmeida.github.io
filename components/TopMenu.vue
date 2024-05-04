<script lang="ts" setup>

const navStore = useNavStore()

const {activeTopMenu} = storeToRefs(navStore)

</script>


<template>
    <nav class="z-40 text-black fixed w-full top-0 left-0 m-0 p-0 text-center">
        <el-menu :default-active="activeTopMenu" class="" mode="horizontal" :ellipsis="false">
            <el-menu-item index="0">
                <nuxt-link to="/">
                marcoaalmeida.github.io
                </nuxt-link>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>Docs</template>
                <nuxt-link to="docs">
                    <el-menu-item index="2-1">
                        stack
                    </el-menu-item>
                </nuxt-link>
            </el-sub-menu>
            <div class="flex-grow" />
            <div class="p-4">
                <nuxt-link to="https://github.com/MarcoAAlmeida" target="_blank">
                    <Icon name="mdi:github" class="dark:text-white" size="1.2em"/>
                </nuxt-link>
            </div>
        </el-menu>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
</style>
