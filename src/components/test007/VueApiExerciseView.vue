<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView007' }">TestT007</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-interval child-two-view">
      <h1>VueApiExercise</h1>
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
  methods: {
  }
}
</script>

