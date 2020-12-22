<template>
  <div class="home">
    <!-- 头部导航栏 -->
      <div class="nav">
        <span v-if="cityAdress" @click="searchMap">{{cityAdress.city}}</span>
        <van-icon @click="searchMap" class="adress_icon" v-else name="location-o" />
        <van-search
        @click="searchshop"
         placeholder="搜索商品"
         input-align="center"
       />
      </div>
    <!-- 头部导航栏结束 -->
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#000000" >
     <van-swipe-item v-for="item in banner" :key="item.id"><img :src="item.image_url" alt=""></van-swipe-item>
    </van-swipe>
    <!-- 轮播图结束 -->
    <!-- 商品大类列表 -->
    <van-grid :column-num="5">
       <van-grid-item @click="bigshop(item)" v-for="item in channel" :key="item.id" :icon="item.icon_url" :text="item.name" />
     </van-grid>
     <!-- 商品大类列表结束 -->
     <!-- 商品列表 -->
     <div class="goods">
       <p class="goods_title">品牌制造商直供</p>
       <ul>
         <li @click="searchgoods(item)" v-for="item in goods" :key="item.id"><img :src="item.new_pic_url" alt="">
         <p>{{item.name}}</p>
         <p>{{item.floor_price}}元起</p>
         </li>
       </ul>
     </div>
    <!-- 商品列表结束 -->
    <!-- 新品发布 -->
    <div class="new_goods">
      <span>新品首发</span>
      <a @click="gonewgoods" href="javascript:;">查看全部</a>
    </div>
    <!-- 新品发布结束 -->
    <!-- 新品轮播 -->
  <swiper :options="swiper_tuijian">
      <swiper-slide @click.native="goshopcard(item)" class="tuijian" v-for="item in newGoods" :key="item.id"><img :src="item.list_pic_url">
      <p>{{item.name}}</p>
      <p>{{item.goods_brief}}</p>
      <p>￥{{item.retail_price}}</p>
      </swiper-slide>
       <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <!--以下看需要添加-->
    
    <!-- 新品轮播结束 -->
    <!-- 推荐好物 -->
     <div class="t_goods">
      <span>人气推荐'好物精选</span>
      <a @click="gogoods" href="javascript:;">查看全部</a>
    </div>
   <!-- 推荐轮播 -->
   <!-- 推荐轮播结束 -->
   <swiper :options="swiper_tuijian">
      <swiper-slide @click.native="goshopcard(item)" class="tuijian" v-for="item in hotGoods" :key="item.id">
      <img :src="item.list_pic_url">
      <p>{{item.name}}</p>
      <p>{{item.goods_brief}}</p>
      <p>￥{{item.retail_price}}</p>
      </swiper-slide>
     <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>

    <!-- 推荐好物结束 -->
    <!-- 专题精选 -->
    <div class="topic">
      <div class="t_title">
      <span>专题精选</span><span class="icon"></span>
      </div>
  <!-- 轮播组件 -->

  
    <swiper :options="swiper_topic">
      <swiper-slide @click.native="catedel(item)"  v-for="item in topicList" :key="item.id">
      <img :src="item.item_pic_url">
      <div class="price"><span>{{item.title}}</span><span>{{item.price_info}}元起</span></div>
      <p>{{item.name}}</p>
      <p>{{item.subtitle}}</p>
      </swiper-slide>
       <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
 


    </div>
    <!-- 专题精选结束 -->
    <!-- 居家好物 -->
    <div class="homework">
      <div class="homecat" v-for="item in newCategoryList" :key="item.id">
      <div class="home_title" >
        <span>{{item.name}}好物</span>
      </div>
      <ul class="clear">
        <li @click="goshopcard(value)" v-for="value in item.goodsList" :key="value.id">
          <img :src="value.list_pic_url" alt="">
          <p>{{value.name}}</p>
          <p>￥{{value.retail_price}}</p>
        </li>
        <li class="last" @click="more(item)">
          <p>{{item.name}}好物</p>
          <span></span>
        </li>
      </ul>
      </div>
    </div>
    <!-- 居家好物结束 -->
    <!-- tabbar -->
    <tabbar></tabbar>
    <!-- tabbar结束 -->
  </div>
</template>
<script>
import tabbar from '../../components/Tabbar.vue'
import {mapState} from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2, {Navigation,Scrollbar} from 'swiper';
Swiper2.use([Navigation,Scrollbar]);

