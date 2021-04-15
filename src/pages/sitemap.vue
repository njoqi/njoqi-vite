<template>
  <article class="full-width">
    <header class="full-width article-header">
      <h1>
        Sitemap
      </h1>
      <p>
        {{ description }}
      </p>
    </header>
    <ul class="list">
      <li class="list-item" v-for="page in pages" :key="page.url">
        <router-link :to="page.url">
          {{ page.name }}
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useHead } from '@vueuse/head';
  export default defineComponent({
    name: 'SiteMap',
    setup() {
      const description = ref("List of all the pages on the website.");
      const pages = ref([
        {
          url: "/",
          name: "Projects"
        }, {
          url: "/projects/photographie",
          name: "Projects / Photographie"
        }, {
          url: "/projects/photographie/humans",
          name: "Projects / Photographie / Humans"
        }, {
          url: "/projects/photographie/animals",
          name: "Projects / Photographie / Animals"
        }, {
          url: "/projects/photographie/geometries",
          name: "Projects / Photographie / Géométries"
        }, {
          url: "/projects/photographie/presences",
          name: "Projects / Photographie / Présences"
        }, {
          url: "/projects/photographie/intervalles",
          name: "Projects / Photographie / Intervalles"
        }, {
          url: "/carre-rose",
          name: "Projects / Carré Rose"
        }, {
          url: "/scorenco",
          name: "Projects / Score n'co"
        }, {
          url: "/earth-noise",
          name: "Projects / Earth/Noise"
        }, {
          url: "/codex",
          name: "Codex"
        }, {
          url: "/codex/design",
          name: "Codex / Design"
        }, {
          url: "/codex/sustainability",
          name: "Codex / Sustainablility"
        }, {
          url: "/codex/webcomics",
          name: "Codex / Webcomics"
        }, {
          url: "/codex/tea",
          name: "Codex / Tea"
        }, {
          url: "/articles",
          name: "Articles"
        }, {
          url: "/about",
          name: "About"
        }, {
          url: "/sitemap",
          name: "Sitemap"
        }
      ]);

      useHead({
        title: "njoqi · Sitemap",
        meta: [
          {
            name: `description`,
            content: description,
          }
        ]
      });

      return {
        description,
        pages
      };
    }
  });
</script>

<style lang="scss">
</style>