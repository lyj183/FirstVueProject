<template>
<div class="dialog-view">
  <el-dialog
    title="选择标签"
    :visible.sync="showThis"
    :center="true">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部分类" name="全部分类"></el-tab-pane>
        <!-- 动态添加el-tab-pane -->
        <el-tab-pane v-for="(itemType, itemTypeIndex) in tagData" :key="itemTypeIndex" :label="itemType.tagSuperGroupName" :name="itemType.tagSuperGroupName"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="tag-type-wrap"> 
      <div v-for="(itemType, itemTypeIndex) in tagData" :key="itemTypeIndex">
        <span style="color: red">{{itemType.tagSuperGroupName}}</span>
        <div>
          <el-form v-for="(itemTag, itemTagIndex) in itemType.tagGroupDTOList" :key="itemTagIndex" label-position="right" label-width="100px">
            <el-form-item :label="itemTag.groupName">
              <span
                v-for="(item, itemIndex) in itemTag.tagDTOList" 
                :key="itemIndex" 
                @click="selectTags(item)"
                :class="[item.tagName.length < 6 ? 'item-tag-wrap' : 'item-tag-wrap-big', 
                        (selectedTags.tags.tagCodes).indexOf(item.tagCode) > -1 ? 'on' : '']">{{item.tagName}}</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
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
      activeName: '全部分类',
      tagData: [], 
      selectedTags: {
        typeName:'',
        tags: {
          tagCodes: [],
          tagNames: []
        }
      }
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
    },

    selectTags(tag) {
      // 存在->删除; 不存在->添加
      if((this.selectedTags.tags.tagCodes).indexOf(tag.tagCode) > -1) {
          var index = (this.selectedTags.tags.tagCodes).indexOf(tag.tagCode);
          (this.selectedTags.tags.tagCodes).splice(index, 1)
          (this.selectedTags.tags.tagNames).splice(index, 1)
      } else {
          (this.selectedTags.tags.tagCodes).push(tag.tagCode)
          (this.selectedTags.tags.tagNames).push(tag.tagName)
      }
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
    .item-tag-wrap-big {
      display: inline-block;
      width: 208px;
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
    .item-tag-wrap.on {
      background-color: #E9F6FF;
      color:#58B7FF;
      border: 1px solid #58B7FF;
    }
    .item-tag-wrap-big.on {
      background-color: #E9F6FF;
      color:#58B7FF;
      border: 1px solid #58B7FF;
    }

  }
}
</style>
