<template>
  <div class="money-wrapper">
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
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请在这里输入备注" />
      </label>
    </div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣服</li>
        <li>住宿</li>
        <li>餐饮</li>
        <li>出行</li>
      </ul>
    </div>
    <div>
      <ul class="types">
        <li class="selected">收入</li>
        <li class="selected">支出</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FruitBookkeepingMoney',
}
</script>

<style lang="scss">
.money-wrapper {
  display: flex;
  flex-direction: column-reverse;
}
</style>
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
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      widows: 100%;
      height: 4px;
      background: #333;
    }
  }
}
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
.tags {
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  height: 366px;
  > .current {
    display: flex;
    height: 318px;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: center;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: calc($h / 2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 8px;
    }
  }
  > .new {
    border: 1px solid red;
    padding-top: 16px;
    button {
      border: 1px solid green;
      background: transparent;
      border: none;
      color: #999;
      border: 1px solid;
      padding: 4px 8px;
    }
  }
}
</style>
