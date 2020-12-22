<template>
<div class="goshop">
<!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 导航栏结束 -->
<!-- 商品轮播 -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in imageArr" :key="item.id"><img :src="item.img_url" alt=""></van-swipe-item>
</van-swipe>
<!-- 商品保障 -->
<div class="goodsprotect">
  <span>30天无忧退货</span>
  <span>48小时快速退款</span>
  <span>满88元免邮费</span>
</div>
<!-- 商品详情 -->
<div class="info">
  <p class="info_name">{{info.name}}</p>
  <p class="info_des">{{info.goods_brief}}</p>
  <p class="info_price">${{info.retail_price}}</p>
</div>
<!-- 点击弹出商品规格 -->
<van-cell is-link @click="show = !show">请选择规格参数</van-cell>
<van-popup closeable v-model="show" position="bottom" :style="{ height: '40%' }">
  <div class="header clear">
    <img :src="info.primary_pic_url" alt="">
    <div>
      <p>价格:${{info.retail_price}}</p>
      <p>请选择数量</p>
    </div>
  </div>
  <div class="computed">
    <span>数量</span>
    <div class="icon">
      <van-icon name="minus"  @click="delNumber" />&nbsp;{{number}}&nbsp;<van-icon @click="addNumber" name="plus" />
    </div>
  </div>
</van-popup>

<!-- 商品参数 -->
<div class="shop_info">
  <h4>商品参数</h4>
  <ul>
    <li v-for="(item,index) in shopinfo" :key="index">
      <span>{{item.name}}:</span><span>{{item.value}}</span>
    </li>
  </ul>
</div>

<!-- 商品图片 -->
<div  class="shop_image" v-html="info.goods_desc"></div>

<!-- 大家都在看 -->
<div class="all_see">
  <div class="all_header">
    <span></span>大家都在看<span></span>
  </div>
  <ul>
    <li v-for="item in allsee" :key="item.id">
      <img :src="item.list_pic_url" alt="">
      <p>{{item.name}}</p>
      <p>${{item.retail_price}}</p>
    </li>
  </ul>
</div>


<!-- 底部购物栏 -->
<van-goods-action>
  <van-goods-action-icon icon="cart-o" @click="goCart"  :badge="newNumber" text="购物车" />
  <van-goods-action-icon icon="star" :text="collected?'已收藏':'未收藏'" :color="collected?'#ff5000':'#ccc'" @click="collect" />
  <van-goods-action-button @click="addcart" type="warning" text="加入购物车" />
  <van-goods-action-button @click="imdparse" type="danger" text="立即购买" />
