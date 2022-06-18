<template>
  <article class="full-width">
    <header class="article-header">
      <nav class="text">
        <router-link to="/projects/photographie">
          ← Photographie index
        </router-link>
      </nav>
      <h1>
        Presences
      </h1>
      <p class="text">
        {{ description }}
      </p>
    </header>
    <ul class="list">
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/21.jpg"
          alt="Black and white valley with clouds contrasting against the mountains"
          height="1051"
          width="1400">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/20.jpg"
          alt="Black and white valley with three small lakes fading into fog"
          height="1400"
          width="1051">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/19.jpg"
          alt="Black and white silhouettes of trees on a recline, fading into fog"
          loading="lazy"
          height="1400"
          width="1051">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/18.jpg"
          alt="Black and white close-up of a branch-like fungus"
          loading="lazy"
          height="1201"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/17.jpg"
          alt="Hazy wing of a plane with sunshine reflecting on it, fading into the clouds"
          loading="lazy"
          height="1400"
          width="1051">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/16.jpg"
          alt="Silhouettes of street lamps against an evening sky, with a large cloud in the middle"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/15.jpg"
          alt="Train tracks disappearing into a forest section, surrounded by distant mountains"
          loading="lazy"
          height="1201"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/14.jpg"
          alt="Water tower on the side of a hill, with trees lining up along the slope and a foggy background"
          loading="lazy"
          height="1201"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/13.jpg"
          alt="Industrial complex right in front of a lake, with cloudy mountains behind"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/12.jpg"
          alt="Black and white close-up of a rock formation, contrasting against a bright sky"
          loading="lazy"
          height="1201"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/11.jpg"
          alt="Building with a reflective dome hidden behind trees, with a river next to it and dramatic clouds"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/10.jpg"
          alt="Close-up of berries and twigs in the palm of a hand, wearing golden rings"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/09.jpg"
          alt="Train power lines following a fence overgrown with vegetation"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/08.jpg"
          alt="A dead white butterfly resting in a pot full of dry plants"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/07.jpg"
          alt="Silhouette of a crane against a purple sunset sky"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/06.jpg"
          alt="Black and white front of a shed with a metal roof and wooden planks walls. A deer head figure is mounted on it"
          loading="lazy"
          height="1400"
          width="1400">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/05.jpg"
          alt="Ceiling mounted lamp reflecting an orange evening light coming from a nearby window"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/04.jpg"
          alt="Close-up of an angled tiled roof, underneath it is a small wooden figure. It is surrounded by tree branches"
          loading="lazy"
          height="1143"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/03.jpg"
          alt="Close-up of autumn leaves"
          loading="lazy"
          height="840"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/02.jpg"
          alt="Neon light slightly illuminating a concrete wall and copper pipes"
          loading="lazy"
          height="920"
          width="1600">
      </li>
      <li class="image photograph">
        <img
          src="/assets/images/projects/photographie/presences/01.jpg"
          alt="Close-up of a train window and a red curtain, soft light coming from outside"
          loading="lazy"
          height="1143"
          width="1600">
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'Presences',
    setup() {
      const description = ref("Moments on Earth, suspended, a story hidden within.");

      useHead({
        title: "njoqi · Presences",
        meta: [
          {
            name: "description",
            content: "Selected photographic works - " + description.value
          }
        ]
      });

      return {
        description
      };
    }
  });
</script>

<style lang="scss">
</style>