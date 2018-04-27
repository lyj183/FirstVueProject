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
          <h1>父组件</h1>
          <p>子组件->父组件：{{title}}</p>
        </el-col>
      </el-row>
      <el-row>
        <!-- 父组件传递给子组件ChildTwoView，pic-name1必须要用 - 代替驼峰 -->
        <el-col :span="11">
          <h2>子组件二：接收</h2>
          <child-two-view :pic-name1="title"></child-two-view>
        </el-col>
        <el-col :span="2">
          <div class="line-view"></div>
        </el-col>
        <!-- 从子组件ChildOneView接收 -->
        <el-col :span="11">
          <h2>子组件一：发送</h2>
          <child-one-view @changeFormNameOne="changeName" :form-name1="title"></child-one-view>
        </el-col>
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
      title: ''
    }
  },
  methods: {
    changeName(formName1) {
      this.title = formName1;
    }
  }
}
</script>

<style scoped>
  .parent-view-content-wrap {
    height: 300px;
  }
  .line-view {
    height: 300px; 
    width: 1px; 
    background-color: black;
  }
</style>


