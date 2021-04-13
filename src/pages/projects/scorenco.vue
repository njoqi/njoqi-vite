<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/">
            Projects index
        </router-link>
      </nav>
      <h2>
        Score n'co
      </h2>
      <p class="text">
        Design and development for an online sports app.
      </p>
    </header>
    <p class="text">
      <a href="https://scorenco.com/">Score n'co</a> is a french online platform providing up-to-date information about championships results and rankings at all competitive and amateur levels, across 10 sports. Its website and its mobile app also allow users (fans and clubs) to comment and update events of their favorite teams in real time.
    </p>
    <p class="text">
      <img
        src="/assets/images/projects/scorenco.jpg"
        alt="Score n'co mobile app screens"
        height="782"
        width="1400">
    </p>
    <p class="text">
      I joined Score n'co early on, as the company was still creating its main product. My initial mission was to provide graphic design guidance and create visuals for the company's blog and social media, but it quickly became broader. I helped (re)design all the pages of the website, then translate its contents into the mobiles apps while applying the iOS and Android guidelines.
    </p>
    <p class="text">
      The ownership of the front-end development was gradually transferred to me, and I developed new pages and features for the website (and the mobile app using webviews). Improving the overall code quality and web performances was an objective as well.
    </p>
    <p class="text">
      <img
        src="/assets/images/projects/scorenco-2.jpg"
        alt="Score n'co webpage displaying an event with live score information."
        height="858"
        width="1400">
    </p>
    <p class="text">
      Other tasks I completed include an update for the company logo and visual identity, providing guidelines to ensure coherent visuals ; and switching the project from Angular to React while updating the build processes.
    </p>
  </article>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Scorenco',
    setup() {
      useHead({
        title: "njoqi · Score n'co",
        meta: [
          {
            name: "description",
            content: "Design and development for an online sports app.",
          }
        ]
      });
    }
  });
</script>

<style lang="scss">
</style>