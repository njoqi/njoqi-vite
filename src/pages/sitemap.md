---
title: njoqi · Sitemap
name: Sitemap
meta:
  - name: description
    content: List of all the pages on the website.
---

<article-header v-bind="frontmatter" />

<ul>
  <li v-for="page in pages" :key="page.url">
    <router-link :to="page.url">
      {{ page.name }}
    </router-link>
  </li>
</ul>

<script setup>
  import { ref } from 'vue';
  import ArticleHeader from '../components/article-header.vue';

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
      url: "/illustration",
      name: "Projects / Illustration"
    }, {
      url: "/carre-rose-films",
      name: "Projects / Carré Rose Films"
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
      url: "/about",
      name: "About"
    }, {
      url: "/sitemap",
      name: "Sitemap"
    }
  ]);
</script>