<template>
  <!--Fix this whole mess because its to big for my liking, but thats for the future ;) cuz it's working for now-->
  <!--Desktop/Tablet navigation-->

  <header class="bg-neutral-950 p-6">
    <nav class="flex items-center justify-between max-w-7xl mx-auto">
      <a href="#"><img src="../assets/logo.svg" alt="Logo" /></a>
      <div class="hidden md:flex md:gap-6 md:text-xl">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/experiences">Experiences</router-link>
      </div>
      <!--Hamburger to cross menu button for mobile-->
      <button @click="isOpen = !isOpen" class="hamburger-button">
        <span
          class="hamburger-line"
          :class="isOpen ? 'rotate-45' : '-translate-y-2'"
        ></span>
        <span class="hamburger-line" :class="isOpen ? 'opacity-0' : ''"></span>
        <span
          class="hamburger-line"
          :class="isOpen ? '-rotate-45' : 'translate-y-2'"
        ></span>
      </button>
    </nav>
    <!--Fix the smooth transition, just check and you'll see why-->
    <!--Mobile dropdown menu-->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <nav
        class="pt-3 flex flex-col items-end gap-3 text-2xl h-screen md:hidden"
        v-if="isOpen"
      >
        <!--Fix routing same as above, has to happen before starting with the home page-->
        <router-link to="/" @click="isOpen = false">Home</router-link>
        <router-link to="/projects" @click="isOpen = false"
          >Projects</router-link
        >
        <router-link to="/experiences" @click="isOpen = false"
          >Experiences</router-link
        >
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.hamburger-line {
  @apply block absolute h-1 w-8 bg-white transform transition duration-500 ease-in-out;
}

.hamburger-button {
  @apply relative w-8 h-8 flex items-center justify-center gap-5 md:hidden;
}
</style>
