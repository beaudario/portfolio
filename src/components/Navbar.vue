<template>
  <!--Fix this whole mess because its to big for my liking, but thats for the future ;) cuz it's working for now-->
  <div class="bg-neutral-950 p-6 md:px-24">
    <nav class="flex items-center justify-between">
      <a href="#"><img src="../assets/logo.svg" alt="Logo" /></a>
      <div class="hidden md:flex md:gap-6 md:text-xl">
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Projects</a>
      </div>
      <button @click="isOpen = !isOpen" class="hamburger-button md:hidden">
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
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <nav
        class="pt-3 flex flex-col items-end gap-3 text-2xl md:hidden"
        v-if="isOpen"
      >
      <!--Fix routing same as above, has to happen before starting with the home page-->
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Projects</a>
        <a href="#">Experiences</a>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
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
  @apply relative w-8 flex items-center justify-center gap-5 lg:hidden;
}
</style>
