<template class="bg-black">
  <div class="flex flex-col">
    <NavBar />
    <div class="p-6 min-h-screen sm:px-12 lg:py-24">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
