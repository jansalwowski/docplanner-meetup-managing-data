<template>
  <div class="well">
    <div class="media">
      <div class="media-left">
        <dp-user
          :user="comment.user"
        />
      </div>
      <div class="media-body">
        {{ comment.content }}
      </div>
    </div>

  </div>
</template>

<script>
import DpUser from './DpUser.vue';

export default {
  name: 'DpComment',
  components: { DpUser },
  props: {
    comment: {
      required: true,
      type: Object,
    },
  },
};
</script>
