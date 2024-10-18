<template>
  <footer class="bg-neutral-950 p-12 mt-auto">
    <div class="max-w-7xl mx-auto flex flex-col items-center">
      <div class="flex justify-evenly w-full text-lg text-neutral-400 lg:text-xl">
        <nav class="flex flex-col gap-3">
          <p class="font-bold pb-3">LINKS:</p>
          <a class="hover:underline" href="https://www.github.com/beaudario" target="_blank"><img class="w-10 inline-block pr-3" src="../assets/github_icon.png" alt="Github Icon">Github</a>
          <a class="hover:underline" href="https://www.linkedin.com/in/dario-douma-185307234" target="_blank"><img class="w-10 inline-block pr-3" src="../assets/linkedin_icon.png" alt="Linkedin Icon">LinkedIn</a>
        </nav>
        <div class="w-1 bg-neutral-900 rounded-full"></div>
        <nav class="flex flex-col gap-3">
          <p class="font-bold pb-3">PAGES:</p>
          <router-link class="hover:underline" to="/">Home</router-link>
          <router-link class="hover:underline" to="/projects">Projects</router-link>
          <router-link class="hover:underline" to="/experiences">Experiences</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
