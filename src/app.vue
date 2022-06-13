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

<script lang="ts">
import { defineComponent } from 'vue';
import BaseHeader from './components/base-header.vue';
import BaseFooter from './components/base-footer.vue';
import ArticleHeader from './components/article-header.vue';

export default defineComponent({
  components: {
    BaseHeader,
    BaseFooter,
    ArticleHeader
  },
  setup() {
  }
});
</script>


<style lang="scss">
  @import "src/components/_variables.scss";
  @import "src/components/_fonts.scss";
  @import "app.scss";
</style>