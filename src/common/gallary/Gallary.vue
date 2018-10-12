<template>
 <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
     <swiper  class="swiperImg" :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index" >
        <img class="gallary_img" :src="item"/>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

 export default{
  name:'CommonGallary',
  props:{
    imgs:{
        type:Array,
        default () {
            return []
        }
    }

  },
  data (){
          return{
              swiperOption:{
                pagination:'.swiper-pagination',
                 paginationType:'fraction',
                 observe:true,  //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                 observeParents:true //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
              
  
              }
          
          }
  },
  methods:{
      handleGallaryClick () {
          this.$emit ('close');
      }
  }

 }


</script>
<style lang = "stylus" scoped>
 .container >>> .swiper-container
  overflow :inherit
 .container
  display :flex;
  flex-direction :column;
  justify-content :center;
  z-index :99;
  position :fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background:#000;
  .wrapper
   background :#fff;
   width :100%;
   .gallary_img 
    width :100%;
   .swiper-pagination
    position :absolute;
    color :#fff;
    bottom :-0.5rem!important;


</style>