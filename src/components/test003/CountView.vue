<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView003' }">TestT003</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap view-interval child-two-view">
      <result-view></result-view>
      <div class="view-interval"></div>
      <operate-view></operate-view>
    </div>
  </div>
</template>

<script>
import resultView from './ResultView.vue'
import operateView from './OperateView.vue'
export default {
  components : {
    resultView,
    operateView
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>