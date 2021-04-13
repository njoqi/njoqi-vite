<template>
  <header class="full-width article-header">
    <nav class="text">
      <router-link to="/codex">
        Codex index
      </router-link>
    </nav>
    <h2>
      Webcomics
    </h2>
    <p class="text">
      <mark>This page is being built.</mark>
    </p>
    <p class="text">
      Log of great webcomics I have read, or am reading.
    </p>
  </header>
  <article class="full-width">
    <h3 >
      <a href="https://hardlacquer.com/post/185301375229/post1x01">Hard Lacquer</a>
    </h3>
    <dl class="descriptive-list">
      <dt>Type:</dt>
      <dd>modern</dd>

      <dt>Thoughts:</dt>
      <dd>Explosive mix with fun characters, a queer cast and amazing art.</dd>
    </dl>
  </article>
  <article class="full-width">
    <h3 >
      <a href="https://www.onasunbeam.com/">On a sunbeam</a>
    </h3>
    <dl class="descriptive-list">
      <dt>Type:</dt>
      <dd>sci-fi / fantasy</dd>

      <dt>Thoughts:</dt>
      <dd>Beautiful, mysterious, with a diverse queer cast. Lots of emotions. The landscapes are mesmerizing and the storytelling is really nice.</dd>
    </dl>
  </article>
  <article class="full-width">
    <h3 >
      <a href="http://sssscomic.com/">Stand Still. Stay Silent</a>
    </h3>
    <dl class="descriptive-list">
      <dt>Type:</dt>
      <dd>post-apo / fantasy</dd>

      <dt>Thoughts:</dt>
      <dd>An <em>amazingly</em> intricate and detailed world, with breathtaking adventures. It has a rather slow start, but it's absolutely worth the read. The amount of work put in this one is impressive.</dd>
    </dl>
  </article>
  <article class="full-width">
    <h3 >
      <a href="https://www.webtoons.com/en/romance/lore-olympus/list?title_no=1320">Lore Olympus</a>
    </h3>
    <dl class="descriptive-list">
      <dt>Type:</dt>
      <dd>mythological / modern</dd>

      <dt>Thoughts:</dt>
      <dd>Nice art and interesting format. A smart, modern take on an ancient greek myth.</dd>
    </dl>
  </article>
  <article class="full-width">
    <h3 >
      <a href="http://witchycomic.com/comic/page-1/">Witchy</a>
    </h3>
    <dl class="descriptive-list">
      <dt>Type:</dt>
      <dd>fantasy</dd>

      <dt>Thoughts:</dt>
      <dd>Captivating tale with a beautiful style that keeps improving.</dd>
    </dl>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Webcomics',
    setup() {
      useHead({
        title: "njoqi · Webcomics",
        meta: [
          {
            name: "description",
            content: "Log of great webcomics I have read, or am reading.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>