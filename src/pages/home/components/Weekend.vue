<template>

   <div class="weekend">
    <div class="weekend_title">周末去哪儿</div>
    <ul class="weekend_list">
      <li class="weekend_item" v-for="item of list" :key="item.id">
         <div class="weekend_img">
             <img :src="item.imgUrl" />
         </div>
         <p class="weekend_desc desc_title">{{item.title}}</p>
         <p class="weekend_desc">{{item.desc}}</p>
 
      </li>

        
    </ul>

   </div>

</template>

<script>
  export default{
      name:'HomeWeekend',
      props:{
          list:Array
      }
  
  }

</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'

.weekend
 width:100%;
 .weekend_title
  background :#f3f3f3;
  line-height :0.8rem;
  text-indent :0.2rem;
 .weekend_list
  margin : 0 0.2rem; 
 .weekend_item
  border-bottom :1px solid #e0e0e0;
  padding: 0.2rem 0; 
 .weekend_img img
  width :100%;
  height :3.5rem;
 .weekend_desc
  ellipsis()
  padding-top 0.3rem; 
 .desc_title 
  font-size: 0.3rem;
  font-weight: bold;
</style>