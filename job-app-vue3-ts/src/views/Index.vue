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
        <el-button type="primary" size="large" color="#626aef">发布招聘</el-button>
      </template>
    </HeaderLayout>
    <!-- 分类 -->
    <div class="classify">
      <!-- 下拉 -->
      <el-row align="middle">
        <div>大连58同城</div>
        <Space width="20" />
        <el-select v-model="value" placeholder="全职招聘">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <Space height="10" />
      <!-- 职位 -->
      <el-row align="middle">
        <div>职位：</div>
        <Space width="10" />
        <div>职位：</div>
        <div>职位：</div>
      </el-row>
      <Space height="10" />
      <!-- 地点 -->
      <el-row align="middle">
        <div>地点：</div>
        <Space width="10" />
        <div>地点</div>
        <div>地点</div>
      </el-row>
      <Space height="10" />
      <!-- 其他 -->
      <el-row align="middle">
        <div>其他：</div>
        <Space width="10" />
        <el-select v-model="value" placeholder="发布时间">
          <el-option label="发布时间" value="2022">
          </el-option>
        </el-select>
        <Space width="10" />
        <el-select v-model="value" placeholder="薪资范围">
          <el-option label="薪资范围" value="2022">
          </el-option>
        </el-select>
        <Space width="10" />
        <el-select v-model="value" placeholder="公司性质">
          <el-option label="公司性质" value="2022">
          </el-option>
        </el-select>
      </el-row>
      <el-divider />
      <!-- 已选 -->
      <el-row align="middle">
        <el-row>
          <div>已选：</div>
          <Space width="10" />
        </el-row>
        <el-row v-for="tag in dynamicTags" :key="tag">
          <el-tag closable :disable-transitions="false" @close="handleClose(tag)">
            {{ tag }}
          </el-tag>
          <Space width="10" />
        </el-row>
        <div>
          共<span class="font-color-them">121</span>条结果
        </div>
      </el-row>
      <Space height="10" />
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="职位" name="first">
          <el-row>
            <el-checkbox v-model="checked1" label="查看本地工作" size="large"></el-checkbox>
            <el-checkbox v-model="checked2" label="营业执照已验证" size="large"></el-checkbox>
          </el-row>
          <el-row justify="space-between" align="top" :gutter="40">
            <el-col :span="20">
              <el-row v-for="item in 10" :key="item" justify="space-between" align="middle" class="item-container">
                <el-col :span="9">
                  <div>高新园区 | 软件工程师</div>
                  <Space height="10" />
                  <div class="font-color-them">6000-9000元/月</div>
                  <Space height="10" />
                  <el-row>
                    <el-tag type="info">求职保障</el-tag>
                    <Space width="10" />
                    <el-tag type="info">五险一金</el-tag>
                    <Space width="10" />
                    <el-tag type="info">求职保障</el-tag>
                  </el-row>
                </el-col>
                <el-col :span="9">
                  <div>武汉佰钧成技术有限责任公司</div>
                  <Space height="20" />
                  <div>UI设计 | 不限 | 不限</div>
                </el-col>
                <el-col :span="6">
                  <el-row align="middle">
                    <el-col :span="14">
                      <el-button type="primary" size="large" color="#626aef">申请</el-button>
                    </el-col>
                    <el-col :span="10">
                      <div>黄金展位</div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <Space height="20" />
              <el-row justify="center">
                <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]" :small="small" :background="true" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
              </el-row>
              <Space height="20" />
            </el-col>
            <el-col :span="4" class="ad-container">
              <div class="ad-image">
                <img src="https://pic1.58cdn.com.cn/nowater/jltx/n_v241c8e2b5869240c19fc91442b19b0827.jpg" alt="">
              </div>
              <div class="ad-image">
                <img src="https://pic1.58cdn.com.cn/nowater/cxnomark/n_v24e56c94d23bc49c1b9a208fbed4e57ae.png" alt="">
              </div>
              <div class="ad-title">更适合您的职位</div>
              <div v-for="item in 4" :key="item" class="ad-item">
                <div>送餐员日均三五百元子</div>
                <Space height="8" />
                <div>甘井子区-迎客...</div>
                <Space height="8" />
                <div class="font-color-them">￥ 6000-12000/月</div>
                <Space height="8" />
                <el-row>
                  <el-tag type="info">加班补助</el-tag>
                  <Space width="10" />
                  <el-tag type="info">饭补</el-tag>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="名企" name="second">名企</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import HeaderLayout from "@/components/HeaderLayout.vue";
import Space from "@/components/Space.vue";
const scollTop = ref(0);
const scrollEvent = (val: unknown) => {
  console.log(`${val} scrollEvent`);
  scollTop.value =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
};
window.addEventListener("scroll", scrollEvent);
const activeName = ref("first");
const currentPage = ref(4);
const pageSize = ref(100);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
// do not use same name with ref
// const form = reactive({
//   name: "",
//   region: "",
//   date1: "",
//   date2: "",
//   delivery: false,
//   type: [],
//   resource: "",
//   desc: "",
// });

// const onSubmit = () => {
//   console.log("submit!");
// };
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