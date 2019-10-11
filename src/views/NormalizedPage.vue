<template>
  <div>
    <h1>Normalized posts</h1>

    <dp-post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="margin-top-2"
    />
  </div>
</template>

<script>
import { denormalize, normalize } from 'normalizr';
import DpPost from '../components/DpPost.vue';
import { generatePosts } from '../generators/post';
import { postCollectionSchema } from '../schema/postSchema';

export default {
  name: 'NormalizedPage',

  components: {
    DpPost,
  },

  computed: {
    posts() {
      const input = generatePosts();

      const {
        entities,
        result,
      } = normalize(input, postCollectionSchema);

      const output = denormalize(result, postCollectionSchema, entities);

      return output;
    },
  },
};
</script>
