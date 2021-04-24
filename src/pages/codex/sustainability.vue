<template>
  <header class="full-width article-header">
    <nav class="text">
      <router-link to="/codex">
        Codex index
      </router-link>
    </nav>
    <h1>
      Sustainability
    </h1>
    <p class="text">
      <mark>This page is being built.</mark>
    </p>
    <p class="text">
      As ecological disasters are surrounding us and climate crisis keeps getting more serious, I find myself compelled to learn about the ways we can lessen our impact on the planet.
    </p>
  </header>

  <article class="full-width">
    <h2>
      Websites
    </h2>
    <ul class="list">
      <li class="list-item">
        <a href="https://solar.lowtechmagazine.com">
          LOW←TECH MAGAZINE
        </a>
      </li>
      <li class="list-item">
        <a href="https://www.designlife-cycle.com/">
          Design life-cycle
        </a>
      </li>
      <li class="list-item">
        <a href="https://materiom.org/">
          Materiom
        </a>
      </li>
      <li class="list-item">
        <a href="https://homebrewserver.club/">
          homebrewserver.club
        </a>
      </li>
      <li class="list-item">
        <a href="https://openstructures.family/">
          OpenStructures
        </a>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h2>
      Articles
    </h2>
    <ul class="list">
      <li class="list-item">
        <a href="https://frjohnpeck.com/permaculture-and-the-myth-of-overpopulation/">
          Permaculture and the Myth of Overpopulation
        </a>
      </li>
      <li class="list-item">
        <a href="http://gauthierroussilhe.com/en/posts/une-erreur-de-tech">
          A question of "tech"
        </a>
      </li>
      <li class="list-item">
        <a href="http://gauthierroussilhe.com/en/posts/convert-low-tech">
          Digital guide to low-tech
        </a>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h2>
      Products
    </h2>
    <ul class="list">
      <li class="list-item">
        <a href="https://deciwatt.global/">
          nowlight, a manual light &amp; power source.
        </a>
      </li>
      <li class="list-item">
        <a href="https://www.billyboil.com.au/">
          Billyboil, an insulated slow-cooker making optimal use of initial cooking heat.
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Sustainability',
    setup() {
      useHead({
        title: "njoqi · Sustainability",
        meta: [
          {
            name: "description",
            content: "Some ways we can lessen our impact on the planet.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>