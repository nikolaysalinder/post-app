<template>
  <div class="home">
    <b-nav align="center">
      <b-nav-form>
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            v-model="search"
            type="search"
            placeholder="Введите Имя"
          ></b-form-input>
        </b-input-group>
      </b-nav-form>
    </b-nav>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <Post v-for="post in posts" :post="post" :key="post.id"></Post>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";
export default {
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  components: {
    Post,
  },
  created() {
    this.$store.dispatch("initPosts");
  },
  computed: {
    posts() {
      let posts = this.$store.getters.getPosts;
      if (this.search) {
        return posts.filter((post) => {
          return (
            post.author.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        return posts;
      }
    },
  },
};
</script>

<style>
div {
  /*outline: 1px solid green;*/
}
</style>
