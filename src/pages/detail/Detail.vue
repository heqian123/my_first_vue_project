<template>

 <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list = "list"></detail-list>
    </div>
  </div>


</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
 export default{  // name:'Detail',的作用，1做递归组件的时候用到，2某个页面取消缓存的时候，3，调试的时候会看到组件名字
  name:'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
      return {
          sightName:'',
          bannerImg:'',
          list:[],
          gallaryImgs:[]
      }
  },
  methods : {
    getDetailInfo(){  //this.$route.params.id id存在index的动态路由里
      axios.get('/api/detail.json',{
        params: {
          id:this.$route.params.id
        }
      }).then(this.handleGetDataSucc)

    },
    handleGetDataSucc (res) {
     res = res.data;
     const data = res.data;
     if(res.ret){
       this.sightName = data.sightName;
       this.list = data.categoryList;
       this.bannerImg = data.bannerImg;
       this.gallaryImgs = data.gallaryImgs;

     }
     console.log(data);
    }

  },
  mounted () {  //keep-alive做了缓存，只执行一次
    this.getDetailInfo();
  }

 }


</script>
<style lang = "stylus" scoped>
 .content
  height :50rem;
  background :#fff;
  

</style>