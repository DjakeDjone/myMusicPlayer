import { defineStore } from "pinia";

type Music = {
    id: number;
    title: string;
    artist: string;
    album: string;
    genre: string;
    year: number;
}
type currentSong = {
    id: number;
    title: string;
    artist: string;
    album: string;
    genre: string;
    year: number;
    audio: string;
}
export const useMusicStore = defineStore({
    id: "music",
    state: () => ({
        music: null as Music[] | null,
        loaded: false,
        currentSong: null as currentSong | null,
        API_Base: "http://localhost:7770/api",
    }),
    actions: {
        async musicConverter(audioBase64: any) {
            // creates mp3 file from base64 string
            const blob = await fetch(audioBase64).then(r => r.blob());
            const file = new File([blob], "audio.mp3", { type: "audio/mp3" });
            const audio = URL.createObjectURL(file);
            return audio;
        },
        async getMusic(id: number) {
            const data = await useFetch(this.API_Base + "/music/" + id, {
                method: "GET",
                cache: "no-cache",
            })
            if (data) {
                try {
                    const msg = JSON.parse(data.data.value as string);
                    this.currentSong = msg.music;
                    // console.log(this.currentSong);
                    this.currentSong!.audio = await this.musicConverter(this.currentSong!.audio);
                    this.loaded = true;
                    console.log('success');
                } catch (e) {
                    console.log(e);
                }
            } else {
                console.log("Error");
            }
        },
    },
})