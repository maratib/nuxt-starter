<template>
  <div>
    <h1 class="prose text-red-600">Admin page</h1>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Admin Movies'
})
definePageMeta({
  layout: 'admin',
});

</script>

