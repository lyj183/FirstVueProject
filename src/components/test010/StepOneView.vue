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
        <el-form-item label="选择时间：" prop="selectedDate">
          <el-date-picker
            v-model="stepFormOne.selectedDate" 
            type="daterange"
            size="small"
            format="yyyy/MM/dd"
            range-separator="-"
            start-placeholder="年/月/日"
            end-placeholder="年/月/日"
            @change="changeSelectedDate"
            style="width: 250px">
          </el-date-picker>
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
import dateUtils from'../../../static/utils/dateUtils.js'
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
    },
    changeSelectedDate(date) {
      if(date) {
        this.stepFormOne.startTime = dateUtils.getDate(date[0],'s') + " 00:00:00";
        this.stepFormOne.endTime =  dateUtils.getDate(date[1],'s') + " 23:59:59";
      } else {
        this.stepFormOne.startTime = '';
        this.stepFormOne.endTime = '';
      }
    },
  }
}

</script>