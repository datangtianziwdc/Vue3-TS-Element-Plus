<template>
  <div class="index-page">
    <HeaderLayout>
      <template #center>
        <Space width="200" />
        <el-input v-model="input" placeholder="招聘季月薪10000+" size="large" />
        <Space width="20" />
        <el-button type="primary" size="large" color="#626aef">搜索</el-button>
        <Space width="200" />
      </template>
      <template #right>
        <el-button type="primary" size="large" color="#626aef" @click="toIndex">返回大厅</el-button>
      </template>
    </HeaderLayout>
    <el-form :model="form" label-width="120px">
      <el-form-item label="职位名称">
        <el-input v-model="form.name" placeholder="请选输入职位名称" />
      </el-form-item>
      <el-form-item label="学历要求">
        <el-select v-model="form.education" placeholder="请选择学历要求">
          <el-option v-for="i in educationList" :key="i.id" :label="i.label" :value="i.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="经验要求">
        <el-select v-model="form.experience" placeholder="请选择经验要求">
          <el-option v-for="exp in experienceList" :key="exp.id" :label="exp.label" :value="exp.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="工资下限">
        <el-input v-model="form.wagesEnd" placeholder="请输入工资下限" />
      </el-form-item>
      <el-form-item label="工资上限">
        <el-input v-model="form.wagesStart" placeholder="请输入工资上限" />
      </el-form-item>
      <el-form-item label="薪资">
        <el-input v-model="form.wages" placeholder="请输入工资" />
      </el-form-item>
      <el-form-item label="福利待遇">
        <el-row align="middle">
          <el-checkbox v-for="(item,index) in welfareList" :key="index" v-model="welfareList[index].value" :label="item.label" />
        </el-row>
      </el-form-item>
      <el-form-item label="工作地点">
        <el-row justify="space-between">
          <el-select v-model="form.province" placeholder="请选择省">
            <el-option v-for="pro in provinceList" :key="pro.id" :label="pro.label" :value="pro.id" />
          </el-select>
          <Space width="10" />
          <el-select v-model="form.city" placeholder="请选择市">
            <el-option v-for="c in cityList" :key="c.id" :label="c.label" :value="c.id" />
          </el-select>
          <Space width="10" />
          <el-select v-model="form.area" placeholder="请选择区">
            <el-option v-for="a in areaList" :key="a.id" :label="a.label" :value="a.id" />
          </el-select>
        </el-row>
      </el-form-item>
      <el-form-item label="招聘企业">
        <el-select v-model="form.enterprise" placeholder="请选择企业">
          <el-option v-for="e in enterpriseList" :key="e.id" :label="e.label" :value="e.id" />
        </el-select>
      </el-form-item>
      <el-row justify="end">
        <el-button type="primary" color="#626aef" @click="onSubmit">发布</el-button>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
import HeaderLayout from "@/components/HeaderLayout.vue";
import Space from "@/components/Space.vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { dataInter } from "./IndexInter";
export default defineComponent({
  components: {
    HeaderLayout,
    Space,
  },
  setup() {
    onMounted(() => {
      console.log("初始化");
    });
    const data = reactive(new dataInter());
    const router = useRouter();

    const toIndex = () => {
      return router.push("/");
    };
    const onSubmit = () => {
      ElMessageBox.confirm("确认发布招聘", "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "发布成功",
          });
          toIndex();
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "操作失败",
          });
        });
    };
    return {
      ...toRefs(data),
      toIndex,
      onSubmit,
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