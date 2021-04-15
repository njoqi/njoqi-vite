<template>
  <header class="article-header">
    <h1>
      Articles
    </h1>
    <p class="text">
      {{ description }}
    </p>
  </header>

  <article>
    <p class="text">
      Nothing for now... (the first article is being written!)
    </p>
  </article>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Articles',
    setup() {
      const description = ref("Thoughts and explanations.");

      useHead({
        title: "njoqi · Articles",
        meta: [
          {
            name: "description",
            content: description,
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