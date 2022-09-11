<template>
  <Layout classPrefix="layout">
    <div class="total">
      <p>列表</p>
      <router-link to="/money" class="add">
        <Icon name="add" />
      </router-link>
      <router-link to="/labels"> 标签 </router-link>
    </div>
    <div class="subtotal">
      <div>收入</div>
      <div>支出</div>
    </div>
    <div class="title">
      <span>你好，欢迎回来！</span>
    </div>
  </Layout>
</template>

<script lang="ts">
import Money from './Money.vue';
export default {
  name: 'FruitBookkeepingHome',
  components: { Money },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.subtotal {
  @extend %outerShadow;
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 140px;
  background: $color-highlight;
  margin: 10px auto;
  border-radius: 18px;
  padding: 10px 0;
}
.title {
  text-align: center;
  padding: 20px;
}
.total {
  width: 100%;
  height: 60%;
  border: 1px solid red;
  margin-top: 100px;
  position: relative;
  > .add {
    position: absolute;
    right: 16px;
    bottom: 60px;
    > .icon {
      width: 3em;
      height: 3em;
      vertical-align: 0.15em;
      fill: currentColor;
      overflow: hidden;
      color: green;
    }
  }
}
</style>