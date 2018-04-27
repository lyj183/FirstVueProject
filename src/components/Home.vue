<template>
  <div class="hello">
    <el-row class="tac">
      <el-col :span="4">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-1-1" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一（组件通讯）</span>
              <el-menu-item index="1-1-1">选项1-1-1</el-menu-item>
              <el-menu-item index="1-1-2">选项1-1-2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="1-2-1">选项1-2-1</el-menu-item>
              <el-menu-item index="1-2-2">选项1-2-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div v-if="indexPath[1]=='1-1-1'">
          <parent-view></parent-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import parentView from './test001/ParentView.vue'
export default {
  name: 'Home',
  components : {
    parentView
  },
  data() {
    return {
      isCollapse: false,
      index: '',
      indexPath: ['1','1-1-1']
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.index = key;
      this.indexPath = keyPath;
      console.log("indexPath: " + this.indexPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
