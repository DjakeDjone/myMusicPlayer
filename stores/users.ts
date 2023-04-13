import { Pinia } from "pinia";
import { defineStore } from "pinia";


export const useUserstore = defineStore({
    id: "settings",
    state: () => ({
        API_Base: "http://localhost:7770/api",
        username: "",
        id: 0,
        password: "",
        loggedIn: false,
        token: "",
        avatar: "",
        email: "",
    }),
    actions: {
        async register(username: string, password: string) {
            console.log("login");
            const data = await useFetch(this.API_Base + "/users", {
                method: "POST",
                body: {
                    name: username,
                    password: password,
                },
                cache: "no-cache",
            })
            if (data) {
                this.loggedIn = true;
            }
        },
        async session(username: string, password: string) {
            console.log("");
            let data = await useFetch(this.API_Base + "/users", {
                method: "POST",
                body: {
                    name: username,
                    password: password,
                },
                cache: "no-cache",
            })
            console.log(data);
        },
    },
});

function getMessageOfData(data: any) {
    if (data.error) {
        return data.error;
    } else if (data.message) {
        return data.message;
    } else {
        return "Unknown error";
    }
}


