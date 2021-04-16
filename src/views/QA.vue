<template>
  <div class="background"></div>
  <div id="qa">
    <Header></Header>
    <div class="title">問題與解答</div>
    <div class="questions">
      <StartGame></StartGame>
      <div class="separate"></div>
      <AddUser></AddUser>
      <div class="separate"></div>
      <Register></Register>
      <div class="separate"></div>
      <Lag></Lag>
      <div class="separate"></div>
      <Shift></Shift>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Cons from '@/constants';

import Header from '@/components/Header.vue';
import StartGame from '@/components/StartGame.vue';
import AddUser from '@/components/AddUser.vue';
import Register from '@/components/Register.vue';
import Lag from '@/components/Lag.vue';
import Shift from '@/components/Shift.vue';

export default defineComponent({
  name: 'Mods',
  components: { Header, StartGame, AddUser, Register, Lag, Shift },
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
  background-image: url('../assets/img/background_4.jpg');
  background-position: center;
  background-size: cover;
}

#qa {
  position: relative;
  padding: 20px 0 100px 0;
  min-height: calc(100vh - 120px);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);

  @include breakpoint(m) {
    padding: 60px 0;
  }

  .title {
    margin: 15px 0 5px 0;
    font-size: 32px;
    font-weight: bold;
    color: theme(white);
  }

  .questions {
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
