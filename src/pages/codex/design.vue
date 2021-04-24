<template>
  <header class="full-width article-header">
    <nav class="text">
      <router-link to="/codex">
        Codex index
      </router-link>
    </nav>
    <h2>
      Design
    </h2>
    <p class="text">
      <mark>This page is being built.</mark>
    </p>
    <blockquote class="text">
      “One could describe Design as a plan for arranging elements to accomplish a particular purpose.”
      <cite>Charles Eames</cite>
    </blockquote>
  </header>

  <article class="full-width">
    <h3>
      General
    </h3>
    <ul class="list">
      <li class="list-item">
        <a href="http://fadeyev.net/design/">
          Design through the lens of the human condition
        </a>
      </li>
      <li class="list-item">
        <a href="https://flashbak.com/charles-eames-30-answers-to-what-is-design-1969-378352/">
          Charles Eames' 30 answers to what is design - 1969
        </a>
      </li>
      <li class="list-item">
        <a href="https://societycentered.design/">
          Society Centered Design
        </a>
      </li>
      <li class="list-item">
        <a href="https://blog.grio.com/2016/03/5-essential-japanese-design-principles.html">
          5 essential japanese design principles
        </a>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h3>
      Web
    </h3>
    <ul class="list">
      <li class="list-item">
        <a href="https://bighack.org/">
          The Big Hack
        </a>
      </li>
    </ul>
  </article>

  <article class="full-width">
    <h3>
      Inspiration sources
    </h3>
    <ul class="list">
      <li class="list-item">
        <a href="https://www.spoon-tamago.com/">
          Spoon &amp; Tamago
        </a>
      </li>
      <li class="list-item">
        <a href="https://identitydesigned.com/">
          Identity Designed
        </a>
      </li>
      <li class="list-item">
        <a href="https://uxdesign.cc/">
          UX Collective
        </a>
      </li>
      <li class="list-item">
        <a href="https://www.creativeboom.com/">
          Creative Boom
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Design',
    setup() {
      useHead({
        title: "njoqi · Design",
        meta: [
          {
            name: "description",
            content: "Resources and thoughts about design.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>