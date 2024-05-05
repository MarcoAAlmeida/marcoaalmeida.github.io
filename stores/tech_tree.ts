import { GraphSeriesOption } from "echarts";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useTechTreeStore = defineStore("techTree", () => {
  const contrastColor = "#B9B8CE";
  const backgroundColor = "#303030";

  const layout = ref("circular");
  const edgeLength = ref(200);
  const repulsion = ref(300);
  const gravity = ref(0.02);
  const friction = ref(0.02);
  const filteredGraph = ref({
    nodes: [],
    links: [],
    categories: [],
  });
  const localConfig = ref({
    public: {
      content: {
        wsUrl: "",
      },
    },
  });

  const axisCommon = function () {
    return {
      axisLine: {
        lineStyle: {
          color: contrastColor,
        },
      },
      splitLine: {
        lineStyle: {
          color: "#484753",
        },
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
        },
      },
      minorSplitLine: {
        lineStyle: {
          color: "#20203B",
        },
      },
    };
  };

  const colorPalette = [
    "#4992ff",
    "#7cffb2",
    "#fddd60",
    "#ff6e76",
    "#58d9f9",
    "#05c091",
    "#ff8a45",
    "#8d48e3",
    "#dd79ff",
  ];

  const theme = ref({
    darkMode: true,

    color: colorPalette,
    backgroundColor: backgroundColor,
    axisPointer: {
      lineStyle: {
        color: "#817f91",
      },
      crossStyle: {
        color: "#817f91",
      },
      label: {
        // TODO Contrast of label backgorundColor
        color: "#fff",
      },
    },
    legend: {
      textStyle: {
        color: contrastColor,
      },
    },
    textStyle: {
      color: contrastColor,
    },
    title: {
      textStyle: {
        color: "#EEF1FA",
      },
      subtextStyle: {
        color: "#B9B8CE",
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: contrastColor,
      },
    },
    dataZoom: {
      borderColor: "#71708A",
      textStyle: {
        color: contrastColor,
      },
      brushStyle: {
        color: "rgba(135,163,206,0.3)",
      },
      handleStyle: {
        color: "#353450",
        borderColor: "#C5CBE3",
      },
      moveHandleStyle: {
        color: "#B0B6C3",
        opacity: 0.3,
      },
      fillerColor: "rgba(135,163,206,0.2)",
      emphasis: {
        handleStyle: {
          borderColor: "#91B7F2",
          color: "#4D587D",
        },
        moveHandleStyle: {
          color: "#636D9A",
          opacity: 0.7,
        },
      },
      dataBackground: {
        lineStyle: {
          color: "#71708A",
          width: 1,
        },
        areaStyle: {
          color: "#71708A",
        },
      },
      selectedDataBackground: {
        lineStyle: {
          color: "#87A3CE",
        },
        areaStyle: {
          color: "#87A3CE",
        },
      },
    },
    visualMap: {
      textStyle: {
        color: contrastColor,
      },
    },
    timeline: {
      lineStyle: {
        color: contrastColor,
      },
      label: {
        color: contrastColor,
      },
      controlStyle: {
        color: contrastColor,
        borderColor: contrastColor,
      },
    },
    calendar: {
      itemStyle: {
        color: backgroundColor,
      },
      dayLabel: {
        color: contrastColor,
      },
      monthLabel: {
        color: contrastColor,
      },
      yearLabel: {
        color: contrastColor,
      },
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
      symbol: "circle",
    },
    graph: {
      color: colorPalette,
    },
    gauge: {
      title: {
        color: contrastColor,
      },
    },
    candlestick: {
      itemStyle: {
        color: "#FD1050",
        color0: "#0CF49B",
        borderColor: "#FD1050",
        borderColor0: "#0CF49B",
      },
    },
  });

  const option = computed(() => {
    return {
      title: {
        text: "TechTree",
        subtext: "Default layout",
        top: "bottom",
        left: "right",
      },
      tooltip: {},
      legend: [
        {
          data: filteredGraph.value.categories.map(function (a: any) {
            return a.name;
          }),
        },
      ],
      animationDuration: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "TechTree",
          type: "graph",
          legendHoverLink: false,
          label: {
            position: "top",
            formatter: "{b} - {c}",
          },
          layout: layout.value,
          edgeSymbol: ["none", "arrow"],
          data: filteredGraph.value.nodes.map((item: any) => {
            return {
              ...item,
              symbol: item.symbol.replace(
                "{{baseURL}}",
                localConfig.value.public.content.wsUrl.indexOf("localhost") !== -1
                  ? "http://localhost:3001"
                  : "https://marcoaalmeida.github.io/"
              ),
            };
          }),
          links: filteredGraph.value.links,
          categories: filteredGraph.value.categories,
          roam: true,
          force: {
            edgeLength: edgeLength.value,
            repulsion: repulsion.value,
            gravity: gravity.value,
            friction: friction.value,
          },
          lineStyle: {
            color: "source",
            curveness: 0.2,
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 5,
            },
          },
          draggable: true,
          tooltip: {
            show: false,
          },
          zoom:0.9
        },
      ],
    };
  });

  return {
    theme,
    layout,
    edgeLength,
    repulsion,
    gravity,
    friction,
    filteredGraph,
    localConfig,
    option,
  };
});
