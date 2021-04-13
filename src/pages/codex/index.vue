<template>
  <header class="full-width article-header">
    <h2>
      Codex
    </h2>
    <p class="text">
      A repository of resources, logs and recommendations. I plan on keeping a printed archive of these at some point in the future, to avoid relying on their online availability.
    </p>
  </header>

  <article class="full-width">
    <h3>
      Knowledge
    </h3>
    <p class="text">
      Links and notes about subjects of interest. Note that these categories can overlap.
    </p>
    <ul class="list">
      <li class="list-item">
        <router-link to="/codex/design">Design</router-link>
      </li>
      <li class="list-item">
        <router-link to="/codex/sustainable-living">Sustainable living</router-link>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h3>
      Personal logs
    </h3>
    <ul class="list">
      <li class="list-item">
        <router-link to="/codex/webcomics">Webcomics</router-link>
      </li>
      <li class="list-item">
        <router-link to="/codex/tea">Tea</router-link>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Codex',
    setup() {
      useHead({
        title: "njoqi · Codex",
        meta: [
          {
            name: "description",
            content: "A repository of resources, logs and recommendations.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>