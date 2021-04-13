<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/projects/photographie">
            Photographie index
        </router-link>
      </nav>
      <h2>
        Animals
      </h2>
      <p class="text">
        Fur, scales or feathers—creatures of lands and seas, whenever I manage to spot and approach them.
      </p>
    </header>
    <ul class="list">
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/24.jpg" height="805" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/23.jpg" height="805" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/22.jpg" loading="lazy" height="1051" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/21.jpg" loading="lazy" height="1051" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/20.jpg" loading="lazy" height="1051" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/19.jpg" loading="lazy" height="805" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/18.jpg" loading="lazy" height="805" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/17.jpg" loading="lazy" height="1400" width="1051">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/16.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/15.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/14.jpg" loading="lazy" height="1400" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/13.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/12.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/11.jpg" loading="lazy" height="1067" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/10.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/09.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/08.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/07.jpg" loading="lazy" height="840" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/06.jpg" loading="lazy" height="1400" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/05.jpg" loading="lazy" height="840" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/04.jpg" loading="lazy" height="840" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/03.jpg" loading="lazy" height="1400" width="1400">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/02.jpg" loading="lazy" height="920" width="1600">
        </p>
      </li>
      <li>
        <p class="image photograph">
          <img src="/assets/images/projects/photographie/animals/01.jpg" loading="lazy" height="840" width="1600">
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Animals',
    setup() {
      useHead({
        title: "njoqi · Animals",
        meta: [
          {
            name: "description",
            content: "Selected photographic works - Fur, scales or feathers—creatures of lands and seas, whenever I manage to spot and approach them.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>