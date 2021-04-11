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
  @font-face {
      font-family: 'Archia Web';
      src: url('/assets/fonts/archia-bold-webfont.eot');
      src: url('/assets/fonts/archia-bold-webfont.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/archia-bold-webfont.woff2') format('woff2'),
          url('/assets/fonts/archia-bold-webfont.woff') format('woff'),
          url('/assets/fonts/archia-bold-webfont.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Archia Web';
      src: url('/assets/fonts/archia-regular-webfont.eot');
      src: url('/assets/fonts/archia-regular-webfont.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/archia-regular-webfont.woff2') format('woff2'),
          url('/assets/fonts/archia-regular-webfont.woff') format('woff'),
          url('/assets/fonts/archia-regular-webfont.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Augillion Web';
      src: url('/assets/fonts/augillion-regular-webfont.eot');
      src: url('/assets/fonts/augillion-regular-webfont.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/augillion-regular-webfont.woff2') format('woff2'),
          url('/assets/fonts/augillion-regular-webfont.woff') format('woff'),
          url('/assets/fonts/augillion-regular-webfont.ttf') format('truetype');
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
    font-size: 1.125rem;
    letter-spacing: 0.065em;
    font-family: "Archia Web", sans-serif;
    color: #261307;
    background: #FFF2E5;
    letter-spacing: 0.0125em;
  }

  a {
    color: #D12D00;
  }

  h2 {
    line-height: 1.125;
    font-weight: 400;
    font-size: 3.5rem;
    margin: 0.2em 0;
    text-transform: lowercase;
    font-family: "Augillion Web", "Times New Roman", serif;
    letter-spacing: 0.008em;
  }

  h3 {
    line-height: 1.125;
    font-weight: 700;
    font-size: 1.6rem;
    margin: 2.5em 0 0.5em;
  }

  h4 {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 2em 0 0.5em;
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
    border-top: 0.1em solid #FFD438;
    border-bottom: 0.1em solid #FFD438;
  }

  a {
    color: #D12D00;
  }

  a:not([href^='/']):not([href='']):not(.image-link):not(.mail-link):after {
    content:"°";
  }

  dt,
  dd {
    padding-top: 1em;
  }

  dt {
    font-weight: 700;
    float: left;
    padding-right: 0.5em;
  }

  dd {
      margin-left: 2em;
  }

  mark {
    letter-spacing: 0.1em;
    font-size: 0.8em;
    vertical-align: middle;
    background: #FFD438;
    border: 0.25em solid #FFD438;
    display: inline-block;
    margin-top: -0.1em;
    padding: 0 0.3em;
    line-height: 1.45em;
    border-radius: 0.3em;
  }

  small {
    font-size: 0.875rem;
  }

  cite {
    font-style: normal;
    letter-spacing: 0.1em;
    font-size: 0.8em;
    vertical-align: middle;
    border: 0.25em solid #ebe0ce;
    display: inline-block;
    margin-top: -0.1em;
    padding: 0 0.3em;
    line-height: 1.45em;
  }

  img {
      max-width: 100%;
      height: auto;
  }

  button {
    font-family: "Archia", Arial, sans-serif;
    font-size: 0.875rem;
    padding: 0.4em 0.8em;
    background: transparent;
    border: 0.2em solid #D12D00;
    border-radius: 1em;
  }

  .accent {
    color: #D12D00;
  }

  .bright {
    color: #FFD438;
  }

  .base-main {
    color: #261307;
    padding: 2rem 1.5rem 2rem;
    min-height: 50vh;
  }

  @media all and (min-width: 34rem) {
    .base-main {
      padding: 2rem 2rem 4rem;
    }
  }

  .full-width {
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
  }  

  .article-header {
    padding-bottom: 0.5em;
    margin-bottom: 2em;
    border-bottom: 0.2em solid #261307;
  }

  .article-photo {
    margin-bottom: 1em;
  }

  .section__text,
  .article__text,
  .article__descriptive-list,
  .article-list {
    line-height: 1.8em;
  }

  .article-list {
    list-style: none;
  }

  .list-item {
    margin: 0.25em auto;
  }

  .list-item:before {
    content: "\2023";
    opacity: 1;
    padding: 0 0.25rem;
  }

  .list-item:hover:before,
  .list-item:active:before {
    opacity: 0.4;
  }

  .article-descriptive-list {
    padding-left: 2em;
    padding-bottom: 1em;
    border-top: 0.1em solid;
    border-bottom: 0.1em solid;
  }
</style>