import {home} from '@/api/home/index.js'
export default {
  data() {
    return {
      swiper_tuijian: {
      slidesPerView: 2.5,
        scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
     
      },
      swiper_topic: {
      slidesPerView: 1.3,
        spaceBetween: 15,
          scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
        
      },
      //轮播图片数组
      banner:[],
      //商品大类列表
      channel:[],
      //商品列表
      goods:[],
      //新品商品
      newGoods:[],
      //推荐商品
      hotGoods:[],
      //专题精选
      topicList:[],
      //居家好物
      newCategoryList:[]
    }
  },
  methods: {
    //分类详情
    catedel(item) {
      this.$router.push({path:'/catedelc',query:{
        item:JSON.stringify(item),
        topicList:JSON.stringify(this.topicList)
      }})
    },
    //点击进入购物车
    goshopcard(item){
      // category/goshop?id=1006002
      this.$router.push({path:'/category/goshop',query:{
        id:item.id
      }})
    },
    //点击搜索goods专区
    searchgoods(item) {
      console.log(item);
      this.$router.push({path:'/goodslist',query:{
        item:JSON.stringify(item.id)
      }})
    
    },
    //点击进入大类详细界面
    bigshop(value) {
      this.$router.push({path:'/home/Categorylist',query:{
        id:JSON.stringify(value.id)
      }})
    },
    //点击进入搜索页面
    searchshop() {
      this.$router.push({path:'/home/searchshop'})
    },
    //获取首页全部数据
    getData() {
      home().then(res=> {
        console.log(res);
        this.banner = res.banner
        this.channel = res.channel
        this.goods = res.brandList
        this.newGoods = res.newGoods
        this.hotGoods = res.hotGoods
        this.topicList = res.topicList
        this.newCategoryList = res.newCategoryList
      })
    },
    //搜索地址
    searchMap() {
      this.$router.push({path:'/home/search'})
    },
    //进入推荐和新品分类页面
    gonewgoods(){
      this.$router.push({path:'/home/newsgoods',query:{
        isnew:1
      }})
    },
    gogoods(){
      this.$router.push({path:'/home/newsgoods',query:{
        isnew:0
      }})
    },
    //更多好物
    more(value) {
       this.$router.push({path:'/home/Categorylist',query:{
        id:JSON.stringify(value.id)
      }})
    }
  },
  created() {
    this.getData()
  },
  computed: {
    ...mapState(['cityAdress'])
  },
  components:{
    tabbar, Swiper,SwiperSlide
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('commitRouter',from.path)
    next()
  }
 
}
</script>
<style lang="scss">
.my-swipe {
  margin-top: 59.09px;
}
.clear::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
}
.home {
  overflow: hidden;
  height: 100%;
  width: 100vw;
  background-color: #F4F4F4;
}
  .nav {
    position: fixed;
    z-index: 999;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;


  .adress_icon  {
    font-size:16px;
    animation: move 2s infinite;
  }

  @keyframes move {
      0% {
      transform: translateY(-8px);
      }

      50%{
      transform: translateY(8px);
      }

      100% {
      transform: translateY(-8px);
      }

  }
    span {
      display: block;
      width: 50px;
      font-weight: 400;
      font-size: 14px;
      color: #000000;

    }
   .van-field__control--center {
     text-align: left;
     flex: 1;
   }
     .van-search {
       width: 100%;
     }
  }

  .my-swipe img {
    width: 100%;
  }

  .van-swipe__indicator {
    background-color: rgb(151, 148, 148);
  }
  .goods {
   margin-top: 10px;
   background-color: #fff;
   text-align: center;

   .goods_title {
     padding: 20px 0;
   }

   ul {
     display: flex;
     padding: 0 5px;
     justify-content: space-between;
     flex-wrap: wrap;
   }

    ul li {
      width: 49%;
      position: relative;

      p:nth-of-type(1) {
        position: absolute;
        top: 3px;
        left: 5px;
      }
       p:nth-of-type(2) {
        position: absolute;
        top: 20px;
        left: 5px;
        font-size: 13px;
      }
    }

    img {
      width: 100%;
    }
  }

  .new_goods ,.t_goods{
    margin-top: 5px;
    height: 144px;
    width: 100%;
    background-color: #F1F7FD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    span {
      color: #8c9bae;
      font-size: 16px;
      display: block;
      padding: 10px;
    }
    a {
      display: block;
      padding: 6px 23px;
      color: #8c9bae;
      background-color: #d8e4f0;
    }
  }
 
    .swiper-scrollbar {
      height: 4px !important;
    }
  .tuijian{
    text-align: center;
   img {
    width: 100%;
  }

      p:nth-of-type(1) {
        width: 100px;
        font-weight: 700;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 auto;
      }
       p:nth-of-type(2) {
         margin: 0 auto;
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 45px;
        color: #8a8a8a;
        font-size: 13px;
        margin-top: 10px;
      }
       p:nth-of-type(3) {
        color: #9c3232;
        margin-right: 80px;
      }
  }
  .t_goods {
    background: url('data:image/png;base64,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') no-repeat top center;

    span {
      color: #b1a279;
    }
    a {
      color: #b1a279;
      background-color: #f4e9cb;
    }
  }
  .topic {
    margin-top: 20px;
    padding:0  10px;
    height: fit-content;
    .t_title {
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      margin-bottom: 20px;
   .icon {
     display: inline-block;
     margin-left: 10px;
     height: 16px;
     width: 16px;
     background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAAAAAAeW/F+AAAAAnRSTlMA/1uRIrUAAAE1SURBVCjPhVM9a8MwENU/f2BDS06k0Ba62AUthizdYg8txIPbIbOWekggKSVZSgkOGGqZ6+AvyS3xLZbvWed3d+8J7sLkSSh9X4ZJbvqkaJ9lSuhjlpYurCWgsn1RVcU+U4DUFlwvgWjTV+RNBCzrDq4XwJqdWAOLuoVjyCOP4igRN7AGDm3ye8APgGYWXFJf+c3f2vWpZMEpoi7zgquPAY+QsjCEgfMT6GvgDzIihxoumAi3p/5NIRcJMovwT4CHbmKcIRaP2NkNne+hqva8QygIZ6fh0xzP3acg4aFyB/KJeXuq4P0H31jwRPFwRO0OyljULjT2ivjvWAprLO/CzC4O1V3J9XglUwudkMOUmKak2AjZ+u3WETIza2psYExjA9IjE61mlolWIxM1FgzI8yiwLfgLLd4VfbLC0WAAAAAASUVORK5CYII=') no-repeat top center;
     background-size: 100%;
     vertical-align: middle;
     margin-top: -4px;
   }
    }
  
    img {
      width: 100%;
      height: 171px;
    }
    .price {
      display: flex;
      justify-content: space-between;
     span:nth-of-type(1) {
       font-weight: 700;
       font-size:16px;
     }
     span:nth-of-type(2) {
      color: #9c3232;
       font-size: .32rem;
     }
    }
    p{
      color: #8a8a8a;
    }
  
  }

  .homework {
    margin-top: 30px;
    .home_title {
      text-align: center;
      font-size: 12px;
    }

    .homecat {
      margin-top: 20px;
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-top: 10px;
    }
  
    ul li {
      width: 48%;
      background-color: #fff;
     
      img {
        width: 100%;
      }

      p:nth-of-type(1) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: 12px;
      }
       p:nth-of-type(2) {
       color: #9c3232;
      }

    }
      .last {
        text-align: center;
        p{
          margin-top: 45px;
          text-align: center;
          color: #333 !important;
          font-size: 18px !important;
        }
        span {
          height: 50px;
          width: 50px;
          display: inline-block;
          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkiFXSYAAAAVdFJOUwDm8Za4KQn7bBFG18herTkZBHyKTt6+JaAAAAIfSURBVFjDtVjbgqsgDCzXgHhB6/z/ry7a3XPUYg0uy0MfsA4hyUwSH4+/XOPglA6SQDJo5YaxFMA7LbFfUjtfgND0lF4KyjXGj4/Rm8apkHaob5gIc5v+rbt42I6dTsjtzEAwCUFMMfssTiKhmAsE+yQId+6+0QnQ014ZoT57zqvPpswSYbi87RAgT73SEXpO+HwP6vKPHDAxQzcBLmvFyf7ZeRlLZiqAWEDozSdG4lnEhifkITo2oC+kVI9gD6jCF2KkY3eWG6KhWBwGou1tWqgbCqPQbmJSfpM11wTmjRnultS5/4Y0EPYWhhVo/kVpetxb009GeKJ4eWJeBCOR/76VvtR4fUJU/e1Jje4XRF3Pt4TIImrOaRG0hGNAYMWRsqQMGNYTeDnaZUHUekfFTbCkMCpzR7W6dGZmQyPRH8vGvDo1wLCZ+g5iVm9K8PmWQLQ9BEakX0JBV2AE2h2IhUy/wHYP1yv4/QtvdjAwpH+zo8Qfi0P2xfblj4K4LNE9+PQVF35+rAV5zOUHO08X3ql8nnL5svB/OuELk7ejykrIi7c8/RjzPYd/6QdLx6yGbM51jKOnvoUcPukpQ9c1hPmo64z6YnT8XF+q1Lka9bZK3a/Rf1Tpg1I/Fn7bj1XpC2v0p1X65Cr9epW5ocr8UmWOStEJVxPfOjUGcz1XnqPY67myynxbZ84+zPvR35r363x32H7/SC+Le98/itYXKn4o0mvBsDUAAAAASUVORK5CYII=') no-repeat top center;
          background-size: 100%;
        }
      }

  }
</style>