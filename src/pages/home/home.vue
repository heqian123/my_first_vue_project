<template>
 <div>
    <home-header ></home-header>
    <home-swiper :list = "swiperList"></home-swiper>
    <home-icons :list = "iconList"></home-icons>
    <home-recommend :list = "recommendList"></home-recommend>
    <home-weekend :list = "weekendList"></home-weekend>
  </div>
</template>

<script>
 import HomeHeader from './components/Header'
 import HomeSwiper from './components/Swiper'
 import HomeIcons from './components/Icons'
 import HomeRecommend from './components/Recommend'
 import HomeWeekend from './components/Weekend'
 import axios from 'axios'
 import { mapState } from 'vuex'
 export default{
  name:'home',
  components:{   //使用组件
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
 
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
   
      axios.get('/api/index.json?city='+ this.city)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if(res.ret && res.data ){
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;

      }
      console.log(res);
    }

  },
  mounted () {  //页面加载完后执行的
    console.log('mounted');
    this.lastCity = this.city;  //最后选择的城市lastCity；
    this.getHomeInfo();
  },
  activated () {  //当页面重新被显示的时候，比如返回，或者刚进页面，都会显示
     console.log('activated');
     if(this.lastCity != this.city){   //判断重新选择城市
        this.lastCity = this.city;
        this.getHomeInfo();
     }
  }
 }


</script>
<style>


</style>