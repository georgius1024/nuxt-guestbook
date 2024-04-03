<template>
  <article>
    <header><h1>Add post</h1></header>
    <input
      v-model="title"
      type="text"
      name="title"
      placeholder="Add title" />
    <textarea
      v-model="text"
      name="text"
      placeholder="Add some text"></textarea>
    <input
      v-model="author"
      type="text"
      name="author"
      placeholder="Add your name" />

    <footer>
      <button
        :disabled="saving"
        class="outline w-100"
        @click="add">
        Add
      </button>
    </footer>
  </article>
</template>
<script setup>
  const title = ref("");
  const text = ref("");
  const author = ref("");
  const add = async () => {
    const { pending: loading } = await useFetch("/api/posts", {
      method: "post",
      body: { title: title.value, text: text.value, author: author.value },
    });
    navigateTo("/");
  };
</script>
