<script lang="ts">
import { useMusicStore } from '@/stores/musicStore';
export default defineComponent({
    name: 'Music',
    setup() {
        const musicStore = useMusicStore();
        return {
            musicStore,
        };
    },
    data() {
        return {
            folded: false,
        };
    },
    mounted() {
        this.musicStore.getMusic(1);
        const audio = document.querySelector('audio') as HTMLAudioElement;
        // audio.addEventListener('ended', () => {
        //     this.musicStore.nextSong();
        // });
        console.log(this.musicStore.currentSong);
    },
    methods: {
    },
});
</script>

<template>
    <main>
        <h1>Music</h1>
        <p>Music page</p>
        <div id="musicPlayer">
            <audio controls v-if="musicStore.loaded">
                <source :src="musicStore.currentSong?.audio" type="audio/mpeg">
            </audio>
        </div>
        <div>
            <ul>
                <li v-for="music in musicStore.music" :key="music.id">
                    {{ music.title }}
                </li>
            </ul>
        </div>
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
</style>