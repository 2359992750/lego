<template>
<div class="action">
    <!-- 导航栏 -->
 <van-nav-bar
  title="YeYi"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 意见反馈 -->
<div class="mession">
  <span>意见与反馈</span>
  <van-field
  v-model="message"
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="请填写你的意见和反馈"
  show-word-limit
/>
<van-field v-model="value" label="文本" placeholder="邮箱/手机号/微信号" />
<a @click="submit">提交</a>
</div>
</div>
</template>
<script>
import {submitAction} from '../../../api/own/index.js'
export default {
  data() {
    return {
      //意见反馈
      message:'',
      //邮箱手机号
      value:'',
      //用户名字
      name:''
    }
  },
  methods: {
    //返回上一级
    onClickLeft(){
      this.$router.go(-1)
    },
    //提交
    submit() {

      submitAction({
        content:this.message,
        name:this.name,
        openId:localStorage.getItem('openId'),
        phone:this.valule
      }).then(res=> {
        if(res.data){
          this.$toast.success('提交成功');
          this.$router.push({path:'/own'})
        }else{
          this.$toast.fail('提交失败');
        }
      })
    },
  },
  created() {
   this.name=this.$route.query.username;
  },
}
</script>
<style lang="scss" scoped>
.van-nav-bar {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.mession {
  span{
    font-size: 12px;
    display: block;
    margin-left: 10px;
    padding: 10px;
    border-bottom: 1px solid rgb(238, 236, 236);
  }
  .van-field {
    border-bottom: 1px solid rgb(238, 236, 236);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 90%;
    padding: 5px 0;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #b4282d;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
}
</style>