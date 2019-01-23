<template>
  <div class="view-interval">
    <h1>第二步</h1>
    <div>
      <!-- status-icon 属性为输入框添加了表示校验结果的反馈图标 -->
      <el-form ref="stepFormTwo" :model="stepFormTwo" label-width="100px" :rules="rules" status-icon>  
        <el-form-item label="Email：" prop="email">
          <el-input v-model="stepFormTwo.email" size="small" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="stepFormTwo.pass" autocomplete="off" size="small" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="stepFormTwo.checkPass" autocomplete="off" size="small" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="显示密码：" prop="passVisibale">
          <el-radio-group v-model="stepFormTwo.passVisibale">
            <el-radio :label="0">隐藏</el-radio>
            <el-radio :label="1">显示</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="view-interval center-view">
      <el-button size="small" @click="saveForm('stepFormTwo')">保存</el-button>
      <el-button size="small" @click="resetForm('stepFormTwo')">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepFormTwo: Object
  },
  data() {
      var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.stepFormTwo.checkPass !== '') {
          this.$refs.stepFormTwo.validateField('checkPass');  // validateField, 对部分表单字段进行校验的方法, 这里的作用是在确认密码不为空的情况下，验证确认密码
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.stepFormTwo.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    saveForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('saveForm', true);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>