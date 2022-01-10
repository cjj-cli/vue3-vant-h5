<template>
  <div>
    home
    <van-button type="primary" @click="toPost">主要按钮</van-button>
    <van-button type="primary" @click="toDownload">下载</van-button>
    <div class="container"></div>
    <div class="container2"></div>
  </div>
</template>

<script lang="ts" setup>
import { testGet, testPost } from '@/api/test';
import { downloadFile1 } from '@/api/download';

async function getData() {
  const { data } = await testGet({
    id: '1',
  });
  console.log('getData', data);
}

getData();

async function toPost() {
  const { data } = await testPost({
    name: 'ccc',
    id: 1,
  });

  console.log('testPost', data.list);
}

function toDownload() {
  downloadFile1(
    {
      id: '1',
      name: 'sss',
    },
    {
      type: 'download',
    }
  );
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
