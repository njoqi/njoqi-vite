<template>
  <BaseHeader />
  <main class="base-main">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </main>
  <BaseFooter />
</template>

<script setup lang="ts">
  import BaseHeader from './components/base-header.vue';
  import BaseFooter from './components/base-footer.vue';
</script>


<style lang="scss">
  @import "src/components/_variables.scss";
  @import "src/components/_fonts.scss";
  @import "app.scss";
</style>