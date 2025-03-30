<template>
  <div>
    <h2>All URLs</h2>
    <ul>
      <li v-for="u in urls" :key="u.code">
        <strong>{{ u.code }}</strong> - Clicks: {{ u.clicks }} - Expires: {{ new Date(u.expiresAt).toLocaleString() }}
        <a :href="getUrlByCodeLink(u.code)" target="_blank" rel="noopener">
          Open
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllUrls, getUrlByCodeLink } from '../api/urlService';

const urls = ref<any[]>([]);

const fetchUrls = async () => {
  const {  data: {data} } = await getAllUrls();
  urls.value = data;
};

onMounted(fetchUrls);
</script>
