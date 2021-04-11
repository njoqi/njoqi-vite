<template>
  <header class="full-width article-header">
    <h2 class="article__title">
      About
    </h2>
    <p class="article__text">
      Information about this website and its author.
    </p>
  </header>

  <article class="full-width">
    <h3 class="article__title">
      Flynn Salazar
    </h3>
    <p class="article__text">
      That's me! A young creative person. I'm nonbinary and my pronouns are <mark>they/them</mark>. I currently live in <mark>Nantes, France</mark>, where I work at home on various projects. I used to be a graphic designer & front-end developer at <a href="https://scorenco.com" title="A platform for sports fans at all levels of play">Score n'co</a>, but am now looking for a new, exciting path to explore!
    </p>
    <p class="article__text">
      I am a curious person whose interests span across:
    </p>
    <ul class="article-list">
      <li class="list-item">
        📐 design, architecture
      </li>
      <li class="list-item">
        🎨 visual arts (esp. photography)
      </li>
      <li class="list-item">
        🌤 nature, fauna & flora
      </li>
      <li class="list-item">
        🌿 sustainable living & ecology
      </li>
      <li class="list-item">
        🎵 electronic music & field recordings
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
    <p class="article__text">
      When I'm not jumping around in code, words, drawings and animated series, you can usually find me <a href="/codex/tea/">drinking tea</a>, taking a stroll, raising plants and/or taking <a href="/photographie/">photos</a>.
    </p>
    <p class="article__text">
      You can chat with me by mail at <mark><a href="mailto:hello@njoqi.me" class="mail-link">hello@njoqi.me</a></mark>, on Discord as <mark>Meryl#6559</mark> or on Telegram as <mark>@mechameryl</mark>. Please take a look at my photographic work on <a href="https://www.instagram.com/meryl.shoots/">Instagram</a>!
    </p>
  </article>

  <article class="full-width">
    <h3 class="article__title">
      njoqi
    </h3>
    <p class="article__text">
      <mark>njoqi</mark> is the place you're currently visiting. It was inspired by projects like <a href="https://wiki.xxiivv.com/" title="Truly impressive">Neauoire's XXIIVV</a>, and aims to become:
    </p>
    <ul class="article-list">
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
    <p class="article__text">
      The website is for now featuring two main areas. The <a href="/">Projects list</a> holds information about my creative works and their status. The <a href="/codex/">Codex</a> acts as a kind of reference guide, with interesting resources I can go back to and share around.
    </p>
    <p class="article__text">
      It is completely hand-coded in HTML and CSS, in the simplest way. I am planning on using a static site generator to optimise my workflow, and allow for easy large-scale changes while compacting content in a standardized way.
    </p>
    <p class="article__text">
      It should stay accessible, have a minimal footprint, and a simple and user-friendly development stack. And it's hosted on <a href="https://neocities.org/" title="An awesome free hosting platform">Neocities</a>, because what a nice platform to support!
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
        title: "About",
        meta: [
          {
            name: `description`,
            content: "C'est cool",
          }
        ]
      });
    }
  });
</script>

<style lang="scss" scoped>
</style>