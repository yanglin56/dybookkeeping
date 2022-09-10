<template>
  <div class="money-wrapper">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
    <Types :value.sync="record.type" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; //数据类型
  createdAt?: Date; // 类 /构造函数
};

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ['衣服', '餐饮', '住宿', '出行', '彩票'];
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem('recordList') || '[]'
  );
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.money-wrapper {
  display: flex;
  flex-direction: column-reverse;
}
</style>

