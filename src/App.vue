<template class="bg-black">
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="p-6">
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
