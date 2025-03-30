<template>
  <div>
    <input v-model="url" placeholder="Enter long URL" class="input" />
    <button @click="handleSubmit">Shorten</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createUrl, getUrlByCodeLink } from '../api/urlService';

const url = ref('');
const message = ref('');

const handleSubmit = async () => {
  try {
    const { data: {data} } = await createUrl(url.value);
    message.value = `Shortened URL created! Code: ${data.code} Link: ${getUrlByCodeLink(data.code)}`;
    url.value = '';
  } catch (error: any) {
    message.value = error.response?.data?.message || 'Something went wrong';
  }
};
</script>
