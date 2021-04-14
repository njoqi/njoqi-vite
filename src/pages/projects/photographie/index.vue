<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/">
            Projects index
        </router-link>
      </nav>
      <h1>
        Photographie
      </h1>
      <p class="text">
        Selected photographic works.
      </p>
    </header>
    <section>
      <h3 >
        Themes
      </h3>
      <p class="text">
        Note: the photos are listed in reverse chronological order (most recent first).
      </p>
      <ul class="list">
        <li class="list-item">
          <router-link to="/projects/photographie/humans">Humans</router-link>
        </li>
        <li class="list-item">
          <router-link to="/projects/photographie/animals">Animals</router-link>
        </li>
        <li class="list-item">
          <router-link to="/projects/photographie/geometries">Géométries</router-link>
        </li>
        <li class="list-item">
          <router-link to="/projects/photographie/presences">Présences</router-link>
        </li>
        <li class="list-item">
          <router-link to="/projects/photographie/intervalles">Intervalles</router-link>
        </li>
      </ul>
    </section>
    <section>
      <h3 >
          Some personal favorites
      </h3>
      <ul class="list">
        <li>
          <p class="image photograph">
            <img src="/assets/images/projects/photographie/presences/16.jpg" height="920" width="1600">
          </p>
        </li>
        <li>
          <p class="image photograph">
            <img src="/assets/images/projects/photographie/presences/14.jpg" loading="lazy" height="920" width="1600">
          </p>
        </li>
        <li>
          <p class="image photograph">
            <img src="/assets/images/projects/photographie/presences/08.jpg" loading="lazy" height="920" width="1600">
          </p>
        </li>
        <li>
          <p class="image photograph">
            <img src="/assets/images/projects/photographie/geometries/03.jpg" loading="lazy" height="933" width="1400">
          </p>
        </li>
        <li>
          <p class="image photograph">
            <img src="/assets/images/projects/photographie/humans/04.jpg" loading="lazy" height="1201" width="1600">
          </p>
        </li>
        <li>
          <p class="image photograph">
            <img src="/assets/images/projects/photographie/animals/05.jpg" loading="lazy" height="840" width="1600">
          </p>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Photographie',
    setup() {
      useHead({
        title: "njoqi · Photographie",
        meta: [
          {
            name: "description",
            content: "Selected photographic works.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>