<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/">
            Projects index
        </router-link>
      </nav>
      <h1>
        Carré Rose
      </h1>
      <p class="text">
        Design for an adult movie label.
      </p>
    </header>
    <p class="text">
      <a href="https://carrerosefilms.com/en/">Carré Rose</a> (Pink Square) is an adult cinema label based in France. It focuses on producing quality content with high standards regarding performers wellbeing, cast and practices diversity, and feminist values.
    </p>
    <p class="text">
      <img
        src="/assets/images/projects/carre-rose.jpg"
        alt="Carré Rose website homepage"
        height="846"
        width="1400">
    </p>
    <p class="text">
      I was tasked with creating a visual identity for the label, and then design its website. The main objective was to convey the high quality feel of the brand while being approachable, avoiding something too clean and restrained. The pink square logo is simple and legible, inspired by a film frame or a clapperboard.
    </p>
    <p class="text">
      <img
        src="/assets/images/projects/carre-rose-2.jpg"
        alt="Carré Rose logo and colour swatch, next to a preview of its mobile website templates"
        height="841"
        width="1400">
    </p>
    <p class="text">
      The website was designed with a mobile-first approach, focusing on legibility and contrast but with hints of playfulness. I was also consulted to create posters for all of the movies.
    </p>
    <p class="text">
      <img
        src="/assets/images/projects/carre-rose-3.jpg"
        alt="Carré Rose posters for two movies, The Ad and Guacamole" 
        height="841"
        width="1400">
    </p>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'CarreRose',
    setup() {
      useHead({
        title: "njoqi · Carré Rose",
        meta: [
          {
            name: "description",
            content: "Design for an adult movie label.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>