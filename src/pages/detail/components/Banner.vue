<template>
 <div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner_img" :src="bannerImg">
        <div class="banner_info">
            <div class="banner_wrap">
                <div>{{sightName}}</div>
                <div class="detail_num">
                    <span class="iconfont seach_icon">&#xe704;</span> 99
                </div>
            </div>
        </div>
    </div>
    <!-- 使用动画组件 -->
    <fade-ainimation>
      <common-gallary :imgs="gallaryImgs" v-if="showGallary" @close="handleGallaryClick"></common-gallary>
    </fade-ainimation>  
</div>

</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
import FadeAinimation from '../../../common/fade/Fade'
 export default{
  name:'DetailBanner',
  props:{
      sightName:String,
      bannerImg:'',
      gallaryImgs:Array
  }, 
  components:{  //注册局部组件
      CommonGallary,
      FadeAinimation
  },
  data () {
      return {
          showGallary:false,
        //   imgs:['https://imgs.qunarzz.com/p/tts1/1803/f5/45ab565631024d02.jpg_r_390x260x90_089a0a44.jpg','https://imgs.qunarzz.com/p/tts6/1803/d7/bb70071cf8927b02.jpg_r_390x260x90_c3bf4bdf.jpg']
      }
  },
  methods:{
      handleBannerClick () {
          this.showGallary = true;
      },
      handleGallaryClick () {
          this.showGallary = false;
      }
  }

 }


</script>
<style lang = "stylus" scoped>
    .banner
     overflow :hidden;
     height :0;
     height:4rem;
     position :relative;
     .banner_img 
       width:100%;
       height:4rem;
     .banner_info
      position :absolute;
      bottom :0;
      display :flex;
      width :100%;
      justify-content :space-between;
      align-items :center;
      color: #fff;
      font-size:0.32rem;
      line-height :0.6rem;
      background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
      .banner_wrap{
        padding:0 0.2rem;
        display :flex;
        width :100%;
        justify-content :space-between;
        align-items :center;
      }
  
  


</style>