<template>
  <header class="full-width article-header">
    <nav class="article__text">
      <router-link to="/codex">
        Codex index
      </router-link>
    </nav>
    <h2>
      Design
    </h2>
    <p class="section__text">
      <mark>This page is being built.</mark>
    </p>
    <p class="article__text">
      As ecological disasters are surrounding us and climate crisis keeps getting more serious, I find myself compelled to learn about the ways humanity can lessen its impact on the planet.
    </p>
  </header>

  <article class="full-width">
    <h3>
      Websites
    </h3>
    <ul class="article-list">
      <li class="list-item">
        <a href="https://solar.lowtechmagazine.com">
          LOW←TECH MAGAZINE
        </a>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h3>
      Articles
    </h3>
    <ul class="article-list">
      <li class="list-item">
        <a href="https://frjohnpeck.com/permaculture-and-the-myth-of-overpopulation/">
          Permaculture and the Myth of Overpopulation
        </a>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h3>
      Products
    </h3>
    <ul class="article-list">
      <li class="list-item">
        <a href="https://deciwatt.global/">
          nowlight, a manual light &amp; power source.
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'SustainableLiving',
    setup() {
      useHead({
        title: "njoqi · Sustainable Living",
        meta: [
          {
            name: "description",
            content: "C'est cool",
          }
        ]
      });
    }
  });
</script>

<style lang="scss" scoped>
</style>