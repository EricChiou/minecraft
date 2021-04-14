<template>
  <div class="welcome-container">
    <div class="welcome-block">
      <div class="title">
        <div class="text">歡迎來到 Calico & MooMoo</div>
        <div class="text">Minecraft 伺服器</div>
      </div>
      <div class="get">
        <a class="get-btn" :href="fileUrl" target="_blank">下載客戶端</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Cons from '@/constants';

export default defineComponent({
  name: 'Welcome',
  setup() {
    return { fileUrl: Cons.CLIENT_FILE_URL };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/breakpoint.scss';
@import '@/assets/css/theme.scss';

.welcome-container {
  .welcome-block {
    display: inline-block;
    padding: 30px 45px;
    width: calc(100% - 90px);
    max-width: 1110px;
    background-color: theme(indigo, deep);

    @include breakpoint(m) {
      padding: 20px 30px;
      width: calc(100% - 60px);
    }

    @include breakpoint(s) {
      padding: 10px 15px;
      width: calc(100% - 30px);
    }

    .title {
      font-size: 42px;
      color: theme(white);

      @include breakpoint(m) {
        font-size: 30px;
      }

      @include breakpoint(s) {
        font-size: 22px;
      }

      .text {
        text-align: left;
        white-space: nowrap;
      }
    }

    .get {
      margin-top: -10px;
      text-align: right;

      @include breakpoint(m) {
        margin-top: -15px;
      }

      @include breakpoint(s) {
        margin-top: -20px;
      }

      .get-btn {
        padding: 10px 15px;
        font-size: 26px;
        text-decoration: none;
        color: theme(white);
        background-color: theme(green);
        border: none;
        box-shadow: 1px 1px 0px 0px theme(white, deep);
        cursor: pointer;

        @include breakpoint(m) {
          padding: 5px 10px;
          font-size: 20px;
        }

        @include breakpoint(s) {
          padding: 3px 5px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
