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
      <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
        <div>
          <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable="true">
            <mt-tab-container-item id="tab-container1">
              <mt-cell v-for="n in data1" :title="'内容 ' + n" :key="n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
              <mt-cell v-for="n in data2" :title="'测试 ' + n" :key="n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
              <mt-cell v-for="n in data3" :title="'选项 ' + n" :key="n"></mt-cell>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import {
  Header,
  Cell,
  TabContainer, 
  TabContainerItem,
  Loadmore
} from 'mint-ui'
export default {
  components : {
    [Header.name]: Header,
    [Cell.name]: Cell,
    [TabContainer.name]: TabContainer,
    [TabContainerItem.name]: TabContainerItem,
    [Loadmore.name]: Loadmore
  },
  data() {
    return {
      data1: 10,
      data2: 10,
      data3: 10,
      active: "tab-container1",
      // topStatus: "loading"
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
      
    },
    loadTop(id) {
      // ...加载更多数据
      console.log("id: " + id)
    },
    topStatus(status) {
      console.log("status: " + id)
      this.topStatus = status

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

