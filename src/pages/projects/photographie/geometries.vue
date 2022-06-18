<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/projects/photographie">
          ← Photographie index
        </router-link>
      </nav>
      <h1>
        Géométries
      </h1>
      <p class="text">
        {{ description }}
      </p>
    </header>
    <ul class="list">
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/08.jpg" height="1400" width="1400">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/07.jpg" height="1201" width="1600">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/06.jpg" loading="lazy" height="1201" width="1600">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/05.jpg" loading="lazy" height="1600" width="1201">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/04.jpg" loading="lazy" height="920" width="1600">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/03.jpg" loading="lazy" height="920" width="1600">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/02.jpg" loading="lazy" height="920" width="1600">
      </li>
      <li class="image photograph">
        <img src="/assets/images/projects/photographie/geometries/01.jpg" loading="lazy" height="840" width="1600">
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Géometries',
    setup() {
      const description = ref("Masses, shapes and patterns of fabricated landscapes.");

      useHead({
        title: "njoqi · Géometries",
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