<template>
<div class="address">
      <!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div>
<van-field v-model="name" label="姓名" placeholder="请输入姓名"/>
<van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
  <van-field
  @click="isshow"
    v-model="adress"
    label="住址"
    right-icon="arrow"
    placeholder="省份,城市,地区"
  />
<van-field v-model="detailadress" label="详细地址" placeholder="详细地址,如楼道,楼盘号等"/>
<van-checkbox v-model="isDefault" shape="square">设置为默认地址</van-checkbox>
</div>
<van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
<van-area @cancel="cancel" @confirm="confirm" :area-list="areaList" />
</van-popup>
<van-button @click="submitData" style="background-color:#b4282d;color:#fff">保存</van-button>
<van-button @click="delData" type="warning">删除</van-button>
</div>
</template>
<script>
import {saveAction,deleteAction} from '../../../../api/own/index.js'
import city from '../../../../assets/js/city.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      //省市区地址
      areaList:'',
      //地址id
      id:'',
      //姓名
      name:'',
      tel:'',
      //地区
      adress:'',
      //详细地址
      detailadress:'',
      //设置为默认地址
      isDefault:false,
      //显示地址
      show:false

    }
  },
  methods: {
    //删除地址时触发
    delData() {
     deleteAction({id:this.id}).then(res=>{
       console.log(res);
       this.$router.push({path:'/own/adress'})
     })
    },
    //保存地址时触发
    submitData() {
      saveAction({
        address:this.adress,
        addressId:this.id,
        checked:this.isDefault,
        detailadress:this.detailadress,
        openId:localStorage.getItem('openId'),
        telNumber:this.tel,
        userName:this.name
      }).then(res=> {
        console.log(res);
        this.$router.push({path:'/own/adress'})
      })
    },
    //弹出地址栏
    isshow(){
      this.show = true
    },
    //取消选择城市
    cancel(){
      this.show = false
    },
    //点击确认是确定地址
    confirm(val) {
      this.show = false
      this.adress = ''
      val.forEach(e => {
         this.adress +=e.name+" "
      });
    },
    onClickLeft() {
      this.$router.push(`${this.previousRouter}`)
    }
  
  },
  created() {
    this.areaList = city  
    //判断是新增还是修改
    if(this.$route.query.val) {
    this.name = this.$route.query.val.name
    this.tel  = this.$route.query.val.mobile
    this.adress = this.$route.query.val.address
    this.detailadress = this.$route.query.val.address_detail
    this.id = this.$route.query.val.id
    }
  },
  computed:{
    ...mapState(['previousRouter'])
  }
}
</script>
<style lang="scss" scoped>
.address {
  height: 100vh;
  position: relative;
  .van-button {
    position: absolute;
    bottom: 0;
    padding: 8px 0;
    width: 100%;
    text-align: center;
    display: block;
  }
  .van-button:nth-of-type(1) {
    bottom: 43px;
  }
}
.van-checkbox {
  margin-top: 20px;
  margin-left: 30px;
}
</style>