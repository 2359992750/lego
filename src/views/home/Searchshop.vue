<template>
<div class="searchshop">
  <van-nav-bar
  title="搜索商品"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<form action="/">
  <van-search
  v-model="text"
    show-action
    @input="searchText"
    placeholder="商品搜索"
    @cancel="onCancel"
  />
</form>
<!-- 历史记录 -->
<div v-if="isshow==''">
<div class="history" >
  <div class="h_title">
    <span>历史记录</span>
    <van-icon @click="clearhis" name="delete" />
  </div>
  <ul class="hisData clear">
    <li v-for="(item, index) in hisData" :key="index">{{item.keyword}}</li>
  </ul>
</div>
<div class="hot">
  <div class="h_title">
    <span>热门搜索</span>
  </div>
  <ul class="horsearch clear">
    <li :style="index==0?'color:red;border-color:red':''" v-for="(item, index) in horsearch" :key="index">{{item.keyword}}</li>
  </ul>
</div>
</div>
<!-- 搜索后的数据展示 -->
<div class="search_show" v-if="isshow=='1'">
  <ul>
    <li @click="shopdetail(item)" v-for="item in helpData" :key="item.id">{{item.name}}</li>
  </ul>
</div>
<!-- 点击搜索条目后的数据展示 -->
<div class="shop_show" v-if="isshow=='2'">
  <div class="shop_deta">
    <div class="deat_title">
      <span>综合</span>
      <div class="price" @click="price_btn">
        <span>价格</span>
       <van-icon :class="{'active':priceicon=='true'}"   name="arrow-up" />
       <van-icon :class="{'active':priceicon=='false'}" name="arrow-down" />
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
import {searchHistoryApi,helpSearch,addSearchKey,clearHistory} from '../../api/search_history/index.js'
export default {
data() {
  return {
    //搜索值
    text:'',
    //历史记录数据
    hisData:[],
    //热门搜索数据
    horsearch:[],
    //判断哪个部分显示
    isshow:'',
    //搜索提示数据
    helpData:[],
    //记录价格升降标志的高亮
    priceicon:'',
    //搜索商品信息
    shop_detail:[]
  }
},
methods: {
  //返回主页面
  onClickLeft() {
    this.$router.go(-1)
  },
  //点击搜索并将商品并把关键词存入数据库
  searchText(){
    if(this.text.length>0) {
      this.isshow = 1
    }else {
      this.isshow = ''
    }
    helpSearch({keyword:this.text}).then(res=> {
      this.helpData = res.keywords
      })
   
  },
  //进入商品列表页
  shopdetail(value){
    addSearchKey({keyword:this.text,openId:localStorage.getItem('openId')}).then(res=>{
      console.log(res);
    })
      this.isshow = 2
      this.shop_detail.push(value) 
  },
  //取消搜索
  onCancel(){
    this.$router.push(`${this.previousRouter}`)
  },

  //清除历史数据
  clearhis() {
    clearHistory({openId:localStorage.getItem('openId')}).then(res=>{
      this.hisData = ''
    })
  },
  //获取历史记录数据和关键词
  gethistorydata() {
    searchHistoryApi({openId:localStorage.getItem('openId')}).then(res=>{
      this.hisData = res.historyData
      this.horsearch = res.hotKeywordList
    })
  },
  //点击价格变化
  price_btn() {
    if(this.priceicon)  {
      this.priceicon = false 
      return
    }
    if(this.priceicon=='') {
      this.priceicon = true
      return
    }
    if(!this.priceicon) {
      this.priceicon = true
      return
    }
  },

},
mounted() {
  this.gethistorydata()
},
}
</script>
<style lang="scss" scoped >
.clear::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
}
.searchshop {
  height: 100vh;
  width: 100%;
  background-color: #F4F4F4;
}
  .hot {
    margin-top: 15px;
  }
.history ,.hot{
  background-color: #fff;
  padding-bottom: 10px;

  .h_title {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  span {
    font-size: 12px;
  }
 .van-icon {
   font-size: 16px;
   vertical-align:middle;
 }
  
 .hisData,.horsearch {
   width: 90%;
   margin: 0 auto;

   li{
     margin: 5px 0;
     float: left;
     margin-right: 10px;
     padding: 5px 8px;
     border: 1px solid #999;
   }
 }
}
  .search_show {
    ul {
      padding: 10px;
      li {
        padding: 5px;
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
    }

    .van-icon:nth-of-type(2) {
      position: absolute;
      margin-top:19px;
       margin-left: 3px;
    }
  }
}

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

.active {
  color:#b4282d
}
</style>