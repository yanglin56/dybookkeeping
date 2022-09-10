<template>
  <div class="money-wrapper">
    <NumberPad />
    <Notes />
    <Tags />
    <Types xxx="hi" />
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'

export default {
  name: 'FruitBookkeepingMoney',
  components: { Tags, Notes, Types, NumberPad },
}
</script>

<style lang="scss">
.money-wrapper {
  display: flex;
  flex-direction: column-reverse;
}
</style>

