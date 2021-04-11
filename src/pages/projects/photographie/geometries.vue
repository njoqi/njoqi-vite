<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="article__text">
        <router-link to="/projects/photographie">
            Photographie index
        </router-link>
      </nav>
      <h2 class="section__title">
        Géométries
      </h2>
      <p class="section__text">
        Masses, shapes and patterns of fabricated landscapes.
      </p>
    </header>
    <ul class="article-list">
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/08.jpg" height="1400" width="1400">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/07.jpg" height="1201" width="1600">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/06.jpg" loading="lazy" height="1201" width="1600">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/05.jpg" loading="lazy" height="1600" width="1201">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/04.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/03.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/02.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="article-photo">
          <img src="/assets/images/projects/photographie/geometries/01.jpg" loading="lazy" height="840" width="1600">
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Géometries',
    setup() {
      useHead({
        title: "njoqi · Géometries",
        meta: [
          {
            name: "description",
            content: "Selected photographic works - Masses, shapes and patterns of fabricated landscapes.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss" scoped>
</style>