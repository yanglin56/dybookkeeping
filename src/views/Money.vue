<template>
  <div>
    <div class="tags">
      <ul class="current">
        <li>衣服</li>
        <li>住宿</li>
        <li>餐饮</li>
        <li>出行</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" />
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">收入</li>
        <li>支出</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">0.00</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>ok</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FruitBookkeepingMoney",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>