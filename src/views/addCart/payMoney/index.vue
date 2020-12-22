<template>
<div class="order">
<!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 地址 -->
<div class="info" v-if="adressid!=''" @click="goadressList">
  <div class="adress">
    <div class="img"></div>
   <van-cell  is-link>
  <template #title>
    <div class="userinfo"><div>{{adress.name}}</div><div v-if="adress.is_default==1">默认</div></div>
    <div class="useradress"><div>{{adress.mobile}}</div><div>{{adress.address}}</div></div>
  </template>
</van-cell>
  </div>
</div>
<div v-else @click="goadressList">
  <van-cell  is-link>
  <template #title>
    <span  v-if="!adress.name">获取地址</span>
    <div v-else style="display:flex">
    <div  class="userinfo"><div>{{adress.name}}</div><div v-if="adressid">默认</div></div>
    <div  class="useradress"><div>{{adress.mobile}}</div><div>{{adress.address}}</div></div>
    </div>
  </template>
</van-cell>
</div>
<!-- 详情 -->
<div class="goods_price">
  <div>
    <span>商品合计</span>
    <span>￥{{allPrise}}</span>
  </div>
  <div>
    <span>运费</span>
    <span>免运费</span>
  </div>
  <div>
    <span>优惠券</span>
    <span>暂无</span>
  </div>
</div>
<!-- 商品列表 -->
<ul>
  <li v-for="item in goods" :key="item.id">
   <div class="left">
     <img :src="item.list_pic_url" alt="">
     <div>
       <p>{{item.goods_name}}</p>
       <p>￥{{item.retail_price}}</p>
     </div>
   </div>
   <span class="right">x{{item.number}}</span>
  </li>
</ul>
<!-- 支付按钮 -->
<div class="pay_btn">
  <div class="content">
    <p>实付 : <span>￥{{total}}</span></p>
    <a @click="pay">支付</a>
  </div>
</div>
</div>
</template>
<script>
import {detailAction} from '../../../api/category/index'
import {getListAction} from '../../../api/own/index.js'
export default {
  data() {
    return {
      //默认收货地址id
      adressid:'',
       //默认地址数据
      adress:'',
      //总价
      allPrise:'',
      //商品列表
      goods:[],
      
    }
  },
  methods: {
    //支付按钮
    pay(){
      this.$toast.fail('还未开通功能')
      this.$store.commit('commitShow', false)
    },
    //跳转到地址列表 
    goadressList(){
      this.$router.push({path:'/own/adress'})
      this.adress = ''
      this.adressid = ''
      this.$store.commit('commitShow', true)
    },
    //返回上一级
    onClickLeft(){
      this.$router.push('/addcart')
      this.$store.commit('commitShow', false)
    }
  },
  computed:{
    total(){
      var total_price = 0
      this.goods.forEach(item=> {
        total_price+=item.retail_price*item.number
      })
      return total_price
    }
  },
  created() {
     //获取收货地址列表
    getListAction({openId:localStorage.getItem('openId')}).then(res=> {
       res.data.forEach(item=>{
         if(item.is_default==1){
           this.adressid = item.id
         }
       })

     console.log('执行');
     console.log(this.adressid);
     console.log(this.$store.state.goshow);
      if(!this.$store.state.goshow){
        console.log("进入");
        //获取订单信息
        detailAction({
          openId:localStorage.getItem('openId'),
          addressId:this.adressid
        }).then(res=> {
          console.log(res);
          this.adress = res.address
          this.allPrise = res.allPrise
          this.$store.commit('commitgoodsList',res.goodsList)
          if(this.$store.state.goodsList){
            this.goods = this.$store.state.goodsList
            console.log(1);
          }else {
            this.goods = res.goodsList
          }
        })
      }else {
        //获取点击的地址
          if(!this.adress){
          this.goods = this.$store.state.goodsList
          this.adress = this.$route.query.item
          }
      }
    })

  },
}
</script>
<style lang="scss" scoped>
.pay_btn {
  width: 100%;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  .content {
    width: 100%;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    p span {
      color: #b4282d;
    }
    a{
      text-align: center;
      display: block;
      height: 100%;
      line-height: 50px;
      color: #fff;
      font-size: 15px;
      background-color: #b4282d;
      width: 110px;
      height: 50px;
      
    }
  }
}

.img {
  background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png');
  width: 100%;
  height: 9px;
}
.van-cell__title p {
  margin: 0;
}

.van-cell__title {
  display: flex;
}

.userinfo{
  width: 50px;
  div:nth-of-type(1){
    font-size: 12px;
    color: #333;
  }
  div:nth-of-type(2){
    display: inline-block;
    font-size: 12px;
    height: 17px;
    width: 30px;
    text-align: center;
    line-height: 17px;
    border: 1px solid #b4282d;
    color: #b4282d;
   
  }
}
.van-cell {
  align-items: center;
}
.useradress {
  div:nth-of-type(1){
   color: #333;
 
  }
  div:nth-of-type(2) {
    color: #666;
    font-size: 12px;
  }
}
.goods_price {
  margin-top: 10px;
  background-color: #fff;
  div {
    padding: 13px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(240, 239, 239);
  }
}

ul {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  overflow-y: scroll;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
   .left {
     display: flex;
     align-items: center;
     img {
       height: 80px;
       width: 80px;
     }
     div {
       margin-left: 10px;
     }
   }
  }
}
</style>