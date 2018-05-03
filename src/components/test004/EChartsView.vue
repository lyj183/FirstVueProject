<template>
<div class="parent-view" ref="parentView">
  <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'TestView004' }">TestT004</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
  <div class="echarts view-interval">
    <!-- <i-echarts :option="bar"
      :loading="loading"
      @ready="onReady"
      @click="onClick">
    </i-echarts> -->
    <IEcharts
      :option="bar"
    />
    <el-button @click="doRandom">Random</el-button>
  </div>
</div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.js';
  export default {
    name: 'view',
    components: {
      IEcharts
    },
    props: {
    },
    data() {
      return {
      loading: true,
        bar: {
          title: {
            text: 'ECharts'
          },
          tooltip: {},
          xAxis: {
            // type: 'category',
            data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
          },
          yAxis: {},
          series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    methods: {
      doRandom() {
        const that = this;
        let data = [];
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        that.loading = !that.loading;
        that.bar.series[0].data = data;
      },
      onReady(instance, ECharts) {
        console.log(instance, ECharts);
      },
      onClick(event, instance, ECharts) {
        console.log(arguments);
      }
    }
  };
</script>

<style scoped>
  .echarts {
    width: 800px;
    height: 400px;
  }
</style>
