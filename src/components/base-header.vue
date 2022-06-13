<template>
  <header class="base-header">
    <div class="base-header-top">
      <p class="base-header-home">
        <router-link class="base-header-link" to="/">
          <img class="base-header-logo" src="/assets/logo.svg" alt="Logo" height="200" width="200" />
          njoqi
        </router-link>
      </p>
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

  .base-header-home {
    font-weight: 400;
    font-size: $font-size-1;
    letter-spacing: 0.125em;
    margin: auto;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-1-max;
    }
  }

  .base-header-top {
    background: $color-secondary;
    padding: 0.4em 1.5em;
    border-bottom: 0.175rem solid $color-text;
  }

  .base-header-link {
    color: $color-text;
    display: inline-block;
    padding-right: 0.2em;
    text-decoration: none;
    border-right: 0.2em solid transparent;
  }

  .base-header-link:hover,
  .base-header-link:active {
      border-color: $color-light;
  }

  .base-header-logo {
    width: 2.4em;
    padding: 0.2em;
    margin-right: 0.25em;
    line-height: 1.5em;
    vertical-align: middle;
  }
</style>
