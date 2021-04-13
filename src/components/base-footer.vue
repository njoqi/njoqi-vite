<template>
  <footer class="base-footer" role="contentinfo">
    <p class="base-footer-copyright">
      <small class="base-footer-text">
        Set in <a href="http://atipofoundry.com/fonts/archia">Archia</a> and <a href="https://www.myfonts.com/fonts/sarid-ezra/augillion/">Augillion</a>.
      </small>
      <a class="base-footer-logo image-link" href="https://webring.xxiivv.com/#random" title="Part of the XXIIVV Webring">
        <img class="base-footer-webring" alt="Webring logo" src="https://webring.xxiivv.com/icon.black.svg" />
      </a>
      <small class="base-footer-text">
        Website and contents <a href="https://creativecommons.org/licenses/by-nc/4.0/"><abbr title="Creative Commons Attribution-NonCommercial 4.0 International">CC BY-NC 4.0</abbr></a> <span class="accent">❤</span>
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

  @media all and (max-width: 36rem) {
    .base-footer-copyright {
      flex-direction: column;
    }
    
    .base-footer-logo {
      order: 1;
      margin-bottom: 1em;
    }
    
    .base-footer-text {
      order: 2;
    }
  }

  @media all and (min-width: 32rem) {
    .base-footer {
      padding: 3em 2em;
    }
  }

  .base-footer-logo:hover .base-footer-webring,
  .base-footer-logo:active .base-footer-webring {
    background-color: $color-secondary;
  }

  .base-footer-logo {
    position: relative;
    width: 2.8em;
    padding: 0 0.2em;
    flex-shrink: 0;
  }

  .base-footer-webring {
    height: 2.4em;
    width: 2.4em;
    padding: 0.12em 0.3em 0.48em;
    border-radius: 50%;
    margin-top: 0.5em;
    transition: transform .15s;
    transform: scale(1);
  }

  .base-footer-logo:after {
    content:" ";
    position: absolute;
    top: 50%;
    left: 0.2em;
    display: block;
    height: 2.4em;
    width: 2.4em;
    border-radius: 50%;
    border: 0.1em solid $color-secondary;
    opacity: 0;
    transition: transform .15s, opacity .15s;
    transform: translateY(-50%) scale(1);
  }

  .base-footer-logo:hover .base-footer-webring,
  .base-footer-logo:active .base-footer-webring {
    transform: rotate(120deg);
  }

  .base-footer-logo:hover:after,
  .base-footer-logo:active:after {
    opacity: 1;
    transform: translateY(-46.7%) scale(1.3);
  }

</style>
