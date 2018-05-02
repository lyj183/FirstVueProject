<template>
<div>
  <div>Count: {{$store.state.count}}</div>
  <div>ComputedCount: {{computedCount}}</div>
  <div>MapStateCount: {{mapStateCount}}</div>
  <div>GettersCount: {{gettersCount}}</div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data() {
    return {
    }
  },
  computed: {
    computedCount() {
      return this.$store.state.count * 3;
    },
    ...mapState({
      mapStateCount: state => state.count * 4
    }),
    // gettersCount() {
    //   return this.$store.getters.count
    // }
    // 上述代码简化为：
    ...mapGetters({
      gettersCount: 'count'
    })
  },

  methods: {

  }
}
</script>