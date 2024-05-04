<script setup>
import { use, registerTheme } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GraphChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';


var contrastColor = '#B9B8CE';
var backgroundColor = '#303030';
var axisCommon = function () {
    return {
        axisLine: {
            lineStyle: {
                color: contrastColor
            }
        },
        splitLine: {
            lineStyle: {
                color: '#484753'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)']
            }
        },
        minorSplitLine: {
            lineStyle: {
                color: '#20203B'
            }
        }
    };
};

var colorPalette = [
    '#4992ff',
    '#7cffb2',
    '#fddd60',
    '#ff6e76',
    '#58d9f9',
    '#05c091',
    '#ff8a45',
    '#8d48e3',
    '#dd79ff'
];
var theme = {
    darkMode: true,

    color: colorPalette,
    backgroundColor: backgroundColor,
    axisPointer: {
        lineStyle: {
            color: '#817f91'
        },
        crossStyle: {
            color: '#817f91'
        },
        label: {
            // TODO Contrast of label backgorundColor
            color: '#fff'
        }
    },
    legend: {
        textStyle: {
            color: contrastColor
        }
    },
    textStyle: {
        color: contrastColor
    },
    title: {
        textStyle: {
            color: '#EEF1FA'
        },
        subtextStyle: {
            color: '#B9B8CE'
        }
    },
    toolbox: {
        iconStyle: {
            borderColor: contrastColor
        }
    },
    dataZoom: {
        borderColor: '#71708A',
        textStyle: {
            color: contrastColor
        },
        brushStyle: {
            color: 'rgba(135,163,206,0.3)'
        },
        handleStyle: {
            color: '#353450',
            borderColor: '#C5CBE3'
        },
        moveHandleStyle: {
            color: '#B0B6C3',
            opacity: 0.3
        },
        fillerColor: 'rgba(135,163,206,0.2)',
        emphasis: {
            handleStyle: {
                borderColor: '#91B7F2',
                color: '#4D587D'
            },
            moveHandleStyle: {
                color: '#636D9A',
                opacity: 0.7
            }
        },
        dataBackground: {
            lineStyle: {
                color: '#71708A',
                width: 1
            },
            areaStyle: {
                color: '#71708A'
            }
        },
        selectedDataBackground: {
            lineStyle: {
                color: '#87A3CE'
            },
            areaStyle: {
                color: '#87A3CE'
            }
        }
    },
    visualMap: {
        textStyle: {
            color: contrastColor
        }
    },
    timeline: {
        lineStyle: {
            color: contrastColor
        },
        label: {
            color: contrastColor
        },
        controlStyle: {
            color: contrastColor,
            borderColor: contrastColor
        }
    },
    calendar: {
        itemStyle: {
            color: backgroundColor
        },
        dayLabel: {
            color: contrastColor
        },
        monthLabel: {
            color: contrastColor
        },
        yearLabel: {
            color: contrastColor
        }
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
        symbol: 'circle'
    },
    graph: {
        color: colorPalette
    },
    gauge: {
        title: {
            color: contrastColor
        }
    },
    candlestick: {
        itemStyle: {
            color: '#FD1050',
            color0: '#0CF49B',
            borderColor: '#FD1050',
            borderColor0: '#0CF49B'
        }
    }
};

theme.categoryAxis.splitLine.show = false;

registerTheme("pitchDark", theme);

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
                edgeSymbol:['none','arrow'],
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
                    edgeLength: 200,
                    repulsion: 300,
                    gravity: 0.02,
                    friction: 0.02
                },
                label: {
                    position: 'top',
                    formatter: '{b} - {c}'
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
                tooltip:{
                    show: false
                }

            }
        ]
    }
}

const option = ref(buildOption())

</script>


<template>
    <v-chart class="chart" :option="option" :theme="color.value === 'dark' ? 'pitchDark' : 'light'" autoresize />
</template>


<style scoped>
.chart {
    height: 70vh;
}
</style>../theme/pitch_dark.js