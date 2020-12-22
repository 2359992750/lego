<template>
    <div class="topic">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check = "false"
            >
            <ul>
                <li class="list" v-for="item in list" :key="item.id">
                    <img :src="item.scene_pic_url" alt="">
                    <p>{{item.title}}</p>
                  <p>{{item.subtitle}}</p>
                  <p>{{item.price_info}}元起</p>
                </li>
            </ul>
        </van-list>

    <!-- 底部tabbar -->
    <tabbar></tabbar>
    </div>


</template>

<script>
import { listaction } from "@/api/topic"
import tabbar from '../../components/Tabbar.vue'
export default {
    data() {
        return {
            list:[],
            loading:false,
            finished:false,
            start:1
        };
    },
    computed: {

    },
    created() {
        this.init();
    },
    mounted() {

    },
    methods: {
        onLoad(){
            // 请求数据
            this.init();
        },
        init(){
            listaction({
                page:this.start  // 3
            })
            .then(res =>{
              console.log(res);
                this.list.push(...res.data);
                this.start++; // 4
                // this.start 当前页数 >  >= res.total  总页数 4
                if(this.start  >  res.total){
                    this.finished = true;
                }
                this.loading = false
            })
        }
    },
    components: {
      tabbar
    },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('commitRouter',from.path)
    next()
  }
};
</script>

<style scoped lang="scss">
.topic{
    .list{
        img{
            width: 100%;
        }
        p {
          width: 100%;
          text-align: center;
        }

        p:nth-of-type(1) {
          color: #333;
          font-weight: 400;
          font-size: 16px;
        }
         p:nth-of-type(2) {
          color: #999;
          font-size: 12px;
        }
         p:nth-of-type(3) {
          color: #b4282d;
          font-size: 14px;
        }
    }
}
</style>
