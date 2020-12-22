<template>
<div class="adress">
  <van-nav-bar
  title="选择地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

<van-search v-model="search" placeholder="请输入搜索关键词" />
<!-- 返回的搜索数据 -->
<ul class="history">
  <li @click="getAdress(item)" v-for="(item,index) in list" :key="index">
    <span>{{item.title}}</span><span>地址:{{item.address}}</span></li></ul>
<!-- 地图 -->
<div id="allmap" style="width:100%;height:200px;"></div>
</div>
</template>
<script>
import {mapState,mapMutations, createLogger} from 'vuex'
export default {
  data() {
    return {
    search:'',
    //检索返回的数据集
    list:[],
    //设置公共map
    map:''
    }
  },
  methods: {
    //返回主菜单
    onClickLeft() {
      this.$router.push(`${this.previousRouter}`)
    },
    //点击获取搜索的详细地址并跳转
    getAdress(value) {
      this.$store.commit('commitInfo', value)
     //跳转到首页
     this.$router.push({path:'/home'})
    }
  },
  watch: {
    search(){
      console.log(111);
          var _this = this;

	var options = {
		onSearchComplete: function(results){
			// 判断状态是否正确
			if (local.getStatus() == BMAP_STATUS_SUCCESS){
        console.log(results);
			 _this.list = results.Hr
			}
		}
	};
	var local = new BMap.LocalSearch(this.map, options);
	local.search(this.search);
    }

  },
  mounted() {
      var _this = this;
   _this.map = new BMap.Map("allmap");

   if(this.$store.state.cityAdress){
     const lat = this.$store.state.cityAdress.pointN.lat
     const lng = this.$store.state.cityAdress.pointN.lng
      var point = new BMap.Point(lat,lng);
   }else {
     //vuex中没有数据时初始化定位坐标
       var point = new BMap.Point(116.331398,39.897445);
   }
       _this.map.centerAndZoom(point,12);
       var geolocation = new BMap.Geolocation();
       geolocation.getCurrentPosition(function(r){
         if(this.getStatus() == BMAP_STATUS_SUCCESS){
           var mk = new BMap.Marker(r.point);
           _this.map.addOverlay(mk);
           _this.map.panTo(r.point);
         }
         else {
           alert('failed'+this.getStatus());
         }        
       },{enableHighAccuracy: true})
  },
  computed:{
    ...mapState(['previousRouter'])
  }

}
</script>
<style lang="scss">
.adress {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
#allmap {
  position: absolute;
  bottom: 0;
}

.history {
   overflow-y: scroll;
   flex:1;
   margin-bottom: 200px;

   li {
     height: auto;
     width: 100%;
      span {
        display: block;
        margin-left: 30px;
        
      }
     span:nth-of-type(1) {
       font-size: 14px;
       font-weight: 700;
       margin-top: 10px;
     }
   }
}
}
</style>