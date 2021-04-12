<template>
  <Header></Header>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: { Header },
});
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

html,
body {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Inconsolata', 'Microsoft JhengHei', Arial, Helvetica, sans-serif, monospace;
  overflow: auto;
}

.vert-align-mid {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
}
</style>
