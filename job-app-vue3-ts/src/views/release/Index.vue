<template>
  <div class="index-page">
    <div :class="[scollTop>100?'show header':'none']">
      <el-row align="middle">
        <el-col :span="12">
          <div class="grid-content bg-purple" />
          <el-input v-model="input" placeholder="招聘季月薪10000+" />
        </el-col>
        <el-col :span="6">
          <el-button type="primary" color="#626aef">搜索</el-button>
        </el-col>
        <el-col :span="6">
          <el-row align="middle" justify="end">
            <div>共16666条结果</div>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <HeaderLayout>
      <template #center>
        <Space width="200" />
        <el-input v-model="input" placeholder="招聘季月薪10000+" size="large" />
        <Space width="20" />
        <el-button type="primary" size="large" color="#626aef">搜索</el-button>
        <Space width="200" />
      </template>
      <template #right>
        <el-button type="primary" size="large" color="#626aef">返回大厅</el-button>
      </template>
    </HeaderLayout>
  </div>
</template>
<script lang="ts">
import {
  reactive,
  onMounted,
  defineComponent,
  toRefs,
} from "vue";
import HeaderLayout from "@/components/HeaderLayout.vue";
import Space from "@/components/Space.vue";
export default defineComponent({
  components: {
    HeaderLayout,
    Space,
  },
  setup() {
    onMounted(() => {
      console.log('组件安装')
    });
    return {
    };
  },
});
</script>
<style lang="scss" scoped>
.index-page {
  position: relative;
  width: 60%;
  left: 20%;
  .header {
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba($color: #626aef, $alpha: 0.7);
    z-index: 999;
    padding: 20px 20%;
  }
  .none {
    display: none;
  }
  .show {
    display: block;
  }
  .classify {
    margin-top: 20px;
    font-size: 14px;
  }
  .item-container {
    text-align: start;
    border-top: 1px solid rgb(245, 243, 243);
    border-bottom: 1px solid rgb(245, 243, 243);
    padding: 16px;
    &:hover {
      background-color: rgba($color: #b8b3b3, $alpha: 0.1);
    }
  }
  .ad-title {
    padding: 10px;
  }
  .ad-container {
    text-align: start;
    .ad-image {
      img {
        width: 100%;
        padding-left: 10px;
        height: auto;
      }
    }
    .ad-item {
      padding: 6px 10px;
      &:hover {
        background-color: rgba($color: #b8b3b3, $alpha: 0.1);
      }
    }
  }
}
</style>