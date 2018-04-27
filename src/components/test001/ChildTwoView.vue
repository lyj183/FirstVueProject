<template>
<el-form>
  <!-- 方法一：父组件传递给子组件 -->
  <el-form-item>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <p>父组件->子组件： {{picName1}}</p>
      </el-col>
    </el-row>
  </el-form-item>
  <!-- 方法二：子组件之间通过eventHub传递 -->
  <el-form-item>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <p>子组件->子组件： {{picName2}}</p>
      </el-col>
    </el-row>
  </el-form-item>
</el-form> 
</template>

<script>
import eventHub from '@/tools/eventhub'
export default {
  props: {
    picName1: '',
  },
  data() {
    return {
      picName2: ''
    }
  },
  mounted(){
    // eventHub接收事件
    eventHub.$on('changeFormNameTwo', (formName2) => {
      this.picName2 = formName2;
    });
  },
}
</script>

<style scoped>
</style>