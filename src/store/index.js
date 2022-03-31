import { defineStore } from "pinia"

export const useCountStore = defineStore("counter", {
  state: () => {
    const user = {
      name: "sa",
    }

    return { count: 0, user }
  },
  actions: {},
})
