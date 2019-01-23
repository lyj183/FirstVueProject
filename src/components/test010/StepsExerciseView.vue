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
      <el-form-item label="手机号：">{{stepFormOne.mobileVisibale ? stepFormOne.mobile : "***********"}}</el-form-item>
      <el-form-item label="Email：">{{stepFormTwo.email}}</el-form-item>
      <el-form-item label="密码：">{{stepFormTwo.pass}}</el-form-item>
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
      <step-two-view v-if="step === 2" @saveForm="saveForm" :stepFormTwo="stepFormTwo"></step-two-view>
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
        mobileVisibale: 0
      },
      stepFormTwo: {
        email: '',
        pass: '',
        checkPass: ''
      }
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
    }
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style>

</style>

