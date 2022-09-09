import Icon from '@/components/Icon.vue';
<template>
  <div class="error-wrapper">
    <p>哎呀，当前页面不存在，请检查网络啦</p>
    <Icon name="error404" />
    <div>
      <router-link to="/home">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DybookkeepingNotFound",
};
</script>

<style lang="scss" scoped>
.error-wrapper {
  text-align: center;
  font: 24px;
  margin-top: 100px;
  > .icon {
    width: 10em;
    height: 10em;
    vertical-align: 0.15em;
    fill: currentColor;
    overflow: hidden;
    margin: 2em auto;
  }
}
</style>