<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView009' }">TestView009</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="view-interval child-two-view">
      <h1>Table拓展</h1>
      <div>
        <el-table :data="tableData" style="width: 100%" stripe border :show-header="false" @cell-mouse-enter="handleCellMouseEnter" @cell-mouse-leave="handleCellMouseLeave">
          <el-table-column min-width="160" header-align="center" label="">
						<template slot-scope="scope">
							<div style="float:left;">{{scope.row.firstphone}}</div>
							<div style="float:right;"  v-show="scope.row.firstphone">
								<el-popover placement="top" trigger="hover" content="移除黑名单" popper-class="close-popper">
									<i slot="reference" class="el-icon-close" style="margin-top:3px;font-size:14px;display:none;" @click="handleClose(scope.row.firstphone)"></i>
								</el-popover>
							</div>
            </template>
          </el-table-column>
          <el-table-column prop="secondphone" min-width="160" header-align="center" label="">
            <template slot-scope="scope">
							<div style="float:left;">{{scope.row.secondphone}}</div>
							<div style="float:right;"  v-show="scope.row.secondphone">
								<el-popover placement="top" trigger="hover" content="移除黑名单" popper-class="close-popper">
									<i slot="reference" class="el-icon-close" style="margin-top:3px;font-size:14px;display:none;" @click="handleClose(scope.row.secondphone)"></i>
								</el-popover>
							</div>
            </template>
          </el-table-column>
          <el-table-column prop="thirdphone" min-width="160" header-align="center" label="">
						<template slot-scope="scope">
							<div style="float:left;">{{scope.row.thirdphone}}</div>
							<div style="float:right;" v-show="scope.row.thirdphone">
								<el-popover placement="top" trigger="hover" content="移除黑名单" popper-class="close-popper">
									<i slot="reference" class="el-icon-close" style="margin-top:3px;font-size:14px;display:none;" @click="handleClose(scope.row.thirdphone)"></i>
								</el-popover>
							</div>
            </template>
          </el-table-column>
          <el-table-column prop="fourthphone" min-width="160" header-align="center" label="">
						<template slot-scope="scope">
							<div style="float:left;">{{scope.row.fourthphone}}</div>
							<div style="float:right;"  v-show="scope.row.fourthphone">
								<el-popover placement="top" trigger="hover" content="移除黑名单" popper-class="close-popper">
									<i slot="reference" class="el-icon-close" style="margin-top:3px;font-size:14px;display:none;" @click="handleClose(scope.row.fourthphone)"></i>
								</el-popover>
							</div>
            </template>
          </el-table-column>
          <el-table-column prop="fifthphone" min-width="160" header-align="center" label="">
            <template slot-scope="scope">
							<div style="float:left;">{{scope.row.fifthphone}}</div>
							<div style="float:right;" v-show="scope.row.fifthphone">
								<el-popover placement="top" trigger="hover" content="移除黑名单">
									<i slot="reference" class="el-icon-close" style="margin-top:3px;font-size:14px;display:none;" @click="handleClose(scope.row.fifthphone)"></i>
								</el-popover>
							</div>
            </template>
          </el-table-column>
          <el-table-column prop="sixthphone" min-width="160" header-align="center" label="">
						<template slot-scope="scope">
							<div style="float:left;">{{scope.row.sixthphone}}</div>
							<div style="float:right;" v-show="scope.row.sixthphone">
								<el-popover placement="top" trigger="hover" content="移除黑名单" popper-class="close-popper">
									<i slot="reference" class="el-icon-close" style="margin-top:3px;font-size:14px;display:none;" @click="handleClose(scope.row.sixthphone)"></i>
								</el-popover>
							</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import mock from'../../../static/mock/data004.js'
export default {
  components : {

  },
  data() {
    return {
      tableData: [],
      mobileMapId: {}
    }
  },
  mounted() {
    var i, arr, item, list, len;  
    list = [];
    len = Math.ceil(mock.data.list.length / 6);
    if(mock.status === 200) {
      for (i = 0; i < len; i++) {
        arr = mock.data.list.slice(i * 6, (i + 1) * 6);
        item = {
          firstphone: "",
          secondphone: "",
          thirdphone: "",
          fourthphone: "",
          fifthphone: "",
          sixthphone: ""
        };
        if (arr.length > 0) {
          item.firstphone = arr[0].mobile;
          this.mobileMapId[item.firstphone] = arr[0].id;
        }
        if (arr.length > 1) {
          item.secondphone = arr[1].mobile;
          this.mobileMapId[item.secondphone] = arr[1].id;
        }
        if (arr.length > 2) {
          item.thirdphone = arr[2].mobile;
          this.mobileMapId[item.thirdphone] = arr[2].id;
        }
        if (arr.length > 3) {
          item.fourthphone = arr[3].mobile;
          this.mobileMapId[item.fourthphone] = arr[3].id;
        }
        if (arr.length > 4) {
          item.fifthphone = arr[4].mobile;
          this.mobileMapId[item.fifthphone] = arr[4].id;
        }
        if (arr.length > 5) {
          item.sixthphone = arr[5].mobile;
          this.mobileMapId[item.sixthphone] = arr[5].id;
        }
        list.push(item);
      }
      this.tableData = list;
    }
    
  }, 
  methods: {
    handleClose(mobile) {
      console.log("移除：", mobile);
    },
    handleCellMouseEnter(row, column, cell, event) {
      var closeDom = cell.getElementsByClassName("el-icon-close");
      closeDom[0].style.display = "block";
    },
    handleCellMouseLeave(row, column, cell, event) {
      var closeDom = cell.getElementsByClassName("el-icon-close");
      closeDom[0].style.display = "none";
    },
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style>

</style>

