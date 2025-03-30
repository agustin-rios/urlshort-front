<template>
  <div>
    <h1>URL Shortener</h1>
    <UrlForm />
    <UrlList />
  </div>
</template>

<script setup lang="ts">
import UrlForm from './components/UrlForm.vue';
import UrlList from './components/UrlList.vue';
</script>
