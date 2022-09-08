<template>
  <div>
    哎呀，当前页面不存在，请检查网址是否正确
    <div>
      <router-link to="/home">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DybookkeepingNotFound",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>