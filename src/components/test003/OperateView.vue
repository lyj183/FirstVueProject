<template>
  <div>
    <input type="button" value="+" @click="$store.commit('add')"/>
    <input type="button" value="-" @click="$store.commit('mul')"/>
    <!-- 通过 mapMutations 简化 -->
    <el-button @click="add">+</el-button>
    <el-button @click="mul">-</el-button>
    <!-- 通过 mapActions 异步处理 -->
    <el-button type="primary" @click="addAction">+</el-button>
    <el-button type="primary" @click="mulAction">-</el-button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'add',
      'mul'
    ]),
    ...mapActions([
      'addAction', 
      'mulAction'
    ])
  }
}
</script>