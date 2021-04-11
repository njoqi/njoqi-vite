<template>
  <article class="full-width">
    <header class="article-header">
      <h2 class="article__title">
        Hello! Get comfy<span class="bright">.</span>
      </h2>
      <p class="article__text">
        Welcome to my humble place. I'm Flynn, a digital creative and front-end developer.
        Rest around the fire and take a look at things I want to record, display and share.
        Most are ongoing projects. Last updated: <mark>{{ lastUpdated }}</mark>
      </p>
    </header>
    <ul class="projects">
      <li class="projects__item">
        <router-link to="/projects/photographie" class="projects__item__title">
          Photographie
        </router-link>
        <p class="projects__item__text">
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
    <li class="projects__item">
      <router-link class="projects__item__title" to="/projects/carre-rose">
        Carré Rose
      </router-link>
      <p class="projects__item__text">
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
    <li class="projects__item">
      <router-link class="projects__item__title" to="/projects/scorenco">
        Score n'co
      </router-link>
      <p class="projects__item__text">
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
    <li class="projects__item">
      <router-link class="projects__item__title" to="/projects/earth-noise">
        Earth/Noise
      </router-link>
        <p class="projects__item__text">
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
    const lastUpdated = ref(todayDate + " " + months[todayMonth] + " " + todayYear);

    useHead({
      title: "Home",
      meta: [
        {
          name: "njoqi",
          content: "C'est cool",
        }
      ]
    });
    return {
      lastUpdated
    };
  }
});
</script>

<style lang="scss" scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
  }

  .projects__item {
    list-style: none;
    margin-bottom: 2em;
  }

  @media all and (min-width: 38rem) {
    .projects__item {
      width: 50%;
      padding-right: 1em;
    }

    .projects__item:nth-child(2n) {
      padding-left: 1em;
      padding-right: 0;
    }
  }


  .projects__item__title {
    display: block;
    font-size: 1.5rem;
    margin: 0;
    padding: 0.25rem 0 0.5rem;
    text-decoration: none;
    font-weight: 700;
  }

  .projects__item__text {
    font-size: 1rem;
    margin: 0;
    padding: 0.25rem 0;
  }
</style>