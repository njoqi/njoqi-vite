<template>
  <nav class="text center base-return-top">
    <a href="#">Return to top ↑</a>
  </nav>
  <footer class="base-footer" role="contentinfo">
    <p class="base-footer-copyright">
      <span class="base-footer-text">
        <router-link to="/">Home</router-link> - <router-link to="/sitemap">Sitemap</router-link>
      </span>
      <span class="base-footer-text base-footer-logo">
        <a class="base-footer-webring image-link" href="https://webring.xxiivv.com/" title="Part of the XXIIVV Webring">
          <img class="base-footer-webring-logo" alt="Webring logo" src="https://webring.xxiivv.com/icon.black.svg" />
        </a>
      </span>
      <small class="base-footer-text">
        Set in <a href="http://atipofoundry.com/fonts/archia">Archia</a> and <a href="https://www.myfonts.com/fonts/sarid-ezra/augillion/">Augillion</a>.
      </small>
    </p>
    <p class="text base-footer-text">
      <small>
        Website and contents <a href="https://creativecommons.org/publicdomain/zero/1.0/"><abbr title="Creative Commons Zero Public Domain Dedication">CC0</abbr></a> (unless specified otherwise) <span class="accent">❤</span><br/>
        <a href="https://github.com/njoqi/njoqi-vite">Source code</a> available on Github and <a href="https://unlicense.org/">unlicensed</a>
      </small>
    </p>
  </footer>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "BaseFooter"
  });
</script>

<style lang="scss">
  @import "src/components/_variables.scss";

  .base-return-top {
    font-size: $font-size--1;
    margin: 2em;

    @media all and (min-width: $text-max-width) {
      font-size: $font-size--1-max;
    }
  }

  .base-footer {
    padding: 3em 1em;
    text-align: center;
    border-top: 0.2em solid $color-text;
  }

  .base-footer-copyright {
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .base-footer-text {
    font-size: $font-size--1;
    flex: 1 1 0;

    @media all and (min-width: $text-max-width) {
      font-size: $font-size--1-max;
    }
  }

  @media all and (max-width: 36rem) {
    .base-footer-copyright {
      flex-direction: column;
    }
    
    .base-footer-text {
      order: 2;
      margin-bottom: 1em;
    }
    
    .base-footer-logo {
      order: 1;
    }
  }

  @media all and (min-width: 32rem) {
    .base-footer {
      padding: 3em 2em;
    }
  }

  .base-footer-webring:hover .base-footer-webring-logo,
  .base-footer-webring:active .base-footer-webring-logo {
    background-color: $color-secondary;
  }

  .base-footer-webring {
    position: relative;
    display: inline-block;
  }

  .base-footer-webring-logo {
    height: 2.4em;
    width: 2.4em;
    padding: 0.12em 0.3em 0.48em;
    border-radius: 50%;
    transition: transform 0.4s;
    transform: scale(1);
  }

  .base-footer-webring:after {
    content:" ";
    position: absolute;
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: 2.4em;
    width: 2.4em;
    padding: 0.12em 0.3em 0.48em;
    border-radius: 50%;
    border: 0.1em solid $color-secondary;
    opacity: 0;
    transition: transform .15s, opacity .15s;
    transform: scale(1);
    transform-origin: 50% 50%;
  }

  .base-footer-webring:hover .base-footer-webring-logo,
  .base-footer-webring:active .base-footer-webring-logo {
    transform: rotate(120deg);
  }

  .base-footer-webring:hover:after,
  .base-footer-webring:active:after {
    opacity: 1;
    transform: scale(1.4);
  }

</style>
