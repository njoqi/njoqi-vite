<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="article__text">
        <router-link to="/">
            Projects index
        </router-link>
      </nav>
      <h2 class="section__title">
        Earth/Noise
      </h2>
      <p class="section__text">
        <mark>This page is being built.</mark>
      </p>
      <p class="section__text">
        <abbr title="Climate fiction">Cli-fi</abbr> story about being part of this world.
      </p>
    </header>
    <h3 class="section__title">
      Synopsis
    </h3>
    <p class="section__text">
      Sometime near the end of the 21st century, young adult Elwan contemplates their future, makes difficult life choices, and uncovers dangerous corporate schemes with the help of a childhood friend, a mischievous grandma and that secretive girl who keeps coming to the family café.
    </p>
    <h3 class="section__title">
      Themes
    </h3>
    <p class="section__text">
      The story is meant to mix slice of life content with an overarching story questioning themes like water scarcity, climate change and the politics of energy availibility. It also explores possible alternatives to our current ways of life regarding society and technology.
    </p>
    <p class="section__text">
      <img
        src="/assets/images/projects/earth-noise-elwan.jpg"
        alt="Illustration of Elwan, the main character, in a work uniform."
        height="1537"
        width="1400" >
    </p>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'EarthNoise',
    setup() {
      useHead({
        title: "njoqi · Earth/Noise",
        meta: [
          {
            name: "description",
            content: "Cli-fi story about being part of this world.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss" scoped>
</style>