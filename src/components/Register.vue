<template>
  <div class="register">
    <div class="title" @click="toggleExpand">
      <Shrink v-if="!state.expand" class="icon"></Shrink>
      <Expand v-if="state.expand" class="icon"></Expand>
      <span class="text">在遊戲中<span style="color: red">註冊</span>玩家名稱</span>
    </div>
    <div v-if="state.expand" class="content">
      <div class="step">
        第一次進入遊戲時，需輸入 "/register 密碼 確認密碼"，來註冊玩家名稱。<br />
        e.g. /register 1234 1234
      </div>
      <div class="step">
        <img class="img" src="@/assets/img/register.png" />
      </div>
      <div class="step">之後進入遊戲時輸入 "/login 密碼" 進行登入。<br />e.g. /login 1234</div>
      <div class="step">
        <img class="img" src="@/assets/img/login.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

import Shrink from '@/components/icons/Shrink.vue';
import Expand from '@/components/icons/Expand.vue';

export default defineComponent({
  name: 'Register',
  components: { Shrink, Expand },
  setup() {
    const state = reactive({
      expand: false,
    });

    const toggleExpand = () => {
      state.expand = !state.expand;
    };

    return {
      state,
      toggleExpand,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/breakpoint.scss';
@import '@/assets/css/theme.scss';

.register {
  padding: 10px 15px;
  color: theme(indigo);
  background-color: theme(white);

  @include breakpoint(m) {
    padding: 8px 10px;
  }

  @include breakpoint(s) {
    padding: 3px 5px;
  }

  .title {
    font-size: 26px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;

    @include breakpoint(m) {
      font-size: 24px;
    }

    @include breakpoint(s) {
      font-size: 22px;
    }

    .icon,
    .text {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .content {
    text-align: left;

    .step {
      margin-top: 10px;
      font-size: 22px;

      @include breakpoint(m) {
        font-size: 20px;
      }

      @include breakpoint(s) {
        font-size: 18px;
      }

      .img {
        display: block;
        max-width: 100%;
      }
    }
  }
}
</style>
