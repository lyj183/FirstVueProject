<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView005-2' }">TestT005-2</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap view-interval child-two-view">
      <h1>Element-Form-Validate</h1>
      <el-form :model="inputForm" :rules="rules" ref="inputForm">
        <el-form-item label="手机" prop="mobile">
          <el-input class="input-view" v-model="inputForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>

        <el-form-item label="身份证" prop="id">
          <el-input class="input-view" v-model="inputForm.id" placeholder="请输入身份证号码"></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input class="input-view" v-model="inputForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input class="input-view" v-model="inputForm.email" placeholder="请输入Email"></el-input>
        </el-form-item>
      </el-form>
      <div class="view-interval center-view">
        <el-button @click="submitForm('inputForm')">提交</el-button>
        <el-button @click="resetForm('inputForm')">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputForm: {
        mobile: '',
        id: '',
        name: '',
        email: ''
      },
      rules: {
        mobile: [
          { type: "string",
            required: true,
            message: "请输入手机号码"
          },
          {
            pattern: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
            message: "请输入正确的手机号码"
          }
        ],
        id: [
          {
            type: "string",
            required: true,
            message: "请输入身份证号码"
          },
          {
            pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/,
            message: "请输入正确的身份证号码"
          },
        ],
        name: {
          type: "string",
          required: true,
          len: 4,
          message: "请输入正确的姓名"
        },
        email: [
          {
            type: "string",
            required: true,
            message: "请输入Email"
          },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "请输入正确的Email"
          },
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          this.$message.error('失败')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>