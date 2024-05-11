<script setup>
import { use, registerTheme } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GraphChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';
import { storeToRefs } from 'pinia'

use([
    CanvasRenderer,
    GraphChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

const treeTech = useTechTreeStore()

const { theme, filteredGraph, localConfig, option } = storeToRefs(treeTech)
registerTheme("treeTech", theme.value);

const store = useStackStore()
const { graph } = storeToRefs(store)

const color = useColorMode()

const config = useRuntimeConfig()

const handleClick = (params) => {
    if (!params.data.hasOwnProperty('source')){
        navigateTo(params.data.slug)
    }
}

onMounted(() => {
    filteredGraph.value = graph.value
    localConfig.value = config
})

</script>


<template>
    <v-chart class="chart" @dblclick="handleClick" :option="option" :theme="color.value === 'dark' ? 'treeTech' : 'light'" autoresize />
</template>


<style scoped>
.chart {
    height: 70vh;
}
</style>