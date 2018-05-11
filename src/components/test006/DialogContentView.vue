<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView006' }">TestT006</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-interval child-two-view">
      <h1>Dialog</h1>
      <div class="center-view">
        <p>姓名：{{name}}</p>
        <el-button type="primary" @click="openDialogView" class="view-interval">选择标签</el-button>
        <dialog-view @closeDialog="closeDialog" :show="dialogVisiable" 
                     @changeTags="changeTags " :pre-selected-tags="cachedTags"></dialog-view>
        <el-tag :closable="true"
                v-for="(tag, index) in cachedTags.tags.tagNames" :key="index"
                @close="handleClose(index)"
                class="view-interval child-two-view">
                {{ tag }}
        </el-tag>
      </div>
      <el-button @click="openMessageBox" class="view-interval">Message Box</el-button>
    </div>
  </div>
</template>

<script>
import dialogView from './DialogView.vue'
export default {
  components : {
    dialogView
  },
  data() {
    return {
      name: 'Gemini',
      gender: 'male',
      dialogVisiable: false,
      cachedTags:  {
        typeName:'',
        tags: {
          tagCodes: [],
          tagNames: []
        }
      }, // 缓存，取消操作时用
    }
  },
  methods: {
    openDialogView() {
      this.dialogVisiable = true;
    },
    closeDialog(val) {
      this.dialogVisiable = val;
    },
    changeTags(val) {
      this.cachedTags = val;
    },
    handleClose(tagIndex) {
      this.cachedTags.tags.tagCodes.splice(tagIndex, 1);
      this.cachedTags.tags.tagNames.splice(tagIndex, 1); 
    },
    openMessageBox() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
}
</script>

