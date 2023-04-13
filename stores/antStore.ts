import { defineStore } from "pinia";

export type Ant = {
    id: number;
    name: string;
    level: number;
}
export const namen = ["Anton", "Berta", "Cäsar", "Dora", "Emil", "Friedrich", "Gustav", "Hans", "Ida", "Julius", "Karl", "Ludwig", "Marie", "Nikolaus", "Otto", "Paula", "Quirin", "Richard", "Sophie", "Theodor", "Ulrich", "Viktor", "Wilhelm", "Xaver", "Yvonne", "Zacharias"]
export const useAntStore = defineStore({
    id: "ant",
    state: () => ({
        API_Base: "http://localhost:7770/api",
        ants: [] as Ant[],
        loaded: false,
    }),
    actions: {
        randomName() {
            return namen[Math.floor(Math.random() * namen.length)];
        },
        birthAnt() {
            this.ants!.push({
                id: this.ants!.length,
                name: this.randomName(),
                level: 1,
            })
        },
    },
})