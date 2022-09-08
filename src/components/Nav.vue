<template>
  <div class="nav">
    <router-link to="/home">
      <Icon name="home" />
      记账</router-link
    >
    ｜
    <router-link to="/statistics">
      <Icon name="statistics" />
      统计</router-link
    >
    ｜
    <router-link to="/profile">
      <Icon name="profile" />
      我的</router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>