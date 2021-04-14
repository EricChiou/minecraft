<template>
  <div class="background"></div>
  <div id="map">
    <Header></Header>
    <iframe class="map-block" :src="mapUrl"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Cons from '@/constants';

import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Map',
  components: { Header },
  setup() {
    return {
      mapUrl: Cons.MAP_URL,
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
  background-image: url('../assets/img/background_2.jpg');
  background-position: center;
  background-size: cover;
}

#map {
  position: relative;
  padding-top: 20px;
  height: calc(100vh - 20px);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);

  @include breakpoint(m) {
    padding-top: 0;
    height: 100vh;
  }

  .map-block {
    display: inline-block;
    width: 100%;
    height: calc(100% - 100px);
    border: none;

    @include breakpoint(m) {
      margin-top: 60px;
      height: calc(100% - 60px);
    }
  }
}
</style>
