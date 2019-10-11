<template>
  <div class="user">
    <img
      :src="user.avatar"
      alt="Image"
      class="img-responsive img-circle"
      height="60"
      width="60"
    >

    <div class="name">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DpUser',

  props: {
    user: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss">
  .user {
    min-width: 100px;

    .name {
      margin-top: 10px;
    }
  }
</style>
