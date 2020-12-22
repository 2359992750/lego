<template>
<div class="own">
  <!-- 头像 -->
  <div class="user_avator">
    <div class="avator">
      <img :src="user.avatarUrl" alt="">
      <span>{{user.nickName}}</span>
    </div>
  </div>
  <!-- 小功能界面 -->
  <ul>
    <li @click="shopcart"><a href="javascript:;">我的订单</a></li>
    <li><a href="javascript:;">优惠券</a></li>
    <li><a href="javascript:;">我的足迹</a></li>
    <li @click="favorite"><a href="javascript:;">我的收藏</a></li>
    <li @click="adress"><a href="javascript:;">地址管理</a></li>
    <li><a href="javascript:;">联系客服</a></li>
    <li><a href="javascript:;">帮助中心</a></li>
    <li @click="submitAction"><a href="javascript:;">意见反馈</a></li>
    <li></li>
  </ul>
  <!-- 底部 -->
  <tabbar></tabbar>
</div>
</template>
<script>
import tabbar from '../../components/Tabbar.vue'
export default {
  data() {
    return {
      //用户信息
      user:''
    }
  },
  methods: {
    //跳转到购物车
    shopcart() {
      this.$router.push('/addcart')
    },
    //跳转到收藏
    favorite(){
      this.$router.push({path:'/own/favorite'})
    },
    //跳转到管理地址界面
    adress(){
      this.$router.push({path:'/own/adress'})
    },
    //跳转到意见反馈
    submitAction() {
      this.$router.push({path:'/own/submitAction',query:{
        username:this.user.nickName
      }})
    }
  },
  components: {
    tabbar
  },
  created() {
    //获取用户信息
  this.user = JSON.parse(localStorage.getItem('userInfo'))
  console.log(this.user);
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('commitRouter',from.path)
    next()
  }
}
</script>
<style lang="scss" scoped>
.own {
  height: 100vh;
  width: 100%;
  background-color: rgb(243, 243, 243);
}
.user_avator {
  height: 150px;
    background-color: #333;
    display: flex;
    align-items: center;
  .avator {
    img {
    margin-left: 20px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    vertical-align: middle;
    }
    span {
      color: #fff;
     font-size: 14px;
     margin-left: 20px;
    }
  }

}
ul {
  background-color: #fff;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 33.3%;
    padding: 27.6px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-right: 1px solid rgb(218, 216, 216);
    border-bottom: 1px solid rgb(218, 216, 216) ;
   a {
     color: #333;
   }
  }
  li:nth-of-type(3),li:nth-of-type(6),li:nth-of-type(9) {
    border-right: 0;
  }
  li:nth-of-type(9),li:nth-of-type(7) ,li:nth-of-type(8)  {
    border-bottom: 0;
  }
}
</style>