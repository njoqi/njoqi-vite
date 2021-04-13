<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/projects/photographie">
            Photographie index
        </router-link>
      </nav>
      <h2>
        Humans
      </h2>
      <p class="text">
        Faces and bodies, stares, emotions or attitudes.
      </p>
    </header>
    <ul class="list">
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/07.jpg" height="1201" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/06.jpg" height="1400" width="1051">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/05.jpg" loading="lazy" height="1400" width="1051">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/04.jpg" loading="lazy" height="933" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/03.jpg" loading="lazy" height="1600" width="1280">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/02.jpg" loading="lazy" height="1200" width="1200">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/humans/01.jpg" loading="lazy" height="1050" width="1400">
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Humans',
    setup() {
      useHead({
        title: "njoqi · Humans",
        meta: [
          {
            name: "description",
            content: "Selected photographic works - Faces and bodies, stares, emotions or attitudes.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>