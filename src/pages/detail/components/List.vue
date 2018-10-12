<template>
 <div class="list">
   <div class="item" v-for="(item,index) of list" :key="index">
       <div class="item_title">
          <span class="item_title_icon"> </span>
          {{item.title}}
       </div>
       <!-- 递归组件，一个组件，调用自己，把item.children传给自己，vue的递归组件适用方法 -->
       <div v-if="item.children" class="item_children">
          <detail-list :list = "item.children"></detail-list>
       </div>
   </div>
</div>

</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
 export default{
  name:'DetailList',
  props:{
    list:Array
  },


}

</script>
<style lang = "stylus" scoped>
 .item_title 
  line-height :0.8rem;
  font-size:0.32rem;
  padding:0.2rem;
  border-bottom:1px solid #ccc;
  .item_title_icon{
     margin-left: 1px;
    width: 56px;
    height: 26px;
    line-height: 26px;
    padding-left: 28px;
    background: url(//s.qunarzz.com/travel/travel_notes/detail/icon3.png) 0 0 no-repeat;
    color: #666;
    background-position: -84px -2px;

  }
 .item_children
   padding :0 0.2rem;

</style>