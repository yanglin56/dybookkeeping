<template>
  <div class="money-wrapper">
    <NumberPad />
    <Notes />
    <Tags :dataSource="tags" />
    <Types :xxx="1" />
  </div>
</template>

<script >
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'FruitBookkeepingMoney',
  components: { Tags, Notes, Types, NumberPad },
  data() {
    return {
      tags: ['衣服', '餐饮', '住宿', '出行', '彩票'],
    };
  },
};
</script>

<style lang="scss">
.money-wrapper {
  display: flex;
  flex-direction: column-reverse;
}
</style>

