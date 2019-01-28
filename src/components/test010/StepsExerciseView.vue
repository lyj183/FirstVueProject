<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView010' }">TestView010</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-interval child-two-view" v-if="showInfo">
      <el-form ref="form" label-width="100px">
      <el-form-item label="姓名：">{{stepFormOne.name}}</el-form-item>
      <el-form-item label="性别：">{{stepFormOne.gender === 1 ? "男" : stepFormOne.gender === 2 ? "女" : "保密"}}</el-form-item>
      <el-form-item label="年龄：">{{stepFormOne.age}}</el-form-item>
      <el-form-item label="手机号：">{{stepFormOne.mobile | formatMobile}}</el-form-item>
      <el-form-item label="开始时间：">{{stepFormOne.startTime}}</el-form-item>
      <el-form-item label="结束时间：">{{stepFormOne.endTime}}</el-form-item>
      <el-form-item label="Email：">{{stepFormTwo.email}}</el-form-item>
      <el-form-item label="密码：">{{stepFormTwo.pass | formatPass(stepFormTwo.passVisibale)}}</el-form-item>
      <!-- 注意这里的坑，不能这么写，返回都*** ，如果后面加（），返回都是原值 -->
      <!-- <el-form-item label="密码：">{{stepFormTwo.passVisibale ? stepFormTwo.pass : stepFormTwo.pass | formatPass }}</el-form-item> -->
      <el-form-item label="改写：">
        <el-select v-model="value" placeholder="请选择" @change="editChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      </el-form>
    </div>
    <div class="view-interval child-two-view" v-else>
      <h1>Steps拓展</h1>
      <div>
        <el-steps :active="step">
          <el-step title="步骤 1" description="第一步"></el-step>
          <el-step title="步骤 2" description="第二步"></el-step>       
        </el-steps>
      </div>
      <step-one-view v-if="step === 1" @changeStep="changeStep" :stepFormOne="stepFormOne"></step-one-view>
      <step-two-view v-if="step === 2" @changeStep="changeStep" @saveForm="saveForm" :stepFormTwo="stepFormTwo"></step-two-view>
    </div>

  </div>
</template>

<script>
import stepOneView from './StepOneView.vue'
import stepTwoView from './StepTwoView.vue'
export default {
  components : {
    stepOneView,
    stepTwoView
  },
  data() {
    return {
      step: 1,
      showInfo: false,
      stepFormOne: {
        name: '',
        gender: 0,
        age: 0,
        mobile: '',
        selectedDate: [],
        startTime: '',
        endTime: ''
      },
      stepFormTwo: {
        email: '',
        pass: '',
        checkPass: '',
        passVisibale: 0
      },
      options: [{
        value: 1,
        label: '改写第一步'
      }, {
        value: 2,
        label: '改写第二步'
      }],
      value: ''
    }
  },
  mounted(){  
    
  }, 
  methods: {
    changeStep(value) {
      this.step = value;
    },
    saveForm(value) {
      this.showInfo = value;
    },
    editChange(value) {
      this.saveForm(false);
      this.$nextTick(() => {
        this.changeStep(value);
      });
    }
  },
  watch: {

  },
  computed: {

  },
  filters: {
    formatMobile(value) {
      if(!value) return '';
      //手机号中间四位隐藏
      if(value){
        console.log("mobile的类型", typeof value);   // 这里注意是number类型，不是string类型，因为校验StepOneView中其type是number
        let mobileStr = String(value)
        let frontTel = mobileStr.slice(0,3);
        let behindTel = mobileStr.slice(7);
        return frontTel + '****' + behindTel;
      }
    },
    formatPass(value, showStatus) {
      if(!value) return '';
      if(value){
        let passStr = ''
        for (let i=0; i<value.length; i++) {
          passStr += "*"
        }
        return showStatus ? value : passStr;
      }
    }
  }
}
</script>

<style>

</style>

