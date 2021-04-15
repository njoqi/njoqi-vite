<template>
  <article class="full-width">
    <header class="article-header">
      <h1>
        Hello! Get comfy<span class="bright">.</span>
      </h1>
      <p class="text">
        Welcome to my humble place. I'm Flynn, I make and learn things.
        Rest around the fire and take a look at things I want to record, display and share.
        Most are ongoing projects. Last updated: <mark>{{ lastUpdated }}</mark>
      </p>
    </header>
    <ul class="projects">
      <li class="projects-item">
        <router-link to="/projects/photographie" class="projects-item-link">
          <h2 class="projects-item-title">
            Photographie
          </h2>
          <p class="projects-item-text">
            <img 
              src="/assets/images/projects/project-photographie.jpg"
              alt="Photograph of animals"
              height="560"
              width="800" />
            Selected photographic works.
          </p>
        </router-link>
      </li>
      <li class="projects-item">
        <router-link to="/projects/carre-rose" class="projects-item-link">
            <h2 class="projects-item-title">
              Carré Rose
            </h2>
            <p class="projects-item-text">
              <img 
                src="/assets/images/projects/project-carre-rose.jpg"
                alt="Digital app screens"
                height="560"
                width="800" />
              Design for an adult movie label.
            </p>
        </router-link>
      </li>
      <li class="projects-item">
        <router-link to="/projects/scorenco" class="projects-item-link">
            <h2 class="projects-item-title">
              Score n'co
            </h2>
            <p class="projects-item-text">
              <img 
                src="/assets/images/projects/project-scorenco.jpg"
                alt="Digital app screens"
                height="560"
                width="800" />
              Design and development for an online sports app.
            </p>
        </router-link>
      </li>
      <li class="projects-item">
        <router-link to="/projects/earth-noise" class="projects-item-link">
            <h2 class="projects-item-title">
              Earth/Noise
            </h2>
            <p class="projects-item-text">
              <img 
                src="/assets/images/projects/project-earth-noise.jpg"
                alt="Illustration of a character"
                height="560"
                width="800" />
              <abbr title="Climate fiction">Cli-fi</abbr> story about being part of this world.
            </p>
        </router-link>
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
    const description = ref("Things I want to record, display and share.");

    useHead({
      title: "Home",
      meta: [
        {
          name: "njoqi · Projects",
          content: description,
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
    margin-bottom: 3em;
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
    font-size: $font-size-2;
    margin: 0 0 0.5em;

    @media all and (min-width: $text-max-width) {
      font-size: $font-size-2-max;
    }
  }

  .projects-item-link {
    display: block;
    text-decoration: none;
    color: $color-text;
  }

  .projects-item-text {
    line-height: 1.5em;
  }
</style>