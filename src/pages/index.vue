<template>
  <article class="full-width">
    <header class="article-header">
      <h1>
        Hello! Get comfy<span class="bright">.</span>
      </h1>
      <p class="text">
        Welcome to my humble place. I'm Flynn, I make and learn things.
        Rest around the fire and take a look at what I want to record, display and share. Last updated: <mark>{{ lastUpdated }}</mark>
      </p>
    </header>
    <ul class="projects">
      <li class="projects-item">
        <router-link to="/projects/photographie" class="projects-item-link">
          <h2 class="projects-item-title">
            Photographie
          </h2>
          <p class="projects-item-text">
            <span class="projects-item-image">
              <img 
                src="/assets/images/projects/project-photographie.png"
                alt=""
                height="920"
                width="460" />
            </span>
            Selected photographic works.
          </p>
        </router-link>
      </li>
      <li class="projects-item">
        <router-link to="/projects/carre-rose-films" class="projects-item-link">
            <h2 class="projects-item-title">
              Carré Rose Films
            </h2>
            <p class="projects-item-text">
              <span class="projects-item-image">
                <img 
                  src="/assets/images/projects/project-carre-rose.png"
                  alt=""
                  height="920"
                  width="460" />
              </span>
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
              <span class="projects-item-image">
                <img 
                  src="/assets/images/projects/project-scorenco.png"
                  alt=""
                  height="920"
                  width="460" />
              </span>
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
              <span class="projects-item-image">
                <img 
                  src="/assets/images/projects/project-earth-noise.png"
                  alt=""
                  height="920"
                  width="460" />
              </span>
              <abbr title="Climate fiction">Cli-fi</abbr> story about being part of this world.
            </p>
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { ref, defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

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
  title: "njoqi · Projects",
  meta: [
    {
      name: "description",
      content: description,
    }
  ]
});
</script>

<style lang="scss">
  @import "src/components/_variables.scss";

  .projects {
    display: flex;
    flex-wrap: wrap;
  }

  .projects-item {
    list-style: none;
    margin-bottom: 3em;
  }

  .projects-item:before {
    content: none;
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

  .projects-item-image {
    display: block;
    padding: 0.5em;
    margin-bottom: 0.5em;
    border: 0.175rem solid $color-text;
    text-align: center;
    background: $color-secondary;
    transition: background-color 0.1s;
  }

  .projects-item-link:hover .projects-item-image,
  .projects-item-link:hover .projects-item-image {
    background: $color-light;
  }
</style>