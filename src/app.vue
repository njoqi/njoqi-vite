<template>
  <BaseHeader />
  <main class="base-main">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </main>
  <BaseFooter />
</template>

<script>
import { defineComponent } from 'vue';
import BaseHeader from './components/base-header.vue';
import BaseFooter from './components/base-footer.vue';

export default defineComponent({
  components: {
    BaseHeader,
    BaseFooter
  },
  setup() {}
});
</script>


<style lang="scss">
  @import "src/components/_variables.scss";

  @font-face {
      font-family: 'Archia Web';
      src: url('/assets/fonts/archia-regular-subset.woff2') format('woff2'),
          url('/assets/fonts/archia-regular-subset.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Augillion Web';
      src: url('/assets/fonts/augillion-regular-subset.woff2') format('woff2'),
          url('/assets/fonts/augillion-regular-subset.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    min-height: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.5rem;
    font-size: $font-size-0;
    letter-spacing: 0.065em;
    font-family: "Archia Web", sans-serif;
    color: $color-text;
    background: $color-light;
    letter-spacing: 0.0125em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-0-max;
    }
  }

  a {
    color: $color-text-secondary;
  }

  h1 {
    line-height: 1.125;
    font-weight: 400;
    font-size: $font-size-4;
    margin: 0.4em 0;
    text-transform: lowercase;
    font-family: "Augillion Web", "Times New Roman", serif;
    letter-spacing: 0.008em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-4-max;
    }
  }

  h2 {
    line-height: 1.125;
    font-weight: 400;
    font-size: $font-size-3;
    margin: 2.5em 0 0.5em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-3-max;
    }
  }

  h3 {
    font-weight: 400;
    font-size: $font-size-2;
    margin: 2em 0 0.5em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-2-max;
    }
  }

  p,
  ul {
    padding: 0;
    margin: auto;
  }

  p + p,
  ul + p {
    margin-top: 2em;
  }

  p + ul {
    margin-top: 0.5em;
  }

  em {
    font-style: normal;
    border-top: 0.1em solid $color-secondary;
    border-bottom: 0.1em solid $color-secondary;
  }

  a {
    color: $color-text-secondary;
  }

  a:not([href^='/']):not([href^='#']):not([href='']):not(.image-link):not(.mail-link):after {
    content:"°";
  }

  dt,
  dd {
    padding-top: 1em;
  }

  dt {
    font-weight: 400;
    float: left;
    padding-right: 0.5em;
  }

  dd {
      margin-left: 2em;
  }

  mark {
    letter-spacing: 0.1em;
    font-size: $font-size--1;
    vertical-align: middle;
    background: $color-secondary;
    border: 0.25em solid $color-secondary;
    display: inline-block;
    margin-top: -0.1em;
    padding: 0 0.3em;
    line-height: 1.45em;
    border-radius: 0.3em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size--1-max;
    }
  }

  small {
    font-size: $font-size--1;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size--1-max;
    }
  }

  cite {
    font-style: normal;
    letter-spacing: 0.1em;
    font-size: $font-size--1;
    vertical-align: middle;
    border: 0.25em solid $color-light-shadow;
    display: inline-block;
    margin-top: -0.1em;
    padding: 0 0.3em;
    line-height: 1.45em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size--1-max;
    }
  }

  img {
      max-width: 100%;
      height: auto;
  }

  button {
    font-family: "Archia", Arial, sans-serif;
    font-size: $font-size--1;
    padding: 0.4em 0.8em;
    background: transparent;
    border: 0.2em solid $color-text-secondary;
    border-radius: 1em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size--1-max;
    }
  }

  .accent {
    color: $color-text-secondary;
  }

  .bright {
    color: $color-secondary;
  }

  .base-main {
    color: $color-text;
    padding: 2em 1.5em 2em;
    min-height: 50vh;
  }

  @media all and (min-width: 34rem) {
    .base-main {
      padding: 2em 2em 4em;
    }
  }

  h2,
  h3,
  h4,
  .article-header,
  .text,
  .list-item,
  .descriptive-list {
    max-width: $text-max-width;
    margin-left: auto;
    margin-right: auto;
  }  

  .image {
    text-align: center;
    max-width: $content-max-width;
    margin-left: auto;
    margin-right: auto;
  }

  .center {
    text-align: center;
  }

  .article-header {
    padding-bottom: 0.5em;
    margin-bottom: 3em;
    border-bottom: 0.2em solid $color-text;
  }

  .photograph {
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .text,
  .descriptive-list,
  .list {
    line-height: 1.8em;
  }

  .list {
    list-style: none;
  }

  .list-item {
    margin: 0.25em auto;
  }

  .list-item:before {
    display: inline-block;
    content: "\2023";
    padding-left: 0.1em;
    padding-right: 0.4em;
  }

  .list-item:hover:before,
  .list-item:active:before {
    transform: scale(1.2) translateX(0.1em);
  }

  .descriptive-list {
    padding-left: 2em;
    padding-bottom: 1em;
    border-top: 0.1em solid;
    border-bottom: 0.1em solid;
  }
</style>