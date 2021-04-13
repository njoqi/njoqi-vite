<template>
  <article class="full-width">
    <header class="article-header">
      <h2>
        Hello! Get comfy<span class="bright">.</span>
      </h2>
      <p class="text">
        Welcome to my humble place. I'm Flynn, a digital creative and front-end developer.
        Rest around the fire and take a look at things I want to record, display and share.
        Most are ongoing projects. Last updated: <mark>{{ lastUpdated }}</mark>
      </p>
    </header>
    <ul class="projects">
      <li class="projects-item">
        <router-link to="/projects/photographie" class="projects-item-title">
          Photographie
        </router-link>
        <p class="text projects-item-text">
          <router-link to="/projects/photographie" class="image-link">
            <img 
              src="/assets/images/projects/project-photographie.jpg"
              alt="Photograph of animals"
              height="560"
              width="800" />
          </router-link>
          Selected photographic works.
        </p>
    </li>
    <li class="projects-item">
      <router-link class="projects-item-title" to="/projects/carre-rose">
        Carré Rose
      </router-link>
      <p class="text projects-item-text">
        <router-link to="/projects/carre-rose" class="image-link">
          <img 
            src="/assets/images/projects/project-carre-rose.jpg"
            alt="Digital app screens"
            height="560"
            width="800" />
        </router-link>
        Design for an adult movie label.
      </p>
    </li>
    <li class="projects-item">
      <router-link class="projects-item-title" to="/projects/scorenco">
        Score n'co
      </router-link>
      <p class="text projects-item-text">
        <router-link to="/projects/scorenco" class="image-link">
          <img 
            src="/assets/images/projects/project-scorenco.jpg"
            alt="Digital app screens"
            height="560"
            width="800" />
        </router-link>
        Design and development for an online sports app.
      </p>
    </li>
    <li class="projects-item">
      <router-link class="projects-item-title" to="/projects/earth-noise">
        Earth/Noise
      </router-link>
        <p class="text projects-item-text">
          <router-link to="/projects/earth-noise" class="image-link">
            <img 
              src="/assets/images/projects/project-earth-noise.jpg"
              alt="Illustration of a character"
              height="560"
              width="800" />
          </router-link>
          <abbr title="Climate fiction">Cli-fi</abbr> story about being part of this world.
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { useHead } from '@vueuse/head';
export default defineComponent({
  name: "Home",
  setup() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const todayTimestamp = Date.now();
    const today = new Date(todayTimestamp);
    const [todayMonth, todayDate, todayYear] = today.toLocaleDateString("en-US").split("/");
    const lastUpdated = ref(todayDate + " " + months[todayMonth - 1] + " " + todayYear);

    useHead({
      title: "Home",
      meta: [
        {
          name: "njoqi · Projects",
          content: "Things I want to record, display and share.",
        }
      ]
    });
    return {
      lastUpdated
    };
  }
});
</script>

<style lang="scss">
  @import "src/components/_variables.scss";

  .projects {
    display: flex;
    flex-wrap: wrap;
    max-width: $content-max-width;
  }

  .projects-item {
    list-style: none;
    margin-bottom: 2em;
  }

  @media all and (min-width: 38rem) {
    .projects-item {
      width: 50%;
      padding-right: 1em;
    }

    .projects-item:nth-child(2n) {
      padding-left: 1em;
      padding-right: 0;
    }
  }


  .projects-item-title {
    display: block;
    font-size: $font-size-2;
    margin: 0;
    padding: 0.25em 0 0;
    text-decoration: none;
    color: $color-text;
    font-weight: 400;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-2-max;
    }
  }

  .projects-item-text {
    margin: 0;
    padding: 1em 0 1.5em;
  }
</style>