<template>
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
</template>

<script lang="ts">
export default {
  name: 'DybookkeepingTags',
}
</script>

<style lang="scss" scoped>
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
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border: 1px solid;
      padding: 4px 8px;
    }
  }
}
</style>