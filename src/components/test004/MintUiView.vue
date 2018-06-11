<template>
  <div class="mint-ui-view">
    <div>
      <mt-header title="MintUI 展示">
        <mt-button icon="back" slot="left" @click="onSubmitBack">返回</mt-button>
        <mt-button slot="right" @click="onSubmitFullScreen">全屏</mt-button>
      </mt-header>
    </div>
    <div>
      <mt-navbar class="page-part" v-model="active">
        <mt-tab-item id="tab-container1">选项一</mt-tab-item>
        <mt-tab-item id="tab-container2">选项二</mt-tab-item>
        <mt-tab-item id="tab-container3">选项三</mt-tab-item>
      </mt-navbar>
    </div>
    <div>
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable="true">
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n.id"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n.id"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n.id"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import {
  Header,
  Cell,
  TabContainer, 
  TabContainerItem
} from 'mint-ui'
export default {
  components : {
    [Header.name]: Header,
    [Cell.name]: Cell,
    [TabContainer.name]: TabContainer,
    [TabContainerItem.name]: TabContainerItem
  },
  data() {
    return {
      active: "tab-container1"
    }
  },
  methods: {
    onSubmitFullScreen() {
      this.$router.push({path: '/TestView004-2'})
    },
    onSubmitBack() {
      this.$router.back();
    },
    selected() {
      
    }

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped>
.mint-ui-view {
  margin-top: -20px;
  margin-left: -30px;
}

</style>

