---
title: njoqi · About
name: About
meta:
  - name: description
    content: Information about this website and its author.
---

<script setup>
  import ArticleHeader from '../../components/article-header.vue'
</script>

<article-header v-bind="frontmatter" />

## Flynn Salazar

That's me! I'm a 28 years old, rather creative person. I'm nonbinary and my pronouns are ==they/them==. I currently live in ==Dundee, Scotland==, where I work at home on various projects.

![An androgynous white person with short black and red hair, round glasses and ear jewelry.](/assets/images/about/flynn.jpg){height=800 width=1200}

I used to be a graphic designer & front-end developer at [Score n'co](https://scorenco.com "A platform for sports fans at all levels of play"), and just completed a year learning [Social Care](https://www.nescol.ac.uk/courses/social-care-scqf-level-6/ "Providing care, protection and support to people") at the North East Scotland College. I am now looking for a new, exciting path to explore!

I am a curious person whose interests span across:

- 📐 design, architecture
- 🎨 visual arts (esp. photography)
- 🌤 nature, fauna &amp; flora
- 🌿 sustainable living &amp; ecology
- 🎵 electronic music &amp; field recordings
- 🎮 video games and interactive media
- 💾 software development
- 📕 social sciences
- 📜 writing
- 🍜 food (mostly vegan!)

When I'm not jumping around in code, words, drawings and animated series, you can usually find me <router-link to="/codex/tea">drinking tea</router-link>, taking a stroll, growing plants and/or taking <router-link to="/projects/photographie">photos</router-link>.

You can chat with me by mail at ==[hello@njoqi.me](mailto:hello@njoqi.me){.mail-link}==, on Discord as ==Meryl#6559== or on Telegram as ==@mechameryl==. Please take a look at my photographic work on [Instagram](https://www.instagram.com/meryl.shoots/)!

## njoqi

==njoqi== is the place you're currently visiting. It was inspired by projects like Neauoire's [XXIIVV](https://wiki.xxiivv.com/), and aims to become:

- a projects portfolio
- a place to aggregate personal logs
- a productivity and inspirational tool
- a compendium of knowledge 

The website is for now featuring two main areas. The <router-link to="/">Projects</router-link> list holds information about some of my creative works and their status. The <router-link to="/codex/">Codex</router-link> acts as a kind of reference guide, with interesting resources I can go back to and share around.

It is generated using [Vue](https://vuejs.org/) and [Markdown](https://en.wikipedia.org/wiki/Markdown), using [Vite](https://vitejs.dev/) as development and build tool. This allows some flexibility and componentization while outputting a lightweight, javascript-less static website.

I aim to keep it accessible, have a small footprint, and a simple and user-friendly development stack. It is currently hosted on [Render](), which updates it seamlessly through Github pushes. Ultimately, I want to try self-hosting it on a used Raspberry Pi for several reasons:
- full control and ownership
-  low-power consumption
- fiddling with server configuration
- in the future, turning the Pi into a local community hosting station