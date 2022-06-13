<template>
    <header class="article-header">
        <h1>
          {{name}}
        </h1>
        <p class="text">
          {{description.content}}
        </p>
    </header>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: "ArticleHeader",
    props: {
      name: String,
      meta: Array
    },
    setup(props) {
      const description = ref(
        props.meta.filter((meta) => meta.name == "description")[0]
      );
      return { description };
    }
  });
</script>