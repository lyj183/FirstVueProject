<!-- 父组件，用以显示传递数据 -->
<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'TestView001' }">TestT001</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <div class="parent-view-title">
            <h1>父组件</h1>
            <p>子组件->父组件：{{title}}</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="view-interval">
          <el-col :span="12">
            <div class="child-view-content-wrap">
              <h2>子组件一：发送</h2>
              <!-- 子组件一输入时，父组件接收，（@changeFormNameOne="changeName" :form-name1="title"），:form-name1可以随意命名 -->
              <!-- 父组件重置时，向子组件一发送，（:reset-name="clearPickNames"） -->
              <child-one-view @changeFormNameOne="changeName" :form-name1="title" :reset-names="clearNames"></child-one-view>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="child-view-content-wrap child-two-view">
              <h2>子组件二：接收</h2>
              <!-- 父组件传递给子组件二，其从子组件一获取的数据，子组件的props的属性必须要用 - 代替驼峰 -->
              <child-two-view :pick-name1="title"></child-two-view>
            </div>
          </el-col>
        </div>
      </el-row>
      <el-row type="flex" justify="center">
        <div class="view-interval">
          <el-button type="primary" @click="resetValue">重置</el-button>
        </div>
      </el-row>
    </div>   
  </div>
</template>

<script>
import childOneView from './ChildOneView.vue'
import childTwoView from './ChildTwoView.vue'
export default {
  components : {
    childOneView,
    childTwoView
  },
  data() {
    return {
      title: '',
      clearNames: 0,
    }
  },
  methods: {
    changeName(formName1) {
      this.title = formName1;
    },
    resetValue() {
      console.log('进入父')
      this.title = '';
      this.clearNames += 1; // 这里有个坑，如果这里值不变化，子组件一就监测不到，造成无法清空
    }
  }
}
</script>

<style scoped>
  .parent-view-content-wrap {
    height: 300px;
  }
  .parent-view-title {
    text-align: center;
  }
  .view-interval {
    margin-top: 20px;
  }
  .child-view-content-wrap {
    border: 1px solid #ddd;
  }
  .child-two-view {
    margin-left: 20px;
  }
</style>


