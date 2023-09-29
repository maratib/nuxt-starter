<template>
  <div>
    <h1>Hello component</h1>
    <p>Msg : {{ msg }}</p>
  </div>
</template>

<script lang="ts" setup>

const { msg = 'Hello' } = defineProps<{ msg?: string }>();

</script>



<style></style>
