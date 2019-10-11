<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="media">
        <div class="media-left">
          <dp-user
            :user="post.user"
          />
        </div>
        <div class="media-body">
          {{ post.content }}

          <hr>

          <dp-comment
            :comment="comment"
            :key="comment.id"
            v-for="comment in post.comments"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import DpComment from './DpComment.vue';
import DpUser from './DpUser.vue';

export default {
  name: 'DpPost',

  components: {
    DpUser,
    DpComment,
  },

  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>
