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

<style lang="scss" scoped>
  h1 {
    font-weight: 400;
    font-size: 1.375rem;
    letter-spacing: 0.125em;
    margin: auto;
    padding: 1rem;
    max-width: 56rem;

    @media all and (min-width: 42rem) {
      padding: 1rem 2rem;
    }
  }

  .base-header {
    padding-bottom: 1.5rem;
  }

  .base-header-top {
    background: #ffd438;
  }

  .base-header-home {
    color: #1a2125;
    display: inline-block;
    padding-right: 0.5rem;
    text-decoration: none;
    border-right: 0.5rem solid transparent;
  }

  .base-header-home:hover,
  .base-header-home:active {
      border-color: #fff2e5;
  }

  .base-header-logo {
    width: 3em;
    padding: 0.5em;
    margin-right: 0.25rem;
    line-height: 1.5em;
    vertical-align: middle;
    border-radius: 50%;
  }
</style>
