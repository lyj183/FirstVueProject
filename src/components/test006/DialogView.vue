<template>
<div class="dialog-view">
  <el-dialog
    title="提示"
    :visible.sync="showThis"
    :center="true">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部分类" name="first"></el-tab-pane>
        <!-- <el-tab-pane label="基础属性" name="second"></el-tab-pane>
        <el-tab-pane label="生活属性" name="third"></el-tab-pane>
        <el-tab-pane label="外部标签" name="fourth"></el-tab-pane>
        <el-tab-pane label="动态标签" name="fifth"></el-tab-pane> -->
        <el-tab-pane v-for="(item, index) in tagData" :key="index" :label="item.tagSuperGroupName" :name="item.tagSuperGroupName"></el-tab-pane>
      </el-tabs>
    </div>
    <div>
      dddddd
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialogView">取 消</el-button>
      <el-button type="primary" @click="closeDialogView">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
// 引入mock数据
import mock from'../../../static/mock/data.js'
export default {
  props: {
    show: {type: Boolean} // 父组件传递过来的开启指令
  },
  data() {
    return {
      showThis: null,
      activeName: 'first',
      tagData: []
    }
  },
  mounted() {
    // 挂载组件时，将父元素传来的值赋值给变量
    this.showThis = this.isShowDialog;
    
    // 加载mock数据
    if(mock.status == "200") {
      this.tagData = mock.data;
    }
  },
  methods: {
    closeDialogView() {
      // 改变show的值
      this.showThis = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  watch: {
    showThis(newV, oldV) {
      // 告诉父元素改变show的值
      this.$emit('closeDialog', newV)
    },
    show(newV, oldV) {
      this.showThis = newV
    }
  }
}
</script>

<style lang="less">
// 这里之所以引入less，是因为用scoped，无效；但去掉scoped会造成影响全局的状况
// 因此解决办法是使用less语法，并去掉scoped
// 安装less的方法：
// 1、npm install less less-loader --save
// 2、在webpack.base.conf.js中添加配置
/*
   {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader",
   }
*/
.dialog-view {
  .el-dialog__body {
    height: 300px;
    overflow-y: scroll;
  }
}
</style>
