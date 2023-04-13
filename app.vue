<script lang="ts">

export default defineComponent({
  name: 'App',
  data() {
    return {
      folded: false,
    };
  },
  methods: {
    menuFolder() {
      const nav = document.querySelector('nav') as HTMLElement;
      const page = document.getElementById('page') as HTMLElement;
      this.folded = !this.folded;
      nav.classList.toggle('close');
      nav.classList.toggle('open');
      page.classList.toggle('paddOn');
    },
    closeMenuFolder() {
      const nav = document.querySelector('nav') as HTMLElement;
      const page = document.getElementById('page') as HTMLElement;
      if (this.folded) {
        this.folded = !this.folded;
        nav.classList.toggle('close');
        nav.classList.toggle('open');
        page.classList.toggle('paddOn');
      }
    },
  },
});
</script>

<template>
  <nav class="close">
    <nuxt-icon name="menu" @click="menuFolder()" id="menuIcon"/>
    <ul v-if="folded">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/music">Music</RouterLink>
      </li>
      <li>
        <RouterLink to="/game">Game</RouterLink>
      </li>
    </ul>
  </nav>
  <div id="page" @click="closeMenuFolder()">
    <RouterView />
  </div>
  <footer>
    <p>Footer</p>
  </footer>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
  /* font-size: 1.2rem; */
}

#page {
  padding: 1rem;
  /* padding-left: 4rem; */
  min-height: 100vh;
  background: linear-gradient(45deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 255, 0, 1) 100%);
}
</style>

<style scoped>
.open {
  height: 100%;
}
#menuIcon {
  cursor: pointer;
}
.paddOn {
  padding-left: 6rem !important;
}
.close {
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  box-shadow: none;
  height: 100%;
  font-size: 2rem;
  transform: rotate(90deg);
  /* border-radius: 0 50% 0 0; */
  position: fixed;
  max-height: fit-content;
  overflow: hidden;
  background: #f5f5f500;
  height: 3rem;
  width: 3rem;
}

.close:hover {
  text-shadow: 0 0 0.5rem #fff;
  scale: 1.1;
}

/* nav */
nav {
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #f5f5f52c;
  backdrop-filter: blur(0.1rem);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  height: 100%;
}

nav ul li {
  margin: 1rem 0;
}

nav a {
  text-decoration: none;
  color: #333;
}

.router-link-active {
  text-decoration: underline;
}
</style>