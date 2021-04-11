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

<style lang="scss" scoped>
  .base-nav {
    padding: 0 1rem;
    max-width: 56rem;
    margin: 1rem auto 2rem;
  }

  @media all and (min-width: 42rem) {
    .base-nav {
      padding: 0 2rem;
    }
  }

  .base-nav-list {
    display: flex;
    float: right;
    text-transform: lowercase;
    font-size: 1rem;
    justify-content: space-around;
    margin: 0;
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
    padding: 0.5rem 1rem 0.2em;
    border-bottom: 0.3em solid transparent;
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