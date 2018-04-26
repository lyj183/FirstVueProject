<template>
    <div class="test-view">
      <!--练习一、Breadcrumb面包屑-->
      <el-breadcrumb separator="->">
        <el-breadcrumb-item :to="{name: 'HelloWorld'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>TestView</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
  import moment from 'moment'
  export default {
      name: "TestView",
      data() {
        return {

        }
      },
      computed: {

      },
      methods: {

      }
  }
</script>

<style scoped>
  .test-view {
    margin: auto;
    width: 60%;
    text-align: center;

  }

</style>
