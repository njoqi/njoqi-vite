<template>
  <article class="full-width">
    <h2 class="article__title">
      Oops! Something's wrong...
    </h2>
    <p class="article__text">
      You reached a page that doesn't seem to exist. Either the address has a typo, or a link is broken.
    </p>
    <p class="article__text">
      How about <router-link to="/">going back to the homepage</router-link>?
    </p>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'NotFound',
    setup() {
      useHead({
        title: "Page not found",
        meta: [
          {
            name: `description`,
            content: "C'est cool",
          }
        ]
      });
    }
  });
</script>

<style lang="scss" scoped>
</style>