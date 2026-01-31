<template>
  <div class="min-h-screen flex flex-col gap-4 items-center justify-center bg-[#020420] text-white">
    <h1 class="text-4xl font-bold">
      Welcome to Nuxt Electron App
    </h1>
    <div class="flex flex-row items-center gap-4">
      <img class="h-24 w-24" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nuxt-js-icon.png" alt="nuxt logo">
      <h1 class="text-6xl font-bold">
        +
      </h1>
      <img class="h-20 w-20" src="https://www.electronjs.org/assets/img/logo.svg" alt="electron logo">
    </div>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
      defer: true
    }
  ]
})
</script>