<template>
    <div class="header">
          <router-link to="/">
           <div class="header-left">
                <span class="iconfont balck_icon">&#xe60a;</span>
            </div>
         </router-link>
        城市选择
    </div> 
</template>
<script>
 export default {
     name:'CityHeader'
 }
</script>
<style lang = "stylus" scoped>
@import '../../../assets/styles/varibles.styl'
 .header
   position :relative;
   display:flex;
   line-height:$headerHight;
   color:#fff;
   background:$bgColor;
   justify-content: center;
   font-size: 0.3rem;

 .header-left 
  position :absolute;
  left :.2rem;
  color:#fff!important;
</style>