<template>
<div class="goodlist">
    <van-nav-bar
  title="搜索商品"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="content">
 <div class="img">
   <img src="http://yanxuan.nosdn.127.net/1541445967645114dd75f6b0edc4762d.png" alt="">
   <p>{{data.name}}</p>
 </div>
  
  <div class="dec">
    {{data.simple_desc}}
  </div>


</div>
  <div v-if="list.length==0" class="ract">数据库暂无数据!</div>
  <ul v-else>
    <li v-for="item in list" :key="item.id">
      <img :src="item.list_pic_url" alt="">
      <p>{{item.name}}</p>
      <p>${{item.retail_price}}</p>
    </li>
    <li class="last"></li>
  </ul>
</div>
</template>
<script>
import {detailactions} from '../../../api/category/index.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      data:'',
      list:[]
    }
  },
  methods: {
    //返回上一级
    onClickLeft(){
      this.$router.push(`${this.previousRouter}`)
    }
  },
  created() {
    //获取数据
      console.log(JSON.parse(this.$route.query.item));

    detailactions({id:JSON.parse(this.$route.query.item)}).then(res=>{
      console.log(res);
      this.data = res.data
      this.list = res.goodsList
    })
  },
  computed:{
    ...mapState(['previousRouter'])
  }
}
</script>
<style lang="scss" scoped>
.goodlist{
  height: 100%;
  width: 100%;
  background-color: rgb(243, 243, 243);
}
.content {
  background-color: #fff;
}
.img {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 160px;
  }
  p {
    margin:0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:#fff;
    font-size: 16px;
    border-bottom: 2px solid #fff;
  }
}

.dec {
  font-size: 15px;
  color: #666;
  padding: 15px 20px;
}
.ract {
  color: #999;
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 49%;
    text-align: center;
    background-color: #fff;
    margin-top:5px;
    img {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }

    p:nth-of-type(1){
      margin: 0;
    }
    p:nth-of-type(2){
      color: #b4282d;
      font-size: 15px;
    }
  }
  .last {
    width: 49%;
  }
}
</style>