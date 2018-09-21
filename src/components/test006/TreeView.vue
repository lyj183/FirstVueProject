<template>
  <div class="parent-view" ref="parentView">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView006-2' }">TestT006-2</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="view-interval child-two-view">
      <h1>Tree 树形控件</h1>
      <el-row type="flex"> 
        <el-col :span="8">
          <el-tree :data="data" 
                  :props="defaultProps" 
                  @node-click="handleNodeClick">
          </el-tree>
        </el-col>
        <el-col :span="8">
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
          </el-tree>
        </el-col>
        <el-col :span="8">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>

          <el-tree
            class="filter-tree"
            :data="data3"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree3">
          </el-tree>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components : {

  },
  data() {
    return {
      data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],

        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],

        filterText: '',

        data3: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],

        defaultProps: {
          children: 'children',
          label: 'label',
          id: 'id'
        }
    }
  },
  mounted(){  
    
  }, 
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },

    filterNode(value, data) {
      console.log("value");
      console.log(value);
      console.log("data");
      console.dir(data);
      if (!value) return true;
      return _.findIndex(value, item => item==data.id)!==-1  // 大牛指点！回头要了解下。
    
      //return data.id == value[0] || data.id == value[1] || data.id == value[2];
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree3.filter([9,10,8]);
    }
  },
  computed: {

  }
}
</script>

<style>

</style>

