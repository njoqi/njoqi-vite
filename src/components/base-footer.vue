<template>
  <footer class="base-footer" role="contentinfo">
    <p class="base-footer__copyright">
      <small class="base-footer__text">
        Set in <a href="http://atipofoundry.com/fonts/archia" title="A lovely font">Archia</a>. Hand-coded in pure HTML/CSS.
      </small>
      <a class="base-footer__logo image-link" href="https://webring.xxiivv.com/#random" title="Part of the XXIIVV Webring">
        <img class="base-footer__webring" alt="Webring logo" src="https://webring.xxiivv.com/icon.black.svg" />
      </a>
      <small class="base-footer__text">
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

<style lang="scss" scoped>
  .base-footer {
  padding: 3rem 1rem;
  text-align: center;
  border-top: 0.2em solid #261307;
  }

  .base-footer__copyright {
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media all and (max-width: 36rem) {
    .base-footer__copyright {
      flex-direction: column;
    }
    
    .base-footer__logo {
      order: 1;
      margin-bottom: 1em;
    }
    
    .base-footer__text {
      order: 2;
    }
  }

  @media all and (min-width: 32rem) {
    .base-footer {
      padding: 3rem 2rem;
    }
  }

  .base-footer__logo:hover .base-footer__webring,
  .base-footer__logo:active .base-footer__webring {
    background-color: #FFD438;
  }

  .base-footer__logo {
    position: relative;
    width: 2.8em;
    padding: 0 0.2em;
    flex-shrink: 0;
  }

  .base-footer__webring {
    height: 2.4em;
    width: 2.4em;
    padding: 0.12em 0.3em 0.48em;
    border-radius: 50%;
    margin-top: 0.5em;
    transition: transform .15s;
    transform: scale(1);
  }

  .base-footer__logo:after {
    content:" ";
    position: absolute;
    top: 50%;
    left: 0.2em;
    display: block;
    height: 2.4em;
    width: 2.4em;
    border-radius: 50%;
    border: 0.1em solid #FFD438;
    opacity: 0;
    transition: transform .15s, opacity .15s;
    transform: translateY(-50%) scale(1);
  }

  .base-footer__logo:hover .base-footer__webring,
  .base-footer__logo:active .base-footer__webring {
    transform: rotate(120deg);
  }

  .base-footer__logo:hover:after,
  .base-footer__logo:active:after {
    opacity: 1;
    transform: translateY(-46.7%) scale(1.3);
  }

</style>
