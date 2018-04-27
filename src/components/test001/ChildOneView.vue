<template>
<el-form>
  <el-form-item>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-input v-model="formName1" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
  </el-form-item>
  <el-form-item>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-input v-model="formName2" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row> 
  </el-form-item>
</el-form> 
</template>

<script>
import eventHub from '@/tools/eventhub'
export default {
  data() {
    return {
      formName1: '',
      formName2: ''
    }
  },
  watch: {
    formName1() {
      this.$emit('changeFormNameOne', this.formName1);
    },
    formName2() {
      // eventHub触发事件
      eventHub.$emit('changeFormNameTwo', this.formName2);
    }    
  }
}
</script>

<style scoped>
</style>