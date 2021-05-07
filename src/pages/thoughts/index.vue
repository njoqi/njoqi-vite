<template>
  <header class="article-header">
    <h1>
      Thoughts
    </h1>
    <p class="text">
      {{ description }}
    </p>
  </header>

  <p class="text">
    Nothing to see here for now, but keep an eye out!
  </p>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Thoughts',
    setup() {
      const description = ref("Ideas, reflections and opinions.");

      useHead({
        title: "njoqi · Thoughts",
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