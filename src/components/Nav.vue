<template>
  <nav>
    <router-link to="/home" class="item" active-class="selected">
      <Icon name="home" />
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
    <router-link to="/profile" class="item" active-class="selected">
      <Icon name="profile" />
      我的
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>