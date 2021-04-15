<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/projects/photographie">
            Photographie index
        </router-link>
      </nav>
      <h1>
        Intervalles
      </h1>
      <p class="text">
        {{ description }}
      </p>
    </header>
    <ul class="list">
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/intervalles/05.jpg" height="805" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/intervalles/04.jpg" height="1200" width="1200">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/intervalles/03.jpg" loading="lazy" height="805" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/intervalles/02.jpg" loading="lazy" height="1200" width="1200">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/intervalles/01.jpg" loading="lazy" height="805" width="1400">
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Intervalles',
    setup() {
      const description = ref("The richness of night interrupted by insular sources of light.");

      useHead({
        title: "njoqi · Intervalles",
        meta: [
          {
            name: "description",
            content: "Selected photographic works - " + description.value
          }
        ]
      });

      return {
        description
      };
    }
  });
</script>

<style lang="scss">
</style>