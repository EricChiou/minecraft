<template>
  <div class="background"></div>
  <div id="home">
    <Header></Header>
    <Welcome></Welcome>
    <br />
    <br class="margin-top" />
    <div class="news">
      <AddUser></AddUser>
      <div class="separate"></div>
      <Register></Register>
    </div>
    <br />
    <div></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

import Header from '@/components/Header.vue';
import Welcome from '@/components/Welcome.vue';
import AddUser from '@/components/AddUser.vue';
import Register from '@/components/Register.vue';

export default defineComponent({
  name: 'Home',
  components: { Header, Welcome, AddUser, Register },
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

.background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('../assets/img/background_1.jpg');
  background-position: center;
  background-size: cover;
}

#home {
  position: relative;
  padding: 20px 0 100px 0;
  min-height: calc(100vh - 120px);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);

  @include breakpoint(m) {
    padding: 60px 0;
  }

  .margin-top {
    @include breakpoint(m) {
      display: none;
    }
  }

  .news {
    display: inline-block;
    width: calc(100% - 60px);
    max-width: 1110px;

    @include breakpoint(m) {
      width: calc(100% - 30px);
    }

    @include breakpoint(s) {
      width: calc(100% - 20px);
    }

    .separate {
      height: 10px;
    }
  }
}
</style>
