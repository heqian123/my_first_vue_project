<template>
  <div class="icons">
    <swiper  :options="swiperOption" v-if="showIcons">
        <swiper-slide v-for="(page,index) of page" :key="index">
            <div class="icon"  v-for="item of page" :key="item.id">
                <div class="icon_img">
                    <img  :src="item.imgUrl"/>
                </div>
                <p>{{item.desc}}</p>
            </div>
        </swiper-slide>

    </swiper>


  </div>
</template>


<script>
  export default{
   name:'HomeIcons',
   props:{
       list:''
   },
   data () {
       return {
           swiperOption:{
              autoplay:false
           }
       }
   },
   //计算属性
   computed:{
     page () {
         const pages = [];
         this.list.forEach((item,index) =>{
             const page = Math.floor(index/8);
             if(!pages[page]){
                 pages[page] = [];
             }
             pages[page].push(item);
         })
         return pages
     },
     showIcons () {
         return this.list.length;
     }
   }

  }

</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.icons >>> .swiper-container{
    height:0;
    padding-bottom:50%;
}
.icons
    overflow:hidden
    height:0
    padding-bottom:50%
 .icon
    float:left;
    width:25%;
    background:#fff;
    text-align: center
    
.icon_img img
    width:0.9rem;
    height:0.9rem;
    padding: 0.24rem 0;

.icon p
  ellipsis()
  color:$color333;
  padding-bottom:0.2rem;
  font-size:0.3rem;


  

</style>