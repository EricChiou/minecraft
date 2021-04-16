<template>
  <div class="shift">
    <div class="title" @click="toggleExpand">
      <Shrink v-if="!state.expand" class="icon"></Shrink>
      <Expand v-if="state.expand" class="icon"></Expand>
      <span class="text">按蹲下（Shift）會切換輸入法導致無法控制</span>
    </div>
    <div v-if="state.expand" class="content">
      <div class="step">在 Windows 10 中按下左邊 Shift 會切換輸入法，導致在遊戲中無法控制。</div>
      <div class="step">比較建議的解法是將左邊 Shift 切換輸入法的快捷鍵取消。</div>
      <div class="step">
        Step 1：在開始列右下角的輸入法圖示點滑鼠右鍵，選擇內容。
        <img class="img" src="@/assets/img/shift_step1.png" />
      </div>
      <div class="step">
        Step 2：上方選擇進階後點選"使用左側 Shift 鍵"，下方選擇"無"，最後按確定即可。
        <img class="img" src="@/assets/img/shift_step2.png" />
      </div>
      <div class="step">之後仍可使用右側 Shift 鍵區換輸入法，只是需要點時間習慣。</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

import Shrink from '@/components/icons/Shrink.vue';
import Expand from '@/components/icons/Expand.vue';

export default defineComponent({
  name: 'Shift',
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

.shift {
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

    .text {
      width: calc(100% - 24px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
