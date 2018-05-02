<!-- 子组件二，用以显示接收的数据 -->
<template>
<div class="child-two-view">
  <el-form>
    <!-- 方法一：父组件传递给子组件 -->
    <el-form-item>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <p>父组件->子组件二： {{pickName1}}</p>
        </el-col>
      </el-row>
    </el-form-item>
    <!-- 方法二：子组件之间通过eventHub传递 -->
    <el-form-item>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <p>子组件一->子组件二： {{pickName2}}</p>
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
    pickName1: '',  // 父组件传递过来的，其从子组件一获取的数据
  },
  data() {
    return {
      pickName2: ''
    }
  },
  mounted(){
    // eventHub接收事件
    eventHub.$on('changeFormNameTwo', (formName2) => {
      this.pickName2 = formName2;
    });
  },
  watch: {
    pickName1() {
      if(!this.pickName1) {
        console.log("pickName1空啦！！！！！");
      }
    },
  },
}
</script>

<style scoped>
.child-two-view {
  height: 300px;
}
</style>