<template>
<div>
  <van-tabbar route  active-color="rgb(195, 85, 89)" inactive-color="#000">
  <van-tabbar-item replace to="/home" icon="home-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/topic" icon="orders-o">
    专题
  </van-tabbar-item>
  <van-tabbar-item replace to="/category" icon="coupon-o">
    分类
  </van-tabbar-item>
  <van-tabbar-item replace to="/addcart" icon="shopping-cart-o">
    购物车
  </van-tabbar-item>
  <van-tabbar-item replace to="/own" icon="friends-o">
    我的
  </van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
export default {

}
</script>
<style lang="scss">

</style>