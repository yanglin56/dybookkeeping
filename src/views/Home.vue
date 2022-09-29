<template >
  <Layout classPrefix="layout">
    <div class="title">你好，欢迎回来！</div>
    <AccountInfo />
    <div class="total">
      明细
      <router-link to="/money" class="add">
        <Icon name="add" />
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import Money from './Money.vue';
import AccountInfo from '../components/AccountInfo.vue';
export default {
  name: 'FruitBookkeepingHome',
  components: { Money, AccountInfo },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.layout-content {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  position: relative;
  > .title {
    text-align: center;
    padding-top: 20px;
  }
}
.subtotal {
  @extend %outerShadow;
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 140px;
  background: $color-highlight;
  margin: 20px;
  border-radius: 18px;
  padding-top: 40px;
  div {
    // margin-top: 40px;
  }
}

.total {
  width: 100%;
  height: 60%;
  border: 2px solid red;
  position: relative;
  top: 200px;
  > .add {
    position: absolute;
    right: 16px;
    top: 450px;
    > .icon {
      width: 3em;
      height: 3em;
      vertical-align: 0.15em;
      fill: currentColor;
      overflow: hidden;
      color: rgb(88, 191, 77);
    }
  }
}
</style>