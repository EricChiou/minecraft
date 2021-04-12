<template>
  <div id="header">
    <div class="home">
      <div class="logo">
        <img src="@/assets/img/logo.png" />
      </div>
      <div class="title">
        <div class="line-one">Calico & MooMoo</div>
        <div class="line-two">Minecarft Server</div>
      </div>
    </div>
    <div class="menu">
      <div class="vert-align-mid"></div>
      <div class="option">
        <Downloads></Downloads>
        <div class="text">DOWNLOADS</div>
      </div>
      <div class="option">
        <Mods></Mods>
        <div class="text">MODS</div>
      </div>
      <div class="option">
        <QA></QA>
        <div class="text">Q&A</div>
      </div>
    </div>
    <div class="menu-mobile">
      <div class="vert-align-mid"></div>
      <Menu @click="toggleMenu"></Menu>
      <div v-if="state.showMenu" class="option-list">
        <div class="option">
          <Downloads></Downloads>
          <div class="text">DOWNLOADS</div>
        </div>
        <div class="option">
          <Mods></Mods>
          <div class="text">MODS</div>
        </div>
        <div class="option">
          <QA></QA>
          <div class="text">Q&A</div>
        </div>
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
      showMenu: false,
    });

    const resize = () => {
      state.showMenu = false;
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
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  background-color: theme(blue);

  @include breakpoint(s) {
    height: 60px;
  }

  .home {
    float: left;
    margin-left: 100px;
    height: 100%;
    cursor: pointer;

    @include breakpoint(l) {
      margin-left: 15px;
    }

    @include breakpoint(s) {
      margin-left: 10px;
    }

    .logo,
    .title {
      display: inline-block;
    }

    .logo {
      height: 100%;
      vertical-align: middle;

      img {
        margin: 10px 0;
        height: calc(100% - 20px);
      }
    }

    .title {
      margin-left: 15px;
      font-size: 26px;
      font-weight: bold;
      font-style: italic;
      color: theme(white);
      vertical-align: middle;

      @include breakpoint(s) {
        font-size: 20px;
      }

      .line-two {
        margin-left: 20px;
      }
    }
  }

  .menu {
    float: right;
    margin-right: 100px;
    height: 100%;

    @include breakpoint(l) {
      margin-right: 15px;
    }

    @include breakpoint(m) {
      display: none;
    }

    .option {
      display: inline-block;
      margin-left: 50px;
      color: theme(indigo);
      vertical-align: middle;
      cursor: pointer;

      @include breakpoint(l) {
        margin-left: 20px;
      }

      &:hover {
        .text {
          color: theme(yellow);
        }
      }

      svg {
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
      }
    }
  }

  .menu-mobile {
    display: none;
    position: relative;
    float: right;
    margin-right: 10px;
    height: 100%;

    @include breakpoint(m) {
      display: block;
    }

    svg {
      display: inline-block;
      width: 40px;
      height: 40px;
      color: theme(indigo);
      vertical-align: middle;
      cursor: pointer;
    }

    .option-list {
      position: absolute;
      top: 100%;
      right: -10px;
      background-color: theme(white);
      border: 1px solid theme(white, deep);
      border-radius: 4px;

      .option {
        padding: 5px 8px;
        white-space: nowrap;
        cursor: pointer;

        svg {
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
          color: theme(indigo);
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
