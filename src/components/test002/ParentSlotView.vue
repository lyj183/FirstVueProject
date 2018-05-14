<!-- 父组件，用以显示数据 -->
<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
            <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'TestView002' }">TestT002</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="parent-view-content-wrap view-interval child-two-view">
      <el-row class="child-view-content-wrap">
        <!-- 单个插槽 -->
        <el-col :span="8" class="child-view-right-line">
          <h2>我是单个插槽父组件的标题</h2>
          <slot-view>
            <p>这是一些初始内容</p>
            <p>这是更多的初始内容</p>
          </slot-view>
        </el-col>
        <!-- 具名插槽 -->
        <el-col :span="8" class="child-view-right-line">
          <slot-name-view>
            <h2 slot="header">我是具名插槽父组件的标题</h2>
            <p>主要内容的一个段落。</p>
            <p>另一个主要段落。</p>
            <p slot="footer">这里有一些联系信息</p>
          </slot-name-view>
        </el-col>
        <!-- 作用域插槽 -->
        <el-col :span="8">
          <h2>我是作用域插槽父组件的标题</h2>
          <slot-scope-view>
            <!-- 这里有个大坑，element-ui，1.0版本，要用scope=“scope”，而不是slot-scope=“scope”，2.0版本此bug改掉了 -->
            <!-- <template slot-scope="user"> -->
            <template slot-scope="user">
              {{user.data}}
            </template>
          </slot-scope-view>
        </el-col>
      </el-row>
    </div>     
  </div>
</template>

<script>
import slotView from './SlotView.vue'
import slotNameView from './SlotNameView.vue'
import slotScopeView from './SlotScopeView.vue'
export default {
  components : {
    slotView,
    slotNameView,
    slotScopeView
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.child-view-right-line {
  border-right: 1px solid #ddd;
  height: 300px;
}
</style>


