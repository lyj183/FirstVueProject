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
    <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom" 
                   :bottom-all-loaded="allLoaded" 
                   :auto-fill="false" 
                   ref="loadmore">
        <div>
          <mt-tab-container class="page-tabbar-tab-container" v-model="active" :swipeable ="swipe">
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
      data1: 0,
      data2: 0,
      data3: 0,
      active: "tab-container1",
      swipe: true,
      // topStatus: "loading"
      searchCondition:{  // 分页属性  
        pageNo:"1",  
        pageSize:"10"  
      },  
      allLoaded: true, // 是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
      scrollMode:"auto", // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  
      firstLoad: true, // 第一次装载数据使用
    }
  },
  mounted(){  
    this.loadPageList();  //初次访问查询列表  
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
      // ...下拉加载更多数据 
      this.loadPageList();  
      // 查询完移除topLoadingText 
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {  
      // ...下拉加载更多数据  
      this.more();// 上拉触发的分页查询  
      this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位  
      console.log("上拉。。。。")
    }, 
    // topStatus(status) {
    //   console.log("status: " + id)
    //   this.topStatus = status

    // },
    loadPageList() {  
      this.isHaveMore(true); 
      if (this.firstLoad) {
        this.data1 += 5; 
        this.data2 += 5; 
        this.data3 += 5; 
        this.firstLoad = false;
      } else {
        switch (this.active) {
          case "tab-container1" :
            this.data1 += 5; 
            break;
          case "tab-container2" :
            this.data2 += 5; 
            break;
          case "tab-container3" :
            this.data3 += 5; 
            break;          
        }    
      }  
      this.$nextTick(function () {  
        // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，  
        // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，  
        // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好  
        this.scrollMode = "touch";  
      });   
    }, 
    more() {  
      // 分页查询  
      this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;  
      this.loadPageList();  
    },  
    isHaveMore(isHaveMore) {  
      // 是否还有下一页，如果没有就禁止上拉刷新  
      this.allLoaded = true; //true是禁止上拉加载  
      if(isHaveMore){  
        this.allLoaded = false;  
      }  
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

