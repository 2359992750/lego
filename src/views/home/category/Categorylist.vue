<template>
<div class="cate">
<!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 导航栏结束 -->

<!-- 商品标签 -->
<van-tabs @click="selectgoods"  v-model="currentnavName" swipeable  >
  <van-tab v-for="item in navList" :key="item.id" :title="item.name" :name="item.id">
    <div class="content">
      <div class="con_title">
        <p>{{item.name}}</p>
        <p>{{item.front_desc}}</p>
      </div>
      <ul>
        <li v-for="item in category" :key="item.id">
          <img :src="item.list_pic_url" alt="">
          <p>{{item.name}}</p>
          <p>${{item.retail_price}}</p>
        </li>
      </ul>
    </div>
  </van-tab>
</van-tabs>
</div>
</template>
<script>
import {category,currentaction} from '../../../api/home/index.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
       navList:[],
       //一开始就展示的内容
       currentnavName:'',
       currentId:'',
       //分类数据
       category:[],
       //跳转id
       changeId:''
       
    }
  },
  methods: {
    //返回首页
    onClickLeft(){
      this.$router.push(`${this.previousRouter}`)
    },
    //从导航栏选取分类
    selectgoods(name){
      this.changeId = name
      this.getNavcontnt()
    },
    //获取导航内容
    getNavcontnt(){
   //获取导航内容
    
    currentaction({categoryId:this.changeId}).then(res=> {
      this.category = res.data
    })
    }
  },
  created() {
    //获取导航nav
    category({id:JSON.parse(this.$route.query.id)}).then(res=>{
      this.navList = res.navData
      this.currentId = res.navData.id
      this.currentnavName = res.currentNav.id
      console.log(res);
    })
    this.changeId = JSON.parse(this.$route.query.id)
    this.getNavcontnt()
  },
  computed:{
    ...mapState(['previousRouter'])
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('commitRouter',from.path)
    next()
  }
}
</script>
<style lang="scss" scoped>
.cate {
  height: 100%;
  width: 100vw;
  background-color: rgb(241, 238, 238);
}



.con_title {
  margin-top: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:nth-of-type(1) {
    margin: 0;
    margin-top: 15px;
    color: #333;
    font-size: 16px;
    font-weight: 400;
  }
   p:nth-of-type(2) {
    color: #999;
  }
}

.content {
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    li {
      width: 50%;
      height: auto;
      border-top: 1px solid rgb(231, 228, 228);
      box-sizing: border-box;
      img {
        width: 100%;
        height: auto;
        padding: 0 15px;
        box-sizing: border-box;
      }
      p:nth-of-type(1) {
        width: 100%;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
      }
       p:nth-of-type(2) {
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #b4282d;
      }
    }

    li:nth-of-type(odd) {
      border-right: 1px solid rgb(236, 235, 235);
    }
  }
}
</style>