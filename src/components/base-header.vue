<template>
  <header class="base-header">
    <div class="base-header-top">
      <h1>
        <router-link class="base-header-home" to="/">
          <img class="base-header-logo" src="/assets/logo.png" alt="Logo" />
          njoqi
        </router-link>
      </h1>
    </div>
    <BaseNav />
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import BaseNav from './base-nav.vue';
export default defineComponent({
  name: "BaseHeader",
  components: {
    BaseNav
  }
});
</script>

<style lang="scss">
  @import "src/components/_variables.scss";

  h1 {
    font-weight: 400;
    font-size: $font-size-1;
    letter-spacing: 0.125em;
    margin: auto;
    padding: 0.8em 0.4em;
    max-width: $content-max-width;

    @media all and (min-width: 42rem) {
      padding: 0.8em 0.4em;
    }

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-1-max;
    }
  }

  .base-header {
    padding-bottom: 1em;
  }

  .base-header-top {
    background: $color-secondary;
  }

  .base-header-home {
    color: $color-text;
    display: inline-block;
    padding-right: 0.2em;
    text-decoration: none;
    border-right: 0.2em solid transparent;
  }

  .base-header-home:hover,
  .base-header-home:active {
      border-color: $color-light;
  }

  .base-header-logo {
    width: 2em;
    padding: 0.2em;
    margin-right: 0.25em;
    line-height: 1.5em;
    vertical-align: middle;
    border-radius: 50%;
  }
</style>
