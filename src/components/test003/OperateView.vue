<template>
  <div>
    <!-- 直接引用 store -->
    <p>直接引用 store</p>
    <input type="button" value="+" @click="$store.commit('add')"/>
    <input type="button" value="-" @click="$store.commit('mul')"/>
    <!-- 通过 mapMutations 简化 -->
    <p>通过 mapMutations</p>
    <el-button @click="add">+</el-button>
    <el-button @click="mul">-</el-button>
    <!-- 通过 mapActions 异步处理 -->
    <p>通过 mapActions</p>
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