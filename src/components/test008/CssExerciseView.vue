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
      <el-col :span="11">
        <el-form ref="form1" :model="form1" label-width="120px">
          <el-form-item label="图片+浮层：">
            <div class="img-content1">
              <!-- 图片 -->
              <!-- <img src="../../../static/img/001.png" class="img1"> -->
              <img :src="getPic()" class="img1">
              <!-- 图片浮层 -->
              <div class="cover-img"></div>
              <div class='cover-btn'>
                <div class='btn'><a>重传</a></div>
                <div class='btn'><a>删除</a></div>
              </div>
            </div>
          </el-form-item>         
          <el-form-item label="margin(外边距)：">
            <div class="margin-div1">
              <div class="margin-div2">
              </div>
            </div>
          </el-form-item>
          <el-form-item label="块元素：">
            <div class="display1">
              <div class="block-div">
              </div>
              <div class="block-div">
              </div>
            </div>
          </el-form-item>
          <el-form-item label="浮动元素：">
            <div class="float-div">
            </div>
            <div class="float-div">
            </div>
            <div class="float-div">
            </div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="11">
        <el-form ref="form2" :model="form2" label-width="120px">
          <el-form-item label="背景图片：">
            <div class="img-content2">
              <img class="img2">
            </div>
          </el-form-item>
          <el-form-item label="padding(填充)：">
            <div class="padding-div1">
              <div class="padding-div2">
              </div>
            </div>
          </el-form-item>
          <el-form-item label="内联元素：">
            <div class="display2">
              <div class="inline-div">
              </div>
              <div class="inline-div">
              </div>
            </div>
          </el-form-item>
          <el-form-item label="垂直居中：">
            <div class="center-div">
              <div class="line-height-div">
              </div>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  components : {

  },
  data() {
    return {
      form1: {},
      form2: {}
    }
  },
  methods: {
    getPic() {
      let picJsonString = "[\"http://scpg-uat.oss-cn-shanghai.aliyuncs.com/yinli/058a8070-6c8e-407f-9018-12885fc40aa5.png\"]"
      let pic = JSON.parse(picJsonString)
      return pic
    }

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
.img-content1 {
  position: relative;
  width: 150px;
  height: 90px;
  border: 1px solid #0000ff;
  border-radius: 10px;
  overflow: hidden;
}
.img1 {
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
  display: none; /* 隐藏元素 */
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
.img-content1:hover .cover-img {
  opacity: 0.3;
}
.img-content1:hover .cover-btn {
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

.img-content2 {
  position: relative;
  width: 90px;
  height: 90px;
  border: 1px dashed #0000ff;
}
.img2 {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("../../../static/img/002.gif");
  background-size: 100% 100%;
}
.margin-div1 {
  width: 150px;
  height: 150px;
  background-color: #ff0000;
  border: 1px solid #000000;
}
.margin-div2 {
  width: 100px;
  height: 100px;
  background-color: #000000;
  border: 1px solid #00ff00;
  margin: 25px;
}
.padding-div1 {
  width: 150px;
  height: 150px;
  background-color: #00ff00;
  padding: 25px;
  box-sizing: border-box; /* 这句话使padding不影响整体大小 */
}
.padding-div2 {
  width: 100px;
  height: 100px;
  background-color: #000000;
  border: 1px solid #ff0000;
}
.display1 {
  width: 300px;
  height: 150px;
  background-color: yellow;
  display: block;
  padding-top: 25px;
}
.block-div {
  width: 100px;
  height: 50px;
  background-color: #000000;
  border: 1px solid #ff0000;
  margin: auto; /* 水平居中 */
  margin-bottom: 25px;
}
.display2 {
  width: 300px;
  height: 150px;
  background-color: blue;
  display: inline-flex;
}
.inline-div {
  width: 100px;
  height: 50px;
  background-color: #000000;
  border: 1px solid #ff0000;
  margin: auto; /* 水平居中 */
}
.float-div {
  float:left;
  width: 60px;
  height: 30px;
  background-color: aqua;
  border: 1px solid #000000;
  margin-right:5px;
}
.center-div {
  width: 260px;
  height: 100px;
  border: 1px solid #000000;
  line-height: 100px; /* 必须 */  
  text-align: center; /* 水平居中 */
}
.line-height-div {
  width: 60px;
  height: 30px;
  background-color: aqua;
  border: 1px solid #ff0000;
  display: inline-block; /* 必须 */
  vertical-align: middle; /* 垂直居中 */
}
</style>

