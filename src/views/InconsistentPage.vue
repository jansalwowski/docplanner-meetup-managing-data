<template>
  <div>
    <h1>Inconsistent posts</h1>

    <dp-post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="margin-top-2"
    />
  </div>
</template>

<script>
import DpPost from '../components/DpPost.vue';
import { generatePosts } from '../generators/post';

export default {
  name: 'InconsistentPage',

  components: {
    DpPost,
  },

  computed: {
    posts() {
      return generatePosts();
    },
  },
};
</script>
