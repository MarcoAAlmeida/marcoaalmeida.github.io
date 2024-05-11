<script lang="ts" setup>

const navStore = useNavStore()

const { activeTopMenu } = storeToRefs(navStore)

const dialogFormVisible = ref(false)

const treeTech = useTechTreeStore()
const { layout, edgeLength, gravity, friction, repulsion } = storeToRefs(treeTech)

const circularLayout = ref(layout.value === 'circular')
watch(circularLayout, (enableCircular) => layout.value = enableCircular ? 'circular' : 'force')

const adjustedGravity = ref(gravity.value*100)
watch(adjustedGravity, (newAdjustedGravity) => gravity.value = newAdjustedGravity/100)

const adjustedFriction = ref(friction.value*100)
watch(adjustedFriction, (newAdjustedFriction) => friction.value = newAdjustedFriction/100)

const color = useColorMode()
const colorMode = computed({
    get: () => color.value === 'dark',
    set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
})

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
                <nuxt-link to="/stack">
                    <el-menu-item index="2-1">
                        stack
                    </el-menu-item>
                </nuxt-link>
                <nuxt-link to="/about">
                    <el-menu-item index="2-1">
                        about
                    </el-menu-item>
                </nuxt-link>
            </el-sub-menu>
            <div class="flex-grow" />
            <div class="p-0 mt-4">
                <nuxt-link>
                    <Icon class="dark:text-white m-1" name="mdi:gear" size="1.2em" @click="dialogFormVisible = true" />
                </nuxt-link>
            </div>
            <div class="p-0 mt-4 mr-4">
                <nuxt-link to="https://github.com/MarcoAAlmeida" target="_blank">
                    <Icon name="mdi:github" class="dark:text-white m-1" size="1.2em" />
                </nuxt-link>
            </div>
        </el-menu>
    </nav>

    <el-dialog v-model="dialogFormVisible" title="Tech Tree Settings" width="20em">

        <el-form>
            <el-form-item label="Theme" label-width="140px">
                <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large" />
            </el-form-item>
            <el-form-item label="Layout" label-width="140px">
                <el-switch v-model="circularLayout" inline-prompt active-text="circular" inactive-text="force"
                    size="large" />
            </el-form-item>
            <el-form-item label="Edge Length" label-width="140px">
                <el-slider v-model="edgeLength" :min="100" :max="400" />
            </el-form-item>
            <el-form-item label="Gravity" label-width="140px">
                <el-slider v-model="adjustedGravity" :min="0" :max="100" />
            </el-form-item>
            <el-form-item label="Repulsion" label-width="140px">
                <el-slider v-model="repulsion" :min="50" :max="500" />
            </el-form-item>
            <el-form-item label="Friction" label-width="140px">
                <el-slider v-model="adjustedFriction" :min="0" :max="100" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
</style>
