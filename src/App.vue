<template>
  <div id="app">
    <router-view/>
    <!-- 加载 -->
    <loading  v-show="Loading"></loading>
  </div>
</template>
<script>
import loading from './components/Loading.vue'
import {mapState} from 'vuex'
export default {

  computed: {
    ...mapState(['Loading'])
  },
  components:{
    loading
  }
}
</script>
<style lang="scss">
body {
  height: 100vh;
  width: 100vw;
.van-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 150px;
  width: 200px;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
}
</style>
