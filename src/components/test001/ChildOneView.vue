<!-- 子组件一，用以发送数据 -->
<template>
<div class="child-one-view">
  <el-form>
    <el-form-item>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-input v-model="formName1" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-input v-model="formName2" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row> 
    </el-form-item>
  </el-form> 
</div>
</template>

<script>
import eventHub from '@/tools/eventhub'
export default {
  props: {
    resetNames: '', // 父组件传递过来的清空数据
  },
  data() {
    return {
      formName1: '',
      formName2: ''
    }
  },
  watch: {
    formName1() {
      // 传递给父组件，formName1的值
      this.$emit('changeFormNameOne', this.formName1);
    },
    formName2() {
      // eventHub触发事件
      // 传递给子组件二，formName2的值
      eventHub.$emit('changeFormNameTwo', this.formName2);
    },
    resetNames() {
      console.log('进入子一');
      if(this.resetNames) {
        console.log("resetNames是：" + this.resetNames);
        this.formName1 = '';
        console.log("formName1空啦！！！！！");
        this.formName2 = '';
        console.log("formName2空啦！！！！！");
      }
    }
  },
}
</script>

<style scoped>
.child-one-view {
  height: 300px;
}
</style>