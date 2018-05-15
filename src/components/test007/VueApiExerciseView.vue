<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView007' }">TestT007</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-interval child-two-view">
      <h1>vue-html5-editor</h1>
      <vue-html5-editor :content="content" :height="200"></vue-html5-editor>
    </div>
    <div class="view-interval child-two-view">
      <h1>Element-Upload</h1>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-input v-model="input" placeholder="请输入名称" style="width: 300px"></el-input>
      <p>名称： {{output}}</p>
      <el-button @click="removeLocalStorage">清除名称localStorage</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components : {
  },
  data() {
    return {
      content: '',
      input: '',
    }
  },
  methods: {
    removeLocalStorage() {
      localStorage.removeItem('LYJ_FIRSTVUE_TEST007_INPUT');
      window.location.href="http://localhost:8080";
      // 如果全部清除用：
      // localStorage.clear();
    }

  },
  watch: {
    input() {
      // 名称存入LocalStorage
      localStorage.setItem('LYJ_FIRSTVUE_TEST007_INPUT', this.input)
    }
  },
  computed: {
    output() {
      return localStorage.getItem('LYJ_FIRSTVUE_TEST007_INPUT') ? localStorage.getItem('LYJ_FIRSTVUE_TEST007_INPUT') : ''
    }
  }
}
</script>

