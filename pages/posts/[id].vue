<template>
  <div v-if="loading">Loading...</div>
  <article v-else>
    <header><h1 style="text-align: center;">{{post.title}}</h1></header>
    {{ post.text }}
    <hr>
    <div style="text-align: center;"><small>{{ post.author }}</small></div>
    <footer>
      <NuxtLink to="/" role="button" tabindex="0" class="outline w-100">Return</NuxtLink>
    </footer>
  </article>
</template>
<script setup>
const route = useRoute()
  const {id} = route.params 
  const { data: post, pending: loading } = await useFetch(`/api/posts/${id}`, {
    lazy: true,
  });
</script>
