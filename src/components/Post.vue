<template>
  <b-col class="d-flex">
    <b-card
      tag="article"
      style="width: 320px; margin: 0 auto"
      class="mb-2"
      :title="post.title"
      :footer="post.author"
      footer-tag="footer"
    >
      <b-card-text>{{ post.body }} </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["post"],
};
</script>
