<template>
  <div>
    <Layout>
      <div>
        <span>你好，欢迎回来！</span>
        <span>当天时间</span>
      </div>
      <div class="subtotal">
        <div>收入</div>
        <div>支出</div>
      </div>
      <div class="total">
        <p>列表</p>
        <Icon name="add" class="add" @click="addClick" />
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Money from "./Money.vue";
export default {
  name: "FruitBookkeepingHome",
  components: { Money },
  methods: {
    addClick() {
      console.log("跳转页面");
      // this.$router.push("/money");
    },
  },
};
</script>

<style lang="scss" scoped>
.icon.add {
  width: 4em;
  height: 4em;
  vertical-align: 0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>