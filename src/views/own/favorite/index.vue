<template>
<div class="favorite">
  <!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 收藏内容 -->
<div class="content">
  <h2>我的收藏</h2>
  <ul>
    <li v-for="item in list" :key="item.id">
      <img :src="item.list_pic_url" alt="">
      <p>{{item.name}}</p>
      <p>${{item.retail_price}}</p>
    </li>
    <li style="width:48%; background-color: transparent;" ></li>
  </ul>
</div>
</div>
</template>
<script>
import {listAction} from '../../../api/own/index.js'
export default {
  data() {
    return {
      //收藏列表
      list:[]
    }
  },
  methods: {
    //返回上一级
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  created() {
    //获取收藏列表
    listAction({openId:localStorage.getItem('openId')}).then(res=>{
      console.log(res);
      this.list = res.collectGoodsList
    })
  },
}
</script>
<style lang="scss" scoped>
.favorite {
  height: 100%;
  width: 100%;
  background-color: rgb(240, 240, 240);
}
.van-nav-bar {
  border-bottom: 1px solid rgb(235, 233, 233);
}
.content {
  background-color: #fff ;
  text-align: center;
  overflow: hidden;

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: rgb(240, 240, 240);
    li {
       background-color: #fff;
      width: 48%;
      box-sizing: border-box;
      padding: 10px;
      margin-top: 5px;
      img{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
      }

      p:nth-of-type(2) {
        color: #9c3232;
      }
    }
  }
}

</style>