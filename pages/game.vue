<script lang="ts">
import { useAntStore } from '~/stores/antStore';
export default defineComponent({
    id: 'game',
    name: 'Game',
    setup() {
        const antStore = useAntStore();
        return {
            antStore,
        };
    },
    data() {
        return {
            folded: false,
        };
    },
    mounted() {
        this.antStore.birthAnt();
    },
    methods: {
        antHike() {
            const ants = document.querySelectorAll('.ant') as NodeListOf<HTMLElement>;
            ants.forEach((ant) => {
                ant.classList.add('hike');
                ant.classList.remove('antNormal');
                ant.style.marginTop = `${Math.floor(Math.random() * 100)- Math.floor(Math.random() * 100)}rem`;
                ant.style.marginLeft = `${Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100)}rem`;
                setTimeout(() => {
                    ant.classList.remove('hike');
                    ant.classList.add('antNormal');
                }, 1000);
            });
        },
    },
})
</script>
<template>
    <main>
        <h1 @click="antHike()">Game</h1>
        <p>Game page</p>
        <div id="feld">
            <div v-for="ant in antStore.ants" :key="ant.id" class="ant antNormal">
                <nuxt-icon name="ant" :id="ant.id"></nuxt-icon>
            </div>
        </div>
        <menu id="">
            <ul>
                <li>
                    <nuxt-icon name="ant" @click="antStore.birthAnt()"></nuxt-icon>
                </li>
                <li>
                    <nuxt-icon name="spider" @click="antStore.killAnt()"></nuxt-icon>
                </li>
                <li>
                    <nuxt-icon name="eagle"></nuxt-icon>
                </li>
                <li>
                    <nuxt-icon name="dragon" @click="antStore.killAnt()"></nuxt-icon>
                </li>
            </ul>
        </menu>
    </main>
</template>

<style scoped>
main {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ant {
    position: absolute;
    transition: all 0.9s ease-in-out;
}
.antNormal {
    margin-left: 0% !important;
    margin-top: 0% !important;
}
#feld {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
    /* background-color: #000; */
}
</style>