<template>

   <div class="recomend">
    <div class="recomend_title">热门推荐</div>
    <ul class="recomend_list">

      <router-link tag="li"  class="recomend_item" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">  
         <div class="recomend_img">
             <img :src="item.imgUrl" />
       
         </div>
         <div class="recomend_desc">
              <p class="desc_title">{{item.title}}</p>
              <p class="desc_content">{{item.desc}}</p>
              <p class="desc_price"><span class="pic">￥</span><span  class="pic num">2654{{item.price}}</span>起</p>
 
         </div>
      </router-link>

        
    </ul>

   </div>

</template>

<script>
  export default{
      name:'HomeRecommend',
      props:{
          list:Array
      }

  }

</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
.recomend
 width:100%;
 .recomend_title
  background :#f3f3f3;
  line-height :0.8rem;
  text-indent :0.2rem;
 .recomend_item
  border-bottom :1px solid #e0e0e0;
  padding: 0.2rem 0;
  display:flex;
 .recomend_img  img 
    width :1.7rem;
    height :1.6rem;
    margin-left: 0.2rem;
    border-radius: 5px;
 .recomend_desc
  max-width: 5rem;
  margin-left :0.2rem;   
 .recomend_desc .desc_title
  ellipsis()
  font-size: 0.3rem;
  font-weight: bold;
 .recomend_desc .desc_content
  ellipsis()
  color :#999;
  padding 0.3rem 0;
 .recomend_desc .desc_price
   color :#999;
 .recomend_desc .pic
    color :#fb7d0a!important;
   
 .recomend_desc .num  
   font-size :0.4rem;
   padding-right: 0.05rem;
</style>