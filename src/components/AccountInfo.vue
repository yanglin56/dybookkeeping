<template>
  <div class="info-wrapper">
    <div class="expend">
      <span class="textDown">{{ 0.0 }}</span>
      <span class="textUp">收入</span>
    </div>
    <div class="dateSelector"></div>
    <div class="income">
      <span class="textDown">{{ 0.0 }}</span>
      <span class="textUp">支出</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components: { Icon },
})
export default class AccountInfo extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.info-wrapper {
  @extend %outerShadow;
  background: $color-highlight;
  display: flex;
  position: absolute;
  justify-content: space-around;
  width: 90%;
  height: 140px;
  margin: 20px;
  border-radius: 18px;
  padding-top: 40px;
  // margin: auto 0;
  > .dateSelector {
    display: flex;
    flex-direction: column;
    border-right: 1px solid white;
    height: 50%;
    margin: auto 0;
    text-align: center;
  }
  > .expend,
  .income {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
  }
  .textUp {
    font-size: 16px;
  }
  .textDown {
    font-size: 20px;
  }
}
</style>