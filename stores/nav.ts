import { acceptHMRUpdate, defineStore } from "pinia";

export const useNavStore = defineStore("nav", () => {

  const activeTopMenu = ref('1')

  const setActiveTopMenu = (index : string) => {
    activeTopMenu.value = index
  }

  return {
    activeTopMenu,
    setActiveTopMenu
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
