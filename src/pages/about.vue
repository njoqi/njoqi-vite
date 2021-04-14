<template>
  <header class="full-width article-header">
    <h1>
      About
    </h1>
    <p class="text">
      Information about this website and its author.
    </p>
  </header>

  <article class="full-width">
    <h2>
      Flynn Salazar
    </h2>
    <p class="text">
      That's me! A young creative person. I'm nonbinary and my pronouns are <mark>they/them</mark>. I currently live in <mark>Nantes, France</mark>, where I work at home on various projects. I used to be a graphic designer & front-end developer at <a href="https://scorenco.com" title="A platform for sports fans at all levels of play">Score n'co</a>, but am now looking for a new, exciting path to explore!
    </p>
    <p class="text">
      I am a curious person whose interests span across:
    </p>
    <ul class="list">
      <li class="list-item">
        📐 design, architecture
      </li>
      <li class="list-item">
        🎨 visual arts (esp. photography)
      </li>
      <li class="list-item">
        🌤 nature, fauna &amp; flora
      </li>
      <li class="list-item">
        🌿 sustainable living &amp; ecology
      </li>
      <li class="list-item">
        🎵 electronic music &amp; field recordings
      </li>
      <li class="list-item">
        🍜 food (mostly vegan!)
      </li>
      <li class="list-item">
        🎮 software development
      </li>
      <li class="list-item">
        📕 social science
      </li>
    </ul>
    <p class="text">
      When I'm not jumping around in code, words, drawings and animated series, you can usually find me <a href="/codex/tea/">drinking tea</a>, taking a stroll, raising plants and/or taking <a href="/photographie/">photos</a>.
    </p>
    <p class="text">
      You can chat with me by mail at <mark><a href="mailto:hello@njoqi.me" class="mail-link">hello@njoqi.me</a></mark>, on Discord as <mark>Meryl#6559</mark> or on Telegram as <mark>@mechameryl</mark>. Please take a look at my photographic work on <a href="https://www.instagram.com/meryl.shoots/">Instagram</a>!
    </p>
  </article>

  <article class="full-width">
    <h2>
      njoqi
    </h2>
    <p class="text">
      <mark>njoqi</mark> is the place you're currently visiting. It was inspired by projects like <a href="https://wiki.xxiivv.com/">Neauoire's XXIIVV</a>, and aims to become:
    </p>
    <ul class="list">
      <li class="list-item">
        a projects portfolio
      </li>
      <li class="list-item">
        a personal log
      </li>
      <li class="list-item">
        a productivity and inspirational tool
      </li>
      <li class="list-item">
        a compendium of knowledge
      </li>
    </ul>
    <p class="text">
      The website is for now featuring two main areas. The <a href="/">Projects list</a> holds information about some of my creative works and their status. The <a href="/codex/">Codex</a> acts as a kind of reference guide, with interesting resources I can go back to and share around.
    </p>
    <p class="text">
      It uses <a href="https://vitejs.dev/">Vite</a> as development and build tool and <a href="https://v3.vuejs.org/">Vue 3</a> as front-end framework. Pre-rendering allows flexibility and componentization while generating a lightweight static website.
    </p>
    <p class="text">
      It should stay accessible, have a small footprint, and a simple and user-friendly development stack. It is currently hosted on <a href="https://render.com/">Render</a>, which updates it seamlessly through Github pushes.
    </p>
  </article>

</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'About',
    setup() {
      useHead({
        title: "njoqi · About",
        meta: [
          {
            name: `description`,
            content: "Information about this website and its author.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>