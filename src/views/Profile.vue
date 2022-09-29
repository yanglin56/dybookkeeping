import Layout from '@/components/Layout.vue';
<template>
  <div>
    <Layout>
      <p>你好，Profile</p>
      <div>
        <AccountInfo />
        <div>已连续打卡</div>
        <div>记账总天数</div>
        <div>记账总笔数</div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccountInfo from '@/components/AccountInfo.vue';
import { Component, Watch } from 'vue-property-decorator';

@Component({
  components: { AccountInfo },
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
</style>