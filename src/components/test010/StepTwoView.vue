<template>
  <div class="view-interval">
    <h1>第二步</h1>
    <div>
      <el-form ref="stepFormTwo" :model="stepFormTwo" label-width="100px" :rules="rules">  
        <el-form-item label="Email：" prop="email">
          <el-input v-model="stepFormTwo.email" size="small" style="width: 200px"></el-input>
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
    return {
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
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