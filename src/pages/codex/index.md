---
title: njoqi · Codex
name: Codex
meta:
  - name: description
    content: A repository of resources, logs and other information.
---

<script setup>
  import ArticleHeader from '../../components/article-header.vue';
  
  const text = "A repository of resources, logs and other information. I plan on printing a copy of some of it in the future, to avoid relying on online availability.";
  const customMeta = [{"name": "description", "content": text}]
</script>

<ArticleHeader name="Codex" :meta="customMeta" />

## Knowledge

- <router-link to="/codex/design">Design</router-link>
- <router-link to="/codex/sustainability">Sustainability</router-link>

## Logs

- <router-link to="/codex/tea">Tea</router-link>
- <router-link to="/codex/webcomics">Webcomics</router-link>