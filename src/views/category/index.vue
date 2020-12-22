<template>
<div>
  <!-- 搜索框 -->
  <van-search
  @click="gosearchshop"
  v-model="search_value"
  placeholder="商品搜索,共239款好物"
  input-align="center"
/>
<!-- 侧边栏 -->
<van-sidebar v-model="currentIndex" @change="onChange">
  <van-sidebar-item @click="getId(item.id)" :class="currentIndex==index?'active':''" v-for="(item,index) in slider" :key="index" :title="item.name" />
</van-sidebar>
<!-- 商品栏目 -->
<div class="banner">
<img :src="slider.length>0?slider[currentIndex].banner_url:''" alt="">
</div>
<div class="goodsList">
  <div class="g_title">一<span>{{slider.length>0?slider[currentIndex].name:''}}分类</span>一</div>
  <ul>
    <li @click="goCatPage(item)" v-for="item in content" :key="item.id">
      <img :src="item.wap_banner_url" alt="">
      <p>{{item.name}}</p>
    </li>
  </ul>
</div>
<!-- 底部 -->
<tabbar></tabbar>
</div>
</template>
<script>
import tabbar from '../../components/Tabbar.vue'
import {indexaction,currentaction} from '../../api/category/index.js'

export default {
data() {
  return {
    // //从后台返回一共多少条数据
    // search_title:'',
    //搜索的值
    search_value:'',
    //侧边栏数组
    slider:[],
    //当前侧边栏下标
    currentIndex: '0',
    //初始化页面是要展示的分类列表内容id
    catId:'',
    //展示内容数组
    content:[],
  }
},
methods: {
  //点击商品进入分类子页面
  goCatPage(value){
    this.$router.push({path:'/category/categorylist',query:{
      id:value.id
    }})
  },
  //点击跳转到搜索商品页面
  gosearchshop() {
    this.$router.push({path:'/home/searchshop'})
  },
  //侧边栏监听事件
  onChange(value){
      this.currentIndex = value
      this.$store.commit('commitIndex', value)
  },
  //获取点击的分类id
  getId(id) {
    this.catId = id
    this.getContent()
    this.$store.commit('commintCatID', id)
  },
  //根据id获取分类的内容
  //如果vuex中存在id数据的话,就用vuex的数据
  getContent(){
    console.log("获取跳转id",this.catId);
    currentaction({id:this.catId}).then(res=>{
      this.content = res.data.currentOne.subList
  })
  }
  
},
created () {
  //获取分类导航数据
  indexaction().then(res=> {
    this.slider = res.categoryList  
    
   if(this.$store.state.catId){
     this.catId = this.$store.state.catId
     this.currentIndex = this.$store.state.index
     console.log("vuex中获取id",this.catId);
   }else{
     this.catId = res.categoryList[0].id
   }
   console.log("this.catId",this.catId);
    this.getContent()
  })
},
components:{
  tabbar
},
  beforeRouteLeave (to, from, next) {
    this.$store.commit('commitRouter',from.path)
    next()
  }
}
</script>
<style lang="scss" scoped>
.active {
  font-size: 17px;
  color: #ab2b2b;
  animation: change 0.4s ease-in-out forwards;
}

.van-sidebar-item--select::before {
  height: 40px;
}

.van-search {
  border-bottom: 1px solid #e7e6e6;
  margin-bottom: 10px;
}

.van-sidebar-item {
  padding: 0;
  height: 50px;
  width: 60px;
  text-align: center;
  line-height: 50px;
}
@keyframes change{
    0% {
      transform: scale(1);
    }  

    50%{
      transform: scale(1.01);
    }

    100%{
      transform: scale(1.04);
    }
}
.van-sidebar {
  float: left;
}
.banner {

  img {
    width: 285px;
  }
}
.goodsList {
  text-align: center;

  .g_title {
    padding: 30px 0;
    color: #999;

    span {
        color: #333;
        font-size: 12px;
        font-weight: 400;
    }
  }

  ul {
    display: flex;
   
    flex-wrap: wrap;
    li {
      width: 33%;
      height: auto;
      padding: 0 10px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>