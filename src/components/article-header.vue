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

<script setup>
  import { ref } from 'vue';

  const props= defineProps({
      name: String,
      meta: Array
  });
  
  const description = ref(
    props.meta.filter((meta) => meta.name == "description")[0]
  );
</script>