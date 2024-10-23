<template class="bg-black">
  <div class="flex flex-col">
    <NavBar />
    <div class="py-24 px-12 min-h-screen">
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
