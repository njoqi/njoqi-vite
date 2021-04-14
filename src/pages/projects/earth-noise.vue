<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/">
            Projects index
        </router-link>
      </nav>
      <h1>
        Earth/Noise
      </h1>
      <p class="text">
        <mark>This page is being built.</mark>
      </p>
      <p class="text">
        <abbr title="Climate fiction">Cli-fi</abbr> story about being part of this world.
      </p>
    </header>
    <h2>
      Synopsis
    </h2>
    <p class="text">
      Sometime near the end of the 21st century, young adult Elwan contemplates their future, makes difficult life choices, and uncovers dangerous corporate schemes with the help of a childhood friend, a mischievous grandma and that secretive girl who keeps coming to the family café.
    </p>
    <h2>
      Themes
    </h2>
    <p class="text">
      The story is meant to mix slice of life content with an overarching story questioning themes like water scarcity, climate change and the politics of energy availibility. It also explores possible alternatives to our current ways of life regarding society and technology.
    </p>
    <p class="text">
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

<style lang="scss">
</style>