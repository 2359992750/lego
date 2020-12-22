<template>
<div id="demo">
  <span>快旋转图片!</span>
     <ul>
            <li v-for="(i,index) in imgArr" :key="index">
                <img :class="{
						rotate0:i.angle==0,
						rotate90:i.angle==90,
						rotate180:i.angle==180,
						rotate270:i.angle==270
					}" v-change-angle="imgArr" :angle="i.angle" :index="index" :src="i.src" />
            </li>
            <!--
					传入的属性值
					angle:默认角度
					index:索引值
					imgArr:图片数组
					src:图片路径
				-->
        </ul>
        <div class="clear"></div>
        <div id="button">
            <p>{{isLogin?"通过验证":"重新验证"}}</p>
            <button @click="login" :disabled="!isLogin" :class="{success:isLogin,failure:!isLogin}">登录</button>
        </div>
</div>
</template>
<script>
export default {
  data() {
    return {
       imgArr: [{
                src: "https://wscats.github.io/vue-tutorial/img/windiest.jpg",
                angle: 90
            }, {
                src: "https://wscats.github.io/vue-tutorial/img/windiest.jpg",
                angle: 270
            }, {
                src: "https://wscats.github.io/vue-tutorial/img/windiest.jpg",
                angle: 0
            }, {
                src: "https://wscats.github.io/vue-tutorial/img/windiest.jpg",
                angle: 180
            }],
   }
  }, 
  computed: {
            isLogin: function() {
                console.log("总角度:", this.imgArr[0].angle + this.imgArr[1].angle + this.imgArr[2].angle + this.imgArr[3].angle);
                var sum = this.imgArr[0].angle + this.imgArr[1].angle + this.imgArr[2].angle + this.imgArr[3].angle;
                if (sum) {
                    return false
                } else {
                    //如果角度为0，则通过
                    return true
                }
            }
        },
        directives: {
            changeAngle: {
                bind: function(el, binding) {
                    el.addEventListener("click", function(e) {
                        //获取图片数组
                        console.log(binding.value)
                        var imgs = binding.value
                            //点解第几张图片
                        console.log(el.getAttribute("index"))
                        var index = el.getAttribute("index");
                        //获取图片默认的角度
                        console.log(el.getAttribute("angle"))
                        var angle = el.getAttribute("angle");
                        console.log(imgs[index].angle)
                            //到达360度后变成初始值0度
                        if (imgs[index].angle == 270) {
                            imgs[index].angle = 0
                        } else {
                            imgs[index].angle += 90
                        }
                    })
                }
            }
        },
        methods: {
            login: function() {
                this.$router.push('/home')
            }
        },
  created() {
  //在本地存储用户信息
     var userInfo = {

      "openId":"17814608780",

      "nickName":"YeYi",

      "avatarUrl":"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2819344467,1935426999&fm=26&gp=0.jpg"
    };

    var openId = userInfo.openId;

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    localStorage.setItem("openId", openId);
},
}
</script>
<style lang="scss" scoped>
body {
  height: 100vh;
  width: 100vw;
  background-color: rgb(247, 246, 246);
  #demo {
        text-align: center;
        width: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        span {
          font-size: 20px;
          background: linear-gradient(to right, red ,blue);
          -webkit-background-clip:text;
          color: transparent;
        }
    }
} 
    
    #demo ul li img {
        width: 100%
    }
    
    #demo ul {
        width: 100%;
        display: flex;
    }
    
    #demo ul li {
        width: 25%;
        height: 100%;
    }
    
    .clear {
        clear: both;
    }
    
    .rotate0 {
        transform: rotate(0);
    }
    
    .rotate90 {
        transform: rotate(90deg);
    }
    
    .rotate180 {
        transform: rotate(180deg);
    }
    
    .rotate270 {
        transform: rotate(270deg);
    }
    
    #button {
        padding: 8px;
    }
    
    #button p {
        color: #009900;
    }
    
    button.success {
        background-color: #F0221C;
        color: white;
        border: none;
        width: 100%;
        height: 40px;
    }
    
    button.failure {
        background-color: #B1B1B1;
        color: white;
        border: none;
        width: 100%;
        height: 40px;
    }
</style>