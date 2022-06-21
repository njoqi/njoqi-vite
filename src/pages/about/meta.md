---
title: njoqi · Meta
name: Meta
meta:
  - name: description
    content: Information about this website.
---

<p>
  <router-link to="/about">
    ← About
  </router-link>
</p>

<article-header v-bind="frontmatter" />

## Concept

==njoqi== is the place you're currently visiting. It was inspired by projects like Neauoire's [XXIIVV](https://wiki.xxiivv.com/), and aims to become:

- a projects portfolio
- a place to aggregate personal logs
- a productivity and inspirational tool
- a compendium of knowledge and useful resources
- a fun little bit of Internet I can play with

The website is for now featuring two main areas. The <router-link to="/">Projects</router-link> list holds information about some of my creative works. The <router-link to="/codex/">Codex</router-link> acts as a digital notebook, with notes and resources I can go back to and share around.

## Technology

It is generated using [Vue](https://vuejs.org/) and [Markdown](https://en.wikipedia.org/wiki/Markdown), using [Vite](https://vitejs.dev/) as development and build tool. This allows some flexibility and componentization while outputting a lightweight, javascript-less static website.

I aim to keep it accessible, have a small footprint, and a simple and user-friendly development stack. It is currently hosted on [Render](https://render.com/), which updates it seamlessly through Github pushes.

Ultimately, I want to try self-hosting it on a used Raspberry Pi (or similar) for several reasons:
- full control and ownership
- low power consumption
- learning about server configuration
- in the future, turning the Pi into a local community hosting station

<script setup>
  import ArticleHeader from '../../components/article-header.vue'
</script>