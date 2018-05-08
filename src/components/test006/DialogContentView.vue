<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView006' }">TestT006</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-interval child-two-view">
      <h1>Dialog</h1>
      <div class="center-view">
        <p>姓名：{{name}}</p>
        <p>性别：{{gender}}</p>
        <el-button type="primary" @click="openDialogView">打开对话框</el-button>
        <dialog-view @closeDialog="closeDialog" :show="dialogVisiable" ></dialog-view>
      </div>
    </div>
  </div>
</template>

<script>
import dialogView from './DialogView.vue'
export default {
  components : {
    dialogView
  },
  data() {
    return {
      name: 'Gemini',
      gender: 'male',
      dialogVisiable: false
    }
  },
  methods: {
    openDialogView() {
      this.dialogVisiable = true
    },
    closeDialog(val) {
      console.log("val: " + val)
      this.dialogVisiable = val
    }

  }
}
</script>