<template>
<div>
  <van-nav-bar
  title="分类详情"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="content" v-html="datalist.content"></div>
<!-- 专题精选 -->
<ul>
  <li v-for="item in otherlist" :key="item.id">
    <img :src="item.item_pic_url" alt="">
    <p>{{item.title}}</p>
  </li>
</ul>
</div>
</template>
<script>
import '../../assets/css/catedelc.css'
export default {
  data() {
    return {
      //模板
      datalist:'',
      otherlist:''
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  created() {
    console.log(JSON.parse(this.$route.query.topicList));
    this.datalist = JSON.parse(this.$route.query.item)
    this.otherlist = JSON.parse(this.$route.query.topicList)

  }
}
</script>
<style lang="scss" scoped>
.van-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.content {
  margin-top: 50px;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    width:90%;
    img {
      width: 100%;
      height: 216.8px;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>