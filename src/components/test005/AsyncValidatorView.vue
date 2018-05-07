<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView005-1' }">TestT005-1</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap view-interval child-two-view">
      <h1>async-validator</h1>
      <div class="view-interval center-view">
        <p>手机号码</p>
        <el-input class="input-view" v-model="inputForm.mobile" placeholder="请输入手机号码"></el-input>
      </div>

      <div class="view-interval center-view">
        <p>身份证号码</p>
        <el-input class="input-view" v-model="inputForm.id" placeholder="请输入身份证号码"></el-input>
      </div>

      <div class="view-interval center-view">
        <p>姓名</p>
        <el-input class="input-view" v-model="inputForm.name" placeholder="请输入姓名"></el-input>
      </div>

      <div class="view-interval center-view">
        <p>Email</p>
        <el-input class="input-view" v-model="inputForm.email" placeholder="请输入Email"></el-input>
      </div>
      <div class="view-interval center-view">
        <el-button @click="submitForm">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import schema from 'async-validator' // 引入async-validator

export default {
  data() {
    return {
      inputForm: {
        mobile: '',
        id: '',
        name: '',
        email: '',
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
    submitForm() {
      var validator = new schema(this.rules)
      validator.validate(this.inputForm, (errors, fields) => {
        if (errors) {
          this.$message.error(errors[0])
        } else {
          this.$message.success("成功")
        }
      })
    }
  }
}
</script>































