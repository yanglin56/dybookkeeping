<template>
  <div class="numberPad">
    <div class="output">
      <span class="date">当前日期</span>
      <span class="sum">0.00</span>
    </div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button class="zero">0</button>
      <button>清空</button>
      <button class="ok">保存</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DybookkeepingNumberPad',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-family: Consolas, monospace;
    padding: 14px 16px;
    text-align: right;
    > .sum {
      font-size: 36px;
    }
    > .date {
      float: left;
      margin-top: 40px;
    }
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: 1px solid gainsboro;
      &.ok {
        float: right;
      }
    }
  }
}
</style>