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
              <el-menu-item index="1-1-3">选项1-1-3</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二（UI扩充）">
              <el-menu-item index="1-2-1">选项1-2-1</el-menu-item>
              <el-menu-item index="1-2-2">选项1-2-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group title="分组一（输入验证）">
              <el-menu-item index="2-1-1">选项2-1-1</el-menu-item>
              <el-menu-item index="2-1-2">选项2-1-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </template>
            <el-menu-item-group title="分组一（组件）">
              <el-menu-item index="3-1-1">选项3-1-1</el-menu-item>
              <el-menu-item index="3-1-2">选项3-1-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="el-icon-setting">导航四</span>
            </template>
            <el-menu-item-group title="分组一（工具）">
              <el-menu-item index="4-1-1">选项4-1-1</el-menu-item>
              <el-menu-item index="4-1-2">选项4-1-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <div v-if="indexPath[1]=='1-1-1'">
          <parent-view></parent-view>
        </div>
        <div v-if="indexPath[1]=='1-1-2'">
          <parent-slot-view></parent-slot-view>
        </div>
        <div v-if="indexPath[1]=='1-1-3'">
          <count-view></count-view>
        </div>
        <div v-if="indexPath[1]=='1-2-1'">
          <echarts-view></echarts-view>
        </div>
        <div v-if="indexPath[1]=='1-2-2'">
          <mint-ui-view></mint-ui-view>
        </div>
        <div v-if="indexPath[1]=='2-1-1'">
          <async-validator-view></async-validator-view>
        </div>
        <div v-if="indexPath[1]=='2-1-2'">
          <elememt-form-view></elememt-form-view>
        </div>
        <div v-if="indexPath[1]=='3-1-1'">
          <dialog-content-view></dialog-content-view>
        </div>
        <div v-if="indexPath[1]=='3-1-2'">
          <tree-view></tree-view>
        </div>
        <div v-if="indexPath[1]=='4-1-1'">
          <vue-api-exercise-view></vue-api-exercise-view>
        </div>
        <div v-if="indexPath[1]=='4-1-2'">
          <css-exercise-view></css-exercise-view>
        </div>
      </el-col>
      <el-col :span="2">
        <div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import parentView from './test001/ParentView'
import parentSlotView from './test002/ParentSlotView'
import countView from './test003/CountView'
import echartsView from './test004/EChartsView'
import mintUiView from './test004/MintUiView'
import asyncValidatorView from './test005/AsyncValidatorView'
import elememtFormView from './test005/ElementFormView'
import dialogContentView from './test006/DialogContentView'
import treeView from './test006/TreeView'
import vueApiExerciseView from './test007/VueApiExerciseView'
import cssExerciseView from './test008/CssExerciseView'
export default {
  name: 'Home',
  components : {
    parentView,
    parentSlotView,
    countView,
    echartsView,
    mintUiView,
    asyncValidatorView,
    elememtFormView,
    dialogContentView,
    treeView,
    vueApiExerciseView,
    cssExerciseView
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
      // console.log(key, keyPath);
      this.index = key;
      this.indexPath = keyPath;
      // console.log("indexPath: " + this.indexPath);
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
