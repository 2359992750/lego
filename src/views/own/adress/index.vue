<template>
<div class="adress">
  <!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

<span class="text" v-if="list.length==0">暂时没有添加地址哦</span>
<!-- 用户地址 -->
<van-address-list
  @select="selectAdress"
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
</div>
</template>
<script>
import {getListAction,saveAction,detailAction} from '../../../api/own/index.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      //地址列表
      list:[],
      //当前选择的地址id
      chosenAddressId:''
    }
  },
  methods: {
    //点击选中的地址
    selectAdress(item){
      this.$router.push({path:'/addcart/order',query:{
        item
      }})
    },
    //点击返回上一级
    onClickLeft() {
      this.$router.push(`${this.previousRouter}`)
    },
    //点击增加新地址
    onAdd() {
      this.$router.push({path:'/own/addAdress'}).catch(err => { console.log(err) })
    },
    //编辑地址
    onEdit(val){
      this.$router.push({path:'/own/addAdress',query:{
       val
      }})
    }
  },
  created() {
    //获取收货地址列表
    getListAction({openId:localStorage.getItem('openId')}).then(res=> {
       res.data.forEach(item=> {
        item.isDefault = item.is_default==1?true:false
        item.tel = item.mobile
      })
       this.list = res.data
       console.log(this.list);
    })
  },
  computed:{
    ...mapState(['previousRouter'])
  }
}
</script>
<style lang="scss" scoped>
.adress {
  text-align: center;
  .van-nav-bar {
    border-bottom: 1px solid rgb(235, 233, 233);
  }

  .text {
    display: inline-block;
    color: #ccc;
    font-size: 16px;
    margin-top: 100px;
  }
}

</style>