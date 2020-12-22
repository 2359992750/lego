<template>
<div class="newsgoods">
<!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 导航栏结束 -->
<!-- 内容 -->
<!-- 点击搜索条目后的数据展示 -->
<div class="banner">
  <img width="100%" src="http://yanxuan.nosdn.127.net/8976116db321744084774643a933c5ce.png" alt="">
</div>
<div class="shop_show">
  <div class="shop_deta">
    <div class="deat_title">
      <span style="color:#b4282d">综合</span>
      <div class="price" @click="price_btn">
        <span>价格</span>
       <van-icon :class="{'active':priceicon==true}"   name="arrow-up" />
       <van-icon :class="{'active':priceicon==false}" name="arrow-down" />
      </div>
      <span>分类</span>
    </div>
    <ul>
      <li v-for="item in shop_detail" :key="item.id">
        <img :src="item.list_pic_url" alt="">
        <p>{{item.name}}</p>
        <span>${{item.retail_price}}</span>
      </li>
    </ul>
  </div>
</div>
</div>
</template>
<script>
import {currentaction} from '../../../api/home/index.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
        //判断价格icon显示
        priceicon:'2',
        //商品内容数组
        shop_detail:[],
        //判断是什么类型
        isNew:'',
        isHot:'',
        order:''
    }
  },
  methods: {
    //返回首页
    onClickLeft(){
      this.$router.push(`${this.previousRouter}`)
    },
     //点击价格变化
  price_btn() {
    if(this.priceicon)  {
      this.priceicon = false 
      this.order = 'desc'
        currentaction({isHot:this.isHot,isNew:this.isNew,order:this.order}).then(res=> {
      console.log(res);
      this.shop_detail = res.data
    })
      return
    }
    if(this.priceicon=='') {
      this.priceicon = true
      this.order = 'asc'
        currentaction({isHot:this.isHot,isNew:this.isNew,order:this.order}).then(res=> {
      console.log(res);
      this.shop_detail = res.data
    })
      return
    }
    if(!this.priceicon) {
      this.priceicon = true
      this.order = 'asc'
        currentaction({isHot:this.isHot,isNew:this.isNew,order:this.order}).then(res=> {
      console.log(res);
      this.shop_detail = res.data
    })
      return
    }
  },

  },
  created () {
    //获取标识
    var ischeck = this.$route.query.isnew
    if(ischeck==1) {
      this.isNew = 1
    } else {
      this.isHot = 1
    }
    //从后台获取数据
    currentaction({isHot:this.isHot,isNew:this.isNew,order:this.order}).then(res=> {
      console.log(res);
      this.shop_detail = res.data
    })
  },
  computed:{
    ...mapState(['previousRouter'])
  }
}
</script>
<style lang="scss" scoped>
.shop_deta {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li{
      width: 50%;
      border-right: 1px solid rgb(224, 222, 222);
      background-color: #fff;
      padding: 0 20px;
      box-sizing: border-box;
      text-align: center;
      border-bottom: 1px solid  rgb(224, 222, 222);
      img {
        width: 100%;
        height: auto;
      }

      p {
        font-weight: 400;
        font-size: 12px;
      }

      span{
        color: #b4282d;
        display: block;
        padding: 5px 0 20px 0;
        font-size: 16px;
        font-weight: 500;
      }
    }

    li:nth(2n) {
      border-right: none;
    }
  }
}
.deat_title {
  display: flex ;
  justify-content: space-evenly;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  border-bottom: 1px solid rgb(224, 222, 222);

  .price {
    position: relative;
    
  
    .van-icon:nth-of-type(1) {
      position: absolute;
      margin-top:11px;
      margin-left: 3px;
      color: #ccc;
    }

    .van-icon:nth-of-type(2) {
      position: absolute;
      margin-top:19px;
       margin-left: 3px;
       color: #ccc;
    }
.active {
  color:#b4282d !important;
}
  }
}

</style>