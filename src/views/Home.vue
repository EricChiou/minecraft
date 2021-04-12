<template>
  <div id="home">
    <div class="mask"></div>
    <div class="content">
      <div class="welcome-container">
        <div class="welcome-block">
          <div class="title">
            <div class="text">歡迎來到 Calico & MooMoo</div>
            <div class="text">Minecraft 伺服器</div>
          </div>
          <div class="get">
            <button class="get-btn">取得客戶端</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/rwd.scss';
@import '@/assets/css/theme.scss';

#home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/background_1.jpg');
  background-size: cover;
  text-align: center;

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .welcome-container {
      padding-top: 100px;
      overflow: auto;

      @include breakpoint(m) {
        padding-top: 60px;
      }

      .welcome-block {
        display: inline-block;
        padding: 30px 45px;
        width: calc(100% - 90px);
        max-width: 1200px;
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
            color: theme(white);
            background-color: theme(green);
            border: none;
            cursor: pointer;
            box-shadow: 1px 1px 0px 0px theme(white, deep);

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
  }
}
</style>
