<template>
  <bs-pages-list :breadcrumb='breadcrumb'>
    <template slot='search'>
      <bs-condition v-model='condition' @submit='submit' :rules='rules'>
        <bs-condition-item title='输入条件' type='text' prop='input1' placeholder='请填写条件'></bs-condition-item>
        <bs-condition-item title='选择条件' type='select' :options='selectOptions' prop='select1' placeholder='请选择条件'></bs-condition-item>
      </bs-condition>
    </template>
    <div slot='list'>
      <bs-table :data='tableList' border stripe v-loading.body='tableloading'>
        <b s-table-column prop='prop1' label='表头一' header-align='center' min-width='150'>
        </b>
        <bs-table-column prop='prop2' label='表头二' header-align='center' min-width='150'>
        </bs-table-column>
        <bs-table-column prop='prop3' label='表头三' header-align='center' min-width='150'>
        </bs-table-column>
        <bs-table-column prop='prop4' label='表头四' header-align='center' min-width='150'>
        </bs-table-column>
        <bs-table-column prop='prop5' label='表头五' header-align='center' min-width='150'>
        </bs-table-column>
        <bs-table-column prop='prop6' label='表头六' header-align='center' min-width='150'>
        </bs-table-column>
        <bs-table-column label='操作' align='left' fixed='right' header-align='center'>
          <template slot-scope='scope'>
            <bs-button type='text' @click='edit(scope.row)'>编辑</bs-button>
            <bs-button type='text' @click='remove(scope.row)'>删除</bs-button>
          </template>
        </bs-table-column>
      </bs-table>
    </div>
  </bs-pages-list>
</template>
<script>
export default {
  data() {
    return {
      breadcrumb: [
        { name: '丙晟中台表格模版', path: '' }
      ],
      rules: {
      },
      condition: {
        input1: '',
        select1: '',
      },
      selectOptions: [{
        value: '',
        label: '全部'
      },
      {
        value: '1',
        label: '条件1'
      },
      {
        value: '2',
        label: '条件2'
      }],
      tableList: [],
      pageSize: 10,
      pageNo: 1,
      totalCount: 0
    }
  },
  watch: {
  },
  computed: {
  },
  filters: {
  },
  methods: {
    submit(value, pass) {
      if (pass) {
        this.pageNo = 1
        this.condition = value
        this.getTableList(value)
      }
    },
    getTableList(vel) {
      // To get tableList...
    },
    edit (row) {
      this.router.push({ path: '', query: {} })
    },
    remove (row) {
      this.confirm('是否删除该行?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteRow(row)
      }).catch(() => {})
    },
    async deleteRow (row) {
      // To delete tableRow...
      // const data = await deleteRow(row)
      // if (data && data.status === 200) {
      //   this.message.success('删除成功')
      // }
    },
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
}
</script>
<style lang='less'>
</style>