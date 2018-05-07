<!-- 子组件一，用以发送数据 -->
<template>
<el-dialog
  title="提示"
  :visible.sync="showThis"
  width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialogView">取 消</el-button>
    <el-button type="primary" @click="closeDialogView">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
import eventHub from '@/tools/eventhub'
export default {
  props: {
    show: {type: Boolean} // 父组件传递过来的开启指令
  },
  data() {
    return {
      showThis: null
    }
  },
  methods: {
    // 挂在组建时，将父元素传来的值赋值给变量
    mounted() {
      this.showThis = this.isShowDialog
    },
    closeDialogView() {
      // 改变show的值
      this.showThis = false;
    }
  },
  watch: {
    showThis(newV, oldV) {
      console.log("newV: " + newV)
      console.log("oldV: " + oldV)
      // 告诉父元素改变show的值
      this.$emit('closeDialog', newV)
    },
    show(newV, oldV) {
      this.showThis = newV
    }
  }
}
</script>

<style scoped>
.dialog-view {
  height: 500px;
}
</style>