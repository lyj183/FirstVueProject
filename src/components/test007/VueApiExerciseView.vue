<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView007' }">TestT007</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="view-interval child-two-view">
      <h1>vue-html5-editor</h1>
      <vue-html5-editor :content="content" :height="200" @change="updateData"></vue-html5-editor>
    </div>
    <div class="view-interval child-two-view">
      <h1>Element-Upload</h1>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-input v-model="input" placeholder="请输入名称" style="width: 300px"></el-input>
      <p>名称： {{output}}</p>
      <el-button @click="removeLocalStorage">清除名称localStorage</el-button>
      <el-button class="download" type="text" @click='templateDowloadHandle'>下载csv模版</el-button>
    </div>
  </div>
</template>

<script>
// 下载地址
// 1、方法一：直接引用
// let templateUrl = '../../../static/file/templateFile.csv' 
// 2、方法二：在webpack.base.conf添加转换配置，这么用。
/*
  {
    test: /\.(csv|xlsx|xls)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 1,
      name: utils.assetsPath('template/[name].[ext]')
    }
  }
*/
let templateUrl = require('../../../static/file/templateFile.csv')
export default {
  components : {
  },
  data() {
    return {
      content: '',
      input: '',
    }
  },
  methods: {
    updateData(e = ''){  
      this.content = e;  
      console.info(e);  
    },
    removeLocalStorage() {
      localStorage.removeItem('LYJ_FIRSTVUE_TEST007_INPUT');
      // window.location.href="http://localhost:8080";
      // 如果全部清除用：
      // localStorage.clear();

      // 罗列所有localStorage内容
      /*
      for(var i=0; i<localStorage.length; i++)   {
        var getKey=localStorage.key(i);  
        var getVal=localStorage.getItem(getKey);  
        let array=getVal.split(",");  
        console.log(array)
      } 
      */
    },
    templateDowloadHandle() {
      // 方法一：直接下载文档
      window.location=(templateUrl)
      // 方法二：写入文档下载 
      /*
      let tableHeader = [{
        colname: 'type',
        coltext: '类型',
      }, {
        colname: 'name',
        coltext: '商品名称',
      }, {
        colname: 'number',
        coltext: '数量',
      }, {
        colname: 'price',
        coltext: '单价',
      }];
      let tableBody = [{
        type: '食品',
        name: '旺旺雪饼',
        number: '100箱',
        price: '25元/袋'
      }, {
        type: '食品',
        name: '双汇火腿',
        number: '50箱',
        price: '5元/根'
      }, {
        type: '食品',
        name: '毛毛虫面包',
        number: '10箱',
        price: '3元/袋'
      }, {
        type: '食品',
        name: '阿尔卑斯棒棒糖',
        number: '10箱',
        price: '0.5元/个'
      }, {
        type: '食品',
        name: '蒙牛酸奶',
        number: '20箱',
        price: '12.9元/瓶'
      }, {
        type: '水果',
        name: '香蕉',
        number: '10斤',
        price: '2.5元/斤'
      }, {
        type: '水果',
        name: '葡萄',
        number: '20斤',
        price: '4元/斤'
      }, {
        type: '水果',
        name: '榴莲',
        number: '10斤',
        price: '24元/斤'
      }, {
        type: '水果',
        name: '李子',
        number: '20斤',
        price: '4元/斤'
      }];
      var csv = '\ufeff';
      var keys = [];
      tableHeader.forEach(function(item) {
        csv += '"' + item.coltext + '",';
        keys.push(item.colname);
      });
      csv = csv.replace(/\,$/, '\n');
      tableBody.forEach(function(item) {
        var _item = {};
        keys.forEach(function(key) {
        csv += '"' + item[key] + '",';
        });
        csv = csv.replace(/\,$/, '\n');
      });
      csv = csv.replace(/"null"/g, '""');
      var blob = new Blob([csv], {
        type: 'text/csv,charset=UTF-8'
      });
      var csvUrl = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      var now = new Date();
 
      function to2(num) {
        return num > 9 ? num : '0' + num;
      }
      a.download = '进货信息导出' + now.getFullYear() + to2((now.getMonth() + 1)) + to2(now.getDate()) + to2(now.getHours()) + to2(now.getMinutes()) + to2(now.getSeconds()) + '.csv';
      a.href = csvUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      */
    }
  },
  watch: {
    input() {
      // 名称存入LocalStorage
      localStorage.setItem('LYJ_FIRSTVUE_TEST007_INPUT', this.input)
    },
    content(newValue, oldValue) {
        console.log(newValue)
    }
  },
  computed: {
    // output() {
    //   return localStorage.getItem('LYJ_FIRSTVUE_TEST007_INPUT') ? localStorage.getItem('LYJ_FIRSTVUE_TEST007_INPUT') : ''
    // }
    output:() => localStorage.getItem('LYJ_FIRSTVUE_TEST007_INPUT') ? localStorage.getItem('LYJ_FIRSTVUE_TEST007_INPUT') : ''
  }
}
</script>

