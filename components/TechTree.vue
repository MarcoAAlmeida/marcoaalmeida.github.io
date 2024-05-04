<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GraphChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';


import { storeToRefs } from 'pinia'

const store = useStackStore()
const { graph } = storeToRefs(store)

use([
    CanvasRenderer,
    GraphChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

const color = useColorMode()

const config = useRuntimeConfig()

function buildOption() {
    return {
        title: {
            text: 'TechTree',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [
            {
                // selectedMode: 'single',
                data: graph.value.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'TechTree',
                type: 'graph',
                legendHoverLink: false,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                layout: 'force',
                data: graph.value.nodes.map(
                    item => {
                        return {
                            ...item,
                            symbol: item.symbol.replace("{{baseURL}}", config.public.content.wsUrl.indexOf("localhost") !== -1 ? "http://localhost:3001" : "https://marcoaalmeida.github.io/")
                        }
                    }),
                links: graph.value.links,
                categories: graph.value.categories,
                roam: true,
                force: {
                    edgeLength: 150,
                    repulsion: 20,
                    gravity: 0.2
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.2
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 5
                    }
                },
                draggable: true,

            }
        ]
    }
}

const option = ref(buildOption())

</script>


<template>
    <v-chart class="chart" :option="option" :theme="color.value" autoresize />
</template>


<style scoped>
.chart {
    height: 80vh;
}
</style>