<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView006-3' }">TestT006-3</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="view-interval child-two-view">
      <h1>Cascader 级联选择器</h1>
        <el-cascader
          :options="mockData"
          v-model="selectedOptions"
          @change="handleChange"
          style="width: 600px"
          :props="orgProps">
        </el-cascader>
    </div>
  </div>
</template>

<script>
// 引入mock数据
import mock from'../../../static/mock/data003.js'
export default {
  components : {

  },

  data() {
    return {
      mockData: [],
      selectedOptions: [],
      orgProps: {
        value: 'code',
        label: 'name',
        children: 'childrenOrgList'
      }, 
    }
  },

  mounted() {  
    // 加载mock数据
    /*
    if(mock.status == "200") {
      // 改成JSON String
      var aa = JSON.stringify(mock.data);
      // 遍历用正则表达式替换成Cascader认可的参数
      var bb = aa.replace(/"name"/g,'"label"');
      var cc = bb.replace(/"orgId"/g,'"value"');
      var dd = cc.replace(/"orgs"/g,'"children"');
      // 去除"children":[]
      var ee = dd.replace(/,"children":\[\],/g, ',');
      // 转换成JSON数组给数据赋值
      this.mockData = JSON.parse(ee);
    }
    */
    if(mock.status == "200") {
      this.mockData = mock.data;
    }
  }, 
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  watch: {
    // 数组的watch：深拷贝
    selectedOptions: {
　　　　handler(newValue, oldValue) {
　　　　　　for (let i = 0; i < newValue.length; i++) {
　　　　　　　　if (oldValue[i] != newValue[i]) {
　　　　　　　　　　console.log(newValue)
　　　　　　　　}
　　　　　　}
　　　　},
　　　　deep: true
    }
  },
  computed: {

  }
}
</script>

<style>

</style>

