<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView005' }">TestT005</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap view-interval child-two-view">
      <el-input class="input-view" v-model="mobile" placeholder="请输入手机号码"></el-input>
      <el-input class="input-view" v-model="id" placeholder="请输入身份证号码"></el-input>
      <el-input class="input-view" v-model="name" placeholder="请输入姓名"></el-input>
      <div class="view-interval center-view">
        <el-button @click="checkValidator(mobile, id, name)">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import schema from 'async-validator'
export default {
  data() {
    return { 
      mobile: '',
      id: '',
      name: ''
    }
  },
  methods: {
    checkValidator(a, b, c) {
      var descriptor = {
        mobile: {type: "string", required: true, pattern: schema.pattern.email},
        id: {type: "string", required: true},
        name: {type: "string", required: true}
      }
      var validator = new schema(descriptor);
      let checkValue = {
        mobile: a,
        id: b,
        name: c
      }
      validator.validate(checkValue, (errors, fields) => {
        if(errors) {
          console.log("errors" + errors)
          console.log("fields" + fields)
          this.$message.error(errors[0])
        } else {
          this.$message.success("成功")
        }
        
      })

    }
  }
}
</script>