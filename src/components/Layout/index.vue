<template>
  <div class="Layout">
    <router-view class="content"></router-view>
    <!-- <van-tabbar route>
      <van-tabbar-item v-for="(item, index) in menu" :key="index" :to="item.path">{{
        item.name.split('?')[0] }}</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>


<script lang="ts" setup>
import { getRouter } from '@/router'
let menu = $ref(getRouter())
console.log(menu);
</script>
<style lang="scss" scoped>
.Layout {
  width: 100%;
  height: 100%;

  >.content {
    width: 100%;
    overflow: overlay;
    // padding-bottom: 50px;
  }
}
</style>
