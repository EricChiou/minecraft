<template>
  <div class="add-user">
    <div class="title" @click="toggleExpand">
      <Shrink v-if="!state.expand" class="icon"></Shrink>
      <Expand v-if="state.expand" class="icon"></Expand>
      <span class="text">遊戲好 Lag 怎麼辦</span>
    </div>
    <div v-if="state.expand" class="content">
      <div class="step">為了提高遊戲品質，遊戲預設載入了高畫質材質包以及光影模式。</div>
      <div class="step">從遊戲選單 > 選項 > 顯示設定 > 光影 > 選擇關閉 > 完成，即可關閉光影。</div>
      <div class="step">從遊戲選單 > 選項 > 資源包 > 將已選擇材質包移至左方，例如：Soartex_Faver_(8.0.2).zip，即可關閉材質包。</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

import Shrink from '@/components/icons/Shrink.vue';
import Expand from '@/components/icons/Expand.vue';

export default defineComponent({
  name: 'StartGame',
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

.add-user {
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
        width: 100%;
      }
    }
  }
}
</style>
