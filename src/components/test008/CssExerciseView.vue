<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView007' }">TestT007</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="view-interval child-two-view">
      <h2>CSS</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="图片：">
          <div class="img-content">
            <!-- 图片 -->
            <img src="../../../static/img/001.png" class="img">
            <!-- 图片浮层 -->
            <div class="cover-img"></div>
            <div class='cover-btn'>
              <div class='btn'><a>重传</a></div>
              <div class='btn'><a>删除</a></div>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  components : {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style>
/* 传统的写法 */
/* == 传统的写法 图片+悬浮层 开始 == */
.img-content {
  position: relative;
  width: 150px;
  height: 90px;
  border: 1px solid #0000ff;
  border-radius: 10px;
  overflow: hidden;
}
.img {
  position: absolute;
  height: 100%;
  width: 100%;
}
.cover-img {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000000;
  opacity: 0;
  z-index: 10;
}
.cover-btn {
  position: absolute;
  display: none;
  width: 50%;
  height: 30px;
  margin:0 25%;
  top: 30px;
  left: 0;
  z-index: 20;    
}
.btn {
  float: left;
  width: 50%;
  color: #FFF;
  line-height: 30px;
  font-size: 14px;
  box-sizing: border-box;  
  text-align: center;
}   
.img-content:hover .cover-img {
  opacity: 0.3;
}
.img-content:hover .cover-btn {
  display: block;
}
/* == 传统的写法 图片+悬浮层 结束 == */

/* <style lang="less">的写法 */
/* == <style lang="less">的写法 图片+悬浮层 开始 == */
/* .img-content {
  position: relative;
  width: 150px;
  height: 90px;
  border: 1px solid #0000ff;
  border-radius: 10px;
  overflow: hidden;
  height: 90px;
  .img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    .cover-img {
      opacity: 0.3;
    }
    .cover-btn {
      display: block;
    }
  } 
  .cover-img {
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 90px;
    background-color: #000000;
    opacity: 0;
    color: #FFFFFF;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .cover-btn {
    display: none;
    position: absolute;
    margin:0 25%;
    top: 30px;
    left: 0;
    height: 30px;
    z-index: 20;
    width: 50%;
    div {
      float: left;
      width: 50%;
      color: #FFF;
      line-height: 30px;
      font-size: 14px;
      box-sizing: border-box;  
      text-align: center;
    }       
  }
} */
/* == <style lang="less">的写法 图片+悬浮层 结束 == */
</style>

