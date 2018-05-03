<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView005' }">TestT005</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap view-interval child-two-view">
      <el-form :model="inputForm" :rules="checkRule" ref="inputForm">
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
        <el-button @click="submitForm('inputForm')" :disabled="valid">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  data() {
    var checkMobile = (rule, value, callback) => {
      var type = "^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$";
      var regType = new RegExp(type);
      if(!value) {
        return callback(new Error('手机号码不能为空'))
      } else {
        var mobileflag = regType.test(value);
        if (!mobileflag) {
          callback(new Error('请输入正确的11位手机号码'));
        } else {
          callback();
        }
      }
    }
    var checkId = (rule, value, callback) => {
      if(!value) {
        return callback(new Error('身份证号码不能为空'))
      } else {
        var idflag = (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value) || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(value));
        if (!idflag) {
          callback(new Error('请输入正确的身份证号吗'));
        } else {
          callback();
        }
      }
    }
    var checkName = (rule, value, callback) => {
      if(!value) {
        return callback(new Error('姓名不能为空'))
      } else {
          callback();
      }
    }
    return {
      inputForm: {
        mobile: '',
        id: '',
        name: '',
        email: ''
      },
      checkRule: {
        mobile: { required: true, validator: checkMobile, trigger: 'blur, change' },
        id: { required: true, validator: checkId, trigger: 'blur, change' },
        name: { required: true, validator: checkName, trigger: 'blur, change' },
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur, change' }
        ],
      }
    }
  },
  methods: {
    submitForm(formValues) {
      this.$refs[formValues].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          this.$message.error('失败')
          return false
        }
      })
    }
  },
  computed: {
    valid() {
      let validator = new AsyncValidator(this.checkRule)
      let result = false
      validator.validate(this.inputForm, (errors) => {
        if (!errors) {
          result = true
        }
      })
      return result
    }
  }
}
</script>