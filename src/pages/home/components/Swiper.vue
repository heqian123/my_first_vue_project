<template>
   <div class="swiper">
  <swiper :options="swiperOption" class="swiperImg" v-if="showSwiper">

      <swiper-slide v-for="item of list" :key="item.id">
       <img :src="item.imgUrl"/>
     </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</div>

</template>

<script>
  export default{
      name:'HomeSwiper',
      props:{
        list:Array
      },
      data (){
          return{
              swiperOption:{
                autoplay:true,
                speed:5000,
                pagination:'.swiper-pagination',
                loop:true,
  
              }
          
          }
      },
      computed:{
        showSwiper () {
          return this.list.length
        }
      }
  }

</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
  background:#fff!important;
.swiper
  width:100%;
  height:0;
  overflow:hidden;
  padding-bottom:31.25%;
  background:#ccc;


.swiperImg img
  width:100%;
  height: 2.5rem;



</style>