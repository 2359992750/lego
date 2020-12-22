<template>
<div class="cart">
<div class="goodsprotect">
  <span>30天无忧退货</span>
  <span>48小时快速退款</span>
  <span>满88元免邮费</span>
</div>
<!-- 订单商品列表 -->
<van-swipe-cell v-for="item in cartlist" :key="item.id">
  <van-checkbox @click="getGoodsId(item.goods_id)" v-model="item.ischecked" checked-color="#ee0a24"></van-checkbox>
  <van-card
    :num="item.number"
    :price="item.retail_price*item.number"
    :title="item.goods_name"
    class="goods-card"
    :thumb="item.list_pic_url"
  />
  <template #right>
    <van-button @click="del(item.id)" style="height:100%" square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
<!-- 下单部分 -->
<van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checkedall">全选</van-checkbox>
</van-submit-bar>
<!-- 底部tabbar -->
  <tabbar></tabbar>
</div>
</template>
<script>
import tabbar from '../../components/Tabbar.vue'
import {cartList,deleteAction,submitAction} from '../../api/category/index.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      //购物车列表
      cartlist:[],
      //商品id
      goodsid:'',
     
    }
  },
  methods: {
    //获取商品id
    getGoodsId(id){
      console.log(id);
      this.goodsid+=id+','
    },
    //提交订单
    onSubmit() {
      var enough = this.cartlist.some(item=>item.ischecked)
     if(enough){
       submitAction({
         allPrise:this.totalPrice/100,//商品总价
         goodsId:`${this.goodsid.substr(0,this.goodsid.length-1)}`,  //商品id，多个商品之间用,逗号隔开
         openId:localStorage.getItem('openId')
       }).then (res=> {
         console.log(res);
       this.$router.push({path:'/addcart/order'})
       })
     }else {
       this.$toast.fail('请选择商品')
     }
    },
    //删除商品
    del(id) {
      console.log(id);
      deleteAction({id}).then(res=>{
        this.getCatlist()
      })
    },
    //获取购物车数据
    getCatlist(){
      cartList({openId:localStorage.getItem('openId')}).then(res=> {
      var total = 0
      res.data.forEach(item=> {
        item.ischecked = false
       total+=item.number*item.retail_price
      })
      this.cartlist=res.data
      console.log(this.cartlist);
    })
    }
  },
  computed: {
    //计算总价
    totalPrice(){
      var total=0
      this.cartlist.forEach(item=> {
        if(item.ischecked){
          total+=item.number*item.retail_price
        }
      })
      return total*100
    },
    //判断全选
    checkedall:{
      set(val) {
        this.cartlist.forEach(item=>item.ischecked=val)
      },
      get() {
        return this.cartlist.length>0?this.cartlist.every(item=>item.ischecked):false
      }
    }
  },
  created () {
    this.getCatlist()
  },
  components:{
    tabbar
  }
}
</script>
<style lang="scss" scoped>
.cart {
  height: 100vh;
  width: 100%;
  background-color: rgb(247, 245, 245);
}
.goodsprotect {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #f4f4f4;
  color: #666;
  font-size: 12px;
  span {
    position: relative;
  }
  span::before {
    content: '';
    display: block;
    background: url('http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png') no-repeat top center;
    background-size: 100%;
    height: 6px;
    width: 6px;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.goods-card {
  .van-card__bottom {
    line-height: 50px;
  }
  .van-card__title {
    line-height: 40px;
  }
 .van-card__price-integer{
   font-size: 12px;
   color: rgb(195, 85, 89);
 }
 .van-card__price {
   color: rgb(195, 85, 89);
 }
}
.van-checkbox {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  z-index: 9999;
}
.van-submit-bar {
  margin-bottom: 55.19px;
}
</style>