<template>
  <div class="header-layout">
    <img src="../assets/images/logo.png" alt="" class="pc">
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderLayout",
  setup() {
    return {};
  },
});
</script>
 
<style scoped lang="scss">
.header-layout {
  // padding-left: 20px;
  // padding-right: 20px;
  display: flex;
  height: 100px;
  // background-color: beige;
  justify-content: space-between;
  align-items: center;
  .pc {
    display: block;
  }
  img {
    width: 110px;
    height: 100px;
  }
}
@media screen and (max-width: 726px) {
  .header-layout {
    position: relative;
    width: 100%;
    .pc {
      display: none;
    }
  }
}
// @import './index.scss';
</style>