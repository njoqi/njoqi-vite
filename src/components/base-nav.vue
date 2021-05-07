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
        path: '/thoughts',
        name: 'Thoughts'
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
    max-width: $text-max-width;
    margin: 1em auto 2em;
  }

  @media all and (min-width: 42rem) {
    .base-nav {
      padding: 0;
    }
  }

  .base-nav-list {
    text-transform: lowercase;
    font-size: $font-size--1;
    margin: 0 2em;

    @media screen and (min-width: $content-max-width) {
      font-size: $font-size--1-max;
    }

    @media screen and (min-width: $nav-min-width) {
      display: flex;
      justify-content: right;
      flex-wrap: wrap;
      border-right: 0.125em solid $color-text;
    }
  }

  .base-nav-item {
    list-style: none;

    @media screen and (min-width: $nav-min-width) {
      border: 0.125em solid $color-text;
      border-right-width: 0;
    }
  }

  .base-nav-link {
    color: #1a2125;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 0.05em;
    border-bottom: 0.2em solid transparent;
    padding: 0.2em 0.5em 0.1em;
    transition: background-color 0.1s;

    @media screen and (min-width: $nav-min-width) {
      padding: 0.5em 1em 0.3em;
    }
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