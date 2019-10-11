<template>
  <div>
    <h1>Normalized posts with Vuex</h1>

    <dp-post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="margin-top-2"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DpPost from '../components/DpPost.vue';
import {
  ACTION_LOAD_POSTS,
  GETTER_WALL_POSTS,
  MODULE_WALL,
} from '../store/modules/wall';

export default {
  name: 'VuexNormalizedPage',

  components: {
    DpPost,
  },

  computed: {
    ...mapGetters(MODULE_WALL, {
      posts: GETTER_WALL_POSTS,
    }),
  },

  created() {
    if (this.posts.length === 0) {
      this.loadPosts();
    }
  },

  methods: {
    ...mapActions(MODULE_WALL, {
      loadPosts: ACTION_LOAD_POSTS,
    }),
  },
};
</script>
