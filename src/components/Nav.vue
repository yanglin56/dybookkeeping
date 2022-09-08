<template>
  <div class="nav">
    <router-link to="/home">首页</router-link>
    ｜
    <router-link to="/labels">标签</router-link>
    ｜
    <router-link to="/profile">我的</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>