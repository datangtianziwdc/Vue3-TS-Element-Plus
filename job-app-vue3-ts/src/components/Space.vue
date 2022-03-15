<template>
  <div :style="[{'width':width+'px'},{'height':height+'px'}]">
    <!-- <div style="width:20px;"> -->
  </div>
</template>
<script lang="ts">
// import { ref } from "vue";
import { defineComponent } from 'vue';
export default defineComponent ({
  name:'Space',
  props:{
    width:{
      type:String,
      default:"1"
    },
    height:{
      type:String,
      default:"1"
    }
  },
  setup () {
    // const _width = ref(props.width);
    // return {_width}
  }
})
</script>
 
<style scoped lang="scss">
// @import './index.scss';
</style>