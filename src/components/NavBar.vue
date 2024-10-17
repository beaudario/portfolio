<template>
  <nav class="p-6 flex items-center justify-between lg:px-24">
    <a href="#"><img src="../assets/logo.svg" alt="Logo" /></a>
    <div class="hidden lg:flex lg:gap-6 lg:text-xl">
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
  <section v-if="isOpen">
    <nav>
      <a href="#">Home</a>
      <a href="#">About me</a>
      <a href="#">Projects</a>
    </nav>
  </section>
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
