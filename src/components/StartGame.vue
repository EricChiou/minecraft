<template>
  <div class="add-user">
    <div class="title" @click="toggleExpand">
      <Shrink v-if="!state.expand" class="icon"></Shrink>
      <Expand v-if="state.expand" class="icon"></Expand>
      <span class="text">如何開始遊戲</span>
    </div>
    <div v-if="state.expand" class="content">
      <div class="step">下載客戶端檔案之後解壓縮，執行 Minecraft.exe 即可開始遊戲。</div>
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
