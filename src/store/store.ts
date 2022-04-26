import { defineStore } from 'pinia'

export type RootState = {
    count: number;
}

export const useMainStore = defineStore({
    id: "mainStore",

    state: () => ({
        count: 0,
    } as RootState),

    actions: {
        increment() {
            console.log("increment action");
            this.count++;
        },

        getN() {
            console.log("getN action");
            return this.count;
        }
    }
})