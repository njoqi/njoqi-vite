<template>
  <header class="full-width article-header">
    <nav class="text">
      <router-link to="/codex">
        Codex index
      </router-link>
    </nav>
    <h2>
      Tea
    </h2>
    <p class="text">
      <mark>This page is being built.</mark>
    </p>
    <p class="text">
      Informations about tea, including a log of some teas I have tried, in order to refine my taste preferences while learning about them. For now, I seem to have a soft spot for unflavoured japanese tea.
    </p>
  </header>

  <article class="full-width">
    <h3>
      Resources about tea
    </h3>
    <ul class="list">
      <li class="list-item">
        <a href="https://japaneseteasommelier.wordpress.com/2018/03/19/regional-banchas-as-ethnographic-documents/">Regional banchas as ethnographic documents</a>
      </li>
      <li class="list-item">
        <a href="https://japaneseteasommelier.wordpress.com/2015/03/03/basics-knowledge-and-experiments-about-sencha-brewing/">Basics, knowledge, and experiments about sencha brewing</a>
      </li>
      <li class="list-item">
        <a href="https://tea-side.com/blog/how-to-brew-tea/">How to brew tea properly. Brewing methods in different countries.</a>
      </li>
      <li class="list-item">
        <a href="https://www.japan-talk.com/jt/new/japanese-tea">A list of japanese teas</a>
      </li>
    </ul>
  </article>

  <section class="full-width">
    <h3 >
      Tea log
    </h3>
    <article>
      <h4>
        Sencha
      </h4>
      <p class="image">
        <img src="/assets/images/codex/tea/sencha.jpg" alt="Close-up of green, dry grass-like sencha leaves.">
      </p>
      <dl class="descriptive-list">
        <dt>Origin:</dt>
        <dd>Japan</dd>

        <dt>Type:</dt>
        <dd>green tea</dd>

        <dt>Leaves:</dt>
        <dd>fine, powdery</dd>

        <dt>Qualities:</dt>
        <dd>vegetal, refreshing, clearing</dd>
      </dl>
    </article>
    <article>
      <h4>
        Kasakura
      </h4>
      <p class="image">
        <img src="/assets/images/codex/tea/kasakura.jpg" alt="Close-up of dark kasakura leaves.">
      </p>
      <dl class="descriptive-list">
        <dt>Origin:</dt>
        <dd>Japan (Shizuoka)</dd>

        <dt>Type:</dt>
        <dd>black tea smoked with cherry tree wood</dd>

        <dt>Leaves:</dt>
        <dd>shrivelled, crispy, tiny twigs</dd>

        <dt>Qualities:</dt>
        <dd>smoky, raspy, rich</dd>
      </dl>
    </article>
    <article>
      <h4>
        Hōji Kukicha
      </h4>
      <p class="image">
        <img src="/assets/images/codex/tea/hojikukicha.jpg" alt="Close-up of brown hōjikukicha twigs.">
      </p>
      <dl class="descriptive-list">
        <dt>Origin:</dt>
        <dd>Japan</dd>

        <dt>Type:</dt>
        <dd>roasted stems tea</dd>

        <dt>Leaves:</dt>
        <dd>small twigs</dd>

        <dt>Qualities:</dt>
        <dd>round, warm, comforting, smoky</dd>
      </dl>
    </article>
  </section>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Tea',
    setup() {
      useHead({
        title: "njoqi · Tea",
        meta: [
          {
            name: "description",
            content: "Informations about tea, including a log of some teas I have tried, in order to refine my taste preferences while learning about them.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>