</van-goods-action>
</div>
</template>
<script>
import '../../../assets/css/goshop_shop_image.css'
import {detailaction,addcollect,addCart} from '../../../api/category/index.js'
import {mapState} from 'vuex'
export default {
    data() {
      return {
        //商品id
        goodsId:'',
        //商品轮播图数组
        imageArr:[],
        //商品信息info
        info:[],
        //规格窗口
        options:[],
        show:false,
        //收藏
        collected:false,
        //购买数量
        number:1,
        //商品参数数组
        shopinfo:[],
        //大家都在看数组
        allsee:[],
        //判断用户点击添加购物车或者购买时是不是第一次
        isclick:true,
        addCar:true,
        //购物车中商品数量
        allnumber:''
      }
    },
    methods: {
      //添加商品数量
      addNumber(){
        this.number++
      },
      //减少商品数量
      delNumber(){
        if(this.number<=1){
          return
        }else{
          this.number--
        }
      },
      //点击收藏
      collect(){
        this.collected = !this.collected
        console.log(this.goodsId);
        addcollect({
          openId:localStorage.getItem('openId'),
          goodsId:this.goodsId
        }).then(res=> {
          console.log(res);
        })
      },
      //添加购物车
      addcart() {
          this.show = true
        if(!this.addCar) {
          //添加购物车商品数量
          addCart({
            goodsId:this.goodsId,
            number:this.number,
            openId:localStorage.getItem('openId')
          }).then(res=>{
            this.getGoodsDetail()
            this.number = 1
            this.show = false
          })
        }
        this.addCar = false
      },
      //立即购买
      imdparse(){
         this.show = true
        if(!this.isclick){
          console.log(this.number);
            addCart({
            goodsId:this.goodsId,
            number:this.number,
            openId:localStorage.getItem('openId')
          }).then(res=>{
            this.getGoodsDetail()
            this.number = 1
         //跳转到订单结算界面
        this.goCart()
          })
        }
        this.isclick = false
      },
      //进入购物车界面
      goCart() {
        this.$router.push({path:'/addcart'})
      },
      //返回上一个界面
      onClickLeft() {
        this.$router.push(`${this.previousRouter}`)
      },
      //获取商品详情
      getGoodsDetail(){
        console.log(this.goodsId);
          detailaction({
            id:Number(this.goodsId),
            openId:localStorage.getItem('openId')
          }).then(res=> {
            this.imageArr = res.gallery
            this.info = res.info
            this.collected = res.collected
            this.shopinfo = res.attribute
            this.allsee = res.productList
            this.allnumber = res.allnumber
            console.log(res);
          })
      }
    },
    computed: {
      ...mapState(['previousRouter']),
      newNumber(){
        return this.allnumber
      }
    },
    created() {
      //获取商品id
      console.log(this.$route.query.id);
      this.goodsId = this.$route.query.id
      this.getGoodsDetail()
    },
}
</script>
<style lang="scss" scoped>
.goshop {
  height: 100%;
  width: 100%;
  background-color: rgb(248, 245, 245);
}
.clear::after {
  content: "";
  display: block;
  visibility: hidden;
  clear: both;
}
.my-swipe {
  margin-top: 0;
  img {
    height: 414px;
  }
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

.info {
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    padding: 10px 0 0 0;

  }
    p:nth-of-type(2) {
      color: #999;
  }
    p:nth-of-type(3) {
      color: #b4282d;
      font-size: 16px;
  }
}

.van-cell__value--alone {
  font-size: 12px;
  transform: scale(.8);
  text-align: left;
}
.van-cell__value {
  margin-left: -30px;
}
.van-goods-action {
  z-index: 9999;
}

.header {
  height: 100px;
  width: 100%;
  overflow: hidden;
  img {
    width: 100px;
    margin: 20px 0 20px 20px;
    float: left;
  }
  p:nth-of-type(1) {
    margin-top: 40px;
    color: #b4282d;
    font-size: 12px;
  }
}
.computed {
  margin: 30px 0 10px 20px;
  .icon {
    margin-top: 20px;
  }
  .van-icon{
    background-color: #f2f3f5;
    padding: 8px;
  }
}
.computed>span {
  font-size:12px;
}
.shop_info {
  background-color: #fff;
  margin-top: 20px;
  padding-bottom: 20px;
  h4 {
    font-size: 20px;
    margin: 10px 0 20px 20px;
  }
  ul {
    padding:0 30px;

    li {
      padding: 10px 0;
      background-color: #f7f7f7;
      margin-top: 5px;
      display: flex;
      span:nth-of-type(1) {
        width: 80px;
        font-size: 14px;
        color: #999;
      }
       span:nth-of-type(2) {
         flex: 1;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         width: auto;
      }
    }

  }
}


 .all_see {
   
   .all_header {
     background-color: #fff;
     padding: 10px 0;
     text-align: center;
     height: 20px;
     line-height: 20px;
     span{
       display: inline-block;
       height: 1px;
       width: 20px;
       background-color: #ccc;
       margin-bottom: 4px;
     }
   }
   ul{
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     padding: 0 10px;
     li{
       background-color: #fff;
       width: 49%;
       padding:0 10px;
       box-sizing: border-box;
       margin-bottom: 10px;
       img {
         width: 100%;
       }
     }
   }
 }

 .info_des {
   margin: 10px 0;
 }
 .info_name {
   margin-top: 10px;
 }
</style>