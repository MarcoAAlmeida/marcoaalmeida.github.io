import { acceptHMRUpdate, defineStore } from "pinia";

import lesMiserables from './static/les-miserables.json'

export const useStackStore = defineStore("stack", () => {
  type StackItem = {
    name: string,
    link: string,
    icon_name: string,
    tooltip: string,
    type: string
  }

  const graph = ref(lesMiserables)

  const stackItems : Ref<StackItem[]> = ref([
    {
      name:'Vue',
      link:'https://vuejs.org/guide/introduction.html#what-is-vue',
      icon_name:'logos:vue',
      tooltip:'a beloved JS framework - brings reactive to you',
      type:'framework'
    },
    {
      name:'Nuxt',
      link:'https://nuxt.com/docs/getting-started/introduction',
      icon_name:'logos:nuxt-icon',
      tooltip:'practical content management built on top of Vue - inspired by Next.js',
      type:'framework'
    },
    {
      name:'Content',
      link:'https://content.nuxt.com/get-started/configuration',
      icon_name:'skill-icons:nuxtjs-dark',
      tooltip:'mardown-based content for developers - based on Nuxt',
      type:'framework'
    },
    

    {
      name:'Pinia',
      link:'https://pinia.vuejs.org/introduction.html',
      icon_name:'logos:pinia',
      tooltip:'local reactive data store - let your data talk to you',
      type:'plugin'
    },
    {
      name:'ElementUI+',
      link:'https://element-plus.org/en-US/component/overview.html',
      icon_name:'logos:element',
      tooltip:'another UI library - easy to use',
      type:'library'
    },
    {
      name:'Iconify',
      link:'https://icon-sets.iconify.design/',
      icon_name:'line-md:iconify1',
      tooltip:'huge icon library - because good icons show you care',
      type:'resource'
    },
    {
      name:'TailwindCSS',
      link:'https://tailwindcss.com/docs/utility-first',
      icon_name:'logos:tailwindcss-icon',
      tooltip:'utility-first CSS library - a no-brainer (for good or worse)',
      type:'framework'
    },
    {
      name:'ghActions',
      link:'https://github.com/MarcoAAlmeida/marcoaalmeida.github.io/actions/workflows/deploy.yml',
      icon_name:'devicon:githubactions',
      tooltip:'github based workflows - a layman\'s CI/CD platform',
      type:'platform'
    },
    {
      name:'eCharts',
      link:'https://echarts.apache.org/examples/en/index.html',
      icon_name:'simple-icons:apacheecharts',
      tooltip:'Apache echarts - nice and simple, gets the job done',
      type:'library'
    }


    

  ]);

  return {
    graph,
    stackItems,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
