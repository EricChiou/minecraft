<template>
  <div id="header">
    <div class="content">
      <div class="logo">
        <img class="img" src="@/assets/img/logo.png" />
        <span class="text">
          <div class="line-one">Calico & MooMoo</div>
          <div class="line-two">Minecarft Server</div>
        </span>
      </div>
      <div v-if="state.showMenu" class="menu">
        <div class="vert-align-mid"></div>
        <div class="option">
          <Downloads class="icon"></Downloads>
          <div class="text">DOWNLOADS</div>
        </div>
        <div class="option">
          <Mods class="icon"></Mods>
          <div class="text">MODS</div>
        </div>
        <div class="option">
          <QA class="icon"></QA>
          <div class="text">Q&A</div>
        </div>
      </div>
      <div class="menu-btn">
        <div class="vert-align-mid"></div>
        <Menu class="icon" @click="toggleMenu"></Menu>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';

import Downloads from '@/components/icons/Downloads.vue';
import Mods from '@/components/icons/Mods.vue';
import QA from '@/components/icons/QA.vue';
import Menu from '@/components/icons/Menu.vue';

export default defineComponent({
  name: 'Header',
  components: { Downloads, Mods, QA, Menu },
  setup() {
    const state = reactive({
      showMenu: window.innerWidth > 767,
    });

    const resize = () => {
      state.showMenu = window.innerWidth > 767;
    };

    onMounted(() => {
      window.addEventListener('resize', resize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resize);
    });

    const toggleMenu = () => {
      state.showMenu = !state.showMenu;
    };

    return {
      state,
      toggleMenu,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/rwd.scss';
@import '@/assets/css/theme.scss';

#header {
  position: fixed;
  top: 20px;
  right: 0;
  left: 0;
  height: 80px;
  text-align: center;
  background-color: theme(blue);
  z-index: 999;

  @include breakpoint(m) {
    top: 0;
    height: 60px;
  }

  .content {
    display: inline-block;
    position: relative;
    margin: 0 10px;
    width: calc(100% - 20px);
    height: 100%;
    max-width: 1200px;

    .logo {
      float: left;
      height: 100%;

      .img,
      .text {
        display: inline-block;
        vertical-align: middle;
      }

      .img {
        margin: 10px 0;
        height: calc(100% - 20px);
      }

      .text {
        margin-left: 15px;
        font-size: 26px;
        font-weight: bold;
        font-style: italic;
        text-align: left;
        color: theme(white);

        .line-two {
          margin-left: 20px;
        }

        @include breakpoint(m) {
          font-size: 22px;
        }
      }
    }

    .menu {
      float: right;
      height: 100%;

      @include breakpoint(m) {
        position: absolute;
        top: 100%;
        right: -10px;
        width: 299px;
        height: calc(100vh - 60px);
        text-align: left;
        background-color: theme(white);

        .vert-align-mid {
          display: none;
        }
      }

      .option {
        display: inline-block;
        margin-left: 80px;
        color: theme(indigo);
        vertical-align: middle;
        cursor: pointer;

        &:hover {
          .text {
            color: theme(yellow);
          }
        }

        @include breakpoint(l) {
          margin-left: 30px;
        }

        @include breakpoint(m) {
          display: block;
          margin-left: 0;
          padding: 10px 15px;
          border-bottom: 1px solid theme(white, deep);
        }

        .icon {
          display: inline-block;
          width: 40px;
          height: 40px;
          vertical-align: middle;
        }

        .text {
          display: inline-block;
          margin-left: 5px;
          font-size: 26px;
          font-weight: bold;
          color: theme(white);
          vertical-align: middle;

          @include breakpoint(m) {
            color: theme(indigo);
          }
        }
      }
    }

    .menu-btn {
      display: none;
      float: right;
      height: 100%;

      @include breakpoint(m) {
        display: block;
      }

      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        color: theme(indigo);
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
}
</style>
