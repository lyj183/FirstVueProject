<template>
  <div class="view-interval">
    <h1>第一步</h1>
    <div>
      <el-form ref="stepFormOne" :model="stepFormOne" label-width="100px" :rules="rules">  
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="stepFormOne.name" size="small" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="gender">
          <el-radio-group v-model="stepFormOne.gender">
            <el-radio :label="0">保密</el-radio>
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄：" prop="age">
          <el-input v-model.number="stepFormOne.age" size="small" style="width: 60px"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" prop="mobile">
          <el-input v-model.number="stepFormOne.mobile" size="small" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="显示号码：" prop="mobileVisibale">
          <el-radio-group v-model="stepFormOne.mobileVisibale">
            <el-radio :label="0">隐藏</el-radio>
            <el-radio :label="1">显示</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="view-interval center-view">
      <el-button size="small" @click="changeStep('stepFormOne')">下一步</el-button>
      <el-button size="small" @click="resetForm('stepFormOne')">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepFormOne: Object
  },
  data() {
    return {
      rules: {
        name: [
          {required: true, message: '请填写姓名', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请选择性别', trigger: 'blur'}
        ],
        age: [
          {required: true, message: '请填写年龄', trigger: 'blur'},
          {type: 'number', message: '年龄必须为数字值'},
          {validator: this.checkAgeValidate}
        ],
        mobile: [
          {required: true, message: '请填写手机号', trigger: 'blur'},
          {type: 'number', message: '手机号必须为数字值'},
          {validator: this.checkMobileValidate}
        ]
      }
    }
  },
  methods: {
    changeStep(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('changeStep', 2);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    checkAgeValidate(rule,value,callback) {
      if(value) {
        if (!(/^(0|([0-9]\d{0,1})|100)$/.test(value))) {
          callback("0～100整数");
        } else {
          callback();
        }
      } else {
        callback();
      }
    },
    checkMobileValidate(rule,value,callback) {
      if(value) {
        if (!(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value))) {
          callback("请输入正确手机号！");
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }
}

</script>