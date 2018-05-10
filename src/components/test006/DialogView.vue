<template>
<div class="dialog-view">
  <el-dialog
    title="选择标签"
    :visible.sync="showThis"
    :center="true"
    @close="closeDialogView"
    @open="openDialogView">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="全部分类" name="全部分类"></el-tab-pane>
        <!-- 动态添加el-tab-pane -->
        <el-tab-pane v-for="(itemType, itemTypeIndex) in cachedTagData" :key="itemTypeIndex" :label="itemType.tagSuperGroupName" :name="itemType.tagSuperGroupName"></el-tab-pane>
      </el-tabs>
    </div>
    <!-- 监听@scroll 滚动出现向上按钮 -->
    <div class="tag-type-wrap" @scroll="onScroll"> 
      <div v-for="(itemType, itemTypeIndex) in tagData" :key="itemTypeIndex">
        <span style="color: #58B7FF">{{itemType.tagSuperGroupName}}</span>
        <div>
          <el-form v-for="(itemTag, itemTagIndex) in itemType.tagGroupDTOList" :key="itemTagIndex" label-position="right" label-width="100px">
            <el-form-item :label="itemTag.groupName">
              <span
                v-for="(item, itemIndex) in itemTag.tagDTOList" 
                :key="itemIndex" 
                @click="selectTags(item)"
                :class="[item.tagName.length < 6 ? 'item-tag-wrap' : 'item-tag-wrap big', 
                        selectedTags.tags.tagCodes.indexOf(item.tagCode) > -1 ? 'on' : '']">{{item.tagName}}</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 加入渐入渐出效果 -->
      <transition name="el-fade-in">
        <i class="el-icon-upload2" @click="scrollTop" v-show="showGotoTopButten"></i>
      </transition>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialogView">取 消</el-button>
      <el-button type="primary" @click="conformDialogView">确 定</el-button>
    </span>
  </el-dialog>

</div>
</template>

<script>
// 引入mock数据
import mock from'../../../static/mock/data001.js'
export default {
  props: {
    show: {type: Boolean}, // 父组件传递过来的开启指令
    preSelectedTags: {type: Object} // 父组件传递过来的预设Tags
  },
  data() {
    return {
      showThis: null,
      showGotoTopButten: false,
      activeName: '全部分类',
      tagData: [], 
      selectedTags: {   // 点选的标签数据，1、用来和展示数据比较，以便不同的展现；2、提交给父组件
        typeName:'',
        tags: {
          tagCodes: [],
          tagNames: []
        }
      },
      cachedTagData: [] // 缓存数据（如果是从服务器请求的情况下）
    }
  },
  mounted() {
    // 挂载组件时，将父元素传来的值赋值给变量
    this.showThis = this.show;
    
    // 加载mock数据
    if(mock.status == "200") {
      this.cachedTagData = JSON.parse(JSON.stringify(mock.data));
      if(this.activeName == '全部分类') {
        this.tagData = JSON.parse(JSON.stringify(this.cachedTagData));
      }
    }

    // 挂载组件时，将父元素传来的Tags值给变量
    this.selectedTags = JSON.parse(JSON.stringify(this.preSelectedTags));
  },
  methods: {
    openDialogView() {
      // 开启时，回顶端，这里必须添加延时，否则会报错
      setTimeout(function(){
        document.querySelector('.tag-type-wrap').scrollTop = 0;
      }, 30);
    },
    handleTabClick(tab, event) {
      if(this.activeName == '全部分类') {
        this.tagData = JSON.parse(JSON.stringify(this.cachedTagData));
      } else {
          this.cachedTagData.forEach(element => {
            if(element.tagSuperGroupName == this.activeName) {
              this.tagData = [];
              this.tagData[0] = element;
            }
          });
      }
      // 回顶端
      document.querySelector('.tag-type-wrap').scrollTop = 0;
    },
    closeDialogView() {
      // 改变show的值，以便watch通知父组件
      this.showThis = false;

      // 从缓存数据恢复原有的标签
      this.selectedTags = this.preSelectedTags
    },
    conformDialogView() {
      // 传递给父组件，selectedTags的值
      this.$emit('changeTags', this.selectedTags);
      // 改变show的值，以便watch通知父组件
      this.showThis = false;
    },
    selectTags(tag) {
      // 存在->删除; 不存在->添加
      if(this.selectedTags.tags.tagCodes.indexOf(tag.tagCode) > -1) {
        var index = this.selectedTags.tags.tagCodes.indexOf(tag.tagCode);
        this.selectedTags.tags.tagCodes.splice(index, 1)
        this.selectedTags.tags.tagNames.splice(index, 1)
      } else {
        this.selectedTags.tags.tagCodes.push(tag.tagCode)
        this.selectedTags.tags.tagNames.push(tag.tagName)
      }     
    },
    onScroll() {
      // 监听div的scroll事件 , 用dom.scrollTop这个属性
      let offset = document.querySelector('.tag-type-wrap').scrollTop
      console.log(offset)
      if(offset > 300) {
        this.showGotoTopButten = true;
      } else {
        this.showGotoTopButten = false;
      }
    },
    scrollTop() {
      document.querySelector('.tag-type-wrap').scrollTop = 0;
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
// 3、根据需求改为tag-type-wrap这个div做overflow-y: scroll
.dialog-view {
  // .el-dialog__body {
  //   height: 300px;
  //   overflow-y: scroll;
  // }
  position: relative; // 父视图设为relative，以便定位悬浮按钮
  .tag-type-wrap {
    height: 300px;
    overflow-y: scroll;
    // 文字按钮包裹
    .item-tag-wrap {
      display: inline-block;
      width: 108px;
      height: 34px;
      line-height: 34px;
      margin:-7px 20px 20px 0;
      text-align: center;
      cursor: pointer;
      color: black;
      background-color: #fff;
      border: 1px solid #d4dce5;
      border-radius: 5px;
    }
    .big {
      width: 208px;
    }
    .on {
      background-color: #E9F6FF;
      color:#58B7FF;
      border: 1px solid #58B7FF;
    }
    .el-icon-upload2 {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border: 1px solid #58B7FF;
      border-radius: 5px;
      position: absolute; // 子视图设为absolute，定位悬浮按钮
      // position: fixed; // 如果在整个窗口，用这个
      right: 40px;
      bottom: 40%;
    } 
  }
}
</style>
