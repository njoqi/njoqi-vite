<template>
  <header class="base-header">
    <div class="base-header-wrapper">
      <p class="base-header-home">
        <router-link class="base-header-link" to="/">
          <img class="base-header-logo" src="/assets/logo.svg" alt="Logo" height="200" width="200" />
          njoqi
        </router-link>
      </p>
      <BaseNav />
    </div>
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

  .base-header {
    background-color: $color-secondary;
    padding: 1.25em 2em;
  }

  .base-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: $text-max-width;
    margin: auto;
  }

  .base-header-home {
    margin: 0;
    font-size: $font-size-1;
    letter-spacing: 0.125em;

    @media screen and (min-width: $text-max-width) {
      font-size: $font-size-1-max;
    }
  }

  .base-header-link {
    color: $color-text;
    display: inline-block;
    padding: 0.2em 0.6em 0.2em 0.4em;
    text-align: center;
    text-decoration: none;
    border: 0.2rem solid $color-text;
  }

  .base-header-link:hover,
  .base-header-link:active {
      border-color: $color-light;
  }

  .base-header-logo {
    width: 2.2em;
    padding: 0.2em;
    margin-right: 0.2em;
    line-height: 1.5em;
    vertical-align: middle;
  }
</style>
