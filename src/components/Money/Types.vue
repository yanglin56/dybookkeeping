<template>
  <div>
    <ul class="types">
      <li><router-link to="/home">取消</router-link></li>
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-'; //'-'表示支出 '+'表示收入
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  text-align: center;
  font-size: 24px;
  height: 64px;
  align-items: center;
  justify-content: space-around;
  background: #c4c4c4;
  > li {
    width: 20%;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #333;
    }
  }
}
</style>
