<template>
  <article class="full-width">
    <h2>
      Oops! Something's wrong...
    </h2>
    <p class="text">
      You reached a page that doesn't seem to exist. Either the address has a typo, or a link is broken.
    </p>
    <p class="text">
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
        title: "njoqi · Page not found",
        meta: [
          {
            name: `description`,
            content: "You reached a page that doesn't seem to exist. Either the address has a typo, or a link is broken.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>