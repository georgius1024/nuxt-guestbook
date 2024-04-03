<template>
  <section>
    <h1>Guestbook</h1>
    <div v-if="loading">Loading ...</div>
    <ul v-else>
      <li
        v-for="post in posts"
        :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
    <hr />
    <NuxtLink
      to="/posts/add"
      role="button"
      tabindex="0"
      class="outline w-100"
      >Add post</NuxtLink
    >
  </section>
</template>
<script setup>
  const { data: posts, pending: loading } = await useFetch("/api/posts", {
    lazy: true,
  });
</script>
