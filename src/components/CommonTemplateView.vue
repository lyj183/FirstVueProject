<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'XXX' }">XXX</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="view-interval child-two-view">
      <h1>标题</h1>
      <div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  components : {

  },
  data() {
    return {

    }
  },
  mounted() {  
    
  }, 
  methods: {

  },
  watch: {

  },
  computed: {

  },
  filters: {

  }
}
</script>

<style>

</style>

