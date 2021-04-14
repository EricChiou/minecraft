<template>
  <div class="background"></div>
  <div id="mods">
    <Header></Header>
    <div class="mods-block">
      <div class="title">安裝模組列表</div>
      <div v-for="mod in mods" :key="mod.engName" class="mod-block">
        <img class="logo" :src="mod.logoUrl" />
        <div class="name">
          <span class="eng">{{ mod.engName }}</span>
          <span class="cht">{{ mod.chtName }}</span>
        </div>
        <div class="description">
          {{ mod.description }}
        </div>
        <a class="link" :href="mod.curseforgeLink" target="_blank"> CurseForge 連結 </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable max-len */
/* eslint-disable quotes */
import { defineComponent } from 'vue';

import Cons from '@/constants';

import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Mods',
  components: { Header },
  setup() {
    const mods = Cons.MODS;

    return { mods };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/breakpoint.scss';
@import '@/assets/css/theme.scss';

.background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('../assets/img/background_3.jpg');
  background-position: center;
  background-size: cover;
}

#mods {
  position: relative;
  padding: 20px 0 100px 0;
  min-height: calc(100vh - 120px);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);

  @include breakpoint(m) {
    padding: 60px 0;
  }

  .mods-block {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 0;
    width: calc(100% - 60px);
    max-width: 1140px;
    text-align: left;
    color: theme(indigo);
    background-color: theme(white);

    @include breakpoint(m) {
      margin-top: 15px;
      width: calc(100% - 30px);
    }

    @include breakpoint(s) {
      margin-top: 10px;
      width: calc(100% - 10px);
    }

    .title {
      font-size: 30px;
      font-weight: bold;
      text-align: center;

      @include breakpoint(m) {
        font-size: 26px;
      }

      @include breakpoint(s) {
        font-size: 22px;
      }
    }

    .mod-block {
      display: inline-block;
      margin: 5px;
      padding: 5px;
      width: calc(100% / 3 - 20px);
      text-align: left;
      color: theme(white);
      background-color: theme(indigo);
      vertical-align: top;
      box-shadow: 1px 1px 0px 0px theme(white, deep);

      @include breakpoint(l) {
        width: calc(100% / 2 - 20px);
      }

      @include breakpoint(m) {
        width: calc(100% - 20px);
      }

      .logo {
        display: inline-block;
        width: 64px;
        height: 64px;
        vertical-align: top;
      }

      .name {
        display: inline-block;
        margin-left: 5px;
        width: calc(100% - 69px);
        vertical-align: top;

        .eng,
        .cht {
          display: block;
          margin-top: 5px;
          width: 100%;
          font-size: 20px;
          font-weight: bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      .description {
        margin-top: 5px;
        height: 45px;
        font-size: 16px;
        overflow: hidden;
      }

      .link {
        display: inline-block;
        color: theme(white);
      }
    }
  }
}
</style>
