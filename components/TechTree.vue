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
const {getOption} = useTechTreeStore()

const { theme } = storeToRefs(treeTech)
registerTheme("treeTech", theme.value);

const store = useStackStore()
const { graph } = storeToRefs(store)

const color = useColorMode()

const config = useRuntimeConfig()

const option = computed(() => getOption(graph.value, config))

</script>


<template>
    <v-chart class="chart" :option="option" :theme="color.value === 'dark' ? 'treeTech' : 'light'" autoresize />
</template>


<style scoped>
.chart {
    height: 70vh;
}
</style>