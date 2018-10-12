<template>
 <div>
   <router-link tag="div" to="/" class="header_abs" v-show="showabs">
       <span class="iconfont header_abs_icon">&#xe60a;</span>
   </router-link>
   <div class="header_fixed" v-show="!showabs" :style="opacityStyle">
       景点详情
   </div>
</div>

</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
 export default{
  name:'DetailHeader',
  data () {
      return {
          showabs:true,
          opacityStyle:{
              opacity:0
          }
      }
  },
  methods: {
      handleScroll () {
          console.log('scroll');
          const topVal = document.documentElement.scrollTop;
          if(topVal>10 && topVal<140){
              let opacity = topVal / 140;
              opacity = opacity > 1 ? 1:opacity;
              this.opacityStyle = { opacity }
              this.showabs = false;
          }else{
               this.showabs = true;
          }
          console.log(document.documentElement.scrollTop);
          
      }

  },
  activated () {  //keep-alive 组件激活时调用。

   window.addEventListener('scroll',this.handleScroll);//监听滚动
  },
  deactivated () {
      window.removeEventListener('scroll',this.handleScroll); //页面隐藏的时候，对全局事件进行解绑
  }


 }


</script>
<style lang = "stylus" scoped>
@import '../../../assets/styles/varibles.styl'
 .header_abs
  display :flex;
  justify-content:center;
  align-items:center;
  position :absolute;
  top:0.2rem;
  left :0.2rem;
  width :0.8rem;
  height :0.8rem;
  border-radius:0.4rem;
  background :rgba(0,0,0,0.8);
  .header_abs_icon
   color :#fff;
   font-size:0.4rem;
 .header_fixed
    z-index :2;
    position :fixed;
    top:0;
    left :0;
    right :0;
    width :100%;
    line-height:$headerHight;
    color:#fff;
    text-align :center;
    background:$bgColor;
    font-size: 0.32rem;


</style>