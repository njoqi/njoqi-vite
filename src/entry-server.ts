import { createApp } from './main';
import { renderToString } from '@vue/server-renderer';
import { RouteLocationRaw } from 'vue-router';

export async function render(url: RouteLocationRaw, manifest: any) {
  const { app, router } = createApp();

  // Set the router to the desired URL before rendering
  router.push(url);
  await router.isReady();

  // Passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {};
  const html = await renderToString(app, ctx);

  return html;
}