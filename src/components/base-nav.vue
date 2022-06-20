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

<script setup lang="ts">
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
</script>

<style lang="scss">
  @import "src/components/_variables.scss";
  
  .base-nav {
    padding-left: 1em;
  }

  .base-nav-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-transform: lowercase;
    font-size: $font-size--1;

    @media screen and (min-width: $text-max-width) {
      font-size: $font-size--1-max;
    }

    @media screen and (min-width: $nav-min-width) {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: right;
    }
  }

  .base-nav-item {
    display: inline-flex;
    width: 8em;
    list-style: none;
    margin: 0;
    border: 0.175rem solid $color-text;
    border-bottom-style: none;

    @media screen and (min-width: $nav-min-width) {
      width: auto;
      border-bottom-style: solid;
      border-right-style: none;
    }
  }

  .base-nav-item:last-child {
    border-bottom-style: solid;

    @media screen and (min-width: $nav-min-width) {
      border-right-style: solid;
    }
  }

  .base-nav-item:before {
    content: none;
  }

  .base-nav-link {
    color: $color-text;
    flex-grow: 1;
    text-decoration: none;
    letter-spacing: 0.05em;
    padding: 0.4em 0.6em 0.3em;
    transition: background-color 0.1s;
  }

  .base-nav-link:hover,
  .base-nav-link:focus {
    background-color: $color-light;
    box-shadow: 0 0 0 0.02em $color-light;
    color: $color-text;
  }

  .base-nav-link--current {
    background-color: $color-text;
    box-shadow: 0 0 0 1px $color-text;
    color: $color-light;
  }
</style>