<template>
  <nav class="base-nav">
    <ul class="base-nav-list">
      <li class="base-nav-item" v-for="route in routeList" :key="route.name">
        <router-link class="base-nav-link" active-class="base-nav-link--current" :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "BaseNav",
  setup() {
    const routeList = [
      {
        path: '/',
        name: 'Projects'
      }, {
        path: '/codex',
        name: 'Codex'
      }, {
        path: '/about',
        name: 'About'
      }
    ];
    return {
      routeList
    };
  }
});
</script>

<style lang="scss">
  @import "src/components/_variables.scss";
  
  .base-nav {
    padding: 0 1em;
    max-width: 56rem;
    margin: 1em auto 2em;
  }

  @media all and (min-width: 42rem) {
    .base-nav {
      padding: 0 2em;
    }
  }

  .base-nav-list {
    display: flex;
    float: right;
    text-transform: lowercase;
    font-size: $font-size-0;
    justify-content: space-around;
    margin: 0;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size-0-max;
    }
  }

  .base-nav:after {
    display: table;
    content: " ";
    clear: both;
  }

  .base-nav-item {
    list-style: none;
  }

  .base-nav-link {
    color: #1a2125;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 0.05em;
    padding: 0.5em 1em 0.3em;
    border-bottom: 0.2em solid transparent;
  }

  .base-nav-link:hover,
  .base-nav-link:active {
    background-color: #FFD438;
    color: #1a2125;
  }

  .base-nav-link--current {
    border-color: #1a2125;
  }
</style>