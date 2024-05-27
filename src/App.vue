<template>
  <SiteNavigation>

    <div class="flex flex-col min-h-screen font-Roboto bg-slate-200 dark:bg-slate-800">
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </RouterView>
        <FooterApp />
    </div>
  </SiteNavigation>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import FooterApp from "./components/FooterApp.vue";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    
</script>

<style >
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>